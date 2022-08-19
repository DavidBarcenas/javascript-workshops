class UseTemplate extends HTMLElement {
  static get observedAttributes() {
    return ['title', 'text', 'img'];
  }

  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    if (oldValue !== newValue) {
      this[attr] = newValue;
    }
  }

  getTemplate() {
    const template = document.createElement('template'); /*html*/
    template.innerHTML = `
      <section>
        <h2>${this.title}</h2>
        <div>
          <p>${this.text}</p>
          <img src={this.img} alt="Image" />
        </div>
      </section>
      ${this.getStyles()}
    `;
    return template;
  }

  getStyles() {
    return /*html*/ `
      <style>
        :host {
          --bg: purple;
          display: block;
          background: var(--bg);
        }
        :host(.green) {
          background: green;
        }
        :host([yellow]) {
          background: yellow;
        }
        h2 {
          color: blue;
        }
      </style>
    `;
  }
}
customElements.define('use-template', UseTemplate);
