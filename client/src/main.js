// main.js
import { createApp } from 'vue';
import App from './App.vue';
import './style.css';

import { createI18n } from 'vue-i18n';
import router from './router';
import enLocale from '../public/locales/en.json';
import trLocale from '../public/locales/tr.json';
const messages = {
  en: {
    welcome: 'Welcome to App',
    login: 'Login',
    register: 'Register',
  },
  tr: {
    welcome: 'Uygulamaya Hoş Geldiniz',
    login: 'Giriş',
    register: 'Kayıt Ol',
  },
  // Diğer dilleri buraya ekleyebilirsiniz
};
const i18n = createI18n({
  locale: 'tr',
  messages: {
    en: enLocale,
    tr: trLocale,
  },
});

const app = createApp(App);

app.use(i18n).use(router).mount('#app');
