/*
|--------------------------------------------------------------------------
| VUEX STORE MODULE: projects
|--------------------------------------------------------------------------
|
*/

import classyCover     from '../../../assets/img/classy/classy-cover-v3.png';
import scheduleCover   from '../../../assets/img/schedule/schedule-cover-v2.png';
import dtrCover        from '../../../assets/img/dtr/dtr-cover-v2.png';
import appexgbCover    from '../../../assets/img/appexgb/appexgb-cover-v3.png';
import tabulationCover from '../../../assets/img/tabulation/tabulation-cover-v1.png';
import sanayonCover    from '../../../assets/img/sanayon/sanayon-cover-v1.png';

export default {
    namespaced: true,

    state: {
        projects: {
            'classy': {
                title      : 'Classy',
                desc       : 'A class management app that I use to store school records and give online activities and exams to students.',
                cover      : classyCover,
                production : 'https://www.kulotsystems.tech/old/apps/classy/temp',
                repository : null,
                techStack  : ['html', 'css', 'bootstrap', 'javascript', 'jquery', 'php', 'mysql'],
                timeFrame  : {
                    start  : '2015-05',
                    end    : null
                }
            },
            'schedule': {
                title      : 'Schedule',
                desc       : 'An app that displays class schedules and provides Classy account creation and retrieval to students.',
                cover      : scheduleCover,
                production : 'https://www.kulotsystems.tech/old/login/redirect.php?app=schedule&account=student',
                repository : null,
                techStack  : ['html', 'css', 'bootstrap', 'javascript', 'jquery', 'php', 'mysql'],
                timeFrame  : {
                    start  : '2020-07',
                    end    : '2020-08'
                }
            },
            'lending-system': {
                title      : 'AppexGB Lending System',
                desc       : 'A lending business app that stores and processes client accounts, dues, and balances of AppexGB.',
                cover      : appexgbCover,
                production : null,
                repository : 'https://github.com/kulotsystems/appexgb',
                techStack  : ['html', 'css', 'bootstrap', 'javascript', 'jquery', 'php', 'mysql'],
                timeFrame  : {
                    start  : '2020-11',
                    end    : '2021-01'
                }
            },
            'dtr-lgu-nabua': {
                title      : 'DTR @ LGU Nabua',
                desc       : 'A web portal hooked into the DTR machine of LGU Nabua that provides DTR viewing and monitoring to employees.',
                cover      : dtrCover,
                production : 'https://www.kulotsystems.tech/dtr',
                repository : 'https://github.com/kulotsystems/dtr-lgu-nabua',
                techStack  : ['html', 'css', 'bootstrap', 'javascript', 'jquery', 'vue', 'php', 'mysql', 'laravel'],
                timeFrame  : {
                    start  : '2021-05',
                    end    : null
                }
            },
            'pageant-tabulations': {
                title      : 'Pageant Tabulations',
                desc       : 'A collection of tabulation systems that I created and managed for different beauty pageant events.',
                cover      : tabulationCover,
                production : null,
                repository : 'https://github.com/kulotsystems/pageant-tabulations',
                techStack  : ['html', 'css', 'bootstrap', 'javascript', 'jquery', 'php', 'mysql'],
                timeFrame  : {
                    start  : '2019-02',
                    end    : null
                }
            },
            'sanayon': {
                title      : 'Sanayon',
                desc       : 'A shopping app that caters for local sellers and buyers and promotes locally-produced products.',
                cover      : sanayonCover,
                production : null,
                repository : 'https://github.com/kulotsystems/sanayonph',
                techStack  : ['html', 'css', 'javascript', 'vue', 'vuetify', 'php', 'mysql', 'laravel'],
                timeFrame  : {
                    start  : '2021-09',
                    end    : '2022-04'
                }
            },
        }
    },

    getters: {
        all: (state) => {
            return state.projects;
        },

        total: (state) => {
            return Object.keys(state.projects).length;
        }
    }
}
