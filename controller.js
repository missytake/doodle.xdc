function setTimerange(start, end) {
    const payload = {
        method: "setTimerange",
        start: start,
        end: end,
        owner: window.webxdc.selfAddr,
        ownername: window.webxdc.selfName,
        uid: window.webxdc.selfAddr + performance.now,
    }
    const descr = payload.owner + " chose timeslot " + start + " until " + end
    window.webxdc.sendUpdate(payload, descr)
}