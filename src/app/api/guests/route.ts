import { NextResponse, NextRequest } from 'next/server'
import { CosmosClient } from '@azure/cosmos'

const endpoint = process.env.COSMOS_DB_ENDPOINT!
const key = process.env.COSMOS_DB_KEY!
const databaseId = 'foreverbloom'
const containerId = 'guests'

const client = new CosmosClient({ endpoint, key })

export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get('id')

  if (!id) {
    return NextResponse.json({ error: 'ID is required' }, { status: 400 })
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