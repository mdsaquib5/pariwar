import Link from "next/link";

const NotFoundPage = () => {
    return (
        <div className="container">
            <div className="not-found-content">
                <h1 className="error-code">404</h1>
                <h2 className="error-title">Page Not Found</h2>
                <p className="error-description">
                    The page you are looking for does not exist or has been moved.
                </p>
                <Link href="/" className="home-link">
                    Go back home
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;
