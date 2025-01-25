import mongoose, {Schema} from "mongoose";

const userSchema = new Schema(
    {
        address:{
            type:String,
            required:true,
        },        
        hackthone: [
            {
                hash: {
                    type: String,
                    required: true,
                    unique: true,
                    index: true
                },
                nft: {
                    type: String,
                    unique: true,
                }
            }

        ]
    
    },
    {
        timestamps: true
    }
)

export const User = mongoose.model("User", userSchema)