import {Document} from 'mongoose';

export default interface Userinfo extends Document{
    name:string,
    email:string,
    picture:string,
    accessToken:string,
    php:number,
    js:number,
    python:number
}