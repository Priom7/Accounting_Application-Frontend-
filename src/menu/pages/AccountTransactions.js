import React, { useEffect, useState } from "react";
import { useHttpClient } from "../../hooks/http-hook";
import { useParams } from "react-router-dom";
import TransactionList from "./TransactionList";

const AccountTransactions = (props) => {
  const [
    transactionsDebited,
    setTransactionsDebited,
  ] = useState();
  const [
    transactionsCredited,
    setTransactionsCredited,
  ] = useState();
  const [account, setAccount] = useState();
  const {
    isLoading,
    isError,
    sendRequest,
    clearError,
  } = useHttpClient();

  const accountId = useParams().accountId;

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/transactions/account/${accountId}`
        );
        setTransactionsDebited(
          responseData.transactionsDebited
        );
        setTransactionsCredited(
          responseData.transactionsCredited
        );
        setAccount(responseData.account);
      } catch (err) {}
    };
    fetchTransactions();
  }, [sendRequest, accountId]);

  return (
    <React.Fragment>
      {account && (
        <div className='center'>
          <div>
            <h3>Account Name : {account.name}</h3>
            <h4>
              Total Transactions :{" "}
              {account.transactions.length}
            </h4>
            <h4>Created At : {account.createdAt}</h4>
          </div>
        </div>
      )}

      {!isLoading && account && (
        <TransactionList
          debits={transactionsDebited}
          credits={transactionsCredited}
        />
      )}
    </React.Fragment>
  );
};

export default AccountTransactions;
