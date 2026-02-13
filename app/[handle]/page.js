export const dynamic = "force-dynamic";
import Link from "next/link"
import clientPromise from "@/lib/MongoDb"
import CopyUrlButton from "@/components/CopyUrlButton";

export default async function Page({ params }) {
    const { handle } = await params;
    const client = await clientPromise;
    const db = client.db("LinkTree")
    const collection = db.collection("links")

    const item = await collection.findOne({ handle: handle })

    return <div className="bg-purple-500 min-h-screen flex justify-center items-start py-20">
        {item && <div className="flex flex-col justify-center items-center gap-4">

            {/* if item.pic is empty show public/default-profile-pic.png */}
            < img className="w-40 rounded-full" src={ item.pic || "/default-profile-pic.png"} alt="" />
            {/* <img className="w-40 rounded-full" src={item.pic || "public/default-profile-pic.png"} alt="" /> */}
            <span className="text-xl font-bold">@{item.handle}</span>

            <span className="w-75 text-center text-md">{item.desc}</span>

            <CopyUrlButton />

            <Link href="/"><button className="bg-white text-black px-4 py-2 rounded-full font-semibold">Back to Home</button></Link>

            <div className="flex flex-col gap-4 my-4 w-75 text-center">
                {item.links.map((item, index) => {
                    return <Link key={index} href={item.link}><div className="bg-white rounded-md text-black text-lg font-semibold px-5 py-2">{item.linktext}</div></Link>
                })}
            </div>
        </div>}

    </div>
}