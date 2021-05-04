import {Images} from '../../../Themes'

const daily_check_survey = [
    {
        text: "Great! Let's start it"
    },
    {
        text: "CLEAR"
    },
    {
        text: "1. What is your energy level ?",
        options: ["Not at all", "A little bit", "Moderately", "Quite a bit", "Extremely"]
    },
    {
        text: "2. Do you feel tired often?",
        options: ["Not at all", "A little bit", "Moderately", "Quite a bit", "Extremely"]
    },
    {
        text: "3. Do you feel hungry ?",
        options: ["Not at all", "A little bit", "Moderately", "Quite a bit", "Extremely"]
    },
    {
        text: "4. Do you eat sugary food?",
        options: ["Not at all", "A little bit", "Moderately", "Quite a bit", "Extremely"]
    },
    {
        text: "5. Do you meats?",
        options: ["Not at all", "A little bit", "Moderately", "Quite a bit", "Extremely"]
    },
    {
        text: "6. Do you drink enough water?",
        options: ["Not at all", "A little bit", "Moderately", "Quite a bit", "Extremely"]
    },
    {
        text: "7. Do you exercise?",
        options: ["Not at all", "A little bit", "Moderately", "Quite a bit", "Extremely"],
        dialogue: ["daily-check/score.js", "daily-check/score.js", "daily-check/score.js", "daily-check/score.js", "daily-check/score.js"]
    }
]

export default daily_check_survey