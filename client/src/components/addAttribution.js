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
        date: {
            required: true
        },
       
    },
    components: {
    },
    data() {
        return {
            nom: '',
            prenom: '',
            ajouter: false,
            client: {},
            dialog: false,
            show: false,
            //
            loading: false,
            search: null,
            clients: [],
        }
    },

    created() {
    },

    watch: {

        search: function (val) {
            if (val && val.length >= 3) {

                this.loading = true
                axios.get('http://localhost:3000/users',  { nomClient: val } )
                    .then(({ data }) => {
                        this.loading = false;
                        data.forEach(client => {
                            this.clients.push(this.formattedClient(client))
                        });

                    });
            }
        },
    },
    methods: {
        init: function () {
            this.nom = ''
            this.prenom = ''
            this.ajouter = false
            this.client = {}
        },
        attribuer: function () {

           if (this.isValid()) {
                axios.post('http://localhost:3000/attribution/attribuer', this.theClient())
                    .then((  ) => {
                        this.$emit('recharge-vue')
                        this.dialog = false
                    })
                    .catch(error => {
                        //TODO catch error
                        console.log(error);
                    });
            }

        },
        addClient:function(){
            axios.post('http://localhost:3000/clients/ajout', this.theClient())
            .then((  ) => {
               this.$emit('rechargerVue')
                this.dialog = false
            })
            .catch(error => {
                //TODO catch error
                console.log(error);
            });
        },
        theClient: function () {
            return {

                posteId: this.ordinateur.id,
                jour: this.date,
                heure: this.horaire,
                clientId: _.isNumber(this.client.id) ? this.client.id : '',
                nom: this.nom,
                prenom: this.prenom,

            };
        },
        formattedClient: function (client) {
            return {
                id: client.id,
                nom: client.nomClient,
                prenom: client.prenomClient,
                composed: client.nomClient + " " + client.prenomClient
            }
        },
        isValid() {
            return !_.isEmpty(this.client) || (!_.isEmpty(this.nom) && !_.isEmpty(this.prenom))
        },
    },

    computed: {
        validate() {
            return this.isValid()
        }
    }
}