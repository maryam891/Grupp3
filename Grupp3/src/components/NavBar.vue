<script setup></script>

<template>
  <header>
    <nav class="navbar-container">
      <router-link to="/">
        <img src="/assets/image/Space Learning Logo.png" alt="Logo" />
      </router-link>
      <ul class="nav">
        <li class="nav-link">
          <router-link to="/">Home</router-link>
        </li>
        <li class="nav-link">
          <router-link to="/quiz">Quiz</router-link>
        </li>
        <li class="nav-link">
          <router-link to="/facts">Facts</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style>
.navbar-container {
  display: flex;
  justify-content: space-around;
}
.nav {
  display: flex;
}
.nav-link {
  padding: 0 20px;
}
</style>
