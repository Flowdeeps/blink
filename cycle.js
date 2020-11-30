class cycle extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    // wrapper
    const wrapper = document.createElement("span");
    wrapper.setAttribute('class', 'cycle');
    // styles
    const style = document.createElement("style");
    style.textContent = ".cycle {animation: cycle linear 1s infinite} @keyframes cycle {0% {color: black} 11% {color: red} 22% {color: yellow} 33% {color: pink} 44% {color: green} 55% {color: orange} 66% {color: purple} 77% {color: blue;} 88% {color: white;} 100% {color: black}}";
    wrapper.textContent = this.textContent;
    this.shadowRoot.append(wrapper, style);
  }
}
customElements.define('nu-cycle', cycle);
