import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import InputField from "../components/ui/input-field";
import { Link } from "react-router-dom";

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
        <form className="flex items-center md:h-screen justify-center" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex items-center flex-col p-4 border rounded w-full md:w-1/3 dark:border-gray-800">
                <div className="flex flex-col w-full items-center gap-2">
                    <InputField className={`w-full ${errors.email? 'border-red-600 placeholder-red-400':''}`} placeholder="Enter email" type="email" {...register('email')} />
                    {errors.email && <span className="text-red-600 text-sm text-start w-full">Email is required</span>}
                    <InputField placeholder="Enter password" className={`w-full ${errors.password? 'border-red-600 placeholder-red-400':''}`} type="password" {...register("password")} />
                    {errors.password && <span className="text-red-600 text-sm text-start w-full">Password must be between 6 and 20 characters</span>}
                </div>
                
                

                <InputField value={'Login'} className="mt-2 w-full" type="submit" />

                <p className="text-sm p-2">Don't have an account? <Link className="text-primary" to='/signup'>Signup now</Link></p>
            </div>
        </form>
    );
}
