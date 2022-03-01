const {
    commutingMethod
} =require("./2_commutingMethodFunctions");

const {
    randomclothes, wearClothes
}=require("./2_wearClothesFunction");

function main(timeToPrepare, snowingOutside,accidentsOnMap,
    roommateAwake){
    console.log("start");
    commutingMethod(timeToPrepare, snowingOutside,accidentsOnMap,
        roommateAwake)
    wearClothes(randomclothes);    
    console.log("end");
}

console.log("\n");
console.log("Starting process when have time, snow, accident");
main(true,true,true,null);
console.log("\n");
console.log("Starting process when have time, snow, no accident");
main(true,true,false,null);
console.log("\n");
console.log("Starting process when have time, and no snow");
main(true,false, null, null);
console.log("\n");
console.log("Starting process when have no time, and snow");
main(false,true, null, null);
console.log("\n");
console.log("Starting process when have no time, no snow, roommateawake");
main(false,false, null, true);
console.log("\n");
console.log("Starting process when have no time, no snow, roomatesleep");
main(false,false, null, false);