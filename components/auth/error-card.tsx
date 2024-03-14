import { CardWrapper } from "@/components/auth/card-wrapper";
import { BsExclamationCircle } from "react-icons/bs";

export const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="Something went wrong!"
      backButtonHref="/auth/login"
      backButtonLabel="Back to login"
    >
      <div className="w-full flex justify-center items-center">
        <BsExclamationCircle className="text-destructive" />
      </div>
    </CardWrapper>
  );
};
