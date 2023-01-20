import path from "path";
import fs from "fs";

function buildPath() {
  return path.join(process.cwd, "data", "data.json");
}

function extractData(filePath) {
  const jsonData = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData);
  return data;
}

export default function handler(req, res) {
  const { method } = req;

  // access data
  // extract data (AllEvents)
  // res 404 if there are no AllEvents
  // AllEvents - loop through them and idnetify the EventID
  // add the email into emails-registered - write data
  // only if that email doesn't exist
  // check if the format of the email is okay

  const filePath = buildPath();
  const data = extractData(filePath);
  if (method === "POST") {
    //we add our code here
    const { email, eventId } = req.body;

    res.status(200).json({
      message: `You have successfully registered with the email: ${email} ${eventId}`,
    });
  }
}
