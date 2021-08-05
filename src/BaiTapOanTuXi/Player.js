import React, { Component } from 'react'
import { connect } from 'react-redux'

class Player extends Component {
    renderMangDatCuoc = () => {
        return this.props.mangDatCuoc.map((item, index) => {
            let border = {};
            if (item.datCuoc) {
                border = { border: '3px solid orange' }
            }
            return <div key={index} className="col-4">
                <button className="btn-default" style={border} onClick={()=>{
                    this.props.datCuoc(item.ma);
                }}>
                    <img src={item.hinhAnh} alt="..." width={50} className="img-fluid" />
                </button>
            </div>
        })
    }

    render() {
        return (
            <div className="playerGame">
                <div className="theThink">
                    <img src={
                        this.props.mangDatCuoc.find(item => item.datCuoc === true).hinhAnh
                    } alt="..." style={{ transform: 'rotate(-90deg)', width: '70%' }} />
                </div>
                <div className="speech-bubble mb-2"></div>
                <img src="./img/player.png" alt="..." width={250} />
                <div className="row">
                    {this.renderMangDatCuoc()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (rootReducer) => {
    return {
        mangDatCuoc: rootReducer.BaiTapOanTuXiReducer.mangDatCuoc
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        datCuoc: (maCuoc) => {
            dispatch({
                type:'CHON_KEO_BUA_BAO',
                maCuoc
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Player);