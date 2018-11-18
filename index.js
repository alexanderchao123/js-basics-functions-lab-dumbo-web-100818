// Code your solution in this file!
function distanceFromHqInBlocks(street) {
  const hqStreet = 42;
  if (street >= hqStreet) {
    return street - hqStreet;
  } else {
    return hqStreet - street;
  }
};

function distanceFromHqInFeet(street) {
  const blocks = distanceFromHqInBlocks(street);
  return blocks * 264
}

function distanceTravelledInFeet(start, destination) {
  return Math.abs(destination - start) * 264
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  if (distance > 2500) {
    return "cannot travel that far";
  } else if (distance > 2000) {
    return 25;
  } else if (distance > 400) {
    let discountedDistance = distance - 400;
    return .02 * discountedDistance;
  } else if (distance) {
    return 0;
  };
};
