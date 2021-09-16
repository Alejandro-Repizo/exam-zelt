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

      <div class="data__button" v-if="!isLoading">
        <px-button @custom-click="toggleModalNewUser()">
          New user
        </px-button>
      </div>

      <px-table
        v-if="!isLoading"
        :badges="data"
        :loader="isLoadingTable"
      ></px-table>

      <px-modal v-show="showModalNewUser">
        <h3 class="modal__title">
          Edit information
        </h3>
        <form action="#" class="modal__form">
          <div class="modal__form--group">
            <label class="modal__label" for="first-name">First name:</label>
            <input
              class="modal__input"
              type="text"
              name="first-name"
              id="first-name"
              placeholder="Enter your first name..."
              v-model="user.first_name"
            />
          </div>
          <div class="modal__form--group">
            <label class="modal__label" for="last-name">Last name:</label>
            <input
              class="modal__input"
              type="text"
              name="last-name"
              id="last-name"
              placeholder="Enter your last name..."
              v-model="user.last_name"
            />
          </div>
          <div class="modal__form--group">
            <label class="modal__label" for="job-title">Job title:</label>
            <input
              class="modal__input"
              type="text"
              name="job-title"
              id="job-title"
              placeholder="Enter your job title..."
              v-model="user.job_title"
            />
          </div>
          <div class="modal__form--group">
            <label class="modal__label" for="email">Email:</label>
            <input
              class="modal__input"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email..."
              v-model="user.email"
            />
          </div>
          <div class="modal__form--group">
            <label class="modal__label" for="password">Password:</label>
            <input
              class="modal__input"
              type="password"
              name="password"
              id="password"
              v-model="user.password"
            />
          </div>
          <px-button @custom-click="sendData()">
            create new user
          </px-button>
          {{ error }}
        </form>
      </px-modal>
    </div>
    {{ showModalNewUser }}
  </div>
</template>

<script>
import "@/assets/css/page.css";
import PxHeader from "@/components/PxHeader";
import PxTable from "@/components/PxTable";
import PxButton from "@/components/PxButton";
import PxModal from "@/components/PxModal";
import api from "@/api";

export default {
  name: "Home",
  components: {
    PxHeader,
    PxTable,
    PxButton,
    PxModal,
  },
  data() {
    return {
      isLoading: false,
      isLoadingTable: false,
      showModalNewUser: false,
      error: null,
      data: [],
      user: {
        first_name: "",
        last_name: "",
        job_title: "",
        email: "",
        password: "",
      },
    };
  },

  watch: {
    user: {
      handler(value) {
        this.formCheckStyle(value);
      },
      deep: true,
    },
  },

  methods: {
    async fetchData() {
      try {
        this.data = await api.badges.list();
      } catch (error) {
        this.error = error;
      }
    },

    async sendData() {
      this.formCheckStyle(this.user);
      if (this.formCheckData(this.user)) {
        this.isLoadingTable = true;
        try {
          this.toggleModalNewUser();
          await api.badges.create({
            firstName: this.user.first_name,
            lastName: this.user.last_name,
            email: this.user.email,
            jobTitle: this.user.job_title,
            password: this.user.password,
          });
          await this.fetchData();
          this.isLoadingTable = false;
        } catch (error) {
          this.error = error;
        }
      }
    },

    formCheckData(object) {
      return Object.values(object).every((e) => e != "");
    },

    formCheckStyle(object) {
      Object.keys(object).forEach((e) => {
        if (object[e] === "") {
          document
            .getElementById(e.replace("_", "-"))
            .classList.add("modal__input--danger");
          document
            .querySelector(`label[for="${e.replace("_", "-")}"]`)
            .classList.add("modal__label--danger");
        } else {
          document
            .getElementById(e.replace("_", "-"))
            .classList.remove("modal__input--danger");
          document
            .querySelector(`label[for="${e.replace("_", "-")}"]`)
            .classList.remove("modal__label--danger");
        }
      });
    },

    toggleModalNewUser() {
      this.showModalNewUser = !this.showModalNewUser;
    },
  },

  created() {
    this.isLoading = true;
    try {
      this.fetchData();
      this.isLoading = false;
    } catch (error) {
      this.error = error;
    }
  },
};
</script>
