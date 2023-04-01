# week-3-Code-Challenge

Movie Ticketing System

Displaying Movie Details
Upon loading the page, users will see the first movie's details, including its poster, title, runtime, showtime, and available tickets. The number of available tickets is derived by subtracting the number of tickets_sold from the theater's capacity. The movie details are retrieved from the following endpoint using a GET request:

Listing All Movies
A menu of all movies is displayed on the left side of the page in the ul#films element upon page load. Each film in the list can be styled by adding the classes film item to each li element. There is a hardcoded placeholder li in the ul#films element, which can be removed by editing the HTML file directly, or using JavaScript to remove the placeholder element before populating the list. The movie data is retrieved from the following endpoint using a GET request:

Buying Tickets
Users can purchase tickets by clicking the "Buy Ticket" button. Upon purchase, the number of available tickets decreases on the frontend. Users will not be able to buy a ticket if the showing is sold out (if there are 0 tickets available).

Technologies Used
HTML
CSS
JavaScript

Authors
Terrene Chebii (terrencechebii@gmail.com)
