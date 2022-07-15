import { shuffle } from "../../../functions/arrays"
import questionsBase from "../questionsBase"

export default (req, res) => {
    const ids = questionsBase.map(question => question.id)
    res.status(200).json(shuffle(ids))
}