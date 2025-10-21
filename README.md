# Vue 3 Pull-to-Refresh

A Vue 3 package that enables a pull-to-refresh experience for touch screens.

## Installation

To install the package, use the following command:

```bash
npm i @amirafa/vue3-pull-to-refresh
```

## Usage

### Props

| Prop          | Type      | Default | Description                                                |
| ------------- | --------- | ------- | ---------------------------------------------------------- |
| `distance`    | `Number`  | `50`    | Specifies the height of pulling.                           |
| `duration`    | `Number`  | `2000`  | Delay (in milliseconds) since the refresh action.          |
| `size`        | `Number`  | `32`    | Size of the icon (in pixels).                              |
| `coefficient` | `Number`  | `2.5`   | Power of reaching the distance.                            |
| `noreload`    | `Boolean` | `false` | Reload window on refresh.                                  |
| `options`     | `Object`  | `{}`    | Customization options for icon color and background color. |

### Options Object Properties

| Property  | Type     | Default | Description                                  |
| --------- | -------- | ------- | -------------------------------------------- |
| `color`   | `String` | `#000`  | The color of the icon.                       |
| `bgColor` | `String` | `#fff`  | The background color of the icon or element. |

### Emit

| Emit        | Description             |
| ----------- | ----------------------- |
| `onrefresh` | `Emit after refreshing` |

### Slot

| Slot      | Description                   |
| --------- | ----------------------------- |
| `default` | `Customized Element for icon` |

## Example Usage

Here's an example of how to use the `vue3-pull-to-refresh` component in your Vue 3 project:

```vue
<template>
    <Vue3PullToRefresh
        :distance="50"
        :duration="2000"
        :size="32"
        noreload
        :options="{ color: '#111', bgColor: '#fff' }"
        @onrefresh="
            () => {
                console.log('refreshed');
            }
        "
    />
</template>

<script setup lang="ts">
//@ts-ignore
import Vue3PullToRefresh from "@amirafa/vue3-pull-to-refresh";
</script>
```

### Note on `@ts-ignore`

To prevent TypeScript type-checking errors when importing third-party libraries that may lack complete type definitions, you can use `// @ts-ignore` above the import statement. This directive tells the TypeScript compiler to ignore the next line, avoiding potential type-related warnings or errors.

## Preventing Interference with Chrome Mobile Refresh

To prevent conflicts with the native refresh mechanism on Chrome Mobile, add the following CSS to the `body`:

```css
html,
body {
    overscroll-behavior-y: contain; /* disables vertical PTR bounce */
}
```

## Changelog

### [Version 1.2.7] - 2024-11-06

#### Updated

-   Remove requirement to import style.css

### [Version 1.2.2] - 2024-11-06

#### Added

-   Github packages config

### [Version 1.2.1] - 2024-11-06

#### Updated

-   add ChangeLog to README

### [Version 1.2.1] - 2024-11-06

#### Fixed

-   bug on interference with touch clicks

---
