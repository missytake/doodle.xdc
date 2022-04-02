//@ts-check

export type StatusUpdate =
  | {
      method: "setTimerange";
      day: number; // 0-6
      start: number;  // 0-671
      end: number;  // 0-671
      uid: number;  // some unique ID
      owner: string; // window.webxdc.selfAddr
    }
  | {
      method: "setTitle";
      title: string;
    }
  | {
      method: "setDeadline";
      deadline: Date;
    }
  | {
      method: "deleteTimerange";
      uid: number;  // the uid of the timerange you want to delete
    };
