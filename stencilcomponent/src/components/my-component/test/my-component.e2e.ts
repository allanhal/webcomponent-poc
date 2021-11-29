import { newE2EPage } from '@stencil/core/testing';

describe('railz-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<railz-component></railz-component>');

    const element = await page.find('railz-component');
    expect(element).toHaveClass('hydrated');
  });
});
