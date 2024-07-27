<template>
  <div class="home">
    <h1>Welcome to Task Manager</h1>
    <p>Organize your tasks efficiently and boost your productivity.</p>
    
    <div class="feature-list">
      <h2>Features:</h2>
      <ul>
        <li>Create and manage tasks</li>
        <li>Categorize tasks</li>
        <li>Set due dates and priorities</li>
        <li>Track task progress</li>
        <li>Visualize your productivity</li>
      </ul>
    </div>
    
    <div class="cta-buttons">
      <router-link to="/tasks" class="btn btn-primary">View Tasks</router-link>
      <router-link to="/tasks/create" class="btn btn-secondary">Create New Task</router-link>
    </div>
    
    <div v-if="!isLoggedIn" class="auth-buttons">
      <router-link to="/login" class="btn btn-outline">Login</router-link>
      <router-link to="/register" class="btn btn-outline">Register</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'  // Updated import path

export default defineComponent({
  name: 'Home',
  setup() {
    const router = useRouter()
    const authStore = useAuthStore()
    
    const isLoggedIn = ref(authStore.isAuthenticated)
    
    return {
      isLoggedIn
    }
  }
})
</script>

<style scoped>
/* Styles remain the same */
</style>
