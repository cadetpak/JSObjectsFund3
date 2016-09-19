// Assignment 3
// modify code to use Prototype
// each vehicle generates random VIN (use math.random & math.floor)

function Vehicle(name, wheels, passengers, speed){
	var characters = "0123456789ABCD"; 

	this.distance_travelled = 0;
	this.name = name;
	this.wheels = wheels;
	this.passengers = passengers;
	this.speed = speed;
	this.vin = createVIN();

	function createVIN(){
		var vin = ''; // initially empty string
		for (var i = 0; i < 10; i++){
			vin += characters[Math.floor(Math.random()*14)];
			// adds random letter/num from string of 14 in var characters
		}
		return vin;
	}
}

Vehicle.prototype.makeNoise = function(){
	console.log("Vrooom!");
};

Vehicle.prototype.updateDistanceTravelled = function(){
	this.distance_travelled += this.speed;
};

Vehicle.prototype.move = function(){
	this.updateDistanceTravelled();
	this.makeNoise();
	return this;
};

Vehicle.prototype.checkMiles = function(){
	console.log(this.distance_travelled);
	return this;
};


var Bike = new Vehicle("Bike", 2, 1, 20);
console.log(Bike.vin);
Bike.checkMiles();
Bike.move().move().checkMiles(); // outputs 'Vrooom! Vrooom! 40'
