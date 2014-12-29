function Car (licensePlate, transmissionType, carModel) {
	this.licensePlate = licensePlate;
	this.transmissionType = transmissionType;
	this.carModel = carModel;
};

$(function(){

var picCount=0;  
var picArray= ["https://images.hertz.com/vehicles/152x88/ZEILMCMR999.jpg",
"https://images.hertz.com/vehicles/152x88/ZEILCCAR999.jpg",
"https://images.hertz.com/vehicles/152x88/ZEILEDAR999.jpg",
"https://images.hertz.com/vehicles/152x88/ZEILEDMR999.jpg",
"https://images.hertz.com/vehicles/152x88/ZEILCDAR999.jpg",
"https://images.hertz.com/vehicles/152x88/ZEILCDMR999.jpg",
"https://images.hertz.com/vehicles/152x88/ZEILIDAH999.jpg",
"https://images.hertz.com/vehicles/152x88/ZEILIDAR999.jpg",
"https://images.hertz.com/vehicles/152x88/ZEILJDAR999.jpg",
"https://images.hertz.com/vehicles/152x88/ZEILSDAR999.jpg"];
    
    nextPic();
    
 function nextPic()
  {  picCount=(picCount+1<picArray.length)? picCount+1 : 0;
     var build='<img border="0" src="'+picArray[picCount]+
     '" style="" />';
     document.getElementById("changingCars").innerHTML=build;
   setTimeout(function(){nextPic();},3000);
  }
});
