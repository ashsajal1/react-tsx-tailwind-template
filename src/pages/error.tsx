import { useRouteError, isRouteErrorResponse, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ApiError } from '@/lib/api/utils/error-handler';
import { motion } from 'framer-motion';
import { Home, RefreshCw } from 'lucide-react';

export default function ErrorPage() {
    const error = useRouteError();
    let errorMessage = 'An unexpected error occurred';
    let errorStatus = 500;

    if (isRouteErrorResponse(error)) {
        errorMessage = error.statusText || error.data?.message || errorMessage;
        errorStatus = error.status;
    } else if (error instanceof ApiError) {
        errorMessage = error.message;
        errorStatus = error.status;
    } else if (error instanceof Error) {
        errorMessage = error.message;
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-background p-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-md w-full text-center"
            >
                <div className="mb-8">
                    <h1 className="text-9xl font-bold text-primary mb-4">{errorStatus}</h1>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                        {errorStatus === 404 ? 'Page Not Found' : 'Something went wrong'}
                    </h2>
                    <p className="text-muted-foreground mb-8">{errorMessage}</p>
                </div>

                <div className="space-y-4">
                    <Button
                        asChild
                        className="w-full"
                        size="lg"
                    >
                        <Link to="/">
                            <Home className="mr-2 h-4 w-4" />
                            Back to Home
                        </Link>
                    </Button>
                    <Button
                        variant="outline"
                        className="w-full"
                        size="lg"
                        onClick={() => window.location.reload()}
                    >
                        <RefreshCw className="mr-2 h-4 w-4" />
                        Try Again
                    </Button>
                </div>
            </motion.div>
        </div>
    );
} 