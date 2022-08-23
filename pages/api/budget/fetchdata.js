import prisma from "../../../clients/prisma"

export default async function fetchData(req, res) {
    if (req.method === 'POST') {
        try {
            const { email } = req.body
            let dbData = await prisma.budget.findFirst({
                where: {
                    email: email
                }
            })
            res.status(201).json({
                message: 'Found relevant user budget information',
                response: dbData,
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