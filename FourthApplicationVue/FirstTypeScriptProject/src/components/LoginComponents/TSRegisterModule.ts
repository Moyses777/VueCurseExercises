import { defineComponent } from "vue";

export default defineComponent({
    data: function(){
        return {
            username: '',
            userlastname: '',
            useremail: '',
            userpassword: '',
            confirmpassword: '',
            samePassword: false,
            usernameval: false,
            userlastnameval: false,
            useremailval: false
        }
    }, 
    methods: {
        validatePasswords: function(){
            if(this.confirmpassword === '') this.samePassword = false;
            if(this.userpassword != this.confirmpassword) this.samePassword = true;
            else this.samePassword = false;
        },
        validateUsername: function(){
            if(this.username === '') this.usernameval = false;
            if(this.username.length < 4) this.usernameval = true;
            else this.usernameval = false;
        },
        validateUserLastname: function(){
            if(this.userlastname === '') this.userlastnameval = false;
            if(this.userlastname.length < 4) this.userlastnameval = true;
            else this.userlastnameval = false;
        },
        validateUserEmail: function(){
            if(!this.useremail.match('^[^@]+@[^@]+\.[a-zA-Z]{2,}$')) this.useremailval = true;
            else this.useremailval = false;
        }
    }
});