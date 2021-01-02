# Overview

Use case is to see if that given the pre-rendered markup of a component, is there a graceful way for a Web Component (`customElement`) to restore its state in away that can avoid repeated renders on first load.

## Use Cases

### Counter
Given a counter component
```html
<my-counter></my-counter>
```

If the count state is present, hydrate the count to the initial value of `33`
```html
<my-counter>
  <span id="count">33</span>
</my-counter>
```

### Dyanamic List
In particular, say a list of users is generated on the server
```json
[{
  "id": 1,
  "name": "User 1",
}, {
  "id": 2,
  "name": "User 2"
}]
```

```html
<ul>
  <li><a href="/user/1">User 1</a></li>
  <li><a href="/user/2">User 2</a></li>
</ul>
```

If that user list is present, we want to avoid a call to `fetch` that would return and render the same list.  However, when say you are paginating to a next list, you would need to make sure your offest starts on page 2.

## Goals
1. Detect of existing output
1. Hydrate state
1. Hydrate markup?
1. Sync state (e.g. avoid being one tick behind)


## Notes
1. Rehydrating would still need to attach event handlers