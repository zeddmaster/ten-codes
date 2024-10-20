import {useTenCodes} from "../constants/ten-codes.js";
import _ from "lodash";


const tenCodes = useTenCodes();
const allAnswers = _.map(tenCodes, 'title_ru')

export const build = (answersCount) => {

    const question = tenCodes[Math.floor(Math.random() * tenCodes.length)];

    let answers = _.shuffle(allAnswers).slice(0, answersCount - 1);
    answers.push(question.title_ru)

    answers = _.shuffle(answers)

    return {
        question,
        answers
    }
}

