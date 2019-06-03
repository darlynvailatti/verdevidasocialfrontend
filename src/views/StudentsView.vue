<template>
    <v-container>
      <StudentList 
        v-if="!isCreatingOrEditing"
        v-bind:resource="studentResource"
        v-bind:edit="edit"
        v-bind:remove="remove"
        v-bind:create="create"/>
      <StudentForm 
        v-if="isCreatingOrEditing"
        v-bind:resource="studentResource"
        v-bind:currentStudent="currentStudent"
        v-bind:backToList="backToList"/>
    </v-container>
</template>

<script>

import StudentList from '@/components/StudentList';
import StudentForm from '@/components/StudentForm';
import StudentResource  from "@/resources/StudentResource";

export default {
  data(){
    return {
      studentResource: null,
      currentStudent: null,
      isCreatingOrEditing: false
    }
  },
  methods: {
    create(){
      this.isCreatingOrEditing = true;
      this.currentStudent = {
          name: "",
          birthDate: "",
          registerDate: ""
      };
    },
    edit(student) {
      this.currentStudent = student;
      this.isCreatingOrEditing = true;
    },
    remove(student) {
      console.log("Removing student");
    },
    backToList(){
      this.isCreatingOrEditing = false;
      this.currentStudent = null;
    }
  },
  components: {
    StudentList,
    StudentForm
  },
  created(){
    this.studentResource =  new StudentResource();
  }

}
</script>

<style>

</style>


