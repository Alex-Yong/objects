//Create a function that creates car objects which have a make, model year, and color.
function cars(a,b,c,d){
  //variable that creates the cars speed
  var speed = 30;
  //identify make, model, year, color
  return{
    make: a,
    model: b,
    year: c,
    color: d,
    // create function that returns as a string to tell user the car's information
    getCars: function(){return this.make+" "+ this.model +" "+ this.year +" "+ this.color;},
    //function to return the speed
    getSpeed: function(){return speed;},
    //function to set the acceleration
    accelerate: function(){
        return speed=speed+10;
      },
    //function to set the decrease in speed
    brake: function(){
      speed=speed-3;
      console.log(speed);
    },
    brake2: function(){
      speed= speed -1;
      console.log(speed);
    },
    accelerate2: function(){
      speed = ++speed
    }
  }
}



//function that allows car to accelerate to 70mph
function acceleration(a){
  while(a.getSpeed()<70){
   a.accelerate();}
   return a.getSpeed();
}
//function that breaks exactly at 0
function brake(a){
  while(a.getSpeed()>=15){
    a.brake();
  };
  while((a.getSpeed()<15) && (a.getSpeed()>0)){
    a.brake2();
    console.log(a.getSpeed());
  }
  return a.getSpeed();
}


//function that stops acceleration at 85
function acceleration2(a){
  while(a.getSpeed()<=70){
    a.accelerate();
  };
  while((a.getSpeed()>70) && (a.getSpeed()<85)){
    a.accelerate2();
    console.log(a.getSpeed());
  }
  return a.getSpeed();
}

//emergency break that doesn't go over half the max speed
function eBrake(min,max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random()*((max/2)-min+1))+min;
}







  userId != password;
  userId.length >= 6 && password.length >= 6;
  !userId.includes("!") && !userId.includes("#") && !userId.includes("$");
  password.includes("!") || password.includes("#") || password.includes("$");
  password != "password"

function checkUserID(userId) {
  alert(userId != "password")
}



  function yourId() {
    var userId = prompt("Enter Id");
    var password = prompt("Enter password");
    // var regularExpression = /[0-9]/
    var Identification = (userId != password  && userId.length >= 6 && (!userId.includes("!") && !userId.includes("#") && !userId.includes("$")));
    var pass = (password != "password")
      && (password.includes("!") || password.includes("#") || password.includes("$"))
      && (password.includes("0") || password.includes("1") || password.includes("2") || password.includes("3") || password.includes("4") || password.includes("5") || password.includes("6") || password.includes("7") || password.includes("8") || password.includes("9"))
      && (password != password.toUpperCase() && password != password.toLowerCase()) ;
    alert("Valid: " + (Identification && pass) );
  }
