# CDN (Content Delivery Network)

A CDN is a network of servers that distributes content from an "origin" server
to end users around the globe by caching content nearby each user's point of
internet access. They initially request content from the origin server, which is
copied and stored elsewhere as needed. Both React and ReactDOM are
available over a CDN.

# Drawbacks of using CDNs

● An essential prerequisite is an internet connection.
● If there is a server issue, packages might not load.
● Since one script file may be dependent on another, the order of CDN links is important. Browsers are not capable of linking files together. It's possible that script files won't link correctly.
● You may forget to list all of the CDN connections required for an
application.

# Webpack comes into the picture!

# Webpack- is a module bundler!

Its main purpose is to bundle JavaScript files for usage in a browser. For eg: if there are 2-3 files like - index.js, app.js, form.js, button.js. A module bundler will create a bundle of these files with their dependencies. Webpack goes through your package and creates a dependency graph which consists of various modules which your web app would require to function as expected.

# install package

command - npm install -g create-react-app
