import React from "react";

interface ChildProps {
  color: string;
  onClick: () => void;
}
export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <h3>
      {color}
      <button onClick={onClick}>Click me</button>
    </h3>
  );
};

export const ChildAsFC: React.FC<ChildProps> = ({
  color,
  onClick,
  children,
}) => {
  return (
    <div>
      {color}
      {children}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};
