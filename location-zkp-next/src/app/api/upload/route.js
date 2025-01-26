import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request) {
  try {
    const formData = await request.formData();
    const name = formData.get('name');
    const description = formData.get('description');
    const githubLink = formData.get('githubLink');

    // Combine text fields into a JSON object
    const dataToUpload = {
      name,
      description,
      githubLink,
    };
    const jsonBlob = new Blob([JSON.stringify(dataToUpload)], { type: 'application/json' });

    const pinataFormData = new FormData();
    pinataFormData.append('file', jsonBlob, 'project-details.json'); // Upload JSON as a file

    const response = await axios.post(
      'https://api.pinata.cloud/pinning/pinFileToIPFS',
      pinataFormData,
      {
        headers: {
          Authorization: `Bearer ${process.env.PINATA_JWT}`,
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    return NextResponse.json({ ipfsHash: response.data.IpfsHash });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
