describe('Ticket', function() {
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
});
