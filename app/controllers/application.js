import Controller from '@ember/controller';
import flyerUrl from '../assets/fruit_shower_xpo.jpg';
import worldExpoFlyer from '../assets/worldexpo.png';
export default class ApplicationController extends Controller {
  get flyer() {
    return flyerUrl;
  }
  get expo() {
    return worldExpoFlyer;
  }
}
