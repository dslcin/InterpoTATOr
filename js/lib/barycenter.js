function Barycenter(alpha, beta, gamma) {
  this.alpha = alpha;
  this.beta = beta;
  this.gamma = gamma;
}

function findBarycenter(x, y, p1, p2, p3) {
  var denom = ((p1.x - p3.x) * (p2.y - p3.y)) - ((p1.y - p3.y) * (p2.x - p3.x));
  
	var	alpha = ((p2.y - p3.y) * (x - p3.x) - ((p3.x - p2.x) * (p3.y - y))) / denom;
	var	beta = (((p3.y - p1.y) * (x - p3.x)) - ((p1.x - p3.x) * (p3.y - y))) / denom;
	var	gamma = 1.0 - alpha - beta;
	
  return new Barycenter(alpha, beta, gamma);
}