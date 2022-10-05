const { createApp } = Vue;

createApp({
    data: function (){
        return {
            boxASelected: false,
            BoxBSelected: false,
            boxCSelected: false
        };
    },
    methods: {
        boxSelected: function(box){
            if (box === 'A'){
                if (this.boxASelected === true) this.boxASelected = false;
                else this.boxASelected = true; 
            }else if (box === 'B'){
                if (this.BoxBSelected === true) this.BoxBSelected = false;
                else this.BoxBSelected = true;
            }else if (box === 'C'){
                if (this.boxCSelected === true) this.boxCSelected = false;
                else this.boxCSelected = true;
            }
        }
    }
}).mount('#Styling');