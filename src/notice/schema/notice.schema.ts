import * as mongoose from 'mongoose';

export const NoticeModel = new mongoose.Schema({
    story_title : String,
    title: String,
    author: String,
    story_url: String,
    url: String,
    created_at: Date,
    objectID: String,
    isRemoved: Boolean 
})