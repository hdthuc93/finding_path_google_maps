var coordinates = [
    { lat: 10.763332, lng: 106.682474 }, // - KHTN

    { lat: 10.761139, lng: 106.683378 }, // - Nguyen Van Cu - An Duong Vuong
    { lat: 10.759484, lng: 106.684000 }, // - Nguyen Van Cu - Nguyen Trai
    { lat: 10.765408, lng: 106.681661 }, // - Vong xoay Nguyen Van Cu - Ly Thai To

    { lat: 10.771538, lng: 106.698437 }, // - Vong xoay Tran Hung Dao - cho Ben Thanh
    { lat: 10.766880, lng: 106.694294 }, // - Tran Hung Dao - De Tham
    { lat: 10.768048, lng: 106.695402 }, // - Tran Hung Dao - Nguyen Thai Hoc
    { lat: 10.764810, lng: 106.692474 }, // - Tran Hung Dao - Nguyen Cu Trinh
    { lat: 10.763005, lng: 106.690940 }, // - Tran Hung Dao - Cong Quynh
    { lat: 10.761673, lng: 106.689730 }, // - Tran Hung Dao - Tran Dinh Xu
    { lat: 10.756456, lng: 106.685256 }, // - Tran Hung Dao - Nguyen Van Cu
    { lat: 10.755980, lng: 106.683653 }, // - Tran Hung Dao - Nguyen Bieu
    { lat: 10.754774, lng: 106.678950 }, // - Tran Hung Dao - Le Hong Phong
    { lat: 10.755400, lng: 106.681411 }, // - Tran Hung Dao - Tran Binh Trong
    { lat: 10.754186, lng: 106.676886 }, // - Tran Hung Dao - Huynh Man Dat

    { lat: 10.762183, lng: 106.676458 }, // - Hung Vuong - Le Hong Phong
    { lat: 10.763639, lng: 106.678658 }, // - Hung Vuong - Tran Binh Trong
    { lat: 10.761317, lng: 106.675091 }, // - Hung Vuong - Tran Nhan Ton

    { lat: 10.760513, lng: 106.677030 }, // - Tran Phu - Le Hong Phong
    { lat: 10.762619, lng: 106.679048 }, // - Tran Phu - Tran Binh Trong
    { lat: 10.758844, lng: 106.675546 }, // - Tran Phu - Tran Nhan Ton (Huynh Man Dat)

    { lat: 10.758133, lng: 106.675759 }, // - An Duong Vuong - Huynh Man Dat
    { lat: 10.759866, lng: 106.680087 }, // - An Duong Vuong - Tran Binh Trong
    { lat: 10.758917, lng: 106.677609 }, // - An Duong Vuong - Le Hong Phong
    { lat: 10.757557, lng: 106.674079 }, // - Vong xoay An Duong Vuong - Tran Phu

    { lat: 10.756382, lng: 106.676232 }, // - Nguyen Trai - Huynh Man Dat
    { lat: 10.757257, lng: 106.678206 }, // - Nguyen Trai - Le Hong Phong
    { lat: 10.758249, lng: 106.680756 }, // - Nguyen Trai - Tran Binh Trong
    { lat: 10.758910, lng: 106.682612 }, // - Nguyen Trai - Nguyen Bieu
    { lat: 10.762564, lng: 106.686578 }, // - Nguyen Trai - Nguyen Cu Trinh
    { lat: 10.763377, lng: 106.687027 }, // - Nguyen Trai - Tran Dinh Xu
    { lat: 10.766711, lng: 106.688292 }, // - vong xoay Nguyen Trai - Cong Quynh
    { lat: 10.768740, lng: 106.689668 }, // - Nguyen Trai - Ton That Tung
    { lat: 10.768011, lng: 106.688921 }, // - Nguyen Trai - Luong Huu Khanh
    { lat: 10.770455, lng: 106.692012 }, // - Nguyen Trai - Nguyen Van Trang
    { lat: 10.771319, lng: 106.693223 }, // - Vong xoay Nguyen Trai - Ly Tu Trong (nga sau Phu Dong)
    { lat: 10.767429, lng: 106.688512 }, // - Nguyen Trai - Nam Quoc Cang
    { lat: 10.768222, lng: 106.689258 }, // - Nguyen Trai - Le Lai

    { lat: 10.768425, lng: 106.689921 }, // - Le Lai - Ton That Tung
    { lat: 10.770157, lng: 106.694171 }, // - Le Lai - Nguyen Thi Nghia
    { lat: 10.769567, lng: 106.692667 }, // - Le Lai - Nguyen Van Trang

    { lat: 10.762918, lng: 106.687695 }, // - Nguyen Cu Trinh - Tran Dinh Xu

    { lat: 10.768370, lng: 106.684584 }, // - Cong Quynh - NTMK
    { lat: 10.767938, lng: 106.685453 }, // - Cong Quynh - Pham Viet Chanh 
    { lat: 10.767548, lng: 106.686284 }, // - Cong Quynh - Bui Thi Xuan
    { lat: 10.764175, lng: 106.690722 }, // - Cong Quynh - Nguyen Cu Trinh

    { lat: 10.767540, lng: 106.690500 }, // - Pham Ngu Lao - Ton That Tung
    { lat: 10.768649, lng: 106.693284 }, // - Pham Ngu Lao - De Tham
    { lat: 10.769228, lng: 106.694730 }, // - Pham Ngu Lao - Nguyen Thai Hoc (Nguyen Thi Nghia)

    { lat: 10.766094, lng: 106.682290 }, // - NTMK - Nguyen Thien Thuat
    { lat: 10.770049, lng: 106.686126 }, // - NTMK - Luong Huu Khanh
    { lat: 10.768192, lng: 106.684250 }, // - NTMK - Cao Thang
    { lat: 10.771259, lng: 106.687200 }, // - NTMK - Ton That Tung 
    { lat: 10.770404, lng: 106.686399 }, // - NTMK - Nguyen Thuong Hien
    { lat: 10.773654, lng: 106.689452 }, // - NTMK - CMT8

    { lat: 10.766359, lng: 106.678715 }, // - Ly Thai To - Nguyen Dinh Chieu
    { lat: 10.767703, lng: 106.674414 }, // - vong xoay Ly Thai To - Dien Bien Phu

    { lat: 10.770575, lng: 106.676713 }, // - Dien Bien Phu - Nguyen Thien Thuat
    { lat: 10.771895, lng: 106.678059 }, // - Dien Bien Phu - Ban Co
    { lat: 10.772711, lng: 106.679060 }, // - Dien Bien Phu - Cao Thang
    { lat: 10.775949, lng: 106.682864 }, // - Dien Bien Phu - Nguyen Thuong Hien
    { lat: 10.776691, lng: 106.683692 }, // - Dien Bien Phu - CMT8

    { lat: 10.767866, lng: 106.680060 }, // - Nguyen Dinh Chieu - Nguyen Thien Thuat
    { lat: 10.769103, lng: 106.681220 }, // - Nguyen Dinh Chieu - Ban Co
    { lat: 10.770048, lng: 106.682098 }, // - Nguyen Dinh Chieu - Cao Thang
    { lat: 10.772913, lng: 106.684792 }, // - Nguyen Dinh Chieu - Nguyen Thuong Hien
    { lat: 10.775019, lng: 106.686805 }, // - Nguyen Dinh Chieu - CMT8

    { lat: 10.772708, lng: 106.691223 }, // - Bui Thi Xuan - CMT8
    { lat: 10.770309, lng: 106.688933 }, // - bui Thi Xuan - Le Thi Rieng
    { lat: 10.769999, lng: 106.688611 }, // - Bui Thi Xuan - Ton That Tung
    { lat: 10.768815, lng: 106.687459 }, // - Bui Thi Xuan - Luong Huu Khanh
    { lat: 10.768350, lng: 106.687021 }, // - Bui Thi Xuan - Nam Quoc Cang

    { lat: 10.774261, lng: 106.688209 }, // - Vo Van Tan - CMT8
    { lat: 10.771569, lng: 106.685651 }, // - Vo Van Tan - Nguyen Thuong Hien
    { lat: 10.769047, lng: 106.683265 }, // - Vo Van Tan - Cao Thang

    { lat: 10.771319, lng: 106.691549 }, // - Nguyen Van Trang - Le Thi Rieng
];