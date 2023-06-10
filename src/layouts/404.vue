<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <main>
    <div text-4xl>
      <div i-carbon-warning inline-block />
    </div>
    <RouterView />
    <div>
      <van-button type="primary" size="small" @click="router.back()">
        返回
      </van-button>
    </div>
  </main>
</template>
