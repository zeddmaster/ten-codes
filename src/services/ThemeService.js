
const LIGHT = 'light'
const DARK = 'dark'

export const initTheme = () => {
    if(localStorage.getItem('theme'))
        document.documentElement.setAttribute('data-theme', localStorage.getItem('theme'));
}
export const toggleTheme = () => {

    const target = document.documentElement;

    const current = target?.dataset?.theme

    if(current === DARK) {
        target.setAttribute('data-theme', LIGHT)
        localStorage.setItem('theme', LIGHT)

        return;
    }

    target.setAttribute('data-theme', DARK)
    localStorage.setItem('theme', DARK)
}