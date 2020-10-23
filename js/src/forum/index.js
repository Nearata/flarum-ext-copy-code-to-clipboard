import app from 'flarum/app';
import { extend } from 'flarum/extend';
import CommentPost from 'flarum/components/CommentPost';
import copyTextToClipboard from 'copy-text-to-clipboard';

app.initializers.add('nearata/flarum-ext-copy-code-to-clipboard', () => {
    extend(CommentPost.prototype, 'oncreate', function () {
        const elements = this.element.getElementsByTagName('pre');
        for (const el of elements) {
            const copyElement = document.createElement('span');
            copyElement.textContent = app.translator.trans('nearata-copy-code-to-clipboard.forum.copy');
            copyElement.classList.add('nearata-copy-code');
            copyElement.style.color = app.forum.data.attributes.themePrimaryColor;

            el.after(copyElement);
        }

        const copyCodeElements = this.element.getElementsByClassName('nearata-copy-code');
        for (const el of copyCodeElements) {
            el.addEventListener('click', () => {
                const childNodes = el.previousSibling.childNodes;

                for (const n of childNodes) {
                    const nodeName = n.nodeName.toLowerCase();

                    if (nodeName === 'code') {
                        copyTextToClipboard(n.textContent);
                    }
                }

                el.textContent = app.translator.trans('nearata-copy-code-to-clipboard.forum.copied');

                setTimeout(() => el.textContent = app.translator.trans('nearata-copy-code-to-clipboard.forum.copy'), 2000);
            }, false)
        }
    });
});
