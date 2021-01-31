import React, {Component} from 'react';
import styled from 'styled-components';

// Style components
const AudioWrapper = styled.div`
    position: fixed;
    bottom: 0;
    right: 0;

    @media ${props => props.theme.mediaQueries.smallest} {
        width: 250px;
    }
`

const AudioButton = styled.button`
    float: right;
    background-color: inherit;
    border: none;
    color: grey;
    text-transform: uppercase;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px;
`

const AudioPlayer = styled.audio`
    // Media query for small screens
    @media ${props => props.theme.mediaQueries.small} {
        width: 250px;
    }

    @media ${props => props.theme.mediaQueries.smallest} {
        width: 250px;
    }
    
`

class Todos extends Component {

    //  Component state
    state = {
        play: false
    }

    componentWillReceiveProps() {
        this.setState({
            play: true 
        })
    }

    // Play logic
    playing = () => {

        const { play } = this.state

        console.log(this.audio)

        if (play) {
        this.setState({ play: false });
        this.audio.pause();
        } else {
        this.setState({ play: true });
        this.audio.play();
        }
    }


    render() {

        const { play } = this.state

        return <div
            style={{
                width: '50vw',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
            }}
        >
            <h2
                style={{
                    textAlign: 'center'
                }}
            >To do List</h2>
            <ul>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li><li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li><li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li><li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li><li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li><li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li><li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li><li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li><li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li><li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li><li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li><li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li><li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li><li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li><li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li><li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li><li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
            </ul>
            <AudioWrapper>
            {
                !play &&
                <AudioButton
                    onClick={this.playing}>
                    <span
                        style={{
                            backgroundColor: 'lightgrey',
                            borderRadius: '50%',
                            height: 40,
                            width: 40,
                            marginRight: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                    <i 
                    
                        style={{
                            color: '#696969'
                        }}
                        className="fas fa-play" 
                    />
                    </span>
                    Listen to story
                </AudioButton>
            }
            <AudioPlayer src="https://s3.amazonaws.com/mobile.engineering.com/audio/19559.mp3"
                style={{
                    display: !play ? 'none' : 'inline'
                }}
                ref={(audio) => { this.audio = audio }}
                controls
            />
            </AudioWrapper>
        </div>
    }
}

export default Todos