/* eslint-disable @next/next/no-img-element */
import { DotsHorizontalIcon, HeartIcon, ChatIcon, PaperAirplaneIcon , EmojiHappyIcon, BookmarkIcon} from "@heroicons/react/outline"
import Image from "next/image"

export default function Posts({id, img, user,imgpost, caption}) {
    return (
        <div className="bg-white border-2 dark:bg-black rounded-sm">
            {/* Header */}
            <div className="flex items-center p-4 justify-between">
                <div className="flex items-center">
                    <Image
                            src={img}
                            alt="Imagen de Feed"
                            width={35}
                            height={35}
                            className="rounded-full"
                    />
                    <span className="text-xs ml-2 font-semibold tracking-wider">{user}</span>
                </div>
                <DotsHorizontalIcon className="h-5"/>
            </div>
            {/* Imagen */}
            <Image src={imgpost} width={700} height={600} alt="Imagen de Post" className="object-cover w-full" />

            {/* Buttons */}
            <div className="p-4 flex justify-between">
                <div className="flex space-x-4 items-center">
                    <HeartIcon className="btn"></HeartIcon>
                    <ChatIcon className="btn"></ChatIcon>
                    <PaperAirplaneIcon className="btn"></PaperAirplaneIcon>
                </div>
                <BookmarkIcon className="btn"></BookmarkIcon>
            </div>
            
            <p className="px-4 pb-4 truncate text-[13.5px]">
                <span className="font-semibold mr-2 text-xs hover:underline cursor-pointer">{user}</span>
                {caption}
            </p>

            <form action="" className="px-4 pb-4 pt-2 flex items-center border-t-[1px]">
                <EmojiHappyIcon className="btn"></EmojiHappyIcon>
                <input type="text" placeholder="Añadir un comentario..." className="border-none outline-none flex-[.99] text-sm pl-2"/>
                <button className="text-blue-500 font-semibold">Publicar</button>
            </form>


        </div>
    )
}
