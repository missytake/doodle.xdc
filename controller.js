function setTimerange(start, end) {
    const payload = {
        method: "setTimerange",
        start: start,
        end: end,
        owner: window.webxdc.selfAddr,
        ownername: window.webxdc.selfName,
        uid: window.webxdc.selfAddr + performance.now,
    }
    const descr = window.webxdc.selfName + " chose timeslot " + start + " until " + end
    window.webxdc.sendUpdate(payload, descr)
}

function setTitle(title, publish) {
    localStorage.setItem("title", title)
    document.getElementById("title").setAttribute("placeholder", title)
    if (publish) {
        const payload = {
            method: "setTitle",
            title: title,
        }
        const descr = window.webxdc.selfName + " set the title to " + title
        sendUpdate(payload, descr)
    }
}