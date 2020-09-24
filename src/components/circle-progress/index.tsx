import React, { useRef, useEffect, useState } from "react";

export default ({ value }: any) => {
  const circle: any = useRef(null);
  const [percent, setPercent] = useState<number>(value || 10);
  useEffect(() => {
    const radius = circle.current.r.baseVal.value;
    const circumference = radius * 2 * Math.PI;
    circle.current.style.strokeDasharray = `${circumference} ${circumference}`;

    const offset = circumference - (percent / 100) * circumference;
    circle.current.style.strokeDashoffset = offset;

    return;
  }, [percent]);

  const onChangePercent = (value: number) => {
    setPercent(value);
  };
  return (
    <>
      <br />
      <p>Circle Progress Bar</p>
      <input
        type="number"
        min="1"
        max="100"
        value={percent}
        onChange={e => onChangePercent(Number(e.target.value))}
      />
      <br />
      <svg className="progress-ring" width="120" height="120">
        <circle
          ref={circle}
          className="progress-ring__circle"
          stroke="black"
          strokeWidth="4"
          fill="transparent"
          r="52"
          cx="60"
          cy="60"
        />
      </svg>
    </>
  );
};
