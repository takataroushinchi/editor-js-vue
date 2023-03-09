export class SimpleText {
  static get toolbox() {
    return {
      title: "SimpleText",
      icon: '<svg width="17" height="15" viewBox="0 0 336 276" xmlns="http://www.w3.org/2000/svg"><path d="M291 150V79c0-19-15-34-34-34H79c-19 0-34 15-34 34v42l67-44 81 72 56-29 42 30zm0 52l-43-30-56 30-81-67-66 39v23c0 19 15 34 34 34h178c17 0 31-13 34-29zM79 0h178c44 0 79 35 79 79v118c0 44-35 79-79 79H79c-44 0-79-35-79-79V79C0 35 35 0 79 0z"/></svg>',
    };
  }

  constructor({ data }) {
    this.data = data;
    this.wrapper = undefined;
  }

  render() {
    this.wrapper = document.createElement("div");
    const caption = document.createElement("div");

    this.wrapper.classList.add("border-4");
    caption.contentEditable = true;
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
