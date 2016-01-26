describe('Ticket', function() {
  // tests the object constructor
  it('Ticket creates an object with the right movie name', function() {
    var testTicket = new Ticket("Jaws", "7:15", "regular", false, false);
    expect(testTicket.movieName).to.equal('Jaws');
  });
  it('Ticket creates an object with the right time', function() {
    var testTicket = new Ticket("Jaws", "7:15", "regular", false, false);
    expect(testTicket.movieTime).to.equal('7:15');
  });
  it('Ticket creates an object with the right purchaser type', function() {
    var testTicket = new Ticket("Jaws", "7:15", "regular", false, false);
    expect(testTicket.moviePurchaser).to.equal('regular');
  });
  it('Ticket creates an object with the right matinee boolean', function() {
    var testTicket = new Ticket("Jaws", "7:15", "regular", false, false);
    expect(testTicket.isMatinee).to.equal(false);
  });
  it('Ticket creates an object with the right new release boolean', function() {
    var testTicket = new Ticket("Jaws", "7:15", "regular", false, false);
    expect(testTicket.isNewRelease).to.equal(false);
  });
  // test the getPrice method
  it('has a method getPrice that returns the price of a regular ticket', function() {
    var testTicket = new Ticket("Jaws", "7:15", "regular", false, false);
    expect(testTicket.getPrice()).to.equal(2);
  });
  it('has a method getPrice that returns the price of a student ticket', function() {
    var testTicket = new Ticket("Jaws", "7:15", "student", false, false);
    expect(testTicket.getPrice()).to.equal(1.5);
  });
  it('has a method getPrice that returns the price of a senior ticket', function() {
    var testTicket = new Ticket("Jaws", "7:15", "senior", false, false);
    expect(testTicket.getPrice()).to.equal(1);
  });
  it('has a method getPrice that returns the price of a new release ticket', function() {
    var testTicket = new Ticket("Jaws", "7:15", "regular", false, true);
    expect(testTicket.getPrice()).to.equal(3);
  });
  it('has a method getPrice that returns the price of a new release, student ticket', function() {
    var testTicket = new Ticket("Jaws", "7:15", "student", false, true);
    expect(testTicket.getPrice()).to.equal(2.5);
  });
  it('has a method getPrice that returns the price of a new release, senior ticket', function() {
    var testTicket = new Ticket("Jaws", "7:15", "senior", false, true);
    expect(testTicket.getPrice()).to.equal(2);
  });
  it('has a method getPrice that returns the price of a matinee ticket', function() {
    var testTicket = new Ticket("Jaws", "7:15", "regular", true, false);
    expect(testTicket.getPrice()).to.equal(1.5);
  });
  it('has a method getPrice that returns the price of a matinee, senior ticket', function() {
    var testTicket = new Ticket("Jaws", "7:15", "senior", true, false);
    expect(testTicket.getPrice()).to.equal(0.5);
  });
  it('has a method getPrice that returns the price of a matinee, student ticket', function() {
    var testTicket = new Ticket("Jaws", "7:15", "student", true, false);
    expect(testTicket.getPrice()).to.equal(1);
  });
  // test the getMatineeDiscount method
  it('has a method getMatineeDiscount that returns the discount of not a matinee', function() {
    var testTicket = new Ticket("Jaws", "7:15", "regular", false, false);
    expect(testTicket.getMatineeDiscount()).to.equal(0);
  });
  it('has a method getMatineeDiscount that returns the price of the matinee discount', function() {
    var testTicket = new Ticket("Jaws", "7:15", "regular", true, false);
    expect(testTicket.getMatineeDiscount()).to.equal(-0.5);
  });
  // test the getNewReleaseDiscount method
  it('has a method getNewReleaseDiscount that returns the price of a new release discount', function() {
    var testTicket = new Ticket("Jaws", "7:15", "regular", false, true);
    expect(testTicket.getNewReleaseDiscount()).to.equal(1);
  });
  it('has a method getNewReleaseDiscount that returns the price of not a new release discount', function() {
    var testTicket = new Ticket("Jaws", "7:15", "regular", false, false);
    expect(testTicket.getNewReleaseDiscount()).to.equal(0);
  });
  // test the getPurchaserDiscount method
  it('has a method getPurchaserDiscount that returns the discount of a regular ticket', function() {
    var testTicket = new Ticket("Jaws", "7:15", "regular", false, false);
    expect(testTicket.getPurchaserDiscount()).to.equal(0);
  });
  it('has a method getPurchaserDiscount that returns the discount of a student ticket', function() {
    var testTicket = new Ticket("Jaws", "7:15", "student", false, false);
    expect(testTicket.getPurchaserDiscount()).to.equal(-0.5);
  });
  it('has a method getPurchaserDiscount that returns the discount of a senior ticket', function() {
    var testTicket = new Ticket("Jaws", "7:15", "senior", false, false);
    expect(testTicket.getPurchaserDiscount()).to.equal(-1);
  });
});

describe('TicketPurchaser', function() {
  it('creates a purchaser object with an empty ticket array', function() {
    var testPurchaser = new TicketPurchaser();
    expect(testPurchaser.tickets).to.eql([]);
  });
  it('adds a ticket to the tickets array of a ticketPurchaser', function() {
    var testPurchaser = new TicketPurchaser();
    var testTicket = new Ticket("Jaws", "7:15", "senior", false, false);
    testPurchaser.addTicket(testTicket);
    expect(testPurchaser.tickets).to.eql([testTicket]);
  });
});
