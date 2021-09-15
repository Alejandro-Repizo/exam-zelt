<template>
  <div>
    <px-header></px-header>
    <div class="data container--login">
      <px-table></px-table>
      <px-modal></px-modal>
    </div>
  </div>
</template>

<script>
import "@/assets/css/page.css"
import PxHeader from "@/components/PxHeader";
import PxTable from "@/components/PxTable";
import PxModal from "@/components/PxModal";

export default {
  name: "Home",
  components: {
    PxHeader,
    PxTable,
    PxModal,
  },
  data() {
    return {};
  },
};
</script>
