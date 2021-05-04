import {Images} from '../../../Themes'


const daily_check_init = [
    {
        _id: 1,
        text: "CLEAR",
        user: {
            _id: 2,
            name: 'React Native',
            avatar: Images.robot,
        },
    },
    {
        _id: 2,
        text: "Welcome back!",
        user: {
            _id: 2,
            name: 'React Native',
            avatar: Images.robot,
        },
    },
    {
        _id: 3,
        text: "How's everything?",
        user: {
            _id: 2,
            name: 'React Native',
            avatar: Images.robot,
        },
    },
    {
        _id: 4,
        text: "Can I ask how you are feeling currently, what is your energy levels?",
        user: {
            _id: 2,
            name: 'React Native',
            avatar: Images.robot,
        },
    },
    {
        _id: 5,
        text: "Is that okay?",
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
                    value: "daily-check/survey.js",
                },
                {
                    title: 'No',
                    value: "end-conversation.js",
                },
            ],
        },
        //options: ["Yes", "No"],
        //dialogue: ["daily-check/survey.js","end-conversation.js"]
    }
]

export default daily_check_init