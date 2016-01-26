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

}
Ticket.prototype.getMatineeDiscount = function() {
  if (this.isMatinee) {
    return -0.5;
  }
  return 0;
}
Ticket.prototype.getPrice = function() {

}










// ===============================
// User Interface Logic
// ===============================
