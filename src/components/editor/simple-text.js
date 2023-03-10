export class SimpleText {
  static get toolbox() {
    return {
      title: "SimpleText",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><line x1="10" y1="9" x2="8" y2="9"></line></svg>',
    };
  }

  /**
   * Automatic sanitize config
   */
  static get sanitize() {
    return {
      text: {}, // only tags from Inline Toolbar
    };
  }

  static get isReadOnlySupported() {
    return true;
  }

  constructor({ data, api, config, readOnly, block }) {
    this.data = data;
    this.readOnly = readOnly;
    this.wrapper = undefined;
  }

  render() {
    this.wrapper = document.createElement("div");
    const caption = document.createElement("div");

    this.wrapper.classList.add("border-4");
    caption.contentEditable = !this.readOnly;
    // caption.innerHTML = captionText || "";
    caption.innerHTML = this.data && this.data.text ? this.data.text : "";
    this.wrapper.appendChild(caption);

    return this.wrapper;
  }

  save(blockContent) {
    const caption = blockContent.querySelector("[contenteditable]");

    return {
      text: caption.innerHTML || "",
    };
  }

  validate(savedData) {
    if (!savedData.text.trim()) {
      return false;
    }

    return true;
  }
}
