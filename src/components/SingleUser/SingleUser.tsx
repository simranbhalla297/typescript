import React from "react";

type SingleUserProps = {
  userList: {
    name: string;
    age: number;
    email: string;
    phonenumber: number;
  };
};
function SingleUser(props: SingleUserProps) {
  const user = props.userList;
  //   console.log("userdata", user);
  return (
    <div>
      <p>user name:{user.name}</p>

    </div>
  );
}

export default SingleUser;
