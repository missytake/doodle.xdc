import { StateUpdater } from "preact/hooks";
import { setTitle } from "./controller";
import { StatusUpdate, TimeRange } from "./types";
import { ReceivedStatusUpdate } from "./webxdc";

export type StateType = {
  title: string;
  // deadline: number,
  timeranges: TimeRange[];
};

export function getDefaultState(): StateType {
  return {
    title: "doodle", //TODO do we want to have this default?
    timeranges: [
        {
          start: 4,
          end: 15,
          uid: "0",  // weird but should be fine
          owner: "alice@example.org",
          ownername: "alice",
        },
        {
          start: 5,
          end: 14,
          uid: "1",  // weird but should be fine
          owner: "bob@example.org",
          ownername: "bob",
        },
        {
          start: 18,
          end: 94,
          uid: "2",  // weird but should be fine
          owner: "alice@example.org",
          ownername: "alice",
        },
        {
          start: 97,
          end: 113,
          uid: "3",  // weird but should be fine
          owner: "alice@example.org",
          ownername: "alice",
        },
        {
          start: 110,
          end: 115,
          uid: "4",  // weird but should be fine
          owner: "bob@example.org",
          ownername: "bob",
        },
        {
          start: 200,
          end: 202,
          uid: "5",  // weird but should be fine
          owner: "charlie@example.org",
          ownername: "charlie",
        },
      ],
  };
}

export function receiveUpdate(
  update_function: StateUpdater<StateType>,
  update: ReceivedStatusUpdate<StatusUpdate>
) {
  if (update.payload.method === "setTimerange") {
  } else if (update.payload.method === "setTitle") {
    const title = update.payload.title;
    update_function((state) => {
      return { ...state, title };
    });
  } else if (update.payload.method === "setDeadline") {
  } else if (update.payload.method === "deleteTimerange") {
  }
}
