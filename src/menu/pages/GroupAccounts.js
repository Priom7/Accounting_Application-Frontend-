import React, { useEffect, useState } from "react";
import { useHttpClient } from "../../hooks/http-hook";
import { useParams } from "react-router-dom";
import AccountList from "./AccountList";

const GroupAccounts = (props) => {
  const [accounts, setAccounts] = useState();
  const [group, setGroup] = useState();
  const {
    isLoading,
    isError,
    sendRequest,
    clearError,
  } = useHttpClient();

  const groupId = useParams().groupId;

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/accounts/group/${groupId}`
        );
        setAccounts(responseData.accounts);
        setGroup(responseData.groups);
      } catch (err) {}
    };
    fetchAccounts();
  }, [sendRequest, groupId]);

  return (
    <React.Fragment>
      {!isLoading && group && (
        <div className='center'>
          <div>
            <h3>Group Name : {group.name}</h3>
            <h4>
              Total Accounts : {group.accounts.length}
            </h4>
            <h4>Created At : {group.createdAt}</h4>
          </div>
        </div>
      )}

      {!isLoading && accounts && (
        <AccountList items={accounts} />
      )}
    </React.Fragment>
  );
};

export default GroupAccounts;
