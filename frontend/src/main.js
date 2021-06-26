import { createApp } from 'vue';
import authConfig from '../auth_config.json';
import App from './App.vue';
import { setupAuth } from './auth';
import router from './router';
import store from './store';

// Popper is required for bootstrap tooltips
import '@popperjs/core/dist/esm/popper';

const app = createApp(App).use(store).use(router);

// A way to get router instance inside `setupAuth()`
function callbackRedirect(appState) {
  router.push(appState && appState.targetUrl ? appState.targetUrl : '/');
}

// Get an auth0 spa-js client and provide it to the app globally
setupAuth(authConfig, callbackRedirect).then((auth) => {
  app.provide('auth', auth).mount('#app');
});
