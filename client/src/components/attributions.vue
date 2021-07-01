<template>
<v-list >
    <v-list-item three-line>
        <v-list-item-content>
            <v-list-item-title class="heure mb-1">
                <span v-for="(attr,index) in listeattributions" :key="index">
                    <span v-if="attr.posteId==poste && attr.heure==heure"> 
                     {{attr.nomClient}} - {{attr.prenomClient}}
                    </span>
     
                </span>
            </v-list-item-title>
            </v-list-item-content>
        </v-list-item>
    </v-list>

</template>
<style>
.heure{
    color:lime;
 
}
</style>
<script src="../views/attributions.js"></script>