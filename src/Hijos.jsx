import React from "react";

const Hijos = ({state, setState, index}) => {
  return (
    <div className="mb-5">
      <label
        for="name-children"
        className="mb-2 block uppercase text-gray-500 font-bold after:content-['*'] after:ml-0.5 after:text-red-500"
      >
        Nombre de hijo:
      </label>

      <input
        required
        name="name"
        type="text"
        id="name-children"
        placeholder="Nombre de hijo"
        className="border p-3 w-full rounded-lg invalid:border-pink-500"
      />
      <label
        for="old-children"
        className="mb-2 block uppercase text-gray-500 font-bold after:content-['*'] after:ml-0.5 after:text-red-500"
      >
        Edad de hijo:
      </label>

      <input
        required
        name="old"
        type="number"
        id="old-children"
        placeholder="Edad de hijo"
        className="border p-3 w-full rounded-lg invalid:border-pink-500"
      />
    </div>
  );
};

export default Hijos;
