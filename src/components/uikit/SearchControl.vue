<script lang="ts" setup>
import { CloseRoundIcon, SearchIcon } from '@icons';
import { nextTick, ref } from 'vue';

interface ISearchControlProps {
  placeholder?: string;
  /**
   * Update only on blur
   * @default: false
   */
  lazy?: boolean;
  /**
   * Use dropdown menu
   * @default true
   */
  dropdown?: boolean;
}

interface ISearchControlEmits {
  (e: 'search', value: string): void;
}

const props = withDefaults(defineProps<ISearchControlProps>(), {
  placeholder: 'Найти',
  lazy: false,
  dropdown: true,
});

const emits = defineEmits<ISearchControlEmits>();

const text = defineModel<string>({ default: '' });

let initialText = text.value;

const isFocused = ref<boolean>(false);

const rSearchInput = ref<HTMLInputElement>();

function onInput() {
  if (!props.lazy) {
    emitSearch();
  }
}

async function onSearchClear() {
  text.value = '';
  await nextTick();

  emitSearch();
}

function onFocus() {
  isFocused.value = true;
}

function onBlur() {
  isFocused.value = false;
  if (props.lazy) {
    emitSearch();
  }
}

function blur() {
  rSearchInput.value?.blur();
}

function emitSearch() {
  if (initialText === text.value) return;
  initialText = text.value;
  emits('search', text.value);
}
</script>

<template>
  <div class="search" :class="{ search_focused: isFocused }">
    <search-icon class="search__icon" />
    <input
      type="search"
      ref="rSearchInput"
      :placeholder="placeholder"
      class="search__input"
      v-model="text"
      @input="onInput"
      @focus="onFocus"
      @blur="onBlur"
      @keyup.enter="blur"
    />
    <close-round-icon class="icon search__icon" v-if="text" @click="onSearchClear" />
    <div class="search__dropdown" v-if="dropdown && text.length && isFocused" @click="blur">
      <search-icon class="search__icon" />
      <div class="search__dropdown_text">найти "{{ text }}"</div>
      <div class="search__dropdown_hint">Нажмите Enter</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.search {
  display: flex;
  justify-content: space-between;
  gap: 5px;
  align-items: center;
  padding-left: 10px;
  width: 300px;

  height: 40px;
  border-radius: 8px;
  $borderSize: 1px;
  border: $borderSize solid gray;
  background: transparent;
  transition: 0.3s;
  position: relative;

  &_focused {
    border-color: var(--primaryColor);
  }

  &__input {
    height: 100%;
    padding: 0 5px;
    border-color: transparent;
    flex: 1;

    &::-webkit-search-cancel-button {
      -webkit-appearance: none;
    }

    &::placeholder {
      font-weight: 300;
      font-size: 14px;
    }

    &:focus {
      border-color: transparent;
    }
  }

  &__icon {
    cursor: pointer;
    color: var(--primaryColor);
    transition: 0.3s;
    margin-right: 10px;
    width: 15px;
    height: 15px;

    &:hover {
      scale: 1.05;
    }
  }

  &__dropdown {
    position: absolute;
    background: white;
    border: 1px solid gray;
    width: calc(100% + $borderSize * 2);
    left: -$borderSize;
    top: calc(100% + 1px);
    display: flex;
    justify-content: space-between;
    gap: 5px;
    align-items: center;
    height: 40px;
    padding: 0 10px;
    z-index: 1;
    cursor: pointer;
    border-radius: 5px;

    &:hover {
      background-color: rgb(154, 154, 222);
    }

    &_text {
      width: 100%;
      padding: 0 10px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      color: black;
      font-weight: 400;
    }

    &_hint {
      text-wrap: nowrap;
      font-size: 12px;
      font-weight: 400;
      color: gray;
    }
  }
}
</style>
