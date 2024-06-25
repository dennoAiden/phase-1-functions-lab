const feetPerBlock = 264;

function distanceFromHqInBlocks(street) {
  const hqStreet = 42; // Headquarters location
  return Math.abs(street - hqStreet);
}

function distanceFromHqInFeet(street) {
  return distanceFromHqInBlocks(street) * feetPerBlock;
}

function distanceTravelledInFeet(start, destination) {
  const blocksTravelled = Math.abs(start - destination);
  return blocksTravelled * feetPerBlock;
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0; // Free ride for the first 400 feet
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02; // 2 cents per foot after the first 400 feet
  } else if (distance > 2000 && distance <= 2500) {
    return 25; // Flat rate of 25 dollars for distances over 2000 feet
  } else {
    return 'cannot travel that far'; // Rides over 2500 feet are not allowed
  }
}


