import { DashboardWrapper } from "../../../StyledComponents/Wrappers/DashboardWrapper";
import React from "react";
import VerticalChard from "./VerticalChard";
import DonutChard from "./DonutChard/DonutChard";

export default function Dashboard() {
  return (
    <DashboardWrapper>
      <VerticalChard />
      <DonutChard />
    </DashboardWrapper>
  );
}
