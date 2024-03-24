import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="p-4 text-white">
      <div className="container flex justify-between h-10 mx-auto items-center">
        <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
          <img src="../../../../public/images/logo.png" alt="logo" className="w-12 h-12" />
        </a>
        <div className="items-center flex-shrink-0">
          <button className="self-center mr-4 px-4 py-3 text-sm"><Link to="/auth/login">LOG IN</Link></button>
          <button className="self-center px-4 py-3 text-sm bg-white text-slate-900 hover:bg-stone-200"><Link to="/auth/signup">GET STARTED</Link></button>
        </div>
      </div>
    </header>
  )
}

export default Header