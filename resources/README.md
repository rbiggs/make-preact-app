create-preact-app
=================

This is the bare minimum you'll need in order to get up and running with Preact and Webpack 2.


Install
-------

```bash
npm i -g create-preact-app
```

Create an App
-------------

```bash
create-preact-app myApp
```
This will create a project with the name provide in the directory where you ran the command. That means you must `cd` to where you want the command to create your project. The command will create a folder with your project's name at your current location in the file system.

Project Structure
-----------------
A new project will have the following folder structure:
```
+--myproject
|  +--dev
|     +--components
|        |--title.js
|     |--app.js
|     |--index.html
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
