<template>
    <q-layout view="lHh LpR lFf">
      <q-header reveal elevated class="bg-secondary text-white">
        <q-toolbar class="justify-between">
          <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
          <q-btn dense flat round icon="logout" @click="signOut" />
        </q-toolbar>
      </q-header>

      <q-drawer show-if-above v-model="leftDrawerOpen" side="left" behavior="desktop" elevated>
        <!-- drawer content -->
          <q-list>
                <q-item-label
                  header
                >

                    <img src="src/assets/logo.png" width="100%" height="85rem" />
                </q-item-label>

                <EssentialLink
                  v-for="link in menu"
                  :key="link.title"
                  v-bind="link"
                />
          </q-list>
      </q-drawer>

      <q-page-container>
        <router-view />
      </q-page-container>

      <q-footer reveal elevated class="bg-grey-3 text-white">
        <q-toolbar>
          <q-toolbar-title>
          </q-toolbar-title>
        </q-toolbar>
      </q-footer>
    </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import EssentialLink, { EssentialLinkProps } from 'components/EssentialLink.vue';
import { useRouter } from 'vue-router';

defineOptions({
  name: 'MainLayout'
});
const menu = ref<EssentialLinkProps[]>([
  {
    title: 'Dashboard',
    link: 'Index',
    icon: 'dashboard'
  },
  {
    title: 'Pacientes',
    link: 'Users',
    icon: 'manage_accounts'
  },
  {
    title: 'Expedientes',
    link: 'Records',
    icon: 'library_books'
  }
]);

const leftDrawerOpen = ref(true);
const router = useRouter();
const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

const signOut = () => {
  localStorage.clear();
  router.push({name: 'Sign-In'})
}

</script>
