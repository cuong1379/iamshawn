import Gold from "@/containers/gold/Gold";
import React from "react";
import css from "styled-jsx/css";

const Index = () => {
  return (
    <div className="wallet-container">
      <Gold />
      <style jsx>{style}</style>
    </div>
  );
};

const style = css`
  .wallet-container {
    background-color: #212121;
    min-height: 100vh;
    color: white;
  }
`;

export default Index;
