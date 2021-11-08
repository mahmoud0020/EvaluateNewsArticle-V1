# Evaluate A News Article with Natural Language Processing

4th project at Udacity Front End Web Developer Nanodegree program.
This project aims to build a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. When a user submits a URL of an article, the web page then dispalys sentiment analysis returned from meaningcloud API, based on the contents of the article.

# Build Tools

* HTML
* css
* javaScript
* Node
* Express
* Webpack
* jest
* meaningCloud API
* workbox

# Installation
make sure node and npm are installed in the terminal 
1- move to project folder
> cd <project directory>
2- clone the repo 
> git clone <repo url >
  
3- install npm 

> install npm

4- install loaders and plagins 

##### Choose the necessary installation for your development mode
> npm i -D @babel/core @babel/preset-env babel-loader
  
> npm i -D style-loader node-sass css-loader sass-loader
  
> npm i -D clean-webpack-plugin
  
> npm i -D html-webpack-plugin
  
> npm i -D mini-css-extract-plugin
  
> npm i -D optimize-css-assets-webpack-plugin terser-webpack-plugin

5- sign up an api in the link below 
  
> https://www.meaningcloud.com/developer/create-account
  
6- create env file in the root of project and put the key of api 
  
> API_KEY = ****************************

7- start the project 
> npm run build-prod 
  
> npm start 
  
8- open browser at http://localhost:8060/
