import { Schema, Document, ObjectId, model } from "mongoose";
import Reaction from "./Reaction";

interface IThought extends Document {
    thoughtText: string;
    createdAt: Date;
    username: string;
    reactions: typeof Reaction[];
}

const thoughtSchema = new Schema<IThought>({
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        // get: (createdAtVal: Date): string => {
        //     return createdAtVal.toDateString();
        // }
    },
    username: {
        type: String,
        required: true
    },
    reactions: [Reaction]
}, {
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
});

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);

export default Thought;