import Component from "flarum/common/Component";
import Button from "flarum/common/components/Button";
import app from "flarum/forum/app";
import type Mithril from "mithril";

export default class CopyButton extends Component {
  clicked!: boolean;

  oninit(vnode: Mithril.Vnode<this>): void {
    super.oninit(vnode);

    this.clicked = false;
  }

  view(_: Mithril.Vnode<this>) {
    return (
      <Button
        className="Button Button--icon"
        icon={this.clicked ? "fas fa-check" : "far fa-clone"}
        onclick={this.onClick.bind(this)}
        aria-label={app.translator.trans(
          "nearata-copy-code-to-clipboard.forum.copy"
        )}
      />
    );
  }

  onClick(_: PointerEvent) {
    this.clicked = true;

    const code = this.element.closest("pre")?.querySelector("code");

    navigator.clipboard.writeText(code?.textContent!);

    setTimeout(() => {
      this.clicked = false;
      m.redraw();
    }, 1000);
  }
}
