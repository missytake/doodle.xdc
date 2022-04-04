//@ts-check

import { setTitle } from "./controller";

/** @typedef {import("./types").StatusUpdate} StatusUpdate */

/**
 *
 * @param {import("../webxdc").ReceivedStatusUpdate<StatusUpdate>} update
 */
function receiveUpdate(update) {
  switch (update.payload.method) {
    case "setTimerange":
      break;
    case "setTitle":
      setTitle(update.payload.title, false);
      break;
    case "setDeadline":
      break;
    case "deleteTimerange":
      break;
  }
}

function getTitle() {
  const title = localStorage.getItem("title");
  if (title) {
    document.getElementById("title").setAttribute("placeholder", title);
    return title;
  } else {
    return "doodle";
  }
}
