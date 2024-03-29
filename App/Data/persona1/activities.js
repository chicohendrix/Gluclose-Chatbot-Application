import {Images} from '../../Themes'

const activities = [
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
        text: "How can I help you?",
        user: {
            _id: 2,
            name: 'React Native',
            avatar: Images.robot,
        },
    },
    {
        _id: 4,
        text: "Would you like to work on something?",
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
                    title: 'Manage Symptoms',
                    value: "manage-symptoms/init.js",
                },
                {
                    title: 'Take Assessment',
                    value: "take-assessment/start.js",
                },
                {
                    title: 'Get Support',
                    value: "get-support/immediate.js",
                },
                {
                    title: 'Learn About Diabetes',
                    value: "learn-more/init.js",
                },
                {
                    title: 'Track Progress',
                    value: "track-progress/init.js",
                },
            ],
        },
    }
]

export default activities;