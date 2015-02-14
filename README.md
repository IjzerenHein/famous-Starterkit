#famous-Starterkit

## Work in progress, check back later..

Starterkit for famo.us containing examples, instructions & best practises.
This very much oppinionated starter-kit tries to provide a full template for building
production ready vanilla famo.us apps & websites. It uses webpack and grunt to create
a very simple and powerful toolchain complete with linting, tests, minification & obfuscation.


# Index
- [Installation](#installation)
- [Building & running](#building--running)
- [Resources](#resources)
- [Todo list](#todo-list)


# Installation

First make sure you have node.js installed... without that nothing works!
You can either install it with your favorite package manager or with [the installer](http://nodejs.org/download) found on [nodejs.org](http://nodejs.org).

Install grunt & webpack globally *(if not installed already):*

```
npm install -g grunt-cli webpack webpack-dev-server
```

Clone or Download this starterkit from:

```
github.com/IjzerenHein/famous-Starterkit
```

Install the local npm packages *(from the project root folder):*

```
npm install
```

That's it! You should now be able to build & run the project.


# Building & running

To build the project, use:

```
grunt
```

This runs linters & code-style checkers, and builds the webpack output in: `/www`.
You can open the output `www/index.html` file using `grunt open`.

To start a live reload server, use:

```
grunt serve
```

This starts the webpack-dev-server at `http://localhost:8080` and opens the URL in the browser.

To build for production and minify and mangle the output, use:

```
grunt prod
```


# Resources

- [Webpack How-to](https://github.com/petehunt/webpack-howto)



# Todo list

- Cordova integration
- ES6
- Tests
- Examples
- Instructions

## Contribute

If you like this project and want to support it, show some love
and give it a star.


## Contact
- 	@IjzerenHein
- 	http://www.gloey.nl
- 	hrutjes@gmail.com (for hire)

© 2015 - Hein Rutjes
