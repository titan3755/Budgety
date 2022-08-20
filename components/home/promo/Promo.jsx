import { Fragment } from "react"
import { Button } from "@mantine/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons"
import { homePageData } from "../../../data/pagedata"

export default function Promo() {
    return (
        <Fragment>
            <div className="relative text-center">
                <img src="https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width="100%" className="object-cover h-[560px] md:h-[600px] lg:h-[580px] brightness-[35%]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="flex flex-col align-middle justify-center items-center">
                        <h1 className="text-white font-bold text-3xl md:text-5xl my-4 mb-6">{homePageData.promoData.title}</h1>
                        <p className="text-gray-200 font-normal text-base md:text-xl mb-6 w-[420px] md:w-[98%]">{homePageData.promoData.desc}</p>
                        <Button variant="white" color="dark" rightIcon={<FontAwesomeIcon icon={faArrowRightLong} className="mt-[6px] ml-1 md:text-xl text-lg" />} size="xl" radius="md" className="my-3">{homePageData.promoData.btnTxt}</Button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}