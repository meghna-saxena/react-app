## Understanding error messages
- Cannot read property 'value' of undefined -> means you made some error in event.target.value, you can check in which file and on which line it occured!

## Finding logical errors by devtools & sourcemaps

Devtools => source => code is running on localhost: 3000 => Users => src folder containing all the files => make break pints in app.js and use step-over next function arrow

## Using React Devtools
- Install chrome extension
- Check the app components as well as props/state getting updated too

## Using Error Boundaries (React 16+)
- Sometimes you have code which fail during runtime, so you want to show custom-error msg to user