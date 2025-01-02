import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

class AlarmoButton extends LitElement {
  @property({ type: Boolean })
  disabled: boolean = false;

  @property({ type: Boolean })
  scaled: boolean = false;

  render() {
    return html`
      <button ?disabled=${this.disabled}>
        <slot></slot>
      </button>
    `;
  }

  protected handleFocus(ev: Event) {
    (ev.target as HTMLInputElement).blur();
  }

  static get styles() {
    return css`
      button {
        width: 100%;
        border: none;
        background-color: rgba(var(--rgb-primary-text-color), 0.05);
        color: var(--primary-text-color);
        border-radius: 12px;
        padding: calc(var(--content-scale, 1) * 0.875rem);
        font-size: calc(var(--content-scale, 1) * 0.875rem);
        font-weight: var(--mdc-typography-button-font-weight, 500);
        letter-spacing: var(--mdc-typography-button-letter-spacing, 0.0892857em);
        text-decoration: var(--mdc-typography-button-text-decoration, none);
        text-transform: var(--mdc-typography-button-text-transform, uppercase);
        -webkit-font-smoothing: antialiased;
        font-family: var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
      }
      button:not(:disabled) {
        cursor: pointer;
        transition: background-color 0.1s ease;
      }
      button:disabled {
        color: var(--disabled-text-color);
          background-color: transparent;
      }
      button:not(:disabled):hover {
          background-color: rgba(var(--rgb-primary-text-color), 0.08);
      }
      button:not(:disabled):active {
          background-color: rgba(var(--rgb-primary-text-color), 0.12);
      }
      button:focus {
        outline: none;
      }
      mwc-button {
        width: 100%;
      }
      ::slotted(ha-icon) {
        --mdc-icon-size: calc(var(--content-scale, 1) * 1.5rem);
        margin: calc(var(--content-scale, 1) * -0.25rem) 0px;
        display: flex;
      }
      ::slotted(ha-icon.leading) {
        margin-left: calc(var(--content-scale, 1) * -0.3rem);
        margin-right: calc(var(--content-scale, 1) * 0.3rem);
      }
      ::slotted span {
        display: flex;
      }
    `;
  }
}
customElements.define('alarmo-button', AlarmoButton);
