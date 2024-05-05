import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import InputField from "../components/ui/input-field";

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
        <form className="flex items-center flex-col p-4 border rounded" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col items-center gap-2">
                <InputField placeholder="Enter email" type="email" {...register('email')} />
                <InputField type="password" {...register("password")} />
            </div>
            {errors.email && <span>Email is required</span>}
            {errors.password && <span>Password must be between 6 and 20 characters</span>}

            <InputField className="mt-2" type="submit" />
        </form>
    );
}
