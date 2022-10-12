import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

const Showtable = (props) => {
  console.log(props);
  return (
    <Tr>
      <Td>{props.username}</Td>
      <Td>{props.email}</Td>
      <Td>{props.phonenumber}</Td>
      <Td>{props.service}</Td>
      <Td>{props.clean}</Td>
      <Td>{props.beverage}</Td>
      <Td>{props.experience}</Td>
    </Tr>
  );
};

export default Showtable;
