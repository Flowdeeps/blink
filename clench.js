class clench extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    // wrapper
    const wrapper = document.createElement("span");
    wrapper.setAttribute('class', 'clench');
    // styles
    const style = document.createElement("style");
    style.textContent = ".clench {animation: clench ease-in-out 1s infinite} @keyframes clench {from {letter-spacing: normal} 50% {letter-spacing: -0.1em} to {letter-spacing: normal}}";
    wrapper.textContent = this.textContent;
    this.shadowRoot.append(wrapper, style);
  }
}
customElements.define('nu-clench', clench);
