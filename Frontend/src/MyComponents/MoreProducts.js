import React from "react";
import Images from "./MenuApi";
export const MoreProducts = () => {
  
  return (
    <>
      <center>
        {Images.map((item) => {
          return (
            <div className="row" style={{display:"inline-block", margin:"auto"}} key={item.id}>
              <div className="container-fluid col-lg-1.5 col-md-1.5 col ">
                <div className="card shadow-sm">
                  <img src={item.image} alt="" style={{width:"300px", height:"300px"}}/>
                  <div className="card-body">
                    <p className="card-text">{item.name}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      <small className="text-muted">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </center>
    </>
  );
};
