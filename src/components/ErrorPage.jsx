import { Link } from 'react-router-dom'

const ErrorPage = ({error}) => {
    console.log(error)
    
    return (
        <>
        <h3>
             {error.status}
        </h3>
        <h2>
            {error.msg}
        </h2>
        <p>
            <Link to="/">Return to home page.</Link>
        </p>
        </>
     );
}
 
export default ErrorPage;