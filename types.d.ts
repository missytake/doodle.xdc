//@ts-check

export type StatusUpdate =
  | {
      method: "setTimerange";
    }
  | {
      method: "setTitle";
    }
  | {
      method: "setDeadline";
    }
  | {
      method: "deleteTimerange";
    };
