import { extend } from "flarum/common/extend";
import app from "flarum/forum/app";
import CommentPost from "flarum/forum/components/CommentPost";
import CopyButton from "./components/CopyButton";

app.initializers.add("nearata-copy-code-to-clipboard", () => {
	extend(CommentPost.prototype, "oncreate", function () {
		if (!window.isSecureContext) {
			return;
		}

		this.element.querySelectorAll("pre").forEach((el) => {
			const container = document.createElement("div");
			container.classList.add("NearataCopyCodeToClipboard");

			el.append(container);
			m.mount(container, CopyButton);
		});
	});
});
