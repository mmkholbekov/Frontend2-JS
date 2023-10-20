
function filterBooksByLetterU(books) {
  const booksWithU = books.filter(book => book.includes('у'))
  const otherBooks = books.filter(book => !book.includes('у'))
  console.log("Книги с буквой 'у':");
  booksWithU.forEach(book => console.log(book))
  console.log("Все остальные книги:");
  otherBooks.forEach(book => console.log(book))
}
const bookList = ["Книга 1", "Книга 2", "Книга 3", "Еще книга"]
filterBooksByLetterU(bookList);



const counterInput = document.getElementById('counterInput')
const incrementButton = document.getElementById('incrementButton')
const decrementButton = document.getElementById('decrementButton')

incrementButton.addEventListener('click', () => {
  const currentValue = parseInt(counterInput.value, 10)
  counterInput.value = currentValue + 1
})

decrementButton.addEventListener('click', () => {
  const currentValue = parseInt(counterInput.value, 10)
  counterInput.value = currentValue - 1
})
