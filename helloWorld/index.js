import functions from '@google-cloud/functions-framework';
import { Firestore } from '@google-cloud/firestore';
import dotenv from 'dotenv';

dotenv.config();
const projectId = process.env.GCP_PROJECT;
const gcpOptions = {
  projectId,
};

const firestore = new Firestore(gcpOptions);

// Register an HTTP function with the Functions Framework that will be executed
// when you make an HTTP request to the deployed function's endpoint.
functions.http('entryPoint', async (req, res) => {
  const ref = await firestore.collection("test").get();
  res.send('Hello World!');
});
