import prisma from "../../../clients/prisma"
import { transactionAdd } from "../../../helpers/functions"

export default async function transaction(req, res) {
    if (req.method === 'POST') {
        const body = req.body
        try {
            let dbData = await prisma.budget.findFirst({
                where: {
                    email: body.email.trim()
                }
            })
            if (body.type.trim() === 'income' && (body.email.trim() !== '' || body.email.trim())) {
                let dbUpdateResponse = await prisma.budget.update({
                    where: {
                        email: body.email.trim()
                    },
                    data: {
                        income: Number(dbData.income) + Number(body.value),
                        transactions: transactionAdd('income', body.title.trim(), body.desc.trim(), body.value, dbData.transactions)
                    }
                })
                res.status(200).json({message: 'success', dbResponse: dbUpdateResponse})
            }
            else if (body.type.trim() === 'expense' && (body.email.trim() !== '' || body.email.trim())) {
                let dbUpdateResponse = await prisma.budget.update({
                    where: {
                        email: body.email.trim()
                    },
                    data: {
                        expense: Number(dbData.expense) + Number(body.value),
                        transactions: transactionAdd('expense', body.title.trim(), body.desc.trim(), body.value, dbData.transactions)
                    }
                })
                res.status(200).json({message: 'success', dbResponse: dbUpdateResponse})
            }
            else {
                res.status(400).json({message: 'Request body does not have required keys! [type] && [email]'})
            }
        }
        catch (err) {
            res.status(406).json({
                message: err.message,
                success: false
            })
            console.log(err.message)
        }
    }
    else {
        res.status(405).json({message: 'Method not allowed'})
    }
}