# doodle.xdc

## TODO

### MVP

- [x] model.js: receiveUpdate
- [x] index.html: setUpdateListener(receiveUpdate)
- [x] types.d.js: define types we will use
- [x] index.html: title
- [ ] index.html: deadline
- [x] controller.js: setTitle
- [ ] controller.js: setDeadline
- [ ] index.html: Week View
- [x] controller.js: setTimerange
- [ ] view.js: display timerange
- [ ] controller.js: deleteTimerange
- [ ] style.css

### v2

- day view
- use dates
- switch week, indicator arrow
- landscape view
- settings wheel
- block areas OP didn't choose
- hide settings from non-OP
- send notification to chat when consensus is approaching (requires core changes)
- localization of the strings

## Setup Development Environment

* we need npm - if you don't have it yet, get it here: https://github.com/nvm-sh/nvm

```
git clone https://github.com/missytake/doodle.xdc
cd doodle.xdc
```

Run `npm install` to install the javascript dependencies.

### Build:

```
npm run build
```

#### Build minified:

```
npm run build-prod
```

### Format code:

```
npm run format
```

### Check typescript types:

```
npm run check
```

### Test (typescript and code formatting):

```
npm run test
```

### Documentations for Reference

- https://deltachat.github.io/webxdc_docs/
- https://esbuild.github.io/
- https://preactjs.com/guide/v10/components
