import {Images} from '../../Themes'

const startconversation = [
    {
        _id: 1,
        text: "Wonderful",
        user: {
            _id: 2,
            name: 'React Native',
            avatar: Images.robot,
        },
        text: "Thank you, now, do you have Type 1 diabetes ?",
        quickReplies: {
            type: 'radio', // or 'checkbox',
            keepIt: true,
            values: [
                {
                    title: 'Yes',
                    value: "diabetes.js",
                },
                {
                    title: 'No',
                    value: "end-conversation.js",
                },
            ],
        },
    },
    {
        _id: 2,
        text: "That's great!",
        user: {
            _id: 2,
            name: 'React Native',
            avatar: Images.robot,
        },
        text: "In order to get to know you better, let's take an assessment first, shall we?",
        //options: ["Sure", "Later"],
        //dialogue: ["take-assessment/start.js","take-assessment/later.js"],
        quickReplies: {
            type: 'radio', // or 'checkbox',
            keepIt: true,
            values: [
                {
                    title: 'Sure',
                    value: "take-assessment/start.js",
                },
                {
                    title: 'Later',
                    value: "take-assessment/later.js",
                },
            ],
        },
    }
]

export default startconversation;