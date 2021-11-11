# Vanderbilt D8 Theme Style Guide

This application is a living style guide, generated via [KSS node](https://www.npmjs.com/package/kss). It contains an overview of site components, as well as other user interface elements of the Vanderbilt D8 theme.

Source files are located in the `vanderbilt_d8/src` directory, and compiled into the `vanderbilt_d8/dist` directory, where they're referenced by the various libraries included with this theme (see `vanderbilt_d8/vanderbilt_d8.libraries.yml`).

The `vanderbilt_d8/dist/all/all.css` file is only used within the style guide. It is a file containing a concatenation of all `.css` files that are compiled to `vanderbilt_d8/dist/css/`.

## Component Architecture

The typical component includes:

1. a `.scss` file for including the related Sass for the component, as well as the KSS configuration details for the component's style guide listing (title, markup file, index in the style guide, etc.) _All `.scss` files will be run through a Sass linter to ensure coding standards are followed._

2. an `.es6.js` file for including javascript written in ES6 standards. Javascript files that include the `.es6.js` naming convention will be automatically transpiled into ES5. If a file does not include the `.es6` in its name, it will be skipped by the transpiler. _All `.es6.js` files will be run through a js linter to ensure coding standards are followed._

3. a `vendor` directory where vendor-provided javascript files can be included. Any javascript files included in a component's `vendor` directory will not be run through the linter, or ES6 transpiler, and simply copied to the `vanderbilt_d8/dist/js` directory.

4. an `assets` directory containing related background images, or other assets for a component. Images added to a component's assets directory will be compressed, and copied to `vanderbilt_d8/dist/assets`.

5. a `.twig` file that includes the markup for the component.

6. a `.json` file that includes placeholder data for components, and serves as a map for passing field data to a component template from within a presenter template. Presenter templates are the twig template files found in `vanderbilt_d8/src/templates/` (`node.html.twig`, `block.html.twig`, `field.html.twig`, etc.)

## Getting Started
If you haven't yet, install nvm:
https://github.com/creationix/nvm

### Run the following commands from the theme directory

#### Use the right version of node with:
`nvm use`

This command will look at your `.nvmrc` file and use the version node.js specified in it. This ensures all developers use the same version of node for consistency.

#### If that version of node isn't installed, install it with:
`nvm install`

#### Install npm dependencies with
`npm install`

This command looks at `package.json` and installs all the npm dependencies specified in it.  Some of the dependencies include gulp, autoprefixer, gulp-sass and others.

#### Runs default task
`npm run build`

This will first delete the compiled CSS, js, and style guide files from the `vanderbilt_d8/dist` directory, and then rebuild them from the source files.

#### Compiles Sass
`npm run compile`

This will perform a one-time Sass/js compilation.

#### Compiles Bootstrap Assets
`npm run twbs`

This will perform a one-time compilation of Bootstrap Sass, and copy Bootstrap js and font files to related directories under `vanderbilt_d8/dist`.

#### Runs the watch command
`npm run watch`

This is ideal when you are doing a lot of Sass/js changes and you want to make sure every time a change is saved it automatically gets compiled to CSS

#### Cleans complied directory
`npm run clean`

This will perform a one-time deletion of all compiled files within the dist/ directory.
