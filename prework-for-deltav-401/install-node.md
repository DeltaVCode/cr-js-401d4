# Install Node and Supporting Packages

## Install NVM & Node

[Node Version Manager](https://github.com/creationix/nvm) is a great tool for... managing Node (surprise!). 

1. Follow the installation instructions in the repo README, under the "Git Install" section.
   * This will create the directory `~/.nvm` and install nvm into it.  
   * run `ls -a ~/` and look for the **.nvm** directory
1. Follow the instructions under the "Usage" section to install Node, and ensure setup is correct.

   * Open a new terminal tab, and run `node -v` to verify the [latest "Current" NodeJS](https://nodejs.org/en/) version is installed.

## Configure global node modules

### Install packages
- **nodemon** `npm i -g nodemon`
- **json-server** `npm i -g json-server`
- **live-server** `npm i -g live-server`

### Uninstall packages
- **jest** `npm un -g jest`
- **eslint** `npm un -g eslint`

#### Turning in this assignment
Submit a screen shot showing the output of the following commands, run from your terminal
```
nvm --version
which node; node --version
which nodemon; nodemon --version
which json-server; json-server --version
which live-server; live-server --version
which jest; 
which eslint; 
```

