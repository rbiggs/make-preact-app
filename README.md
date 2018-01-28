make-preact-app
===============

This is the bare minimum you'll need in order to get up and running with Preact and Webpack 2. Although `preact-cli` is a nice tool for quickly pulling together various types of default Preact apps, it does not support loading a default html page with static markup that you can inject Preact components into. This does that. The default will give you a simple HTML page that injects two Preact components into the DOM: `Title` and `FruitList`.


Install
-------

```bash
npm i -g make-preact-app
```

Create an App
-------------

```bash
make-preact-app myApp
```
This will create a project with the name provide in the directory where you ran the command. That means you must `cd` to where you want the command to create your project. The command will create a folder with your project's name at your current location in the file system.

Project Structure
-----------------
A new project will have the following folder structure:
```
+--myproject
|  +--src
|     +--components
|        |--list.js
|        |--title.js
|     +--data
|        |--fruits.js
|     |--index.html
|     |--index.js
|     |--styles.css
|--.gitignore
|--.editorconfig
|--package.json
|--README.md
|--webpack.config.js
```


Install Dependences
-------------------

```npm
npm i
````

Running and Building
--------------------

To start you project and run it in your browser, run:

```bash
npm start
```

This will start the Webpack dev server with Hot Module Reloaded enabled. You can access the running app in the browser at:

```
http://localhost:8080
```

To creat a production build, run:

```bash
npm run build
```

This will bundle up your JavaScript into the `build` folder.
