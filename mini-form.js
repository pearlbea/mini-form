class MiniForm extends HTMLElement {

  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = this.template;
  }

  get template() {
    return `
      <div>
        <input type="text" name="question" />
        <button>Submit</button>
      </div>
    `;
  }
}

customElements.define('mini-form', MiniForm);
