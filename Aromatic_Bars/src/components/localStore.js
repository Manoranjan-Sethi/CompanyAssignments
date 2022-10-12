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
  Button,
  Heading,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Showtable from "./Showtable";
import { useNavigate } from "react-router-dom";

const Local = () => {
  const [tabled, setTable] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("data2"));
    setTable([...data]);
    // console.log(tabled);
  }, []);

  return (
    <div>
      <Heading ml="25px" mb="20px" as="h4" size="md">
        Aromatic Bars
      </Heading>
      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th>Customer Name</Th>
              <Th>Email</Th>
              <Th>Phone</Th>
              <Th>Service</Th>
              <Th>Clean</Th>
              <Th>Beverage Quality</Th>
              <Th>Overall Experience</Th>
            </Tr>
            {tabled.map((res) => {
              return <Showtable {...res} />;
            })}
          </Thead>
        </Table>
      </TableContainer>
      <div>
        <Button mt="20px" onClick={() => navigate("/")}>
          Back to Home Page
        </Button>
      </div>
    </div>
  );
};

export default Local;
