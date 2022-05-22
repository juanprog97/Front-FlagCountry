import React from "react";
import "./DetailsFlag.scss";
import { useParams } from "react-router-dom";

export const DetailsFlag = () => {
  const { country } = useParams();

  return <div>{country}</div>;
};
