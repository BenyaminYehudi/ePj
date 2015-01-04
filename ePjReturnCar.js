function carReturn(){
  var licensePlate = $("#returnCarLicense").val();
  var rentedCars = JSON.parse(localStorage.getItem("rentedCars"));
  console.log(rentedCars);
  if (rentedCars[licensePlate] !== null){
    console.log("it exists");
  } else {
    console.log("it doesn't exist");
  }
};
