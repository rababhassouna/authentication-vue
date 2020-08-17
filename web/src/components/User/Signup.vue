<template>
  <div class="container mt-5 mb-5">
    <div class="row text-center">
      <div class="m-auto text-center w-50">
        <h1>Register</h1>
        <p>Already have account?
          <RouterLink to="/login" tag="a">Login</RouterLink>
        </p>
        <div>
          <i class="float-left fab fa-google google-icon"></i>
          <a class="btn btn-googleplus" href="https://kyro.ms/redirect/google">
            SIGN UP WITH GOOGLE
          </a>
        </div>
        <hr class="hr-text" data-content="OR">
        <form @submit="checkForm">
          <div class="form-group">
            <input id="name" type="text" class="form-control "
                   name="name" value="" required autocomplete="name" autofocus
                   v-model="username"
                   placeholder="User Name*">
          </div>
          <div class="form-group" :class="{invalid:$v.email.$error}">
            <input id="email" type="email" class="form-control " name="email"
                   required autocomplete="email"
                   autofocus
                   placeholder="Enter email"
                   @blur="$v.email.$touch()"
                   v-model="email"/>
            <div class="error" v-if="!$v.email.email">Email must have valid format</div>

          </div>
          <div class="form-group" :class="{ 'form-group--error': $v.password.$error }">
            <input id="password" type="password"
                   class="form-control " name="password" required
                   autocomplete="new-password" placeholder="Password*"
                   v-model="$v.password.$model">
            <!--<div class="error" v-if="!$v.password.required">Password is required.</div>-->
            <div class="error" v-if="!$v.password.minLength">Password must have at least {{
              $v.password.$params.minLength.min }} letters.
            </div>

          </div>
          <div class="form-group" :class="{ 'form-group--error': $v.repeatPassword.$error }">
            <input id="password-confirm" type="password" class="form-control"
                   name="password_confirmation" required autocomplete="new-password"
                   @blur="$v.repeatPassword.$model"
                   v-model="repeatPassword"
                   placeholder="Confirm Password*">
            <div class="error" v-if="!$v.repeatPassword.sameAsPassword">Passwords must be identical.</div>

          </div>
          <div class="form-group">
            <select type="password" name='country' class="form-control" v-model="selectedCountry">
              <option value="">Country</option>
              <option v-for="country in countries" :key="country.id">{{country.title}}</option>
            </select>
          </div>
          <div class="form-group">
            <select type="password" name='country' class="form-control" v-model="sectedIdustry">
              <option value="">Industry</option>
              <option v-for="country in countries" :key="country.id">{{country.title}}</option>
            </select>
          </div>
          <button type="submit" class="btn btn-primary btn-block mt-2" @click.prevent="onSubmit">Register</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../Config/axios-auth'
import {required, email, minLength, sameAs} from 'vuelidate/lib/validators'

export default {

  data () {
    return {
      username: '',
      email: '',
      password: '',
      countries: [],
      selectedCountry: '',
      sectedIdustry: '',
      repeatPassword: ''
    }
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(8)
    },
    repeatPassword: {
      sameAsPassword: sameAs('password')
    }
  },
  created () {
    axios.get('http://localhost:1337/products')
      .then(responce => {
        this.countries = responce.data
        console.log(this.countries)
        console.log(responce)
      })
      .catch(error => console.log(error))
  },
  methods: {
    checkForm (e) {
      if (this.email.length > 0) {
        console.log(this.email)
      }
    },
    onSubmit () {
      const formData = {
        username: this.username,
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('signUp', formData)
    }
  }
}
</script>
