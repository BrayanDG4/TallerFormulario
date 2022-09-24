const NavBar = () => {
  return (
    <header className="p-5 border-b bg-white shadow">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-3xl font-black">
                    PRÁCTICA
                </h1>

                <nav className="flex gap-3 items-center">
                    <a className="font-bold uppercase text-gray-600 text-sm" href="#">Formulario</a>
                </nav>
            </div>
    </header>
  )
}

export default NavBar