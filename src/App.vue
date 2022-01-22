<script setup lang="ts">
import Modal from "./components/Modal/Modal.vue";
import { ref } from "vue";
const open = ref<boolean>(false);
</script>

<template>
  <div class="p-6 flex gap-1.5">
    <button
      class="btn btn-primary hover:shadow-xl transition-all hover:shadow-accent"
    >
      Test
    </button>
    <button class="btn border-none">Test</button>
    <div>
      <h1>Heading</h1>
    </div>
    <div class="alert alert-success">
      <div>
        <h3>Alert title</h3>
        <div>Here we go!!</div>
      </div>
    </div>
  </div>
  <div class="p-6 flex gap-1.5">
    <div class="card shadow-lg meow-gradient-dark">
      <div class="card-body">
        <div class="card-title">Tis a card</div>
        Yellow World! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Veritatis, recusandae. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Id ipsum nemo placeat non fugit rerum provident nisi
        doloribus mollitia est sed nesciunt, itaque tenetur iusto perferendis
        hic optio illo quis consectetur similique? Atque vitae dignissimos rem
        sequi ex cumque optio, minus modi numquam tempore perspiciatis odit, a
        veniam accusantium est illo perferendis nulla suscipit fugit velit
        voluptates quod tempora ullam! Eligendi sed aliquid maiores dolor, quos
        at dignissimos nemo temporibus magnam. Atque iure debitis eum. Aliquid
        reiciendis fugiat, cumque repellat incidunt officiis ipsam maxime. Quod
        dignissimos quo ut in tenetur vitae blanditiis amet veniam qui, eligendi
        officiis! Ex, minus excepturi?
      </div>
    </div>
  </div>
  <button @click="open = true">Open</button>
  <Modal :open="open" @close="open = false">
    <template #title>This is a title.</template>
    <div>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, expedita.
    </div>
  </Modal>
</template>
