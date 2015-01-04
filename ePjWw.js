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

var cost = 0;
onmessage = function(route) {
  var distance = distances[route.data.source][route.data.destination];
  console.log(route.data);
    if (distance<=90){
      cost = distance*1.2;
    } else {
      var uptoNinety = 90*1.2;
      var aboveNinety = distance-90;
      cost = (aboveNinety*0.9)+(uptoNinety);
    }
    setTimeout("postMessage(cost)",9000);
}
