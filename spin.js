class spin extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    // wrapper
    const wrapper = document.createElement("span");
    wrapper.setAttribute('class', 'spin');
    // styles
    const style = document.createElement("style");
    style.textContent = ".spin {animation: spin linear 1s infinite; transform-origin: center center; display: inline-block} @keyframes spin {from {transform: rotate3d(0, 0, 1, 0deg)} to {transform: rotate3d(0, 0, 1, 360deg)}}";
    wrapper.textContent = this.textContent;
    this.shadowRoot.append(wrapper, style);
  }
}
customElements.define('nu-spin', spin);
