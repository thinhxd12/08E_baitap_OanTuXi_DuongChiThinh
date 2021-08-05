import React, { Component } from 'react'
import { connect } from 'react-redux'

class KetQuaTroChoi extends Component {
    render() {
        return (
            <div className="mt-2">
                <div className="text-warning" style={{ fontSize: '35px' }}>{this.props.ketQua}</div>
                <div className="text-success" style={{ fontSize: '35px' }}>
                    Số bàn thắng: <span className="text-warning">{this.props.soBanThang}</span>
                </div>
                <div className="text-success" style={{ fontSize: '35px' }}>
                    Tổng số bàn chơi: <span className="text-warning">{this.props.soBanChoi}</span>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (rootReducer) => {
    return {
        ketQua: rootReducer.BaiTapOanTuXiReducer.ketQua,
        soBanThang: rootReducer.BaiTapOanTuXiReducer.soBanThang,
        soBanChoi: rootReducer.BaiTapOanTuXiReducer.soBanChoi
    }
}

export default connect(mapStateToProps)(KetQuaTroChoi);