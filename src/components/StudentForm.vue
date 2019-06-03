<template>
    <v-form>
      <v-btn fab dark small 
          @click="backToList()"
          color="primary">
          <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-btn fab dark small color="primary"
          @click="confirm()">
          <v-icon>check</v-icon>
      </v-btn>
      <v-container>
        <v-layout>
          <v-flex
              xs12
              md4>
          <v-text-field
              v-model="currentStudent.name"
              :counter="10"
              label="Nome"
              required></v-text-field>
     
            <Date 
              :value.sync="currentStudent.birthDate"
              label="Data nascimento"
              :required="true">
            </Date>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
</template>

<script>
import Date from './Date';

export default {
    components: {
      Date
    },
    data(){
        return{
          
        }
    },
    methods: {
      confirm(){
        this.resource.confirm(this.currentStudent)
          .then(res => this.showSuccessMessage())
          .then(res => this.backToList())
          .catch(err => {
            this.showErrorMessage(err)
          });    
      },
      showSuccessMessage(){
        this.$toasted.show("Salvo com sucesso!", { 
          theme: "bubble", 
          position: "top-right", 
          duration : 5000
        });
      },
      showErrorMessage(erro){
        console.log(erro);
        this.$toasted.show("Ocorreu algum erro: " + erro, { 
          theme: "bubble", 
          position: "top-right", 
          duration : 5000
        });
      }
    },
    props: {
        resource: Object,
        currentStudent: Object,
        backToList: Function
    }
}
</script>

<style>

</style>


