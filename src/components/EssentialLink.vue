<template>
  <q-item
    clickable
    :to="{name: link}"
    class="item"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>{{ caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
defineOptions({
  name: 'EssentialLink'
});

export interface EssentialLinkProps {
  title: string;
  caption?: string;
  link?: string;
  icon?: string;
};

withDefaults(defineProps<EssentialLinkProps>(), {
  caption: '',
  link: '#',
  icon: '',
});
</script>

<style lang="scss" scoped>
.item {
  color: var(--q-secondary) !important;
  opacity: .5;
}
.q-item.q-router-link--active {
  font-weight: bolder;
  opacity: 1;
}
</style>