function uBer(){
    this.name = '';
    this.loai1 = 0;
    this.km1 = 1;
    this.quangDuong1 = 0;
    this.tongLoai1 = 0;
    this.loai2 = 0;
    this.km2 = 20;
    this.quangDuong2 = 0;
    this.tongLoai2 = 0;
    this.loai3 = 0;
    this.quangDuong3 = 0;
    this.tongLoai3 = 0;
    this.delay = 0;
    this.tongDelay = 0;
    this.tinhTongTien = function(quangDuong, delay){
        this.tongDelay = delay * this.delay;
        if(quangDuong <= this.km1){
            this.quangDuong1 = quangDuong;
            this.tongLoai1 = this.loai1 * this.quangDuong1;
        } else if(quangDuong <= this.km2){
            this.quangDuong1 = this.km1;
            this.quangDuong2 = quangDuong - this.km1;
            this.tongLoai1 = this.loai1 * this.quangDuong1;
            this.tongLoai2 = this.loai2 * this.quangDuong2;
        } else {
            this.quangDuong1 = this.km1;
            this.quangDuong2 = this.km2 - this.km1;
            this.quangDuong3 = quangDuong - this.km2;
            this.tongLoai1 = this.loai1 * this.quangDuong1;
            this.tongLoai2 = this.loai2 * this.quangDuong2;
            this.tongLoai3 = this.loai3 * this.quangDuong3;
        }
        return this.tongLoai1 + this.tongLoai2 + this.tongLoai3 + this.tongDelay;
    }

    this.phanLoai = function(xe){
        switch(xe){
            case 0:
                this.name = 'uBer X';
                this.loai1 = 8000;
                this.loai2 = 12000;
                this.loai3 = 10000;
                this.delay = 2000;
                break;
            case 1:
                this.name = 'uBer SUV';
                this.loai1 = 9000;
                this.loai2 = 14000;
                this.loai3 = 12000;
                this.delay = 3000;
                break;
            case 2:
                this.name = 'uBer Black';
                this.loai1 = 10000;
                this.loai2 = 16000;
                this.loai3 = 14000;
                this.delay = 4000;
                break;
        }
    }
}