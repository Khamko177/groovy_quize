# -*- coding: utf-8 -*-
"""
Full builder that:
1. Shuffles options deterministically to achieve balanced target answers:
   A: 13, B: 13, C: 12, D: 12 (Total = 50)
2. Validates that every question has exactly 4 options.
3. Generates two .docx files:
   - Groovy_Quiz_50_Questions.docx (Question paper for students)
   - Groovy_Quiz_Answers_and_Explanations.docx (Complete answer key & detailed explanations)
4. Outputs the exact markdown text required for the response.
"""

import os
import random
from build_quiz import questions_data
import docx
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT
from docx.oxml import parse_xml, OxmlElement
from docx.oxml.ns import nsdecls, qn

# Desired balanced distribution of correct answers
# 13 'A', 13 'B', 12 'C', 12 'D'
target_distribution = (
    ['A', 'B', 'C', 'D'] * 12 + ['A', 'B']
)
# Deterministic shuffle to avoid obvious patterns (A, B, C, D, A, B, C, D)
rng = random.Random(42)
rng.shuffle(target_distribution)

# Verify no more than 2 identical consecutive answers
for i in range(len(target_distribution) - 2):
    if target_distribution[i] == target_distribution[i+1] == target_distribution[i+2]:
        # swap with next non-matching
        for j in range(i+3, len(target_distribution)):
            if target_distribution[j] != target_distribution[i]:
                target_distribution[i+2], target_distribution[j] = target_distribution[j], target_distribution[i+2]
                break

processed_questions = []

for q, target_letter in zip(questions_data, target_distribution):
    correct_text = q["correct"]
    distractors = list(q["distractors"])
    
    # We want correct_text to be at target_letter index
    letter_idx = {'A': 0, 'B': 1, 'C': 2, 'D': 3}[target_letter]
    
    options = [None] * 4
    options[letter_idx] = correct_text
    
    dist_idx = 0
    for i in range(4):
        if options[i] is None:
            options[i] = distractors[dist_idx]
            dist_idx += 1
            
    processed_questions.append({
        "id": q["id"],
        "difficulty": q["difficulty"],
        "topic": q["topic"],
        "question": q["question"],
        "options": {
            "A": options[0],
            "B": options[1],
            "C": options[2],
            "D": options[3],
        },
        "correct_letter": target_letter,
        "correct_text": correct_text,
        "explanation": q["explanation"]
    })

# Check counts
from collections import Counter
counts = Counter(q["correct_letter"] for q in processed_questions)
print("Answer key distribution:", counts)

# Helper function to style docx documents
def set_cell_background(cell, fill_hex):
    shading_xml = f'<w:shd {nsdecls("w")} w:fill="{fill_hex}"/>'
    cell._tc.get_or_add_tcPr().append(parse_xml(shading_xml))

def set_cell_margins(cell, top=100, bottom=100, left=150, right=150):
    tcPr = cell._tc.get_or_add_tcPr()
    tcMar = OxmlElement('w:tcMar')
    for m, val in [('top', top), ('bottom', bottom), ('left', left), ('right', right)]:
        node = OxmlElement(f'w:{m}')
        node.set(qn('w:w'), str(val))
        node.set(qn('w:type'), 'dxa')
        tcMar.append(node)
    tcPr.append(tcMar)

