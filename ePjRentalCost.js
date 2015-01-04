var distances = {
  "Jerusalem":{
    "Jerusalem":0,
    "Tel Aviv":67.4,
    "Eilat":315,
    "Tiberias":178,
    "Haifa":151},
  "Tel Aviv":{
    "Tel Aviv":0,
    "Jerusalem":67.4,
    "Eilat":346,
    "Tiberias":136,
    "Haifa":91.8},
  "Eilat":{
    "Eilat":0,
    "Jerusalem":315,
    "Tel Aviv":346,
    "Tiberias":455,
    "Haifa":428},
  "Haifa":{
    "Haifa":0,
    "Jerusalem":151,
    "Tel Aviv":91.8,
    "Eilat":428,
    "Tiberias":63.3},
  "Tiberias":{
    "Tiberias":0,
    "Jerusalem":178,
    "Tel Aviv":136,
    "Eilat":455,
    "Haifa":428}
};

var w;
function startWorker() {
    if(typeof(Worker) !== "undefined") {
        if(typeof(w) == "undefined") {
            w = new Worker("ePjWw.js");
        }
        w.onmessage = function(event) {
            document.getElementById("result").innerHTML = event.data;
        };
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Workers...";
    }
}
function stopWorker() { 
    w.terminate();
    w = undefined;
}
