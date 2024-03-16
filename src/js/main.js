const buttons = {
  one: document.getElementById('button-1'),
  two: document.getElementById('button-2'),
  three: document.getElementById('button-3'),
  four: document.getElementById('button-4'),
}

const answers = {
  one: document.getElementById('answer-1'),
  two: document.getElementById('answer-2'),
  three: document.getElementById('answer-3'),
  four: document.getElementById('answer-4'),
}

function hideAllAnswers() {
  for (let key in answers) {
    answers[key].classList.add('hidden');
  }
  for (let key in buttons) {
    buttons[key].src = './src/assets/images/icon-plus.svg';
  }
}

answers.one.classList.add('hidden');

buttons.one.addEventListener('click', () => {
  hideAllAnswers();
  answers.one.classList.toggle('hidden');
  buttons.one.src = './src/assets/images/icon-minus.svg';
})

buttons.two.addEventListener('click', () => {
  hideAllAnswers();
  answers.two.classList.toggle('hidden');
  buttons.two.src = './src/assets/images/icon-minus.svg';
})

buttons.three.addEventListener('click', () => {
  hideAllAnswers();
  answers.three.classList.toggle('hidden');
  buttons.three.src = './src/assets/images/icon-minus.svg';
})

buttons.four.addEventListener('click', () => {
  hideAllAnswers();
  answers.four.classList.toggle('hidden');
  buttons.four.src = './src/assets/images/icon-minus.svg';
})