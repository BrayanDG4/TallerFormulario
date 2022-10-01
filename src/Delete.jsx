import React, { useState, useRef, useEffect, Children } from 'react'

const Delete = () => {

const [showModal, setShowModal] = React.useState(false);

const form = useRef(null);

const handleSubmit = (event) => {
  event.preventDefault();

  setShowModal(true);
}

const confirmar = (event) => {
  event.preventDefault();

  if(document.getElementById('document').value != ""){

  window.location.href='/form'

  }else{
    alert("Ingrese su documento");
  }
}

  return (
    <div className="md:flex md:justify-center md:gap-10 md:items-center m-5">
        <div className="md:w-2/4 bg-white p-6 rounded-lg shadow-lg">
        <button
            className="w-full bg-sky-600 text-white active:bg-sky-700 hover:bg-sky-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="submit"
            value="Registrar"
            onClick={handleSubmit}
          >
            ELIMINAR
          </button>
            <>
            {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Modal Title
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    Para eliminar por favor ingrese su numero de documento:
                  </p>
                    <input
                    required
                    name="document"
                    type="text"
                    id="document"
                    placeholder="Documento"
                    className="border p-3 w-full rounded-lg invalid:border-pink-500"
                    />
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cancelar
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={confirmar}
                  >
                    Comfirmar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
        </>
        </div>
    </div>
      

  )
}

export default Delete