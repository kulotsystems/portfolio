// --- MODULES ------------------------------------------------------------
import font    from './breakpoints/store-breakpoints-font.js';
import sidebar from './breakpoints/store-breakpoints-sidebar.js';
import button  from './breakpoints/store-breakpoints-button.js';
import appbar  from './breakpoints/store-breakpoints-appbar.js';

export default {
    namespaced: true,

    modules: {
        font,
        sidebar,
        button,
        appbar
    }
}
