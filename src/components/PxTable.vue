<template>
  <table class="data__table">
    <thead>
      <tr>
        <th>First name</th>
        <th>Last name</th>
        <th>Job title</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <moon-loader
          v-show="loader"
          :loading="loader"
          :color="'#68d391'"
          :size="60"
        />       
      <tr v-for="badge in badges" :key="badge.id" v-show="!loader">
        <td>{{ badge.firstName }}</td>
        <td>{{ badge.lastName }}</td>
        <td>{{ badge.jobTitle }}</td>
        <td>
          <div>
            <a href="#" class="button button--margin button--edit">
              <span>
                <i class="fas fa-edit"></i>
              </span>
            </a>
            <a href="#" class="button button--delete">
              <span>
                <i class="fas fa-trash-alt"></i>
              </span>
            </a>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "PxTable",
  props: {
    badges: {
      type: Array,
      default: () => [],
    },
    loader: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {};
  },
};
</script>
