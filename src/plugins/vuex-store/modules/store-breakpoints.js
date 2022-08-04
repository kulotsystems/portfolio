// --- MODULES ------------------------------------------------------------
import font    from './breakpoints/store-breakpoints-font.js';
import button  from './breakpoints/store-breakpoints-button.js';
import appbar  from './breakpoints/store-breakpoints-appbar.js';

export default {
    namespaced: true,

    modules: {
        font,
        button,
        appbar
    }
}
