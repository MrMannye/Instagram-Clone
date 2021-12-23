/* eslint-disable @next/next/no-img-element */
import Image from "next/image"

export default function MiniProfile() {
    return (
        <div className="flex items-center justify-between ml-10 m-2 w-full">

            <div className="flex items-center space-x-4">
                <Image
                    src="https://instagram.fcvj4-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/268462832_1346939695763683_6748246276847046887_n.jpg?_nc_ht=instagram.fcvj4-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=I1eyaCBtqD4AX_w3G5l&edm=AP_V10EBAAAA&ccb=7-4&oh=00_AT9V-pRyFl22-Te2Wc6197MPqEn37xkt8yHzpiHbVBVdsA&oe=61C9E159&_nc_sid=4f375e"
                    width={60}
                    height={60}
                    alt="Hola"
                    className="rounded-full object-fill cursor-pointer" />
                <div className="">
                    <h2 className=" font-semibold text-xs cursor-pointer">manu__7u7</h2>
                    <h4 className=" text-gray-500 text-sm">Miguel Aguilera</h4>
                </div>
            </div>


            <button className="text-sm text-blue-400 font-semibold">Cambiar</button>
        </div>
    )
}
