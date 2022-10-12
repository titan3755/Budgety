import prisma from "../../../clients/prisma"

export default async function dataSave(req, res) {
    if (req.method === 'POST') {
        res.status(200).json({message: 'Work in progress!'})
    }
    else {
        res.status(405).json({message: 'Method not allowed'})
    }
}