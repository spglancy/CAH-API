# Cards Against Humanity API
### Overview
The Cards Against Humanity API allows a user to get raw JSON data of the entire card base of the card game [Cards Against Humanity][cah], as well as propose new cards to just the API.

We are in no way affiliated with Cards Against Humanity, but full credit to all of the cards in our current sets to them.

If you have not played and/or do not know how to play, we strongly urge you to check out the [Orignal Game][cah]. But we do have an explanation of the rules [here](#Cards-Against-Humanity-Rules)(at the bottom of the page)

### Card Types

##### Black Cards
A black card is a prompt card and will often have a blank spot represented by an underscore in the JSON. Not every set contains black cards and the sets that do contain many more white cards than black cards.

##### White Cards
A white card is a responce card, played in response to the black card played. White cards are in every card set, and are very abundent. There are more white cards because at least 2 white cards get played every round while only 1 black card gets played. Players also need to have 10 of these in their hands at a time.

### Endpoints

##### GET
* __'/sets'__ - gives you a list of all the different card sets
* __'/sets/:set'__ - gives you the data of just one card set
* __'/sets/multi?\_sets=[set1],[set3],[set3]...'__ - gives you all the cards from multiple sets
* __'/sets/:set?\_n=[numcards]'__ - gives you a [numcards] random white cards from a given set  

##### POST
* __'/proposed/new'__ - creates a new proposal card

##### PUT
* __'/proposed/:id'__ - puts changes to a proposed c ard

##### DELETE
* __'/proposed/:id?_method=DELETE'__ - removes a proposed card

### Cards Against Humanity Rules
Again, you would get a much better grasp of the rules by actually playing [the game][cah].
That being said, the game is incredibly simple and played just like Apples to Apples.   

The game is played with 3 or more players, you decide on one random "Card Psar" who then deals 10 white cards to each player including themselves. Then turns over one black card.  

Everyone except for the Card Psar puts a white card face down in the center when everyone has played, the Card Psar flips all of the white cards over and reads them out. Then the Card Psar decides on which white card goes with the black card the best, or is the funniest.  

The player who played that white card then gets the black card, all the white cards go to the bottom of the deck, and the next player counter-clockwise is the new Card Psar. Everyone then draws white cards until they get back to 10.

This keeps going until one player gets to an agreed
upon final number of black cards.




[cah]: https://cardsagainsthumanity.com/