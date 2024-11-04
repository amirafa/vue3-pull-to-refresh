<template>
    <div class="outer-container" ref="outerContainerRef">
        <div
            class="container"
            @touchstart="onTouchStart"
            @touchmove="onTouchMove"
            @touchend="onTouchEnd"
        >
            <div :style="containerStyle" class="inner-container">
                <div class="icon-container" :style="iconContainerStyle">
                    <div :style="loading ? spinIconStyle : iconStyle">
                        <slot>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                :width="size"
                                :height="size"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    :fill="options.color"
                                    d="M17.65 6.35a7.95 7.95 0 0 0-6.48-2.31c-3.67.37-6.69 3.35-7.1 7.02C3.52 15.91 7.27 20 12 20a7.98 7.98 0 0 0 7.21-4.56c.32-.67-.16-1.44-.9-1.44c-.37 0-.72.2-.88.53a5.994 5.994 0 0 1-6.8 3.31c-2.22-.49-4.01-2.3-4.48-4.52A6.002 6.002 0 0 1 12 6c1.66 0 3.14.69 4.22 1.78l-1.51 1.51c-.63.63-.19 1.71.7 1.71H19c.55 0 1-.45 1-1V6.41c0-.89-1.08-1.34-1.71-.71z"
                                />
                            </svg>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, PropType, ref } from "vue";

type OPTIONS = {
    color: string;
    bgColor: string;
};

const emit = defineEmits(["onrefresh"]);

const props = defineProps({
    distance: {
        type: Number,
        default: 50,
    },
    duration: {
        type: Number,
        default: 1000,
    },
    size: {
        type: Number,
        default: 32,
    },
    coefficient: {
        type: Number,
        default: 2.5,
    },
    noreload: {
        type: Boolean,
        default: false,
    },
    options: {
        type: Object as PropType<OPTIONS>,
        default: () => ({
            color: "#000",
            bgColor: "#fff",
        }),
    },
});

const start = ref<number>(0);
const go = ref<number>(0);
const windowSize = window.innerHeight;
const ratio = windowSize / props.distance / props.coefficient;
const loading = ref<boolean>(false);
const deg = ref<number>(0);

function onTouchStart(e: TouchEvent) {
    start.value = e.touches[0].clientY;
    go.value = e.touches[0].clientY;
}

function onTouchMove(e: TouchEvent) {
    go.value = e.touches[0].clientY;
}

function onTouchEnd() {
    if (height.value / ratio >= props.distance) {
        loading.value = true;
        setTimeout(() => {
            loading.value = false;
            start.value = 0;
            go.value = 0;
            emit("onrefresh");
            if (!props.noreload) location.reload();
        }, props.duration);
    } else {
        loading.value = false;
        start.value = 0;
        go.value = 0;
    }
}

const height = computed(() => {
    return go.value - start.value;
});

const containerHeight = computed(() => {
    return height.value / ratio > props.distance
        ? props.distance
        : height.value / ratio;
});

const containerStyle = computed(() => {
    return {
        height: `${containerHeight.value}px`,
        width: "100%",
    };
});

const iconContainerStyle = computed(() => ({
    top: `${containerHeight.value * 1.5}px`,
    width: `${props.size}px`,
    height: `${props.size}px`,
    backgroundColor: props.options.bgColor,
    transform: `translateY(-100%)`,
    zIndex: `999`
}));

const iconStyle = computed(() => {
    const rel = 360 / props.distance;
    deg.value = normalizeDegrees(containerHeight.value * rel);
    return {
        transform: `rotate(${deg.value}deg)`,
        width: `100%`,
        height: `100%`,
        display: `flex`,
        justifyContent: "center",
        alignItems: "center",
    };
});

const spinIconStyle = computed(() => {
    return {
        transform: `rotate(${deg.value * -1}deg)`,
        animation: "spin 1s linear infinite",
        width: `100%`,
        height: `100%`,
        display: `flex`,
        justifyContent: "center",
        alignItems: "center",
    };
});

function normalizeDegrees(degrees: number) {
    return ((degrees % 360) + 360) % 360;
}
</script>

<style>
.outer-container {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 999;
}

.container {
    width: 100%;
    height: 100vh;
}

.inner-container {
    position: relative;
    display: flex;
    justify-content: center;
    transition: all 70ms linear;
}

.icon-container {
    position: absolute;
    padding: 4px;
    border-radius: 9999px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

@keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
</style>
