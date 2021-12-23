import Stories from "./Stories"
import Feed from "./Feed"
import MiniProfile from "./MiniProfile"

export default function Feeds() {
    return (
        <div className="md:max-w-3xl grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:max-w-5xl m-auto mt-6">
            <section className="col-span-2">
                {/* Historias y Posts */}
                <Stories></Stories>
                <Feed></Feed>
            </section>
            <section>
                {/* SideBar */}
                <MiniProfile></MiniProfile>
            </section>
        </div>
    )
}
