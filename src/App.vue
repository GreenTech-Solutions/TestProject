<script setup lang="ts">
import { SearchControl } from '@uikit';
import { type IStoreItem, Category } from '@models';
import { ItemFeature } from '@features';
import { computed, ref } from 'vue';

const exampleItems: IStoreItem[] = [
  {
    id: 1,
    name: 'Smartphone',
    price: 999.99,
    quantity: 10,
    category: Category.Electronics,
    stock: 100,
    image: 'image1.jpg',
  },
  {
    id: 2,
    name: 'T-Shirt',
    price: 29.99,
    quantity: 20,
    category: Category.Clothing,
    stock: 150,
    image: 'image2.jpg',
  },
  {
    id: 3,
    name: 'Laptop',
    price: 1199.99,
    quantity: 5,
    category: Category.Electronics,
    stock: 50,
    image: 'image3.jpg',
  },
  {
    id: 4,
    name: 'Bookshelf',
    price: 199.99,
    quantity: 8,
    category: Category.Furniture,
    stock: 30,
    image: 'image4.jpg',
  },
  {
    id: 5,
    name: 'Novel',
    price: 14.99,
    quantity: 40,
    category: Category.Books,
    stock: 200,
    image: 'image5.jpg',
  },
  {
    id: 6,
    name: 'Camera',
    price: 599.99,
    quantity: 3,
    category: Category.Electronics,
    stock: 25,
    image: 'image6.jpg',
  },
  {
    id: 7,
    name: 'Jeans',
    price: 49.99,
    quantity: 15,
    category: Category.Clothing,
    stock: 100,
    image: 'image7.jpg',
  },
  {
    id: 8,
    name: 'Table Lamp',
    price: 39.99,
    quantity: 12,
    category: Category.Furniture,
    stock: 80,
    image: 'image8.jpg',
  },
  {
    id: 9,
    name: 'Cookbook',
    price: 24.99,
    quantity: 30,
    category: Category.Books,
    stock: 120,
    image: 'image9.jpg',
  },
  {
    id: 10,
    name: 'Headphones',
    price: 199.99,
    quantity: 10,
    category: Category.Electronics,
    stock: 70,
    image: 'image10.jpg',
  },
  {
    id: 11,
    name: 'Jacket',
    price: 79.99,
    quantity: 20,
    category: Category.Clothing,
    stock: 90,
    image: 'image11.jpg',
  },
  {
    id: 12,
    name: 'Desk Chair',
    price: 149.99,
    quantity: 7,
    category: Category.Furniture,
    stock: 40,
    image: 'image12.jpg',
  },
  {
    id: 13,
    name: 'Mystery Novel',
    price: 19.99,
    quantity: 35,
    category: Category.Books,
    stock: 110,
    image: 'image13.jpg',
  },
  {
    id: 14,
    name: 'Tablet',
    price: 499.99,
    quantity: 8,
    category: Category.Electronics,
    stock: 60,
    image: 'image14.jpg',
  },
  {
    id: 15,
    name: 'Sweater',
    price: 39.99,
    quantity: 25,
    category: Category.Clothing,
    stock: 140,
    image: 'image15.jpg',
  },
  {
    id: 16,
    name: 'Coffee Table',
    price: 89.99,
    quantity: 10,
    category: Category.Furniture,
    stock: 50,
    image: 'image16.jpg',
  },
  {
    id: 17,
    name: 'Science Fiction Book',
    price: 22.99,
    quantity: 20,
    category: Category.Books,
    stock: 130,
    image: 'image17.jpg',
  },
  {
    id: 18,
    name: 'Smartwatch',
    price: 299.99,
    quantity: 12,
    category: Category.Electronics,
    stock: 45,
    image: 'image18.jpg',
  },
  {
    id: 19,
    name: 'Dress',
    price: 59.99,
    quantity: 15,
    category: Category.Clothing,
    stock: 110,
    image: 'image19.jpg',
  },
  {
    id: 20,
    name: 'Bookshelf',
    price: 249.99,
    quantity: 6,
    category: Category.Furniture,
    stock: 25,
    image: 'image20.jpg',
  },
  {
    id: 21,
    name: 'Thriller Book',
    price: 18.99,
    quantity: 30,
    category: Category.Books,
    stock: 115,
    image: 'image21.jpg',
  },
  {
    id: 22,
    name: 'Gaming Console',
    price: 399.99,
    quantity: 10,
    category: Category.Electronics,
    stock: 55,
    image: 'image22.jpg',
  },
  {
    id: 23,
    name: 'Shoes',
    price: 89.99,
    quantity: 22,
    category: Category.Clothing,
    stock: 90,
    image: 'image23.jpg',
  },
  {
    id: 24,
    name: 'Dining Table',
    price: 299.99,
    quantity: 5,
    category: Category.Furniture,
    stock: 35,
    image: 'image24.jpg',
  },
  {
    id: 25,
    name: 'Biography',
    price: 25.99,
    quantity: 25,
    category: Category.Books,
    stock: 100,
    image: 'image25.jpg',
  },
  {
    id: 26,
    name: 'Television',
    price: 799.99,
    quantity: 7,
    category: Category.Electronics,
    stock: 40,
    image: 'image26.jpg',
  },
  {
    id: 27,
    name: 'Hat',
    price: 24.99,
    quantity: 20,
    category: Category.Clothing,
    stock: 80,
    image: 'image27.jpg',
  },
  {
    id: 28,
    name: 'Office Desk',
    price: 199.99,
    quantity: 8,
    category: Category.Furniture,
    stock: 45,
    image: 'image28.jpg',
  },
  {
    id: 29,
    name: 'History Book',
    price: 20.99,
    quantity: 28,
    category: Category.Books,
    stock: 90,
    image: 'image29.jpg',
  },
  {
    id: 30,
    name: 'Bluetooth Speaker',
    price: 129.99,
    quantity: 12,
    category: Category.Electronics,
    stock: 50,
    image: 'image30.jpg',
  },
  {
    id: 31,
    name: 'Pants',
    price: 49.99,
    quantity: 18,
    category: Category.Clothing,
    stock: 100,
    image: 'image31.jpg',
  },
  {
    id: 32,
    name: 'Sofa',
    price: 499.99,
    quantity: 4,
    category: Category.Furniture,
    stock: 20,
    image: 'image32.jpg',
  },
  {
    id: 33,
    name: 'Fantasy Book',
    price: 21.99,
    quantity: 35,
    category: Category.Books,
    stock: 85,
    image: 'image33.jpg',
  },
  {
    id: 34,
    name: 'Monitor',
    price: 249.99,
    quantity: 10,
    category: Category.Electronics,
    stock: 70,
    image: 'image34.jpg',
  },
  {
    id: 35,
    name: 'Scarf',
    price: 19.99,
    quantity: 25,
    category: Category.Clothing,
    stock: 120,
    image: 'image35.jpg',
  },
  {
    id: 36,
    name: 'Bookshelf',
    price: 99.99,
    quantity: 7,
    category: Category.Furniture,
    stock: 30,
    image: 'image36.jpg',
  },
  {
    id: 37,
    name: 'Cookbook',
    price: 23.99,
    quantity: 40,
    category: Category.Books,
    stock: 110,
    image: 'image37.jpg',
  },
  {
    id: 38,
    name: 'Camera Lens',
    price: 349.99,
    quantity: 5,
    category: Category.Electronics,
    stock: 20,
    image: 'image38.jpg',
  },
  {
    id: 39,
    name: 'Blouse',
    price: 34.99,
    quantity: 15,
    category: Category.Clothing,
    stock: 100,
    image: 'image39.jpg',
  },
  {
    id: 40,
    name: 'Nightstand',
    price: 89.99,
    quantity: 10,
    category: Category.Furniture,
    stock: 45,
    image: 'image40.jpg',
  },
  {
    id: 41,
    name: 'Mystery Book',
    price: 17.99,
    quantity: 30,
    category: Category.Books,
    stock: 130,
    image: 'image41.jpg',
  },
  {
    id: 42,
    name: 'Wireless Earbuds',
    price: 149.99,
    quantity: 12,
    category: Category.Electronics,
    stock: 60,
    image: 'image42.jpg',
  },
  {
    id: 43,
    name: 'Skirt',
    price: 44.99,
    quantity: 18,
    category: Category.Clothing,
    stock: 80,
    image: 'image43.jpg',
  },
  {
    id: 44,
    name: 'TV Stand',
    price: 159.99,
    quantity: 6,
    category: Category.Furniture,
    stock: 25,
    image: 'image44.jpg',
  },
];

