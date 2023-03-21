const {createApp} = Vue;

createApp({
    data(){
        return {
            emailList: [], 
        }
    },
    methods: {

    },
    created(){
        for(let i = 0; i<10; i++){
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((response)=>{
                const result = response.data;
                this.emailList.push(result);
                console.log(this.emailList); // move inside the .then block
            })
        }
    }
}).mount('#app');
