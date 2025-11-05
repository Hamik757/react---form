import React from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data:any) => {
    localStorage.setItem("contactFormData", JSON.stringify(data));
    alert("Տվյալները հաջողությամբ ուղարկվել են!");
    reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-2xl shadow-lg w-80 flex flex-col gap-3">
        <h2 className="text-xl font-semibold mb-2 text-center">Կապ մեզ հետ 📩</h2>

        <input {...register("name", { required: "Անունը պարտադիր է" })} placeholder="Անուն" className="border p-2 rounded" />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message as string}</p>}

        <input {...register("email", { required: "Էլ․ փոստը պարտադիր է", pattern: /^\S+@\S+$/i })} placeholder="Էլ․ փոստ" className="border p-2 rounded" />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message as string}</p>}

        <textarea {...register("message", { required: "Հաղորդագրությունը պարտադիր է" })} placeholder="Հաղորդագրություն" className="border p-2 rounded h-24" />
        {errors.message && <p className="text-red-500 text-sm">{errors.message.message as string}</p>}

        <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
          Ուղարկել
        </button>
      </form>
    </div>
  );
};

export default ContactForm;