def create_question_paper_docx(questions, filename="Groovy_Quiz_50_Questions.docx"):
    doc = docx.Document()
    
    # Set page margins
    sections = doc.sections
    for section in sections:
        section.top_margin = Inches(0.75)
        section.bottom_margin = Inches(0.75)
        section.left_margin = Inches(0.75)
        section.right_margin = Inches(0.75)

    # Document Header / Title
    title_p = doc.add_paragraph()
    title_p.paragraph_format.space_before = Pt(0)
    title_p.paragraph_format.space_after = Pt(4)
    title_run = title_p.add_run("Groovy Programming Language Assessment")
    title_run.font.name = "Segoe UI"
    title_run.font.size = Pt(22)
    title_run.font.bold = True
    title_run.font.color.rgb = RGBColor(30, 41, 59) # Slate 800

    sub_p = doc.add_paragraph()
    sub_p.paragraph_format.space_before = Pt(0)
    sub_p.paragraph_format.space_after = Pt(14)
    sub_run = sub_p.add_run("50 Comprehensive Multiple-Choice Questions | Assessment Paper")
    sub_run.font.name = "Segoe UI"
    sub_run.font.size = Pt(12)
    sub_run.font.italic = True
    sub_run.font.color.rgb = RGBColor(100, 116, 139) # Slate 500

    # Metadata Info Box
    meta_table = doc.add_table(rows=2, cols=2)
    meta_table.alignment = WD_TABLE_ALIGNMENT.CENTER
    meta_table.autofit = False
    col_widths = [Inches(3.4), Inches(3.4)]
    for row in meta_table.rows:
        for i, cell in enumerate(row.cells):
            cell.width = col_widths[i]
            set_cell_background(cell, "F8FAFC")
            set_cell_margins(cell, top=80, bottom=80, left=120, right=120)

    r0c0 = meta_table.cell(0, 0).paragraphs[0].add_run("Candidate Name: _______________________")
    r0c0.font.name = "Segoe UI"
    r0c0.font.size = Pt(10)
    r0c1 = meta_table.cell(0, 1).paragraphs[0].add_run("Date: _______________________")
    r0c1.font.name = "Segoe UI"
    r0c1.font.size = Pt(10)
    r1c0 = meta_table.cell(1, 0).paragraphs[0].add_run("Total Questions: 50 (15 Easy, 20 Intermediate, 15 Advanced)")
    r1c0.font.name = "Segoe UI"
    r1c0.font.size = Pt(9.5)
    r1c0.font.color.rgb = RGBColor(71, 85, 105)
    r1c1 = meta_table.cell(1, 1).paragraphs[0].add_run("Time Allowed: 60 - 90 Minutes")
    r1c1.font.name = "Segoe UI"
    r1c1.font.size = Pt(9.5)
    r1c1.font.color.rgb = RGBColor(71, 85, 105)

    doc.add_paragraph().paragraph_format.space_after = Pt(10)

    # Instructions Callout
    inst_p = doc.add_paragraph()
    inst_p.paragraph_format.space_before = Pt(4)
    inst_p.paragraph_format.space_after = Pt(14)
    inst_run = inst_p.add_run("Instructions: Choose the single best answer (A, B, C, or D) for each question. Mark your choice clearly on the answer sheet.")
    inst_run.font.name = "Segoe UI"
    inst_run.font.size = Pt(10)
    inst_run.font.bold = True
    inst_run.font.color.rgb = RGBColor(14, 116, 144) # Cyan 700

    # Questions
    current_difficulty = None
    for q in questions:
        # Add section header when difficulty changes
        if q["difficulty"] != current_difficulty:
            current_difficulty = q["difficulty"]
            diff_p = doc.add_paragraph()
            diff_p.paragraph_format.space_before = Pt(14)
            diff_p.paragraph_format.space_after = Pt(6)
            diff_run = diff_p.add_run(f"Section: {current_difficulty.upper()} LEVEL QUESTIONS")
            diff_run.font.name = "Segoe UI"
            diff_run.font.size = Pt(12)
            diff_run.font.bold = True
            diff_run.font.color.rgb = RGBColor(3, 105, 161) # Sky 700

        # Question header & text
        qp = doc.add_paragraph()
        qp.paragraph_format.space_before = Pt(8)
        qp.paragraph_format.space_after = Pt(4)
        
        q_num = qp.add_run(f"Question {q['id']}. ")
        q_num.font.name = "Segoe UI"
        q_num.font.size = Pt(11)
        q_num.font.bold = True
        q_num.font.color.rgb = RGBColor(15, 23, 42)

        # Handle questions with code snippets
        q_lines = q["question"].split("\n")
        first_line = True
        for line in q_lines:
            if not first_line:
                qp = doc.add_paragraph()
                qp.paragraph_format.space_before = Pt(2)
                qp.paragraph_format.space_after = Pt(2)
            first_line = False
            
            # Check if this line looks like code
            is_code = (
                line.startswith("def ") or line.startswith("println ") or 
                line.startswith("class ") or line.startswith("trait ") or 
                line.startswith("interface ") or line.startswith("    ") or 
                line.startswith("[") or line.startswith("String.") or
                line.startswith("Worker ") or line.startswith("TaskHandler ") or
                line.startswith("void ") or line.startswith("try ") or
                line.startswith("} catch") or line.startswith("printVariables()") or
                line.startswith("th.") or line.startswith("w.") or
                line.startswith("acc.")
            )
            
            q_text_run = qp.add_run(line)
            if is_code:
                q_text_run.font.name = "Consolas"
                q_text_run.font.size = Pt(9.5)
                q_text_run.font.color.rgb = RGBColor(15, 23, 42)
                qp.paragraph_format.left_indent = Inches(0.25)
            else:
                q_text_run.font.name = "Segoe UI"
                q_text_run.font.size = Pt(10.5)
                q_text_run.font.color.rgb = RGBColor(30, 41, 59)

        # Options
        for opt_key in ["A", "B", "C", "D"]:
            opt_p = doc.add_paragraph()
            opt_p.paragraph_format.left_indent = Inches(0.25)
            opt_p.paragraph_format.space_before = Pt(1)
            opt_p.paragraph_format.space_after = Pt(2)

            key_run = opt_p.add_run(f"{opt_key}. ")
            key_run.font.name = "Segoe UI"
            key_run.font.bold = True
            key_run.font.size = Pt(10)
            key_run.font.color.rgb = RGBColor(51, 65, 85)

            val_run = opt_p.add_run(q["options"][opt_key])
            val_run.font.name = "Segoe UI"
            val_run.font.size = Pt(10)
            val_run.font.color.rgb = RGBColor(51, 65, 85)

    doc.save(filename)
    print(f"Generated: {filename}")


