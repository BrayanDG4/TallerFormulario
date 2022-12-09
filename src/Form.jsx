import React, { useState, useRef, useEffect, Children } from "react";
import Hijos from "./Hijos";
import listMunicipios from "./municipios";
import {myForm,Formik} from 'formik';
import {createTaskRequest} from './api/task.api.js';

const Form = () => {
  const [selectedDate, changeSelectedDate] = useState(new Date());
  const [showModal, setShowModal] = React.useState(false);
  const [edad, setEdad] = useState(0);
  //datos
  const documents = document.querySelector('#document');

  console.log(selectedDate);

  const numberChildren = useRef(null); //Mi etiqueta la guardo en la variable

  const [isVisible, setIsVisible] = useState({
    otherGender: false,
    maritalState: false,
    company: false,
    Enrollment: false,
  });

  // calcular edad
  const handleChangeDate = (event) => {
    let hoy = new Date();
    let fechaNacimiento = new Date(event.target.value);
    let _edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    let diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth();
    if (
      diferenciaMeses < 0 ||
      (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())
    ) {
      _edad--;
    }

    setEdad(_edad);
  };

  const [Children, setChildren] = useState([]);

  const GenerateChildren = () => {
    let temp = [];
    for (let index = 0; index < numberChildren.current.value; index++) {
      temp[index] = {
        id: index,
        nombreHijo: "",
        edadHijo: "",
      };
    }
    setChildren(temp);
  };

  const gender = (event) => {
    if (document.getElementById("other").selected == true) {
      setIsVisible({
        ...isVisible,
        otherGender: true,
      });
    } else {
      setIsVisible({
        ...isVisible,
        otherGender: false,
      });
    }
    
  };

  //Si es estrato 1 o 2 el estudiante tiene derecho a matricula cero

  const zeroEnrollment = (event) => {
    if (
      document.getElementById("enrollment").value == 1 ||
      document.getElementById("enrollment").value == 2
    ) {
      setIsVisible({
        ...isVisible,
        Enrollment: true,
      });
    } else {
      setIsVisible({
        ...isVisible,
        Enrollment: false,
      });
    }
  };

  const marital = (event) => {
    if (document.getElementById("maritalStatus").selected == true) {
      setIsVisible({
        ...isVisible,
        maritalState: true,
      });
    } else {
      setIsVisible({
        ...isVisible,
        maritalState: false,
      });
    }
  };

  const company = (event) => {
    if (document.getElementById("otherCompany").selected == true) {
      setIsVisible({
        ...isVisible,
        company: true,
      });
    } else {
      setIsVisible({
        ...isVisible,
        company: false,
      });
    }
  };

  const form = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);

    for (let value of formData.values()) {
      if (value == "") {
        setShowModal(false);
        return;
      }
    }
    setShowModal(true);
  };

  // Cambiar departamentos
  const [municipios, setMunicipios] = useState([]);
  const handleChangeDepart = (event) => {
    let id = event.target.value;
    setMunicipios(listMunicipios.data[id]);
  };

  const sendData = (e) =>{
    e.preventDefault();
    console.log("Formulario enviado!")
  }
 
  return (
    <Formik
      initialValues={{
        document: "",
        name: "",
        genderBox: "",
        Date: "",
        maritalStatus: "",
        sons: "",
        currentJob: "",
        stratum: "",
        otherGender: "",
        partner: "",

      }}
      onSubmit = {async (values)=>{
        console.log(values);
        try {
          const response = await createTaskRequest(values);
          console.log(response);
        } catch (error) {
          console.log(error);
        }
      }}
    >
      {({handleChange, handleSubmit}) => (
<myForm onSubmit={handleSubmit}> 
      {/* //codigo del formulario */}
    <div className="md:flex md:justify-center md:gap-10 md:items-center m-5">
      <div className="md:w-2/4 bg-white p-6 rounded-lg shadow-lg">
        <form action="" ref={form}>
          {/* NOMBRE */}
          <div className="mb-5">
            <label
              for="document"
              className="mb-2 block uppercase text-gray-500 font-bold after:content-['*'] after:ml-0.5 after:text-red-500"
            >
              Documento:
            </label>

            <input
              required
              onChange={handleChange}
              name="document"
              type="text"
              id="document"
              placeholder="Documento"
              className="border p-3 w-full rounded-lg invalid:border-pink-500"
            />
          </div>
          {/* DOCUMENTO */}
          <div className="mb-5">
            <label
              for="name"
              class="mb-2 block uppercase text-gray-500 font-bold after:content-['*'] after:ml-0.5 after:text-red-500"
            >
              Nombre:
            </label>

            <input
              onChange={handleChange}
              required
              name="name"
              type="text"
              id="name"
              placeholder="Nombre"
              className="border p-3 w-full rounded-lg invalid:border-pink-500"
            />
          </div>
          {/* GENERO - SELECT */}
          <div className="mb-5">
            <label
              for="genderBox"
              className="mb-2 block uppercase text-gray-500 font-bold"
            >
              Género:
            </label>

            <select
              onChange={gender}
              className="mb-2 block text-gray-500 font-bold w-full p-3 rounded"
              name="genderBox"
              id="genderBox"
            >
              <option value="1" selected>
                Femenino
              </option>
              <option value="2">Másculino</option>
              <option id="other" value="3">
                Otro
              </option>
            </select>
          </div>
          {/* OTRO GENERO*/}
          {isVisible.otherGender && (
            <div id="otherGender" className="mb-5">
              <label
                for="gender"
                className="mb-2 block uppercase text-gray-500 font-bold"
              >
                Otro género:
              </label>

              <input
                name="otherGender"
                type="text"
                id="gender"
                placeholder="Género"
                className="border p-3 w-full rounded-lg"
              />
            </div>
          )}

          {/* FECHA */}
          <div className="mb-5">
            <label
              for="date"
              className="mb-2 block uppercase text-gray-500 font-bold"
            >
              Fecha:
            </label>
            <div
              className="datepicker relative form-floating mb-3"
              data-mdb-toggle-button="false"
            >
              <input
                name="Date"
                className="border p-3 w-full rounded-lg invalid:border-pink-500"
                type="date"
                onChange={handleChangeDate}
                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Select a date"
                data-mdb-toggle="datepicker"
              />
            </div>

            {/* IMPLEMENTAR ESTADO useState */}
            {/* <DatePicker value={selectedDate} onChange={changeSelectedDate} />  */}
          </div>
          <div className="mb-5">
            <label
              for="date"
              className="mb-2 block uppercase text-gray-500 font-bold"
            >
              Edad:
            </label>
            <input
              required
              name="age"
              value={edad}
              disabled
              type="number"
              id="name"
              placeholder=""
              className="border p-3 w-full rounded-lg invalid:border-pink-500"
            />
          </div>

          {edad < 18 && (
            <>
              <div className="mb-5">
                <label
                  for="date"
                  className="mb-2 block uppercase text-gray-500 font-bold"
                >
                  Nombre del Acudiente:
                </label>
                <input
                  required
                  name="nameAcudent"
                  type="text"
                  id="text"
                  placeholder=""
                  className="border p-3 w-full rounded-lg invalid:border-pink-500"
                />
              </div>

              <div className="mb-5">
                <label
                  for="date"
                  className="mb-2 block uppercase text-gray-500 font-bold"
                >
                  Telefono Acudiente:
                </label>
                <input
                  required
                  name="phoneAcudent"
                  type="number"
                  id="name"
                  placeholder=""
                  className="border p-3 w-full rounded-lg invalid:border-pink-500"
                />
              </div>
            </>
          )}

          {/* ESTDADO CIVIL */}
          <div className="mb-5">
            <label
              for="maritalStatus"
              className="mb-2 block uppercase text-gray-500 font-bold"
            >
              Estado civil:
            </label>

            <select
              onChange={marital}
              className="mb-2 block text-gray-500 font-bold w-full p-3 rounded"
              name="maritalStatus"
            >
              <option value="1" selected>
                Soltero
              </option>
              <option value="2">Union libre</option>
              <option id="maritalStatus" value="3">
                Casado
              </option>
            </select>
          </div>
          {isVisible.maritalState && (
            <div className="mb-5">
              <label
                for="partner"
                className="mb-2 block uppercase text-gray-500 font-bold"
              >
                Nombre de Cónyuge:
              </label>

              <input
                name="partner"
                type="text"
                id="partner"
                placeholder="Nombre de cónyuge"
                className="border p-3 w-full rounded-lg"
              />
            </div>
          )}

          {/* HIJOS */}
          <div className="mb-5">
            <label
              for="sons"
              class="mb-2 block uppercase text-gray-500 font-bold after:content-['*'] after:ml-0.5 after:text-red-500"
            >
              Número de hijos:
            </label>

            <input
              min="1"
              max="5"
              ref={numberChildren}
              onChange={GenerateChildren}
              name="sons"
              type="number"
              id="sons"
              placeholder="Número de hijos"
              required
              className="border p-3 w-full rounded-lg invalid:border-pink-500"
            />
          </div>

          {Children.map((value, index) => {
            // return <Hijos state={Children} setState={setChildren}/>
            return (
              <>
                <Hijos Children={Children} index={index} />
              </>
            );
          })}

          {/* TRABAJO ACTUAL */}
          <div className="mb-5">
            <label
              for="currentJob"
              className="mb-2 block uppercase text-gray-500 font-bold"
            >
              ¿Trabaja actualmente?:
            </label>

            <select
              onChange={company}
              className="mb-2 block text-gray-500 font-bold w-full p-3 rounded"
              name="currentJob"
              id="currentJob"
            >
              <option value="no">No</option>
              <option id="otherCompany" value="si">
                Si
              </option>
            </select>
          </div>
          {/* NOMBRE DE LA EMPRESA */}

          {isVisible.company && (
            <div className="mb-5">
              <label
                for="company"
                class="mb-2 block uppercase text-gray-500 font-bold after:content-['*'] after:ml-0.5 after:text-red-500"
              >
                Nombre de la empresa:
              </label>

              <input
                required
                name="company"
                type="text"
                id="name-enterprise"
                placeholder="Nombre de la empresa"
                className="border p-3 w-full rounded-lg invalid:border-pink-500"
              />

              <label
                for="company"
                class="mb-2 block uppercase text-gray-500 font-bold after:content-['*'] after:ml-0.5 after:text-red-500"
              >
                Sueldo actual:
              </label>

              <input
                min="0"
                max="10000000"
                required
                name="company"
                type="number"
                id="money"
                placeholder="Nombre de la empresa"
                className="border p-3 w-full rounded-lg invalid:border-pink-500"
                
              />
            </div>
          )}

          {/* ESTRATO */}
          <div className="mb-5">
            <label
              for="stratum"
              className="mb-2 block uppercase text-gray-500 font-bold"
            >
              Estrato social:
            </label>

            <input
              min="1"
              max="6"
              onChange={zeroEnrollment}
              name="enrollment"
              type="number"
              id="enrollment"
              placeholder="Estrato"
              required
              className="border p-3 w-full rounded-lg invalid:border-pink-500"
            />
          </div>

          {isVisible.Enrollment && (
            <label htmlFor="Enrollment">
              Usted tiene derecho a matricula cero.
            </label>
          )}

          <div className="mb-5">
            <label
              for="stratum"
              className="mb-2 block uppercase text-gray-500 font-bold"
            >
              Departamento
            </label>
            <select
              name=""
              id="departamentos"
              onChange={handleChangeDepart}
              className="border p-3 w-full rounded-lg invalid:border-pink-500"
            >
              <option value="-1">Seleccione...</option>
              <option value="0">AMAZONAS</option>
              <option value="1">ANTIOQUIA</option>
              <option value="2">ARAUCA</option>
              <option value="3">ATLÁNTICO</option>
              <option value="4">BOLÍVAR</option>
              <option value="5">BOYACÁ</option>
              <option value="6">CALDAS</option>
              <option value="7">CAQUETÁ</option>
              <option value="8">CASANARE</option>
              <option value="9">CAUCA</option>
              <option value="10">CESAR</option>
              <option value="11">CHOCÓ</option>
              <option value="12">CÓRDOBA</option>
              <option value="13">CUNDINAMARCA</option>
              <option value="14">DISTRITO CAPITAL</option>
              <option value="15">GUAINÍA</option>
              <option value="16">GUAJIRA</option>
              <option value="17">GUAVIARE</option>
              <option value="18">HUILA</option>
              <option value="19">MAGDALENA</option>
              <option value="20">META</option>
              <option value="21">NARIÑO</option>
              <option value="22">NORTE DE SANTANDER</option>
              <option value="23">PUTUMAYO</option>
              <option value="24">QUINDÍO</option>
              <option value="25">RISARALDA</option>
              <option value="26">SAN ANDRÉS Y PROVIDENCIA</option>
              <option value="27">SANTANDER</option>
              <option value="28">SUCRE</option>
              <option value="29">TOLIMA</option>
              <option value="30">VALLE DEL CAUCA</option>
              <option value="31">VAUPÉS</option>
              <option value="32">VICHADA</option>
            </select>
          </div>
          <div className="mb-5">
            <label
              for="stratum"
              className="mb-2 block uppercase text-gray-500 font-bold"
            >
              Municipio
            </label>
            <select
              name=""
              id="municipios"
              className="border p-3 w-full rounded-lg invalid:border-pink-500"
            >
              {municipios.map((municipio, index) => {
                return (
                  <option key={index} value={index}>
                    {municipio}
                  </option>
                );
              })}
            </select>
          </div>

          {/* <input
            type="submit"
            value="crearCuenta"
            className="bg-sky-600 hover:bg-sky-700 transition-colors
                    cursor-pointer uppercase font-bold w-full p-3 text-white rounded-md"
          /> */}
          <button
            className="w-full bg-green-600 text-white active:bg-green-700 hover:bg-green-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="submit"
            value="Registrar"
            onClick={handleSubmit}
          >
            Registrar
          </button>
        </form>

        <>
          {showModal ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                      <h3 className="text-3xl font-semibold">
                        REGISTRO COMPLETO
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
                        Te has registrado en nuestra plataforma, todo está
                        protegido por el manual de terminos y condiciones.
                      </p>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>
                      {/* <button
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Save Changes
                      </button> */}
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
      </myForm>
      )}
    </Formik>
    
  );
};

export default Form;
