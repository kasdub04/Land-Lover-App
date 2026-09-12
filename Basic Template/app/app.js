// import { createApp } from 'nativescript-vue';
// import App from './components/App.vue';

// createApp(App).start();


// import { createApp, registerElement } from 'nativescript-vue'
// import GoogleMaps from '@nativescript/google-maps/vue'

// import Home from './components/Home.vue'

// const app = createApp(Home)
// app.use(GoogleMaps)

import { createApp } from 'nativescript-vue';
import GoogleMaps from '@nativescript/google-maps/vue';
import App from './components/App.vue';

const app = createApp(App);
app.use(GoogleMaps);

app.start();