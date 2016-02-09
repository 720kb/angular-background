Angular Background
==================


Angular Background is an angular.js directive to dynamically switch the background of your DOM elements


The angular background is developed by [720kb](http://720kb.net).

###Requirements

AngularJS v1.2+

###Browser support


![Chrome](https://raw.github.com/alrra/browser-logos/master/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/firefox/firefox_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/internet-explorer/internet-explorer_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/opera/opera_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/safari/safari_48x48.png)
--- | --- | --- | --- | --- |
 ✔ | ✔ | IE9 + | ✔ | ✔ |


###Load

To use the directive, include the angular background javascript file in your web page:

```html
<!DOCTYPE HTML>
<html>
<head></head>
<body ng-app="app">
  //.....
  <script src="src/js/angular-background.js"></script>
</body>
</html>
```

###Install

####Bower

```
$ bower install angular-background --save
```

_then load the js files in your html_

####Npm

```
$ npm install angular-background --save
```

_then load the js files in your html_

###Add module dependency

Add the 720kb.tooltips module dependency

```js
angular.module('app', [
  '720kb.background'
 ]);
```

Use the dynamic-background attribute to init the element

```html

<div dynamic-background>just initialized</div>

```
###Options

####Attributes
This is the same as writing Css background rules, so all the background rules are now attributes ( you can check all the supported attributes [here](https://developer.mozilla.org/en-US/docs/Web/CSS/background))

```html
	<div
	dynamic-background=""
	background-image=" url || encoded image source like base64; "
	background-size="100%"
	background-repeat="no-repeat"
	background-position="top center"
	background-attachment="etc..."
	background-clip="etc.."
	background-origin="etc...">
      <p>
        My dynamic background div
      </p>
    </div>
```

####Events
You can specify the background to change on a specific event or a set of events using the background-on-event="" data attribute
  ```html
  <div dynamic-background background-on-event="mouseover keyup" background-image=" url OR encoded image source like base64; ">
   <p>
    My dynamic background div that will change background on mouseover or keyup
  </p>
</div>
```

###Example

####[Live demo](https://720kb.github.io/angular-background)

###Contributing

We will be much grateful if you help us making this project to grow up.
Feel free to contribute by forking, opening issues, pull requests etc.

###License

The MIT License (MIT)

Copyright (c) 2014 Filippo Oretti, Dario Andrei

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
