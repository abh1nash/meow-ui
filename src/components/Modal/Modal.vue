<template>
  <teleport :to="portalArea">
    <xyz-transition xyz="fade" mode="out-in">
      <div
        v-if="open"
        tabindex="0"
        @click.self="close"
        class="
          meow-backdrop
          fixed
          inset-0
          bg-white bg-opacity-30
          backdrop-blur-lg
        "
      ></div>
    </xyz-transition>
    <xyz-transition appear xyz="fade up duration-2">
      <div
        v-if="open"
        class="
          meow-dialog-content
          flex
          items-center
          justify-center
          fixed
          inset-0
          z-10
          h-screen
          w-screen
          pointer-events-none
        "
      >
        <div
          class="
            card
            bg-white
            shadow-xl
            max-w-full
            z-10
            mx-4
            pointer-events-auto
          "
          style="width: 600px"
        >
          <div class="card-title p-3 bg-primary text-primary-content">
            <h2>Test</h2>
          </div>
          <div class="card-body"></div>
        </div>
      </div>
    </xyz-transition>
  </teleport>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, toRefs } from "vue";
import usePortal from "../../composables/usePortal";

const props = defineProps<{ open?: boolean }>();
const { open } = toRefs(props);

const emit = defineEmits<{ (e: "close"): void }>();
const close = () => {
  emit("close");
  document.body.classList.remove("overflow-hidden");
};

const { portalArea } = usePortal();

onMounted(() => {
  document.body.classList.add("overflow-hidden");
});
onUnmounted(() => {
  document.body.classList.remove("overflow-hidden");
});
</script>
