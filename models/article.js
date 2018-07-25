const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    name:string,
    url:string,
    id:number,
    
})