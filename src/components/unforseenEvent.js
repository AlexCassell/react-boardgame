let whoArr = ["traveling salesperson", "bridge troll", "web programmer named Alex Cassell", "lost traveler"]
let actionArr = ["chasing after", "running from", "being rude to", "trying buy something from", "criticizing"]
let happenedArr = ["a band of robbers steals", "you fell in a hole and lost", "you were attacked by a bear and misplaced", "you tripped over your own feet and dropped"]
let resourcesArr = ["coins", "gold bars", "wood bundles", "food items"]

let resourceTypeUE = 0, howManyResourceUE = 0;

const UnforseenEvent = () => {
    let whoRandom = Math.floor(Math.random()*(3 - 0) + 0);
    let actionRandom = Math.floor(Math.random()*(5 - 0) + 0);
    let happenedRandom = Math.floor(Math.random()*(4 - 0) + 0);
    let resourceRandom = Math.floor(Math.random()*(4 - 0) + 0);
    howManyResourceUE = Math.floor(Math.random()*(100 - 5) + 5);
    resourceTypeUE = resourceRandom;
    return ("While " + actionArr[actionRandom] + " a " + whoArr[whoRandom] + " " + happenedArr[happenedRandom] + " " + howManyResourceUE + " " + resourcesArr[resourceRandom] + ".");
}
// 
export default UnforseenEvent;
export {resourceTypeUE};
export {howManyResourceUE};