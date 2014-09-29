# example-elixir-html5

Example application using elixir and HTML5.

The project is split up into an elixir REST api
and an HTML5 application with separate build systems.


## Running

### Installing the various dependencies:

    $ cd api/
    $ mix deps.get
    $ cd ../
   
    $ cd web/
    $ npm install
    $ bower install
    $ cd ../
   
    $ cd dev/
    $ npm install 
    $ cd ../

### Running everything

    $ foreman start


The proxy server is running at http://localhost:5050/. The static
server is running at http://localhost:3002 and the
API server is running at http://localhost:4000
