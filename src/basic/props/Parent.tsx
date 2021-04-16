import { ChildAsFC } from "./Child";

const Parent = () => {
  return (
    <ChildAsFC
      color="red"
      onClick={() => {
        console.log(222);
      }}
    >
      ajslfjlajflj
    </ChildAsFC>
  );
};

export default Parent;
