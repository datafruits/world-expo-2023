import Controller from '@ember/controller';
import flyerUrl from '../assets/fruit_shower_xpo.jpg';

export default class ApplicationController extends Controller {
  get flyer() {
    return flyerUrl;
  }
}
