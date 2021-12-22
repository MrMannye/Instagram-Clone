import Image from "next/image"

export default function Storie({user, image}) {
    return (
        <div className="flex flex-col items-center text-xs m-2">
            <Image src={image}
            alt="Imagen Historia"
            width={55}
            height={55}
            className="rounded-full"
            />
            <p className="px-2 py-1">{user}</p>
        </div>
    )
}
