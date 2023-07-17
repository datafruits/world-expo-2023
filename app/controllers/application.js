import Controller from '@ember/controller';
import flyerUrl from '../assets/fruit_shower_xpo.jpg';
import worldExpoFlyer from '../assets/worldexpo.png';
import beamSproutFlyer from '../assets/WOLRD_EXPO.png';
import wristBandz1 from '../assets/expo_bandz_1.png';
import wristBandz2 from '../assets/expo_bandz_2.png';

export default class ApplicationController extends Controller {
  get flyer() {
    return flyerUrl;
  }
  get beam() {
    return beamSproutFlyer;
  }
  get expo() {
    return worldExpoFlyer;
  }
  get bandz1() {
    return wristBandz1;
  }
  get bandz2() {
    return wristBandz2;
  }
}
