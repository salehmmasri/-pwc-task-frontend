import React from 'react';
import { Flex } from "@chakra-ui/react";



function Employee({ info }) {

    return (
        <Flex h="80px" width="380px" p="5px" flexWrap="wrap" justifyContent="space-around" bg="whitesmoke" m="20px" borderRadius="10px">

            <Flex alignItems="center">
                {info.name}
            </Flex>
            <Flex alignItems="center">
                {info.email}
            </Flex>
            <Flex alignItems="center">
                {info.department.name}
            </Flex>

        </Flex>
    );
}

export default Employee;
