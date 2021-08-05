import React, { Component } from 'react'
import { connect } from 'react-redux'

class Computer extends Component {
    render() {
        let keyframe = `@keyframes randomItem${Date.now()}{
            0% {top: -20px;}
            25% {top: 50px;}
            50% {top: -20px;}
            75% {top: 50px;}
            100% {top: 0px;}
        }`

        return (
            <div className="playerGame">
                <style>
                    {keyframe}
                </style>
                <div className="theThink">
                    <img style={{
                        position: 'absolute',
                        width: '70%',
                        top: '0',
                        left: '30px',
                        animation: `randomItem${Date.now()} 0.5s`,
                        transform: 'rotate(-90deg)'
                    }} src={this.props.computer.hinhAnh} alt="..." />
                </div>
                <div className="speech-bubble mb-2"></div>
                <img src="./img/playerComputer.png" alt="..." width={250} />
            </div>
        )
    }
}


const mapStateToProps = (rootReducer) => {
    return {
        computer: rootReducer.BaiTapOanTuXiReducer.computer
    }
}

export default connect(mapStateToProps)(Computer);