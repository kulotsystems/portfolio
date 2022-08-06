/*
|--------------------------------------------------------------------------
| VUEX STORE MODULE: transitions
|--------------------------------------------------------------------------
|
*/

export default {
    namespaced: true,

    state: {
        lazy: {
            overview: {
                collaborators: false
            },
            contact: {
                form: false
            }
        }
    }
}
