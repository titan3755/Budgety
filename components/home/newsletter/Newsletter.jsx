import { Button, Input, Title } from "@mantine/core"
import { showNotification } from "@mantine/notifications"
import { Fragment, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAt, faCheck, faXmark } from "@fortawesome/free-solid-svg-icons"
import Image from "next/image"
import axios from "axios"
import { homePageData } from "../../../data/pagedata"

export default function Newsletter() {
    const [emailIn, setEmailIn] = useState('')
    async function handleSubmission (e) {
        e.preventDefault()
        try {
            let response = await (await axios.post('/api/newsletter/subscribe', {
                email: emailIn
            })).data
            if (response.success) {
                setEmailIn('')
                showNotification({title: 'Success!', message: 'You have been subscribed to the newsletter', color: 'green', icon: <FontAwesomeIcon icon={faCheck} style={{color: `white`}} />})
                // toast.success('You have been subscribed to the newsletter!')
            }
            else {
                showNotification({title: 'Error!', message: 'There was an error subscribing you to the newsletter', color: 'red', icon: <FontAwesomeIcon icon={faXmark} style={{color: `white`}} />})
                // toast.error('There was an error subscribing you to the newsletter')
            }
        }
        catch (err) {
            // console.log(err.message)
            if (err.message === 'Request failed with status code 406') {
                setEmailIn('')
                showNotification({title: 'Error!', message: 'You are already subscribed to the newsletter', color: 'red', icon: <FontAwesomeIcon icon={faXmark} style={{color: `white`}} />})
                // toast.error('You are already subscribed to the newsletter')
            }
            else {
                showNotification({title: 'Error!', message: 'There was an error subscribing you to the newsletter', color: 'red', icon: <FontAwesomeIcon icon={faXmark} style={{color: `white`}} />})
                // toast.error('There was an error subscribing you to the newsletter')
            }
        }
    }
    return (
        <Fragment>
            <div className="flex flex-row align-middle justify-center py-10 mt-5 px-20">
                <div className="w-full md:w-1/2 flex flex-col justify-center align-middle mx-5">
                    <div className="flex flex-col align-middle justify-center items-center md:items-start">
                        <h1 className="my-2 text-[42px] sm:text-6xl font-extrabold font-overpass text-center md:text-left">{homePageData.newsletterData.title}</h1>
                        <p className="w-full sm:w-9/12 my-2 text-lg sm:text-xl font-normal text-center md:text-left">{homePageData.newsletterData.desc}</p>
                    </div>
                    <form onSubmit={handleSubmission}>
                        <div className="flex flex-row align-middle justify-start mt-5">
                            <Input
                            type="email"
                            value={emailIn}
                            onChange={(e) => {setEmailIn(e.target.value)}}
                            required={true}
                            icon={<FontAwesomeIcon icon={faAt} />}
                            placeholder="Your email"
                            className="w-[400px]"
                            />
                            <Button variant="filled" color="indigo" type="submit" style={{borderTopLeftRadius: `0px`, borderBottomLeftRadius: `0px`, borderTopRightRadius: `8px`, borderBottomRightRadius: `8px`}}>Subscribe</Button>
                        </div>
                    </form>
                </div>
                <div className="md:w-1/2 md:flex md:flex-row md:justify-center md:align-middle md:items-center md:mx-5 hidden">
                    <Image src="/newsletterimg.svg" width={500} height={500} className="object-cover" />
                </div>
            </div>
        </Fragment>
    )
}