import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TouchableHighlight
} from 'react-native';
var timeLimit = 30;
var timer = null;
var Devil = React.createClass({
    render() {
        return (
            <TouchableHighlight style={styles.touch}
                onPress={this.props.onPress}>
                <Text style={styles.emotionface}>{this.props.show ? '😎' : ''}</Text>
            </TouchableHighlight >
        )
    }
})
export default class game extends Component {
    constructor() {
        super();
        this.state = {
            highScore: 0,
            timeCount: 0,
            score: 0,
            playing: false,
            holes: [false, false, false, false, false, false, false, false, false],
        }
    }
    _startGame() {
        this.setState({
            timeCount: timeLimit,
            playing: true,
            score: 0,
        });
        devil = setInterval(() => {
            var currentHoles = this.state.holes;
            currentHoles[Math.floor(Math.random() * 9)] = true;
            if (!Math.floor(Math.random() * 2)) {
                currentHoles = [false, false, false, false, false, false, false, false, false]
            }
            this.setState({
                holes: currentHoles,
            })
            if (!this.state.playing) {
                clearInterval(devil);
                this.setState({
                    holes: [false, false, false, false, false, false, false, false, false]
                })
            }
        }, 250);
        timer = setInterval(() => {
            this.setState({
                timeCount: this.state.timeCount - 1,
            });
            if (this.state.timeCount == 0) {
                this._stopGame();
            }
        }, 1000);
    }
    _stopGame() {
        clearInterval(timer);
        this.setState({
            playing: false,
            highScore: (this.state.score > this.state.highScore) ? this.state.score : this.state.highScore,
        })
    }
    _handleTouch(holeNumber) {
        if (this.state.holes[holeNumber]) {
            this.setState({
                score: this.state.score + 1,
            })
        }

    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.scoreRow}>
                    <View style={styles.highScore}>
                        <Text style={styles.label}>High Score</Text>
                        <Text style={styles.label}>{this.state.highScore}</Text>
                    </View>
                    <View style={styles.timeCount}>
                        <Text style={styles.label}>Time</Text>
                        <Text style={styles.label}>{this.state.timeCount}</Text>
                    </View>
                    <View style={styles.scoreRowx}>
                        <Text style={styles.label}>Score</Text>
                        <Text style={styles.label}>{this.state.Score}</Text>
                    </View>
                </View>

                <View style={styles.holesRow}>
                    <View style={styles.holes}>
                        <Devil show={this.state.holes[0]}
                            onPress={() => this._handleTouch(0)} />
                    </View>
                    <View style={styles.holes}>
                        <Devil show={this.state.holes[1]}
                            onPress={() => this._handleTouch(1)} />
                    </View>
                    <View style={styles.holes}>
                        <Devil show={this.state.holes[2]}
                            onPress={() => this._handleTouch(2)} />
                    </View>
                </View>
                <View style={styles.holesRow}>
                    <View style={styles.holes}>
                        <Devil show={this.state.holes[3]}
                            onPress={() => this._handleTouch(3)} />
                    </View>
                    <View style={styles.holes}>
                        <Devil show={this.state.holes[4]}
                            onPress={() => this._handleTouch(4)} />
                    </View>
                    <View style={styles.holes}>
                        <Devil show={this.state.holes[5]}
                            onPress={() => this._handleTouch(5)} />
                    </View>
                </View>
                <View style={styles.holesRow}>
                    <View style={styles.holes}>
                        <Devil show={this.state.holes[6]}
                            onPress={() => this._handleTouch(6)} />
                    </View>
                    <View style={styles.holes}>
                        <Devil show={this.state.holes[7]}
                            onPress={() => this._handleTouch(7)} />
                    </View>
                    <View style={styles.holes}>
                        <Devil show={this.state.holes[8]}
                            onPress={() => this._handleTouch(8)} />
                    </View>
                </View>
                <View style={styles.button}>
                    <View style={styles.buttonRow}>
                        <Button
                            title="Start Game"
                            color="teal"
                            onPress={this._startGame.bind(this)}
                            disabled={this.state.playing} />
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5fcff',
    },
        scoreRow: {
            flex : 1 ,
        backgroundColor: 'darkred',
        flexDirection: 'row',
    },
    label:{
        fontWeight: 'bold', fontSize: 15 ,alignSelf:'center',
    },
        highScore: {
       flex: 1,
       backgroundColor: 'green',
    },
       timeCount: {
       flex: 1,
       backgroundColor: 'yellow',
    },
    scoreRowx:{
        flex : 1 ,
        backgroundColor: 'darkred',
    },
    holesRow: {
        backgroundColor: 'white',
        flex: 2,
        flexDirection: 'row',
    },
    buttonRow: {
        flex: 1,
        backgroundColor: 'white',
    },
    button: {
        flexDirection: 'row',
    }
    ,
    holes: {
        borderWidth: 2,
        borderColor: 'grey',
        flex: 1,
        backgroundColor: 'darkgrey',
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    emotionface: {
        fontSize: 40,

    },
    touch: {
        alignItems: 'center',
        justifyContent: 'center',
    }
})