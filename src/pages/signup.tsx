import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import InputField from "../components/ui/input-field";

const schema = z.object({
    email: z.string().email().nonempty("Email is required"),
    password: z.string().min(6).max(20).nonempty("Password is required"),
    confirmPassword: z.string().min(6).max(20),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"], // path of error
});

type Inputs = z.infer<typeof schema>;

export default function Singup() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>({
        resolver: zodResolver(schema),
    });

    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex items-center flex-col p-4 border rounded">
                <div className="flex flex-col items-center gap-2">
                    <InputField placeholder="Enter email" type="email" {...register('email')} />
                    <InputField type="password" {...register("password")} />
                    <InputField type="password" {...register("confirmPassword")} />
                </div>
                {errors.email && <span>Email is required</span>}
                {errors.password && <span>Password must be between 6 and 20 characters</span>}
                {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}

                <InputField className="mt-2" type="submit" />
            </div>
        </form>
    );
}
