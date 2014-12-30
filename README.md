Automated pseudo-CMS for my foodblog
=====================================================================
## ![butterhub architecture](https://raw.githubusercontent.com/jamding/butterhub_blog/master/how_it_works.png)

Node.js daemon watches filesystem on my personal computer, leverages cloud storage (dropbox for now) as a ghetto CDN, communicates via HTTP api with Express.js on AWS which in turn serves the AngularJS app.

Oh, and its built on my MEAN boilerplate at <a href="https://github.com/jamding/MEAN_GRUNT_Boilerplate" target="_blank">also on github</a>.
