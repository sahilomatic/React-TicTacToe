import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [val, setVal] = useState(Array(9).fill(""));
  const [userFirst, setUserFirst] = useState(true);
  const [result, setResult] = useState(null);

  const handleLogic = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [6, 4, 2]
    ];
    winnerLogic.forEach((arr) => {
      const [a, b, c] = arr;

      if (val[a] == val[b] && val[b] == val[c] && val[b] != "") {
        setResult(val[b]);
        return;
      }
    });
  };
  const handleClick = (index) => {
    if (val[index] != "") {
      return;
    }
    if (userFirst) {
      let arr = val;
      arr[index] = "X";
      setVal(arr);
    } else {
      let arr = val;
      arr[index] = "O";
      setVal(arr);
    }
    handleLogic();
  };

  const reset = () => {
    setVal(Array(9).fill(""));
    setUserFirst(true);
  };

  return (
    <div>
      <div className="box">
        <div className="row">
          <div
            className="elem"
            onClick={() => {
              setUserFirst((prev) => {
                return !prev;
              });
              handleClick(0);
            }}
          >
            {val[0]}
          </div>
          <div
            className="elem"
            onClick={() => {
              setUserFirst((prev) => {
                return !prev;
              });
              handleClick(1);
            }}
          >
            {val[1]}
          </div>
          <div
            className="elem"
            onClick={() => {
              setUserFirst((prev) => {
                return !prev;
              });
              handleClick(2);
            }}
          >
            {val[2]}
          </div>
        </div>
        <div className="row">
          <div
            className="elem"
            onClick={() => {
              setUserFirst((prev) => {
                return !prev;
              });
              handleClick(3);
            }}
          >
            {val[3]}
          </div>
          <div
            className="elem"
            onClick={() => {
              setUserFirst((prev) => {
                return !prev;
              });
              handleClick(4);
            }}
          >
            {val[4]}
          </div>
          <div
            className="elem"
            onClick={() => {
              setUserFirst((prev) => {
                return !prev;
              });
              handleClick(5);
            }}
          >
            {val[5]}
          </div>
        </div>
        <div className="row">
          <div
            className="elem"
            onClick={() => {
              setUserFirst((prev) => {
                return !prev;
              });
              handleClick(6);
            }}
          >
            {val[6]}
          </div>
          <div
            className="elem"
            onClick={() => {
              setUserFirst((prev) => {
                return !prev;
              });
              handleClick(7);
            }}
          >
            {val[7]}
          </div>
          <div
            className="elem"
            onClick={() => {
              setUserFirst((prev) => {
                return !prev;
              });
              handleClick(8);
            }}
          >
            {val[8]}
          </div>
        </div>
      </div>
      <div className="button">
        <button
          onClick={() => {
            reset();
          }}
        >
          Reset
        </button>
      </div>
      {result && <div className="result">{result} Won !!</div>}
    </div>
  );
}
