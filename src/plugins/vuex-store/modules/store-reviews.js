/**
 * Import your JavaScript file here.
 *
 * Format:
 * import file from './reviews/file.js';
 *
 */

import michael from './reviews/michael.js';
import florencio from './reviews/florencio.js';


export default {
    namespaced: true,

    /**
     * Then, add your imported file
     * to the list of modules
     *
     */
    modules: {
        michael,
        florencio

    }
}
