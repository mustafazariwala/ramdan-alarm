require('dotenv').config()


const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_TOKEN;

const client = require("twilio")(accountSid, authToken);

client.calls.create({
  url: "http://demo.twilio.com/docs/voice.xml",
  to: "+61493159415",
  from: "+61880040204",
})
.then(call => console.log(call.sid));