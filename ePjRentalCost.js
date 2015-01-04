var audio = new Audio("http://grooveshark.com/#!/s/07+Seaside+Rendezvous/3jSWBn?src=5");
var w;
function startWorker() {
  var source = document.getElementById("source").value;
  var destination = document.getElementById("destination").value;
  var route = {source:source, destination:destination};
    if(typeof(Worker) !== "undefined") {
        if(typeof(w) == "undefined") {
            w = new Worker("ePjWw.js");
            audio.play();
            w.postMessage(route);
        }
        w.onmessage = function(event) {
            document.getElementById("result").innerHTML = event.data;
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
