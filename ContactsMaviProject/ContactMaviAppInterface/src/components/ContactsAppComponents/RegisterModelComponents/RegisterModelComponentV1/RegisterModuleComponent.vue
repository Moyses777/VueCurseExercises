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
      ui5-label.form-label(for='inputAddress' required show-colon) Address
      ui5-input#inputAddress.form-control(type='Text' :class="{'inputError': isAddress}" placeholder='1234 Main St' show-clear-icon :value="txtAddress" @input="txtAddress = $event.target.value" @keyup="validateAddress()")
      span(:class="{'spanError': isAddress}" v-if="isAddress") Direccion muy corta o incompleta!!!
    .col-12
      ui5-label.form-label(for='inputAddress2' required show-colon) Address 2
      ui5-input#inputAddress2.form-control(type='Text' :class="{'inputError': isAddressTwo}" placeholder='Apartment, studio, or floor' show-clear-icon :value="txtAddressTwo" @input="txtAddressTwo = $event.target.value" @keyup="validateAddress()")
      span(:class="{'spanError': isAddressTwo}", v-if="isAddressTwo") Direccion muy corta o incompleta!!!
    .col-md-4
      ui5-label.form-label(for='inputCity' required show-colon) City
      ui5-input#inputCity.form-control(type='Text' :class="{'inputError': isCity}" show-suggestions show-clear-icon :value="txtCity" @input="txtCity = $event.target.value" @keyup="validateCity()")
      span(:class="{'spanError': isCity}" v-if="isCity") Campo ciudad incompleta!!!
    .col-md-4
      ui5-label.form-label(for='inputState' required show-colon) State
      ui5-select#inputState(:value="txtState" :class="{'inputError': isState}" @change="txtState = $event.detail.selectedOption.value" @blur="validateState()")
        ui5-option(selected) Choose...
        ui5-option(additional-text="JAL" value="JALISCO") JALISCO
      span(:class="{'spanError': isState}" v-if="isState") No seleccionaste un estado!!!
    .col-md-2
      ui5-label.form-label(for='inputZip' required show-colon) Zip
      ui5-input#inputZip.form-control(type='Number' :class="{'inputError': isZip}" show-clear-icon :value="txtZip" @input="txtZip = $event.target.value" @keyup="validateZip()")
      span(:class="{'spanError': isZip}" v-if="isZip") Zip incorrecto!!!
    .col-12
      .form-check
        ui5-checkbox(value-state="Information" text="Check me out" :checked="isChecked" :value="isChecked" @change="isChecked = !isChecked")
    .col-12.center
      ui5-button.btnsize(design="Default" @click="registerUser") Submit
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import "@ui5/webcomponents/dist/features/InputSuggestions.js"
import "@ui5/webcomponents/dist/Input.js"
import "@ui5/webcomponents/dist/Label.js"
import "@ui5/webcomponents/dist/CheckBox.js"
import "@ui5/webcomponents/dist/Button.js"
import "@ui5/webcomponents/dist/Select.js"

export default defineComponent({
  data: function(){
    return {
      txtEmail: "",
      txtPassword: "",
      txtAddress: "",
      txtAddressTwo: "",
      txtCity: "",
      txtState: "",
      txtZip: 0,
      isChecked: false,
      isEmail: false,
      isPassword: false,
      isAddress: false,
      isAddressTwo: false,
      isCity: false,
      isState: false,
      isZip: false
    };
  },
  methods: {
    registerUser: function(){
      if (this.isChecked){
        if(!this.isEmail && !this.isPassword && !this.isAddress && !this.isAddressTwo && !this.isCity && !this.isState && !this.isZip){
          if(this.txtEmail != "" && this.txtPassword != "" && this.txtAddress != "" && this.txtAddressTwo != "" && this.txtCity != "" && this.txtState != "" && this.txtZip != 0){
            alert("Datos enviados!")
          }
        }
      }
    },
    validateEmail: function(){
      const validEmail = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$";
      if(this.txtEmail == ""){
        this.isEmail = false;
        return;
      }
      this.isEmail = !this.txtEmail.match(validEmail);
    },
    validatePassword: function(){
      this.isPassword = this.txtPassword.length < 5;
    },
    validateAddress: function(){
      this.isAddress = this.txtAddress.length < 8;
      this.isAddressTwo = this.txtAddressTwo.length < 8;
    },
    validateCity: function(){
      this.isCity = this.txtCity.length < 4;
    },
    validateZip: function(){
      this.isZip = this.txtZip.toString().length < 4;
    },
    validateState: function(){
      this.isState = this.txtState.length < 2;
    }   
  }
});

</script>

<style>
.btnsize{
    width: 8em;
}
.formregister{
    width: 80%;
    margin: auto;
    padding: 5em;
    border: black 1px solid;
    border-radius: 50px;
    box-shadow: black 3px 3px 3px;
    margin-top: 2em;
    margin-bottom: 2em;
}
.form-control{
    padding: 0 !important;
}
.center{
  display: flex;
  justify-content: center;
}
.inputError{
  border: red 1px solid;
}
.spanError{
  color: red;
}
</style>