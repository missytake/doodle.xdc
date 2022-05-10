# doodle.xdc

## TODO

### MVP

- [x] receiveUpdate
- [x] setUpdateListener(receiveUpdate)
- [x] types.d.js: define types we will use
- [x] title
- [ ] deadline
- [x] setTitle
- [ ] setDeadline
- [ ] Week View
- [x] setTimerange
- [ ] display timerange
- [ ] deleteTimerange
- [ ] "Save" button: sendUpdate()
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

Clone the repository, switch to it, and run the following to install the
javascript dependencies:

```
nvm use 16
npm install
```

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
