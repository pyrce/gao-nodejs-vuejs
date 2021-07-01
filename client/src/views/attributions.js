
export default {
    name:"attributions",
    props: {
        client: {
            default: function() {
                return {}
            }
        },listeattributions:{
            default: function () {
                return {}
            }
        },
        poste: {
            default: function () {
                return {}
            }
        },
        heure:{
            default: function () {
                return {}
            }
        },jour :{
            default: function () {
                return {}
            }
        }
    },computed:{
        init(){
        console.log(this.listeattributions);
  } 
 },methods:{
            initialize(){


            }
    },
    components:{}
}