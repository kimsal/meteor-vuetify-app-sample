<template>
  <div>
    <!--Form-->
    <form ref="form">
      <v-text-field v-model="title" label="Title" :counter="10" :error-messages="errors.collect('title')" v-validate="'required|max:1000'" data-vv-name="title" required></v-text-field>

       <v-text-field v-model="body" label="Body" :counter="10" :error-messages="errors.collect('body')" data-vv-name="body" required></v-text-field>

        <v-text-field v-model="type" label="Type" :counter="10" :error-messages="errors.collect('type')" v-validate="'required|max:100'" data-vv-name="type" required></v-text-field>
      <v-btn @click="submit">submit</v-btn>
      <v-btn @click="clear">clear</v-btn>
    </form>
  </div>
</template>

<script>
import _ from 'lodash';
import moment from 'moment';
import Posts from '../api/posts/posts';

export default {
  name: 'PostNew',
  $validates: true,
  data() {
    return {
      // picker
      formatted:true,
      menu: false,
      modal: false,
      //
      title: '',
      body: '',
      type:'',
    }
  },
  methods: {
    submit() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          //update here

          this.$router.push({ path: '/post' });
          return;
        }
        alert('Correct them errors!');
      });
    },
    clear() {
      this.title = '';
      this.body = '';
      this.type = '';
      this.$validator.reset()
    }
  }
}

</script>

<style scoped>

</style>
