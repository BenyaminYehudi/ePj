var audio = new Audio("http://s1download-universal-soundbank.com/mp3/sounds/5838.mp3");
var w;
function startWorker() {
  var source = document.getElementById("source").value;
  var destination = document.getElementById("destination").value;
  var route = {source:source, destination:destination};
    if(typeof(Worker) !== "undefined") {
        if(typeof(w) == "undefined") {
            w = new Worker("ePjWw.js");
            audio.play();
            document.getElementById("result").innerHTML = "<img src='http://www.mytreedb.com/uploads/mytreedb/loader/ajax_loader_blue_128.gif'/>";
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
