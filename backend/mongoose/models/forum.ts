import mongoose from 'mongoose';

// schema for discussion forum component
const forumSchema = new mongoose.Schema(
  {
    shgid: {
      type: String,
      immutable: true,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      immutable: true,
      required: true,
    },
    imgUri: {
      data: Buffer,
      contentType: String,
    },
    location: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.forum || mongoose.model('forum', forumSchema);
