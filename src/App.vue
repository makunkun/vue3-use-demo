<template>
  <div>
    <h2>computed</h2>
    <p>Space Left: {{ spaceList }} out of {{ capacity }}</p>

    <p>Capacity: {{ capacity }}</p>
    <button @click="increaseCapacity">Increase Capacity</button>

    <h2>attending</h2>
    <ul>
      <li v-for="(name, index) in attending" :key="index">
        {{name}}
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, computed, reactive, toRefs } from 'vue';
export default {
  setup() {
    // // ref
    // const capacity = ref(3);
    // const attending = ref(['Tim', 'Bob', 'Joe'])

    // // methods; ref => getter setter
    // function increaseCapacity() {
    //   return capacity.value++;
    // }

    // // computed
    // const spaceList = computed(() => {
    //   return capacity.value - attending.value.length;
    // });

    // // return
    // return { capacity, increaseCapacity, attending, spaceList };

    // reactive
    const event = reactive({
      capacity: 3,
      attending: ['Tim', 'Bob', 'Joe'],
      spaceList: computed(() => {
        return event.capacity - event.attending.length;
      })
    });
    // methods; reactive => getter setter
    function increaseCapacity() {
      return event.capacity++;
    }
    // toRefs (遍历所有event属性, 如果不是 extends ref, 则ref它)
    return { ...toRefs(event), increaseCapacity }
  }
}
</script>
<style>
</style>