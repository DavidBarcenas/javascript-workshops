class UseTemplate extends HTMLElement {
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

  getTemplate() {
    const template = document.createElement('template'); /*html*/
    template.innerHTML = `
      <section>
        <h2>From JS</h2>
        <div>
          <p>Other text</p>
        </div>
      </section>
      ${this.getStyles()}
    `;
    return template;
  }

  getStyles() {
    return /*html*/ `
      <style>
        h2 {
          color: blue;
        }
      </style>
    `;
  }
}
customElements.define('use-template', UseTemplate);
