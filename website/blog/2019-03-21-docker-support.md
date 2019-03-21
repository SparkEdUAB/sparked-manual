---
title: Docker Support
author: OlivierJM
authorURL: http://twitter.com/olivierjmm
authorFBID: 100006531918094
---
## Announcing docker support  

> You can now easily pull a docker image and run it without worrying about the package installations and other connections.  

We have provided a docker image that can easily be pulled from docker hub, this makes it for anyone to easily try out SparkEd.

## About the docker implementation 

What is docker? You may ask

According to [OpenSource.com](https://opensource.com/resources/what-docker) 

> Docker is a tool designed to make it easier to create, deploy, and run applications by using containers. Containers allow a developer to package up an application with all of the parts it needs, such as libraries and other dependencies, and ship it all out as one package.

Because of the easy in packaging everything together, we took this advantage to simplify the packaging.  

The provied docker image relies on `meteor launchpad`, we provided a **launchpad.conf** that can be to support different configurations depending on your setup.  

Why this setup ? 

**Simplification of configurations**  

Normally when you clone any nodejs based project you have to install packages yourself and other required setup, we created this image to make it easy for anyone who want to try out SparkEd. 
How docker makes this easy is that the image is publicly shared on docker hub and anyone can just do `docker pull olivierjm/spark` then run it, and you will be good to go.

This abstracts away the need to configure lot of things on your end.

**Continuous Deployment**  

We are currently using [Travis](https://travis-ci.com/SparkEdUAB/SparkEd) as our CI/CD tool and these when combined they make it easy to automatically build and push on every push or PR merge.
With these we are able to keep the image on docker hub updated with the latest changes without having to do it manually.  

### How to use the image  

In the normal way you would run the image as follows

`docker run imagename:tag` in this it would be `docker run olivierjm/sparked:latest`

but we would normally need to provide environment vairables that meteor can pick up and use like **_ROOT_URL_**, **_PORT_**, **_MONGO_URL_** and any other envs that you might want to pass along.

If `INSTALL_MONGO` to true when building the image or in the `launchpad.conf` then you don't need to set the _MONGO_URL_

```bash
  docker run -d \
  -e ROOT_URL=http://your_url \
  -p 80:3000 \
  yourname/sparked:tag
```

check `http://your_url` in your browser if the image run successfully then you should be able to have everything working.  

Watch out for v2 release which will be coming out soon.  








