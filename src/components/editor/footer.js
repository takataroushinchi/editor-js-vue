export class Footer {
  static get toolbox() {
    return {
      title: "Footer",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 3H3v7h18V3z"></path><path d="M21 14h-5v7h5v-7z"></path><path d="M12 14H3v7h9v-7z"></path></svg>',
    };
  }

  constructor({ data }) {
    this.data = data;
    this.wrapper = undefined;
  }

  render() {
    this.wrapper = document.createElement("div");
    this.caption = document.createElement("div");
    this.copyright = document.createElement("small");

    this.wrapper.classList.add("border-4");
    this.caption.contentEditable = true;
    this.copyright.contentEditable = true;
    // caption.innerHTML = captionText || "";
    this.caption.innerHTML = this.data && this.data.text ? this.data.text : "";
    this.copyright.innerHTML =
      this.data && this.data.copyright ? this.data.copyright : "";
    this.wrapper.appendChild(this.caption);
    this.wrapper.appendChild(this.copyright);

    return this.wrapper;
  }

  save(blockContent) {
    return {
      text: this.caption.innerHTML || "",
      copyright: this.copyright.innerHTML || "",
    };
  }

  validate(savedData) {
    if (!savedData.text.trim() || !savedData.copyright.trim()) {
      return false;
    }

    return true;
  }
}
