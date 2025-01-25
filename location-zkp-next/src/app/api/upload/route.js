import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file');

    const pinataFormData = new FormData();
    pinataFormData.append('file', file);

    const response = await axios.post(
      'https://api.pinata.cloud/pinning/pinFileToIPFS',
      pinataFormData,
      {
        headers: {
          'Authorization': `Bearer ${process.env.PINATA_JWT}`,
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    return NextResponse.json({ ipfsHash: response.data.IpfsHash });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}