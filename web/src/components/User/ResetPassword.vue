<template>
  <div id="container">
    <div class="container mt-5 mb-5">
      <div class="row text-center">
        <div class="m-auto text-center w-50">
          <h1>Login</h1>
          <p>Not a member yet?
            <RouterLink to="/signup" tag="a">Register</RouterLink>
          </p>
          <div>
            <i class="float-left fab fa-google google-icon"></i>
            <a class="btn btn-googleplus" href="">
              SIGN IN WITH GOOGLE
            </a>
          </div>
          <hr class="hr-text" data-content="OR">
          <form >
            <div class="form-group" :class="{invalid:$v.email.$error}">
              <input id="email" type="email" class="form-control " name="email"
                     required autocomplete="email"
                     autofocus
                     placeholder="Enter email"
                     @blur="$v.email.$touch()"
                     v-model="email"/>
              <div class="error" v-if="!$v.email.email">Email must have valid format</div>

            </div>
            <div class="form-group" :class="{invalid:$v.password.$error}">
              <input id="password" type="password"
                     class="form-control " name="password"
                     required autocomplete="current-password"
                     placeholder="Password"
                     @blur="$v.password.$touch()"
                     v-model="password"/>
              <div class="error" v-if="!$v.password.minLength">Password must be at least {{$v.password.$params.minLength.min}} letters.</div>
            </div>
            <div class="form-group form-check">
              <div class="float-left mb-2">
                <input type="checkbox" class="form-check-input" id="remember" name="remember">
                <label class="form-check-label" for="remember">Remember Me</label>
              </div>
              <a class="float-right" href="">
                Forgot Your Password?
              </a>
            </div>
            <button type="submit" class="btn btn-primary btn-block mt-2" @click.prevent="onSubmit">Login</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, email, minLength } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      minLength: minLength(8)
    }
  },
  methods: {
    onSubmit () {
      const formData = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('login', formData)
    }
  }
}
</script>
<style scoped>
  .error{
    color: red;
  }
  .invalid input {
    color: red;
    border : 1px solid red;
  }
</style>
