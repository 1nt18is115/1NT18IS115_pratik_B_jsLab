var clicks = 0;//base case for veggies array item i

var clicksfruit=0;//base case for fruit array item i 
var bill=0;     //base case, then take case i veggie, get order and same for fruit i and then total bill amount
function onClick() {
  clicks += 1;
  document.getElementById("clicks").innerHTML = clicks;

bill=clicks*50;  
    document.getElementById("billamount").innerHTML =bill; 
};

function onClickminus(){
    if(clicks>0){
      clicks -= 1;
  document.getElementById("clicks").innerHTML = clicks;
  bill=bill -50;  
  document.getElementById("billamount").innerHTML =bill; 
    }
};

function onClickfruit(){
     clicksfruit += 1;
  document.getElementById("clicksfruit").innerHTML = clicksfruit;

bill=bill+clicksfruit*60;  
    document.getElementById("billamount").innerHTML =bill; 
}

function onClickminusfruit(){
    if(clicksfruit>0){
      clicksfruit -= 1;
  document.getElementById("clicksfruit").innerHTML = clicks;
  bill=bill-60;  
  document.getElementById("billamount").innerHTML =bill; 
    }
};



