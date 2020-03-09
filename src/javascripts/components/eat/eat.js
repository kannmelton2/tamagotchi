import petData from '../../helpers/data/petData';
import utils from '../../helpers/utils';
import './eat.scss';

const fullnessMeter = (event) => {
  let full = petData.getFullVal();
  if (event.currentTarget.id === 'healthy') {
    full += 10;
    console.error('healthy', full);
  } else {
    full -= 2;
    console.error('unhealthy', full);
  }
};

const foodTracker = () => {
  const domString = `<div>
  <h2>Achilles</h2>
  <p>Feed healthy food</p>
  <button class="feedPet" id="healthy"><i class="fas fa-apple-alt"></i></button>
  <p>Feed unhealthy food</p>
  <button class="feedPet" id="unhealthy"><i class="fas fa-cookie-bite"></i></button>
  <h3>${petData.getFullVal()}</h3>
  </div>`;
  utils.printToDom('eat', domString);
  $('.feedPet').on('click', fullnessMeter);
};

export default { foodTracker };
