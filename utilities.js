function urlFromComponents ({...props} = {}) {
    // console.log(protocol, props.hostname, pathname);
    return new URL(`${props.protocol}://${props.hostname}`).origin;
}

module.exports = {
    urlFromComponents
}