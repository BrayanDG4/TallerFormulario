import React, {useState, useRef, useEffect, Children} from 'react';
import Hijos from './Hijos';

const Form = () => {
    const [selectedDate, changeSelectedDate] = useState(new Date());

    const [edad, setEdad] = useState(0);

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

        setEdad(_edad)
    }

    const [Children, setChildren] = useState([]);

    const GenerateChildren = () => {
        let temp = [];
        for (let index = 0; index < numberChildren.current.value; index++) {

            temp[index] = {
                id: index,
                nombreHijo: "",
                edadHijo: ""
            }
        }
        setChildren(temp);
    }

    const gender = (event) =>{
        if (document.getElementById('other').selected == true) {
            setIsVisible({
                ...isVisible, otherGender: true
            });
        } else{
            setIsVisible({
                ...isVisible, otherGender: false
            });
        }
    }

    //Si es estrato 1 o 2 el estudiante tiene derecho a matricula cero

    const zeroEnrollment = (event) => {
        if(document.getElementById('enrollment').value == 1 || document.getElementById('enrollment').value == 2){
            setIsVisible({
                ...isVisible, Enrollment: true
            });
        } else{
            setIsVisible({
                ...isVisible, Enrollment: false
            });
        }
    }

    const marital = (event) =>{
        if (document.getElementById('maritalStatus').selected == true) {
            setIsVisible({
                ...isVisible, maritalState: true
            });
        } else{
            setIsVisible({
                ...isVisible, maritalState: false
            });
        }
    }

    const company = (event) =>{
        if (document.getElementById('otherCompany').selected == true) {
            setIsVisible({
                ...isVisible, company: true
            });
        } else{
            setIsVisible({
                ...isVisible, company: false
            });
        }
    }

  return (
    //codigo del formulario
    <div className="md:flex md:justify-center md:gap-10 md:items-center m-5">
        <div className="md:w-4/12 bg-white p-6 rounded-lg shadow-lg">
            <form action="">
                {/* NOMBRE */}
                <div className="mb-5">
                    <label for='document' className="mb-2 block uppercase text-gray-500 font-bold after:content-['*'] after:ml-0.5 after:text-red-500">
                        Documento:
                    </label>

                    <input required name="document" type="text" id="document" placeholder="Documento"
                    className="border p-3 w-full rounded-lg invalid:border-pink-500"/>
                </div>
                {/* DOCUMENTO */}
                <div className="mb-5">
                    <label for='name' class="mb-2 block uppercase text-gray-500 font-bold after:content-['*'] after:ml-0.5 after:text-red-500">
                        Nombre:
                    </label>

                    <input required name="name" type="text" id="name" placeholder="Nombre" 
                    className="border p-3 w-full rounded-lg invalid:border-pink-500"/>
                </div>
                {/* GENERO - SELECT */}
                <div className="mb-5">
                    <label for='genderBox' className="mb-2 block uppercase text-gray-500 font-bold">
                        Género:
                    </label>

                    <select onChange={gender} className="mb-2 block text-gray-500 font-bold w-full p-3 rounded" name="genderBox" id="genderBox">
                        <option value="Femenino" selected>Femenino</option>
                        <option value="Masculino">Másculino</option>
                        <option id="other" value="otro">Otro</option>
                    </select>
                </div>
                {/* OTRO GENERO*/}
                {
                    isVisible.otherGender && (
                        <div id="otherGender" className="mb-5">
                        <label for='gender' className="mb-2 block uppercase text-gray-500 font-bold">
                        Otro género:
                        </label>

                        <input name="gender" type="text" id="gender" placeholder="Género" 
                        className="border p-3 w-full rounded-lg"/>
                        </div>
                    )
                }
                
                {/* FECHA */}
                <div className="mb-5">
                    <label for='date' className="mb-2 block uppercase text-gray-500 font-bold">
                        Fecha:
                    </label>
                    <div class="datepicker relative form-floating mb-3 xl:w-96" data-mdb-toggle-button="false">
                        <input className="border p-3 w-full rounded-lg invalid:border-pink-500" type="date"
                        onChange={handleChangeDate}
                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Select a date" data-mdb-toggle="datepicker" />
                    
                    </div>                    
                
                    {/* IMPLEMENTAR ESTADO useState */}
                    {/* <DatePicker value={selectedDate} onChange={changeSelectedDate} />  */}
                </div>
                <div className='mb-5'>
                    <label for='date' className="mb-2 block uppercase text-gray-500 font-bold">
                            Edad:
                    </label>
                    <input required name="name" value={edad} disabled type="number" id="name" placeholder="" 
                    className="border p-3 w-full rounded-lg invalid:border-pink-500"/>
                </div>

                {
                    edad < 18 && (
                        <>
                            <div className='mb-5'>
                                <label for='date' className="mb-2 block uppercase text-gray-500 font-bold">
                                        Nombre del Acudiente:
                                </label>
                                <input required name="name" type="text" id="text" placeholder="" 
                                className="border p-3 w-full rounded-lg invalid:border-pink-500"/>
                            </div>

                            <div className='mb-5'>
                                <label for='date' className="mb-2 block uppercase text-gray-500 font-bold">
                                        Telefono Acudiente:
                                </label>
                                <input required name="name" type="number" id="name" placeholder="" 
                                className="border p-3 w-full rounded-lg invalid:border-pink-500"/>
                            </div>
                        </>

                    )
                }
                
                {/* ESTDADO CIVIL */}
                <div className="mb-5">
                    <label for='maritalStatus' className="mb-2 block uppercase text-gray-500 font-bold">
                        Estado civil:
                    </label>

                    <select onChange={marital} className="mb-2 block text-gray-500 font-bold w-full p-3 rounded" name="maritalStatus">
                        <option value="Femenino" selected>Soltero</option>
                        <option value="Masculino">Casado</option>
                        <option id="maritalStatus" value="union-libre">Unión libre</option>
                    </select>
                </div>
                {
                    isVisible.maritalState &&(
                        <div className="mb-5">
                            <label for='partner' className="mb-2 block uppercase text-gray-500 font-bold">
                                Nombre de Cónyuge:
                            </label>

                            <input name="partner" type="text" id="partner" placeholder="Nombre de cónyuge" 
                            className="border p-3 w-full rounded-lg"/>
                        </div>
                    )
                } 

                {/* HIJOS */}
                <div className="mb-5">
                    <label for='sons' class="mb-2 block uppercase text-gray-500 font-bold after:content-['*'] after:ml-0.5 after:text-red-500">
                        Número de hijos:
                    </label>

                    <input min="1" max="5" ref={numberChildren} onChange={GenerateChildren} name="sons" type="number" id="sons" placeholder="Número de hijos"
                    required className="border p-3 w-full rounded-lg invalid:border-pink-500"/>
                </div>
                
                {
                    Children.map((value, index) => {
                        
                        // return <Hijos state={Children} setState={setChildren}/>
                        return (
                            <>
                                <p>{Children[index].nombreHijo}</p>
                                <Hijos Children={Children} index={index}/>
                            </>
                        )
                    })
                }

                {/* TRABAJO ACTUAL */}
                <div className="mb-5">
                    <label for='currentJob' className="mb-2 block uppercase text-gray-500 font-bold">
                        ¿Trabaja actualmente?:
                    </label>

                    <select onChange={company} className="mb-2 block text-gray-500 font-bold w-full p-3 rounded" name="currentJob" id="currentJob">
                        <option value="no">No</option>
                        <option id='otherCompany' value="si">Si</option>
                    </select>
                </div>
                {/* NOMBRE DE LA EMPRESA */}
                
                {
                    isVisible.company &&(
                        <div className="mb-5">
                            <label for='company' class="mb-2 block uppercase text-gray-500 font-bold after:content-['*'] after:ml-0.5 after:text-red-500">
                                Nombre de la empresa:
                            </label>

                            <input required name="company" type="number" id="sons" placeholder="Nombre de la empresa" 
                            className="border p-3 w-full rounded-lg invalid:border-pink-500"/>
                        </div>
                    )
                }

                {/* ESTRATO */}
                <div className="mb-5">
                    <label for='stratum' className="mb-2 block uppercase text-gray-500 font-bold">
                        Estrato social:
                    </label>

                    <input min="1" max="6"  onChange={zeroEnrollment} name="enrollment" type="number" id="enrollment" placeholder="Estrato"
                    required className="border p-3 w-full rounded-lg invalid:border-pink-500"/>
                </div>

                {
                    isVisible.Enrollment && (
                        <label htmlFor="Enrollment">
                            Usted tiene derecho a matricula cero.
                        </label>
                    )
                }
                
                <input 
                    type="submit"
                    value="crearCuenta"
                    className="bg-sky-600 hover:bg-sky-700 transition-colors
                    cursor-pointer uppercase font-bold w-full p-3 text-white rounded-md"
                />
            </form>
        </div>
    </div>
  )
}

export default Form