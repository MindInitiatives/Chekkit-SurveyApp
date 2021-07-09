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
            <h1>Take the quiz.</h1>
            <h4>Whenever, you want.</h4>
            <Button onClick={this.startQuiz} css={btnCSS}>Begin</Button>
        </Intro>
    )
    }
}


export default Home;
