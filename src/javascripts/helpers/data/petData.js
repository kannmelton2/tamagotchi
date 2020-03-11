let full = 100;
let fun = 50;

const getFullVal = () => full;

const setFullVal = (incomingVal) => {
  full = incomingVal;
};

const getFun = () => fun;

const setFun = (incomingVal) => {
  fun = incomingVal;
};


export default {
  getFullVal, setFullVal, getFun, setFun,
};
