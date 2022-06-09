// import React from "react";
// import { Pane } from "evergreen-ui";

// const Container = ({children}) => {
//   return (
//     <Pane maxWidth={1100} width="100%" margin="auto">
//       <Pane>km;lhgiuf</Pane>
//     </Pane>
//   );
// };

// export default Container;

import { Pane } from "evergreen-ui";
import styled from "@emotion/styled";

const Container = styled(Pane)`
  width: 100%;
  margin: 0 auto;
  padding-right: 40px;
  padding-left: 40px;

  /* overflow: auto; */

  /* &::-webkit-scrollbar {
    display: none;
  } */

  @media (max-width: 992px) {
    padding-right: 20px;
    padding-left: 20px;
  }
`;

export default Container;
