let sportsOne: string[] = ["Golf", "Cricket", "Tennis", "Swimming"];

// for (let i = 0; i < sportsOne.length; i++) {
//     console.log(sportsOne[i]);
// }

// use the simplied for loop

for (let tempSport of sportsOne) {
    if (tempSport == "Swimming") {
        console.log(tempSport + " << My Favorite!");
    }
    else {
        console.log(tempSport);
    }
}