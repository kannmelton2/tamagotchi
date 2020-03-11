import petData from '../../helpers/data/petData';
import utils from '../../helpers/utils';
import './sleep.scss';

const energyMeter = (event) => {
  let energy = petData.getEnergy();
  if (event.currentTarget.id === 'nap') {
    if (energy <= 50) {
      petData.setEnergy(energy + 50);
    } else if (energy >= 51 && energy <= 100) {
      petData.setEnergy(energy = 100);
    }
  } else if (event.currentTarget.id === 'deep-slumber') {
    if (energy <= 40) {
      petData.setEnergy(energy + 60);
    } else if (energy >= 41 && energy <= 100) {
      petData.setEnergy(energy = 100);
    }
  }
  $('#energy-meter').html(petData.getEnergy());
};


const energyTracker = () => {
  const domString = `<div>
  <h1>Sleep</h1>
  <h2>Achilles</h2>
  <p>Take a Nap</p>
  <button class="petSleep" id="nap"><i class="fas fa-heart"></i></button>
  <p>Full Night's Sleep</p>
  <button class="petSleep" id="deep-slumber"><i class="fas fa-bed"></i></button>
  <h3 id="energy-meter">${petData.getFullVal()}</h3>
  </div>`;
  utils.printToDom('sleep', domString);
  $('.petSleep').on('click', energyMeter);
};

export default { energyTracker };
