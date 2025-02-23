import { Button, useToast } from "@chakra-ui/react";
export default function ToastComp() {
  const toast = useToast();
  return (
    <Button
      onClick={() =>
        toast({
          title: "Account created.",
          description: "We've created your account for you.",
          status: "success",
          duration: 9000,
          isClosable: true,
          position: "top-right"
        })
      }
    >
      Show Toast
    </Button>
  );
}
