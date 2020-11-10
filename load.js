window.onload = init;  // this loads text everytime windows is refreshed or loaded

function init() {
    generateQuote()
}

function generateQuote(){
    let quoteSize = quoteBank.length;
    let randomIndex = Math.floor(Math.random() * quoteSize);
    let randomQuoteData = quoteBank[randomIndex];

    let twitterLink = "https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amptext=";
    
    // Adding the quote text
    var quoteInApiFormat = randomQuoteData.quote.replace(/ /g, "%20");
    twitterLink += quoteInApiFormat;
    
    // Adding the author
    let authorInApiFormat = randomQuoteData.author.replace(/ /g, "%20");
    twitterLink += " - " + authorInApiFormat;

    document.getElementById("tweet-quote").href = twitterLink; // getting the href in js from html
    document.getElementById("text").innerText = randomQuoteData.quote;
    document.getElementById("author").innerText = randomQuoteData.author;
}