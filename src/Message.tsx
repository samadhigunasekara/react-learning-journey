//PascalCasing - every first letter should be capital
function Message(){
    //JSX: JavaScript XML
    //With JSX we can easily describe the UI of our application with html n javaScript
    //JSX allows us us to create dynamic content
    const name = 'Samadhi'
    if (name)
        return <h1>Hello {name}</h1>
    return <h1>Hello World</h1>
}

export default Message;