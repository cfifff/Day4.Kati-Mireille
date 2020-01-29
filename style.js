
// Basic - Exercise 1

// function calculateAge(birthYear) {

// 	var currentYear = new Date();
// 	var currentYear = currentYear.getFullYear();
// 	var age = currentYear - birthYear;
// 	console.log(age);

// }

// calculateAge(1989);



// Basic - Exercise 2

// function Truncate(){
// 	var a = "I am a hero from World of Warcraft";
// 	var result = a.substring(0,12); 
// 	console.log(result);

// }
// Truncate();


// Basic-Exercise 3

// function personalInformation() {
// 	var firstName = "Kathi";
// 	var surName = "Hansi";
// 	var age = 30;
// 	var aboutMe = "future Programmer";

// 	document.getElementById("demo").innerHTML="Hy my Name is " + firstName +" " + surName + " " + age + " years old and I am a " + aboutMe;
// }

// personalInformation();


// var personalInformation = {
// 	firstName: "Kathi",
// 	surName: "Hansi",
// 	age: 30,
// 	aboutMe: "future Programmer",
// 	hy: "Hy my name is",

// 	outmessage: function() {
// 		return this.hy + this.firstName + this.surName + this.age + this.aboutMe;
// 	}
// }

// console.log(personalInformation.outmessage());


//Exercise 4 - Intermediate
var lindnerHotel = new HotelConstructor("Lindner Hotel", "30", "25");
var austriaTrend = new HotelConstructor("Austria Trend Hotel", "40", "28");
var schloßSchonbrunn = new HotelConstructor("Hotel Schloß Schonbrunn", "25", "20");

function HotelConstructor(name, rooms, booked) {
	this.name = name;
	this.rooms = rooms;
	this.booked = booked;
	this.checkAvailability = function() {
	return this.rooms - this.booked;
	}
}
document.getElementById("demo").innerHTML = lindnerHotel.checkAvailability()

























