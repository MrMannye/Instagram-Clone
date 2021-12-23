import Stories from "./Stories"
import Feed from "./Feed"
import MiniProfile from "./MiniProfile"
import Suggestions from "./Suggestions"

export default function Feeds() {
    return (
        <div className="md:max-w-3xl grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:max-w-5xl m-auto mt-6">
            <section className="col-span-2">
                {/* Historias y Posts */}
                <Stories></Stories>
                <Feed></Feed>
            </section>
            <section className="hidden md:col-span-1 xl:inline-grid">
                {/* SideBar */}
                <div className="pt-2 fixed">   
                    <MiniProfile></MiniProfile>
                    <Suggestions></Suggestions>
                </div>
                
            </section>
        </div>
    )
}
