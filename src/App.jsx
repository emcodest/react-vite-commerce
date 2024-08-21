import {
  Card,
  CardBody,
  Text,
  SimpleGrid,
  Box,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Skeleton,
  Spinner,
  Stack,
} from "@chakra-ui/react";

// import Button from "./components/button/Button";
import TableComp from "./components/Table";
import Alert from "./components/Alert";
import ToastComp from "./components/Toast";
import BasicModal from "./components/Modal";
export default function App() {
  // const Submit = () => {
  //   alert("good to go");
  // };

  return (
    <>
      {/* columns={[2, null, 3]} - responsive */}
      <SimpleGrid columns={[1, null, 2]} spacing={1}>
        <Box bg="yellow" height={400}>
          <TableComp />
        </Box>
        <Box bg="purple" height={400}>
          <Card>
            <CardBody>
              <Text>
                View a summary of all your customers over the last month.
              </Text>
            </CardBody>
          </Card>
        </Box>
      </SimpleGrid>
      <div>
        <Alert />
        <ToastComp />
        <BasicModal />
      </div>
      <div>
        <FormControl isReadOnly={false} isRequired={true}>
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
      </div>
      <div>
        <Stack>
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
        </Stack>
      </div>
      <div>
        <Spinner />
      </div>
    </>
  );
}
