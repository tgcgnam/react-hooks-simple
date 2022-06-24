import { useState } from "react";
import { Button } from "antd";

const CountLabel = ({ count }) => {
  const color = count > 10 ? "red" : "blue";

  return <span style={{ color }}>{count} Click</span>;
};

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <Button onClick={() => setCount(count + 1)}>
      <CountLabel count={count} />
    </Button>
  );
}

export default Counter;
