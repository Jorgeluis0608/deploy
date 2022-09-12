<template>
  <div class="page-wrap">
    <form-deco v-if="isDesktop" />
    <v-snackbar
      v-model="snackbar"
      :timeout="4000"
      top
      right
      class="notification"
    >
      <div class="action">Message Sent</div>
      <v-btn text icon @click="snackbar = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-snackbar>
    <v-container class="inner-wrap max-md">
      <div class="full-form-wrap">
        <div class="text-center">
          <h3 class="use-text-title pb-3 text-center">Get Quotation</h3>
        </div>
        <div class="form">
          <v-form ref="form" v-model="valid">
            <v-row class="spacing6">
              <v-col cols="12" sm="6" md="4" class="px-6 py-0">
                <label>First Name</label>
                <v-text-field
                  v-model="name"
                  :rules="nameRules"
                  label="What is your first name? *"
                  class="input-field"
                  color="secondary"
                  filled
                  required
                />
              </v-col>
              <v-col cols="12" sm="6" md="4" class="px-6 py-0">
                <label>Last Name</label>
                <v-text-field
                  v-model="surname"
                  :rules="nameRules"
                  label="What is your last name? *"
                  class="input-field"
                  color="secondary"
                  filled
                  required
                />
              </v-col>
              <v-col cols="12" sm="6" md="4" class="px-6 py-0">
                <label>Phone Number</label>
                <v-text-field
                  v-model="phone"
                  :rules="requiredRules"
                  label="What is your phone number?"
                  class="input-field"
                  color="secondary"
                  filled
                  required
                />
              </v-col>
              <v-col cols="12" sm="6" md="4" class="px-6 py-0">
                <label>Business Name</label>
                <v-text-field
                  v-model="companyName"
                  :rules="requiredRules"
                  label="What is your business name?"
                  class="input-field"
                  color="secondary"
                  filled
                  required
                />
              </v-col>
              <v-col cols="12" sm="6" md="4" class="px-6 py-0">
                <label>Business website</label>
                <v-text-field
                  v-model="companyWebsite"
                  :rules="requiredRules"
                  label="What is your business website?"
                  class="input-field"
                  color="secondary"
                  filled
                  required
                />
              </v-col>
              <v-col cols="12" sm="6" md="4" class="px-6 py-0">
                <label>Business Type</label>
                <v-select
                  v-model="companyType"
                  :rules="requiredRules"
                  item-text="name"
                  item-value="last"
                  :items="types"
                  class="input-field"
                  color="secondary"
                  filled
                  required
                />
              </v-col>
              <v-col cols="12" class="px-6 py-0">
                <v-textarea
                  v-model="message"
                  label="Write your message here"
                  rows="6"
                  class="input-field"
                  color="secondary"
                  filled
                />
              </v-col>
            </v-row>
            <div class="btn-area">
              <div class="form-control-label">
                <v-checkbox
                  v-model="checkbox"
                  color="primary"
                  :rules="[(v) => !!v || 'You must agree to continue!']"
                  label="I have read and accept the Terms of"
                  required
                />
                <span>
                  <a href="#" class="link"> Service & Privacy Policy * </a>
                </span>
              </div>
              <v-btn :block="isMobile" color="primary" large @click="validate">
                Send Message
              </v-btn>
            </div>
          </v-form>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
import FormDeco from '../Decoration/FormDeco'
import link from '~/static/text/link'

export default {
  name: 'QuotationPage',

  components: {
    FormDeco,
  },
  data() {
    return {
      valid: true,
      snackbar: false,
      name: '',
      nameRules: [(v) => !!v || 'Name is required'],
      surnameRules: [(v) => !!v || 'Surname is required'],
      email: '',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      requiredRules: [(v) => !!v || 'This field is required'],
      phone: '',
      surname: '',
      companyName: '',
      companyType: {
        name: 'End User',
        last: 'end_user',
      },
      types: [
        {
          name: 'End User',
          last: 'end_user',
        },
        {
          name: 'Trader',
          last: 'trader',
        },
      ],
      companyWebsite: '',
      message: '',
      checkbox: false,
      routeLink: link,
    }
  },
  computed: {
    isMobile() {
      const xsDown = this.$store.state.breakpoints.xsDown
      return xsDown.includes(this.$mq)
    },
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp
      return lgUp.includes(this.$mq)
    },
  },
  methods: {
    async validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true
        console.log(this.companyType)
        console.log(this.companyType.last)
        var data = {
          name: this.name,
          surname: this.surname,
          business_name: this.companyName,
          business_website: this.companyWebsite,
          business_type: this.companyType.last,
          phone_number: this.phone,
          your_message: this.message,
        }
        var result = await this.$swell.post('/content/get-quotation', data)
        console.log(result)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import './form-style.scss';
</style>
