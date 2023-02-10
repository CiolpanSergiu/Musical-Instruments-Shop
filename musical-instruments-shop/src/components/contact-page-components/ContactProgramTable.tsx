import styled from "styled-components";

const Table = styled.table`
  border-collapse: collapse;
  margin: 2rem auto;
`;

const TableHead = styled.thead`
  tr {
    background-color: #2e8244;
    box-shadow: inset -5px 5px 15px lime;

    td {
      color: white;
    }
  }
`;

const Td = styled.td`
  border: solid 1px white;
  padding: 0.25rem 1.5rem;
  color: black;

  @media only screen and (min-width: 768px) {
    padding: 0.5rem 2rem;
  }
`;

const Tr = styled.tr`
  background-color: white;

  td:first-child {
    background-color: lightskyblue;
    box-shadow: inset -5px 5px 15px dodgerblue;
  }

  td:nth-child(2),
  td:nth-child(3) {
    box-shadow: inset -5px 5px 15px lightgray;
  }
`;

export default function ContactProgramTable() {
  return (
    <Table>
      <TableHead>
        <tr>
          <Td>Day</Td>
          <Td>From</Td>
          <Td>To</Td>
        </tr>
      </TableHead>
      <tbody>
        <Tr>
          <Td>Monday</Td>
          <Td>08:30</Td>
          <Td>18:30</Td>
        </Tr>
        <Tr>
          <Td>Tuesday</Td>
          <Td>08:30</Td>
          <Td>18:30</Td>
        </Tr>
        <Tr>
          <Td>Wednesday</Td>
          <Td>08:30</Td>
          <Td>18:30</Td>
        </Tr>
        <Tr>
          <Td>Thursday</Td>
          <Td>08:30</Td>
          <Td>18:30</Td>
        </Tr>
        <Tr>
          <Td>Friday</Td>
          <Td>08:30</Td>
          <Td>18:30</Td>
        </Tr>
      </tbody>
    </Table>
  );
}
