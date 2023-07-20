import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  useDisclosure,
  ChakraProvider,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const LoginDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <ChakraProvider>
      <Link
        ref={btnRef}
        colorScheme="teal"
        onClick={onOpen}
        style={{ textDecoration: "none", fontWeight: "bold" }}
      >
        Login/Sign Up
      </Link>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="xs"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Please Login to continue</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Phone number..." />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Continue</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </ChakraProvider>
  );
};

export default LoginDrawer;
