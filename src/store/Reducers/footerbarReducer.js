
const footerbarReducer = (prevstate = true, action) => {
    let {type, payload} = action;
    switch (type) {
    case "HideFooterbar":
        return payload


    case "ShowFooterbar":
        return payload

    default:
        return prevstate
    }
}
export default footerbarReducer;