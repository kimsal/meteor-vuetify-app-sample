import {Mongo} from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const Posts = new Mongo.Collection('posts');

Posts.schema = new SimpleSchema({
    title: {
        type: String,
        // optional: true
    },
    body: {
        type: String,
        // optional: true
    },
    type: {
        type: String,
        // optional: true
    }
    // ,
    // publishedDate: {
    //     type: Date
    // }
});

Posts.attachSchema(Posts.schema);

// Posts.insert({title: "test", body: "test", type: ""});
export default Posts;
