const axios = require('axios').default;



export async function fetchData(department = '', filter, page, setResult, input = '') {


    try {
        const response = await axios.get(`https://employee-be.herokuapp.com/api/v1/empolyees/?departments=${department}&${filter}=${input}&page=${page}`);
        setResult(response.data);
    } catch (error) {
        console.error(error);
    }

}

export async function fetchDepartments() {


    try {
        const response = await axios.get('https://employee-be.herokuapp.com/api/v1/department/');
        return (response.data);
    } catch (error) {
        console.error(error);
    }


}
