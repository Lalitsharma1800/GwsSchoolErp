export function ErrorBoundary({message}){
    return(
        <div className="grid place-content-center text-center">
            Error While Loading The Page,
            <br />
            Please try again.
            {message && <div>{message}</div>}
        </div>
    )
}