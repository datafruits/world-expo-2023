import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class DjsListComponent extends Component {
  @action
  onClick(event) {
    console.log(event)
  }
}
