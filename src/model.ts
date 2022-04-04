import { setTitle } from "./controller";
import { StatusUpdate } from "./types";
import { ReceivedStatusUpdate } from "./webxdc";

function receiveUpdate(update: ReceivedStatusUpdate<StatusUpdate>) {
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
