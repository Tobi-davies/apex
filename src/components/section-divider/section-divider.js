import { Pane } from "evergreen-ui";
// import styled from "@emotion/styled";

// const SectionDivider = styled(Pane)`
//   width: 100%;
//   background-color: #d4d4d8;
//   height: 1px;
// `;

function SectionDivider({ bgColor, orientation }) {
  return (
    <Pane
      height={orientation === "horizontal" ? 1 : "auto"}
      width={orientation === "horizontal" ? "100%" : 1}
      backgroundColor={bgColor}
    />
  );
}

export default SectionDivider;
