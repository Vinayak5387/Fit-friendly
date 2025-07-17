import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Client from '@/models/Client';

export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    
    const data = await request.json();
    
    const client = new Client({
      name: data.name,
      lastName: data.lastName,
      phoneNumber: data.phoneNumber,
      age: data.age,
      city: data.city,
      height: data.height,
      weight: data.weight,
    });
    
    await client.save();
    
    return NextResponse.json({ 
      success: true, 
      message: 'Client registered successfully',
      client: {
        id: client._id,
        name: client.name,
        lastName: client.lastName,
      }
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return NextResponse.json(
      { success: false, message: errorMessage },
      { status: 400 }
    );
  }
}

export async function GET() {
  try {
    await dbConnect();
    
    const clients = await Client.find({}).sort({ createdAt: -1 });
    
    return NextResponse.json({ 
      success: true, 
      clients 
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return NextResponse.json(
      { success: false, message: errorMessage },
      { status: 500 }
    );
  }
}
