import React from "react";

import AccountItems from "./AccountItems";

const AccountList = (props) => {
  return (
    <div>
      {props.items.length === 0 && (
        <div className='center'>No Account Found</div>
      )}
      <ul className='group__list'>
        {props.items.map((account) => {
          return (
            <AccountItems
              key={account.id}
              id={account.id}
              name={account.name}
              groupName={account.groupName}
              transactionCount={account.transactions.length}
              createdAt={account.createdAt}
            ></AccountItems>
          );
        })}
      </ul>
    </div>
  );
};

export default AccountList;
