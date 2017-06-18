# Inferno Boilerplate

<p align="center">
  <img src="https://image.ibb.co/jRzc7k/logo.png" alt="Inferno Boilerplate logo" width="600" />
</p>

## Overview

#### What is Inferno?
This is a **production ready** boilerplate for people wanting to work with *Inferno*. This boilerplate built with `inferno`, `inferno-router`, `webpack2` and `babel` could be a quick way to start using Inferno.

## Features
- :zap: Blazing fast library for building modern UI interfaces.
- :wrench: Efficient boilerplate to build full-fledged single page applications with `inferno` and `inferno-router`.
- :rocket: Compatibility with most of React plugins with `inferno-compat`.
- :gem: Comfortable development with `eslint` and `hot-module-replacement` tool which applies your code changes in the real time.
- :open_file_folder: Prepared application structure with examples and aliases.
- :package: Tuned production building with one command.

## Getting started

Clone this repository locally and then run `npm install` (or `yarn`).

To run the example app with development server, run `npm dev`. View `http://localhost:8080` in your browser to see the boilerplate example.

Note, that NodeJS v6+ needs to be installed to use this boilerplate.

## Structure
All your code and resources are in `src` directory. Your build is in `public` directory. Is that simple.
#### Source directories and aliases:
- **~** *src* : sources root
- **~router** *src/router* : `inferno-router` files
- **~views** *src/views* : page views for `inferno-router`
- **~components** *src/components* : place for your non-page components
- **~layouts** *src/layouts* : page layouts for `inferno-router`
- **~assets** *src/assets* : place for images, scripts, styles etc
- **~assets** *src/assets/styles* : self explaining
- **~scripts** *src/assets/js* : yout non-component `.js` files 
- **~store** *src/store* : if you're going to use state manager like `Redux` or `Mobx`, there is an alias for it's files
- **~containers** *src/containers* : directory for `Redux` containers

## Useful tips
#### Going to production
When you feels your app is ready to be tested on read service, just run `npm run build` and wait a little. When process will be ready, you can find your compiled application in `public` directory. That's it!
*Note*: do not try to open *index.html* with expectation it to work. You need server like `express.js` to see the result.

#### Styling your app
There is 2 recommended ways to style your app:
1. **Style views and layouts with external stylesheets.**
Just include your style file (you can use SASS there, see below) and wrap it into `<style>` tag of your view. When page or layout will be changed, style will be destroyed - see `layouts/default.js` and `layouts/special.js`.
For better scoping you can use CCS (w/ PostCSS) or SCSS nesting with [BEM](https://en.bem.info/) or other namespacing technology;
2. **Style components with scoped CSSinJS technology.**
You also can style your components inline with all of JavaScript power! Look at  `~components/contributor.js` for example. This component styled with [jss](https://github.com/cssinjs/jss), which seems to be [fastest](https://github.com/hellofresh/css-in-js-perf-tests) CSSinJS library. It supports nesting and style prefixing, so you will not meet problems with it. You can also use [inline PostCSS](https://github.com/lttb/postjss) and [component theming](https://github.com/nathanmarks/jss-theme-reactor) with it. But also you can try to use other libraries: `css-constructor`, `aphrodite` ans `glamor` are good.

#### Using SCSS
SCSS loader is allready configured, you just need to install it with theese command: `npm install --save node-sass sass-loader`.
After that you can include your SCSS styles in JS like `import '~styles/style.scss'` or in another one SCSS like `@import '~styles/variables.scss'`.
If you do not like SASS with its compiling system, look at [precss](https://github.com/jonathantneal/precss). Just install it and add into the `plugins` object fof `postcss.config.js`

#### Using ESlint
Eslint is disabled by default. To turn it up, just uncomment the coressponding lines in `webpack.config.js`.
If you can't find needed lines, just search for `Eslint loader` and you will be good.

#### Publish as static application
If you want deploy your application as clean HTML5 app, you need to make a few changes. Open `~router/index.js` and change this line:
`import createHistory from 'history/createBrowserHistory'
`
to this:
`import createHistory from 'history/createHashHistory'
`
Now you can try publish your app to [surge.sh](https://surge.sh/):
```bash
npm install -g surge
# reopen console if you're in CMD
npm run build
cd public
surge
```

#### Change port for development server
If you just don't like `8080`, you can go to `webpack.config.js` config section (search for `Config section`) and replace it with your favorite number. But if you want to run several applications in one time (for some reasons), you can run following command:

**Bash**: `DEV_PORT=XXXX npm run dev`

**CMD**: `set DEV_PORT=XXXX && npm run dev`

...where XXXX is your port.
