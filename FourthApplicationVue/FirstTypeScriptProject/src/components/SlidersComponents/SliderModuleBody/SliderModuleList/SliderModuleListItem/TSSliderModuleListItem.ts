import { defineComponent } from "vue";
import router from '../../../../../router/index.ts';

export default defineComponent({
    props: {
        content: String,
        redirectProp: String
    },
    data: function(){
        return {
            isNative: this.redirectProp == window.location.pathname.replace("/", "").toLocaleLowerCase()
        };
    },
    methods: {
        redirectTo: function(){
            if(!this.isNative){
                document.querySelector(".modal-backdrop").className = "";
                router.push({"name": this.redirectProp});
            }
        }
    }
});