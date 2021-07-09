import styled from 'styled-components'
import {Button} from './Button'

const Title = styled.h1`
    margin-top: 4em;
    font-size: 48px;
`;

const Points = styled.p`
    font-size: 24px;
    margin-bottom: 3em;
`;

const Result = ({pts, ttl}) => {

    const refreshPage = () => window.location.reload();

    return (
        <>
            <Title>Result</Title>
            <Points>You answered {pts} correctly out of {ttl}!</Points>
            <Button onClick={refreshPage}>Retry</Button>
        </>
    )
}

export default Result
