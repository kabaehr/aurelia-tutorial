# Tutorial
## Introduction
### Why Aurelia?

Taken from [here](http://aurelia.io/hub.html#/doc/article/aurelia/framework/latest/technical-benefits/1):
- Use modern JavaScript and TypeScript - fully written in standards-based ES 2015 and ES 2016
- Designed to work with modern ES 2015-oriented package managers like JSPM.
- Intended to be used with modern transpilers such as Babel and TypeScript.
- Leverages standards-compliant Web Components specs such as HTMLTemplateElement and ShadowDOM
- Highly modular development, suitable for large-scale apps
- Designed for modern web browsers.
- Adds polyfills to support older browsers, such as IE9.
- Fully-extensible and adaptive data-binding engine.
- Powerful and flexible hierarchical dependency injection.
- Leverage conventions to write less code and get more done.
- Little to no framework intrusion, so developers can focus on their app, not the framework.
- Application and package bundling compatible with any build system.

### Requirements

In this tutorial we will primarily be using the Aurelia CLI. Prerequisites for this are 
- NodeJS version 4.x or above
- Git

Once you have those prerequisites installed you can install the Aurelia CLI itself by running the following command on the command line:

`npm install aurelia-cli -g`

## Basic tutorial

### 1. Creating and running a new app

1. Run `au new` on the command line. Take option `2. Default TypeScript` and accept all other defaults.
2. Change directory to the newly created `aurelia-app` folder and run `au run --watch`.
3. Wait for the build to be finished, open a web browser and navigate to [http://localhost:9000](http://localhost:9000). You should see a web page displaying "Hello World!".

## Advanced tutorial