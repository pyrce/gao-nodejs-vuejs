<template>
<div>
     <v-btn
        color="primary"
        dark
        @click.stop="dialog = true"
      >
        ajouter poste
      </v-btn>

 <v-dialog
        v-model="dialog"
        max-width="290"
      >
        <v-card>
          <v-card-title class="headline">
           Ajout d'un ordinateur
          </v-card-title>
  
       <input placeholder="nom poste" v-model="nomPoste" v-on:input="checkadd">

  
          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
              color="green darken-1"
              text
              @click="addPoste" :disabled="isActive"
            >
              Ajout
            </v-btn>

          </v-card-actions>
        </v-card>
      </v-dialog>
</div>
</template>
<script src="../views/addPosteModal.js"></script>