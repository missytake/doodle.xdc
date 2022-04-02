//@ts-check

/** @typedef {import("./types").StatusUpdate} StatusUpdate */

/**
 * 
 * @param {import("./webxdc").ReceivedStatusUpdate<StatusUpdate>} update 
 */
function receiveUpdate(update) {
    switch (update.payload.method) {
        case "setTimerange":
            break;
        case "setTitle":
            break;
        case "setDeadline":
            break;
        case "deleteTimerange":
            break;
    }
}