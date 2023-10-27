const showAnswerButtons = document.querySelectorAll('.show-answer')


showAnswerButtons.forEach(button => {
  button.addEventListener('click', () => {
    const answer = button.nextElementSibling

    if (answer.style.display === 'block' || answer.style.display === '') {
      answer.style.display = 'none'
      button.textContent = 'Показать ответ'
    } else {
      answer.style.display = 'block'
      button.textContent = 'Скрыть ответ'
    }
  })
})
