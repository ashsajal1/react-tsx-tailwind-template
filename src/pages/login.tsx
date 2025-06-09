import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Seo from '../components/Seo';
import Text from "@/components/custom-ui/text";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useAppDispatch, useAppSelector } from "@/lib/store";
import { login } from "@/lib/store/thunks/auth.thunks";
import { addToast } from "@/lib/store/slices/uiSlice";

const schema = z.object({
    email: z.string().email(),
    password: z.string().min(6).max(20),
});

type Inputs = z.infer<typeof schema>;

export default function Login() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { loading, error } = useAppSelector((state) => state.auth);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>({
        resolver: zodResolver(schema),
    });

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        try {
            await dispatch(login(data)).unwrap();
            
            dispatch(addToast({
                type: 'success',
                message: 'Successfully logged in!',
            }));

            navigate('/dashboard');
        } catch (err) {
            // Error is already handled by the thunk
        }
    };

    return (
        <>
            <Seo title="Login | SaaSify" description="Login to your SaaSify account." />
            <div className="min-h-screen flex items-center justify-center bg-background">
                <div className="w-full md:flex md:min-h-screen">
                    {/* Left side - Text content */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="hidden md:flex md:w-1/2 bg-primary/5 items-center justify-center p-8"
                    >
                        <div className="max-w-md text-center">
                            <Text label="SaaSify" className="text-4xl font-bold text-primary mb-6" />
                            <h2 className="text-3xl font-semibold text-foreground mb-4">
                                Welcome back to SaaSify
                            </h2>
                            <p className="text-muted-foreground text-lg">
                                Your all-in-one solution for managing your business. Sign in to access your dashboard and continue your journey.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right side - Login form */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-8"
                    >
                        <div className="w-full max-w-md">
                            <div className="text-center mb-8 md:hidden">
                                <Link to="/">
                                    <Text label="SaaSify" className="text-3xl font-bold text-primary mb-2" />
                                </Link>
                                <h2 className="text-2xl font-semibold text-foreground">Welcome back</h2>
                                <p className="text-muted-foreground mt-2">Sign in to your account</p>
                            </div>

                            <div className="bg-card rounded-lg shadow-lg p-8">
                                {error && (
                                    <motion.div 
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="mb-4 p-3 bg-destructive/10 border border-destructive rounded-md text-destructive text-sm"
                                    >
                                        {error}
                                    </motion.div>
                                )}
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                    <div className="space-y-4">
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                                                Email address
                                            </label>
                                            <div className="relative">
                                                <Input 
                                                    id="email"
                                                    className={cn(
                                                        "w-full transition-all duration-200",
                                                        errors.email 
                                                            ? "border-destructive focus-visible:ring-destructive pr-10" 
                                                            : "focus-visible:ring-primary"
                                                    )} 
                                                    placeholder="Enter your email" 
                                                    type="email" 
                                                    {...register('email')} 
                                                />
                                                {errors.email && (
                                                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                                        <svg className="h-5 w-5 text-destructive" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                                        </svg>
                                                    </div>
                                                )}
                                            </div>
                                            {errors.email && (
                                                <motion.p 
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="text-destructive text-sm mt-1.5 flex items-center gap-1.5"
                                                >
                                                    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                                    </svg>
                                                    Please enter a valid email address
                                                </motion.p>
                                            )}
                                        </div>

                                        <div>
                                            <label htmlFor="password" className="block text-sm font-medium text-foreground mb-1">
                                                Password
                                            </label>
                                            <div className="relative">
                                                <Input 
                                                    id="password"
                                                    className={cn(
                                                        "w-full transition-all duration-200",
                                                        errors.password 
                                                            ? "border-destructive focus-visible:ring-destructive pr-10" 
                                                            : "focus-visible:ring-primary"
                                                    )} 
                                                    placeholder="Enter your password" 
                                                    type="password" 
                                                    {...register("password")} 
                                                />
                                                {errors.password && (
                                                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                                        <svg className="h-5 w-5 text-destructive" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                                        </svg>
                                                    </div>
                                                )}
                                            </div>
                                            {errors.password && (
                                                <motion.p 
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="text-destructive text-sm mt-1.5 flex items-center gap-1.5"
                                                >
                                                    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                                    </svg>
                                                    Password must be between 6 and 20 characters
                                                </motion.p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <input
                                                id="remember-me"
                                                name="remember-me"
                                                type="checkbox"
                                                className="h-4 w-4 text-primary focus:ring-primary border-input rounded"
                                            />
                                            <label htmlFor="remember-me" className="ml-2 block text-sm text-muted-foreground">
                                                Remember me
                                            </label>
                                        </div>

                                        <Link to="/forgot-password" className="text-sm text-primary hover:text-primary/80">
                                            Forgot password?
                                        </Link>
                                    </div>

                                    <Button 
                                        type="submit" 
                                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                                        disabled={loading}
                                    >
                                        {loading ? 'Signing in...' : 'Sign in'}
                                    </Button>

                                    <div className="relative my-6">
                                        <div className="absolute inset-0 flex items-center">
                                            <div className="w-full border-t border-border"></div>
                                        </div>
                                        <div className="relative flex justify-center text-sm">
                                            <span className="px-2 bg-card text-muted-foreground">
                                                Or continue with
                                            </span>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <Button variant="outline" className="w-full">
                                            Google
                                        </Button>
                                        <Button variant="outline" className="w-full">
                                            GitHub
                                        </Button>
                                    </div>
                                </form>

                                <p className="mt-6 text-center text-sm text-muted-foreground">
                                    Don't have an account?{' '}
                                    <Link to="/signup" className="font-medium text-primary hover:text-primary/80">
                                        Sign up now
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
}
