import eat from './components/eat/eat';
import play from './components/play/play';
import '../styles/main.scss';

const init = () => {
  eat.foodTracker();
  play.funTracker();
};

init();
