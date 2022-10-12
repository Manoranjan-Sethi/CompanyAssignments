import {
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Flex,
  Spacer,
  Radio,
  HStack,
  RadioGroup,
  Button,
  Box,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const [username, setusername] = useState("");
  const [phonenumber, setphonenumber] = useState("");
  const [email, setemail] = useState("");
  const [service, setservice] = useState("");
  const [beverage, setbeverage] = useState("");
  const [clean, setclean] = useState("");
  const [experience, setexperience] = useState("");

  const initialValues = {
    username: username,
    email: email,
    phonenumber: phonenumber,
    service: service,
    beverage: beverage,
    clean: clean,
    experience: experience,
  };
  console.log(initialValues);

  const navigate = useNavigate();

  function error(message) {
    toast.error(message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // localStorage.setItem("data", JSON.stringify(initialValues));
    // validate(initialValues);
    // setIsSubmit(true);
    if (username === "") {
      error("Name is required or invalid");
      return;
    }
    const emailRegex = new RegExp(
      /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
      "gm"
    );
    const isValidEmail = emailRegex.test(email);
    if (email.length) {
      if (!isValidEmail) {
        error("Invalid email id");
        return;
      }
    }
    if (phonenumber === "" || phonenumber.length != 10) {
      error("Phonenumber is required or invalid");
      return;
    }
    if (service === "") {
      error("Service rating is required or invalid");
      return;
    }
    if (beverage === "") {
      error("Beverage rating is required or invalid");
      return;
    }
    if (clean === "") {
      error("Clean rating  is required or invalid");
      return;
    }
    if (experience === "") {
      error("Experience rating  is required or invalid");
      return;
    }
    let data = JSON.parse(localStorage.getItem("data2")) || [];
    let data2 = [...data, initialValues];
    localStorage.setItem("data2", JSON.stringify(data2));
    setIsSubmit(true);

    navigate("/thanks");
  };

  useEffect(() => {
    if (Object.keys(initialValues).length === 0 && isSubmit) {
      console.log(initialValues);
    }
  }, [formErrors]);

  return (
    <Flex justify="center" mt="10%">
      <Box m="auto" gap="5%" w boxShadow="2" p="50px">
        <div>
          <Heading mb="20px" as="h4" size="md">
            Aromatic Bars
          </Heading>
        </div>
        <FormControl isRequired>
          <Flex pr="20px">
            <div>
              <div>
                <FormLabel>Customer Name</FormLabel>
                <Input
                  mb="20px"
                  mr="10px"
                  type="text"
                  name="username"
                  placeholder="E.g. John Doe"
                  onChange={(e) => setusername(e.target.value)}
                />
              </div>
              <div>
                <FormLabel>Phone</FormLabel>
                <Input
                  type="number"
                  name="phonenumber"
                  placeholder="9999999999"
                  onChange={(e) => setphonenumber(e.target.value)}
                />
              </div>
              <div>
                <FormLabel mt="20px">
                  Please rate the quality of the service you received from the
                  host.
                </FormLabel>
                <RadioGroup name="service" onChange={setservice}>
                  <HStack spacing="24px">
                    <Radio value="Excellent">Excellent</Radio>
                    <Radio value="Good">Good</Radio>
                    <Radio value="Fair">Fair</Radio>
                    <Radio value="Bad">Bad</Radio>
                  </HStack>
                </RadioGroup>
              </div>
              <div>
                <FormLabel mt="20px">Was our resturant clean?.</FormLabel>
                <RadioGroup name="clean" onChange={setclean}>
                  <HStack spacing="24px">
                    <Radio value="Excellent">Excellent</Radio>
                    <Radio value="Good">Good</Radio>
                    <Radio value="Fair">Fair</Radio>
                    <Radio value="Bad">Bad</Radio>
                  </HStack>
                </RadioGroup>
              </div>
            </div>
            <div>
              <div>
                <FormLabel ml="50px">Email</FormLabel>
                <Input
                  ml="50px"
                  type="email"
                  onChange={(e) => setemail(e.target.value)}
                />
                <FormHelperText ml="50px">
                  Please enter the value of the above field.
                </FormHelperText>
              </div>
              <div>
                <FormLabel ml="50px" mt="88px">
                  Please rate the quality of your beverage.
                </FormLabel>
                <RadioGroup ml="50px" name="beverage" onChange={setbeverage}>
                  <HStack spacing="24px">
                    <Radio value="Excellent">Excellent</Radio>
                    <Radio value="Good">Good</Radio>
                    <Radio value="Fair">Fair</Radio>
                    <Radio value="Bad">Bad</Radio>
                  </HStack>
                </RadioGroup>
              </div>
              <div>
                <FormLabel ml="50px" mt="20px">
                  Please rate your overall during experience.
                </FormLabel>
                <RadioGroup
                  ml="50px"
                  name="experience"
                  onChange={setexperience}
                >
                  <HStack spacing="24px">
                    <Radio value="Excellent">Excellent</Radio>
                    <Radio value="Good">Good</Radio>
                    <Radio value="Fair">Fair</Radio>
                    <Radio value="Bad">Bad</Radio>
                  </HStack>
                </RadioGroup>
              </div>
            </div>
          </Flex>
        </FormControl>
        <Button mt="20px" onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
      <ToastContainer />
    </Flex>
  );
};

export default Form;
