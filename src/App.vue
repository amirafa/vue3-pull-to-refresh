<template>
    <span>Test</span>
    <Vue3PullToRefresh
        :distance="50"
        :duration="2000"
        :size="32"
        noreload
        :options="{ color: '#111', bgColor: '#fff' }"
        @onrefresh="
            () => {
                console.log('refreshed');
            }
        "
    />
</template>

<script setup lang="ts">
import Vue3PullToRefresh from "../lib/Vue3PullToRefresh.vue";
</script>
