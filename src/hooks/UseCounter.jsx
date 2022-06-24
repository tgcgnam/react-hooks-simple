import { Button } from "antd";
import { useState, useCallback } from "react";

const handleCounter = () => {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => setCount(count + 1), [count]);
  const decrement = useCallback(() => setCount(count - 1), [count]);
  const reset = useCallback(() => setCount(0), []);

  return { count, increment, decrement, reset };
};

function UseCounter() {
  const { count, increment, decrement, reset } = handleCounter();

  return (
    <div>
      <div>
          <Button onClick={decrement}>-</Button>
          {count}
          <Button onClick={increment}>+</Button>
          </div>
          <Button onClick={reset}>Reset</Button>
    </div>
  );
}

export default UseCounter;
