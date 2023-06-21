import CopyButton from "./components/CopyButton";
import { extend } from "flarum/common/extend";
import app from "flarum/forum/app";
import CommentPost from "flarum/forum/components/CommentPost";

app.initializers.add("nearata-copy-code-to-clipboard", () => {
  extend(CommentPost.prototype, "oncreate", function () {
    for (const el of this.element.querySelectorAll("pre")) {
      const container = document.createElement("div");

      container.classList.add("NearataCopyCodeToClipboard");

      el.append(container);

      m.mount(container, CopyButton);
    }
  });
});
