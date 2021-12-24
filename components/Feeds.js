import Stories from "./Stories"
import Feed from "./Feed"
import MiniProfile from "./MiniProfile"
import Suggestions from "./Suggestions"

export default function Feeds() {
    return (
        <div className="md:max-w-4xl grid grid-cols-3 mx-12 xl:mx-auto xl:max-w-4xl mt-8">
            <section className="col-span-2">
                {/* Historias y Posts */}
                <Stories></Stories>
                <Feed></Feed>
            </section>
            <section className="col-span-1 xl:inline-grid">
                {/* SideBar */}
                <div className="pt-3 fixed">   
                    <MiniProfile></MiniProfile>
                    <Suggestions></Suggestions>
                </div>
                
            </section>
        </div>
    )
}
