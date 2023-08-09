const { map, range } = require('@laufire/utils/collection');
const { rndBetween } = require('@laufire/utils/lib');
const arrayCount = 10;

const getTwoDArray = () =>
  map(range(1, arrayCount), () =>
    map(range(0, rndBetween(1, 10)), () => 'a'));

const main = () =>
  console.log(getTwoDArray());
  
main();
