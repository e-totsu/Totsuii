import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import '@fortawesome/fontawesome-free/css/all.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify)

export default new Vuetify({
    icons: {
      iconfont: 'fa' || 'md',
    },
    theme: {
        dark: true,
        options: {
            customProperties: true
        },
        themes: {
            dark: {
                primary: {
                    base: '#0D0D0D',
                    darken1: '#121212',
                },
                secondary: {
                    base: '#202124',
                    darken1: '#1E1F21',
                },
                accent: {
                    base: '#2E2F31',
                    darken1: '#2D3139',
                },

                white: {
                    lighten1: '#FFF',
                    base: '#707070',
                    darken1: '#404040',
                },

                red: {
                    base: '#D9043D',
                    darken1: '#BF0436',
                    darken2: '#A6032F',
                    darken3: '#DF4770',
                    darken4: '#590219',
                },
            },
        },
    },
})
