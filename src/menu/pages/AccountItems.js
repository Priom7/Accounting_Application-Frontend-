import React from "react";
import { Link } from "react-router-dom";
import { Card } from "@material-ui/core";

const GroupItem = (props) => {
  console.log(props);
  let transactionCount = !!props.transactionCount;
  return (
    <li className='user-item'>
      <div className='center'>
        <Link to={`/${props.id}/transactions`}>
          <Card style={{ margin: "10px", padding: "10px" }}>
            <div className='user-item__info'>
              <h2>Account Name : {props.name} </h2>
              <h4>Group Name :{props.groupName}</h4>
              <h3>
                Number of Transactions :
                {props.transactionCount}{" "}
                {props.transactionCount === 1
                  ? "transaction"
                  : "transactions"}
              </h3>
              <h5>
                Account Created At : {props.createdAt}
              </h5>
            </div>
          </Card>
        </Link>
      </div>
    </li>
  );
};

export default GroupItem;
