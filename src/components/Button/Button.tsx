import React from "react";

type ButtonProps = {
  text: string;
  onClick?: (value:any) => void
};
export default function Button(props: ButtonProps) {
  return (
    <div>
      <button  onClick={props.onClick} >{props.text}</button>
    </div>
  );
}
