# use-unique-id

> A react hook for composing unique id&#x27;s with a prefix

[![NPM](https://img.shields.io/npm/v/use-unique-id.svg)](https://www.npmjs.com/package/use-unique-id) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-unique-id
```

## Usage

```tsx
import * as React from 'react'

import { useMyHook } from 'use-unique-id'

const Example = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
```

## License

MIT © [HomeX Toolkit Team](https://github.com/HomeX Toolkit Team)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
