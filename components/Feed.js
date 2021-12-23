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
            username: "anahy_hk",
            userImg: "https://instagram.fcvj4-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/268462832_1346939695763683_6748246276847046887_n.jpg?_nc_ht=instagram.fcvj4-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=I1eyaCBtqD4AX_w3G5l&edm=AP_V10EBAAAA&ccb=7-4&oh=00_AT9V-pRyFl22-Te2Wc6197MPqEn37xkt8yHzpiHbVBVdsA&oe=61C9E159&_nc_sid=4f375e",
            caption: "Hola como estan mi amores del alma, esta es un post de mi Instagram Clone",
            postImg: "https://instagram.fcvj4-1.fna.fbcdn.net/v/t51.2885-15/e35/269935016_721928508768279_108042008992533842_n.jpg?_nc_ht=instagram.fcvj4-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=nVXoBU_xessAX9Nne7e&edm=AJ9x6zYBAAAA&ccb=7-4&ig_cache_key=MjczNDUxOTQ0MzQzOTEyNDgwOA%3D%3D.2-ccb7-4&oh=00_AT8i9z6oNfeYYsILIQxt9mBggXzEJaAMBPqFQahB_oJo9Q&oe=61C9FD3E&_nc_sid=cff2a4"
        },
        {
            id: "3",
            username: "manurios",
            userImg: "https://instagram.fcvj4-1.fna.fbcdn.net/v/t51.2885-19/s150x150/244549583_343056904284222_6773661402316863303_n.jpg?_nc_ht=instagram.fcvj4-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=FIq9T8VRqpgAX902H5F&tn=8zRTkcg5i8ypvDOV&edm=AIQHJ4wBAAAA&ccb=7-4&oh=00_AT-oQsx9FWpWVIovQChmlTWBGIBNcSYfZxf8_vxVlNL2NA&oe=61CCA092&_nc_sid=7b02f1",
            caption: "Hola como estan mi amores del alma, esta es un post de mi Instagram Clone",
            postImg: "https://instagram.fcvj4-1.fna.fbcdn.net/v/t51.2885-15/e35/269775389_455202285987364_7590896335325371091_n.jpg?_nc_ht=instagram.fcvj4-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=KZFQoL5T8JsAX8FLo8z&edm=AIQHJ4wBAAAA&ccb=7-4&ig_cache_key=MjczNTI3NjAyMjU0NjA0MDY1MQ%3D%3D.2-ccb7-4&oh=00_AT9_yt5xGYzG5RAqB2h6ZqHcrBsyIb6Y0tx22myxWmiJqQ&oe=61CBD91D&_nc_sid=7b02f1"
        },
        {
            id: "4",
            username: "thenotoriousmma",
            userImg: "https://instagram.fcvj4-1.fna.fbcdn.net/v/t51.2885-19/s150x150/195800188_264181275457266_2415221409021918958_n.jpg?_nc_ht=instagram.fcvj4-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=1a5JeuV3AsUAX_wdL7H&edm=AJ9x6zYBAAAA&ccb=7-4&oh=00_AT_qmaGrA-2qZ2vja2uhy2KTVqnKJFoMDrw_RZBR3bxLxg&oe=61CC02EF&_nc_sid=cff2a4",
            caption: "Happy 90th Birthday May Gleeson 📏 ",
            postImg: "https://instagram.fcvj4-1.fna.fbcdn.net/v/t51.2885-15/e35/269748760_115737220801463_3260068189908134193_n.jpg?_nc_ht=instagram.fcvj4-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=5WQNME_DnXwAX-pjeIx&edm=AIQHJ4wBAAAA&ccb=7-4&ig_cache_key=MjczNDg5NjAzNTQwMTIzNjY2OQ%3D%3D.2-ccb7-4&oh=00_AT9c6BjzrDNfMoB2TbSiiwfa3A2xor1Z-ScwdlyXIUEQaQ&oe=61CC8024&_nc_sid=7b02f1"
        },
        {
            id: "5",
            username: "midu.dev",
            userImg: "https://instagram.fcvj4-1.fna.fbcdn.net/v/t51.2885-19/s320x320/116874837_306222274061412_4911803187722163052_n.jpg?_nc_ht=instagram.fcvj4-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=Sqo_YUH56vYAX-FKPPR&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT-CSqaMgquZj941e0AgqjSuVl0yarvxtQ1sSJN30b3INA&oe=61CB481E&_nc_sid=7bff83",
            caption: "Gracias, JavaScript por todo esto 💟",
            postImg: "https://instagram.fcvj4-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/269872507_203727698635295_1381253031008849887_n.jpg?_nc_ht=instagram.fcvj4-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=5Y9owkfqznIAX_QLpTj&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT9M9sQuEKEReVWDnob4pTXXpIsC9K4HUb_oxoTZ5NOvgg&oe=61CB281D&_nc_sid=7bff83"
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
