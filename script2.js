function fetchquote() {
    const apiUrl = 'https://type.fit/api/quotes';
    fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            const randomIndex = Math.floor(Math.random() * data.length);
            const randomQuote = data[randomIndex];
            const quoteContainer = document.querySelector('.quote');
            quoteContainer.innerHTML = `<p>${randomQuote.text}</p>`;
        })
        .catch((error) => {
            console.error('Error fetching random quote:', error);
            const quoteContainer = document.querySelector('.quote');
            quoteContainer.innerHTML = '<p>Unable to fetch a random quote.</p>';
        });
}
function handleNewQuoteClick() {
    fetchquote();
}
document.addEventListener('DOMContentLoaded', () => {
    fetchquote();
    const newQuoteButton = document.getElementById('new-quote-btn');
    newQuoteButton.addEventListener('click', handleNewQuoteClick);
});
