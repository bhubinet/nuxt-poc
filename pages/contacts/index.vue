<template>
  <div>
    <h1>Liste des contacts</h1>
    <p class="tw:text-neutral-500">Retrouvez ci-dessous la liste des contacts</p>

    <AtomsAlert variant="warning" @close="() => alert('Fermé !')">
      <template #title>Lorem ipsum dolor</template>
      Lorem ipsum dolor sit amet consectetur adipiscing elit.
    </AtomsAlert>


    <router-link class="tw:mr-1" to="/contacts/add">Ajouter un contact</router-link>
  </div>
</template>

<script setup>
import AtomsAlert from '@/components/atoms/Alert.vue'
</script>
