class flex extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    // wrapper
    const wrapper = document.createElement("span");
    wrapper.setAttribute('class', 'flex');
    // styles
    const style = document.createElement("style");
    style.textContent = ".flex {animation: flex ease-in-out 1s infinite} @keyframes flex {from {letter-spacing: normal} 50% {letter-spacing: 0.1em} to {letter-spacing: normal}}";
    wrapper.textContent = this.textContent;
    this.shadowRoot.append(wrapper, style);
  }
}
customElements.define('nu-flex', flex);
