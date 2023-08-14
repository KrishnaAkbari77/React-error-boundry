import React, { useState } from 'react';
// import { withErrorBoundary } from 'react-error-boundary';

export const Function = () => {
  const [counter, setCounter] = useState(0);

  setCounter(counter + 1)
  
  return <div>
    This is functional component
  </div>;
};

export default Function;

// const ErrorFallback = () => {
//   return <p>Something went wrong in function component</p>;
// };

// const FunctionWithErrorBoundary = withErrorBoundary(Function, {
//   FallbackComponent: ErrorFallback,
// });

// export default FunctionWithErrorBoundary;
