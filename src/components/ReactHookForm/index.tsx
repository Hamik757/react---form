import { useForm } from "react-hook-form";

function LoginForm() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // ... onSubmit function
  const onSubmit = (data: any) => {
    console.log("Ձևն ուղարկված է:", data);
    // Օրինակ՝ ուղարկել տվյալները սերվերին
    // ...
    reset(); // Մաքրել ձևի դաշտերը հաջող ուղարկումից հետո
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="email"
        {...register("email", {
          /* rules */
        })}
      />
      {errors.email && <p>{errors.email.message as string}</p>}
      <input type="text" {...register("adress", {})} />
      {errors.adress && <p>{errors.adress.message as string}</p>}
      <input
        type="password"
        {...register("password", {
          /* rules */
        })}
      />
      {errors.password && <p>{errors.password.message as string}</p>}

      <button type="submit">Մուտք</button>
    </form>
  );
}

export default LoginForm;
