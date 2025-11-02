import ImageKit,{toFile} from "@imagekit/nodejs";

const client = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

async function uploadFile(file, fileName) {
  try {
    const result = await client.files.upload({
      file: await toFile(file.buffer, file.originalname),
      fileName: fileName,
    });

    return result; 
  } catch (error) {
    console.error("ImageKit Upload Error:", error);
    throw error;
  }
}

export default{ uploadFile };
