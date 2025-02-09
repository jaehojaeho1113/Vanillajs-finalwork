const quotes = [
  {
    quote: "달을 향해 쏴라. 빗나가도 별이 될테니",
    author: "/ ---",
  },
  {
    quote: "Do not try to be original, just try to be good.",
    author: "/ Paul Rand",
  },
  {
    quote: "Do not be afraid to give up the good to go for the great",
    author: "/ John D. Rockefeller",
  },
  {
    quote:
      "If you cannot fly then run. If you cannot run, then walk. And if you cannot walk, then crawl, but whatever you do, you have to keep moving forward.",
    author: "/ Martin Luther King Jr.",
  },
  {
    quote:
      "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
    author: "/ Thomas Edison",
  },
  {
    quote:
      "스스로를 변화시키는 가장 빠른 방법은 너가 원하는 길을 이미 간 사람들과 지내는 것이다.",
    author: "/ REid Hoffman",
  },
  {
    quote:
      "Money is like gasoline during a road trip. You do not want to run out of gas on your trip, but you are not doing a tour of gas stations",
    author: "/ Tim O Reilly",
  },
  {
    quote:
      "Some people dream of success, while other people get up every morning and make it happen",
    author: "/ Wayne Huizenga",
  },
  {
    quote:
      "The only thing worse than starting something and falling.. is not starting something",
    author: "/ SEth Godin",
  },
  {
    quote:
      "If you really want to do something, you will find a way. If you do not, you will find an excuse.",
    author: "/ Jim Rohn",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const myQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = myQuote.quote;
author.innerText = myQuote.author;
