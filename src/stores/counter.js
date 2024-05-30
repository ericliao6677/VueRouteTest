import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', () => {
  const _count = ref(0);
  const doubleCount = computed(() => _count.value * 2);
  const count = computed({
    get() {
      return _count.value;
    },
    set(newValue) {
      _count.value = newValue;
    }
  });
  function increment() {
    count.value++;
  }
  const setCount = (c) => {
    _count.value = c;
    return _count.value;
  };
  return { doubleCount, increment, setCount, count };
});
