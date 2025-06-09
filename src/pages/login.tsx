import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Seo from '../components/Seo';
import Text from "@/components/custom-ui/text";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const schema = z.object({
    email: z.string().email(),
    password: z.string().min(6).max(20),
});

type Inputs = z.infer<typeof schema>;

export default function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>({
        resolver: zodResolver(schema),
    });

    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

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
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                    <div className="space-y-4">
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                                                Email address
                                            </label>
                                            <Input 
                                                id="email"
                                                className={cn(`w-full ${errors.email ? 'border-destructive' : ''}`)} 
                                                placeholder="Enter your email" 
                                                type="email" 
                                                {...register('email')} 
                                            />
                                            {errors.email && (
                                                <span className="text-destructive text-sm mt-1 block">
                                                    Please enter a valid email address
                                                </span>
                                            )}
                                        </div>

                                        <div>
                                            <label htmlFor="password" className="block text-sm font-medium text-foreground mb-1">
                                                Password
                                            </label>
                                            <Input 
                                                id="password"
                                                className={cn(`w-full ${errors.password ? 'border-destructive' : ''}`)} 
                                                placeholder="Enter your password" 
                                                type="password" 
                                                {...register("password")} 
                                            />
                                            {errors.password && (
                                                <span className="text-destructive text-sm mt-1 block">
                                                    Password must be between 6 and 20 characters
                                                </span>
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

                                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                                        Sign in
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
