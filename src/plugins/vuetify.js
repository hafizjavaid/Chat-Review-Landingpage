import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
// this.$vuetify.theme.themes.light.primary = '#000051'

// Vue.use(Vuetify);
Vue.use(Vuetify, {
    theme: {
            primary: '#000051',
            secondary: '#b0bec5',
            accent: '#8c9eff',
            error: '#b71c1c',
          },
}
);

export default new Vuetify({
});