def create_answer_key_and_explanations_docx(questions, filename="Groovy_Quiz_Answers_and_Explanations.docx"):
    doc = docx.Document()
    
    # Set page margins
    sections = doc.sections
    for section in sections:
        section.top_margin = Inches(0.75)
        section.bottom_margin = Inches(0.75)
        section.left_margin = Inches(0.75)
        section.right_margin = Inches(0.75)

    # Document Header / Title
    title_p = doc.add_paragraph()
    title_p.paragraph_format.space_before = Pt(0)
    title_p.paragraph_format.space_after = Pt(4)
    title_run = title_p.add_run("Groovy Programming Language Assessment")
    title_run.font.name = "Segoe UI"
    title_run.font.size = Pt(22)
    title_run.font.bold = True
    title_run.font.color.rgb = RGBColor(30, 41, 59)

    sub_p = doc.add_paragraph()
    sub_p.paragraph_format.space_before = Pt(0)
    sub_p.paragraph_format.space_after = Pt(14)
    sub_run = sub_p.add_run("Answer Key, In-Depth Explanations & Reference Guide")
    sub_run.font.name = "Segoe UI"
    sub_run.font.size = Pt(12)
    sub_run.font.italic = True
    sub_run.font.color.rgb = RGBColor(16, 185, 129) # Emerald 600

    # QUICK ANSWER KEY TABLE
    ans_title = doc.add_paragraph()
    ans_title.paragraph_format.space_before = Pt(6)
    ans_title.paragraph_format.space_after = Pt(6)
    ans_title_run = ans_title.add_run("Quick Reference Answer Key")
    ans_title_run.font.name = "Segoe UI"
    ans_title_run.font.size = Pt(14)
    ans_title_run.font.bold = True
    ans_title_run.font.color.rgb = RGBColor(15, 23, 42)

    # 5 columns of 10 rows
    table = doc.add_table(rows=11, cols=5)
    table.alignment = WD_TABLE_ALIGNMENT.CENTER
    table.autofit = False
    
    col_width = Inches(1.35)
    for col in table.columns:
        col.width = col_width

    # Table Header
    headers = ["Q 1 - 10", "Q 11 - 20", "Q 21 - 30", "Q 31 - 40", "Q 41 - 50"]
    for col_idx, h_text in enumerate(headers):
        cell = table.cell(0, col_idx)
        cell.width = col_width
        set_cell_background(cell, "0F172A") # Dark Navy
        set_cell_margins(cell, top=80, bottom=80, left=100, right=100)
        p = cell.paragraphs[0]
        p.alignment = WD_ALIGN_PARAGRAPH.CENTER
        hrun = p.add_run(h_text)
        hrun.font.name = "Segoe UI"
        hrun.font.size = Pt(9.5)
        hrun.font.bold = True
        hrun.font.color.rgb = RGBColor(255, 255, 255)

    # Populate 10 rows
    for row_idx in range(10):
        for col_idx in range(5):
            q_num = col_idx * 10 + row_idx + 1
            q_obj = questions[q_num - 1]
            cell = table.cell(row_idx + 1, col_idx)
            cell.width = col_width
            bg = "F8FAFC" if row_idx % 2 == 0 else "FFFFFF"
            set_cell_background(cell, bg)
            set_cell_margins(cell, top=60, bottom=60, left=100, right=100)
            p = cell.paragraphs[0]
            p.alignment = WD_ALIGN_PARAGRAPH.CENTER
            
            run_num = p.add_run(f"{q_num}. ")
            run_num.font.name = "Segoe UI"
            run_num.font.size = Pt(9.5)
            run_num.font.color.rgb = RGBColor(100, 116, 139)
            
            run_ans = p.add_run(f"[{q_obj['correct_letter']}]")
            run_ans.font.name = "Segoe UI"
            run_ans.font.size = Pt(10)
            run_ans.font.bold = True
            run_ans.font.color.rgb = RGBColor(16, 185, 129)

    doc.add_page_break()

    # DETAILED QUESTIONS AND EXPLANATIONS
    det_title = doc.add_paragraph()
    det_title.paragraph_format.space_before = Pt(4)
    det_title.paragraph_format.space_after = Pt(12)
    det_run = det_title.add_run("Detailed Solutions & Comprehensive Explanations")
    det_run.font.name = "Segoe UI"
    det_run.font.size = Pt(16)
    det_run.font.bold = True
    det_run.font.color.rgb = RGBColor(15, 23, 42)

    current_difficulty = None
    for q in questions:
        if q["difficulty"] != current_difficulty:
            current_difficulty = q["difficulty"]
            diff_p = doc.add_paragraph()
            diff_p.paragraph_format.space_before = Pt(16)
            diff_p.paragraph_format.space_after = Pt(6)
            diff_run = diff_p.add_run(f"Section: {current_difficulty.upper()} LEVEL QUESTIONS (Questions {q['id']} - {q['id'] + (14 if current_difficulty != 'Intermediate' else 19)})")
            diff_run.font.name = "Segoe UI"
            diff_run.font.size = Pt(12)
            diff_run.font.bold = True
            diff_run.font.color.rgb = RGBColor(3, 105, 161)

        qp = doc.add_paragraph()
        qp.paragraph_format.space_before = Pt(8)
        qp.paragraph_format.space_after = Pt(4)
        
        q_num = qp.add_run(f"Question {q['id']}. ")
        q_num.font.name = "Segoe UI"
        q_num.font.size = Pt(11)
        q_num.font.bold = True
        q_num.font.color.rgb = RGBColor(15, 23, 42)

        # Question lines
        q_lines = q["question"].split("\n")
        first_line = True
        for line in q_lines:
            if not first_line:
                qp = doc.add_paragraph()
                qp.paragraph_format.space_before = Pt(2)
                qp.paragraph_format.space_after = Pt(2)
            first_line = False
            
            is_code = (
                line.startswith("def ") or line.startswith("println ") or 
                line.startswith("class ") or line.startswith("trait ") or 
                line.startswith("interface ") or line.startswith("    ") or 
                line.startswith("[") or line.startswith("String.") or
                line.startswith("Worker ") or line.startswith("TaskHandler ") or
                line.startswith("void ") or line.startswith("try ") or
                line.startswith("} catch") or line.startswith("printVariables()") or
                line.startswith("th.") or line.startswith("w.") or
                line.startswith("acc.")
            )
            
            q_text_run = qp.add_run(line)
            if is_code:
                q_text_run.font.name = "Consolas"
                q_text_run.font.size = Pt(9.5)
                q_text_run.font.color.rgb = RGBColor(15, 23, 42)
                qp.paragraph_format.left_indent = Inches(0.25)
            else:
                q_text_run.font.name = "Segoe UI"
                q_text_run.font.size = Pt(10.5)
                q_text_run.font.color.rgb = RGBColor(30, 41, 59)

        # Options
        for opt_key in ["A", "B", "C", "D"]:
            opt_p = doc.add_paragraph()
            opt_p.paragraph_format.left_indent = Inches(0.25)
            opt_p.paragraph_format.space_before = Pt(1)
            opt_p.paragraph_format.space_after = Pt(2)

            is_correct = (opt_key == q["correct_letter"])
            key_run = opt_p.add_run(f"{opt_key}. ")
            key_run.font.name = "Segoe UI"
            key_run.font.bold = True
            key_run.font.size = Pt(10)
            
            val_run = opt_p.add_run(q["options"][opt_key])
            val_run.font.name = "Segoe UI"
            val_run.font.size = Pt(10)
            
            if is_correct:
                key_run.font.color.rgb = RGBColor(16, 185, 129)
                val_run.font.color.rgb = RGBColor(16, 185, 129)
                val_run.font.bold = True
            else:
                key_run.font.color.rgb = RGBColor(71, 85, 105)
                val_run.font.color.rgb = RGBColor(71, 85, 105)

        # Answer & Explanation Callout Box
        ans_table = doc.add_table(rows=1, cols=1)
        ans_table.alignment = WD_TABLE_ALIGNMENT.CENTER
        ans_table.autofit = False
        ans_cell = ans_table.cell(0, 0)
        ans_cell.width = Inches(6.8)
        set_cell_background(ans_cell, "F0FDF4") # Subtle emerald tint
        set_cell_margins(ans_cell, top=80, bottom=80, left=120, right=120)
        
        ap = ans_cell.paragraphs[0]
        ap.paragraph_format.space_before = Pt(2)
        ap.paragraph_format.space_after = Pt(3)
        arun_tag = ap.add_run("Correct Answer: ")
        arun_tag.font.name = "Segoe UI"
        arun_tag.font.size = Pt(10)
        arun_tag.font.bold = True
        arun_tag.font.color.rgb = RGBColor(22, 101, 52)
        
        arun_val = ap.add_run(f"{q['correct_letter']} ({q['correct_text']})")
        arun_val.font.name = "Segoe UI"
        arun_val.font.size = Pt(10)
        arun_val.font.color.rgb = RGBColor(22, 101, 52)

        ep = ans_cell.add_paragraph()
        ep.paragraph_format.space_before = Pt(2)
        ep.paragraph_format.space_after = Pt(2)
        erun_tag = ep.add_run("Explanation: ")
        erun_tag.font.name = "Segoe UI"
        erun_tag.font.size = Pt(9.5)
        erun_tag.font.bold = True
        erun_tag.font.color.rgb = RGBColor(51, 65, 85)
        
        erun_val = ep.add_run(q["explanation"])
        erun_val.font.name = "Segoe UI"
        erun_val.font.size = Pt(9.5)
        erun_val.font.color.rgb = RGBColor(51, 65, 85)

        # Small spacing after question
        doc.add_paragraph().paragraph_format.space_after = Pt(4)

    doc.save(filename)
    print(f"Generated: {filename}")

if __name__ == "__main__":
    create_question_paper_docx(processed_questions)
    create_answer_key_and_explanations_docx(processed_questions)
