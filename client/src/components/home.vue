<template>

    <v-container>
      <div style="background-color:darkcyan;" class="col-12 d-flex justify-content-center">
        <h1>Gestion attribution</h1>
      </div>
      <v-date-picker elevation="15" v-model="date" width="290" locale="fr-fr" @change="setDate"></v-date-picker>
        <!-- event to get new desktop info from child component -->
       <addPosteModal   />
     <v-row>
<v-col md="1" v-for="(p,i) in total" :key="i">
     <v-btn
        class="mx-2"
        fab
        dark
        small
        @click="initialize(p)"
        color="primary"
      >
        <v-icon dark>
         {{ p }}
        </v-icon>
      </v-btn>
    </v-col>
         </v-row>
        <v-row @reload="initialize"  >
            <v-col md='4' v-for='(ordinateur,key) in listepostes' :key='key'>
                <ordinateur :ordinateur="ordinateur" :date="date" @rechargerVue="initialize"> </ordinateur>
            </v-col>
        </v-row>

    </v-container>
</template>

<script src="../views/home.js"></script>
