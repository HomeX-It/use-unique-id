# use-unique-id

> This is a react hook useful for composing unique ids with a human readable prefix.

[![NPM](https://img.shields.io/npm/v/use-unique-id.svg)](https://www.npmjs.com/package/use-unique-id) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

### Install

```bash
npm install --save use-unique-id
```

### Usage

```tsx
import React from "react";

import { useUniqueId } from "use-unique-id";
import "./style.css";

const App = () => {

import { useUniqueId } from "use-unique-id";
import 'style.css'

const App = () => {
  return (
    <main className={useUniqueId("Main")}>
      <nav className={useUniqueId("Nav")}>
        <a className={useUniqueId("NavLink")} href="/">
          Home
        </a>
      </nav>
    </main>
  );
};
export default App;
  );
};
export default App;
```

### Output

![input field with useUniqueId label](./assets/screenshot.png)

### License

MIT © [HomeX Labs](https://github.com/homexlabs)
