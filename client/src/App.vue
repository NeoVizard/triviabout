<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap");

/* GLOBAL STYLES */
html {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  -webkit-box-sizing: inherit;
  -moz-box-sizing: inherit;
  box-sizing: inherit;
}

body {
  background-color: #3f48cc;
}

.container {
  display: grid;
  place-items: center;
  background-color: white;
  margin: 0 0.5em;
  width: 100%;
  max-width: 800px;
  min-height: 300px;
  border-radius: 1em;
}

.fill-box {
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
}

button {
  background-color: #3f48cc;
  color: white;
  font-size: 1.5rem;
  padding: 1rem 2rem;
  border: 0;
  border-radius: 1em;
  margin: 1em;
}

button:hover {
  background-color: #3f48cce5;
}

ul {
  background-color: #3f48cc;
  color: white;
  font-size: 1.25rem;
  list-style: none;
  padding: 0;
  text-align: left;
  border-radius: 1em;
}

li {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0.25em 0.75em 0.25em 2em;
}

li:nth-child(even) {
  background-color: #2a2e6e;
}

/* END GLOBAL STYLES */

#app {
  font-family: "Noto Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: grid;
  place-items: center;
}
</style>
