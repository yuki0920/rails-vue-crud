<template>
  <div class="container">
    <h1 class="#f3e5f5 purple lighten-5 center">Sign UP</h1>
    <form class="col" @submit.prevent="signup">
      <div class="text-red" v-if="error">{{ error }}</div>
      <InputField
        type="text"
        placeholder="Name"
        v-model="name"
      />
      <InputField
        type="email"
        placeholder="Email"
        v-model="email"
      />
      <InputField
        type="password"
        placeholder="Password"
        v-model="password"
      />
      <InputField
        type="password"
        placeholder="Password Confirmation"
        v-model="password_confirmation"
      />
      <SubmitButton>Sign Up</SubmitButton>
    </form>
  </div>
</template>

<script>
  import InputField from './components/InputField'
  import SubmitButton from './components/SubmitButton'

  export default {
    name: 'Signup',
    components: {
      InputField,
      SubmitButton
    },
    data() {
      return {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        error: ''
      }
    },
    created() {
      this.checkSignedIn()
    },
    updated() {
      this.checkSignedIn()
    },
    methods: {
      signup() {
        this.$http.plain.post('/api/signup', { name: this.name, email: this.email, password: this.password, password_confirmation: this.password_confirmation })
          .then(response => this.signupSuccessful(response))
          .catch(error => this.signupFailed(error))
      },
      signupSuccessful(response) {
        if (!response.data.csrf) {
          this.signupFailed(response)
          return
        }
        localStorage.csrf = response.data.csrf
        localStorage.signedIn = true
        this.$store.dispatch('doFetchSignedIn')
        this.error = ''
        this.$router.replace('/')
      },
      signupFailed(error) {
        this.error = (error.response && error.response.data && error.response.data.error) || 'Something went wrong'
        delete localStorage.csrf
        delete localStorage.signedIn
      },
      checkSignedIn() {
        if (localStorage.signedIn) {
          this.$router.replace('/')
        }
      }
    }
  }
</script>
