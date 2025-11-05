import React from "react";
import { useForm } from "react-hook-form";

const HookForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data:any) => {
    console.log(data);
    alert(`Անուն՝ ${data.name}\nԷլ․ փոստ՝ ${data.email}\nՀաղորդագրություն՝ ${data.message}`);
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">React Hook Form</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <input
          {...register("name", { required: "Անունը պարտադիր է" })}
          placeholder="Անուն"
          className="border p-2 rounded"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

        <input
          {...register("email", {
            required: "Էլ․ փոստը պարտադիր է",
            pattern: { value: /^\S+@\S+$/i, message: "Սխալ էլ․ փոստ" },
          })}
          placeholder="Էլ․ փոստ"
          className="border p-2 rounded"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

        <textarea
          {...register("message", { required: "Հաղորդագրությունը պարտադիր է" })}
          placeholder="Հաղորդագրություն"
          className="border p-2 rounded"
        />
        {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}

        <div className="flex gap-2">
          <button type="submit" className="bg-green-500 text-white py-2 rounded flex-1">
            Ուղարկել
          </button>
          <button
            type="button"
            onClick={() => reset()}
            className="bg-gray-400 text-white py-2 rounded flex-1"
          >
            Մաքրել
          </button>
        </div>
      </form>
    </div>
  );
};

export default HookForm;