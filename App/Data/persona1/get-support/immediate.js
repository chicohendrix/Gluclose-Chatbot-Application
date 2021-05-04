import {Images} from '../../../Themes'

const get_support_immediate = [
    {
        _id: 1,
        text: "I would like to provide contacts that you could get some immediate support.",
        user: {
            _id: 2,
            name: 'React Native',
            avatar: Images.robot,
        },
    },
    {
        _id: 2,
        text: "Diabetes Lifeline: 1-800-273-8255",
        user: {
            _id: 2,
            name: 'React Native',
            avatar: Images.robot,
        },
    },
    {
        _id: 3,
        text: "Diabetes Lifeline",
        user: {
            _id: 2,
            name: 'React Native',
            avatar: Images.robot,
        },
    },
    {
        _id: 4,
        text: "Diabeters",
        user: {
            _id: 2,
            name: 'React Native',
            avatar: Images.robot,
        },
    },
    {
        _id: 5,
        text: "WHO",
        user: {
            _id: 2,
            name: 'React Native',
            avatar: Images.robot,
        },
    },
    {
        _id: 6,
        text: "WHO",
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
                    value: "get-support/professional.js",
                },
                {
                    title: 'No',
                    value: "get-support/other-tools.js",
                },
            ],
        },
        // options: ["Yes", "No"],
        // dialogue: ["get-support/professional.js","get-support/other-tools.js"]
    }
]

export default get_support_immediate