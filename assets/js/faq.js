export function initFAQ() {
    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', function() {
            const answer = this.parentElement.querySelector('.faq-answer');
            const isOpen = answer.style.display === 'block';
            document.querySelectorAll('.faq-answer').forEach(a => a.style.display = 'none');
            if (!isOpen) answer.style.display = 'block';
        });
    });
}

initFAQ();