type IStoreItemHeaders = {
  id: string;
  name: string;
  price: string;
  quantity: string;
  category: string;
  stock: string;
  image: string;
};

const headers: IStoreItemHeaders = {
  id: 'id',
  name: 'Name',
  price: 'Price',
  quantity: 'Quantity',
  category: 'Category',
  stock: 'Stock',
  image: 'Image',
};

const curerntQuery = ref<string>();

const items = computed<IStoreItem[]>(() => {
  return exampleItems.filter(
    (item) =>
      !curerntQuery.value ||
      item.name.toLowerCase().includes(curerntQuery.value.toLowerCase()) ||
      item.category.toLowerCase().includes(curerntQuery.value.toLowerCase()) ||
      item.stock.toString().includes(curerntQuery.value) ||
      item.price.toString().includes(curerntQuery.value) ||
      item.quantity.toString().includes(curerntQuery.value),
  );
});
</script>

<template>
  <div class="main">
    <search-control v-model="curerntQuery" lazy />
    <div class="items">
      <div class="items__headers">
        <item-feature :data="headers as unknown as IStoreItem" mode="header" />
      </div>
      <div class="items__list">
        <item-feature v-for="item in items" :key="item.id" :item="item" :data="item" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.items {
  display: flex;
  flex-direction: column;
}
</style>
