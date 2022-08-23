export default function budgetApiHome(req, res) {
    res.status(200).json({message: 'Welcome to Budgety budget manager API!', restrictions: 'Most of the routes in this API cannot be accessed without authentication'})
}