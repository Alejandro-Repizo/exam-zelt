<template>
  <div>
    <px-header></px-header>
    <div class="data container--login">
      <rotate-loader
        :loading="isLoading"
        :color="'#68d391'"
        :size="20"
        style="margin: 2px"
      ></rotate-loader>
      <px-table v-if="!isLoading" :badges="data"></px-table>
      <px-modal></px-modal>
    </div>
  </div>
</template>

<script>
import "@/assets/css/page.css";
import PxHeader from "@/components/PxHeader";
import PxTable from "@/components/PxTable";
import PxModal from "@/components/PxModal";
import api from "@/api";

export default {
  name: "Home",
  components: {
    PxHeader,
    PxTable,
    PxModal,
  },
  data() {
    return {
      isLoading: false,
      error: null,
      data: [],
    };
  },

  methods: {
    async fetchData() {
      this.isLoading = true
      try {
        this.data = await api.badges.list();
        this.isLoading = false
      } catch (error){
        this.error = error
      }
    },
  },

  created() {
    this.fetchData();
  },
};
</script>
