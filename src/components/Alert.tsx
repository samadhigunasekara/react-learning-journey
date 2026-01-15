import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  //here you cant keep the type as string bcz if you want to insert an html element
  // so u use ReactNode class defined in the react module
}

const Alert = ({ children }: Props) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;

//rafce : react arrow function component export
