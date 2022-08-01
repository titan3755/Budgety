import prisma from "../../../clients/prisma"
import { v4 as uuidv4 } from 'uuid'

export default async function dev(req, res) {
    if (req.method === 'GET') {
        try {
            let response = await prisma.Dev.create({data: {test: uuidv4()}})
            res.status(201).json({
                message: response,
                success: true
            })
        }
        catch (err) {
            console.log(err.message)
        }
    }
}