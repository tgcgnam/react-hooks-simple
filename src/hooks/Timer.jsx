import { useState, useCallback, useRef } from "react";
import { Button } from "antd";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Timer() {
  const [time, setTime] = useState(0);
  const [disable, setDisable] = useState(false);

  const timer = useRef();

  const handleStart = useCallback(() => {
    setDisable(true);
    timer.current = setInterval(() => {
      setTime((time) => time + 1);
    }, 100);
  }, []);

  const handleStop = useCallback(() => {
    setDisable(false);
    window.clearInterval(timer.current);
    timer.current = null;
  }, []);

  return (
    <Wrapper className="timer">
      <div>{time} second</div>
      <div>
        <Button onClick={handleStart} disabled={disable}>
          Start
        </Button>
        <Button onClick={handleStop} disabled={!disable}>
          Stop
        </Button>
      </div>
    </Wrapper>
  );
}

export default Timer;
