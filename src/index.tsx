import { render, h } from "preact";
import { App } from "./view";

window.onload = () => {
  const element = document.getElementById("root");
  if (element) {
    render(<App />, element);
  }
};
