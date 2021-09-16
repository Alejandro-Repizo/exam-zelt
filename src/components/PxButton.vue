<template>
  <button @click="buttonClick" class="button" type="button">
    <beat-loader
      v-show="isLoading"
      :loading="isLoading"
      :color="'#68d391'"
      :size="8"
    />
    <div v-if="!isLoading">
      <slot></slot>
    </div>
  </button>
</template>

<script>
export default {
  name: "PxButton",
  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    buttonClick() {
      this.$emit("custom-click");
    },
  },
};
</script>
