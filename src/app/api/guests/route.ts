import { CosmosClient } from '@azure/cosmos'
 import { NextRequest, NextResponse } from 'next/server';
 import { Buffer } from 'buffer';

const endpoint = process.env.COSMOS_DB_ENDPOINT!
const key = process.env.COSMOS_DB_KEY!
const databaseId = 'foreverbloom'
const containerId = 'guests'

const client = new CosmosClient({ endpoint, key })

export async function GET(request: NextRequest) {
  let id = request.nextUrl.searchParams.get('id')

  if (!id) {
    return NextResponse.json({ error: 'ID is required' }, { status: 400 })
  }

  // Decodificar el ID si su longitud es mayor a 1 (asumiendo que es base64)
  if (id.length > 1) {
    try {
      id = Buffer.from(id, 'base64').toString('utf8');
    } catch (e) {
      console.error('Error decoding ID:', e);
      return NextResponse.json({ error: 'Invalid ID format' }, { status: 400 });
    }
  }

  try {
    const database = client.database(databaseId)
    const container = database.container(containerId)

    const querySpec = {
      query: 'SELECT * from c WHERE c.id = @id',
      parameters: [{ name: '@id', value: id }]
    }

    console.log('Received ID:', id);

    const { resources: items } = await container.items.query(querySpec).fetchAll()

    if (items.length > 0) {
      return NextResponse.json(items[0])
    } else {
      return NextResponse.json(null)
    }
  } catch (error) {
    console.error('Error checking guest existence:', error)
    return NextResponse.json({ error: 'Error checking guest existence' }, { status: 500 })
  }
}