import React, { useEffect, useState } from "react";
import { useHttpClient } from "../../hooks/http-hook";
import GroupList from "./GroupList";

const Groups = () => {
  const [groups, setgroups] = useState();

  const {
    isLoading,
    isError,
    sendRequest,
    clearError,
  } = useHttpClient();

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const responseData = await sendRequest(
          "http://localhost:5000/api/groups"
        );

        setgroups(responseData.groups);
      } catch (err) {}
    };
    fetchGroups();
  }, [sendRequest]);

  return (
    <div>
      <h1 className='center'> All Groups </h1>
      {!isLoading && groups && <GroupList items={groups} />}
    </div>
  );
};

export default Groups;
