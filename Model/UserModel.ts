import mongoose, { Schema } from 'mongoose';
import User from '../Interfaces/UserInterfaces';

const UserSchema: Schema = new Schema({
    userid:{
        type:String,
        required:true
    },
    name: {
        type: String,
        unique: true,

    },
    email: {
        type: String,
        unique: true
    },
    picture: {
        type: String
    },
    accessToken: {
        type: String
    },
    php:{
        type:Number,
        default:0
    },
    js:{
        type:Number,
        default:0
    },
    python:{
        type:Number,
        default:0
    },
}, {
    timestamps: true
})
export default mongoose.model<User>("User", UserSchema)