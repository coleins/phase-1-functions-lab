function distanceFromHqInBlocks(block) {
  const hqLocation = 42;
  return Math.abs(block - hqLocation);
}
function distanceFromHqInFeet(block) {
  const blockInFeet = 264;
  const hqLocation = 42;
  const distanceFromHqInBlocks = Math.abs(block - hqLocation);
  return distanceFromHqInBlocks * blockInFeet;
}
function distanceTravelledInFeet(startBlock, endBlock) {
  const blockInFeet = 264;
  const distanceInBlocks = Math.abs(endBlock - startBlock);
  return distanceInBlocks * blockInFeet;
}
function calculatesFarePrice(startBlock, endBlock) {
  const blockInFeet = 264;
  const distanceInBlocks = Math.abs(endBlock - startBlock);
  const distanceInFeet = distanceInBlocks * blockInFeet;
  if (distanceInFeet <= 400) {
    return 0;
  } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
    return (distanceInFeet - 400) * 0.02;
    return fare.toFixed(2);
  } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
