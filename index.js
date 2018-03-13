function produceDrivingRange(max) {
  return function(block1, block2){
    let b1 = parseInt(block1.slice(0, -2))
    let b2 = parseInt(block2.slice(0, -2))
    if ((b2-b1) > max) {return `${b2-b1-max} blocks out of range`}
    else { return `within range by ${b2-b1}`}
  };
}

function produceTipCalculator(tip) {
  return function(fare) {
    return tip*fare;
  }
}

function createDriver() {
  let driverId = 0
  return class {
    constructor(name){
      this.name = name
      this.id = ++driverId
    }
  }
}
