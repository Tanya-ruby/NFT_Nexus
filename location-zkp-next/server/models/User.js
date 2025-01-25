const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
    {
        address: {
            type: String,
            required: true,
        },
        hackthone: [
            {
                hash: {
                    type: String,
                    required: true,
                    unique: true,
                    index: true,
                },
                nft: {
                    type: String,
                    unique: true,
                },
            },
        ],
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model("User", userSchema);

module.exports = User; 
