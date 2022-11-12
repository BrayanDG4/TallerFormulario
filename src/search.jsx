import React, { useState } from "react";

const search = () => {
  const [isVisible, setIsVisible] = useState({
    consult: false,
  });

  const consultar = (event) => {
    if (document.getElementById("document-search").value != "") {
        console.log("SI");
      setIsVisible({
        ...isVisible,
        consult: true,
      });
    } else {
        console.log("NO");
      setIsVisible({
        ...isVisible,
        consult: false,
      });
    }
  };

  return (
    <div className="flex justify-center">
      <div className="md:w-2/4 bg-white p-6 rounded-lg shadow-lg">
        <p className="my-4 text-slate-500 text-lg leading-relaxed">
          Escriba el numero de documento de la consulta:
        </p>
        <input
          required
          name="document"
          type="text"
          id="document-search"
          placeholder="Documento"
          className="border p-3 w-full rounded-lg invalid:border-pink-500"
        />
        <button
          onClick={consultar}
          className="mt-4 w-full bg-green-600 text-white active:bg-green-700 hover:bg-green-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="submit"
          value="consultar"
        >
          Consultar
        </button>
        {isVisible.consult && (
          <form
          // action="{{route('register')}}"
          // method="POST"
          >
            <h1 class="text-center text-3xl font-bold text-red-500">
              El usuario es:
            </h1>

            <div class="mb-5">
              <label
                for="name"
                class="mb-2 block uppercase text-gray-500 font-bold"
              >
                Nombre:
              </label>

              <input
                value="David Suarez"
                name="name"
                type="text"
                id="name"
                placeholder="Nombre"
                class="border p-3 w-full rounded-lg"
              />
            </div>

            <div class="mb-5">
              <label
                for="username"
                class="mb-2 block uppercase text-gray-500 font-bold"
              >
                Usuario:
              </label>

              <input
                value="dsuarez"
                name="username"
                type="text"
                id="username"
                placeholder="Nombre de usuario"
                class="border p-3 w-full rounded-lg"
              />
            </div>

            <div class="mb-5">
              <label
                for="email"
                class="mb-2 block uppercase text-gray-500 font-bold"
              >
                E-mail:
              </label>

              <input
                value="dsuarez@unicesar.edu.co"
                name="email"
                type="email"
                id="email"
                placeholder="Correo electrónico"
                class="border p-3 w-full rounded-lg"
              />
            </div>

            <div class="mb-5">
              <label
                for="password"
                class="mb-2 block uppercase text-gray-500 font-bold"
              >
                Contraseña:
              </label>

              <input
                value="texto"
                name="password"
                type="password"
                id="password"
                placeholder="Contraseña"
                class="border p-3 w-full rounded-lg"
              />
            </div>

            <div class="mb-5">
              <label
                for="password_confirmation"
                class="mb-2 block uppercase text-gray-500 font-bold"
              >
                Repetir contraseña:
              </label>

              <input
                value="texto"
                name="password_confirmation"
                type="password"
                id="password_confirmation"
                placeholder="Repetir contraseña"
                class="border p-3 w-full rounded-lg"
              />
            </div>

            {/* <input 
                            type="submit"
                            value="Crear cuenta"
                            class="bg-sky-600 hover:bg-sky-700 transition-colors
                            cursor-pointer uppercase font-bold w-full p-3 text-white rounded-md"
                        
                        /> */}

            {/* <button
                        className="w-full bg-sky-600 text-white active:bg-sky-700 hover:bg-sky-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="submit"
                        onClick={() => setShowModal(true)}
                        >
                        Eliminar
                        </button> */}
          </form>
        )}
      </div>
    </div>
  );
};

export default search;
