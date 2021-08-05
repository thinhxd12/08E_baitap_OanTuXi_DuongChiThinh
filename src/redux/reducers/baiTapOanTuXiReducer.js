const stateDefault = {
    mangDatCuoc: [
        { ma: 'keo', hinhAnh: './img/keo.png', datCuoc: false },
        { ma: 'bua', hinhAnh: './img/bua.png', datCuoc: false },
        { ma: 'bao', hinhAnh: './img/bao.png', datCuoc: true },
    ],
    ketQua: "I'm iron man, i love you 3000 !!!",
    soBanThang: 0,
    soBanChoi: 0,
    computer: { ma: 'bao', hinhAnh: './img/bao.png' }
}

export const BaiTapOanTuXiReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'CHON_KEO_BUA_BAO': {
            let mangCuocUpdate = [...state.mangDatCuoc];
            mangCuocUpdate = mangCuocUpdate.map((item, index) => {
                if (item.ma === action.maCuoc) {
                    return { ...item, datCuoc: true };
                }
                else return { ...item, datCuoc: false };
            })
            state.mangDatCuoc = mangCuocUpdate;
            return { ...state }
        }
        case 'RANDOM': {
            let soNgauNhien = Math.floor(Math.random() * 3);
            let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien];
            state.computer = quanCuocNgauNhien;
            return { ...state }
        }
        case 'END_GAME': {
            let player = state.mangDatCuoc.find(item => item.datCuoc === true);
            let computer = state.computer
            switch (player.ma) {
                case 'keo': if (computer.ma === 'keo') {
                    state.ketQua = 'hoà nhau !!!';
                }
                else if (computer.ma === 'bua') {
                    state.ketQua = 'bạn thua !!!';
                }
                else if (computer.ma === 'bao') {
                    state.ketQua = 'bạn thắng !!!';
                    state.soBanThang += 1;
                }
                    break;
                case 'bua': if (computer.ma === 'bua') {
                    state.ketQua = 'hoà nhau !!!';
                }
                else if (computer.ma === 'bao') {
                    state.ketQua = 'bạn thua !!!';
                }
                else if (computer.ma === 'keo') {
                    state.ketQua = 'bạn thắng !!!';
                    state.soBanThang += 1;
                }
                    break;
                case 'bao': if (computer.ma === 'bao') {
                    state.ketQua = 'hoà nhau !!!';
                }
                else if (computer.ma === 'keo') {
                    state.ketQua = 'bạn thua !!!';
                }
                else if (computer.ma === 'bua') {
                    state.ketQua = 'bạn thắng !!!';
                    state.soBanThang += 1;
                }
                    break;
                default: state.ketQua = "I'm iron man, i love you 3000 !!!";
            }
            state.soBanChoi += 1;
            return { ...state }
        }
        default: return { ...state }
    }
}