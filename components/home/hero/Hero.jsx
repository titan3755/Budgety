import { Fragment } from "react"
import { Button } from "@mantine/core"
import Image from "next/image"
import { homePageData } from "../../../data/pagedata"

export default function Hero() {
    return (
        <Fragment>
            <div className="p-10 md:p-16 flex flex-row w-full">
                <div className="lg:w-1/2 w-full flex flex-col justify-center items-center lg:items-start pl-2">
                    <h1 className="lg:text-6xl text-5xl font-extrabold font-jsans first-line:text-black text-indigo-600 my-5 mb-3" style={{fontWeight: `700`}}>{homePageData.heroData.title}</h1>
                    <p className="text-gray-500 text-lg font-normal w-full md:w-[80%] my-5">{homePageData.heroData.desc}</p>
                    <div className="flex flex-row md:items-center items-start align-middle gap-4">
                        <Button color="indigo" radius="md" size="xl" className="my-5">
                            {homePageData.heroData.btnPrTxt}
                        </Button>
                        <Button color="indigo" variant="outline" radius="md" size="xl" className="my-5">
                            {homePageData.heroData.btnSecTxt}
                        </Button>
                    </div>
                </div>
                <div className="w-1/2 lg:flex lg:flex-col lg:justify-center lg:align-middle hidden">
                    <Image src="/heroimg.svg" height={550} width={550} className="ml-2" />
                </div>
            </div>
        </Fragment>
    )
}