import app from 'flarum/app';
import { extend } from 'flarum/extend';
import CommentPost from 'flarum/components/CommentPost';
import copyTextToClipboard from 'copy-text-to-clipboard';

app.initializers.add('nearata/flarum-ext-copy-code-to-clipboard', () => {
    extend(CommentPost.prototype, 'config', function(res, isInitialized) {
        if (isInitialized) {
            return;
        }

        const elements = document.getElementsByTagName('pre');
        for (const el of elements) {
            const copyElement = document.createElement('div');
            copyElement.textContent = app.translator.trans('nearata-copy-code-to-clipboard.forum.copy');
            copyElement.classList.add('copy-code')

            el.appendChild(copyElement);
        }

        const copyCodeElements = document.getElementsByClassName('copy-code');
        for (const el of copyCodeElements) {
            el.addEventListener('click', () => {
                const childNodes = el.parentElement.childNodes;

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
