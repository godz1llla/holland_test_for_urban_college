'use strict';

const quiz = {
    currentStep: 'form', // 'form', 'quiz', 'result'
    currentIndex: 0,
    answers: [],
    userData: null,
    scores: { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 },

    init() {
        // Handle form submission
        const form = document.getElementById('personal-data-form');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.userData = {
                    firstName: document.getElementById('firstName').value,
                    lastName: document.getElementById('lastName').value,
                    email: document.getElementById('email').value,
                    gender: form.querySelector('input[name="gender"]:checked').value
                };
                this.startQuiz();
            });
        }

        // Listen for language changes to update current question text
        document.addEventListener('languageChanged', () => {
            if (this.currentStep === 'quiz') {
                this.renderQuestion();
            } else if (this.currentStep === 'result') {
                this.renderResults();
            }
        });
    },

    startQuiz() {
        this.currentStep = 'quiz';
        this.currentIndex = 0;
        this.scores = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };

        document.getElementById('step-form').style.display = 'none';
        document.getElementById('step-quiz').style.display = 'block';

        this.renderQuestion();
    },

    renderQuestion() {
        const question = window.questionsData[this.currentIndex];
        const container = document.getElementById('question-container');
        const progress = document.getElementById('quiz-progress');

        container.innerText = question.text[window.i18n.currentLang];

        // Update progress text with translation
        const total = window.questionsData.length;
        let progressText = window.i18n.t('quiz.questionCount');
        progressText = progressText.replace('{current}', this.currentIndex + 1).replace('{total}', total);
        progress.innerText = progressText;
    },

    answer(yes) {
        const question = window.questionsData[this.currentIndex];
        if (yes) {
            this.scores[question.type]++;
        }

        this.currentIndex++;
        if (this.currentIndex < window.questionsData.length) {
            this.renderQuestion();
        } else {
            this.showResults();
        }
    },

    showResults() {
        this.currentStep = 'result';
        document.getElementById('step-quiz').style.display = 'none';
        document.getElementById('step-result').style.display = 'block';

        // Calculate Holland Code
        const sortedScores = Object.entries(this.scores)
            .sort((a, b) => b[1] - a[1]);

        const code = sortedScores.slice(0, 3).map(s => s[0]).join('');
        document.getElementById('result-code').innerText = code;

        this.renderResults(code);
    },

    renderResults(code) {
        if (!code) {
            code = document.getElementById('result-code').innerText;
        }

        const exactContainer = document.getElementById('exact-professions');
        const similarContainer = document.getElementById('similar-professions');
        const noExact = document.getElementById('no-exact-msg');

        exactContainer.innerHTML = '';
        similarContainer.innerHTML = '';

        const exactMatches = window.professionsData.filter(p => p.code === code);
        const similarMatches = window.professionsData.filter(p => {
            if (p.code === code) return false;
            // Similar if contains the same letters in any order or 2 matches
            const pChars = p.code.split('');
            const cChars = code.split('');
            const overlap = pChars.filter(char => cChars.includes(char));
            return overlap.length >= 2;
        });

        if (exactMatches.length === 0) {
            noExact.style.display = 'block';
        } else {
            noExact.style.display = 'none';
            exactMatches.forEach(p => {
                exactContainer.appendChild(this.createProfessionCard(p));
            });
        }

        similarMatches.slice(0, 12).forEach(p => {
            similarContainer.appendChild(this.createProfessionCard(p));
        });
    },

    createProfessionCard(p) {
        const div = document.createElement('div');
        div.className = 'card';
        div.style.padding = '12px';
        div.style.borderLeft = '4px solid var(--primary-red)';

        const title = p.title[window.i18n.currentLang];
        div.innerHTML = `
            <div style="font-weight: 700; color: var(--primary-black);">${title}</div>
            <div style="font-size: 12px; color: var(--dark-grey); margin-top: 4px;">Code: ${p.code}</div>
        `;
        return div;
    }
};

document.addEventListener('DOMContentLoaded', () => {
    quiz.init();
});
