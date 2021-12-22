import Image from "next/image"

export default function Storie({id,user, img}) {
    return (
        <div className="flex flex-col items-center text-xs m-2">
            <Image src={img}
            alt="Imagen Historia"
            width={55}
            height={55}
            loading="lazy"
            className="rounded-full"
            />
            <p className="px-2 py-1">{user}</p>
        </div>
    )
}
