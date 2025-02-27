<script>
export default {
    data() {
        return {
            username: "",
            password: "",
        }
    }
}
</script>

<template>
    <div class="login-container">
        <form class="login-form">
            <input type="text" placeholder="Email Address" v-model="username" class="input-field" required>
            <input type="password" placeholder="Password" v-model="password" class="input-field" required>
            <button type="submit" class="login-btn">Log in</button>
        </form>
    </div>
</template>

<style scoped>
.input-field, .login-btn {
    border: transparent;
    padding: 4px;
    border-radius: 8px;
    font-family: poppins;
    margin-right: 1em;
}

.login-btn {
    cursor: pointer;
    background-color: #e3cafb;
}

.input-field {
    cursor: text;
}
</style>
