<template>
  <header class="topnavbar">
    <ul>
      <li>
        <nuxt-link to="/" class="button-primary">Home</nuxt-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'TopNavBar'
}
</script>

<style>
.topnavbar {
  display: flex;
  align-items: center;
  margin-bottom: 1vh;
  background-color: White;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  border-bottom: 1px solid rgb(206, 206, 206);
  border-radius: 1px;
  box-shadow: 0px 2px 5px rgb(228, 228, 228);
  width: 100%;
}

.topnavbar ul {
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.topnavbar li {
  background-color: white;
}

.topnavbar li a {
  margin-left: 1.5em;
}

.topnavbar a {
  display: inline-block;
  display: block;
  text-align: center;
  padding: 14px 16px;
  color: rgb(0, 75, 95);
  text-decoration: none;
  background-color: rgb(255, 255, 255);
}

.topnavbar a:hover {
  color: rgb(0, 75, 95);
  text-decoration: none;
  background-color: rgb(248, 248, 248);
}

.topnavbar button {
  margin-top: 9px;
  position: absolute;
  right: 2rem;
}

@media only screen and (max-device-width: 667px) and (orientation: portrait) {
  .topnavbar li a {
    margin-left: 0.5em;
  }
  .topnavbar button {
    margin-top: 9px;
    position: absolute;
    right: 1rem;
  }
}
</style>