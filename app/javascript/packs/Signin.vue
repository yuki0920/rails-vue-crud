<template>
  <div class="container">
    <h1 class="#f3e5f5 purple lighten-5 center">Sign In</h1>
    <form class="col" @submit.prevent="signin">
      <div class="text-red" v-if="error">{{ error }}</div>

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

      <SubmitButton />
    </form>
  </div>
</template>

<script>
  //　動作は，Signupコンポーネントと同じ。
  import InputField from './components/InputField'
  import SubmitButton from './components/SubmitButton'

  export default {
    name: 'Signin',
    components: {
      InputField,
      SubmitButton
    },
    data() {
      return {
        email: '',
        password: '',
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
      signin() {
        this.$http.plain.post('/api/signin', { email: this.email, password: this.password })
          .then(response => this.signinSuccessful(response))
          .catch(error => this.signinFailed(error))
      },
      signinSuccessful(response) {
        if (!response.data.csrf) {
          this.signinFailed(response)
          return
        }
        localStorage.csrf = response.data.csrf
        localStorage.signedIn = true
        this.$store.dispatch('doFetchSignedIn')
        this.error = ''
        this.$router.replace('/')
      },
      signinFailed(error) {
        this.error = (error.response && error.response.data && error.response.data.error) || ''
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
