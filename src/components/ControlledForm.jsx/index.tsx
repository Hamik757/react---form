import React, { useState } from "react";
type FormDataTypes={
    name: string;
    email: string;
    message: string;

}
const ControlledForm = () => {
  const [formData, setFormData] = useState <FormDataTypes> ({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement >) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Անուն՝ ${formData.name}\nԷլ․ փոստ՝ ${formData.email}\nՀաղորդագրություն՝ ${formData.message}`);
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Controlled Form (useState)</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          name="name"
          placeholder="Անուն"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          name="email"
          placeholder="Էլ․ փոստ"
          value={formData.email}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <textarea
          name="message"
          placeholder="Հաղորդագրություն"
          value={formData.message}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <button type="submit" className="bg-blue-500 text-white py-2 rounded">
          Ուղարկել
        </button>
      </form>
    </div>
  );
};

export default ControlledForm;