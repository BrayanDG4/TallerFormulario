import React from 'react'

const SideNavBar = () => {
  return (
    <div class="float-right invisible md:visible lg:visible w-60 h-screen shadow-md bg-white px-1">
        <ul class="relative">
            <li class="relative">
            <a class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="/form" data-mdb-ripple="true" data-mdb-ripple-color="dark">Registro</a>
            </li>
            <li class="relative">
            <a class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="/search" data-mdb-ripple="true" data-mdb-ripple-color="dark">Consultar</a>
            </li>
            <li class="relative">
            <a class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="/modify" data-mdb-ripple="true" data-mdb-ripple-color="dark">Modificar</a>
            </li>
            <li class="relative">
            <a class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="/delete" data-mdb-ripple="true" data-mdb-ripple-color="dark">Eliminar</a>
            </li>
        </ul>
    </div>
  )
}

export default SideNavBar