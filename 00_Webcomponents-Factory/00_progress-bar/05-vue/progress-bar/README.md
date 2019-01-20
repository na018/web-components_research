# Progress-Bar
1. Create Project with vue cli (version 3):
```
vue create progress-bar
```

*(from all options choose Babel as the only one)*

2. create component in components folder: `src/components/progress-bar.vue`

3. Adjust package.json:
```
"build": "vue-cli-service build --target wc --name progress-bar  'src/components/ProgressBar.vue'"
```
4. run `npm run build` in a terminal
This will automatically generate the web component script in dist/progress-bar.js


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
