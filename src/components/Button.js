import styled from 'styled-components'


export const Button = styled.button`
    border: 1px solid #37f3aa;
    border-radius: 50px;
    padding: 15px 30px;
    text-decoration: none;
    color: #37f3aa;
    background-color: #161A31;
    transition: 0.3s;
    font-size: 1em;
    cursor: pointer;
    outline: none;

    &:hover {
        color: white;
        background-color: #37f3aa;
    }
`;

export default Button
