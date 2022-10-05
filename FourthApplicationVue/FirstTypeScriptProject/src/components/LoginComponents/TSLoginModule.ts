import { defineComponent } from "vue";
import * as Request from '../../Request.ts'


export default defineComponent({
    data: function(){
        return {
            username: '',
            password: '',
            usernamebool: false,
            passwordbool: false,
            activeLoader: false,
        };
    },
    methods: {
        UsernameVal: function(){
            if(this.username === '') this.usernamebool = false;
            if(!this.username.match('^[^@]+@[^@]+\.[a-zA-Z]{2,}$')) this.usernamebool = true;
            else this.usernamebool = false;
        },
        PasswordVal: function(){
            if(this.password === '') this.passwordbool = false;
            if(this.password.length < 5) this.passwordbool = true;
            else this.passwordbool = false; 
        }, 
        LoginValidation: async function(){
            if(this.username != '' && this.password != '' && !this.usernamebool && !this.passwordbool){
                document.querySelector("body").className = "disabledscreen";
                this.activeLoader = true;
                const user = await Request.login(this.username, this.password);
                if (user == null){
                    this.activeLoader = false;
                    document.querySelector("body").className = "";
                    alert('No se encontro el usuario o contraseña');
                    this.username = '';
                    this.password = '';
                    return;
                }
                user.isLogged = true;
                sessionStorage.setItem("user", user);
                this.activeLoader = false;
                window.location.href = "/dashboard";
                return;
            }
            alert("No se ingresaron bien los campos o estan vacios!!!");
        }
    }
});