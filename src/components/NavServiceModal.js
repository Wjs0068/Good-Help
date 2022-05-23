import React from "react";

function NavServiceModal() {
  const clickedButton = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="modal-container">
      <div className="grid">
        <div className="services-container">
          <h4 className="headerFour">Home</h4>
          <button
            value="Movers"
            className="para"
            onClick={(e) => clickedButton(e, "value")}
          >
            Movers
          </button>
          <button
            value="Electrician"
            className="para"
            onClick={(e) => clickedButton(e, "value")}
          >
            Electrician
          </button>

          <button
            className="para"
            value="HVAC"
            onClick={(e) => clickedButton(e, "value")}
          >
            HVAC
          </button>
          <button
            value="Lawn Maintenance"
            className="para"
            onClick={(e) => clickedButton(e, "value")}
          >
            Lawn Maintenance
          </button>
          <button
            value="Plumbing"
            className="para"
            onClick={(e) => clickedButton(e, "value")}
          >
            Plumbing
          </button>
          <button
            value="Home Improvements"
            className="para"
            onClick={(e) => clickedButton(e, "value")}
          >
            Home Improvements
          </button>
          <button
            value="Paint"
            className="para"
            onClick={(e) => clickedButton(e, "value")}
          >
            Paint
          </button>
        </div>
        <div className="services-container">
          <h4 className="headerFour">Auto</h4>
          <button
            value="Maintenance"
            onClick={(e) => clickedButton(e, "value")}
            className="para"
          >
            Maintenance
          </button>
          <button
            value="Body Repair"
            className="para"
            onClick={(e) => clickedButton(e, "value")}
          >
            Body Repair
          </button>
          <button
            value="Detailing"
            className="para"
            onClick={(e) => clickedButton(e, "value")}
          >
            Detailing
          </button>
          <h4 className="headerFour">Financial</h4>
          <button
            value="Financial Planning"
            onClick={(e) => clickedButton(e, "value")}
            className="para"
          >
            Financial Planning
          </button>
          <button
            value="Insurance"
            className="para"
            onClick={(e) => clickedButton(e, "value")}
          >
            Insurance
          </button>
          <button
            value="Tax and Accounting"
            className="para"
            onClick={(e) => clickedButton(e, "value")}
          >
            Tax and Accounting
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavServiceModal;
