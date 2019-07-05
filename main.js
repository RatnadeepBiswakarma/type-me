const sentences = [
  "Hello world!",
  "My name is Ratnadeep.",
  "I'm a front-end developer.",
  "I wrote this tiny typing library.",
  "I love to build cool things like this..."
];

const el = document.querySelector(".text");
let text = "";
let intervalId;
let wordIndex = 0;
let letterIndex = 0;

function generateText() {
  text = sentences[wordIndex];
  setTimeout(() => {
    typeForwardText(text);
  }, 1000);
}

function typeForwardText(text) {
  intervalId = setInterval(() => {
    if (letterIndex === text.length) {
      clearInterval(intervalId);
      setTimeout(() => {
        typeBackwardText(text);
      }, 2000);
    } else {
      el.textContent += text[letterIndex];
      letterIndex += 1;
    }
  }, 40);
}

function typeBackwardText(text) {
  intervalId = setInterval(() => {
    if (letterIndex < 0) {
      clearInterval(intervalId);
      letterIndex = 0;
      if (wordIndex < sentences.length - 1) {
        wordIndex += 1;
        text = sentences[wordIndex];
      } else {
        wordIndex = 0;
        text = sentences[wordIndex];
      }
      typeForwardText(text);
    } else {
      el.textContent = text.slice(0, letterIndex);
      letterIndex -= 1;
    }
  }, 15);
}

function eraseText(text) {
  if (letterIndex === 0) {
    clearInterval(intervalId);
    intervalId = setInterval(() => {
      index++;
      generateText(text);
    }, 50);
  } else {
    letterIndex--;
    let str = text.slice(0, letterIndex - 1);
    typeBackwardText(str);
  }
}

generateText();
