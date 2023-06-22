import Component from '@glimmer/component';
import blueLightTapesURL from '../assets/bluelighttapes.jpg';
import dadsURL from '../assets/dads.jpg';
import datafruitsURL from '../assets/df_circle_logo_squiggle_invert.png';
import shrimpshakeURL from '../assets/shrimp_shake_logo.jpg';
import snailzoneURL from '../assets/snailzone.jpg';

export default class SponsorsListComponent extends Component {
  get blueLightTapes() {
    return blueLightTapesURL;
  }
  get dads() {
    return dadsURL;
  }
  get datafruits() {
    return datafruitsURL;
  }
  get shrimpshake() {
    return shrimpshakeURL;
  }
  get snailzone() {
    return snailzoneURL;
  }
}
