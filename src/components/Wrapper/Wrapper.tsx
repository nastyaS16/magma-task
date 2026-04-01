import type { ReactNode } from "react";

import "./wraper.css";

type Props = {
  children: ReactNode;
};

function Wrapper({ children }: Props) {
  return <div className="wrapper">{children}</div>;
}

export default Wrapper;
