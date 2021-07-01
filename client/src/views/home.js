//const { defaults } = require("lodash");
import Axios from 'axios';
import ordinateur from './ordinateur.vue';
import addPosteModal from '../components/addPosteModal.vue';
//import _ from 'lodash';
export default {
name:"home",
 data(){
 return{
     listepostes:[],
     dialog:false,
     disabled:false,
     jour:"", 
     total:0,
     date: new Date().toISOString().substr(0, 10),
     listeattributions:{},
      headers : {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*'
    }

    }
 },
    components: { ordinateur,addPosteModal },
    created(){
        console.log("composant home");
        
  
        this.initialize();
           
    },
    methods:{
        initialize(page){
                console.log(page);
                            this.listepostes=[]
                  Axios.post("http://localhost:3000/postes", { date: this.date,headers:this.headers,page:page} ).then(({ data })=>{
               //console.log(data);
                        this.listepostes=data.postes
                        this.total=data.total
                        this.page=data.page
        })


        },
        setDate(date){
           //  console.log(date)
           //this.$set(this.done,0,date);
            this.date=date;

           //this.$emit("reload-attr", this.listeattributions);
           this.initialize(this.page);
        }, addAttribution: function (attribution) {
            console.log("aading attribution");
            this.ordinateur.attributions.push(attribution);
      
            this.initialise();
        }
    }
};
