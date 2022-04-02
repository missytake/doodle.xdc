//@ts-check

// minimal h
function h(type, content, options = {}) {
  /** @type {HTMLElement} */
  const node = document.createElement(type);
  let hcontent = (c) => {
    if (c instanceof Node) {
      node.appendChild(c);
    } else if (typeof c == "string") {
      node.append(document.createTextNode(c));
    }
  };
  if (Array.isArray(content)) {
    content.map(hcontent);
  } else {
    hcontent(content);
  }

  const { className, ...args } = options;

  if (className) className.split(" ").forEach((c) => node.classList.add(c));

  if (args && Object.keys(args).length !== 0) {
    for (const key in args) {
      if (Object.hasOwnProperty.call(args, key)) {
        const element = args[key];
        node.setAttribute(key, element);
      }
    }
  }

  return node;
}

function tableView() {
  const time_cells = [];

  for (let i = 0; i < 24 * 2; i++) {
    time_cells.push(`${Math.floor(i / 2)}:${i % 2 ? "30" : "00"}`);
  }

  const rows = time_cells.map((label, index) => {
    return h("tr", [
      h("td", label),
      h("td", [], { "data-day": 0, "data-time-index": index }),
      h("td", [], { "data-day": 1, "data-time-index": index }),
      h("td", [], { "data-day": 2, "data-time-index": index }),
      h("td", [], { "data-day": 3, "data-time-index": index }),
      h("td", [], { "data-day": 4, "data-time-index": index }),
      h("td", [], { "data-day": 5, "data-time-index": index }),
      h("td", [], { "data-day": 6, "data-time-index": index }),
    ]);
  });

  return h("table", [
    h("thead", [
      h("tr", [
        h("td", "Time"),
        h("td", "Mo"),
        h("td", "Tu"),
        h("td", "We"),
        h("td", "Th"),
        h("td", "Fr"),
        h("td", "Sa"),
        h("td", "Su"),
      ]),
    ]),
    h("tbody", rows),
  ]);
}
