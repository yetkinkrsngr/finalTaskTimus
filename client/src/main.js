// main.js
import { createApp } from 'vue';
import App from './App.vue';
import './style.css';
import { createI18n } from 'vue-i18n';
import router from './router';

const messages = {
  en: {
    message: {
      welcome: 'Welcome!',
      greeting: 'Hello, {name}!',
    },
  },
  tr: {
    message: {
      welcome: 'Hoş geldiniz!',
      greeting: 'Merhaba, {name}!',
    },
  },
};

const i18n = createI18n({
  locale: 'en', // default locale
  messages,
});

createApp(App).use(i18n).use(router).mount('#app');
