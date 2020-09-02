<p align="center">
    <a href="https://splidejs.com" target="_blank">
        <img width="120px" style="margin-right: 50px;" src="images/splide-logo.png">
    </a>
    <a href="https://svelte.dev/" target="_blank">
        <img width="100px" src="images/svelte-logo.png">
    </a>
</p>

# Svelte Splide
**Svelte Splide is the [Splide](https://github.com/Splidejs/splide) component for [Svelte](https://svelte.dev/)**

## Installation
### Get the latest version from NPM:
```bash
npm install @fiorelorenzo/svelte-splide
```

## Import
### Remember to link the base Splide stylesheet:
```html
<link rel="stylesheet" href="node_modules/@splidejs/splide/dist/css/splide.min.css">
```

### Or if you are using [PostCss](https://github.com/postcss/postcss):
```javascript
import "@splidejs/splide/dist/css/splide.min.css";
```

## Usage
### In your Svelte component:
```html
<script>
  import { Splide, SplideSlide } from "svelte-splide";
</script>

<Splide>
  <SplideSlide>
    <img src="https://via.placeholder.com/540x360" alt="" />
  </SplideSlide>
  <SplideSlide>
    <img src="https://via.placeholder.com/540x360" alt="" />
  </SplideSlide>
  <SplideSlide>
    <img src="https://via.placeholder.com/540x360" alt="" />
  </SplideSlide>
</Splide>
```

## Props
### You can pass all base Splide options using the `options` prop:
```html
<script>
  import { Splide, SplideSlide } from "svelte-splide";

  const options = {
    arrows: true,
    pagination: false,
    autoWidth: true,
    rewind: false,
    gap: 50
  };
</script>

<Splide {options}>
  <SplideSlide>
    <img src="https://via.placeholder.com/540x360" alt="" />
  </SplideSlide>
  <SplideSlide>
    <img src="https://via.placeholder.com/540x360" alt="" />
  </SplideSlide>
  <SplideSlide>
    <img src="https://via.placeholder.com/540x360" alt="" />
  </SplideSlide>
</Splide>
```

### As well as extensions and transition:
```html
<script>
  import { Splide, SplideSlide } from "svelte-splide";

  let extensions = {};
  let transition = null;
</script>

<Splide {extensions} {transition}>
  <SplideSlide>
    <img src="https://via.placeholder.com/540x360" alt="" />
  </SplideSlide>
  <SplideSlide>
    <img src="https://via.placeholder.com/540x360" alt="" />
  </SplideSlide>
  <SplideSlide>
    <img src="https://via.placeholder.com/540x360" alt="" />
  </SplideSlide>
</Splide>
```

### To get the Splide instance, bind to the `splide` prop:
```html
<script>
  import { Splide, SplideSlide } from "svelte-splide";

  let splide;
</script>

<Splide bind:splide>
  <SplideSlide>
    <img src="https://via.placeholder.com/540x360" alt="" />
  </SplideSlide>
  <SplideSlide>
    <img src="https://via.placeholder.com/540x360" alt="" />
  </SplideSlide>
  <SplideSlide>
    <img src="https://via.placeholder.com/540x360" alt="" />
  </SplideSlide>
</Splide>
```

### You can also bind to the current index:
```html
<script>
  import { Splide, SplideSlide } from "svelte-splide";

  let currentIndex;
</script>

<p>Current index: {currentIndex}</p>

<Splide bind:currentIndex>
  <SplideSlide>
    <img src="https://via.placeholder.com/540x360" alt="" />
  </SplideSlide>
  <SplideSlide>
    <img src="https://via.placeholder.com/540x360" alt="" />
  </SplideSlide>
  <SplideSlide>
    <img src="https://via.placeholder.com/540x360" alt="" />
  </SplideSlide>
</Splide>
```

## Additions
In addition to every base Splide feature, svelte-splide supports:

### Hiding arrows automatically:
```html
<script>
  import { Splide, SplideSlide } from "svelte-splide";
</script>

<Splide autoHideArrows autoHideArrowsOffset={0}>
  <SplideSlide>
    <img src="https://via.placeholder.com/540x360" alt="" />
  </SplideSlide>
  <SplideSlide>
    <img src="https://via.placeholder.com/540x360" alt="" />
  </SplideSlide>
  <SplideSlide>
    <img src="https://via.placeholder.com/540x360" alt="" />
  </SplideSlide>
</Splide>
```

### Group syncing:
```html
<script>
  import { Splide, SplideSlide } from "svelte-splide";
</script>

<Splide group="demo">
  <SplideSlide>
    <img src="https://via.placeholder.com/540x360" alt="" />
  </SplideSlide>
  <SplideSlide>
    <img src="https://via.placeholder.com/540x360" alt="" />
  </SplideSlide>
  <SplideSlide>
    <img src="https://via.placeholder.com/540x360" alt="" />
  </SplideSlide>
</Splide>
<br/>
<Splide group="demo">
  <SplideSlide>
    <img src="https://via.placeholder.com/540x360" alt="" />
  </SplideSlide>
  <SplideSlide>
    <img src="https://via.placeholder.com/540x360" alt="" />
  </SplideSlide>
  <SplideSlide>
    <img src="https://via.placeholder.com/540x360" alt="" />
  </SplideSlide>
</Splide>
<br/>
<Splide group="demo">
  <SplideSlide>
    <img src="https://via.placeholder.com/540x360" alt="" />
  </SplideSlide>
  <SplideSlide>
    <img src="https://via.placeholder.com/540x360" alt="" />
  </SplideSlide>
  <SplideSlide>
    <img src="https://via.placeholder.com/540x360" alt="" />
  </SplideSlide>
</Splide>
```
#### Splides in the same group will move together. You can have as many groups as you like.

#### **NOTE:** splides in the same group must have the same number of slides.

## License
Svelte Splide is released under the MIT license.  
© 2020 Lorenzo Fiore
