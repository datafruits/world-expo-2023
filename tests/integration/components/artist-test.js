import { module, test } from 'qunit';
import { setupRenderingTest } from 'df-chi-worldxpo/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | artist', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Artist />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <Artist>
        template block text
      </Artist>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
