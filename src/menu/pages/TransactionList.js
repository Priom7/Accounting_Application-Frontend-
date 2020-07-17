import React from "react";

import TransactionItems from "./TransactionItems";

const TransactionList = ({ debits, credits }) => {
  console.log(debits);
  console.log(credits);
  if (debits.length === 0 && credits.length === 0) {
    return (
      <div className='center'>
        <div>
          <h2>No Transactions history found.</h2>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1 className='center'>All Debits</h1>
      {debits.length === 0 && (
        <div className='center'>No Debit history found</div>
      )}
      <ul>
        {debits.map((debit) => (
          <TransactionItems
            key={debit.id}
            id={debit.id}
            debit={debit.accountDebited}
            debitedAccountName={debit.debitedAccountName}
            debitedGroupName={debit.debitedGroupName}
            debitAmount={debit.debitAmount}
            credit={debit.accountCredited}
            creditedAccountName={debit.creditedAccountName}
            creditedGroupName={debit.creditedGroupName}
            creditAmount={debit.creditAmount}
            narration={debit.narration}
            createdAt={debit.createdAt}
          ></TransactionItems>
        ))}
      </ul>
      <h1 className='center'>All Credits</h1>
      {credits.length === 0 && (
        <div className='center'>
          No Credit history found
        </div>
      )}
      <ul>
        {credits.map((credit) => {
          return (
            <TransactionItems
              key={credit.id}
              id={credit.id}
              debit={credit.accountDebited}
              debitedAccountName={credit.debitedAccountName}
              debitedGroupName={credit.debitedGroupName}
              debitAmount={credit.debitAmount}
              credit={credit.accountCredited}
              creditedAccountName={
                credit.creditedAccountName
              }
              creditedGroupName={credit.creditedGroupName}
              creditAmount={credit.creditAmount}
              narration={credit.narration}
              createdAt={credit.createdAt}
            ></TransactionItems>
          );
        })}
      </ul>
    </div>
  );
};

export default TransactionList;
