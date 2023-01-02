/*
|--------------------------------------------------------------------------
| VUETIFY
|--------------------------------------------------------------------------
| An instance of the User Interface Framework for the SPA
|
*/

// styles
import '@fontsource/roboto';
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';

// composables
import { createVuetify } from 'vuetify';

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
    theme: {
        themes: {
            light: {
                colors: {
                    primary  : '#4169e1',
                    secondary: '#ac4cbc',
                    success  : '#68cf29',
                    info     : '#363062',
                    warning  : '#ffab2d',
                    error    : '#f72b50',
                    light    : '#c8c8c8',
                    dark     : '#444444'
                }
            }
        }
    }
});
