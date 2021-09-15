import React from 'react';
import { Box, Text, Button, Flex } from "@chakra-ui/react";
import '../styles/home.css';
import { Radio, RadioGroup, Select } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import Employee from "./Employee";
import { fetchData } from "../api/apiCalls";
import { fetchDepartments } from "../api/apiCalls";

function Home() {
    const [department, setDepartment] = React.useState(false);
    const [filter, setFilter] = React.useState("email");
    const [page, setPage] = React.useState(1);
    const [result, setResult] = React.useState([]);
    const [dropDownList, setDropDownList] = React.useState();

    const getData = async (e) => {
        const input = e.target.value;
        setPage(1)
        await fetchData(dropDownList, filter, 1, setResult, input);
    }
    const onDropdownChange = (e) => {
        setDropDownList(e.target.value);
        setPage(1)
        const searchBar = document.getElementById('search');
        fetchData(e.target.value, filter, 1, setResult, searchBar.value);
    };

    const start = async () => {
        const res = await fetchDepartments();

        setDepartment(res);
    };

    const onFilterChange = (value) => {
        setPage(1)
        setFilter(value);
        const searchBar = document.getElementById('search');
        fetchData(dropDownList, value, 1, setResult, searchBar.value);
    };

    const prevPage = () => {
        setPage(page - 1);
        const searchBar = document.getElementById('search');
        fetchData(dropDownList, filter, page - 1, setResult, searchBar.value);

    }


    const nextPage = () => {
        setPage(page + 1);
        const searchBar = document.getElementById('search');
        fetchData(dropDownList, filter, page + 1, setResult, searchBar.value);

    }


    React.useEffect(() => {
        start();
        fetchData(dropDownList, filter, 1, setResult);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Box
            id="Main"
        >
            <Text className="title">
                Departments Management
            </Text>

            <Box className="info">

                <Flex alignItems="center" className="radios_2">
                    <Text display="inline-block"> Department: </Text>

                    <Select ml="20px" value={dropDownList} onChange={(e) => onDropdownChange(e)} w="80%" >
                        <option value="" defaultValue disabled hidden>Choose department</option>
                        {
                            department ?
                                department.map((ele) => {
                                    return (
                                        <option key={ele.id} value={ele.name}>{ele.name}</option>
                                    );
                                })
                                : <></>
                        }

                    </Select>
                </Flex>

                <Flex alignItems="center"  >

                    <Text display="inline-block" mx="10px"> Search By: </Text>
                    <RadioGroup onChange={onFilterChange} value={filter} className="radios_2">
                        <Radio value="email" defaultChecked>Email</Radio>
                        <Radio value="name">Name</Radio>
                        <Input variant="filled" id="search" placeholder={(filter === '1') ? "Email" : "Name"} onChange={getData} />
                    </RadioGroup>
                </Flex>


            </Box>

            <Box className="resultBox" >
                {
                    result.results ?
                        (result.results.map((info) => {

                            return <Employee key={info.id} info={info} />

                        })) : <></>
                }


            </Box>

            <Box className="controls">
                <Button onClick={prevPage} disabled={page === 1}>
                    before
                </Button>

                <Button onClick={nextPage} disabled={(page * 10) > result.count}>
                    Next
                </Button>
            </Box>
        </Box>
    );
}

export default Home;
