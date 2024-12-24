import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Name Required!"],
        minLength: [3, "must contain at least 3 character!"],
    },
    email:{
        type: String,
        required: [true, "Email Required!"],
        validator: [validator.isEmail, "please provide valid email"],
    },
    subject:{
        type: String,
        required: [true, "Subject Required!"],
        minLength: [5, "subject must contain  at least 5 character!"],
    },
    message:{
        type: String,
        required: [true, "Message Required!"],
        minLength: [10, "Messahe contain at least 10 character!"],
    },
});

export const Message = mongoose.model("Message", messageSchema);