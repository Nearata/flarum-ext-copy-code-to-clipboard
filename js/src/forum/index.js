import app from 'flarum/app';
import { extend } from 'flarum/extend';
import CommentPost from 'flarum/components/CommentPost';
import copyTextToClipboard from 'copy-text-to-clipboard';

app.initializers.add('nearata-copy-code-to-clipboard', () => {
    extend(CommentPost.prototype, 'oncreate', function () {
        for (const el of this.element.querySelectorAll('pre')) {
            const copyButton = document.createElement('button');
            copyButton.classList.add('nearata-copy-code');
            copyButton.setAttribute('title', app.translator.trans('nearata-copy-code-to-clipboard.forum.copy'));
            copyButton.style.color = app.forum.data.attributes.themePrimaryColor;

            const copyIcon = document.createElement('i');
            copyIcon.classList.add('fas', 'fa-copy');

            copyButton.append(copyIcon)
            el.prepend(copyButton);
        }

        for (const el of this.element.querySelectorAll('.nearata-copy-code')) {
            el.addEventListener('click', function (e) {
                copyTextToClipboard(e.target.parentNode.nextSibling.textContent);

                e.target.classList.replace('fa-copy', 'fa-check');

                setTimeout(function () {
                    e.target.classList.replace('fa-check', 'fa-copy');
                    clearTimeout(0);
                }, 1000);
            }, false)
        }
    });
});
