import { StateUpdater } from "preact/hooks";
import { setTitle } from "./controller";
import { StatusUpdate } from "./types";
import { ReceivedStatusUpdate } from "./webxdc";

export type StateType = {
  title: string;
  // deadline: number,
};

export function getDefaultState(): StateType {
  return {
    title: "doodle", //TODO do we want to have this default?
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
