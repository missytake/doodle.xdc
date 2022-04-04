import { h, Component, Fragment, createRef } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";
import { setTitle } from "./controller";
import { getDefaultState, receiveUpdate, StateType } from "./model";

function TableView() {
  const time_cells = [];

  for (let i = 0; i < 24 * 2; i++) {
    time_cells.push(`${Math.floor(i / 2)}:${i % 2 ? "30" : "00"}`);
  }

  const rows = time_cells.map((label, index) => {
    return (
      <tr key={label}>
        <td>{label}</td>
        <td data-day={0} data-time-index={index}></td>
        <td data-day={1} data-time-index={index}></td>
        <td data-day={2} data-time-index={index}></td>
        <td data-day={3} data-time-index={index}></td>
        <td data-day={4} data-time-index={index}></td>
        <td data-day={5} data-time-index={index}></td>
        <td data-day={6} data-time-index={index}></td>
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <td>Time</td>
          <td>Mo</td>
          <td>Tu</td>
          <td>We</td>
          <td>Th</td>
          <td>Fr</td>
          <td>Sa</td>
          <td>Su</td>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function Title({ value }: { value: string }) {
  const titleRef = useRef<HTMLInputElement | null>(null);
  const onSaveTitle = () => {
    if (titleRef.current && titleRef.current.value !== value) {
      setTitle(titleRef.current.value);
    }
  };
  return (
    <div className="title">
      <input
        id="title"
        type="text"
        ref={titleRef}
        onBlur={onSaveTitle}
        value={value}
      />
    </div>
  );
}

export function App() {
  const [appState, setAppState] = useState<StateType>(getDefaultState());
  // const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    window.webxdc.setUpdateListener((update) => {
      receiveUpdate(setAppState, update);

      // if (update.serial === update.max_serial) {
      //   setLoading(false);
      // }
    }, 0);
  }, []);

  // if (isLoading && !areThereStateUpdates) {
  //   return <div>Loading....</div>;
  // }

  return (
    <div>
      <div className="info">
        <Title value={appState.title} />
        <div className="deadline">
          <input
            id="deadline"
            type="date"
            name="deadline"
            placeholder="select Deadline"
          />
          <a href="" onClick={() => {}}>
            OK
          </a>
          <p id="output"></p>
        </div>
      </div>
      <TableView />
    </div>
  );
}
