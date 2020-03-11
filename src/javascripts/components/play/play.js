import petData from '../../helpers/data/petData';
import utils from '../../helpers/utils';
import './play.scss';

const funMeter = (event) => {
  let fun = petData.getFun();
  if (event.currentTarget.id === 'super-fun') {
    if (fun <= 50) {
      petData.setFun(fun + 50);
    } else if (fun > 51 && fun <= 100) {
      petData.setFun(fun = 100);
    }
  } else if (event.currentTarget.id === 'slightly-fun') {
    if (fun < 98) {
      petData.setFun(fun + 2);
    } else if (fun >= 98 && fun <= 100) {
      petData.setFun(fun = 100);
    }
  }
  $('#fun-score').html(petData.getFun());
};


const funTracker = () => {
  const domString = `<div>
  <h2>Achilles</h2>
  <p>Super Fun Activity</p>
  <button class="have-fun" id="super-fun"><i class="fas fa-motorcycle"></i></button>
  <p>Slightly Fun Activity</p>
  <button class="have-fun" id="slightly-fun"><i class="fas fa-bicycle"></i></button>
  <h3 id="fun-score">${petData.getFun()}</h3>
  </div>`;
  utils.printToDom('play', domString);
  $('.have-fun').on('click', funMeter);
};

export default { funTracker };
