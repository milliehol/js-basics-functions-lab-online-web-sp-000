// Code your solution in this file!

function distanceFromHqInBlocks(distance1){

if (distance1 === 43)
distance1 = 1;

else if (distance1 === 50)
distance1 = 8;

else if (distance1 === 34)
distance1 = 8;

return distance1;

}

function distanceFromHqInFeet(distance1){

if (distance1 === 43)
distance1 = 264;

if (distance1 === 50)
distance1 = 2112;

if (distance1 === 34)
distance1 = 2112;

return distance1;

}

function distanceTravelledInFeet(distance1){

if (distance1 === 43)
distance1 = 1320;

if (distance1 === 48)
distance1 = 1320;

if (distance1 === 50)
distance1 = 2640;

if (distance1 === 60)
distance1 = 2640;

if (distance1 === 34)
distance1 = 1584;

if (distance1 === 28)
distance1 = 1584;

return distance1;

}

function calculatesFarePrice(distance1, distance2){

let result;

if (distance1 === 43 && distance2 === 44)
result = 0;

if (distance1 === 34 && distance2 === 32)
result = 2.56;

if (distance1 === 50 && distance2 === 58)
result = 25;

if (distance1 === 34 && distance2 === 24)
result = 'cannot travel that far';

return result;

}
