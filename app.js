// ==========================================================================
// Groovy Quiz Application Logic - Multilingual Support (EN, VI, TH)
// ==========================================================================

const UI_I18N = {
  en: {
    brand_title: "Groovy Master Quiz",
    brand_subtitle: "50-Question Comprehensive Assessment",
    submit_header: "Submit",
    question_palette: "Question Palette",
    answered_label: "Answered:",
    legend_done: "● Done",
    legend_flag: "★ Flag",
    btn_flag_active: "★ Flagged",
    btn_flag_inactive: "☆ Flag",
    submit_assessment: "Submit Assessment",
    reset_all: "Reset All Answers",
    reset_confirm: "Are you sure you want to clear all your answers and start over?",
    retake_confirm: "Retake assessment? This will reset all your answers.",
    modal_title: "Submit Assessment",
    modal_cancel: "Continue Quiz",
    modal_confirm: "Confirm & Submit",
    modal_desc_unanswered: (answered, total, unanswered) => 
      `You have answered <strong>${answered}</strong> of <strong>${total}</strong> questions.<br><span style="color: #b45309; font-weight: 600;">${unanswered} questions are still unanswered.</span><br><br>Are you sure you want to submit your assessment now?`,
    modal_desc_all: (total) => 
      `You have answered all <strong>${total}</strong> questions!<br>Ready to calculate your score and review your detailed performance?`,
    stat_correct: "Correct Answers",
    stat_incorrect: "Incorrect Answers",
    stat_unanswered: "Unanswered",
    stat_time: "Time Elapsed",
    filter_all: "All Questions (50)",
    filter_correct: "Correct Only",
    filter_incorrect: "Incorrect Only",
    filter_unanswered: "Unanswered",
    btn_print: "Print / Save PDF",
    btn_retake: "Retake Quiz",
    your_answer: "Your Answer:",
    correct_answer: "Correct Answer:",
    correct_badge: "✅ Correct (+1 pt)",
    incorrect_badge: "❌ Incorrect",
    unanswered_badge: "⚠️ Unanswered",
    your_selection_label: "✖ Your Selection",
    correct_answer_label: "✔ Correct Answer",
    explanation_title: "Explanation & Technical Insight:",
    skipped_text: "Skipped / None",
    rank_master: {
      title: "🏆 Groovy Master & Architect",
      desc: "Outstanding performance! You possess master-level expertise across dynamic typing, closures, traits, and compiler AST transformations."
    },
    rank_senior: {
      title: "🌟 Senior Groovy Specialist",
      desc: "Great job! Strong command of idioms, GDK collections, MOP, and Groovy best practices."
    },
    rank_intermediate: {
      title: "🎯 Intermediate Groovy Developer",
      desc: "Good effort! Review the detailed solutions below to solidify your understanding of closures, regex, and AST compilation."
    },
    rank_apprentice: {
      title: "🌱 Groovy Apprentice",
      desc: "Keep practicing! Review the explanations for each question to master Groovy idioms and syntax quirks."
    },
    difficulty: {
      Easy: "Easy",
      Intermediate: "Intermediate",
      Advanced: "Advanced"
    }
  },
  vi: {
    brand_title: "Trắc Nghiệm Chuyên Sâu Groovy",
    brand_subtitle: "Bài Đánh Giá Toàn Diện 50 Câu Hỏi",
    submit_header: "Nộp bài",
    question_palette: "Danh Sách Câu Hỏi",
    answered_label: "Đã làm:",
    legend_done: "● Đã chọn",
    legend_flag: "★ Đánh dấu",
    btn_flag_active: "★ Đã đánh dấu",
    btn_flag_inactive: "☆ Đánh dấu",
    submit_assessment: "Nộp Bài Đánh Giá",
    reset_all: "Làm lại từ đầu",
    reset_confirm: "Bạn có chắc chắn muốn xóa toàn bộ câu trả lời và làm lại từ đầu không?",
    retake_confirm: "Làm lại bài kiểm tra? Thao tác này sẽ đặt lại tất cả câu trả lời của bạn.",
    modal_title: "Nộp Bài Đánh Giá",
    modal_cancel: "Tiếp tục làm bài",
    modal_confirm: "Xác nhận & Nộp bài",
    modal_desc_unanswered: (answered, total, unanswered) => 
      `Bạn đã trả lời <strong>${answered}</strong> trên tổng số <strong>${total}</strong> câu.<br><span style="color: #b45309; font-weight: 600;">Còn ${unanswered} câu chưa được trả lời.</span><br><br>Bạn có chắc chắn muốn nộp bài đánh giá ngay bây giờ?`,
    modal_desc_all: (total) => 
      `Bạn đã hoàn thành toàn bộ <strong>${total}</strong> câu hỏi!<br>Sẵn sàng tính điểm và xem phân tích kết quả chi tiết?`,
    stat_correct: "Câu Trả Lời Đúng",
    stat_incorrect: "Câu Trả Lời Sai",
    stat_unanswered: "Chưa Trả Lời",
    stat_time: "Thời Gian Làm Bài",
    filter_all: "Tất cả câu hỏi (50)",
    filter_correct: "Chỉ câu đúng",
    filter_incorrect: "Chỉ câu sai",
    filter_unanswered: "Chưa làm",
    btn_print: "In / Xuất PDF",
    btn_retake: "Làm lại bài thi",
    your_answer: "Câu trả lời của bạn:",
    correct_answer: "Đáp án chính xác:",
    correct_badge: "✅ Chính xác (+1 điểm)",
    incorrect_badge: "❌ Chưa chính xác",
    unanswered_badge: "⚠️ Chưa trả lời",
    your_selection_label: "✖ Bạn đã chọn",
    correct_answer_label: "✔ Đáp án đúng",
    explanation_title: "Giải thích & Phân tích chuyên sâu:",
    skipped_text: "Bỏ qua / Chưa chọn",
    rank_master: {
      title: "🏆 Chuyên Gia / Kiến Trúc Sư Groovy",
      desc: "Thành tích xuất sắc! Bạn nắm vững toàn diện từ lập trình động, closures, traits đến các biến đổi AST trình biên dịch."
    },
    rank_senior: {
      title: "🌟 Kỹ Sư Groovy Cao Cấp",
      desc: "Rất tốt! Khả năng vận dụng thành thạo các idiom, thư viện GDK, MOP và các thực tiễn tốt nhất trong Groovy."
    },
    rank_intermediate: {
      title: "🎯 Lập Trình Viên Groovy Trung Cấp",
      desc: "Nỗ lực rất đáng khen! Hãy xem lại các lời giải chi tiết bên dưới để củng cố thêm về closures, regex và AST."
    },
    rank_apprentice: {
      title: "🌱 Người Mới Bắt Đầu Với Groovy",
      desc: "Hãy tiếp tục luyện tập! Đọc kỹ phần giải thích chi tiết của từng câu hỏi để nắm vững cú pháp và tư duy lập trình Groovy."
    },
    difficulty: {
      Easy: "Dễ",
      Intermediate: "Trung bình",
      Advanced: "Nâng cao"
    }
  },
  th: {
    brand_title: "แบบทดสอบความรู้ภาษา Groovy",
    brand_subtitle: "การประเมินผลแบบครอบคลุม 50 ข้อ",
    submit_header: "ส่งคำตอบ",
    question_palette: "กระดานข้อสอบ",
    answered_label: "ตอบแล้ว:",
    legend_done: "● ทำแล้ว",
    legend_flag: "★ ปักธง",
    btn_flag_active: "★ ปักธงแล้ว",
    btn_flag_inactive: "☆ ปักธง",
    submit_assessment: "ส่งแบบประเมิน",
    reset_all: "ล้างคำตอบทั้งหมด",
    reset_confirm: "คุณแน่ใจหรือไม่ว่าต้องการล้างคำตอบทั้งหมดและเริ่มต้นใหม่?",
    retake_confirm: "ทำแบบประเมินใหม่หรือไม่? การดำเนินการนี้จะรีเซ็ตคำตอบทั้งหมดของคุณ",
    modal_title: "ยืนยันการส่งคำตอบ",
    modal_cancel: "ทำข้อสอบต่อ",
    modal_confirm: "ยืนยันและส่ง",
    modal_desc_unanswered: (answered, total, unanswered) => 
      `คุณตอบไปแล้ว <strong>${answered}</strong> จากทั้งหมด <strong>${total}</strong> ข้อ<br><span style="color: #b45309; font-weight: 600;">ยังเหลืออีก ${unanswered} ข้อที่ยังไม่ได้ตอบ</span><br><br>คุณแน่ใจหรือไม่ว่าต้องการส่งคำตอบตอนนี้?`,
    modal_desc_all: (total) => 
      `คุณตอบครบทั้ง <strong>${total}</strong> ข้อแล้ว!<br>พร้อมที่จะคำนวณคะแนนและดูผลการประเมินโดยละเอียดหรือไม่?`,
    stat_correct: "คำตอบที่ถูกต้อง",
    stat_incorrect: "คำตอบที่ผิด",
    stat_unanswered: "ยังไม่ได้ตอบ",
    stat_time: "เวลาที่ใช้ไป",
    filter_all: "คำถามทั้งหมด (50)",
    filter_correct: "เฉพาะข้อที่ถูก",
    filter_incorrect: "เฉพาะข้อที่ผิด",
    filter_unanswered: "ยังไม่ตอบ",
    btn_print: "พิมพ์ / บันทึก PDF",
    btn_retake: "ทำแบบทดสอบใหม่",
    your_answer: "คำตอบของคุณ:",
    correct_answer: "คำตอบที่ถูกต้อง:",
    correct_badge: "✅ ถูกต้อง (+1 คะแนน)",
    incorrect_badge: "❌ ไม่ถูกต้อง",
    unanswered_badge: "⚠️ ยังไม่ได้ตอบ",
    your_selection_label: "✖ สิ่งที่คุณเลือก",
    correct_answer_label: "✔ คำตอบที่ถูกต้อง",
    explanation_title: "คำอธิบายและข้อสังเกตทางเทคนิค:",
    skipped_text: "ข้าม / ยังไม่ได้เลือก",
    rank_master: {
      title: "🏆 ผู้เชี่ยวชาญระดับ Groovy Master",
      desc: "ผลงานยอดเยี่ยมมาก! คุณมีความรู้ระดับปรมาจารย์ครอบคลุม dynamic typing, closures, traits และ AST Transformations"
    },
    rank_senior: {
      title: "🌟 ผู้เชี่ยวชาญระดับ Senior Groovy",
      desc: "ทำได้ดีมาก! มีความเชี่ยวชาญในสำนวนภาษา, GDK collections, MOP และแนวทางปฏิบัติที่ดีที่สุด"
    },
    rank_intermediate: {
      title: "🎯 นักพัฒนาระดับกลาง Intermediate Groovy",
      desc: "พยายามได้ดี! ตรวจสอบคำอธิบายโดยละเอียดด้านล่างเพื่อเสริมความเข้าใจเรื่อง closures, regex และ AST"
    },
    rank_apprentice: {
      title: "🌱 ผู้เริ่มต้นเรียนรู้ Groovy Apprentice",
      desc: "ฝึกฝนต่อไป! อ่านคำอธิบายในแต่ละข้อเพื่อทำความเข้าใจไวยากรณ์และกลไกของ Groovy ให้ลึกซึ้งยิ่งขึ้น"
    },
    difficulty: {
      Easy: "ง่าย",
      Intermediate: "ปานกลาง",
      Advanced: "ขั้นสูง"
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // State
  let currentLang = localStorage.getItem('groovy_quiz_lang') || 'vi'; // Default to Vietnamese
  let userAnswers = {}; // { 1: 'B', 2: 'D', ... }
  let flaggedQuestions = new Set();
  let timerSeconds = 0;
  let timerInterval = null;
  let isSubmitted = false;
  let currentReviewFilter = 'all';

  // DOM Elements
  const langSelector = document.getElementById('lang-selector');
  const questionsStream = document.getElementById('questions-stream');
  const matrixGrid = document.getElementById('matrix-grid');
  const answeredCountEl = document.getElementById('answered-count');
  const answeredHeaderCountEl = document.getElementById('header-answered-count');
  const progressBarFill = document.getElementById('progress-bar-fill');
  const timerDisplay = document.getElementById('timer-display');
  const submitHeaderBtn = document.getElementById('btn-submit-header');
  const submitMainBtn = document.getElementById('btn-submit-main');
  const clearBtn = document.getElementById('btn-clear-all');
  
  // Modal Elements
  const submitModal = document.getElementById('submit-modal');
  const modalDesc = document.getElementById('modal-desc');
  const modalCancelBtn = document.getElementById('modal-btn-cancel');
  const modalConfirmBtn = document.getElementById('modal-btn-confirm');

  // Containers
  const quizSection = document.getElementById('quiz-active-section');
  const resultsContainer = document.getElementById('results-container');
  const mainWrapper = document.getElementById('main-wrapper');

  // Load from LocalStorage if available
  const savedAnswers = localStorage.getItem('groovy_quiz_answers');
  if (savedAnswers) {
    try {
      userAnswers = JSON.parse(savedAnswers);
    } catch (e) {
      userAnswers = {};
    }
  }

  // Set initial language selector value
  if (langSelector) {
    langSelector.value = currentLang;
    langSelector.addEventListener('change', (e) => {
      changeLanguage(e.target.value);
    });
  }

  // Initialize
  initTimer();
  updateStaticUI();
  renderQuestions();
  renderMatrix();
  updateProgress();

  // Event Listeners
  submitHeaderBtn.addEventListener('click', promptSubmit);
  submitMainBtn.addEventListener('click', promptSubmit);
  modalCancelBtn.addEventListener('click', () => submitModal.classList.remove('open'));
  modalConfirmBtn.addEventListener('click', finalizeSubmission);
  clearBtn.addEventListener('click', clearAllAnswers);

  // Close modal when clicking outside
  submitModal.addEventListener('click', (e) => {
    if (e.target === submitModal) submitModal.classList.remove('open');
  });

  // --------------------------------------------------------------------------
  // Language Switching
  // --------------------------------------------------------------------------
  function changeLanguage(newLang) {
    currentLang = newLang;
    localStorage.setItem('groovy_quiz_lang', newLang);
    updateStaticUI();

    if (isSubmitted) {
      showResults();
    } else {
      renderQuestions();
      updateProgress();
    }
  }

  function updateStaticUI() {
    const t = UI_I18N[currentLang] || UI_I18N.en;

    document.getElementById('i18n-brand-title').textContent = t.brand_title;
    document.getElementById('i18n-brand-subtitle').textContent = t.brand_subtitle;
    document.getElementById('i18n-btn-submit-header').textContent = t.submit_header;
    document.getElementById('i18n-palette-title').textContent = t.question_palette;
    document.getElementById('i18n-answered-label').textContent = t.answered_label;
    document.getElementById('i18n-legend-done').textContent = t.legend_done;
    document.getElementById('i18n-legend-flag').textContent = t.legend_flag;
    document.getElementById('btn-submit-main').textContent = t.submit_assessment;
    document.getElementById('btn-clear-all').textContent = t.reset_all;

    document.getElementById('filter-btn-all').textContent = t.filter_all;
    document.getElementById('filter-btn-correct').textContent = t.filter_correct;
    document.getElementById('filter-btn-incorrect').textContent = t.filter_incorrect;
    document.getElementById('filter-btn-unanswered').textContent = t.filter_unanswered;

    document.getElementById('i18n-btn-print').textContent = t.btn_print;
    document.getElementById('i18n-btn-retake').textContent = t.btn_retake;

    document.getElementById('i18n-modal-title').textContent = t.modal_title;
    document.getElementById('modal-btn-cancel').textContent = t.modal_cancel;
    document.getElementById('modal-btn-confirm').textContent = t.modal_confirm;
  }

  // --------------------------------------------------------------------------
  // Timer Functions
  // --------------------------------------------------------------------------
  function initTimer() {
    timerInterval = setInterval(() => {
      timerSeconds++;
      const mins = String(Math.floor(timerSeconds / 60)).padStart(2, '0');
      const secs = String(timerSeconds % 60).padStart(2, '0');
      timerDisplay.textContent = `${mins}:${secs}`;
    }, 1000);
  }

  function stopTimer() {
    if (timerInterval) clearInterval(timerInterval);
  }

  // --------------------------------------------------------------------------
  // Render Questions in Taking Mode
  // --------------------------------------------------------------------------
  function renderQuestions() {
    questionsStream.innerHTML = '';
    const t = UI_I18N[currentLang] || UI_I18N.en;

    quizData.forEach((q) => {
      const localized = q[currentLang] || q.en;
      const card = document.createElement('div');
      card.className = 'question-card';
      card.id = `q-card-${q.id}`;

      // Difficulty badge style & text
      const diffClass = `badge-${q.difficulty.toLowerCase()}`;
      const diffText = t.difficulty[q.difficulty] || q.difficulty;

      // Split question text into prose and code
      const parsedContent = formatQuestionText(localized.question);

      const isFlagged = flaggedQuestions.has(q.id);
      const flagText = isFlagged ? t.btn_flag_active : t.btn_flag_inactive;

      card.innerHTML = `
        <div class="q-header">
          <div class="q-badge-group">
            <span class="badge badge-num">Q${q.id}</span>
            <span class="badge ${diffClass}">${diffText}</span>
            <span class="badge badge-topic">${escapeHtml(localized.topic)}</span>
          </div>
          <button type="button" class="btn-flag ${isFlagged ? 'flagged' : ''}" data-id="${q.id}">
            <span>${flagText}</span>
          </button>
        </div>

        <div class="q-text-wrapper">
          ${parsedContent}
        </div>

        <div class="options-group" data-qid="${q.id}">
          ${['A', 'B', 'C', 'D'].map(key => {
            const isSelected = userAnswers[q.id] === key;
            return `
              <div class="option-row ${isSelected ? 'selected' : ''}" data-qid="${q.id}" data-opt="${key}">
                <div class="option-radio"></div>
                <div class="option-key">${key}.</div>
                <div class="option-text">${formatInlineCode(localized.options[key])}</div>
              </div>
            `;
          }).join('')}
        </div>
      `;

      questionsStream.appendChild(card);
    });

    // Event delegation for option selection
    questionsStream.onclick = (e) => {
      const row = e.target.closest('.option-row');
      if (row) {
        const qid = parseInt(row.dataset.qid);
        const opt = row.dataset.opt;
        selectOption(qid, opt);
        return;
      }

      const flagBtn = e.target.closest('.btn-flag');
      if (flagBtn) {
        const qid = parseInt(flagBtn.dataset.id);
        toggleFlag(qid, flagBtn);
      }
    };
  }

  function formatInlineCode(str) {
    if (!str) return '';
    const escaped = escapeHtml(str);
    return escaped.replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>');
  }

  function formatQuestionText(text) {
    const lines = text.split('\n');
    let html = '';
    let inCode = false;
    let codeBuffer = [];

    for (const line of lines) {
      const isCodeLine = (
        line.startsWith('def ') || line.startsWith('println ') ||
        line.startsWith('class ') || line.startsWith('trait ') ||
        line.startsWith('interface ') || line.startsWith('    ') ||
        line.startsWith('[') || line.startsWith('String.') ||
        line.startsWith('Worker ') || line.startsWith('TaskHandler ') ||
        line.startsWith('void ') || line.startsWith('try ') ||
        line.startsWith('} catch') || line.startsWith('printVariables()') ||
        line.startsWith('th.') || line.startsWith('w.') ||
        line.startsWith('acc.')
      );

      if (isCodeLine) {
        inCode = true;
        codeBuffer.push(line);
      } else {
        if (inCode && codeBuffer.length > 0) {
          html += `<pre class="code-snippet"><code>${escapeHtml(codeBuffer.join('\n'))}</code></pre>`;
          codeBuffer = [];
          inCode = false;
        }
        if (line.trim().length > 0) {
          html += `<div class="q-text">${formatInlineCode(line)}</div>`;
        }
      }
    }

    if (codeBuffer.length > 0) {
      html += `<pre class="code-snippet"><code>${escapeHtml(codeBuffer.join('\n'))}</code></pre>`;
    }

    return html;
  }

  function selectOption(qid, opt) {
    userAnswers[qid] = opt;
    localStorage.setItem('groovy_quiz_answers', JSON.stringify(userAnswers));

    // Update UI for question card
    const card = document.getElementById(`q-card-${qid}`);
    if (card) {
      const rows = card.querySelectorAll('.option-row');
      rows.forEach(r => {
        if (r.dataset.opt === opt) {
          r.classList.add('selected');
        } else {
          r.classList.remove('selected');
        }
      });
    }

    // Update matrix & progress
    updateMatrixButton(qid);
    updateProgress();
  }

  function toggleFlag(qid, btn) {
    const t = UI_I18N[currentLang] || UI_I18N.en;
    if (flaggedQuestions.has(qid)) {
      flaggedQuestions.delete(qid);
      btn.classList.remove('flagged');
      btn.querySelector('span').textContent = t.btn_flag_inactive;
    } else {
      flaggedQuestions.add(qid);
      btn.classList.add('flagged');
      btn.querySelector('span').textContent = t.btn_flag_active;
    }
    updateMatrixButton(qid);
  }

  // --------------------------------------------------------------------------
  // Matrix Navigation Palette
  // --------------------------------------------------------------------------
  function renderMatrix() {
    matrixGrid.innerHTML = '';
    quizData.forEach((q) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'matrix-btn';
      btn.id = `matrix-btn-${q.id}`;
      btn.textContent = q.id;

      if (userAnswers[q.id]) btn.classList.add('answered');
      if (flaggedQuestions.has(q.id)) btn.classList.add('flagged');

      btn.addEventListener('click', () => {
        const card = document.getElementById(`q-card-${q.id}`);
        if (card) {
          card.scrollIntoView({ behavior: 'smooth', block: 'center' });
          card.classList.add('active-target');
          setTimeout(() => card.classList.remove('active-target'), 1500);
        }
      });

      matrixGrid.appendChild(btn);
    });
  }

  function updateMatrixButton(qid) {
    const btn = document.getElementById(`matrix-btn-${qid}`);
    if (!btn) return;

    if (userAnswers[qid]) {
      btn.classList.add('answered');
    } else {
      btn.classList.remove('answered');
    }

    if (flaggedQuestions.has(qid)) {
      btn.classList.add('flagged');
    } else {
      btn.classList.remove('flagged');
    }
  }

  function updateProgress() {
    const answeredCount = Object.keys(userAnswers).length;
    const total = quizData.length;
    const pct = Math.round((answeredCount / total) * 100);

    answeredCountEl.textContent = answeredCount;
    answeredHeaderCountEl.textContent = answeredCount;
    progressBarFill.style.width = `${pct}%`;
  }

  function clearAllAnswers() {
    const t = UI_I18N[currentLang] || UI_I18N.en;
    if (confirm(t.reset_confirm)) {
      userAnswers = {};
      flaggedQuestions.clear();
      localStorage.removeItem('groovy_quiz_answers');
      renderQuestions();
      renderMatrix();
      updateProgress();
    }
  }

  // --------------------------------------------------------------------------
  // Submission & Scoring
  // --------------------------------------------------------------------------
  function promptSubmit() {
    const t = UI_I18N[currentLang] || UI_I18N.en;
    const answeredCount = Object.keys(userAnswers).length;
    const total = quizData.length;
    const unanswered = total - answeredCount;

    if (unanswered > 0) {
      modalDesc.innerHTML = t.modal_desc_unanswered(answeredCount, total, unanswered);
    } else {
      modalDesc.innerHTML = t.modal_desc_all(total);
    }
    submitModal.classList.add('open');
  }

  function finalizeSubmission() {
    submitModal.classList.remove('open');
    stopTimer();
    isSubmitted = true;
    showResults();
  }

  // --------------------------------------------------------------------------
  // Results View & Detailed Question-by-Question Output
  // --------------------------------------------------------------------------
  function showResults() {
    quizSection.style.display = 'none';
    submitHeaderBtn.style.display = 'none';
    mainWrapper.classList.add('full-width');
    resultsContainer.style.display = 'flex';
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const t = UI_I18N[currentLang] || UI_I18N.en;

    // Calculate score
    let correctCount = 0;
    let incorrectCount = 0;
    let unansweredCount = 0;

    quizData.forEach(q => {
      const userChoice = userAnswers[q.id];
      if (!userChoice) {
        unansweredCount++;
      } else if (userChoice === q.correct_letter) {
        correctCount++;
      } else {
        incorrectCount++;
      }
    });

    const total = quizData.length;
    const pct = Math.round((correctCount / total) * 100);

    // Hero title & description based on score
    let rank = t.rank_apprentice;
    if (pct >= 90) {
      rank = t.rank_master;
    } else if (pct >= 75) {
      rank = t.rank_senior;
    } else if (pct >= 50) {
      rank = t.rank_intermediate;
    }

    // Format time spent
    const mins = Math.floor(timerSeconds / 60);
    const secs = timerSeconds % 60;
    const timeFormatted = `${mins}m ${secs}s`;

    // Render Hero Section
    const resultsHero = document.getElementById('results-hero');
    resultsHero.innerHTML = `
      <div class="results-score-circle">
        <span class="score-num">${pct}%</span>
        <span class="score-total">${correctCount}/${total}</span>
      </div>
      <h1 class="results-status-title">${rank.title}</h1>
      <p class="results-status-desc">${rank.desc}</p>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-val stat-correct">${correctCount}</div>
          <div class="stat-label">${t.stat_correct}</div>
        </div>
        <div class="stat-card">
          <div class="stat-val stat-incorrect">${incorrectCount}</div>
          <div class="stat-label">${t.stat_incorrect}</div>
        </div>
        <div class="stat-card">
          <div class="stat-val stat-unanswered">${unansweredCount}</div>
          <div class="stat-label">${t.stat_unanswered}</div>
        </div>
        <div class="stat-card">
          <div class="stat-val stat-time">${timeFormatted}</div>
          <div class="stat-label">${t.stat_time}</div>
        </div>
      </div>
    `;

    renderReviewList(currentReviewFilter);
    setupFilterEvents();
  }

  function setupFilterEvents() {
    const t = UI_I18N[currentLang] || UI_I18N.en;
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
      btn.onclick = () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentReviewFilter = btn.dataset.filter;
        renderReviewList(currentReviewFilter);
      };
    });

    document.getElementById('btn-retake-quiz').onclick = () => {
      if (confirm(t.retake_confirm)) {
        localStorage.removeItem('groovy_quiz_answers');
        window.location.reload();
      }
    };

    document.getElementById('btn-print-results').onclick = () => {
      window.print();
    };
  }

  function renderReviewList(filter = 'all') {
    const reviewList = document.getElementById('review-list');
    reviewList.innerHTML = '';
    const t = UI_I18N[currentLang] || UI_I18N.en;

    quizData.forEach(q => {
      const localized = q[currentLang] || q.en;
      const userChoice = userAnswers[q.id];
      const isAnswered = !!userChoice;
      const isCorrect = userChoice === q.correct_letter;

      // Filter check
      if (filter === 'correct' && !isCorrect) return;
      if (filter === 'incorrect' && (isCorrect || !isAnswered)) return;
      if (filter === 'unanswered' && isAnswered) return;

      let statusClass = 'correct';
      let bannerHtml = '';

      if (!isAnswered) {
        statusClass = 'unanswered';
        bannerHtml = `
          <div class="output-summary-banner banner-unanswered">
            <div class="answer-comparison-box">
              <span>${t.your_answer}</span>
              <span class="ans-badge user-none">${t.skipped_text}</span>
              <span>➔</span>
              <span>${t.correct_answer}</span>
              <span class="ans-badge actual-right">[${q.correct_letter}] ${formatInlineCode(localized.options[q.correct_letter])}</span>
            </div>
            <span>${t.unanswered_badge}</span>
          </div>
        `;
      } else if (isCorrect) {
        statusClass = 'correct';
        bannerHtml = `
          <div class="output-summary-banner banner-correct">
            <div class="answer-comparison-box">
              <span>${t.your_answer}</span>
              <span class="ans-badge user-right">[${userChoice}] ${formatInlineCode(localized.options[userChoice])}</span>
              <span>➔</span>
              <span>${t.correct_answer}</span>
              <span class="ans-badge actual-right">[${q.correct_letter}]</span>
            </div>
            <span>${t.correct_badge}</span>
          </div>
        `;
      } else {
        statusClass = 'incorrect';
        bannerHtml = `
          <div class="output-summary-banner banner-incorrect">
            <div class="answer-comparison-box">
              <span>${t.your_answer}</span>
              <span class="ans-badge user-wrong">[${userChoice}] ${formatInlineCode(localized.options[userChoice])}</span>
              <span>➔</span>
              <span>${t.correct_answer}</span>
              <span class="ans-badge actual-right">[${q.correct_letter}] ${formatInlineCode(localized.options[q.correct_letter])}</span>
            </div>
            <span>${t.incorrect_badge}</span>
          </div>
        `;
      }

      const card = document.createElement('div');
      card.className = `review-card ${statusClass}`;

      const diffClass = `badge-${q.difficulty.toLowerCase()}`;
      const diffText = t.difficulty[q.difficulty] || q.difficulty;
      const parsedContent = formatQuestionText(localized.question);

      card.innerHTML = `
        <div class="q-header">
          <div class="q-badge-group">
            <span class="badge badge-num">Q${q.id}</span>
            <span class="badge ${diffClass}">${diffText}</span>
            <span class="badge badge-topic">${escapeHtml(localized.topic)}</span>
          </div>
        </div>

        <div class="q-text-wrapper" style="margin-bottom: 1rem;">
          ${parsedContent}
        </div>

        ${bannerHtml}

        <div class="review-options">
          ${['A', 'B', 'C', 'D'].map(key => {
            const isCorrectTarget = key === q.correct_letter;
            const isUserSelection = userChoice === key;
            
            let optClass = '';
            let optIcon = '';

            if (isCorrectTarget) {
              optClass = 'is-correct-target';
              optIcon = `<span class="review-opt-icon" style="color: #059669;">${t.correct_answer_label}</span>`;
            } else if (isUserSelection && !isCorrect) {
              optClass = 'is-user-selection wrong';
              optIcon = `<span class="review-opt-icon" style="color: #dc2626;">${t.your_selection_label}</span>`;
            }

            return `
              <div class="review-opt-row ${optClass}">
                <strong style="margin-right: 0.65rem;">${key}.</strong>
                <span class="review-opt-text">${formatInlineCode(localized.options[key])}</span>
                ${optIcon}
              </div>
            `;
          }).join('')}
        </div>

        <div class="explanation-box">
          <div class="explanation-title">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #4f46e5;">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
            ${t.explanation_title}
          </div>
          <p>${escapeHtml(localized.explanation)}</p>
        </div>
      `;

      reviewList.appendChild(card);
    });
  }

  // --------------------------------------------------------------------------
  // Utility
  // --------------------------------------------------------------------------
  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
});
