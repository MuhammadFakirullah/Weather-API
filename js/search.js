//this file is just to add and enable function "search filter"

function filterCards() {
    // Get the input value
    var input = document.getElementById("search-input");
    var filter = input.value.toUpperCase();
    
    // Get all the card bodies
    var cards = document.querySelectorAll(".card-body");
    
    // Loop through the cards and hide/show them based on the filter
    for (var i = 0; i < cards.length; i++) {
      var card = cards[i];
      var text = card.textContent || card.innerText;
      if (text.toUpperCase().indexOf(filter) > -1) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    }
  }
  