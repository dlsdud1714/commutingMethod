

function commutingMethod(timeToPrepare, snowingOutside,accidentsOnMap,
     roommateAwake){


console.log("Have enough time to go to work?", timeToPrepare);

if(timeToPrepare){
    console.log("Snow outside?", snowingOutside);

    if(snowingOutside){
    console.log("Any accidents on Google map?", accidentsOnMap);

        if(accidentsOnMap){
            console.log("Take a bus or C-train");
        }
        else{
            console.log("Call Uber");
        }
    }
    else{
        console.log("Take a bus or C-train");
    }
}
else{
    console.log("Snow outside?", snowingOutside);
    if(!snowingOutside){
        console.log("Roommate awake?", roommateAwake)
         if(roommateAwake){
             console.log("Ask her for a ride");
             }
             else{
            console.log("Call Uber");
            }  
    }
    else{
        console.log("Call Uber");
    }
}

}

module.exports={commutingMethod };