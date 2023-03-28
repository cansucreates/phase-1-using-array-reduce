const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
let result = 0;
const totalBatteries = batteryBatches.reduce((result, value) => result + value);

console.log(totalBatteries);