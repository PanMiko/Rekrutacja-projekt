<template>
  <div>
    <HeaderContacts></HeaderContacts>
    <v-card class="mx-auto" max-width="1000px">
      <form class="ma-5 pa-8">

<!--IMIE-->
        <v-text-field
            color="#802BB1"
            v-model="name"
            :error-messages="nameErrors"
            :counter="15"
            label="Imię"
            required
            @input="$v.name.$touch()"
            @blur="$v.name.$touch()"
        ></v-text-field>
<!-------->

<!--NAZWISKO-->
        <v-text-field
            color="#802BB1"
            v-model="surname"
            :error-messages="surnameErrors"
            :counter="20"
            label="Nazwisko"
            required
            @input="$v.surname.$touch()"
            @blur="$v.surname.$touch()"
        ></v-text-field>
<!------------>

<!--EMAIL-->
        <v-text-field
            color="#802BB1"
            v-model="email"
            :error-messages="emailErrors"
            label="E-mail"
            required
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
        ></v-text-field>
<!--------->

<!--TELEFON-->
        <v-text-field
            color="#802BB1"
            v-model="phone"
            :error-messages="phoneErrors"
            :counter="9"
            label="Numer Telefonu"
            required
            @input="$v.phone.$touch()"
            @blur="$v.phone.$touch()"
        ></v-text-field>
<!----------->

        <v-btn
            dark
            class="mt-5"
            color="#564F6F"
            @click="submit"
            to="/summary"
        >
          Potwiedź
        </v-btn>
      </form>
    </v-card>
  </div>
</template>

<script>
import {validationMixin} from 'vuelidate'
import {required, maxLength, minLength, email, numeric} from 'vuelidate/lib/validators'
import HeaderContacts from "@/components/Contact/HeaderContacts";

export default {
  mixins: [validationMixin],

  validations: {
    name: {required, maxLength: maxLength(15)},
    surname: {required, maxLength: maxLength(20)},
    email: {required, email},
    phone: {required, maxLength: maxLength(9), minLength: minLength(9), numeric},
  },

  data() {
    return {
      name: '',
      surname: '',
      email: '',
      phone: '',
    };
  },

  mounted() {
    this.name = this.$store.state.userInfo.name;
    this.surname = this.$store.state.userInfo.surname;
    this.email = this.$store.state.userInfo.email;
    this.phone = this.$store.state.userInfo.phone;
  },

  components: {
    HeaderContacts,
  },

  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength && errors.push('Imię nie może mieć więcej niż 15 liter');
      !this.$v.name.required && errors.push('Imię jest wymagane');
      return errors;
    },

    surnameErrors() {
      const errors = [];
      if (!this.$v.surname.$dirty) return errors;
      !this.$v.surname.maxLength && errors.push('Nazwisko nie może mieć więcej niż 20 liter');
      !this.$v.surname.required && errors.push('Nazwisko jest wymagane');
      return errors;
    },

    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push('E-mail musi być prawidłowy (np.: test@test.pl)');
      !this.$v.email.required && errors.push('E-mail jest wymagany');
      return errors;
    },

    phoneErrors() {
      const errors = [];
      if (!this.$v.phone.$dirty) return errors;
      !this.$v.phone.numeric && errors.push('Numer telefonu składa się tylko z cyfr');
      !this.$v.phone.minLength && errors.push('Numer telefonu musi mieć 9 cyfr');
      !this.$v.phone.maxLength && errors.push('Numer telefonu musi mieć 9 cyfr');
      !this.$v.phone.required && errors.push('Numer telefonu jest wymagany');
      return errors;
    }
  },

  methods: {
    submit() {
      this.$v.$touch();
      return this.$v.$invalid;
    },
  },

  beforeRouteLeave(to, from, next) {
    if (!this.submit()) {
      next();
      this.$store.dispatch('pushUserInfo', {
        name: this.name,
        surname: this.surname,
        email: this.email,
        phone: this.phone
      });
    }
  }
};
</script>

<style scoped>

</style>