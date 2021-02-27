import { ref, computed} from 'vue';

export function useEventSpace() {
  const capacity = ref(3);
  const attending = ref(['Tim', 'Bob', 'Joe'])
  const spaceList = computed(() => {
    return capacity.value - attending.value.length;
  });
  function increaseCapacity() {
    return capacity.value++;
  }
  return { capacity, increaseCapacity, attending, spaceList };
};