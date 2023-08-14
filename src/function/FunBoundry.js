import React, { useState, useEffect } from 'react';

const FunBoundary = (props) => {
  const [hasError, setHasError] = useState(false);
console.log('haserror',hasError)
  const handleCatchError = () => {
    // setHasError(true)
  };

  

  // useEffect(() => {

    const errorHandler = (error) => { 
      // handleCatchError();
      setHasError((pre) => !pre)
      console.log("error handler");
    };

    window.addEventListener('error', errorHandler);

  //   return () => {
  //     window.removeEventListener('error', errorHandler);
  //   }; 

  // }, []);

  if (hasError) {
    console.log("state changed");
    return <div>Error occurred in function!</div>;
  } else {
    return <div>{props.children}</div>;
  }
}

export default FunBoundary;
