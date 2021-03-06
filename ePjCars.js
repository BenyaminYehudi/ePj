$( document ).ready(function() {
	
function Car (licensePlate, transmissionType, company, year, carModel, basePrice, carImage) {
	this.licensePlate = licensePlate;
	this.transmissionType = transmissionType;
	this.company = company;
	this.year = year;
	this.carModel = carModel;
	this.basePrice = basePrice;
	this.carImage = carImage;
};
var carList ={};

carList["12-345-67"] = new Car ("12-345-67", "Automatic", "Nissan", "2012", "Versa", 50, "https://www.alamo.com/alamoData/vehicle/bookingCountries/US/CARS/CCAR.doi.320.high.imageSmallSideProfileNodePath.png/1408023598583.png");
carList["21-543-76"] = new Car ("21-543-76", "Manual", "Fiat", "2013", "500", 35, "https://www.alamo.com/alamoData/vehicle/bookingCountries/US/CARS/CXAR.doi.320.high.imageSmallSideProfileNodePath.png/1408029275863.png");
carList["32-365-97"] = new Car ("32-365-97", "Automatic", "Toyota", "2014", "Corolla", 50, "https://www.alamo.com/alamoData/vehicle/bookingCountries/US/CARS/ICAR.doi.320.high.imageSmallSideProfileNodePath.png/1408023634360.png");
carList["18-333-04"] = new Car ("18-333-04", "Automatic", "Chrysler", "2014", "200", 60, "https://www.alamo.com/alamoData/vehicle/bookingCountries/US/CARS/SCAR.doi.320.high.imageSmallSideProfileNodePath.png/1408029330813.png");
carList["82-785-63"] = new Car ("82-785-63", "Automatic", "Nissan", "2010", "LEAF", 40, "https://www.alamo.com/alamoData/vehicle/bookingCountries/US/CARS/ICAE.doi.320.high.imageSmallSideProfileNodePath.png/1408029527448.png");
carList["95-277-09"] = new Car ("95-277-09", "Automatic", "Toyota", "2012", "Prius", 45, "https://www.alamo.com/alamoData/vehicle/bookingCountries/US/CARS/SCAH.doi.320.high.imageSmallSideProfileNodePath.png/1408023932839.png");
carList["77-183-83"] = new Car ("77-183-83", "Automatic", "Kia", "2014", "Optima", 50, "https://www.alamo.com/alamoData/vehicle/bookingCountries/US/CARS/FCAH.doi.320.high.imageSmallSideProfileNodePath.png/1408029477280.png");
carList["62-376-30"] = new Car ("62-376-30", "Automatic", "Ford", "2013", "Fusion", 55, "https://www.alamo.com/alamoData/vehicle/bookingCountries/US/CARS/FCAR.doi.320.high.imageSmallSideProfileNodePath.png/1408029314915.png");
carList["40-902-54"] = new Car ("40-902-54", "Automatic", "Dodge", "2014", "Charger", 65, "https://www.alamo.com/alamoData/vehicle/bookingCountries/US/CARS/FCDR.doi.320.high.imageSmallSideProfileNodePath.png/1408029356219.png");
carList["27-832-90"] = new Car ("27-832-90", "Manual", "Chevrolet", "2011", "Spark", 30, "https://www.alamo.com/alamoData/vehicle/bookingCountries/US/CARS/ECAR.doi.320.high.imageSmallSideProfileNodePath.png/1408023566067.png");

localStorage.setItem("carList", JSON.stringify(carList));

$("li button").on("click", function(){
	showCar(this.id);
	showCarImage(this.id);
});

function showCar(carId){
	var carDetails = "<ul><li>License: "+carList[carId].licensePlate+"</li>";
	carDetails= carDetails+"<li>Company: "+carList[carId].company+"</li>";
	carDetails= carDetails+"<li>Model: "+carList[carId].carModel+"</li>";
	carDetails= carDetails+"<li>Year: "+carList[carId].year+"</li>";
	carDetails= carDetails+"<li>Transmission: "+carList[carId].transmissionType+"</li>";
	carDetails= carDetails+"<li>Base Price: $"+carList[carId].basePrice+"</li>";
	carDetails= carDetails+"</ul>";
	carDetails= carDetails+"<button class='btn btn-primary' onclick='proceed(\""+carId+"\")'>Proceed</button>";
	$("#carDetails").html(carDetails);
	$("#carDetailsContainer").css("border","ridge #A4A65D");
};

function showCarImage(carId){
	var carImg = '<img src="'+carList[carId].carImage+'" />';
	$("#carImg").html(carImg);
};


$(function(){
	var imgCount=0;  
	var imgArray= ["https://www.alamo.com/alamoData/vehicle/bookingCountries/US/CARS/ECAR.doi.320.high.imageSmallSideProfileNodePath.png/1408023566067.png",
	"https://www.alamo.com/alamoData/vehicle/bookingCountries/US/CARS/CCAR.doi.320.high.imageSmallSideProfileNodePath.png/1408023598583.png",
	"https://www.alamo.com/alamoData/vehicle/bookingCountries/US/CARS/CXAR.doi.320.high.imageSmallSideProfileNodePath.png/1408029275863.png",
	"https://www.alamo.com/alamoData/vehicle/bookingCountries/US/CARS/ICAR.doi.320.high.imageSmallSideProfileNodePath.png/1408023634360.png",
	"https://www.alamo.com/alamoData/vehicle/bookingCountries/US/CARS/SCAR.doi.320.high.imageSmallSideProfileNodePath.png/1408029330813.png",
	"https://www.alamo.com/alamoData/vehicle/bookingCountries/US/CARS/ICAE.doi.320.high.imageSmallSideProfileNodePath.png/1408029527448.png",
	"https://www.alamo.com/alamoData/vehicle/bookingCountries/US/CARS/SCAH.doi.320.high.imageSmallSideProfileNodePath.png/1408023932839.png",
	"https://www.alamo.com/alamoData/vehicle/bookingCountries/US/CARS/FCAH.doi.320.high.imageSmallSideProfileNodePath.png/1408029477280.png",
	"https://www.alamo.com/alamoData/vehicle/bookingCountries/US/CARS/FCAR.doi.320.high.imageSmallSideProfileNodePath.png/1408029314915.png",
	"https://www.alamo.com/alamoData/vehicle/bookingCountries/US/CARS/FCDR.doi.320.high.imageSmallSideProfileNodePath.png/1408029356219.png",];
	    
	    nextImage();
	    
	function nextImage(){
		imgCount=(imgCount+1<imgArray.length)? imgCount+1 : 0;
		var newImage='<img border="0" src="'+imgArray[imgCount]+'" style="width:300px; height:200px;" />';
		document.getElementById("changingCars").innerHTML=newImage;
		setTimeout(function(){nextImage();},3000);
	  }
});


});


function proceed(carId){
	localStorage.setItem("selectedCar", carId);
	window.location="ePjRentalCost.html";
};
