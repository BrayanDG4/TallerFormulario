const Form = () => {
  return (
    //codigo del formulario
    <div className="md:flex md:justify-center md:gap-10 md:items-center m-5">
        <div className="md:w-4/12 bg-white p-6 rounded-lg shadow-lg">
            <form action="" method="POST">
                <div className="mb-5">
                    <label for='document' className="mb-2 block uppercase text-gray-500 font-bold">
                        Documento:
                    </label>

                    <input name="document" type="text" id="document" placeholder="Documento"
                    className="border p-3 w-full rounded-lg"/>
                </div>

                <div className="mb-5">
                    <label for='name' class="mb-2 block uppercase text-gray-500 font-bold">
                        Nombre:
                    </label>

                    <input name="name" type="text" id="name" placeholder="Nombre" 
                    className="border p-3 w-full rounded-lg"/>
                </div>

                <div className="mb-5">
                    <label for='gender' className="mb-2 block uppercase text-gray-500 font-bold">
                        Género:
                    </label>

                    <input name="gender" type="gender" id="email" placeholder="Género" 
                    className="border p-3 w-full rounded-lg"/>
                </div>

                <div className="mb-5">
                    <select className="mb-2 block text-gray-500 font-bold width" name="gender" id="gender">
                        <option value="Femenino" selected>Femenino</option>
                        <option value="Masculino">Másculino</option>
                        <option value="otro"></option>
                    </select>
                </div>
                

                <div className="mb-5">
                    <label for='password' className="mb-2 block uppercase text-gray-500 font-bold">
                        Contraseña:
                    </label>

                    <input name="password" type="password" id="password" placeholder="Contraseña" 
                    className="border p-3 w-full rounded-lg"/>
                </div>

                <div className="mb-5">
                    <label for='password_confirmation' className="mb-2 block uppercase text-gray-500 font-bold">
                        Repetir contraseña:
                    </label>

                    <input name="password_confirmation" type="password" id="password_confirmation" placeholder="Repetir contraseña" 
                    className="border p-3 w-full rounded-lg"/>
                </div>

                <input 
                    type="submit"
                    value="Crear cuenta"
                    className="bg-sky-600 hover:bg-sky-700 transition-colors
                    cursor-pointer uppercase font-bold w-full p-3 text-white rounded-md"
                />
            </form>
        </div>
    </div>
  )
}

export default Form