import * as mongoose from 'mongoose';

export const CrudSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        require: true
    }  
})