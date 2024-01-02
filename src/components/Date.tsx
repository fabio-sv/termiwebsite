export const DateComponent = () => {
    const date = new Date()

    return (<p>{date.toDateString()}<br />
        <br />
    </p>)
}