import { render } from '@testing-library/react';
import { useContext } from 'react';
import axios from 'axios'
import Modal from '../components/Modal'
import { Context } from '../context/Context';

export const apiKeys = "dddf0234483c48358184ce2b61de90da"
axios.defaults.baseURL = `https://newsapi.org/v2/`;
axios.defaults.headers.post['Content-Type'] = 'application/json';

const WithAxios = ({ children }) => {
    const { setData } = useContext(Context);

    axios.interceptors.response.use(
        (res) => {
            if (res.status === 200) {
                setData(res.data);
                localStorage.setItem("local", JSON.stringify(res.data))
            }
            return res;
        },
        (err) => {
            render(<Modal code={err.response.data.code} message={err.response.data.message} />)
            return Promise.reject(err);
        }
    );

    return children
}

export default WithAxios

/*
* 200 - OK. The request was executed successfully.
! 400 - Bad Request. The request was unacceptable, often due to a missing or misconfigured parameter.
! 401 - Unauthorized. Your API key was missing from the request, or wasn't correct.
! 429 - Too Many Requests. You made too many requests within a window of time and have been rate limited. Back off for a while.
! 500 - Server Error. Something went wrong on our side.
*/