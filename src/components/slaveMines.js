
let 




const SlaveMines = () => {
    let whoRandom = Math.floor(Math.random()*(7 - 0) + 0);
    let actionRandom = Math.floor(Math.random()*(5 - 0) + 0);
    let foundRandom = Math.floor(Math.random()*(4 - 0) + 0);
    let resourceRandom = Math.floor(Math.random()*(4 - 0) + 0);
    howManyResource = Math.floor(Math.random()*(100 - 5) + 5);
    resourceType = resourceRandom;
    return ("While " + actionArr[actionRandom] + " a " + whoArr[whoRandom] + ", you find " + howManyResource + " " + resourcesArr[resourceRandom] + " in a " + foundArr[foundRandom] + ".");
}
// 
export default SlaveMines;
export {resourceType};
export {howManyResource};