const mongoose = require("mongoose")


const studentSchema = new mongoose.Schema({
    user_name: {
        type: String
    },
    password: {
        type: String
    },
    fullname: String,
    gender: {
        type: String,
        enum: ["male", "female"]
    },
    branch: String,
    course: Number,
    identify_card: {
        type: Number
    },
    identifycard_date: {
        type: String
    },
    dien_chinh_sach_uu_tien_theo_quy_dinh: String,
    dien_khac: String,
    doan_the: {
        type: String,
        enum: ["đảng viên", "đoàn viên", "Bộ đội hoặc TNXP xuất ngũ"]
    },
    hoat_dong_xa_hoi: String,
    so_truong_nang_khieu: String,
    phone_number: {
        type: Number
    },
    email: {
        type: String
    },
    birth: {
        type: String
    },
    user_status: {
        type: String,
        default: "None"
    },
    khi_can_baocho_ong_ba: String,
    dien_thoai_ong_ba: Number,
    email_ong_ba: String,
    date_approve: {
        type: Date,
        default: 30 / 05 / 1111
    },
    date_valid: String,
    date_valid_room: {
        type: Date,
        default: 30 / 05 / 1111
    },
    room: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room',
    },
})
const studentModel = mongoose.model('Student', studentSchema);
module.exports = studentModel;