```javascript
// pages/about.js
import ErrorComponent from '../components/ErrorComponent';

function About() {
  try {
    // Code that may throw an error
    throw new Error('Something went wrong!'); 
  } catch (error) {
    return <ErrorComponent error={error} />
  }
}

export default About;
```
```javascript
// components/ErrorComponent.js
function ErrorComponent({ error }) {
  return (
    <div>
      <h1>An error occurred:</h1>
      <p>{error.message}</p>
    </div>
  );
}

export default ErrorComponent;
```