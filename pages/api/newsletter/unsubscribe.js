import prisma from "../../../clients/prisma"

export default async function unsubscribe (req, res) {
    if (req.method === 'POST') {
        try {
            const { email } = req.body
            let isNewsletter = await prisma.newsletter.findUnique({where: {email: email}})
            if (isNewsletter) {
                let response = await prisma.newsletter.delete({where: {email: email}})
                res.status(201).json({
                    message: response,
                    success: true
                })
            }
            else {
                res.status(404).json({
                    message: 'User/Newsletter entry not found',
                    success: false
                })
            }
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