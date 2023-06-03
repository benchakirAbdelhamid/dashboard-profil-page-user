import React, { useEffect, useState } from "react";

const Content = (props) => {

  const [infoUseru , setInfoUser] = useState([])

    useEffect(()=>{
        // console.log(props.infoUser[0])
        if(props.infoUser.length > 0){
          // console.log(props.infoUser.length)
          setInfoUser(props.infoUser[0])

        }
        // console.log(props.total_info_cammend_ticket.length)
    },[props])

    useEffect(() => {
      // console.log('info ===> ',infoUseru)
    }, [infoUseru]);

    const handleInputChange = (e, id, field) => {
      const updatedTableData = {...infoUseru , [field]:e.target.value}
      setInfoUser(updatedTableData)
      // console.log(updatedTableData)
      // console.log(infoUseru)
    };

    const handleNewDataUpdated = ()=>{
      console.log('new data ==> ',infoUseru)
    }

  return (
    <>
      {/* <!-- Page content --> */}
      <div className="container-fluid mt--7">
        <div className="row">
          <div className="col-xl-4 order-xl-2 mb-5 mb-xl-0">
            <div className="card card-profile shadow">
              <div className="row justify-content-center">
                <div className="col-lg-3 order-lg-2">
                  <div className="card-profile-image">
                    <a href="#">
                      <img
                        src={ props.infoUser[0].photoURL}
                        className="rounded-circle"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                <div className="d-flex justify-content-between"></div>
              </div>
              <div className="card-body pt-0 pt-md-4">
                <div className="row">
                  <div className="col">
                    <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                      <div>
                        <span className="heading"> { props.total_info_cammend_ticket[0].total_The_Amount_Paid} $  </span>
                        <span className="description">The Amount Paid</span>
                      </div>
                      <div>
                        <span className="heading">{ props.total_info_cammend_ticket[0].total_number_orders}</span>
                        <span className="description">number Orders</span>
                      </div>
                      <div>
                        <span className="heading">{ props.total_info_cammend_ticket[0].total_ticket_quantity}</span>
                        <span className="description">Ticket Quantity</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h3>
                    <span className="font-weight-light">{ props.total_info_cammend_ticket[0].date_inscription}</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-8 order-xl-1">
            <div className="card bg-secondary shadow">
              <div className="card-header bg-white border-0">
                <div className="row align-items-center">
                  <div className="col-8">
                    <h3 className="mb-0">My account</h3>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <form>
                  <h6 className="heading-small text-muted mb-4">
                    User information
                  </h6>
                  <div className="pl-lg-4">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group focused">
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            User First Name
                          </label>
                          <input
                            type="text"
                            id="input-username"
                            className="form-control form-control-alternative"
                            value={ infoUseru.userFirstName}
                            onChange={(e) => handleInputChange(e, infoUseru.userId,'userFirstName')}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="form-control-label" htmlFor="input-email">
                            User Last Name
                          </label>
                          <input
                            type="text"
                            id="input-email"
                            className="form-control form-control-alternative"
                            value={infoUseru.userLastName}
                            onChange={(e) => handleInputChange(e, infoUseru.userId,'userLastName')}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group focused">
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            id="input-first-name"
                            className="form-control form-control-alternative"
                            value={ infoUseru.userEmail}
                            onChange={(e) => handleInputChange(e, infoUseru.userId,'userEmail')}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group focused">
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Password
                          </label>
                          <input
                            type="text"
                            id="input-last-name"
                            className="form-control form-control-alternative"
                            value={ infoUseru.userPassord}
                            onChange={(e) => handleInputChange(e, infoUseru.userId,'userPassord')}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <div className="form-group focused">
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            BirthDate
                          </label>
                          <input
                          disabled
                            type="text"
                            id="input-first-name"
                            className="form-control form-control-alternative"
                            placeholder="First name"
                            value={ infoUseru.birthDate}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <a href="#" onClick={handleNewDataUpdated} className="btn btn-info">
                          Edit profile
                        </a>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
