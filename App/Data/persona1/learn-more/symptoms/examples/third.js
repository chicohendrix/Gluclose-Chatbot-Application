import {Images} from '../../../../../Themes'

const learn_more_symptoms_examples_third = [
    {
        _id: 1,
        text: "Gaining Weight",
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
                    title: 'Ok. Tell me about the fourth symptom',
                    value: "learn-more/symptoms/intro/fourth.js",
                },

            ],
        },
        // options: ["Ok. Tell me about the fourth symptom"],
        // dialogue: ["learn-more/symptoms/intro/fourth.json"]
    }
]

export default learn_more_symptoms_examples_third