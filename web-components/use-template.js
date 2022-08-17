class UseTemplate extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.appendChild(this.getTemplate().content.cloneNode(true));
  }

  getTemplate() {
    const template = document.createElement('template');
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
    return `
      <style>
        h2 {
          color: blue
        }
      </style>
    `;
  }
}
customElements.define('use-template', UseTemplate);
