import { LitElement, html, css } from "lit";
import { customElement, property } from 'lit/decorators.js';
import {live} from 'lit/directives/live.js';
// import { styles } from './styles';
import stylesheet from './scss/hello-world.scss';

@customElement('hello-world')
export class HelloWorld extends LitElement {

  static styles = stylesheet;

  @property({ type: String }) name? = "";

  render() { 
    return html` 
      <p>Name:
      <input type="text" placeholder="type on me" @input=${this._nameChanged} .value=${live(this.name ?? '')}></p>
      <p><button class="button-3" @click=${this._clear}>Clear</button></p>
      <p class="display name">${this.name}</p>
    `; 
  }

  _nameChanged(e: Event) {
    const value = (e.target as HTMLInputElement).value;
    if (value) {
      this.name = value;
    }
  }

  _clear() {
    this.name = undefined;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': HelloWorld;
  }
} 