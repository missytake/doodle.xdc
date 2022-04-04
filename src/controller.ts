export function setTimerange(start:number, end:number) {
  const descr =
    window.webxdc.selfName + " chose timeslot " + start + " until " + end;
  window.webxdc.sendUpdate(
    {
      payload: {
        method: "setTimerange",
        start: start,
        end: end,
        owner: window.webxdc.selfAddr,
        ownername: window.webxdc.selfName,
        uid: window.webxdc.selfAddr + performance.now,
      },
    },
    descr
  );
}

export function setTitle(title: string) {
  const descr = window.webxdc.selfName + " set the title to " + title;
  window.webxdc.sendUpdate(
    {
      payload: {
        method: "setTitle",
        title: title,
      },
    },
    descr
  );
}
