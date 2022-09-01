// seperate index, this is the file that runs in production.
import * as url from "url";
import "dotenv/config";

import app from "./server.js";

const { PORT = 4000 } = process.env;

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
global.__basedir = __dirname; // Make a reference to your project's base directory
// const yourModule = require(__basedir + '/path/to/module.js');
// import yourModule from `${__basedir}/path/to/module.js`
//or use https://github.com/sindresorhus/pkg-dir

const server = app.listen(PORT, () => {
  console.log;
});

// things can happen to the process eg. unhandled rejection

// error we didn't catch
process.on("uncaughtException", (err) => {
  console.log(err);
  // attempt a graceful shutdown
  server.close(() => {
    process.exit(1); // then exit
  });
  // if a graceful shutdown is not achieved after 1 second,
  // shut down the process completely
  setTimeout(() => {
    process.abort(); // exit immediately and generate a core dump file
  }, 1000).unref();
});
