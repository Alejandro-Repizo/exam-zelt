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
      <tr v-for="badge in badges" :key="badge.id">
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
  },
  data() {
    return {};
  },
};
</script>
