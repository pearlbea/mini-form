class MiniForm extends HTMLElement {

  constructor() {
    super();
  }

  connectedCallback() {
    this.initShadowDom();
  }

  initShadowDom() {
    let shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.innerHTML = this.template;
  }

  initShadowDom() {
    let shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.innerHTML = this.template;
  }

  get template() {
    return `
    <style>
      @import 'https://fonts.googleapis.com/icon?family=Material+Icons';
      @import 'https://code.getmdl.io/1.3.0/material.indigo-pink.min.css';
      @import 'http://fonts.googleapis.com/css?family=Roboto:300,400,500,700';
      .mdl-card {
        width: 100%;
      }
      .mdl-button {
        margin-top: 10px;
      }
      i {
        margin-right: 5px;
      }
    </style>
    <div class="mdl-card mdl-shadow--2dp">
      <header class="mdl-layout__header">
        <div class="mdl-layout__header-row">
          <i class="material-icons">mood_bad</i>
          <div class="mdl-layout-title">complaint box</div>
        </div>
      </header>
      <div class="mdl-card__supporting-text">
        <h4><slot></slot></h4>
        <input type="text" class="mdl-textfield__input" />
      </div>
      <div class="mdl-card__actions">
        <button class="mdl-button mdl-button--raised mdl-button--accent">Submit</button>
      </div>
    </div>
    `;
  }
}

customElements.define('mini-form', MiniForm);
