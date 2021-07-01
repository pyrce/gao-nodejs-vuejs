//const { defaults } = require("lodash");
import Axios from 'axios';

export default {
    name:"addPosteModal",
    event:"recharge",
    data () {
        return {
          dialog: false,nomPoste:"",isActive:true,form:{}
        }
      },
mounted(){
   
},
methods:{
    checkadd(){
        
if(this.nomPoste.length>1){
    this.activeToggle();
 
  // activeToggle();
}
    },activeToggle(){
      
         this.isActive=false;   
    },addPoste(){
    
        this.form.nomPoste=this.nomPoste;
       Axios.post("http://localhost:3000/postes/add",this.form).then(({data})=>{ 
          if(data.length>0){ 
   
              this.dialog=false;   
             this.$emit("recharge-vue");
        
          }
       });
    }
    
}
  

}