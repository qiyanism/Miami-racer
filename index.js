var spinnerImg1   = undefined;
var spinnerImg2   = undefined;
            var distanceTxt     = undefined;
            var wheelImgUrl  = "http://pngimg.com/uploads/car_wheel/car_wheel_PNG23307.png";
            var spiralImgUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Black_bold_spiral.svg/2000px-Black_bold_spiral.svg.png";
 
            var distance           = 0;
            var maxSpeedChange  = 20;
            var slowSpeed       = 2;
            var speedParam      = slowSpeed;

            /**
            * Function to change the image to wheel
            *
            * @Arguments: none
            *
            * @Returns: void
            */
            function accelerate() {
                speedParam += maxSpeedChange;
            }

            /**
            * Function to change the image to spiral
            *
            * @Arguments: none
            *
            * @Returns: void
            */
            function breaks() {
                speedParam -= maxSpeedChange;
            }

            /**
            * Function to update speed display
            *
            * @Arguments: void
            *
            * @Returns: void
            */
            function updateDistanceTxt() {
                distanceTxt.innerHTML = "you have driven&nbsp;&nbsp;" + parseFloat(distance / 100).toFixed(2) + "&nbsp;&nbsp;meters on a vacation";
                speedParameter.innerHTML = parseInt(speedParam) + "&nbsp;km/h";
            }

            /**
            * @Function to rotate the image
            *
            * @Arguments: void
            *
            * @Returns: void
            */
            function rotateImg() {
                spinnerImg1.style.transform = "rotate(" + distance + "deg)";
                spinnerImg2.style.transform = "rotate(" + distance + "deg)";
            }

            window.addEventListener("load", function() {
                spinnerImg1 = document.getElementById("spinner");
                spinnerImg2 = document.getElementById("spinner2");
                distanceTxt   = document.getElementById("distance");
                speedParameter = this.document.getElementById("speedparameter");
                distance = speedParam;
                setInterval(function() {
                    updateDistanceTxt();
                    rotateImg();
                    if (speedParam > slowSpeed) {
                        speedParam -= 0.55; ///เพื่อทำให้การหมุนมีการหมุนช้าลงเรื่อยๆ เสมือนรถจริง
                    }
                    if (speedParam < slowSpeed) {
                        speedParam = slowSpeed; ///เพื่อจำกัดความเร็วขั้นต่ำ ไม่ให้ถึง0 ยังคงให้หมุนอยู่ตลอด
                    } 
                    distance += speedParam; ///speed จะเพิ่มขึ้นและไปแสดงผลที่หน้าจอ และเพิ่มองศาการหมุน
                }, 40); ///ฟังก์ชั่นทำงานทุกๆ 40ms(ยิ่งน้อยจำนวนการหมุนต่อวินาทีจะมากขึ้น) อารมณ์ประมาณ 1framerate/40ms = 25framerate/1s = 25fps


                spinnerImg1.addEventListener("click", function() {
                    speedParam += maxSpeedChange; 
                });

            }); 