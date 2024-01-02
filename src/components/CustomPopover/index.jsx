import React from "react";
import { OverlayTrigger, Popover, Button } from "react-bootstrap";
import "./style.css";

function CustomPopover({ capacityValues }) {

  return (
    <OverlayTrigger
      trigger={"click"}
      placement={"top"}
      overlay={
        <Popover id={`popover-positioned-bottom`}>
          <Popover.Header>Maximum Capacity</Popover.Header>
          <Popover.Body>
            <div className="custom-popover-body">
              {capacityValues.map((item, index) => {
                return (
                  <div className="custom-popover-item" key={index}>
                    <div className="custom-popover-item-name">{item.name}</div>
                    <div>{item.value} Items</div>
                  </div>
                );
              })}
            </div>
          </Popover.Body>
        </Popover>
      }
    >
      <Button type="submit" variant="success">Prediction</Button>
    </OverlayTrigger>
  );
}

export default CustomPopover;
