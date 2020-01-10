<template>
  <header class="header">
    <div class="title">Enquirie</div>
    <div class="subtitle">Best place to get your questions answered.</div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style>
.header {
  display: flex;
  align-items: center;
  background-color: rgb(0, 68, 87);
  width: 100%;
}

.header .title {
  display: block;
  font-weight: 450;
  font-size: 3em;
  color: White;
  background-color: rgb(0, 68, 87);
  letter-spacing: 1px;
  margin-left: 1rem;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
}

.header .subtitle {
  display: block;
  font-weight: 200;
  font-size: 1.7vw;
  color: White;
  background-color: rgb(0, 68, 87);
  position: absolute;
  right: 1.5rem;
  letter-spacing: 1px;
  margin-right: 0.5vw;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
}

@media only screen and (max-device-width: 667px) and (orientation: portrait) {
  .header .subtitle {
    display: none;
  }
  .header .title {
    display: block;
    font-weight: 450;
    font-size: 3em;
    color: White;
    background-color: rgb(0, 68, 87);
    letter-spacing: 1px;
    margin: 0 auto;
    margin-bottom: 10px;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
}
</style>