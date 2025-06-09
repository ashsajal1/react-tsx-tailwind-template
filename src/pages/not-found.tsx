import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import { motion } from 'framer-motion'
import { HiOutlineArrowLeft, HiOutlineHome } from 'react-icons/hi2'

export default function NotFound() {
    return (
        <>
            <Seo title="404 | Page Not Found" description="The page you are looking for does not exist." />
            <div className="flex flex-col items-center justify-center min-h-screen px-4 py-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    {/* 404 Illustration */}
                    <motion.div
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mb-8"
                    >
                       
                    </motion.div>

                    {/* Text Content */}
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-4xl md:text-5xl font-bold text-primary dark:text-primary mb-4"
                    >
                        Oops! Page Not Found
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-md mx-auto"
                    >
                        The page you're looking for doesn't exist or has been moved.
                    </motion.p>

                    {/* Action Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Button
                            onClick={() => window.history.back()}
                            variant="outline"
                            className="w-full sm:w-auto"
                        >
                            <HiOutlineArrowLeft className="mr-2 h-5 w-5" />
                            Go Back
                        </Button>
                        <Link to='/' className="w-full sm:w-auto">
                            <Button className="w-full">
                                <HiOutlineHome className="mr-2 h-5 w-5" />
                                Back to Home
                            </Button>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </>
    )
}
