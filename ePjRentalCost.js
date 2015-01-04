var audio = new Audio("http://s1download-universal-soundbank.com/mp3/sounds/5838.mp3");
var w;
function startWorker() {
  var source = document.getElementById("source").value;
  var destination = document.getElementById("destination").value;
  var selectedCar = localStorage.getItem("selectedCar");
  var carList = localStorage.getItem("carList");
  carList = JSON.parse(carList);
  console.log(selectedCar, carList);
  selectedCar= carList[selectedCar];
  console.log(selectedCar);
  var route = {source:source, destination:destination, selectedCar:selectedCar};
    if(typeof(Worker) !== "undefined") {
        if(typeof(w) == "undefined") {
            w = new Worker("ePjWw.js");
            audio.play();
            document.getElementById("result").innerHTML = "<img src='http://www.mytreedb.com/uploads/mytreedb/loader/ajax_loader_blue_128.gif'/>";
            w.postMessage(route);
        }
        w.onmessage = function(event) {
            document.getElementById("result").innerHTML = "The cost to rent the car will be $"+event.data+" <button class=\"btn btn-primary\" onclick=\"confirm()\">Confirm</button>";
            stopWorker();
        };
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Workers...";
    }
}
function stopWorker() { 
    audio.pause();
    w.terminate();
    w = undefined;
}
