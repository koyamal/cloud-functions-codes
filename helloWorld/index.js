import functions from '@google-cloud/functions-framework'
import dotenv from 'dotenv';

dotenv.config();
const projectId = process.env.GCP_PROJECT;

// Register an HTTP function with the Functions Framework that will be executed
// when you make an HTTP request to the deployed function's endpoint.
functions.http('entryPoint', (req, res) => {
  res.send('Hello World!');
});
