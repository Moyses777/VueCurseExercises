<template lang="pug">
form.row.g-3.formregister
    .col-md-6
      ui5-label.form-label(for='inputEmail4' required show-colon) Email
      ui5-input#inputEmail4.form-control(type='Email' :class="{'inputError': isEmail}" show-clear-icon :value="txtEmail" @input="txtEmail = $event.target.value" @keyup="validateEmail()")
      span(:class="{'spanError': isEmail}" v-if="isEmail") El correo esta mal ingresado!!!
    .col-md-6
      ui5-label.form-label(for='inputPassword4' required show-colon ) Password
      ui5-input#inputPassword4.form-control(type='Password' :class="{'inputError': isPassword}" show-clear-icon :value="txtPassword" @input="txtPassword = $event.target.value" @keyup="validatePassword()")
      span(:class="{'spanError': isPassword}", v-if="isPassword") La contraseña es muy corta!!!
    .col-12
      .form-check
        ui5-checkbox(value-state="Information" text="Check me out" :checked="isChecked" :value="isChecked" @change="isChecked = !isChecked")
    .col-12.center
      ui5-button.btnsize(design="Default" @click="loginUser") Submit
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import "@ui5/webcomponents/dist/features/InputSuggestions.js"
import "@ui5/webcomponents/dist/Input.js"
import "@ui5/webcomponents/dist/Button.js"

export default defineComponent({
    data: function(){
        return {
            txtEmail: "",
            txtPassword: "",
            isEmail: false,
            isPassword: false,
            isChecked: false
        };
    },
    methods: {
        validateEmail: function(){
            const validEmail = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$";
            if (this.txtEmail == ""){
                this.isEmail = false;
                return;
            }
            this.isEmail = !this.txtEmail.match(validEmail);
        },
        validatePassword: function(){
            this.isPassword = this.txtPassword.length < 5;
        },
        loginUser: function(){
            if (this.isChecked){
                if (!this.isEmail && !this.isPassword){
                    if (this.txtEmail != "" && this.txtPassword != ""){
                        alert("Se inicio sesion prruuu :v");
                    }
                }
            }
        }
    }
});
</script>