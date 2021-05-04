import {Images} from '../../Themes'

const welcome = [
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
        text: "Hi friend !",
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'React Native',
            avatar: Images.robot,
        },
    },
    {
        _id: 3,
        text: "Nice to meet you !",
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'React Native',
            avatar: Images.robot,
        },
    },
    {
        _id: 4,
        text: "I'm Gluclose your personal diabetes assistant",
        user: {
            _id: 2,
            name: 'React Native',
            avatar: Images.robot,
        },
    },
    {
        _id: 5,
        text: "I can help you navigate your diabetes in real time and tend to all your questions and queries regarding diabetes !",
        user: {
            _id: 2,
            name: 'React Native',
            avatar: Images.robot,
        },
    },
    {
        _id: 6,
        user: {
            _id: 2,
            name: 'React Native',
            avatar: Images.robot,
        },
        text: "Before we start, I need to gather some information about you, are you ready ?",
        quickReplies: {
            type: 'radio', // or 'checkbox',
            keepIt: true,
            values: [
                {
                    title: 'Yes',
                    value: "start-conversation.js",
                },
                {
                    title: 'No',
                    value: "end-conversation.js",
                },
            ],
        },
        //dialogue: ["start-conversation.js","end-conversation.js"]
    }
]

export default welcome;