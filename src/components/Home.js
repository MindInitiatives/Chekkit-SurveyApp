import React, { Component } from 'react';
import styled, { css } from 'styled-components/macro'
import Button from './Button';

const Intro = styled.div`
  margin-top: 8em;
  text-align: center;
`;

const btnCSS = css`
    margin-top: 2em;
`;

class Home extends Component {
    constructor(props) {
        super(props);
        console.log(props)
      }

    startQuiz = () => {
        this.props.start(true)
        console.log(this.props.start)
    }
    

    render() {
        
    return (
        <Intro>
            <h1>Chekkit Survey</h1>
            <h4>You will be Subjected to 10 Trivia Questions and at the end of the Survey you will get your Result</h4>
            <h5>Click on the Button to Begin. Goodluck!!!</h5>
            <Button onClick={this.startQuiz} css={btnCSS}>Begin</Button>
        </Intro>
    )
    }
}


export default Home;
