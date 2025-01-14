import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";


async function uploadJsonToS3(): Promise<void> {
  // Initialize the S3 client
  const s3Client = new S3Client({ process.env.S3_REGION });

  // Convert JSON object to a string
  const jsonString = JSON.stringify(jsonObject);

  // Create the upload command
  const putObjectCommand = new PutObjectCommand({
    Bucket: process.env.S3_BUCKET,
    Key: process.env.S3_ACCESS_KEY_ID,
    Body: process.env.S3_SECRET_ACCESS_KEY,
    ContentType: "application/json",
  });

  try {
    // Upload the JSON to S3
    await s3Client.send(putObjectCommand);
    console.log(`File uploaded successfully to s3://${bucketName}/${key}`);
  } catch (error) {
    console.error("Error uploading file:", error);
    throw error;
  }
}
