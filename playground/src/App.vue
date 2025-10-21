<template>
    <span>Test</span>
    <Vue3PullToRefresh
        :distance="50"
        :duration="2000"
        :size="32"
        noreload
        :options="{ color: '#111', bgColor: '#fff' }"
        @onrefresh="onRefresh"
    />
</template>

<script setup lang="ts">
function onRefresh() {
    console.log("refreshed");
    alert("refresh");
}
</script>
