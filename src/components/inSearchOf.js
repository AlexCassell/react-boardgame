let whoArr = ["local farmer", "lost traveler", "wee damsel", "wee lad", "dragon", "euridite", "dark elf", "wizard"]
let actionArr = ["helping", "fleeing", "looking for", "hunting", "traveling with", "stealing from"]
let foundArr = ["wooden chest", "coin sack", "dead body", "deserted cart"]
let resourcesArr = ["coins", "gold bars", "wood bundles", "food items"]

let resourceType = 0, howManyResource = 0;

const InSearchOf = () => {
    let whoRandom = Math.floor(Math.random()*(7 - 0) + 0);
    let actionRandom = Math.floor(Math.random()*(5 - 0) + 0);
    let foundRandom = Math.floor(Math.random()*(4 - 0) + 0);
    let resourceRandom = Math.floor(Math.random()*(4 - 0) + 0);
    howManyResource = Math.floor(Math.random()*(100 - 5) + 5);
    resourceType = resourceRandom;
    return ("While " + actionArr[actionRandom] + " a " + whoArr[whoRandom] + ", you find " + howManyResource + " " + resourcesArr[resourceRandom] + " in a " + foundArr[foundRandom] + ".");
}
// 
export default InSearchOf;
export {resourceType};
export {howManyResource};

