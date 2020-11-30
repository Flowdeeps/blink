class blink extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    // wrapper
    const wrapper = document.createElement("span");
    wrapper.setAttribute('class', 'blink');
    // styles
    const style = document.createElement("style");
    style.textContent = ".blink {animation: blink steps(5, start) 1s infinite} @keyframes blink {to {visibility: hidden}}";
    wrapper.textContent = this.textContent;
    this.shadowRoot.append(wrapper, style);
  }
}
customElements.define('nu-blink', blink);
