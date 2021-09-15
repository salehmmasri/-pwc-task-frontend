import React from 'react';
import {
    Tr,
    Td,
} from "@chakra-ui/react"



function Employee({ info }) {

    return (
   

        <Tr>
            <Td textAlign="center">
                {info.name}
            </Td>

            <Td textAlign="center">
                {info.email}
            </Td>

            <Td textAlign="center">
                {info.department.name}

            </Td>

        </Tr>
   
    );
}

export default Employee;
