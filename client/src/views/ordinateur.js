import _ from 'lodash';
import attributions from "../components/attributions.vue";
import addAttribution from "../components/addAttribution.vue";
import RemoveAttribution from "../components/RemoveAttribution.vue";
export default {
    name:"ordinateur",data(){ return{ horaires:{}} },
    props: {
        ordinateur: {
            default: function() {
                return {}
            }
        },date:{
            default: function () {
                return {}
            }
        },attributions:{
            default: function () {
                return {}
            }
        }
    },created(){
        this.initialise();
    } ,methods:{
        affiche(){
            console.log("date:"+this.date);
            
        },
recharger:function(){
    this.$emit('rechargerVue')
},
        initialise() { 
          
            this.ordinateur.attributions.forEach(attribution => {
       
                this.attributions[attribution.heure] = {
                    id:attribution.id,
                    nomClient:  attribution.client.nomClient,
                    prenomClient: attribution.client.prenomClient,
                };
            });
            this.buildHoraires();
        },
        buildHoraires() {

            this.horaires = [];

            for (let i = 0; i < 10; i++) {
                this.horaires.push({
                    index: i + 8,
                    attribution: (typeof this.attributions[i + 8] !== 'undefined') ? this.attributions[i + 8] : false
                })
            }


        },   addAttribution: function () {
            console.log("reloading");
            this.$emit('reload')
        },removeAttribution: function(horaire){
            _.unset(this.attributions,horaire)
            this.buildHoraires();
        }
    },
    components:{attributions,addAttribution,RemoveAttribution}
}