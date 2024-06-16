import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import InputField from "../components/custom-ui/input-field";
import { Link } from "react-router-dom";

const schema = z.object({
    email: z.string().email().nonempty("Email is required"),
    password: z.string().min(6).max(20).nonempty("Password is required"),
    confirmPassword: z.string().min(6).max(20),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"], // path of error
});

type Inputs = z.infer<typeof schema>;

export default function Signup() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>({
        resolver: zodResolver(schema),
    });

    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

    return (
        <form className="flex items-center h-screen justify-center" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex items-center flex-col p-4 border rounded w-full md:w-1/3 dark:border-gray-800">
                <div className="flex flex-col w-full items-center gap-2">
                    <InputField className={`w-full ${errors.email ? 'border-red-600 dark:border-red-600 placeholder-red-400' : ''}`} placeholder="Enter email" type="email" {...register('email')} />

                    {errors.email && <span className="text-red-600 text-sm text-start w-full">Email is required</span>}

                    <InputField placeholder="Enter password" className={`w-full ${errors.password ? 'border-red-600 dark:border-red-600 placeholder-red-400' : ''}`} type="password" {...register("password")} />

                    {errors.password && <span className="text-red-600 text-sm text-start w-full">Password must be between 6 and 20 characters</span>}

                    <InputField placeholder="Enter confirm password" className={`w-full ${errors.confirmPassword ? 'border-red-600 dark:border-red-600 placeholder-red-400' : ''}`} type="password" {...register("confirmPassword")} />
                    {errors.confirmPassword && <span className="text-red-600 text-sm text-start w-full">Confirm password is required</span>}
                </div>

                <InputField value={'Signup'} className="mt-2 w-full" type="submit" />

                <p className="text-sm p-2">Already have an account? <Link className="text-primary" to='/login'>Login now</Link></p>
            </div>
        </form>
    );
}
