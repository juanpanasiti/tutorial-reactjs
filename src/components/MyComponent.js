import React from 'react';

const MyComponent = ({name}) => {
    name =  name || "John Doe"
    return (
        <div>
        <h4>Hola {name} </h4>
        </div>
    );
};

export default MyComponent;