import mongoose from "mongoose";

// const options = {
//   autoIndex: false, // don't build indexes
//   maxPoolSize: 10, // maintain up to 10 socket connections
//   serverSelectionTimeoutMS: 5000, //keep trying to send operations for 5
//   socketTimeoutMS: 45000, // close sockets after 45 seconds of inactivity
//   family: 4, // use IPv4, skip trying IPv6
// };

const localDBName = "trip-logger";
const { MONGODB_URI = `mongodb://127.0.0.1/${localDBName}` } = process.env;

console.log(`MONGODB_URI ${MONGODB_URI}`);

const options = {};

try {
  await mongoose.connect(MONGODB_URI, options);
} catch (error) {
  console.log(error);
}

mongoose.connection.on("error", (err) => {
  console.log(err);
});
