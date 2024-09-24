const NotFoundPage = ( { errorText } ) => {
    if (!errorText)
        return (<h1>404: Page Not Found!</h1>)
    return (<h1>{errorText}</h1>);
}

export default NotFoundPage
