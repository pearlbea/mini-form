class MiniForm extends HTMLElement {

  constructor() {
    super();
  }

  connectedCallback() {
    this.initShadowDom();
    this.addClickListener();
    this.addKeyDownListener();
  }

  initShadowDom() {
    let shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.innerHTML = this.template;
  }

  addClickListener() {
    this.button.addEventListener('click', e => {
      this.getUserInput();
    });
  }

  addKeyDownListener() {
    this.input.addEventListener('keydown', e => {
      this.hideErrorMessage();
    });
  }

  getUserInput() {
    this.input.value.length > 0 ? this.handleSuccess() : this.displayErrorMessage();
  }

  handleSuccess() {
    // You could call a method to save the user's answer here
    this.displaySuccessMessage();
  }

  displaySuccessMessage() {
    this.card.innerHTML = this.message;
  }

  displayErrorMessage() {
    this.errorMessage.className = 'error';
  }

  hideErrorMessage() {
    this.errorMessage.className = 'error hide';
  }

  get card() {
    return this.shadowRoot.querySelector('.mdl-card');
  }

  get button() {
    return this.shadowRoot.querySelector('button');
  }

  get errorMessage() {
    return this.shadowRoot.querySelector('.error');
  }

  get input() {
    return this.shadowRoot.querySelector('input');
  }

  get theme() {
    return this.getAttribute('theme') || 'indigo-pink';
  }

  get message() {
    // this could be a separate component and probably should be
    // if you make it more complicated
    return `
      <div>
        <div class="mdl-card__title">
          <h4>Thank you.</h4>
        </div>
        <div class="mdl-card__supporting-text">We have received your response.</div>
        <div class="mdl-card__actions"></div>
      </div>
    `;
  }

  get template() {
    return `
      <style>
        @import 'https://fonts.googleapis.com/icon?family=Material+Icons';
        @import 'https://code.getmdl.io/1.3.0/material.${this.theme}.min.css';
        @import 'http://fonts.googleapis.com/css?family=Roboto:300,400,500,700';
        .mdl-card {
          width: 100%;
        }
        .mdl-layout__header-row {
          padding-left: 20px;
        }
        .mdl-layout-title {
          padding-left: 4px;
        }
        button.mdl-button {
          margin-top: 10px;
        }
        .error {
          height: 15px;
        }
        .hide {
          visibility: hidden;
        }
      </style>
      <div class="mdl-card mdl-shadow--2dp">
        <header class="mdl-layout__header">
          <div class="mdl-layout__header-row">
            <i class="material-icons">help</i>
            <div class="mdl-layout-title">A Question For You</div>
          </div>
        </header>
        <div class="mdl-card__supporting-text">
          <h4><slot name="question"></slot></h4>
          <input type="text" rows="3" class="mdl-textfield__input" name="question" />
          <div class="error hide">Please write your response.</div>
        </div>
        <div class="mdl-card__actions">
          <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">Submit</button>
        </div>
      </div>
    `;
  }
}

customElements.define('mini-form', MiniForm);
