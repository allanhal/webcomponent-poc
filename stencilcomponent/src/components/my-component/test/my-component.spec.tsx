import { newSpecPage } from '@stencil/core/testing';
import { RailzComponent } from '../railz-component';

describe('railz-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RailzComponent],
      html: `<railz-component></railz-component>`,
    });
    expect(page.root).toEqualHtml(`
      <railz-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </railz-component>
    `);
  });
});
