import prisma from "../../../clients/prisma"

export default async function transaction(req, res) {
    if (req.method === 'POST') {
        const body = req.body
        if (body.type.trim() === 'income') {
            res.status(200).json({message: 'success'})
        }
        else if (body.type.trim() === 'expense') {
            res.status(200).json({message: 'success'})
        }
        else {
            res.status(400).json({message: 'Request body does not have required keys! [type]'})
        }
    }
    else {
        res.status(405).json({message: 'Method not allowed'})
    }
}