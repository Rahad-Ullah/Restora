import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";

const Navbar = () => {
    
    
    return (
        <div className="px-4 md:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center py-8 md:w-11/12 max-w-screen-2xl mx-auto">
                {/* Website Title */}
                <div>
                    <a href="/" className="text-secondary text-2xl md:text-3xl font-bold">Spicy Restora</a>
                </div>

                {/* Nav menu */}
                <ul className="flex items-center gap-10 xl:gap-12 text-secondary">
                    <li><a className="hover:text-primary" href="/">Home</a></li>
                    <li><a className="hover:text-primary" href="#">Recipes</a></li>
                    <li><a className="hover:text-primary" href="#">About</a></li>
                    <li><a className="hover:text-primary" href="#">Search</a></li>
                </ul>

                {/* Right side element */}
                <div className="flex items-center gap-4">
                    <label className="input rounded-full flex items-center gap-2 bg-base-200 bg-opacity-70 text-secondary text-opacity-70">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                        <input type="text" className="grow font-medium placeholder:text-secondary placeholder:text-opacity-50 placeholder:font-medium" placeholder="Search"/>
                    </label>
                    <button className="btn btn-circle btn-primary">
                        <FontAwesomeIcon icon={faUserCircle} className="text-2xl "/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;