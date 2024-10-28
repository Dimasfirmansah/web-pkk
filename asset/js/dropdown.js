function toggleAnswer(element) {
    const parent = element.parentElement;
    const answer = parent.querySelector('.faq-answer');
    const icon = element.querySelector('.icon');

    if (parent.classList.contains('open')) {
        parent.classList.remove('open');
        icon.textContent = "▼";
    } else {
        parent.classList.add('open');
        icon.textContent = "▲";
    }
}
