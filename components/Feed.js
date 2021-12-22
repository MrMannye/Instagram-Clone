import Image from "next/image"
import { DotsHorizontalIcon } from "@heroicons/react/outline"

export default function Feed() {
    return (
        <div className="border-2 p-2 mt-6">
            <div className="flex items-center p-2 justify-between">
                <div className="flex items-center">
                    <Image
                            src={"https://instagram.fcvj4-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/268462832_1346939695763683_6748246276847046887_n.jpg?_nc_ht=instagram.fcvj4-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=I1eyaCBtqD4AX_w3G5l&edm=AP_V10EBAAAA&ccb=7-4&oh=00_AT9V-pRyFl22-Te2Wc6197MPqEn37xkt8yHzpiHbVBVdsA&oe=61C9E159&_nc_sid=4f375e"}
                            alt="Imagen de Feed"
                            width={25}
                            height={25}
                            className="rounded-full"
                    />
                    <span className="text-xs ml-2">manu__7u7</span>
                </div>
                <DotsHorizontalIcon className="w-5"/>
            </div>
            <div>

            </div>
            <div>
                <div>

                </div>
                <div>

                </div>
            </div>
        </div>
    )
}
