import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Login() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const [apiResponse, setApiResponse] = useState({ token: "" });
  function handleSaveData(data: any) {
    const baseURL = "https://fakestoreapi.com/auth/login";
    const payload = data;
    console.log(data);
    console.log(errors);
    axios.post(baseURL, payload).then((response) => {
      let newdata = response.data;
      setApiResponse(newdata);
      console.log(apiResponse);
    });
  }

  return (
    <>
      <form
        className="flex flex-col items-center my-4 bg-gray-100"
        onSubmit={handleSubmit(handleSaveData)}
      >
        <div className="mt-4">
          <h1 className="uppercase font-lg font-semibold">Login</h1>
        </div>
        <div className="m-5">
          {" "}
          <label>Username: </label>
          <input
            type="text"
            {...register("username", { required: "Username is required" })}
          />
          <p> {errors?.username?.message?.toString()}</p>
        </div>
        <div className="m-6">
          <label>Password: </label>
          <input
            type="password"
            {...register("password", { required: "Password is required" })}
          />
          <p> {errors?.password?.message?.toString()}</p>
        </div>

        <button
          className="hover:bg-gray-500 hover:text-white bg-gray-100 text-black rounded-xl px-5 py-3"
          type="submit"
        >
          Submit
        </button>
        <p>{apiResponse?.token}</p>
      </form>
    </>
  );
}
