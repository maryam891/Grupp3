<script></script>

<template>
  <header>
    <nav class="navbar-container">
      <router-link to="/">
        <img src="/assets/image/Space Learning Logo.png" alt="Logo" />
      </router-link>
      <ul class="nav">
        <li>
          <router-link to="/quiz" class="nav-link">Quiz</router-link>
        </li>
        <li>
          <router-link to="/facts" class="nav-link">Facts</router-link>
        </li>
        <li>
          <router-link to="/favorites" class="nav-link">Favorites</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style>
.navbar-container {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}
.nav {
  display: flex;
  list-style: none;
}
.nav-link {
  padding: 0 40px;
  text-decoration: none;
  color: #ffffff;
}
</style>
