<template>
<div>{{ position }}</div>
</template>

<script>
import {
    useMousePosition
} from "../use/useMousePosition";
export default {
    setup() {
        const position = useMousePosition();
        // console.log(position);

        return {
            position,
        };
    },
};
</script>

<style scoped>
</style>
