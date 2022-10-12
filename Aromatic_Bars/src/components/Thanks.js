import React from "react";
import { Button, Flex, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Thanks = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/local");
  };

  return (
    <Flex justify="center" mt="100px">
      <Flex flexDirection="column" align="center">
        <img
          width="80%"
          src="https://th.bing.com/th/id/OIP.oFEWpe-Xf8ZEEbHeIiBrNQHaHa?w=204&h=204&c=7&r=0&o=5&pid=1.7"
          alt=""
        />
        <Heading mb="20px" as="h2" size="md">
          Thankyou for providing the feedback
        </Heading>
        <p>We will work towards imporving your experience</p>
        <Button mt="20px" onClick={handleClose}>
          Close
        </Button>
      </Flex>
    </Flex>
  );
};

export default Thanks;
