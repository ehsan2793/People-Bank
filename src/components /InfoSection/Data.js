import chill from "../../images/svg-1.svg"
import device from "../../images/svg-2.svg"
import save from "../../images/svg-3.svg"



export const homeObjOne = {
    id: "about",
    lightBg: false,
    lightText: true,
    topLine:'Advance Banking',
    headLine:'Unlimited Transactions with zero fees ',
    description:"Get access to innovational approach that allows you control your finance from home or anywhere else",
    buttonLabel: 'Get Started',
    imgStart:false,
    image:chill,
    alt: 'couch',
    dark:true,
    primary:true,
    darkText:false,
}

export const homeObjTwo = {
    id: "discover",
    lightBg: true,
    lightText: false,
    topLine:'Easy Access',
    headLine:'Accessing your account with any device ',
    description:"Get access to your account with any device from home or anywhere else",
    buttonLabel: 'Get Started',
    imgStart:true,
    image:device,
    alt: 'computer',
    dark:false,
    primary:false,
    darkText:true,
}
export const homeObjThree = {
    id: "manage",
    lightBg: false,
    lightText: true,
    topLine:' Help you Save Money',
    headLine:' Saving money is no longer an issue  ',
    description:"Expert advisers will help to save your money  ",
    buttonLabel: 'Get Started',
    imgStart:false,
    image:save,
    alt: 'wallet',
    dark:true,
    primary:true,
    darkText:false,
}