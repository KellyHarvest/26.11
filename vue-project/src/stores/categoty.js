import { defineStore } from "pinia";
import { ref } from 'vue';

export const useCategoryStore = defineStore("category", () => {
    const categories = ref([
"Fruit",
"Vegetables",
"Berries",
    ]);
    return {
        categories,
    }
});