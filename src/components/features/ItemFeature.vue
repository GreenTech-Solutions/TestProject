<script setup lang="ts">
import type { IStoreItem } from '@models';

interface IItemFeatureProps {
  data: IStoreItem;
  /**
   * @default 'item'
   */
  mode?: 'item' | 'header';
}

withDefaults(defineProps<IItemFeatureProps>(), {
  mode: 'item',
});
</script>

<template>
  <div class="item" :class="{ item_headers: mode === 'header' }">
    <div class="item__value">{{ data.id }}</div>
    <div class="item__value">{{ data.name }}</div>
    <div class="item__value">{{ data.price }}</div>
    <div class="item__value">{{ data.category }}</div>
    <div class="item__value">{{ data.stock }}</div>
  </div>
</template>

<style lang="scss" scoped>
.item {
  display: grid;
  grid-template-columns: 50px repeat(5, 1fr);

  &_headers {
    font-weight: bold;
    color: blueviolet;
  }

  &__value {
    padding: 10px;
    border: 1px solid #ccc;

    transition: 0.3s;

    &:hover {
      background-color: #f5f5f5;
      cursor: pointer;
      color: #333;
      scale: 1.05;
    }
  }
}
</style>
