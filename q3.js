function rainDance(rainfall) {
    let arr = [];
    for (x in rainfall) {
        let cityObj = { name: rainfall[x].name };
        let currCity = rainfall[x].rainfall;
        let rainfallSum = 0;
        for (x in currCity) 
        rainfallSum += currCity[x]
        let avgRainfall = rainfallSum / currCity.length;
        cityObj.avgRainfall = avgRainfall;
        arr.push(cityObj);
    }
    return arr;
}
let rain =  [
    { name: "Delhi", rainfall: [2.3, 4, 3.1, 5.5, 1.1, 1.2, 7] },
    { name: "Noida", rainfall: [6.3, 0, 0.1, 3.5, 1, 2.6, 0.7] },
    { name: "Dehradun", rainfall: [12, 5.6, 3.1, 0.55, 11, 16.2, 19] },
    { name: "Nanital", rainfall: [8, 1.4, 0.61, 15.5, 6.6, 2, 9.82] },
];
let a=rainDance(rain);
console.log(a);

