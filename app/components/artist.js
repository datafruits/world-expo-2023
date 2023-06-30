import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ArtistComponent extends Component {
  @tracked
  showing = false;

  @action
  toggle() {
    this.showing = !this.showing;
  }
}
