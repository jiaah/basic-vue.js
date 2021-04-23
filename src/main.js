import { createApp } from 'vue';
import App from './App.vue';

import { router } from './router';

// 4. Create and mount the root instance.
const app = createApp(App);

// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router);

// Now the app has started!
app.mount('#app');
