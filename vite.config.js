import { defineConfig } from 'vite'
import path from 'path';

// Load from .env
const PRIMARY_SITE_URL = process.env.PRIMARY_SITE_URL || 'https://starter-livewires.ddev.site';
const siteUrl = new URL(PRIMARY_SITE_URL);

export default defineConfig({
    base: '/',
    build: {
        manifest: true,
        outDir: 'web/dist/',
        rollupOptions: {
            input: {
                app: 'src/js/app.js',
            },
        },
    },
    server: {
        host: '0.0.0.0',
        port: 3000,
        strictPort: true,
        origin: `${process.env.DDEV_PRIMARY_URL.replace(/:\d+$/, "")}:3000`,
        cors: {
            origin: /https?:\/\/([A-Za-z0-9\-\.]+)?(\.ddev\.site)(?::\d+)?$/,
        },
        watch: {
            include: ['src/**/*', 'templates/**/*'],
        },
    }
});