// import e from 'express';
import { Document, Schema, Types, ObjectId } from 'mongoose';

interface IReaction extends Document {
    reactionId: ObjectId;
    reactionBody: string;
    username: string;
    createdAt: Date;
}

const reactionSchema = new Schema<IReaction>({
    reactionId: {
        type: Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maxLength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        // get: (createdAtVal: Date): string => {
        //     return createdAtVal.toDateString();
        // }
    }
}, {
    timestamps: true,
    toJSON: {
        getters: true,
        virtuals: true
    },
    id: false
});

export default reactionSchema;
