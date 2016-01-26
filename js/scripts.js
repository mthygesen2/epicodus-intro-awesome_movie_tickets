// ===============================
// Business Logic
// ===============================
function Ticket(movieName, movieTime, moviePurchaser, isMatinee, isNewRelease) {
  this.movieName = movieName;
  this.movieTime = movieTime;
  this.moviePurchaser = moviePurchaser;
  this.isMatinee = isMatinee;
  this.isNewRelease = isNewRelease;
}
Ticket.prototype.getPrice = function() {
  return 2 + this.getMatineeDiscount() + this.getNewReleaseDiscount() + this.getPurchaserDiscount() ;
}
Ticket.prototype.getMatineeDiscount = function() {
  if (this.isMatinee) {
    return -0.5;
  }
  return 0;
}
Ticket.prototype.getNewReleaseDiscount = function() {
  if (this.isNewRelease) {
    return 1;
  }
  return 0;
}
Ticket.prototype.getPurchaserDiscount = function() {
  if (this.moviePurchaser === "student") {
    return -0.5;
  } else if (this.moviePurchaser === "senior") {
    return -1;
  }
  return 0;
}


function TicketPurchaser() {
  this.tickets = [];
}
TicketPurchaser.prototype.addTicket = function(ticket, numberOfTickets) {
  for(var i=0; i<numberOfTickets; i++) {
    this.tickets.push(ticket);
  }
}
TicketPurchaser.prototype.getTotalPrice = function() {
  var totalPrice = 0;
  this.tickets.forEach(function(ticket) {
    totalPrice += ticket.getPrice();
  });
  return totalPrice;
}


// ===============================
// User Interface Logic
// ===============================

$(document).ready(function() {
  // establish new TicketPurchaser
  var siteUser = new TicketPurchaser;

  // event handler for adding a ticket
  $('#ticketSubmit').submit(function(event) {
    event.preventDefault();
    var movieName = $('#movieSelection').val();
    var movieTime = $('#timeSelection').val();
    var isMatinee = false;
    var isNewRelease = false;
    if (movieTime === "1:00") {
      isMatinee = true;
    }

    var regularTicket = new Ticket(movieName, movieTime, "regular", isMatinee, isNewRelease);
    siteUser.addTicket(regularTicket, $('#regularTicketSelection').val());

    var studentTicket = new Ticket(movieName, movieTime, "student", isMatinee, isNewRelease);
    siteUser.addTicket(studentTicket, $('#studentTicketSelection').val());

    var seniorTicket = new Ticket(movieName, movieTime, "senior", isMatinee, isNewRelease);
    siteUser.addTicket(seniorTicket, $('#seniorTicketSelection').val());

    // determine price of individual purchase bundle
    var priceSubTotal = $('#regularTicketSelection').val()*regularTicket.getPrice() + $('#studentTicketSelection').val()*studentTicket.getPrice() + $('#seniorTicketSelection').val()*seniorTicket.getPrice();

    // append ticket DOM chuncks to result column
    $('#resultList').append('<div class="ticket"><h3 class="movieName">' + movieName + '</h3><p>The movie starts at <span class="movieTime">' + movieTime + '</span></p><p class="ticketNumber">' + 'Regular: ' + ($('#regularTicketSelection').val() + '  Student: ' +  $('#studentTicketSelection').val() + '  Senior: ' + $('#seniorTicketSelection').val()) + '</p><p>This movie is <span class="isMatinee"></span>a matinee.</p><p>This bundle of ticket(s) costs $' + priceSubTotal + '</p></div>');

    // insert total cost into html
    $('#totalCostSpan').text(siteUser.getTotalPrice());
  });


});


// siteUser.addTicket("regular", 5)
