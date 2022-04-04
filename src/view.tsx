//@ts-check
import { h, Component, Fragment } from "preact";
import { setTitle } from "./controller";

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

export function App() {
  return (
    <div>
      <div className="info">
        <div className="ev-name">
          <input id="title" type="text" />
          <a
            href=""
            onClick={() => {
              setTitle(document.getElementById("title").value, true);
              return false;
            }}
          >
            OK
          </a>
        </div>
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
