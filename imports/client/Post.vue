<template>
    <div>
        <v-card>
            <v-btn primary dark @click.native="addNew">Add New</v-btn>

            <!--Data table-->
            <v-card-title>
                <v-spacer></v-spacer>
                <v-text-field append-icon="search" label="Search" single-line hide-details v-model="itemsSearch"></v-text-field>
            </v-card-title>
            <v-data-table :headers="headers" :items="items" :search="itemsSearch" :rows-per-page-items="[5, 10, 20, { text: 'All', value: -1 }]">
                <template slot="items" scope="props">
                    <td>
                            <router-link :to="{ name: 'updatePost', params: {id:props.item._id}}">
                                    {{ props.item.title }}
                            </router-link>
                    </td>
                    <td>{{ props.item.type }}</td>
                </template>
            </v-data-table>
        </v-card>

    </div>
</template>

<script>
import _ from 'lodash';
import Posts from '../api/posts/posts';

export default {
    name: 'Post',
    data() {
        return {
            // items: [],
            headers: [
                { text: 'Title', value: 'title', left: true },
                { text: 'Type', value: 'type', left: true }
            ],
            itemsSearch: "",
        }
    },
    meteor: {
       // Subscriptions
       $subscribe: {
         'posts': []
       },
       // post list
       items () {
         return Posts.find({}, {
           sort: {title: -1}
         });
       },
       // // Selected post
       // selectedPost: {
       //   params () {
       //     return {
       //       id: this.selectedPostId
       //     };
       //   },
       //   update ({id}) {
       //     return Posts.findOne(id);
       //   },
       // },
     },
    methods: {
        addNew() {
            this.$router.push({ path: '/post-new' });
        },
    }
}

</script>

<style scoped>

</style>
