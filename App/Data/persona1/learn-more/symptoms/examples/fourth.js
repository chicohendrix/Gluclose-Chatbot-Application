import {Images} from '../../../../../Themes'

const learn_more_symptoms_examples_fourth = [
    {
        _id: 1,
        text: "Feeling tired all the time",
        user: {
            _id: 2,
            name: 'React Native',
            avatar: Images.robot,
        },
    },
    {
        _id: 2,
        text: "Feeling hungry all the time",
        user: {
            _id: 2,
            name: 'React Native',
            avatar: Images.robot,
        },
    },
    { 
        _id: 3,
        text: "Do you want to review other symptom again?",
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
                    title: 'Yes',
                    value: "learn-more/symptoms/choice.js",
                },
                {
                    title: 'No',
                    value: "learn-more/repeat.js",
                },

            ],
        },
        // options: ["Yes", "No"],
        // dialogue: ["learn-more/symptoms/choice.json", "learn-more/repeat.json"]
    }
]

export default learn_more_symptoms_examples_fourth