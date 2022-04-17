import logo from './eylogo.svg';

const Navbarlanding=()=>
{
    return(
        <div>
            <div className="bg-img" style={{backgroundImage: "url('https://mdbootstrap.com/img/new/fluid/city/018.jpg')"}}>
        <div className="mask" style={{backgroundColor:" rgba(0, 21, 54, 0.7)"}}>
          <nav className="navbarr fixed-top navbar-expand-lg navbar-dark ">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                  <img src={logo} width="100" height="34" className="d-inline-block align-text-top"/></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="https://www.ey.com/en_in">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="https://www.ey.com/en_in/about-us">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="https://www.ey.com/en_in/insights">More</a>
                  </li>
                </ul>
                <form className="d-flex">
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search" aria-label="Search"
                      aria-describedby="button-addon2"/>
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2"><i
                        className="bi bi-search"></i></button>
                  </div>
                </form>
                
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button"
                      data-bs-toggle="dropdown" aria-expanded="false">
                      <i className="bi bi-person-fill"></i>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                      <li><a className="dropdown-item" href="#">Log In</a></li>
                      <li><a className="dropdown-item" href="./sample.html">Sign Up</a></li>
                      <li><a className="dropdown-item" href="https://www.ey.com/en_in/connect-with-us">Help</a></li>
                    </ul>
                  </li>
                </ul>
               
              </div>
            </div>
          </nav>
          </div>
          </div>
        </div>
    )
}

export default Navbarlanding;