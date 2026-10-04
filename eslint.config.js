const infernoPlugin = require('eslint-plugin-inferno');
const globals = require('globals');

module.exports = [
    {
        files: ['**/*.js'],
        plugins: {
            inferno: infernoPlugin
        },
        languageOptions: {
            ecmaVersion: 2018,
            sourceType: 'module',
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            },
            globals: {
                ...globals.browser,
                ...globals.commonjs,
                ...globals.es2015,
                ...globals.jest,
                ...globals.node
            }
        }
    }
];
