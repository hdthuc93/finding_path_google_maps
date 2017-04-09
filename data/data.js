var data = [
    // Vu Quoc Khanh [01 - 20]
    {
        // 01
        name: "KHTN",
        lat: 10.763332,
        lng: 106.682474,
        adjacentCoordinates: [
            {
                // Nguyen Van Cu - An Duong Vuong
                lat: 10.761139,
                lng: 106.683378,
                distance: 263.38222260193055
            },
            {
                // Vong xoay Nguyen Van Cu - Ly Thai To
                lat: 10.765408,
                lng: 106.681661,
                distance: 247.6123924975168
            }]
    },
    {
        // 02
        name: "Nguyen Van Cu - An Duong Vuong",
        lat: 10.761139,
        lng: 106.683378,
        adjacentCoordinates: [
            {
                // KHTN
                lat: 10.763332,
                lng: 106.682474,
                distance: 263.38222260193055
            },
            {
                // Nguyen Van Cu - Nguyen Trai
                lat: 10.759484,
                lng: 106.684,
                distance: 196.3905291775608
            },
            {
                // An Duong Vuong - Tran Binh Trong
                lat: 10.759866,
                lng: 106.680087,
                distance: 386.8039073647507
            }]
    },
    {
        // 03
        name: "Nguyen Van Cu - Nguyen Trai",
        lat: 10.759484,
        lng: 106.684,
        adjacentCoordinates: [
            {
                // Nguyen Van Cu - An Duong Vuong
                lat: 10.761139,
                lng: 106.683378,
                distance: 196.3905291775608
            },
            {
                // Nguyen Trai - Nguyen Bieu
                lat: 10.75891,
                lng: 106.682612,
                distance: 164.69566510962235
            },
            {
                // Tran Hung Dao - Nguyen Van Cu
                lat: 10.756456,
                lng: 106.685256,
                distance: 363.9884385550146
            },
            {
                // Nguyen Trai - Nguyen Cu Trinh
                lat: 10.762564,
                lng: 106.686578,
                distance: 443.8953124154783
            }]
    },
    {
        // 04
        name: "Vong xoay Nguyen Van Cu - Ly Thai To",
        lat: 10.765408,
        lng: 106.681661,
        adjacentCoordinates: [
            {
                // NTMK - Nguyen Thien Thuat
                lat: 10.766094,
                lng: 106.68229,
                distance: 102.77823475118275
            },
            {
                // Cong Quynh - Pham Viet Chanh
                lat: 10.767938,
                lng: 106.685453,
                distance: 501.28833151144323
            },
            {
                // KHTN
                lat: 10.763332,
                lng: 106.682474,
                distance: 247.6123924975168
            },
            {
                // Hung Vuong - Tran Binh Trong
                lat: 10.763639,
                lng: 106.678658,
                distance: 382.92584787447055
            },
            {
                // Ly Thai To - Nguyen Dinh Chieu
                lat: 10.766359,
                lng: 106.678715,
                distance: 339.1224468474494
            }]
    },
    {
        // 05
        name: "Vong xoay Tran Hung Dao - cho Ben Thanh",
        lat: 10.771538,
        lng: 106.698437,
        adjacentCoordinates: [
            {
                // Le Lai - Nguyen Thi Nghia
                lat: 10.770157,
                lng: 106.694171,
                distance: 491.1994577552802
            },
            {
                // Tran Hung Dao - Nguyen Thai Hoc
                lat: 10.768048,
                lng: 106.695402,
                distance: 510.97571933670406
            }]
    },
    {
        // 06
        name: "Tran Hung Dao - De Tham",
        lat: 10.76688,
        lng: 106.694294,
        adjacentCoordinates: [
            {
                // Tran Hung Dao - Nguyen Thai Hoc
                lat: 10.768048,
                lng: 106.695402,
                distance: 177.72946615780992
            }, ,
            {
                // Tran Hung Dao - Nguyen Cu Trinh
                lat: 10.76481,
                lng: 106.692474,
                distance: 304.48926321813735
            }]
    },
    {
        // 07
        name: "Tran Hung Dao - Nguyen Thai Hoc",
        lat: 10.768048,
        lng: 106.695402,
        adjacentCoordinates: [
            {
                // Vong xoay Tran Hung Dao - cho Ben Thanh
                lat: 10.771538,
                lng: 106.698437,
                distance: 510.97571933670406
            },
            {
                // Pham Ngu Lao - Nguyen Thai Hoc (Nguyen Thi Nghia)
                lat: 10.769228,
                lng: 106.69473,
                distance: 150.51691744973058
            },
            {
                // Tran Hung Dao - De Tham
                lat: 10.76688,
                lng: 106.694294,
                distance: 177.72946615780992
            }]
    },
    {
        // 08
        name: "Tran Hung Dao - Nguyen Cu Trinh",
        lat: 10.76481,
        lng: 106.692474,
        adjacentCoordinates: [
            {
                // Tran Hung Dao - De Tham
                lat: 10.76688,
                lng: 106.694294,
                distance: 304.48926321813735
            },
            {
                // Cong Quynh - Nguyen Cu Trinh
                lat: 10.764175,
                lng: 106.690722,
                distance: 204.22356210371495
            },
            {
                // Tran Hung Dao - Cong Quynh
                lat: 10.763005,
                lng: 106.69094,
                distance: 261.75713381820896
            }]
    },
    {
        // 09
        name: "Tran Hung Dao - Cong Quynh",
        lat: 10.763005,
        lng: 106.69094,
        adjacentCoordinates: [
            {
                // Tran Hung Dao - Nguyen Cu Trinh
                lat: 10.76481,
                lng: 106.692474,
                distance: 261.75713381820896
            },
            {
                // Cong Quynh - Nguyen Cu Trinh
                lat: 10.764175,
                lng: 106.690722,
                distance: 132.4078052849133
            },
            {
                // Tran Hung Dao - Tran Dinh Xu
                lat: 10.761673,
                lng: 106.68973,
                distance: 198.7378909156822
            },
            {
                // Nguyen Cu Trinh - Tran Dinh Xu
                lat: 10.762918,
                lng: 106.687695,
                distance: 355.00914982395057
            }]
    },
    {
        // 10
        name: "Tran Hung Dao - Tran Dinh Xu",
        lat: 10.761673,
        lng: 106.68973,
        adjacentCoordinates: [
            {
                // Tran Hung Dao - Cong Quynh
                lat: 10.763005,
                lng: 106.69094,
                distance: 198.7378909156822
            },
            {
                // Nguyen Cu Trinh - Tran Dinh Xu
                lat: 10.762918,
                lng: 106.687695,
                distance: 262.17680092009095
            },
            {
                // Tran Hung Dao - Nguyen Van Cu
                lat: 10.756456,
                lng: 106.685256,
                distance: 759.3931353329166
            }]
    },
    {
        // 11
        name: "Tran Hung Dao - Nguyen Van Cu",
        lat: 10.756456,
        lng: 106.685256,
        adjacentCoordinates: [
            {
                // Tran Hung Dao - Tran Dinh Xu
                lat: 10.761673,
                lng: 106.68973,
                distance: 759.3931353329166
            },
            {
                // Nguyen Van Cu - Nguyen Trai
                lat: 10.759484,
                lng: 106.684,
                distance: 363.9884385550146
            },
            {
                // Tran Hung Dao - Nguyen Bieu
                lat: 10.75598,
                lng: 106.683653,
                distance: 183.1428230455102
            }]
    },
    {
        // 12
        name: "Tran Hung Dao - Nguyen Bieu",
        lat: 10.75598,
        lng: 106.683653,
        adjacentCoordinates: [
            {
                // Tran Hung Dao - Nguyen Van Cu
                lat: 10.756456,
                lng: 106.685256,
                distance: 183.1428230455102
            },
            {
                // Tran Hung Dao - Tran Binh Trong
                lat: 10.7554,
                lng: 106.681411,
                distance: 253.55199946729113
            }]
    },
    {
        // 13
        name: "Tran Hung Dao - Le Hong Phong",
        lat: 10.754774,
        lng: 106.67895,
        adjacentCoordinates: [
            {
                // Tran Hung Dao - Tran Binh Trong
                lat: 10.7554,
                lng: 106.681411,
                distance: 278.01998024689055
            },
            {
                // Tran Hung Dao - Huynh Man Dat
                lat: 10.754186,
                lng: 106.676886,
                distance: 235.0266339155551
            },
            {
                // Nguyen Trai - Le Hong Phong
                lat: 10.757257,
                lng: 106.678206,
                distance: 288.13358425798367
            }]
    },
    {
        // 14
        name: "Tran Hung Dao - Tran Binh Trong",
        lat: 10.7554,
        lng: 106.681411,
        adjacentCoordinates: [
            {
                // Tran Hung Dao - Nguyen Bieu
                lat: 10.75598,
                lng: 106.683653,
                distance: 253.55199946729113
            },
            {
                // Nguyen Trai - Tran Binh Trong
                lat: 10.758249,
                lng: 106.680756,
                distance: 325.1383160505475
            },
            {
                // Tran Hung Dao - Le Hong Phong
                lat: 10.754774,
                lng: 106.67895,
                distance: 278.01998024689055
            }]
    },
    {
        // 15
        name: "Tran Hung Dao - Huynh Man Dat",
        lat: 10.754186,
        lng: 106.676886,
        adjacentCoordinates: [
            {
                // Tran Hung Dao - Le Hong Phong
                lat: 10.754774,
                lng: 106.67895,
                distance: 278.01998024689055
            },
            {
                // Nguyen Trai - Huynh Man Dat
                lat: 10.756382,
                lng: 106.676232,
                distance: 512.9935166414863
            }]
    },
    {
        // 16
        name: "Hung Vuong - Le Hong Phong",
        lat: 10.762183,
        lng: 106.676458,
        adjacentCoordinates: [
            {
                // vong xoay Ly Thai To - Dien Bien Phu
                lat: 10.767703,
                lng: 106.674414,
                distance: 653.8784170270096
            },
            {
                // Hung Vuong - Tran Nhan Ton
                lat: 10.761317,
                lng: 106.675091,
                distance: 653.8784170270096
            },
            {
                // Tran Phu - Le Hong Phong
                lat: 10.760513,
                lng: 106.67703,
                distance: 196.14598864824876
            }]
    },
    {
        // 17
        name: "Hung Vuong - Tran Binh Trong",
        lat: 10.763639,
        lng: 106.678658,
        adjacentCoordinates: [
            {
                // Tran Phu - Tran Binh Trong
                lat: 10.762619,
                lng: 106.679048,
                distance: 121.2920475144504
            },
            {
                // Hung Vuong - Le Hong Phong
                lat: 10.762183,
                lng: 106.676458,
                distance: 290.09668279249286
            }]
    },
    {
        // 18
        name: "Hung Vuong - Tran Nhan Ton",
        lat: 10.761317,
        lng: 106.675091,
        adjacentCoordinates: [
            {
                // Tran Phu - Tran Nhan Ton (Huynh Man Dat)
                lat: 10.758844,
                lng: 106.675546,
                distance: 279.7540529712337
            }]
    },
    {
        // 19
        name: "Tran Phu - Le Hong Phong",
        lat: 10.760513,
        lng: 106.67703,
        adjacentCoordinates: [
            {
                // An Duong Vuong - Le Hong Phong
                lat: 10.758917,
                lng: 106.677609,
                distance: 188.61256277316295
            },
            {
                // Tran Phu - Tran Binh Trong
                lat: 10.762619,
                lng: 106.679048,
                distance: 321.9727918346197
            },
            {
                // Hung Vuong - Le Hong Phong
                lat: 10.762183,
                lng: 106.676458,
                distance: 196.14598864824876
            }]
    },
    {
        // 20
        name: "Tran Phu - Tran Binh Trong",
        lat: 10.762619,
        lng: 106.679048,
        adjacentCoordinates: [
            {
                // Vong xoay Nguyen Van Cu - Ly Thai To
                lat: 10.765408,
                lng: 106.681661,
                distance: 421.9600678789256
            },
            {
                // Hung Vuong - Tran Binh Trong
                lat: 10.763639,
                lng: 106.678658,
                distance: 121.2920475144504
            },
            {
                // "An Duong Vuong - Tran Binh Trong
                lat: 10.759866,
                lng: 106.680087,
                distance: 326.84916194141823
            }]
    },
    // Ta Quoc Thinh [21 - 40]
    {
        // 21
        name: "Tran Phu - Tran Nhan Ton (Huynh Man Dat)",
        lat: 10.758844,
        lng: 106.675546,
        adjacentCoordinates: [
            {
                // Tran Phu - Le Hong Phong
                lat: 10.760513,
                lng: 106.677030,
                distance: 246.69417480558212
            },
            {
                // An Duong Vuong - Huynh Man Dat
                lat: 10.758133,
                lng: 106.675759,
                distance: 82.50487395696828
            },
            {
                // Hung Vuong - Tran Nhan Ton
                lat: 10.761317,
                lng: 106.675091,
                distance: 279.7540529712337
            }]
    },
    {
        // 22
        name: "An Duong Vuong - Huynh Man Dat",
        lat: 10.758133,
        lng: 106.675759,
        adjacentCoordinates: [
            {
                // An Duong Vuong - Le Hong Phong
                lat: 10.758917,
                lng: 106.677609,
                distance: 220.34220072527953
            },
            {
                // Vong xoay An Duong Vuong - Tran Phu
                lat: 10.757557,
                lng: 106.674079,
                distance: 194.59715544253766
            },
            {
                // Tran Phu - Tran Nhan Ton (Huynh Man Dat)
                lat: 10.758844,
                lng: 106.675546,
                distance: 82.50487395696828
            },
            {
                // Nguyen Trai - Huynh Man Dat
                lat: 10.756382,
                lng: 106.676232,
                distance: 201.66765677488098
            }]
    },
    {
        // 23
        name: "An Duong Vuong - Tran Binh Trong",
        lat: 10.759866,
        lng: 106.680087,
        adjacentCoordinates: [
            {
                // An Duong Vuong - Le Hong Phong
                lat: 10.758917,
                lng: 106.677609,
                distance: 290.86317511896954
            },
            {
                // Nguyen Van Cu - An Duong Vuong
                lat: 10.761139,
                lng: 106.683378,
                distance: 386.8039073647507
            },
            {
                // Tran Phu - Tran Binh Trong
                lat: 10.762619,
                lng: 106.679048,
                distance: 326.84916194141823
            },
            {
                //  Nguyen Trai - Tran Binh Trong
                lat: 10.758249,
                lng: 106.680756,
                distance: 194.30442810102633
            }]
    },
    {
        // 24
        name: "An Duong Vuong - Le Hong Phong",
        lat: 10.758917,
        lng: 106.677609,
        adjacentCoordinates: [
            {
                // An Duong Vuong - Huynh Man Dat
                lat: 10.758133,
                lng: 106.675759,
                distance: 220.34220072527953
            },
            {
                // Nguyen Trai - Le Hong Phong
                lat: 10.757257,
                lng: 106.678206,
                distance: 195.98524782594643
            },
            {
                // Tran Phu - Le Hong Phong
                lat: 10.760513,
                lng: 106.677030,
                distance: 188.61256277316295
            },
            {
                //  An Duong Vuong - Tran Binh Trong
                lat: 10.759866,
                lng: 106.680087,
                distance: 290.86317511896954
            }]
    },
    {
        // 25
        name: "Vong xoay An Duong Vuong - Tran Phu",
        lat: 10.757557,
        lng: 106.674079,
        adjacentCoordinates: [
            {
                // An Duong Vuong - Huynh Man Dat
                lat: 10.758133,
                lng: 106.675759,
                distance: 194.59715544253766
            },
            {
                // Tran Phu - Tran Nhan Ton (Huynh Man Dat)
                lat: 10.758844,
                lng: 106.675546,
                distance: 215.09366433238793
            }]
    },
    {
        // 26
        name: "Nguyen Trai - Huynh Man Dat",
        lat: 10.756382,
        lng: 106.676232,
        adjacentCoordinates: [
            {
                // An Duong Vuong - Huynh Man Dat
                lat: 10.758133,
                lng: 106.675759,
                distance: 201.66765677488098
            },
            {
                // Nguyen Trai - Le Hong Phong
                lat: 10.757257,
                lng: 106.678206,
                distance: 236.8401860473409
            },
            {
                // Tran Hung Dao - Huynh Man Dat
                lat: 10.754186,
                lng: 106.676886,
                distance: 254.70611723871687
            }]
    },
    {
        // 27
        name: "Nguyen Trai - Le Hong Phong",
        lat: 10.757257,
        lng: 106.678206,
        adjacentCoordinates: [
            {
                // Nguyen Trai - Huynh Man Dat
                lat: 10.756382,
                lng: 106.676232,
                distance: 236.8401860473409
            },
            {
                // An Duong Vuong - Le Hong Phong
                lat: 10.758917,
                lng: 106.677609,
                distance: 195.98524782594643
            },
            {
                //  Nguyen Trai - Tran Binh Trong
                lat: 10.758249,
                lng: 106.680756,
                distance: 299.9437840620149
            },
            {
                // Tran Hung Dao - Tran Binh Trong
                lat: 10.755400,
                lng: 106.681411,
                distance: 406.928422462904
            }]
    },
    {
        // 28
        name: "Nguyen Trai - Tran Binh Trong",
        lat: 10.758249,
        lng: 106.680756,
        adjacentCoordinates: [
            {
                // An Duong Vuong - Tran Binh Trong
                lat: 10.759866,
                lng: 106.680087,
                distance: 194.30442810102633
            },
            {
                // Nguyen Trai - Nguyen Bieu
                lat: 10.758910,
                lng: 106.682612,
                distance: 215.9030353723206
            },
            {
                // Nguyen Trai - Le Hong Phong
                lat: 10.757257,
                lng: 106.678206,
                distance: 299.9437840620149
            },
            {
                // Tran Hung Dao - Tran Binh Trong
                lat: 10.755400,
                lng: 106.681411,
                distance: 325.1383160505475
            }]
    },
    {
        // 29
        name: "Nguyen Trai - Nguyen Bieu",
        lat: 10.758910,
        lng: 106.682612,
        adjacentCoordinates: [
            {
                // Nguyen Trai - Tran Binh Trong
                lat: 10.758249,
                lng: 106.680756,
                distance: 215.9030353723206
            },
            {
                // Nguyen Van Cu - Nguyen Trai
                lat: 10.759484,
                lng: 106.684000,
                distance: 164.69566510962235
            }]
    },
    {
        // 30
        name: "Nguyen Trai - Nguyen Cu Trinh",
        lat: 10.762564,
        lng: 106.686578,
        adjacentCoordinates: [
            {
                // Nguyen Trai - Tran Dinh Xu
                lat: 10.763377,
                lng: 106.687027,
                distance: 102.96537325647937
            },
            {
                // Nguyen Van Cu - Nguyen Trai
                lat: 10.759484,
                lng: 106.684,
                distance: 443.8953124154783
            },
            {
                // Nguyen Cu Trinh - Tran Dinh Xu
                lat: 10.762918,
                lng: 106.687695,
                distance: 128.35550693066935
            }]
    },
    {
        // 31
        name: "Nguyen Trai - Tran Dinh Xu",
        lat: 10.763377,
        lng: 106.687027,
        adjacentCoordinates: [
            {
                // Nguyen Trai - Nguyen Cu Trinh
                lat: 10.762564,
                lng: 106.686578,
                distance: 102.96537325647937
            },
            {
                // Vong xoay Nguyen Trai - Cong Quynh
                lat: 10.766711,
                lng: 106.688292,
                distance: 396.08396424750424
            },
            {
                // Nguyen Cu Trinh - Tran Dinh Xu
                lat: 10.762918,
                lng: 106.687695,
                distance: 89.1489668454361
            }]
    },
    {
        // 32
        name: "Vong xoay Nguyen Trai - Cong Quynh",
        lat: 10.766711,
        lng: 106.688292,
        adjacentCoordinates: [
            {
                // Nguyen Trai - Tran Dinh Xu
                lat: 10.763377,
                lng: 106.687027,
                distance: 396.08396424750424
            },
            {
                // Cong Quynh - Nguyen Cu Trinh
                lat: 10.764175,
                lng: 106.690722,
                distance: 387.70796214719763
            },
            {
                // Nguyen Trai - Nam Quoc Cang
                lat: 10.767429,
                lng: 106.688512,
                distance: 83.46993569614955
            },
            {
                // Cong Quynh - Bui Thi Xuan
                lat: 10.767548,
                lng: 106.686284,
                distance: 238.5436808556501
            }]
    },
    {
        // 33
        name: "Nguyen Trai - Ton That Tung",
        lat: 10.768740,
        lng: 106.689668,
        adjacentCoordinates: [
            {
                // Le Lai - Ton That Tung
                lat: 10.768425,
                lng: 106.689921,
                distance: 44.666650467962185
            },
            {
                // Bui Thi Xuan - Ton That Tung
                lat: 10.769999,
                lng: 106.688611,
                distance: 181.66989619192194
            },
            {
                // Nguyen Trai - Le Lai
                lat: 10.768222,
                lng: 106.689258,
                distance: 73.04422519355504
            },
            {
                // Nguyen Trai - Nguyen Van Trang
                lat: 10.770455,
                lng: 106.692012,
                distance: 319.6191178620549
            }]
    },
    {
        // 34
        name: "Nguyen Trai - Luong Huu Khanh",
        lat: 10.768011,
        lng: 106.688921,
        adjacentCoordinates: [
            {
                // Nguyen Trai - Nam Quoc Cang
                lat: 10.767429,
                lng: 106.688512,
                distance: 78.72784140462956
            },
            {
                // Bui Thi Xuan - Luong Huu Khanh
                lat: 10.768815,
                lng: 106.687459,
                distance: 183.22943925907566
            },
            {
                // Nguyen Trai - Le Lai
                lat: 10.768222,
                lng: 106.689258,
                distance: 43.70273696817642
            }]
    },
    {
        // 35
        name: "Nguyen Trai - Nguyen Van Trang",
        lat: 10.770455,
        lng: 106.692012,
        adjacentCoordinates: [
            {
                // Nguyen Trai - Ton That Tung
                lat: 10.768740,
                lng: 106.689668,
                distance: 319.6191178620549
            },
            {
                // Le Lai - Nguyen Van Trang
                lat: 10.769567,
                lng: 106.692667,
                distance: 122.0758047362467
            },
            {
                //Nguyen Van Trang - Le Thi Rieng
                lat: 10.771319,
                lng: 106.691549,
                distance: 108.69356011542143
            },
            {
                //Vong xoay Nguyen Trai - Ly Tu Trong (nga sau Phu Dong)
                lat: 10.771319,
                lng: 106.693223,
                distance: 163.67368111539392
            }]
    },
    {
        // 37
        name: "Vong xoay Nguyen Trai - Ly Tu Trong (nga sau Phu Dong)",
        lat: 10.771319,
        lng: 106.693223,
        adjacentCoordinates: [
            {
                // Bui Thi Xuan - CMT8
                lat: 10.772708,
                lng: 106.691223,
                distance: 267.8521911309887
            },
            {
                // Le Lai - Nguyen Thi Nghia
                lat: 10.770157,
                lng: 106.694171,
                distance: 165.77119345175421
            },
            {
                // Nguyen Van Trang - Le Thi Rieng
                lat: 10.771319,
                lng: 106.691549,
                distance: 183.06553391339853
            },
            {
                // Nguyen Trai - Nguyen Van Trang
                lat: 10.770455,
                lng: 106.692012,
                distance: 163.67368111539392
            }]
    },
    {
        // 38
        name: "Nguyen Trai - Nam Quoc Cang",
        lat: 10.767429,
        lng: 106.688512,
        adjacentCoordinates: [
            {
                // Vong xoay Nguyen Trai - Cong Quynh
                lat: 10.766711,
                lng: 106.688292,
                distance: 83.469
            },
            {
                // Nguyen Trai - Luong Huu Khanh
                lat: 10.768011,
                lng: 106.688921,
                distance: 78.727
            },
            {
                //Bui Thi Xuan - Nam Quoc Cang
                lat: 10.768350,
                lng: 106.687021,
                distance: 192.609
            }]
    },
    {
        // 39
        name: "Nguyen Trai - Le Lai",
        lat: 10.768222,
        lng: 106.689258,
        adjacentCoordinates: [
            {
                // Nguyen Trai - Luong Huu Khanh
                lat: 10.768011,
                lng: 106.688921,
                distance: 43.70273696817642
            },
            {
                // Nguyen Trai - Ton That Tung
                lat: 10.768740,
                lng: 106.689668,
                distance: 73.04422519355504
            },
            {
                // Le Lai - Ton That Tung
                lat: 10.768425,
                lng: 106.689921,
                distance: 75.9451310124548
            }]
    },
    {
        // 40
        name: "Le Lai - Ton That Tung",
        lat: 10.768425,
        lng: 106.689921,
        adjacentCoordinates: [
            {
                // Nguyen Trai - Le Lai
                lat: 10.768222,
                lng: 106.689258,
                distance: 75.9451310124548
            },
            {
                // Nguyen Trai - Ton That Tung
                lat: 10.768740,
                lng: 106.689668,
                distance: 44.666650467962185
            },
            {
                // Le Lai - Nguyen Van Trang
                lat: 10.769567,
                lng: 106.692667,
                distance: 326.09997931588987
            }]
    },
    // Nguyen Tu Thien [41 - 60]
    {
        // 41
        name: "Le Lai - Nguyen Thi Nghia",
        lat: 10.770157,
        lng: 106.694171,
        adjacentCoordinates: [
            {
                // Le Lai - Nguyen Van Trang
                lat: 10.769567,
                lng: 106.692667,
                distance: 177.1040296124779
            },
            {
                // Vong xoay Tran Hung Dao - cho Ben Thanh
                lat: 10.771538,
                lng: 106.698437,
                distance: 491.1994577552802
            },
            {
                // Vong xoay Nguyen Trai - Ly Tu Trong (nga sau Phu Dong)
                lat: 10.771319,
                lng: 106.693223,
                distance: 165.77119345175421
            },
            {
                // Pham Ngu Lao - Nguyen Thai Hoc (Nguyen Thi Nghia)
                lat: 10.769228,
                lng: 106.69473,
                distance: 120.13281583448673
            }]
    },
    {
        // 42
        name: "Le Lai - Nguyen Van Trang",
        lat: 10.769567,
        lng: 106.692667,
        adjacentCoordinates: [
            {
                // Le Lai - Nguyen Thi Nghia
                lat: 10.770157,
                lng: 106.694171,
                distance: 177.1040296124779
            },
            {
                // Nguyen Trai - Nguyen Van Trang
                lat: 10.770455,
                lng: 106.692012,
                distance: 122.0758047362467
            },
            {
                // Le Lai - Ton That Tung
                lat: 10.768425,
                lng: 106.689921,
                distance: 326.09997931588987
            }]
    },
    {
        // 43
        name: "Nguyen Cu Trinh - Tran Dinh Xu",
        lat: 10.762918,
        lng: 106.687695,
        adjacentCoordinates: [
            {
                // Nguyen Trai - Nguyen Cu Trinh
                lat: 10.762564,
                lng: 106.686578,
                distance: 128.35550693066935
            },
            {
                // Nguyen Trai - Tran Dinh Xu
                lat: 10.763377,
                lng: 106.687027,
                distance: 89.1489668454361
            },
            {
                // Tran Hung Dao - Tran Dinh Xu
                lat: 10.761673,
                lng: 106.68973,
                distance: 262.17680092009095
            },
            {
                // Tran Hung Dao - Cong Quynh
                lat: 10.763005,
                lng: 106.69094,
                distance: 355.00914982395057
            },
            {
                // Cong Quynh - Nguyen Cu Trinh
                lat: 10.764175,
                lng: 106.690722,
                distance: 359.39478324456417
            }]
    },
    {
        // 44
        name: "Cong Quynh - NTMK",
        lat: 10.76837,
        lng: 106.684584,
        adjacentCoordinates: [
            {
                // Cong Quynh - Pham Viet Chanh
                lat: 10.767938,
                lng: 106.685453,
                distance: 106.50804708558032
            },
            {
                // NTMK - Luong Huu Khanh
                lat: 10.770049,
                lng: 106.686126,
                distance: 251.73438465754967
            },
            {
                // NTMK - Cao Thang
                lat: 10.768192,
                lng: 106.68425,
                distance: 41.55450510906157
            }]
    },
    {
        // 45
        name: "Cong Quynh - Pham Viet Chanh",
        lat: 10.767938,
        lng: 106.685453,
        adjacentCoordinates: [
            {
                // Cong Quynh - Bui Thi Xuan
                lat: 10.767548,
                lng: 106.686284,
                distance: 100.71535839086165
            },
            {
                // Cong Quynh - NTMK
                lat: 10.76837,
                lng: 106.684584,
                distance: 106.50804708558032
            },
            {
                // Vong xoay Nguyen Van Cu - Ly Thai To
                lat: 10.765408,
                lng: 106.681661,
                distance: 501.28833151144323
            }]
    },
    {
        // 46
        name: "Cong Quynh - Bui Thi Xuan",
        lat: 10.767548,
        lng: 106.686284,
        adjacentCoordinates: [
            {
                // Cong Quynh - Pham Viet Chanh
                lat: 10.767938,
                lng: 106.685453,
                distance: 100.71535839086165
            },
            {
                // Bui Thi Xuan - Nam Quoc Cang
                lat: 10.76835,
                lng: 106.687021,
                distance: 120.27724948167472
            },
            {
                // vong xoay Nguyen Trai - Cong Quynh
                lat: 10.766711,
                lng: 106.688292,
                distance: 238.5436808556501
            }]
    },
    {
        // 47
        name: "Cong Quynh - Nguyen Cu Trinh",
        lat: 10.764175,
        lng: 106.690722,
        adjacentCoordinates: [
            {
                // vong xoay Nguyen Trai - Cong Quynh
                lat: 10.766711,
                lng: 106.688292,
                distance: 387.70796214719763
            },
            {
                // Nguyen Cu Trinh - Tran Dinh Xu
                lat: 10.762918,
                lng: 106.687695,
                distance: 359.39478324456417
            },
            {
                // Tran Hung Dao - Nguyen Cu Trinh
                lat: 10.76481,
                lng: 106.692474,
                distance: 204.22356210371495
            },
            {
                // Tran Hung Dao - Cong Quynh
                lat: 10.763005,
                lng: 106.69094,
                distance: 132.4078052849133
            }]
    },
    {
        // 48
        name: "Pham Ngu Lao - Ton That Tung",
        lat: 10.76754,
        lng: 106.6905,
        adjacentCoordinates: [
            {
                // Le Lai - Ton That Tung
                lat: 10.768425,
                lng: 106.689921,
                distance: 328.5336817327076
            },
            {
                // vong xoay Nguyen Trai - Cong Quynh
                lat: 10.766711,
                lng: 106.688292,
                distance: 258.4999214102771
            }]
    },
    {
        // 49
        name: "Pham Ngu Lao - De Tham",
        lat: 10.768649,
        lng: 106.693284,
        adjacentCoordinates: [
            {
                // Pham Ngu Lao - Ton That Tung
                lat: 10.76754,
                lng: 106.6905,
                distance: 328.5336817327076
            }]
    },
    {
        // 50
        name: "Pham Ngu Lao - Nguyen Thai Hoc (Nguyen Thi Nghia)",
        lat: 10.769228,
        lng: 106.69473,
        adjacentCoordinates: [
            {
                // Le Lai - Nguyen Thi Nghia
                lat: 10.770157,
                lng: 106.694171,
                distance: 120.13281583448673
            },
            {
                // Tran Hung Dao - Nguyen Thai Hoc
                lat: 10.768048,
                lng: 106.695402,
                distance: 150.51691744973058
            },
            {
                // Pham Ngu Lao - De Tham
                lat: 10.768649,
                lng: 106.693284,
                distance: 170.76417062154565
            }]
    },
    {
        // 51
        name: "NTMK - Nguyen Thien Thuat",
        lat: 10.766094,
        lng: 106.68229,
        adjacentCoordinates: [
            {
                // NTMK - Cao Thang
                lat: 10.768192,
                lng: 106.68425,
                distance: 316.99929900876725
            },
            {
                // Vong xoay Nguyen Van Cu - Ly Thai To
                lat: 10.765408,
                lng: 106.681661,
                distance: 102.77823475118275
            },
            {
                // Nguyen Dinh Chieu - Nguyen Thien Thuat
                lat: 10.767866,
                lng: 106.68006,
                distance: 313.66289324497006
            }]
    },
    {
        // 52
        name: "NTMK - Luong Huu Khanh",
        lat: 10.770049,
        lng: 106.686126,
        adjacentCoordinates: [
            {
                // Cong Quynh - NTMK
                lat: 10.76837,
                lng: 106.684584,
                distance: 251.73438465754967
            },
            {
                // NTMK - Nguyen Thuong Hien
                lat: 10.770404,
                lng: 106.686399,
                distance: 49.527966055439656
            },
            {
                // Bui Thi Xuan - Luong Huu Khanh
                lat: 10.768815,
                lng: 106.687459,
                distance: 200.3009746555319
            }]
    },
    {
        // 53
        name: "NTMK - Cao Thang",
        lat: 10.768192,
        lng: 106.68425,
        adjacentCoordinates: [
            {
                // Vo Van Tan - Cao Thang
                lat: 10.769047,
                lng: 106.683265,
                distance: 143.74355456830747
            },
            {
                // Cong Quynh - NTMK
                lat: 10.76837,
                lng: 106.684584,
                distance: 41.55450510906157
            },
            {
                // NTMK - Nguyen Thien Thuat
                lat: 10.766094,
                lng: 106.68229,
                distance: 316.99929900876725
            }]
    },
    {
        // 54
        name: "NTMK - Ton That Tung",
        lat: 10.771259,
        lng: 106.6872,
        adjacentCoordinates: [
            {
                // NTMK - Nguyen Thuong Hien
                lat: 10.770404,
                lng: 106.686399,
                distance: 129.3520195568464
            },
            {
                // NTMK - CMT8
                lat: 10.773654,
                lng: 106.689452,
                distance: 362.94859126944914
            },
            {
                // Bui Thi Xuan - Ton That Tung
                lat: 10.769999,
                lng: 106.688611,
                distance: 208.52703496950306
            }]
    },
    {
        // 55
        name: "NTMK - Nguyen Thuong Hien",
        lat: 10.770404,
        lng: 106.686399,
        adjacentCoordinates: [
            {
                // NTMK - Ton That Tung
                lat: 10.771259,
                lng: 106.6872,
                distance: 129.3520195568464
            },
            {
                // NTMK - Luong Huu Khanh
                lat: 10.770049,
                lng: 106.686126,
                distance: 49.527966055439656
            },
            {
                // Vo Van Tan - Nguyen Thuong Hien
                lat: 10.771569,
                lng: 106.685651,
                distance: 153.32973853857925
            }]
    },
    {
        // 56
        name: "NTMK - CMT8",
        lat: 10.773654,
        lng: 106.689452,
        adjacentCoordinates: [
            {
                // NTMK - Ton That Tung
                lat: 10.771259,
                lng: 106.6872,
                distance: 362.94859126944914
            },
            {
                // Vo Van Tan - CMT8
                lat: 10.774261,
                lng: 106.688209,
                distance: 151.79941614447708
            },
            {
                // Bui Thi Xuan - CMT8
                lat: 10.772708,
                lng: 106.691223,
                distance: 220.45112439529402
            }]
    },
    {
        // 57
        name: "Ly Thai To - Nguyen Dinh Chieu",
        lat: 10.766359,
        lng: 106.678715,
        adjacentCoordinates: [
            {
                // vong xoay Ly Thai To - Dien Bien Phu
                lat: 10.767703,
                lng: 106.674414,
                distance: 493.57776015104855
            },
            {
                // Vong xoay Nguyen Van Cu - Ly Thai To
                lat: 10.765408,
                lng: 106.681661,
                distance: 339.1224468474494
            }]
    },
    {
        // 58
        name: "vong xoay Ly Thai To - Dien Bien Phu",
        lat: 10.767703,
        lng: 106.674414,
        adjacentCoordinates: [
            {
                // Dien Bien Phu - Nguyen Thien Thuat
                lat: 10.770575,
                lng: 106.676713,
                distance: 406.7238823960385
            },
            {
                // Ly Thai To - Nguyen Dinh Chieu
                lat: 10.766359,
                lng: 106.678715,
                distance: 493.57776015104855
            },
            {
                // Hung Vuong - Le Hong Phong
                lat: 10.762183,
                lng: 106.676458,
                distance: 653.8784170270096
            }]
    },
    {
        // 59
        name: "Dien Bien Phu - Nguyen Thien Thuat",
        lat: 10.770575,
        lng: 106.676713,
        adjacentCoordinates: [
            {
                // Dien Bien Phu - Ban Co
                lat: 10.771895,
                lng: 106.678059,
                distance: 207.98693297382835
            },
            {
                // Nguyen Dinh Chieu - Nguyen Thien Thuat
                lat: 10.767866,
                lng: 106.68006,
                distance: 474.2519443446276
            }]
    },
    {
        // 60
        name: "Dien Bien Phu - Ban Co",
        lat: 10.771895,
        lng: 106.678059,
        adjacentCoordinates: [
            {
                // Dien Bien Phu - Cao Thang
                lat: 10.772711,
                lng: 106.67906,
                distance: 142.24754026152237
            },
            {
                // Nguyen Dinh Chieu - Ban Co
                lat: 10.769103,
                lng: 106.68122,
                distance: 464.86041746977935
            }]
    },
    // Phuong Hoang Thong [61 - 77(end)]
    {
        // 61
        name: "Dien Bien Phu - Cao Thang",
        lat: 10.772711,
        lng: 106.679060,
        adjacentCoordinates: [
            {
                // Dien Bien Phu - Ban Co
                lat: 10.771895,
                lng: 106.678059,
                distance: 142.24754026152237
            },
            {
                // Dien Bien Phu - Nguyen Thuong Hien
                lat: 10.775949,
                lng: 106.682864,
                distance: 550.4336523802895
            },
            {
                // Nguyen Dinh Chieu - Cao Thang
                lat: 10.770048,
                lng: 106.682098,
                distance: 445.25912236475097
            }]
    },
    {
        // 62
        name: "Dien Bien Phu - Nguyen Thuong Hien",
        lat: 10.775949,
        lng: 106.682864,
        adjacentCoordinates: [
            {
                // Nguyen Dinh Chieu - Nguyen Thuong Hien
                lat: 10.772913,
                lng: 106.684792,
                distance: 398.33985703208776
            },
            {
                // Dien Bien Phu - CMT8
                lat: 10.776691,
                lng: 106.683692,
                distance: 122.56170478771854
            },
            {
                // Dien Bien Phu - Cao Thang
                lat: 10.772711,
                lng: 106.67906,
                distance: 550.4336523802895
            }]
    },
    {
        // 63
        name: "Dien Bien Phu - CMT8",
        lat: 10.776691,
        lng: 106.683692,
        adjacentCoordinates: [
            {
                // Nguyen Dinh Chieu - CMT8
                lat: 10.775019,
                lng: 106.686805,
                distance: 387.9862724070609
            },
            {
                // Dien Bien Phu - Nguyen Thuong Hien 
                lat: 10.775949,
                lng: 106.682864,
                distance: 122.56170478771854
            }]
    },
    {
        // 64
        name: "Nguyen Dinh Chieu - Nguyen Thien Thuat",
        lat: 10.767866,
        lng: 106.68006,
        adjacentCoordinates: [
            {
                // Ly Thai To - Nguyen Dinh Chieu
                lat: 10.766359,
                lng: 106.678715,
                distance: 223.10985627140533
            },
            {
                // Dien Bien Phu - Nguyen Thien Thuat
                lat: 10.770575,
                lng: 106.676713,
                distance: 474.2519443446276
            },
            {
                // NTMK - Nguyen Thien Thuat
                lat: 10.766094,
                lng: 106.68229,
                distance: 313.66289324497006
            },
            {
                // Nguyen Dinh Chieu - Ban Co
                lat: 10.769103,
                lng: 106.68122,
                distance: 187.22848642508166
            }]
    },
    {
        // 65
        name: "Nguyen Dinh Chieu - Ban Co",
        lat: 10.769103,
        lng: 106.68122,
        adjacentCoordinates: [
            {
                // Nguyen Dinh Chieu - Nguyen Thien Thuat
                lat: 10.767866,
                lng: 106.68006,
                distance: 187.22848642508166
            },
            {
                // Nguyen Dinh Chieu - Cao Thang 
                lat: 10.770048,
                lng: 106.682098,
                distance: 142.42772657501956
            },
            {
                // Dien Bien Phu - Ban Co
                lat: 10.771895,
                lng: 106.678059,
                distance: 464.86041746977935
            }]
    },
    {
        // 66
        name: "Nguyen Dinh Chieu - Cao Thang",
        lat: 10.770048,
        lng: 106.682098,
        adjacentCoordinates: [
            {
                // Dien Bien Phu - Cao Thang
                lat: 10.772711,
                lng: 106.67906,
                distance: 445.25912236475097
            },
            {
                // Nguyen Dinh Chieu - Nguyen Thuong Hien
                lat: 10.772913,
                lng: 106.684792,
                distance: 434.1797061198464
            },
            {
                // Nguyen Dinh Chieu - Ban Co
                lat: 10.769103,
                lng: 106.68122,
                distance: 142.42772657501956
            },
            {
                // Vo Van Tan - Cao Thang
                lat: 10.769047,
                lng: 106.683265,
                distance: 169.42291796385405
            }]
    },
    {
        // 67
        name: "Nguyen Dinh Chieu - Nguyen Thuong Hien",
        lat: 10.772913,
        lng: 106.684792,
        adjacentCoordinates: [
            {
                // Nguyen Dinh Chieu - CMT8
                lat: 10.775019,
                lng: 106.686805,
                distance: 321.59203366312806
            },
            {
                // Dien Bien Phu - Nguyen Thuong Hien
                lat: 10.775949,
                lng: 106.682864,
                distance: 398.33985703208776
            },
            {
                // Nguyen Dinh Chieu - Cao Thang
                lat: 10.770048,
                lng: 106.682098,
                distance: 434.1797061198464
            },
            {
                // Vo Van Tan - Nguyen Thuong Hien
                lat: 10.771569,
                lng: 106.685651,
                distance: 176.65951249971653
            }]
    },
    {
        // 68
        name: "Nguyen Dinh Chieu - CMT8",
        lat: 10.775019,
        lng: 106.686805,
        adjacentCoordinates: [
            {
                // Vo Van Tan - CMT8
                lat: 10.774261,
                lng: 106.688209,
                distance: 175.19608333176805
            },
            {
                // Dien Bien Phu - CMT8
                lat: 10.776691,
                lng: 106.683692,
                distance: 387.9862724070609
            },
            {
                // Nguyen Dinh Chieu - Nguyen Thuong Hien 
                lat: 10.772913,
                lng: 106.684792,
                distance: 321.59203366312806
            }]
    },
    {
        // 69
        name: "Bui Thi Xuan - CMT8",
        lat: 10.772708,
        lng: 106.691223,
        adjacentCoordinates: [
            {
                // NTMK - CMT8
                lat: 10.773654,
                lng: 106.689452,
                distance: 220.45112439529402
            },
            {
                // Vong xoay Nguyen Trai - Ly Tu Trong (nga sau Phu Dong)
                lat: 10.771319,
                lng: 106.693223,
                distance: 267.8521911309887
            },
            {
                // bui Thi Xuan - Le Thi Rieng
                lat: 10.770309,
                lng: 106.688933,
                distance: 366.10626795456926
            }]
    },
    {
        // 70
        name: "bui Thi Xuan - Le Thi Rieng",
        lat: 10.770309,
        lng: 106.688933,
        adjacentCoordinates: [
            {
                // Bui Thi Xuan - Ton That Tung
                lat: 10.769999,
                lng: 106.688611,
                distance: 49.30376928734032
            },
            {
                // Bui Thi Xuan - CMT8
                lat: 10.772708,
                lng: 106.691223,
                distance: 366.10626795456926
            },
            {
                // Nguyen Van Trang - Le Thi Rieng
                lat: 10.771319,
                lng: 106.691549,
                distance: 307.38195794804204
            }]
    },
    {
        // 71
        name: "Bui Thi Xuan - Ton That Tung",
        lat: 10.769999,
        lng: 106.688611,
        adjacentCoordinates: [
            {
                // bui Thi Xuan - Le Thi Rieng
                lat: 10.770309,
                lng: 106.688933,
                distance: 49.30376928734032
            },
            {
                // NTMK - Ton That Tung
                lat: 10.771259,
                lng: 106.6872,
                distance: 208.52703496950306
            },
            {
                // Bui Thi Xuan - Luong Huu Khanh
                lat: 10.768815,
                lng: 106.687459,
                distance: 182.3270383386845
            },
            {
                //Nguyen Trai - Ton That Tung
                lat: 10.76874,
                lng: 106.689668,
                distance: 181.66989619192194
            }]
    },
    {
        // 72
        name: "Bui Thi Xuan - Luong Huu Khanh",
        lat: 10.768815,
        lng: 106.687459,
        adjacentCoordinates: [
            {
                // NTMK - Luong Huu Khanh 
                lat: 10.770049,
                lng: 106.686126,
                distance: 200.3009746555319
            },
            {
                // Bui Thi Xuan - Ton That Tung
                lat: 10.769999,
                lng: 106.688611,
                distance: 182.3270383386845
            },
            {
                // Bui Thi Xuan - Nam Quoc Cang
                lat: 10.76835,
                lng: 106.687021,
                distance: 70.52524124888163
            },
            {
                // Nguyen Trai - Luong Huu Khanh
                lat: 10.768011,
                lng: 106.688921,
                distance: 183.22943925907566
            }]
    },
    {
        // 73
        name: "Bui Thi Xuan - Nam Quoc Cang",
        lat: 10.76835,
        lng: 106.687021,
        adjacentCoordinates: [
            {
                // Cong Quynh - Bui Thi Xuan 
                lat: 10.767548,
                lng: 106.686284,
                distance: 120.27724948167472
            },
            {
                // Bui Thi Xuan - Luong Huu Khanh
                lat: 10.768815,
                lng: 106.687459,
                distance: 70.52524124888163
            },
            {
                // Nguyen Trai - Nam Quoc Cang
                lat: 10.767429,
                lng: 106.688512,
                distance: 192.60921879576804
            }]
    },
    {
        // 74
        name: "Vo Van Tan - CMT8",
        lat: 10.774261,
        lng: 106.688209,
        adjacentCoordinates: [
            {
                // Nguyen Dinh Chieu - CMT8
                lat: 10.775019,
                lng: 106.686805,
                distance: 175.19608333176805
            },
            {
                // NTMK - CMT8
                lat: 10.773654,
                lng: 106.689452,
                distance: 151.79941614447708
            },
            {
                // Vo Van Tan - Nguyen Thuong Hien
                lat: 10.771569,
                lng: 106.685651,
                distance: 409.94626849217343
            }]
    },
    {
        // 75
        name: "Vo Van Tan - Nguyen Thuong Hien",
        lat: 10.771569,
        lng: 106.685651,
        adjacentCoordinates: [
            {
                // Nguyen Dinh Chieu - Nguyen Thuong Hien
                lat: 10.772913,
                lng: 106.684792,
                distance: 176.65951249971653
            },
            {
                // Vo Van Tan - CMT8
                lat: 10.774261,
                lng: 106.688209,
                distance: 409.94626849217343
            },
            {
                // NTMK - Nguyen Thuong Hien
                lat: 10.7704049,
                lng: 106.686399,
                distance: 153.32973853857925
            },
            {
                // Vo Van Tan - Cao Thang
                lat: 10.769047,
                lng: 106.683265,
                distance: 383.27986990309586
            }]
    },
    {
        // 76
        name: "Vo Van Tan - Cao Thang",
        lat: 10.769047,
        lng: 106.683265,
        adjacentCoordinates: [
            {
                // Vo Van Tan - Nguyen Thuong Hien
                lat: 10.771569,
                lng: 106.685651,
                distance: 383.27986990309586
            },
            {
                // Nguyen Dinh Chieu - Cao Thang
                lat: 10.770048,
                lng: 106.682098,
                distance: 169.42291796385405
            },
            {
                // NTMK - Cao Thang
                lat: 10.768192,
                lng: 106.68425,
                distance: 143.74355456830747
            }]
    },
    {
        // 77(end)
        name: "Nguyen Van Trang - Le Thi Rieng",
        lat: 10.771319,
        lng: 106.691549,
        adjacentCoordinates: [
            {
                // Nguyen Trai - Nguyen Van Trang
                lat: 10.770455,
                lng: 106.692012,
                distance: 108.69356011542143
            },
            {
                // Vong xoay Nguyen Trai - Ly Tu Trong (nga sau Phu Dong)
                lat: 10.771319,
                lng: 106.693223,
                distance: 183.06553391339853
            },
            {
                // bui Thi Xuan - Le Thi Rieng
                lat: 10.770309,
                lng: 106.688933,
                distance: 307.38195794804204
            }]
    }
]