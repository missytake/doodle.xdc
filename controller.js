function setTimerange(start, end) {
    payload = {
        method: "setTimerange",
        start: start,
        end: end,
        owner: window.webxdc.selfAddr,
        ownername: window.webxdc.selfName,
        uid: owner + performance.now,
    }
    descr = payload.owner + " chose timeslot " + start + " until " + end
    window.webxdc.sendUpdate(payload, descr)
}