import petData from '../../helpers/data/petData';
import utils from '../../helpers/utils';
import './fight.scss';

const strengthMeter = (event) => {
  let strength = petData.getStrength();
  if (event.currentTarget.id === 'run-away') {
    if (strength < 100) {
      petData.setStrength(strength + 1);
    } else if (strength === 100) {
      petData.setStrength(strength = 100);
    }
  } else {
    petData.setStrength(strength - 10);
  }
  $('#strength-score').html(petData.getStrength());
};


const strengthTracker = () => {
  const domString = `<div>
  <h1>Fight</h1>
  <h2>Achilles</h2>
  <p>Run Away (Bravely)</p>
  <button class="fight" id="run-away"><i class="fas fa-running"></i></button>
  <p>Commit Violence</p>
  <button class="fight" id="violence"><i class="fas fa-burn"></i></button>
  <h3 id="strength-score">${petData.getStrength()}</h3>
  </div>`;
  utils.printToDom('fight', domString);
  $('.fight').on('click', strengthMeter);
};

export default { strengthTracker };
