var i= 0;

function multiplesOfSeven() {
    while(true){
        i++
        if(i%7==0){
            postMessage(i);   
        }
         setTimeout("multiplesOfSeven()",2500);
    }
}

multiplesOfSeven();
