<template>
  <div>
    <!--Form-->
    <form ref="form">
      <v-text-field v-model="name" label="Name" :counter="10" :error-messages="errors.collect('name')" v-validate="'required|max:10'" data-vv-name="name" required></v-text-field>
      <v-btn @click="submit">Save</v-btn>
      <v-btn @click="clear">clear</v-btn>
    </form>

  </div>
</template>

<script>
import _ from 'lodash';
import moment from 'moment';
import Posts from '../../api/posts/posts';

export default {
  name: 'Category',
  $validates: true,
  data() {
    return {
      menu: false,
      modal: false,
      //
      name: '',
    }
  },
  methods: {   
    submit() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          alert('From Submitted!');
           Meteor.call('insertStuff', {name:this.name, email:this.email});
            //or
           // Things.insert({name:this.name, email:this.email})
          return;
        }
        alert('Correct them errors!');
      });
    },
    clear() {
      this.name = ''
      this.$validator.reset()
    }
  }
}

</script>

<style scoped>

</style>
