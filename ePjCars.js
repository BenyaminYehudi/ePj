$( document ).ready(function() {
	
function Car (licensePlate, transmissionType, company, year, carModel, basePrice) {
	this.licensePlate = licensePlate;
	this.transmissionType = transmissionType;
	this.company = company;
	this.year = year;
	this.carModel = carModel;
	this.basePrice = basePrice;
};
var carList ={};

carList.chevySpark = new Car ("27-832-90", "Manual", "Chevrolet", "2011", "Spark", "$30");
carList.nissanVersa = new Car ("12-345-67", "Automatic", "Nissan", "2012", "Versa", "$50");
carList.fiat500 = new Car ("21-543-76", "Automatic", "Fiat", "2013", "500", "$45");
carList.toyotaCorolla = new Car ("32-365-97", "Automatic", "", "20", "", "$0");
carList.chrysler200 = new Car ("18-333-04", "Automatic", "", "20", "", "$0");
carList.nissanLEAF = new Car ("82-785-63", "Automatic", "", "20", "", "$0");
carList.toyotaPrius = new Car ("95-277-09", "Automatic", "", "20", "", "$0");
carList.kiaOptima = new Car ("77-183-83", "Automatic", "", "20", "", "$0");
carList.fordFusion = new Car ("62-376-30", "Automatic", "", "20", "", "$0");
carList.dodgeCharger = new Car ("40-902-54", "Automatic", "", "20", "", "$0");


$("li button").on("click", function(){
	console.log(this.id);
	showCar(this.id);
});

function showCar(carId){
	$("#carDetails").html(carId);	
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
    
 function nextImage()
  {  imgCount=(imgCount+1<imgArray.length)? imgCount+1 : 0;
     var newImage='<img border="0" src="'+imgArray[imgCount]+
     '" style="width:300px; height:200px;" />';
     document.getElementById("changingCars").innerHTML=newImage;
   setTimeout(function(){nextImage();},3000);
  }
});



});
