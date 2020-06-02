# María y Víctor

## Install

Install all dependencies

```sh
npm install
```

Run from your CLI:

```sh
gatsby develop
```

## Structure

### Components

Every component lives in a folder — the folder is named after the Component (e.g. Header). Inside the folder you need two files:

1. `index.js` — this is where the components code lives
1. `styles.module.scss` — this is where any styling for the component goes

#### Adding a new component

In the Component index (`src/components/index.js`), you need to import and export the component. This might seem annoying — however it makes it a lot eaiser to use the components in templates or pages. Instead of having separate import statements for every component, you can simply `import { Component1, Component2, Component3 } from '../components'`.
