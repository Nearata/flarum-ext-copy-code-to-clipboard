import { extend } from 'flarum/common/extend';
import app from 'flarum/forum/app';
import CommentPost from 'flarum/forum/components/CommentPost';

import copyTextToClipboard from 'copy-text-to-clipboard';

app.initializers.add('nearata-copy-code-to-clipboard', () => {
    extend(CommentPost.prototype, 'oncreate', function () {
        for (const el of this.element.querySelectorAll('pre')) {
            const copyButton = document.createElement('button');
            copyButton.classList.add('nearata-copy-code');
            copyButton.setAttribute('title', app.translator.trans('nearata-copy-code-to-clipboard.forum.copy'));
            copyButton.style.color = app.forum.attribute('themePrimaryColor');
            copyButton.style.borderColor = app.forum.attribute('themePrimaryColor');

            const copyIcon = document.createElement('i');
            copyIcon.classList.add('far', 'fa-clipboard');

            copyButton.append(copyIcon)
            el.prepend(copyButton);
        }

        for (const el of this.element.querySelectorAll('.nearata-copy-code')) {
            el.addEventListener('click', function (e) {
                copyTextToClipboard(el.parentNode.querySelector('code').textContent);
                const icon = el.querySelector('i');

                icon.classList.replace('far', 'fas');
                icon.classList.replace('fa-clipboard', 'fa-check');

                setTimeout(function () {
                    icon.classList.replace('fas', 'far');
                    icon.classList.replace('fa-check', 'fa-clipboard');
                    clearTimeout(0);
                }, 1000);
            }, false)
        }
    });
});
