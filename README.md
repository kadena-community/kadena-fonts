# Getting started

Easily import Kadena fonts. 


```ts
import { KodeMono } from '@kadena/fonts'

// Basic implementation, return the Kode Mono Regular (weight: 400) font
const font = KodeMono()

// With specific weight
const font = KodeMono({
  weight: 400,
})

// With specific fallback
const font = KodeMono({
  weight: 400,
  fallback: 'Courier New, monospace',
})
```

# Usage

```tsx
// Using classnames
<div>
  <code className={font.className}>
    ...
  </code>
</div>
```
## or

```ts
// Using css font variable

const { variable } = KodeMono({
  weight: 400,
})
```

```css
.my-code {
  font-family: var(--replace-with-the-variable-return-string-value);
}
```
