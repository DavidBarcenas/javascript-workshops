class UseTemplate extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    this.title = this.getAttribute('title');
    this.text = this.getAttribute('text');
    this.img = this.getAttribute('img');
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
        h2 {
          color: blue;
        }
      </style>
    `;
  }
}
customElements.define('use-template', UseTemplate);
