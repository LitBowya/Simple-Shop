import SearchComponent from "../searchbar/SearchBar";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand text-white fw-bold fs-2">GADDAFIs</a>
          <SearchComponent />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
