<template>
  <v-container fluid>
    <v-form v-model="valid" ref="form" lazy-validation>
    <v-text-field
      label="First name"
      v-model="firstName"
      :rules="nameRules"
      :counter="10"
      required />
    <v-text-field
      label="Last name"
      v-model="lastName"
      :rules="nameRules"
      :counter="10"
      required />
    <v-text-field
      label="E-mail"
      v-model="email"
      :rules="emailRules"
      required />
    <v-select
      label="Gender"
      v-model="gender"
      :items="genders"
      :rules="[v => !!v || 'Gender is required']"
      required></v-select>
    <v-checkbox
      label="Are you sure you want to do this?"
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      required />

    <v-btn
      @click="submit"
      :disabled="!valid">
      submit
    </v-btn>
    <v-btn @click="clear">clear</v-btn>
  </v-form>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  name: 'guestbook',
  data: () => ({
    valid: true,
    firstName: '',
    lastName: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
    ],
    gender: null,
    genders: [
      'Male',
      'Female',
      'Gay',
      'Lesbian',
      'Other'
    ],
    checkbox: false
  }),
  methods: {
    submit: function () {
      if (this.$refs.form.validate()) {
        axios.post('/api/submit', {
          name: this.firstName + ' ' + this.lastName,
          email: this.email,
          gender: this.gender,
          checkbox: this.checkbox
        })
      }
    },
    clear: function () {
      this.$refs.form.reset()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
