const app = Vue.createApp({
    data() {
        return {
            presentation: false,
            welcome:true,
           team:false,
           designPatterns:false,

        }
    },
    created() {
       
    },
    methods: {
        mostrarWelcome(e){
            console.log(e);
            this.welcome=true;
            this.presentation=false;
            this.team=fase
            this.designPatterns=false;

        },
        mostrarPresentation(e){
            console.log(e);
            this.welcome=false;
            this.presentation=true;
            this.team=false;
            this.designPatterns=false;

        },
        mostrarTeam(e){
            console.log(e);
            this.welcome=false;
            this.presentation=false;
            this.team=true;
            this.designPatterns=false;
        },
        mostrarDesignPatterns(e){
            console.log(e);
            this.welcome=false;
            this.presentation=false;
            this.team=false;
            this.designPatterns=true
        }  
    },

})
let consol = app.mount("#app")

