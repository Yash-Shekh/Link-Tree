export const dynamic = "force-dynamic";
import Link from "next/link"
import clientPromise from "@/lib/MongoDb"

export default async function Page({ params }) {
    const { handle } = await params;
    const client = await clientPromise;
    const db = client.db("LinkTree")
    const collection = db.collection("links")

    const item = await collection.findOne({ handle: handle })

    // const item2 = {
    //     "handle": "yash",
    //     "pic": "https://1000logos.net/wp-content/uploads/2017/02/Instagram-Logo.png",
    //     "links": [
    //         {
    //             "link": "Instagram ",
    //             "linktext": "Instagram "
    //         },
    //         {
    //             "link": "facebook",
    //             "linktext": "facebook"
    //         }
    //     ]
    // }

    return <div className="bg-purple-500 min-h-screen flex justify-center items-start py-20">
        {item && <div className="flex flex-col justify-center items-center gap-4">

            {/* <img className="w-40" src={item.pic} alt="" /> */}
            <img className="w-40 rounded-full" src="/Rishabh's.jpg" alt="" />
            <span className="text-xl font-bold">@{item.handle}</span>

            <span className="w-75 text-center text-md">{item.desc}</span>

            <div className="flex flex-col gap-4 my-4 w-75 text-center">
                {item.links.map((item, index) => {
                    return <Link href={item.link}><div className="bg-white rounded-md text-black text-lg font-semibold px-5 py-2">{item.linktext}</div></Link>
                })}
            </div>
        </div>}

    </div>
}