import * as $ from 'jquery';

$(document).ready(function () {
    console.log('document ready');
});

function createAnalytics(): object {
    let counter: number = 0;
    let isDestroyed: boolean = false;

    const listener = (): number => counter++;

    document.addEventListener('click', listener);

    return {
        destroy() {
            document.removeEventListener('click', listener);
            isDestroyed = true;
        },
        getClicks() {
            if(isDestroyed) {
                return `Analytics destroyed. Total clicks = ${counter}`;
            }
            return counter;
        }
    }
}

window['analytics'] = createAnalytics();
