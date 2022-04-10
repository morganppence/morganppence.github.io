async function getQuote() {
  console.log("quote button was clicked");
  try {
    const response = await fetch(url);
    if(!response.ok) {
      throw Error(response.statusText)
    }

    const json = await response.json();
    console.log(json);
    displayQuote(json.quote);
  }catch(err) {
    console.log(err);
    alert('Failed');
  }
}

function displayQuote(quote) {
  const quoteText = document.querySelector('#js-quote-text');
  quoteText.textContent = quote;
}

const url = 'https://api.kanye.rest/';
const quoteButton = document.querySelector('#js-new-quote');
quoteButton.addEventListener('click', getQuote);


window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
}(document, "script", "twitter-wjs"));
