import React, { Component } from 'react'
import { connect } from 'react-redux'
import './BaiTapOanTuXi.css'
import Computer from './Computer'
import KetQuaTroChoi from './KetQuaTroChoi'
import Player from './Player'

class BaiTapOanTuXi extends Component {
    render() {
        return (
            <div className="gameOanTuXi">
                <div className="container text-center">
                    <div className="row mt-5">
                        <div className="col-4">
                            <Player />
                        </div>
                        <div className="col-4">
                            <KetQuaTroChoi />
                            <button className="btn btn-danger mt-5" onClick={() => {
                                this.props.playGame();
                            }}>
                                <span style={{ fontSize: '18px' }}>Play Game</span>
                            </button>
                        </div>
                        <div className="col-4">
                            <Computer />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        playGame: () => {
            let count = 0;
            let randomComputerItem = setInterval(() => {
                dispatch({
                    type: 'RANDOM'
                })
                count++;
                if (count > 10) {
                    clearInterval(randomComputerItem)
                    dispatch({
                        type: 'END_GAME'
                    })
                }
            }, 100);
        }
    }
}

export default connect(null, mapDispatchToProps)(BaiTapOanTuXi);