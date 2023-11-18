export const print=(message) => log(message, new Date())
export const log=(message, timestamp) => console.log(`${timestamp.toString()}: ${message}`)

/* You can still use these modules with Babel and
webpack. With CommonJS, JavaScript objects are exported using module.exports.
For example, in CommonJS*/

module.exports = {print, log};