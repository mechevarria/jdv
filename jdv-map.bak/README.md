# jdv-map

AngularJS application frontend for a local jboss data virtualization instance. Reads ODATA in form of REST and displays as a Leaflet api OpenStreet map.

### Install
This command will download all the dependencies into a local *node_modules* folder in the project root.

~~~bash
npm install
~~~

## Run Dev

~~~bash
npm run dev
~~~

This task will [eslint](http://eslint.org/) your Javascript and also serve a local site on **localhost:8181**.  In addition it will watch and live reload changes to your application

You can edit the proxy options in `gulpfile.js` to call backend services.  Not configuring a backend will result in [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) errors when making external calls.

## Run Production

To do a production build that **eslints, concats, minifies and uglifies** Javascript and CSS, and then serves the site, run

~~~bash
npm run start
~~~

The generated site and assets will be in the **dist** folder.  To just do a production build and not server do

~~~bash
npm run build
~~~  

## References
[JBoss Data Virtualization](https://www.redhat.com/en/technologies/jboss-middleware/data-virtualization)

[AngularJS](https://angular.io/)

[Angular-Patternfly](http://www.patternfly.org/angular-patternfly/#/api)

[UI Bootstrap](https://angular-ui.github.io/bootstrap/)

[UI-Leaflet](http://angular-ui.github.io/ui-leaflet/#!/)


![cli.png](screenshot.png)
