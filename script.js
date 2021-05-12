let number = 5
let guess = 0

while (guess != number) {
  guess = prompt('Guess a number between 1 and 10.')
  guess = parseInt (guess)

  if (guess === number) {
    alert('You got it right!')
  } else if (guess < number) {
    alert('You guessed too small. Please try again.')
  } else if (guess > number) {
    alert('You guessed too big. Please try again.')
  } else {
    alert('Invalid answer. Please try again')
  }
}