import {Images} from '../../../../../Themes'

const learn_more_symptoms_examples_first = [
    {
        _id: 1,
        text: "Low blood pressure ",
        user: {
            _id: 2,
            name: 'React Native',
            avatar: Images.robot,
        },
        quickReplies: {
            type: 'radio', // or 'checkbox',
            keepIt: true,
            values: [
                {
                    title: 'Ok. Tell me about the second symptom',
                    value: "learn-more/symptoms/intro/second.js",
                },

            ],
        },
        // options: ["Ok. Tell me about the second symptom"],
        // dialogue: ["learn-more/symptoms/intro/second.json"]
    }
]

export default learn_more_symptoms_examples_first