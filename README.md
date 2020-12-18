# Vue 3 Datepicker

A Vue 3 component for pagination.

## Installation

Package is available on NPM: https://www.npmjs.com/package/vue3-pagination

```sh
npm install vue3-pagination
```

The component is packaged mainly for use with bundlers, if you require a browser build - post an issue.

## Usage

```vue
<template>
  <v-pagination
    v-model="page"
    :pages="10"
    :range-size="1"
    active-color="#DCEDFF"
  />
</template>
```

## Props and attributes
Main interaction with the pagination is done via `v-model` with `Number` as expected type of the value passed.

|ID|Type|Default|Description
|---|---|---|---|
|`pages`|`Number`||Total number of pages|
|`rangeSize`|`Number`|1|Number of page around the current page|
|`activeColor`| `String` |#DCEDFF|Background color of the current page|
