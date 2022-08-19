class ProductCard extends HTMLElement {
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
    const template = document.createElement('template');
    template.innerHTML = /*html*/ `
      <main>
        <section>
          <img src="" alt="" />
        </section>
        <section>
          <div>
            <h2>Product title</h2>
            <p></p>
            <h3></h3>
            <button></button>
          </div>
        </section>
      <main>
    `;
    return template;
  }
}

customElements.define('product-card', ProductCard);
