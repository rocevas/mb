import './bootstrap';
import '../css/app.css';

import { createPinia } from 'pinia'
import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';
createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        const app = createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(createPinia())
            .use(ZiggyVue);

        // Global error handler
        app.config.errorHandler = (err, vm, info) => {
            // Handle the error
            console.error('Error:', err);
            console.error('Info:', info);
            // You can also show a user-friendly message or log the error to an external service
        };

        app.mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
