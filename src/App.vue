<template>
  <div>
    <p>Capacity: {{ capacity }}</p>
    <button @click="increaseCapacity">Increase Capacity</button>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const capacity = ref(3);

    function increaseCapacity() {
      return capacity.value++;
    }

    return { capacity,increaseCapacity };
  }
}
</script>
<style>
</style>