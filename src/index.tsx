import { render, h } from "preact";
import { App } from "./view";

window.onload = () => {
  render(<App />, document.getElementById("root"));
};
