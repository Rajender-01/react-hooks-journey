import Form from "@/src/hooks-learning/01-basic-hooks/useState/Form";
import RightLazyInitialization from "@/src/hooks-learning/01-basic-hooks/useState/RightLazyInitialization";
import WrongLazyInitialization from "@/src/hooks-learning/01-basic-hooks/useState/WrongLazyInitialization";

const page = () => {
  return (
    <>
      <Form />
      <WrongLazyInitialization />
      <RightLazyInitialization />
    </>
  );
};

export default page;
