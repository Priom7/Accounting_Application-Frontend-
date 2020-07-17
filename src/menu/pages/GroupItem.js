import React from "react";
import { Link } from "react-router-dom";
import { Card } from "@material-ui/core";

const GroupItem = (props) => {
  let accountCount = !!props.accountCount;
  return (
    <li className='user-item'>
      <div className='center'>
        <Link to={`/${props.id}/accounts`}>
          <Card style={{ margin: "10px", padding: "10px" }}>
            <div className='user-item__info'>
              <h2>Group Name : {props.name} </h2>
              <h3>
                Number of Accounts :{props.accountCount}{" "}
                {props.accountCount === 1
                  ? "account"
                  : "accounts"}
              </h3>
              <h5>Group Created At : {props.createdAt}</h5>
            </div>
          </Card>
          <span></span>
          <span></span>
          <span></span>
        </Link>
      </div>
    </li>
  );
};

export default GroupItem;
