import axios from 'axios';
import _ from 'lodash';

export default {
    props: {
        ordinateur: {
            required: true
        },
        horaire: {
            required: true
        },
        attribution: {
            required: true
        },
    },
    data() {
        return {
            dialog: false,
        }
    },created(){
  
    },
    methods: {

        supprimer: function () {

            axios.delete('/api/attributions/' + this.attribution.id)
                .then(({ data }) => {
                    this.$emit('removeAttribution', this.horaire)
                    this.dialog = false
                })
                .catch(error => {
                    //TODO catch error
                    console.log(error);
                });

        },
    }
}