import { useForm, SubmitHandler } from "react-hook-form"
import InputField from "../components/ui/input-field"

type Inputs = {
    email: string
    password: string
    phone: string
}

export default function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

    return (
        <form className="flex items-center flex-col p-4 border rounded" onSubmit={handleSubmit(onSubmit)}>
            <input type="email" {...register("email", { required: true })} />
            <input type="password" {...register("password", { required: true })} />
            {errors.email && <span>Email is required</span>}
            <InputField type="text" {...register('phone')} />

            <input type="submit" />
        </form>
    )
}