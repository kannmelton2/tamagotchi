import petData from '../../helpers/data/petData';
import utils from '../../helpers/utils';
import './eat.scss';

const foodTracker = () => {
  const domString = `<div>
  <h2>Achilles</h2>
  <p>Feed healthy food</p>
  <button><i class="fas fa-apple-alt"></i></button>
  <p>Feed unhealthy food</p>
  <button><i class="fas fa-cookie-bite"></i></button>
  <h3>${petData.getFullVal()}</h3>
  </div>`;
  utils.printToDom('eat', domString);
};
export default { foodTracker };
