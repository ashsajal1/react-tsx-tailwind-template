import { useForm, SubmitHandler } from "react-hook-form"
import InputField from "../components/ui/input-field"

type Inputs = {
    email: string
    password: string
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
            <div className="flex flex-col items-center gap-2">
                <InputField placeholder="Enter email" type="email" {...register('email')} />
                <InputField type="password" {...register("password", { required: true })} />
            </div>
            {errors.email && <span>Email is required</span>}

            <InputField className="mt-2" type="submit" />
        </form>
    )
}