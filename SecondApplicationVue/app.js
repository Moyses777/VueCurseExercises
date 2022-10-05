const { createApp } = Vue;

createApp({
    data: function(){
        return {
            newMessage: "Hello world and learn Vue.js",
            newMessageHtml: "<h5>Hello world by HTML</h5>",
            counter: 0,
            name: "",
            confirmedName: '',
            vueLink: 'https://vuejs.org/'
        };
    },
    methods: {
        outPutGoal: function (){
            const randomNumber = Math.random();
            if (randomNumber < 0.5) return 'Learn View!';
            return 'Master Vue';
        },
        outputFullname: function (){
            if (this.name === ''){
                return '';
            }
            return this.name + ' ' + 'Camacho';
        },
        addNumber: function (){
            this.counter = this.counter + 1;
        },
        removeNumber: function (){
            this.counter = this.counter - 1;
        },
        setName: function (event){
            this.name = event.target.value;
        },
        submitForm: function (){
            alert("It was submitted");
        },
        setConfirmedName: function (){
            this.confirmedName = this.name;
        },
        resetInput: function (){
            this.name = "";
        }
    }
}).mount('#user-goal');