'use strict'

const request = () => {
    fetch('https://api.kanye.rest')
        .then(req => req.json())
        .then(data => quote(data))
}

const quote = (quote) => {
    const kanye = document.getElementById('quotes');
    quotes.classList.add('text-style');
    quotes.innerHTML = quote.quote;
}
