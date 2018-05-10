## Understanding error messages
- Cannot read property 'value' of undefined -> means you made some error in event.target.value, you can check in which file and on which line it occured!

## Finding logical errors by devtools & sourcemaps

Devtools => source => code is running on localhost: 3000 => Users => src folder containing all the files => make break pints in app.js and use step-over next function arrow

## Using React Devtools
- Install chrome extension
- Check the app components as well as props/state getting updated too

## Using Error Boundaries (React 16+)
- Sometimes you have code which fail during runtime, so you want to show custom-error msg to user.
- Failed to get some data from the server, so catch this error and show some message 
- Only used in special cases, when err cant be avoided!
- Create error boundary components

```
import React, { Component } from 'react';

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: ' '
    }

    componentDidCatch = (error, info) => {
        this.setState({
            hasError: true,
            errorMessage: error
        });
    }

    render() {
        if (this.state.hasError) {
            return <h1>{this.state.errorMessage}</h1>;
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;
```

- `ComponentDidCatch` is a method that receives potential error and some additional info passed. It will be executed whenever component which is wrapped with ErrorBoundary throws an error.

- Errorbondary used as a wrapping component, so it will be like:

<Errorboundary>
     <SomeOtherComp>
     </SomeOtherComp>
</Errorboundary>

Note: Anything that comes in between start and closing tag of <Errorboundary> will be it's props children. Remember whenever we access children i.e. {props.children }, they are available by default. This means you don't pass them in a property, you can access them for the wrapping component (Erroboundary here). 

- Wrap the component with ErrorBoundary comp. It acts just like a HOC. 
- Note: If the component containing array has key property, move it to the wrapping component, since key should be the element when mapping an array.
