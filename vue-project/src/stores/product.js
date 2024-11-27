import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', () => {
const products = ref([
{
 id: 1,
 name: "Dragon Fruit",
 img: "https://fruit-berries.ru/images/cms/thumbs/139268ff0cf7ad0d47954b4d590e8c88be1335dd/pitahaya-belaya_483_auto_jpg_5_92.jpg",
 price:35,
 description:"Plants of these genera are climbing epiphytic liana-like cacti, common in Mexico, Central and South America; Most of them are characterized by large, fragrant white flowers that open at night. These plants are now commercially cultivated in many countries in Southeast Asia, as well as in Hawaii, Israel and northern Australia.",
publish_at:"30.12.2024",
category:"Fruit",
},
{
    id: 2,
    name: "Coconut",
    img: "https://swlife.ru/image/cache/catalog/product/f0/62/f062081a60d7824373b26c953cea1028-0x0.webp",
    price:20,
    description:"Plants of these genera are climbing epiphytic liana-like cacti, common in Mexico, Central and South America; Most of them are characterized by large, fragrant white flowers that open at night. These plants are now commercially cultivated in many countries in Southeast Asia, as well as in Hawaii, Israel and northern Australia.",
   publish_at:"30.12.2024",
   category:"Fruit",
   },
   {
    id: 3,
    name: "Passion fruit",
    img: "https://static.insales-cdn.com/images/products/1/7963/507805467/%D0%BC%D0%B0%D1%80%D0%B0%D0%BA.jpg",
    price:25,
    description:"Plants of these genera are climbing epiphytic liana-like cacti, common in Mexico, Central and South America; Most of them are characterized by large, fragrant white flowers that open at night. These plants are now commercially cultivated in many countries in Southeast Asia, as well as in Hawaii, Israel and northern Australia.",
   publish_at:"30.12.2024",
   category:"Fruit",
   },
   {
    id: 4,
    name: "Сucumber",
    img: "https://media.vprok.ru/products/x700/u4/z6/aklv3a5d35shrcyhsayw5fcnufbhz6u4.jpeg",
    price:10,
    description:"Plants of these genera are climbing epiphytic liana-like cacti, common in Mexico, Central and South America; Most of them are characterized by large, fragrant white flowers that open at night. These plants are now commercially cultivated in many countries in Southeast Asia, as well as in Hawaii, Israel and northern Australia.",
   publish_at:"30.12.2024",
   category:"Vegetables",
   },
   {
    id: 5,
    name: "Potato",
    img: "https://media.istockphoto.com/id/157430678/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%82%D1%80%D0%B8-%D0%BA%D0%B0%D1%80%D1%82%D0%BE%D1%84%D0%B5%D0%BB%D1%8C.jpg?s=612x612&w=0&k=20&c=kt6PwHFRHGwUDg1XwbNXgOykEgFfn2CH7Dk5WCpGOyc=",
    price:7,
    description:"Plants of these genera are climbing epiphytic liana-like cacti, common in Mexico, Central and South America; Most of them are characterized by large, fragrant white flowers that open at night. These plants are now commercially cultivated in many countries in Southeast Asia, as well as in Hawaii, Israel and northern Australia.",
   publish_at:"30.12.2024",
   category:"Vegetables",
   },
   {
    id: 6,
    name: "Watermelon",
    img: "https://resources.cdn-kaspi.kz/img/m/p/hae/hae/64848634839070.jpg?format=gallery-medium",
    price:10,
    description:"Plants of these genera are climbing epiphytic liana-like cacti, common in Mexico, Central and South America; Most of them are characterized by large, fragrant white flowers that open at night. These plants are now commercially cultivated in many countries in Southeast Asia, as well as in Hawaii, Israel and northern Australia.",
   publish_at:"30.12.2024",
   category:"Berries",
   },
   {
    id: 7,
    name: "Strawberry",
    img: "https://berry-valley.ru/wp-content/uploads/2021/03/strawbery-scaled.jpg",
    price:20,
    description:"Plants of these genera are climbing epiphytic liana-like cacti, common in Mexico, Central and South America; Most of them are characterized by large, fragrant white flowers that open at night. These plants are now commercially cultivated in many countries in Southeast Asia, as well as in Hawaii, Israel and northern Australia.",
   publish_at:"30.12.2024",
   category:"Berries",
   },
   {
    id: 8,
    name: "Blueberry",
    img: "https://www.ayzdorov.ru/images/Travi/golybika.jpg",
    price:15,
    description:"Plants of these genera are climbing epiphytic liana-like cacti, common in Mexico, Central and South America; Most of them are characterized by large, fragrant white flowers that open at night. These plants are now commercially cultivated in many countries in Southeast Asia, as well as in Hawaii, Israel and northern Australia.",
   publish_at:"26.10.2024",
   category:"Berries",
   },

]);
const filterProductsByCategoryName = computed(() => {
return (category, search) => {
    if (category) {
        return products.value.filter((product) => product.category ==  category);
    }
 if (search) {
    return products.value.filter((product) => product.name.includes(search)); 
}
return products
}

})







return {
    products,filterProductsByCategoryName,
}
});