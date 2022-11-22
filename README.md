# Fast learning Express.Js

fast learning Express.Js, template-engine

## Pre Setup
- install node.js first
- install nodemon for hot-reload serve
```terminal
npm install nodemon -g
```

### manual Setup
make package.json
```terminal
npm init -y
```
install express with [pug template engine](https://pugjs.org/api/getting-started.html)
```terminal
npm install express pug
```

create app.js, views/* on directory (look a like this repo)

serve
```terminal
nodemon app.js
```

### use generator Setup
install [express generator](https://expressjs.com/en/starter/generator.html)
```terminal
npm install -g express-generator 
```
create new project with pug
```terminal
express --view=pug
```

or. with folder
```terminal
express --view=pug myApp
```

Then install dependencies:
```terminal
cd myApp
npm insatll
```

serve
- on MacOS or Linux
```terminal
$ DEBUG=myapp:* npm start
```
- on Windows CMD
```terminal
> set DEBUG=myapp:* & npm start
```
- on Windows PowerShell
```terminal
PS> $env:DEBUG='myapp:*'; npm start
```