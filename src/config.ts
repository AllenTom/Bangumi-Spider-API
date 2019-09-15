export const applicationConfig = {
    mongoAddress: process.env.MONGO_ADDRESS || "mongodb://localhost:27017/bangumi",
    mongoUsername: process.env.MONGO_USERNAME || "",
    mongoPassword: process.env.MONGO_PASSWORD || "",
    port: process.env.PORT || 8990,
};