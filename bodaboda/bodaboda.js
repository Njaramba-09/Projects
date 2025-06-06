//declaring constants
const carFare =50;
const chargePerKm = 15;
let fare ;
let distanceInKm ;
let totalFare ;
//declaring function
function calculateCarFare(u) {
 let fare= distanceInKm * chargePerKm;
    totalFare = carFare + fare;
    return totalFare, fare;
}
//input
X= prompt("Unafika wapi Mkubwa?Kilometer ngapi?")
distanceInKm = parseInt(X);
console.log(`Uko kwote?Io ni ${distanceInKm}km:`);
console.log("Ukilalia Pikipiki: Kes 50")
//function calculation
calculateCarFare(distanceInKm);
console.log(`mpaka huko KES ${fare}`);
console.log(`Total: KES ${totalFare}`);
console.log("      ");
console.log("Panda Pikipiki");