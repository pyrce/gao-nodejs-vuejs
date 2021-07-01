
<template>
<div>
     <v-btn
        color="primary"
        dark
        
        fab
        x-small
        @click.stop="dialog = true"
      >+</v-btn>

 <v-dialog
        v-model="dialog"
      width="500"
      >
        <v-card>
          <v-card-title class="headline">
           Ajout attribution
          </v-card-title>
          <v-autocomplete :loading="loading" :items="clients" :search-input.sync="search" v-model="client" item-text="composed" return-object cache-items hide-no-data hide-details label="Sélection le client">
             </v-autocomplete>
          <v-card-actions class="d-flex flex-column">
            <v-spacer></v-spacer>
<div class="d-flex flex-row">
            <v-btn
              color="green darken-1"
              text
            @click="attribuer"
            >
            Attribuer
            </v-btn>


  <v-btn text color="green darken-1" @click="show = !show">
    ajout client
  </v-btn>
</div>
    <div v-if="show" class="d-flex row" >

    <p class="border col-12 d-flex justify-content-between">
    <label for="name" class="col-4">nom</label>
    <input type="text" name="name" id="nom" style="outline:solid 1px black;" class="form-control col-8" v-model="nom">
  </p>

  <p class="border col-12 d-flex justify-content-between">
    <label for="age" class="col-4">prenom</label>
    <input type="text" name="age" id="prenom" style="outline:solid 1px black;" class="form-control col-8" v-model="prenom">
  </p>
            <v-btn
              color="green darken-1"
              text
            @click="addClient"
            >
            Ajouter
            </v-btn>

  </div>

          </v-card-actions>
        </v-card>
      </v-dialog>
</div>
</template>

<script src="https://kit.fontawesome.com/e2a4bb1024.js" crossorigin="anonymous"></script>
<script src="./addAttribution.js"></script>