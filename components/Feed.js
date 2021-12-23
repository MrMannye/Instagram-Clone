import Image from "next/image"
import Posts from "./Posts"

export default function Feed() {

    const DATA = [
        {
            id: "1",
            username: "manu__7u7",
            userImg: "https://instagram.fcvj4-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/268462832_1346939695763683_6748246276847046887_n.jpg?_nc_ht=instagram.fcvj4-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=I1eyaCBtqD4AX_w3G5l&edm=AP_V10EBAAAA&ccb=7-4&oh=00_AT9V-pRyFl22-Te2Wc6197MPqEn37xkt8yHzpiHbVBVdsA&oe=61C9E159&_nc_sid=4f375e",
            caption: "Hola como estan mi amores del alma, esta es un post de mi Instagram Clone",
            postImg: "https://instagram.fcvj4-1.fna.fbcdn.net/v/t51.2885-15/e35/269717824_1054611815330395_1370538568632693371_n.jpg?_nc_ht=instagram.fcvj4-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=Tr1lrTdYSCUAX8Jxptf&edm=AIQHJ4wBAAAA&ccb=7-4&ig_cache_key=MjczMzIxMzAzMjEyMjcxMDc1Mw%3D%3D.2-ccb7-4&oh=00_AT8eFwZ5NoXMd-tw5wygqDO_1N61rvHatIRCXDAulQlngw&oe=61CA1F68&_nc_sid=7b02f1"
        },
        {
            id: "2",
            username: "manu__7u7",
            userImg: "https://instagram.fcvj4-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/268462832_1346939695763683_6748246276847046887_n.jpg?_nc_ht=instagram.fcvj4-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=I1eyaCBtqD4AX_w3G5l&edm=AP_V10EBAAAA&ccb=7-4&oh=00_AT9V-pRyFl22-Te2Wc6197MPqEn37xkt8yHzpiHbVBVdsA&oe=61C9E159&_nc_sid=4f375e",
            caption: "Hola como estan mi amores del alma, esta es un post de mi Instagram Clone",
            postImg: "https://instagram.fcvj4-1.fna.fbcdn.net/v/t51.2885-15/e35/269935016_721928508768279_108042008992533842_n.jpg?_nc_ht=instagram.fcvj4-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=nVXoBU_xessAX9Nne7e&edm=AJ9x6zYBAAAA&ccb=7-4&ig_cache_key=MjczNDUxOTQ0MzQzOTEyNDgwOA%3D%3D.2-ccb7-4&oh=00_AT8i9z6oNfeYYsILIQxt9mBggXzEJaAMBPqFQahB_oJo9Q&oe=61C9FD3E&_nc_sid=cff2a4"
        }
    ]   

    return (
        <div className="my-4 space-y-6">
            {DATA.map((item) => {
                return(
                    <Posts key={item.id} img={item.userImg} imgpost={item.postImg} user={item.username} caption={item.caption}></Posts>
                )
            })}
        </div>
    )
}
