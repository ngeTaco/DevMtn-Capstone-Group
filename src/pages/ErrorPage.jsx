import { Link, useRouteError } from 'react-router-dom';

function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    if (error.response) {
        if (error.response.status === 401) {
            return (
                <>

                    <h1 className="font-semibold text-xl tracking-tight">Oops!</h1>
                    <p className="font-semibold text-xl tracking-tight">You must be logged in to do that.</p>
                    <Link to="/" className="text-xl tracking-tight">Click here to go back to the homepage</Link>

                </>
            );
        }
    }

    return (
        <>
            <h1 className="font-semibold text-xl tracking-tight">Uh oh.</h1>
            <p className="font-semibold text-xl tracking-tight">Sorry, an unexpected error has occurred.</p>
            <p className="text-xl tracking-tight">
                <i>{error.statusText || error.message}</i>
            </p>
            <Link to="/" className="text-xl tracking-tight">Click here to go back to the homepage</Link>
        </>
    );
}

export default ErrorPage;