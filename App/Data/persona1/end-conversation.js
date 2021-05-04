import {Images} from '../../Themes'


const endconversation = [
    {
        _id: 1,
        text: "Oh alright",
        user: {
            _id: 2,
            name: 'React Native',
            avatar: Images.robot,
        },
    },
    {
        _id: 2,
        text: "",
        user: {
            _id: 2,
            name: 'Do you have type 2 diabetes or any other sort of diabetes ?',
            avatar: Images.robot,
        },
        //options: ["MENU"],
        //dialogue: ["menu.js"]
        quickReplies: {
            type: 'radio', // or 'checkbox',
            keepIt: true,
            values: [
                {
                    title: 'Menu',
                    value: "menu.js",
                },
            ],
        },
    }
]

export default endconversation;