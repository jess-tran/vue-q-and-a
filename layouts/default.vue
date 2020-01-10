<template>
  <div>
    <AppHeader />
    <TopNavBar />
    <nuxt />
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader'
import TopNavBar from '../components/TopNavBar'

export default {
  components: {
    AppHeader,
    TopNavBar
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background-color: rgb(250, 250, 250);
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

html {
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.container {
  margin: 0 auto;
  max-width: 60vw;
}

.align-center {
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  text-align: center;
}

hr {
  border: 0;
  height: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}

.small {
  font-size: smaller;
}

.muted {
  color: rgb(133, 133, 133);
}

.card {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  background-color: white;
  padding: 1rem;
  margin: 1rem 0;
  border: 0.5px solid rgb(228, 228, 228);
  border-radius: 5px;
  min-width: 60vw;
  max-width: 60vw;
}

.card div {
  background-color: white;
  margin-bottom: 1vh;
}

.card form {
  background-color: white;
}

.card span {
  background-color: white;
  overflow-wrap: break-word;
}

textarea {
  resize: none;
  overflow: auto;
  width: 100%;
  outline: none;
}

.card button {
  margin-top: 1vh;
}

.divider {
  width: 10px;
  height: auto;
  display: inline-block;
}

.button--primary {
  border: none;
  border-radius: 3px;
  font-size: 0.875em;
  background-color: rgb(0, 68, 87);
  color: #fff;
  padding: 0.5rem 1rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
}

.button--primary:hover {
  background-color: rgb(0, 49, 63);
  color: #fff;
}

.button--secondary {
  border-radius: 3px;
  border: 1px solid rgb(0, 68, 87);
  color: rgb rgb(0, 68, 87);
  background-color: Transparent;
  padding: 0.5rem 1rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
}

.button--secondary:hover {
  color: #fff;
  background-color: rgb(0, 68, 87);
}

ul {
  list-style: none;
}

select {
  border-radius: 5px;
  outline: none;
  background-color: white;
}

option {
  background-color: white;
}

input[type='checkbox']:after {
  line-height: 1.5em;
  content: '';
  display: inline-block;
  width: 18px;
  height: 18px;
  margin-top: -4px;
  margin-left: -4px;
  border: 1px solid rgb(192, 192, 192);
  border-radius: 0.25em;
  background: rgb(224, 224, 224);
}

input[type='checkbox']:checked:after {
  width: 15px;
  height: 15px;
  background-color: rgb(0, 77, 98);
  border: 3px solid rgb(0, 68, 87);
}

@media only screen and (max-device-width: 667px) and (orientation: portrait) {
  .container {
    margin: 0 auto;
    max-width: 90vw;
  }
  .card {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system,
      BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
      sans-serif;
    background-color: white;
    padding: 1rem;
    margin: 1rem 0;
    border: 0.5px solid rgb(228, 228, 228);
    border-radius: 5px;
    min-width: 90vw;
    max-width: 90vw;
  }
}
</style>