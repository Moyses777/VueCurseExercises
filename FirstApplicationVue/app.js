/*const buttonEl = document.querySelector('button');
const inputEl = document.querySelector('input');
const listEl = document.querySelector('ul');

buttonEl.addEventListener("click", () => {
    const enteredValue = inputEl.value;
    const listItemEl = document.createElement('li');
    listItemEl.textContent = enteredValue;
    listEl.appendChild(listItemEl);
    inputEl.value = null;
}); */

Vue.createApp({
    data: function() {
        return {
            goals: [],
            enteredValue: null
        }
    },
    methods: {
        addGoal: function() {
            if (this.enteredValue != null){
                this.goals.push(this.enteredValue);
                this.enteredValue = null;
            }
        }
    }
}).mount("#app");