document.addEventListener('DOMContentLoaded', function () {
    const checkboxIds = ['rem-checkbox1', 'rem-checkbox2', 'rem-checkbox3'];
    const storageKeys = ['MigratingNotifications', 'OpenAllSocialLinks', 'HighlightMigratingTokens'];

    function loadCheckboxStates() {
        storageKeys.forEach((storageKey, index) => {
            chrome.storage.local.get(storageKey, function (result) {
                const savedState = result[storageKey];
                if (typeof savedState !== 'undefined') {
                    const checkbox = document.getElementById(checkboxIds[index]);
                    checkbox.checked = savedState;
                }
            });
        });
    }

    function saveCheckboxStates() {
        checkboxIds.forEach((checkboxId, index) => {
            const storageKey = storageKeys[index];
            const checkbox = document.getElementById(checkboxId);
            checkbox.addEventListener('change', function () {
                const isChecked = checkbox.checked;
                chrome.storage.local.set({ [storageKey]: isChecked }, function () {
                    //console.log(`${storageKey} saved with value: ${isChecked}`);
                });
            });
        });
    }

    loadCheckboxStates();
    saveCheckboxStates();
});

var headers = document.querySelectorAll('.dropdown-container header');

for (var i = 0; i < headers.length; i++) {
    headers[i].addEventListener('click', openCurrAccordion);
}

var firstParent = headers[0].parentElement;
var firstArticle = headers[0].nextElementSibling;

firstParent.classList.add('open');
firstArticle.style.maxHeight = firstArticle.scrollHeight + 'px';

for (var i = 0; i < headers.length; i++) {
    headers[i].addEventListener('click', openCurrAccordion);
}

function openCurrAccordion(e) {
    let hasOpenTab = false;

    for (var i = 0; i < headers.length; i++) {
        var parent = headers[i].parentElement;
        var article = headers[i].nextElementSibling;

        if (this === headers[i] && !parent.classList.contains('open')) {
            parent.classList.add('open');
            article.style.maxHeight = article.scrollHeight + 'px';
            headers[i].classList.remove('inactive-header');
            hasOpenTab = true;
        } else {
            parent.classList.remove('open');
            article.style.maxHeight = '0px';
            headers[i].classList.add('inactive-header');
        }

        if (parent.classList.contains('open')) {
            hasOpenTab = true;
        }
    }

    if (!hasOpenTab) {
        var firstParent = headers[0].parentElement;
        var firstArticle = headers[0].nextElementSibling;

        firstParent.classList.add('open');
        firstArticle.style.maxHeight = firstArticle.scrollHeight + 'px';
        headers[0].classList.remove('inactive-header');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const themes = ['default', 'modern', 'sunset', 'blue', 'dark'];
    const themeList = document.getElementById('themeGrid');

    const changeTheme = (theme) => {
        document.documentElement.style.setProperty('--border', `var(--${theme}-border)`);
        document.documentElement.style.setProperty('--surface', `var(--${theme}-surface)`);
        document.documentElement.style.setProperty('--text-primary', `var(--${theme}-text-primary)`);
        document.documentElement.style.setProperty('--text-secondary', `var(--${theme}-text-secondary)`);
        document.documentElement.style.setProperty('--primary', `var(--${theme}-primary)`);
        document.documentElement.style.setProperty('--text-inverse', `var(--${theme}-text-inverse)`);

        const activeBox = themeList.querySelector('.c-box--active');
        if (activeBox) {
            activeBox.classList.remove('c-box--active');
        }
        themeList.querySelectorAll('.c-box').forEach(item => {
            if (item.dataset.theme === theme) {
                item.classList.add('c-box--active');
            }
        });

        chrome.storage.local.set({ theme }, () => {
            console.log(`Theme saved: ${theme}`);
        });

        switch (theme) {
            case 'default':
                themeList.style.top = '0';
                break;
            case 'modern':
                themeList.style.top = '-3.6rem';
                break;
            case 'sunset':
                themeList.style.top = '-7.1rem';
                break;
            case 'blue':
                themeList.style.top = '-10.7rem';
                break;
            case 'dark':
                themeList.style.top = '-10.7rem';
                break;
            default:
                console.warn(`Unknown theme: ${theme}`);
        }
    };

    const darkIcon = `<svg fill="currentColor" aria-hidden="true" viewBox="0 0 24 24" tabindex="-1" title="Default"><path d="M10 2c-1.82 0-3.53.5-5 1.35C7.99 5.08 10 8.3 10 12s-2.01 6.92-5 8.65C6.47 21.5 8.18 22 10 22c5.52 0 10-4.48 10-10S15.52 2 10 2z"></path></svg>`;
    const sunsetIcon = `<svg fill="currentColor" aria-hidden="true" viewBox="0 0 24 24" tabindex="-1" title="Modern"><path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-.89 0-1.74-.2-2.5-.55C11.56 16.5 13 14.42 13 12s-1.44-4.5-3.5-5.45C10.26 6.2 11.11 6 12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6z"></path></svg>`;
    const sunriseIcon = `<svg fill="currentColor" aria-hidden="true" viewBox="0 0 24 24" tabindex="-1" title="Sunset"><path d="M20 15.31 23.31 12 20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69zM12 18V6c3.31 0 6 2.69 6 6s-2.69 6-6 6z"></path></svg>`;
    const lightIcon = `<svg fill="currentColor" aria-hidden="true" viewBox="0 0 24 24" tabindex="-1" title="Blue"><path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"></path></svg>`;

    const capitalized = (word) => word.charAt(0).toUpperCase() + word.slice(1);

    themes.forEach((theme) => {
        const box = document.createElement('button');
        box.dataset.theme = theme;
        box.onclick = () => {
            changeTheme(theme);
            console.log(`Theme: ${theme}`);
        };
        box.classList = 'c-box';
        box.setAttribute('aria-label', `Switch to ${theme} theme`);

        box.style.setProperty('--bg', `var(--${theme}-bg)`);
        box.style.setProperty('--border', `var(--${theme}-border)`);
        box.style.setProperty('--surface', `var(--${theme}-surface)`);
        box.style.setProperty('--text-primary', `var(--${theme}-text-primary)`);
        box.style.setProperty('--text-secondary', `var(--${theme}-text-secondary)`);
        box.style.setProperty('--primary', `var(--${theme}-primary)`);
        box.style.setProperty('--text-inverse', `var(--${theme}-text-inverse)`);

        const iconRender = (theme) => {
            switch (theme) {
                case 'default':
                    return darkIcon;
                case 'modern':
                    return sunsetIcon;
                case 'sunset':
                    return sunriseIcon;
                case 'blue':
                    return lightIcon;
                case 'dark':
                    return lightIcon;
                default:
                    console.warn(`Unknown theme: ${theme}`);
            }
        };

        box.innerHTML = `
            <div class="c-box__title">
                <span class="c-box__icon">
                    ${iconRender(theme)}
                </span>
                <label>${capitalized(theme)}</label>
            </div>
            <div class="c-box__swatches">
                <span class="c-swatch" style="background: var(--bg)" title="Background"></span>
                <span class="c-swatch" style="background: var(--border)" title="Border"></span>
                <span class="c-swatch" style="background: var(--surface)" title="Surface"></span>
            </div>
        `;
        themeList.appendChild(box);
    });

    chrome.storage.local.get('theme', (result) => {
        const savedTheme = result.theme || themes[0];
        changeTheme(savedTheme);
    });
});
