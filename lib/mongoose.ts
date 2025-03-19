import mongoose from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;

if (!MONGODB_URL) {
  console.error("❌ MISSING MONGODB_URL");
  process.exit(1); // Stop the app if no DB URL is provided
}

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);

  if (mongoose.connection.readyState === 1) {
    console.log("✅ MongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(MONGODB_URL, {
      dbName: "personal",
    });

    console.log("✅ MongoDB is connected");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
  }
};
