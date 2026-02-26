<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="app-container">
    <div class="nav-container">
      <RouterLink to="/home" class="nav-link">Home</RouterLink>
      <el-divider direction="vertical" />
      <RouterLink to="/trigger" class="nav-link">触发js异常</RouterLink>
      <RouterLink to="/record" class="nav-link">录制</RouterLink>
      <RouterLink to="/replay" class="nav-link">回放</RouterLink>
    </div>
    <div class="content-container">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.nav-container {
  background-color: #f5f7fa;
  padding: 16px 24px;
  border-bottom: 1px solid #e4e7ed;
  display: flex;
  align-items: center;
  gap: 8px;
}

.nav-link {
  text-decoration: none;
  color: #606266;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.nav-link:hover {
  color: #409eff;
  background-color: #ecf5ff;
}

.nav-link.router-link-active {
  color: #409eff;
  background-color: #ecf5ff;
}

.content-container {
  flex: 1;
  padding: 24px;
}

:deep(.el-divider) {
  margin: 0 8px;
}
</style>
