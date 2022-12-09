import { type } from 'os';
import React from 'react';
import styled from 'styled-components';

type LoginType = {
    placeholder: string
    type: string
}

const TextboxStyle = styled.input<LoginType>`
    text-align: center;
    padding: 10px 55px;
`;


const Login =  ({type, placeholder }: LoginType) => {
    return ( <div>
                <TextboxStyle type={type} placeholder={placeholder}/>
            </div>
    )
}

export default Login;