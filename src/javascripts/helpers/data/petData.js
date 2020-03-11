let full = 100;
let fun = 50;
let strength = 100;
let energy = 50;

const getFullVal = () => full;

const setFullVal = (incomingVal) => {
  full = incomingVal;
};

const getFun = () => fun;

const setFun = (incomingVal) => {
  fun = incomingVal;
};

const getStrength = () => strength;

const setStrength = (incomingVal) => {
  strength = incomingVal;
};

const getEnergy = () => energy;

const setEnergy = (incomingVal) => {
  energy = incomingVal;
};

export default {
  getFullVal, setFullVal, getFun, setFun, getStrength, setStrength, getEnergy, setEnergy,
};
