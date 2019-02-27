# Cards Aginst Humanity API
### Overview
the cards aginst humanity API is an API that allows you to acces card sets and get all the black and white cards in those sets.
### Endpoints
##### GET
* __'/sets'__ - gives you a list of all the different card sets
* __'/sets/:set'__ - gives you the data of just one card set
* __'/sets/?\_sets=[set1],[set3],[set3]...'__ - gives you all the cards from multiple sets
* __'/sets/:set?\_n=[numcards]'__ - gives you a random number of cards from a given set  
##### POST
* __'/proposed/new'__ - creates a new proposal card
##### PUT
* __'/proposed/:id'__ - puts changes to a proposed card
##### DELETE
* __'/proposed/:id?_method=DELETE'__ - removes a proposed card
