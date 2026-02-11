import clientPromise from "@/lib/MongoDb"

export async function POST(requst) {
  const body = await requst.json()
  const client = await clientPromise;
  const db = client.db("LinkTree")
  const collection = db.collection("links")

  // if the handle is already claimed, you cannot create this link tree

  const doc = await collection.findOne({handle: body.handle})

  if (doc){
    return Response.json({ success: false, error: true, message: 'This handle name already used..!', result: null})
  }

  const result = await collection.insertOne(body)
  console.log(body)
  return Response.json({ message: 'Your Links are Added', success: true, error: false, result: result })
}