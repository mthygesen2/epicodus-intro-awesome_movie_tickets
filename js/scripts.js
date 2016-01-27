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

    // if ( $('#regularTicketSelection').val()===0 && $('#studentTicketSelection').val()===0 && $('#seniorTicketSelection').val()===0)
    if ( $('#regularTicketSelection').val() === '0' && $('#studentTicketSelection').val() === '0' && $('#seniorTicketSelection').val() === '0') {
      alert("Please select a number of tickets");
      return;
    }
    // Check if movie is a matinee
    if (movieTime.includes('Matinee')) {
      isMatinee = true;
      movieTime = movieTime.slice(0,movieTime.length-8);
    }

    // Check if movie is a newRelease
    if (movieName.includes('New Release')) {
      isNewRelease = true;
      movieName = movieName.slice(0,movieName.length-12);
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
    $('#resultList').append('<div class="ticket"><img class="movieImage" src="http://lorempixel.com/400/200/"><h3 class="movieName">' + movieName + '</h3><p>The movie starts at <span class="movieTime">' + movieTime + '</span></p><p class="ticketNumber">' + 'Regular: ' + ($('#regularTicketSelection').val() + '  Student: ' +  $('#studentTicketSelection').val() + '  Senior: ' + $('#seniorTicketSelection').val()) + '</p><p>This movie is <span class="isMatinee">not </span>a matinee.</p><p>This bundle of ticket(s) costs $' + priceSubTotal.toFixed(2) + '</p></div>');
    $('#resultFooter').show();
    // toggles mantinee 'not' from purchase bundle display
    if (isMatinee) {
      $('.isMatinee').last().hide();
    }

    // insert total cost into html
    $('#totalCostSpan').text(siteUser.getTotalPrice().toFixed(2));

    // reset the form
    $('select').each(function() {
      this.selectedIndex = 0;
    });
  });

  // event handler for reset button
  $('#resetPage').click(function() {
    siteUser = new TicketPurchaser;
    $('#resultList').empty();
    $('#resultFooter').hide();
  });

  // event handler for purchase
  $('#purchaseButton').click(function() {
    siteUser = new TicketPurchaser;
    $('#resultList').empty();
    $('#resultFooter').hide();
    prompt("Please enter your name, credit card, SSN, and mother's maiden name..");
  });

  var winWidth = $(window).width();
  var winHeight = $(window).height();

// set initial div height / width
  $('.container').css({
    'width': winWidth,
    'height': winHeight,
  });

  // make sure div stays full width/height on resize
  $(window).resize(function(){
    var winWidth = $(window).width();
    var winHeight = $(window).height();
    $('.container').css({
    'width': winWidth,
    'height': winHeight,
    });
  });

  $('.BTN').hover(function() {
    var newX = (Math.random()/2) * winWidth;
    var newY = (Math.random()/2) * winHeight;
    $(this).css('top', newX);
    $(this).css('right', newY);
  });
});


// siteUser.addTicket("regular", 5)
