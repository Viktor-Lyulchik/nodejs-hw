import mongoose from 'mongoose';
import { env } from '../utils/env.js';

export const connectMongoDB = async () => {
  try {
    const mongoUrl = env('MONGO_URL');
    await mongoose.connect(mongoUrl);
    // await mongoose.syncIndexes();
    console.log('✅ MongoDB connection established successfully');
  } catch (error) {
    console.error('❌ Failed to connect to MongoDB:', error.message);
    process.exit(1);
  }
};
