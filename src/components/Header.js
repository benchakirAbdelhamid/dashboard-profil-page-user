import React, { useEffect } from "react";

const Header = (props) => {
    useEffect(()=>{
        // if(props.infoUser.l)
        // console.log(props.infoUser[0].userFirstName            )
        // console.log(props.infoUser[0].userLastName            )
        // console.log(props.infoUser.length           )
    })
  return (
    <>
      {/* <!-- Top navbar --> */}
      <nav
        className="navbar navbar-top navbar-expand-md navbar-dark"
        id="navbar-main"
      >
        <div className="container-fluid">
          {/* <!-- Brand --> */}
          <b className="h3 mb-0 text-white text-uppercase  d-lg-inline-block user_profil">
            User profile
          </b>

          {/* <!-- User --> */}
          <ul className="navbar-nav align-items-center  d-md-flex">
            <li className="nav-item dropdown">
              <a
                className="nav-link pr-0"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <div className="media align-items-center parent_profil">
                  <span className="avatar avatar-sm rounded-circle">
                    <img
                      alt="Image placeholder"
                      src={ props.infoUser[0].photoURL}
                    />
                  </span>
                  <div className="media-body ml-2  d-lg-block">
                    <span className="mb-0 text-sm  font-weight-bold nameProfil">
                      {props.infoUser.length > 0 && 
                      props.infoUser[0].userFirstName + ' ' + props.infoUser[0].userLastName
                      }
                    </span>
                  </div>
                  <button className="nameProfil btn_logout"> logout</button>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* <!-- Header --> */}
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "600px",
          backgroundImage:
            "url(https://raw.githubusercontent.com/creativetimofficial/argon-dashboard/gh-pages/assets-old/img/theme/profile-cover.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        {/* <!-- Mask --> */}
        <span className="mask bg-gradient-default opacity-8"></span>
        {/* <!-- Header container --> */}
        <div className="container-fluid d-flex align-items-center">
          <div className="row">
            <div className="col-lg-7 col-md-10 nameUser">
              <h1 className=" text-white nameHello">Hello    {props.infoUser.length > 0 && 
                      props.infoUser[0].userFirstName + ' ' + props.infoUser[0].userLastName
                      }</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
