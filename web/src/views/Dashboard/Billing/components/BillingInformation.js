// Chakra imports
import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
// Custom src/components
import Card from "src/components/Card/Card.js";
import CardBody from "src/components/Card/CardBody.js";
import CardHeader from "src/components/Card/CardHeader.js";
import BillingRow from "src/components/Tables/BillingRow";
import React from "react";

const BillingInformation = ({ title, data }) => {
  const textColor = useColorModeValue("gray.700", "white");
  return (
    <Card my={{ lg: "24px" }} me={{ lg: "24px" }}>
      <Flex direction='column'>
        <CardHeader py='12px'>
          <Text color={textColor} fontSize='lg' fontWeight='bold'>
            {title}
          </Text>
        </CardHeader>
        <CardBody>
          <Flex direction='column' w='100%'>
            {data.map((row) => {
              return (
                <BillingRow
                  name={row.name}
                  company={row.company}
                  email={row.email}
                  number={row.number}
                />
              );
            })}
          </Flex>
        </CardBody>
      </Flex>
    </Card>
  );
};

export default BillingInformation;
