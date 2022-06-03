const quotes = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "The way to get started is to quit talking and begin doing.",
    "Your time is limited, so don't waste it living someone else's life."
]

const quote = document.querySelector(".quote span");
const currentQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerHTML = currentQuote;
