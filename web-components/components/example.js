const template = document.createElement('div');
template.innerHTML = `
  <style>
    .title {
      color: red;
    }
  </style>
  <h1 class="title">Custom element</h1>
  <p>My text</p>
`;

class MyFirstElement extends HTMLElement {
  constructor() {
    super();

    this.p = document.createElement('p');
  }

  connectedCallback() {
    this.p.textContent = 'Hello!!';
    this.appendChild(this.p);
    this.appendChild(template);
  }
}
customElements.define('my-first-element', MyFirstElement);
