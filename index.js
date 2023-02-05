// Code your solution in this file!
const hq = 42


function distanceFromHqInBlocks( start ) {
    let distance = Math.abs ( hq - start )
    return distance;
}
//returns the number of blocks given a value

function distanceFromHqInFeet( start ) {
    let feet = Math.abs ((hq - start) * 264)
    return feet;
}
//call the blocks function from inside the feet function
//pass the argument from feet into blocks

function distanceTravelledInFeet( start, current) {
    let currentDistance = Math.abs(( current - start) * 264)
    return currentDistance;
}
//returns the number of feet traveled

function calculatesFarePrice( start, destination ) {
    let currentDistance = Math.abs(( destination - start) * 264)
    let price = 0
    let newPrice = .02 * (currentDistance - 400)
    if (currentDistance < 400) {
        return price;
    } else if (currentDistance < 2000) { 
        return newPrice;
    } else if (currentDistance < 2500) {
        let flatPrice = 25
        return flatPrice;
    } else {
        return "cannot travel that far"
    }
};
//returns the fare for the customer