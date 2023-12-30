import favicon from "../images/favicon.ico";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <img src={favicon} width={40} />
        <button className="btn btn-outline-success" type="submit">
          Sign Up
        </button>
      </nav>
    </>
  );
};

export default NavBar;
