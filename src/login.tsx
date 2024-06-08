import { useForm } from "react-hook-form";

export default function Login() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  function handleSaveData(data: any) {
    console.log(data);
    console.log(errors);
  }

  return (
    <>
      <form className="flex flex-col items-center my-4 bg-gray-100" onSubmit={handleSubmit(handleSaveData)}>
        <div className="mt-4"><h1 className="uppercase font-lg font-semibold">Login</h1></div>
        <div className="m-5">
          {" "}
          <label>Username: </label>
          <input
            type="text"
            {...register("username", { required: "Username is required" })}
          />
          <p> {errors?.username?.message}</p>
        </div>
        <div className="m-6">
          <label>Password: </label>
          <input
            type="password"
            {...register("password", { required: "Password is required" })}
          />
          <p> {errors?.password?.message}</p>
        </div>

        <button className="hover:bg-gray-500 hover:text-white bg-gray-100 text-black rounded-xl px-5 py-3" type="submit">Submit</button>
      </form>
    </>
  );
}
