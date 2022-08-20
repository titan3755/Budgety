import { Fragment } from "react"
import { Badge } from "@mantine/core"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { featureCards } from "../../../data/iterators"
import { v4 as uuidv4 } from 'uuid'
import { homePageData } from "../../../data/pagedata"

export default function Features() {
    return (
        <Fragment>
            <div className="flex flex-col align-middle justify-center items-center my-4">
                <div className="flex flex-col align-middle justify-center items-center">
                    <Badge color="indigo" size="lg" style={{width: `120px`}}>{homePageData.featuresData.badgeTitle}</Badge>
                    <div className="my-2 flex flex-col align-middle justify-center items-center">
                        <h1 className="my-1 text-4xl font-extrabold text-slate-800 text-center">{homePageData.featuresData.title}</h1>
                        <p className="mt-2 text-sm font-light text-gray-400 w-4/6 text-center">{homePageData.featuresData.desc}</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-2 mt-6 p-8 items-center">
                    {
                        featureCards.map(({icon, title, desc, color}) => {
                            return <FeatureCard icon={icon} title={title} desc={desc} color={color} key={uuidv4()} />
                        })
                    }
                </div>
            </div>
        </Fragment>
    )
}

function FeatureCard({icon, title, desc, color}) {
    return (
        <Fragment>
            <div className="flex flex-col align-middle justify-center items-center bg-slate-100 py-10 rounded-md duration-150 transition ease-in-out hover:scale-[102%] shadow-md">
                <div className="mb-4 p-4 flex flex-row justify-center align-middle items-center rounded-xl" style={{backgroundColor: color}}>
                    <FontAwesomeIcon icon={icon} className="w-[25px] h-[25px] m-0 text-white" />
                </div>
                <div className="flex flex-col justify-center align-middle items-center">
                    <h1 className="text-center text-xl font-semibold text-slate-800 mb-3">{title}</h1>
                    <p className="text-center text-sm font-light text-gray-400 w-3/4">{desc}</p>
                </div>
            </div>
        </Fragment>
    )
}