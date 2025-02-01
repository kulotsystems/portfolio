/**
 * Import your JavaScript file here.
 *
 * Format:
 * import file from './reviews/file.js';
 *
 */

import michael from './reviews/michael.js';
import florencio from './reviews/florencio.js';
import junjun from './reviews/jun-jun.js';
import ivan from './reviews/ivan.js';
import kylie from './reviews/kylie.js';
import ronhedwig from './reviews/ron-hedwig.js';
import ruel from './reviews/ruel.js';
import louie from './reviews/louie.js';

export default {
    namespaced: true,

    /**
     * Then, add your imported file
     * to the list of modules
     *
     */
    modules: {
        michael,
        florencio,
        junjun,
        ivan,
        kylie,
        ronhedwig,
        ruel,
        louie,
    }
}
