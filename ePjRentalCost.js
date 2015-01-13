var carList = localStorage.getItem("carList");
carList = JSON.parse(carList);
var selectedCar = localStorage.getItem("selectedCar");

var audio = new Audio("http://s1download-universal-soundbank.com/mp3/sounds/5838.mp3");
var w;
function startWorker() {
  var source = document.getElementById("source").value;
  var destination = document.getElementById("destination").value;
  var currentCar= carList[selectedCar];
  var route = {source:source, destination:destination, selectedCar:currentCar};
    if(typeof(Worker) !== "undefined") {
        if(typeof(w) == "undefined") {
            w = new Worker("ePjWw.js");
            audio.play();
            document.getElementById("result").innerHTML = "<img src='http://www.mytreedb.com/uploads/mytreedb/loader/ajax_loader_blue_128.gif'/>";
            w.postMessage(route);
        }
        w.onmessage = function(event) {
            document.getElementById("result").innerHTML = "The cost to rent the "+currentCar.company+" "+currentCar.carModel+" will be $"+event.data+" <button class=\"btn btn-primary\" onclick=\"confirmOrder()\">Confirm</button>";
            stopWorker();
        };
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Workers...";
    }
};
function stopWorker() { 
    audio.pause();
    w.terminate();
    w = undefined;
};

function confirmOrder(){
  var theCar = carList[selectedCar];
  var rentedCars = {};
  rentedCars[theCar.licensePlate] = theCar;
  console.log(rentedCars);
  localStorage.setItem("rentedCars", JSON.stringify(rentedCars));
  delete carList[selectedCar];
  localStorage.setItem("carList", JSON.stringify(carList));
  $("#confirmedRentOrder").html('<p>Thank you for choosing JB Rental!</p><p>Your car will be waiting for you at your selected starting location.</p><a href="index.html"><button class="btn btn-primary">Main Page</button></a>').css("display","block");
  $("#fade").css("display","block");
};
