# 🚀 Groovy 50-Question Assessment & Interactive Multilingual Quiz App

A comprehensive assessment covering 50 multiple-choice questions for the **Groovy programming language**. Includes an interactive multilingual web application (English, Vietnamese, Thai) and professional Microsoft Word (`.docx`) test papers.

---

## 🌟 Key Features

- **50 Comprehensive Multiple-Choice Questions**:
  - **15 Easy**, **20 Intermediate**, and **15 Advanced** questions.
  - Balanced options (A, B, C, D) and zero ambiguity.
  - Thorough coverage of 20 core Groovy domains (syntax, closures, traits, AST transformations, MOP, collections, regular expressions, safe navigation, GStrings, etc.).
- **Interactive Web Application (`index.html`)**:
  - **Multilingual Support**: Instant on-the-fly switching between **English (EN)**, **Tiếng Việt (VI)**, and **ภาษาไทย (TH)**.
  - **Live Elapsed Timer** and **Progress Indicator**.
  - **Interactive Question Palette**: 1–50 matrix navigation with status indicators (Answered, Flagged for review).
  - **Detailed Output Comparison**: Post-submission dashboard showing your answer vs correct answer with explanations for every question.
  - **Filter Reviews**: View All, Correct Only, Incorrect Only, or Unanswered.
  - **Print & PDF Export**: Clean print stylesheet for saving test results.
  - **Auto-save**: Uses `localStorage` to preserve quiz state across browser refreshes.
- **Printable Documents (`.docx`)**:
  - `Groovy_Quiz_50_Questions.docx`: Student examination paper without answers.
  - `Groovy_Quiz_Answers_and_Explanations.docx`: Instructor answer key with quick reference table and technical explanations.

---

## 📂 Project Structure

```text
├── index.html                                  # Main web application entry point
├── style.css                                   # Modern responsive CSS design system
├── app.js                                      # Application logic, i18n handler & scoring engine
├── questions.js                                # Multilingual 50-question dataset (EN, VI, TH)
├── Groovy_Quiz_50_Questions.docx               # Examination test paper (Word format)
├── Groovy_Quiz_Answers_and_Explanations.docx   # Complete Answer Key & Solutions (Word format)
├── build_quiz.py                               # Source quiz data definitions
├── generate_docs.py                            # Word document generation script
├── create_multilingual_data.py                 # Multilingual compiler script
└── .gitignore                                  # Git ignore definitions
```

---

## 🚀 Quick Start

### 1. Run the Web Application
Simply open `index.html` directly in any web browser (Chrome, Edge, Firefox, Safari). No web server required!

### 2. Regenerate Word Documents or Dataset
```bash
python generate_docs.py
python create_multilingual_data.py
```

---

## 📜 License
MIT License.
