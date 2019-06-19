# jdv-security-client 
Angular client based on PatternFly that shows role based security in JBoss Data Virtualization

Referenced projects:

[JBoss Data Virtualization](https://developers.redhat.com/products/datavirt/overview/)

[PatternFly](http://www.patternfly.org/)

[Angular PatternFly](http://www.patternfly.org/angular-patternfly)


## Install
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