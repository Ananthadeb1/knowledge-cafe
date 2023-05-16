import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1>This is blog compo for the question answer.</h1>
            <br></br>
            <h2>Props vs state:</h2>
            <p>State: State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function.</p>
            <p>Props: Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props. They are equivalent to function parameters.</p>
            <br></br>
            <h2>How does useState work?</h2>
            <p>useState is a Hook that allows to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.</p>
            <br></br>
            <h2>Purpose of useEffect other than fetching data?</h2>
            <p>The useEffect in react js allows you to perform side effects in your components. The react useEffect examples of side effects include retrieving data, direct DOM updates, and timers. The second argument is optional.</p>
            <br></br>
            <h2>How Does React work?</h2>
            <p>React is a JavaScript library that creates and maintains an in-memory representation of a UI. When a user interacts with a React application, React updates the in-memory representation and the changes are reflected in the UI. React uses a virtual DOM, which is a JavaScript representation of the actual DOM.</p>
        </div>
    );
};

export default Blog;