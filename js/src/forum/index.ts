import { extend } from 'flarum/common/extend';
import app from 'flarum/forum/app';
import CommentPost from 'flarum/forum/components/CommentPost';

app.initializers.add('nearata-copy-code-to-clipboard', () => {
    extend(CommentPost.prototype, 'oncreate', function () {
        for (const el of this.element.querySelectorAll('pre')) {
            const copy = document.createElement('button');

            copy.classList.add('nearata-copy-code');
            copy.setAttribute('title', app.translator.trans('nearata-copy-code-to-clipboard.forum.copy'));
            copy.style.color = app.forum.attribute('themePrimaryColor');
            copy.style.borderColor = app.forum.attribute('themePrimaryColor');

            const copyIcon = document.createElement('i');
            copyIcon.classList.add('far', 'fa-clipboard');

            copy.append(copyIcon)
            el.prepend(copy);
        }

        for (const el of this.element.querySelectorAll('.nearata-copy-code')) {
            el.addEventListener('click', function (_) {
                navigator.clipboard.writeText(el.parentNode.querySelector('code').textContent);

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
