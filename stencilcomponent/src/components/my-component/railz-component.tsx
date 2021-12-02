import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'railz-component',
  styleUrl: 'railz-component.css',
  shadow: true,
})
export class RailzComponent {
  @Prop() first: string;
  @Prop() middle: string;
  @Prop() last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return (
      <div>
        <p>P</p>
        <div>Hello, World! I'm {this.getText()}</div>
        <h2>h2</h2>
        <h3>h3</h3>
      </div>
    );
  }
}
