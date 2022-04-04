import { render, h } from "preact";
import { App } from "./view";

window.onload = () =>{

    render(<App />, document.getElementById("root"));
}

// window.webxdc.setUpdateListener(receiveUpdate, 0);
// document.getElementById("title").setAttribute("placeholder", getTitle())
