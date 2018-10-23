**SparkEd Manual**  

[![Build Status](https://travis-ci.org/SparkEdUAB/sparked-manual.svg?branch=source)](https://travis-ci.org/SparkEdUAB/sparked-manual)

The repository contains the manual on SparkEd Platform usage, it also includes blogs.
The documentations are written using Facebook's [Docusaurus](https://docusaurus.io/)

> Docs 
> Website .   

The above are the main directories, in Docs is where all the markdown docs are, with the assets, The website directory contains the actual components that renders the files and the blog contents. 

To update the documentation or to run it locally, you need to have nodejs v6 or later. 

    git clone https://github.com/SparkEdUAB/sparked-manual.git
After that go into the cloned directory  

    cd sparked-manual/
Install the dependencies 

    yarn 
   or
   
   `npm install`   

You can make changes in docs directory then afterwards when you are done, you can build the static files to be run offline or published. 

    yarn start 
    
and 

    yarn build 



