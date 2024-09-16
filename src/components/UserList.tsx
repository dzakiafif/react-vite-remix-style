import { match, P } from "ts-pattern";
import { Fragment } from "react";
import { Users } from "@types";

interface UserListProps {
  users: Users[];
}
const UserList = ({ users }: UserListProps) => {
  const renderContent = match({ users })
    .with(
      { users: P.select(P.when((users) => Array.isArray(users))) },
      (users) => (
        <div>
          {users.map((val: Users, i: number) => (
            <Fragment key={i}>
              <div>name: {val.name}</div>
              <div>username: {val.username}</div>
            </Fragment>
          ))}
        </div>
      )
    )
    .otherwise(() => <div>data not found</div>);

  return renderContent;
};

export default UserList;
