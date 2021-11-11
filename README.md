## Overview
The vanderbilt_d8 theme is built on a component-based workflow, and requires NodeJS for running Gulp tasks, such as compiling Sass. See the Getting Started section for more details on requirements.

Learn more about a component-based workflow here: [https://www.mediacurrent.com/blog/integrating-components-drupal-8-part-1](https://www.mediacurrent.com/blog/integrating-components-drupal-8-part-1)

## Theme Structure
```
vanderbilt_d8/src/bootstrap
```
* Contains a copy of Bootstrap Sass v3.3.7.
* Bootstrap's baseline styling in included in `bootstrap-base.scss`.
* Bootstrap component styling is contained in individual `.scss` files (`bootstrap-dropdowns.scss`, `bootstrap-navs.scss`, etc.), which include the related Bootstrap Sass partial.

```
vanderbilt_d8/src/components
```
* Contains subdirectories for individual site components.
* Component directories include related `.scss`, `.js`, sample data `.json` files (where required), and `.twig` templates for the component. 

```
vanderbilt_d8/src/global
```
* `src/global/base` contains site-wide baseline styling
* `src/global/pages` contains markup and Sass partial files for generating prototype pages within the style guide. 
* `src/global/utilities` contains Sass utilities (mixins, variables, etc.)
* `src/global/vendors` contains third-party Sass and js assets (flexslider, font awesome, etc.)

```
vanderbilt_d8/src/layout
```
* Contains site-wide layout styling.

```
vanderbilt_d8/src/style-guide
```
* Contains configuration files for a KSS style guide. See related gulp task below.

```
vanderbilt_d8/src/templates
```
* Contains Drupal twig templates (`block.html.twig`, `node.html.twig`, etc.)

```
vanderbilt_d8/dist
```
* Contains compiled `.css`, `.js`, and related image assets in related subdirectories.

```
vanderbilt_d8/gulp-tasks
```
* Contains `.js` files related to individual gulp tasks. See below for more details.


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
