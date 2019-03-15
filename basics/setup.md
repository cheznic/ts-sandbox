# Quickly Setup a TypeScript Project

## Do this once on your development laptop
> Do the following once on the development environment and periodically update the software.  Using Homebrew makes this easy.
- Install NodeJS.

  ```brew install node```

- Install TypeScript.

  ```brew install typescript```

  or 

  ```sudo npm install -g typescript```

- Install VS Code.

  ```brew cask install visual-studio-code```

## Do this for each project
- Create a project folder.

  ```mkdir helloworld```

  ```cd helloworld``` 

- Create ```index.html```.
- Create ```script.ts``` and reference ```script.js``` in ```index.html```.
> Code is authored in TypeScript in files ending with ```.ts``` and transpiles to ECMAScript (JavaScript) files ending with ```.js```.
- Initialize the project folder for npm management. 

   ```npm init```

> npm is needed for package management and a very convenient dev web server.
- For a simple project accept the defaults as prompted, but I like using 0.0.1 for the initial version, not 1.0.0
- install the development web server.

  ```npm install lite-server --save-dev```

> This will download, install and configure the 'lite-server' for a web server.
- Configure the lite-server to start using the project folder as web root by modifying ```package.json``` so the ```scripts``` section contains the following.

  ```"start": "lite-server"```

- To transpile all ```.ts``` files in the project folder and subfolders, init the folder for TypeScript.

  ```tsc --init```

## Do this each working session
- Open a terminal and cd to the project folder, then start the lite-server.  This will also open a new browser tab in the default browser.

  ```npm start```

> You can now compile all ```.ts``` files in this project folder and its subfolders by running ```tsc```.

- To automatically transpile after every change, open a terminal and cd to the project folder, then start listening for changes by running.

  ```tsc --watch```

> At this point you should have two console windows running ```npm start``` and ```tsc --watch```.  Stop either with ```[ctrl]-c``` from the respective window to end your session.  

