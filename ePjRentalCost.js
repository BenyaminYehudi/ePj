var w;
function startWorker() {
  var source = document.getElementById("source").value;
  var destination = document.getElementById("destination").value;
  var route = {source:source, destination:destination};
    if(typeof(Worker) !== "undefined") {
        if(typeof(w) == "undefined") {
            w = new Worker("ePjWw.js");
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
    w.terminate();
    w = undefined;
}
