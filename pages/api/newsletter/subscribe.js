import prisma from "../../../clients/prisma"

export default async function subscribe (req, res) {
    if (req.method === 'POST') {
        try {
            const { email } = req.body
            let response = await prisma.Newsletter.create({data: {email: email}})
            res.status(201).json({
                message: response,
                success: true
            })
        }
        catch (err) {
            res.status(406).json({
                message: err.message,
                success: false
            })
        }
    }
    else {
        res.status(405).json({message: 'Method not allowed'})
    }
}