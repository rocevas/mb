import defaultTheme from 'tailwindcss/defaultTheme';
import colors from 'tailwindcss/colors';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],
    darkMode: 'selector',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                gray: colors.gray,
                primary: colors.teal,
                secondary: colors.gray,
                info: colors.blue,
                success: colors.emerald,
                warning: colors.amber,
                error: colors.rose
            },
            fontSize: {
                11: ["0.688rem"],
                13: ["0.813rem"],
                15: ["0.938rem"],
            },
        },
    },

    plugins: [forms, typography],
};
