
fetch("https://type.fit/api/quotes")
  .then(response => {
    if (!response.ok) {
      throw new Error("Failed to fetch API data");
    }
    return response.json();
  })
  .then(quoteData => {
    const randomIndex = Math.floor(Math.random() * quoteData.length);
    const randomQuote = quoteData[randomIndex];

    const quoteText = randomQuote.text;
    const quoteAuthor = randomQuote.author;

    const quoteElement = document.getElementById('quoteElement');
    const authorElement = document.getElementById('authorElement');

    quoteElement.innerHTML = quoteText;
    authorElement.innerHTML = quoteAuthor || "Unknown";
  })
  .catch(error => {
    // Handle any errors that occur during the fetch request
    console.error("Error fetching API data:", error);
  });
