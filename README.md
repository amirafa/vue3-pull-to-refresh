# Vue 3 Pull-to-Refresh

A Vue 3 package that enables a pull-to-refresh experience for touch screens.

## Installation

To install the package, use the following command:
```bash
npm i @amirafa/vue3-pull-to-refresh
```

## Usage

### Props

| Prop       | Type            | Default | Description                                        |
|------------|-----------------|---------|----------------------------------------------------|
| `distance` | `Number`        | `50`     | Specifies the height of pulling.                   |
| `duration` | `Number`        | `2000`   | Delay (in milliseconds) since the refresh action.  |
| `size`     | `Number`        | `32`    | Size of the icon (in pixels).                      |
| `options`  | `Object`        | `{}`    | Customization options for icon color and background color. |

### Options Object Properties

| Property   | Type     | Default   | Description                                  |
|------------|----------|-----------|----------------------------------------------|
| `color`    | `String` | `#000` | The color of the icon.                       |
| `bgColor`  | `String` | `#fff` | The background color of the icon or element. |


## Example Usage

Here's an example of how to use the `vue3-pull-to-refresh` component in your Vue 3 project:

```vue
<template>
  <MyComponent 
    :distance="100" 
    :duration="500" 
    :size="36" 
    :options="{ color: '#ff6347', bgColor: '#f0f0f0' }" 
  />
</template>

<script setup lang="ts">
//@ts-ignore
import Vue3PullToRefresh from 'vue3-pull-to-refresh';
import 'vue3-pull-to-refresh/dist/style.css';
</script>
```
### Note on `@ts-ignore`
To prevent TypeScript type-checking errors when importing third-party libraries that may lack complete type definitions, you can use `// @ts-ignore` above the import statement. This directive tells the TypeScript compiler to ignore the next line, avoiding potential type-related warnings or errors.

## Preventing Interference with Chrome Mobile Refresh

To prevent conflicts with the native refresh mechanism on Chrome Mobile, add the following CSS to the `body`:

```css
body {
  overfscroll-behaviour: none;
}
