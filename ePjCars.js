function Car (licensePlate, transmissionType, company, year, carModel, basePrice) {
	this.licensePlate = licensePlate;
	this.transmissionType = transmissionType;
	this.company = company;
	this.year = year;
	this.carModel = carModel;
	this.basePrice = basePrice;
};

$(function(){

var imgCount=0;  
var imgArray= ["https://www.alamo.com/alamoData/vehicle/bookingCountries/US/CARS/ECAR.doi.320.high.imageSmallSideProfileNodePath.png/1408023566067.png",
"https://www.alamo.com/alamoData/vehicle/bookingCountries/US/CARS/CCAR.doi.320.high.imageSmallSideProfileNodePath.png/1408023598583.png",
"https://www.alamo.com/alamoData/vehicle/bookingCountries/US/CARS/CXAR.doi.320.high.imageSmallSideProfileNodePath.png/1408029275863.png",
"https://www.alamo.com/alamoData/vehicle/bookingCountries/US/CARS/ICAR.doi.320.high.imageSmallSideProfileNodePath.png/1408023634360.png",
"https://www.alamo.com/alamoData/vehicle/bookingCountries/US/CARS/SCAR.doi.320.high.imageSmallSideProfileNodePath.png/1408029330813.png",
"https://www.alamo.com/alamoData/vehicle/bookingCountries/US/CARS/SCAH.doi.320.high.imageSmallSideProfileNodePath.png/1408023932839.png",
"https://www.alamo.com/alamoData/vehicle/bookingCountries/US/CARS/FCAH.doi.320.high.imageSmallSideProfileNodePath.png/1408029477280.png",
"https://www.alamo.com/alamoData/vehicle/bookingCountries/US/CARS/FCAR.doi.320.high.imageSmallSideProfileNodePath.png/1408029314915.png",
"https://www.alamo.com/alamoData/vehicle/bookingCountries/US/CARS/FCDR.doi.320.high.imageSmallSideProfileNodePath.png/1408029356219.png",
"https://www.alamo.com/alamoData/vehicle/bookingCountries/US/CARS/GXAR.doi.320.high.imageSmallSideProfileNodePath.png/1408029442186.png"];
    
    nextImage();
    
 function nextImage()
  {  imgCount=(imgCount+1<imgArray.length)? imgCount+1 : 0;
     var newImage='<img border="0" src="'+imgArray[imgCount]+
     '" style="width:300px; height:200px;" />';
     document.getElementById("changingCars").innerHTML=newImage;
   setTimeout(function(){nextImage();},3000);
  }
});
