import React from "react";

import GroupItem from "./GroupItem";

const GroupList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className='center'>
        <div>
          <h2>No Group Found.</h2>
        </div>
      </div>
    );
  }

  return (
    <ul className='group__list'>
      {props.items.map((group) => {
        return (
          <GroupItem
            key={group.id}
            id={group.id}
            name={group.name}
            accountCount={group.accounts.length}
            createdAt={group.createdAt}
          ></GroupItem>
        );
      })}
    </ul>
  );
};

export default GroupList;
