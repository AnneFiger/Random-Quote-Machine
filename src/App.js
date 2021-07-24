import React, { useState, useEffect } from "react";
import "./App.scss";
import COLORS from "./colors";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'



let quoteDB = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"

function App() {
  const [quote, setQuote] = useState("You block your dream when you allow your fear to grow bigger than your faith.");
  const [author, setAuthor] = useState("Mary Morrissey");
  const [quotes, setQuotes] = useState(null);
  const [rainbow, setRainbow] = useState('#4D80CC')

  const fetchQuotes = async (url) => {
    const response = await fetch(url)
    const parsedJSON = await response.json()
    setQuotes(parsedJSON.quotes)
  }

  useEffect(() => {
    fetchQuotes(quoteDB)
  }, )

  const getRandomQuote = () => {
    let randomInteger = Math.floor(quotes.length * Math.random())
    let randomInteger2 = Math.floor(COLORS.length * Math.random())
    setRainbow(COLORS[randomInteger2])
    setQuote(quotes[randomInteger].quote)
    setAuthor(quotes[randomInteger].author)
};


  return (
    <div className="App">
      <header className="App-header">
        <wrapper id="quote-box" style={{backgroundColor: rainbow}}>
        <p id="text">{quote}</p>
        <p id="author">- {author}</p>
        <a class="button" id="tweet-quote" href=
        {encodeURI(`http://www.twitter.com/intent/tweet?text=${quote} -${author}`)
        }><FontAwesomeIcon icon={faTwitter}/></a>
        <button class="button" id="new-quote" onClick={() => getRandomQuote()}>New Quote</button>
        </wrapper>
      </header>
    </div>
  );
}

export default App;
