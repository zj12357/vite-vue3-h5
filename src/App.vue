<script setup lang="ts">
useHead({
  title: ADMIN_NAME,
  meta: [
    { name: 'description', content: '是一个提供全面、专业理财服务的在线平台。我们的目标是帮助用户做出明智的投资决策，实现财务目标。提供股票、基金、债券、保险、退休金等各类投资产品的最新资讯、市场分析、投资策略。' },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico',
    },
  ],
})
</script>

<template>
  <RouterView />
</template>
