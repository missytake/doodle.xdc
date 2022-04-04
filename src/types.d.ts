export type StatusUpdate =
  | {
      method: "setTimerange";
      start: number; // 0-671
      end: number; // 0-671
      uid: string; // unique ID: email + timestamp
      owner: string; // window.webxdc.selfAddr
      ownername: string; // window.webxdc.selfName
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
      uid: number; // the uid of the timerange you want to delete
    };
