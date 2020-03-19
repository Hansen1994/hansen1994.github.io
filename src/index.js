        run(5);
        function run(num) {
           
            const frag = document.createDocumentFragment()
            //产生10个div，一开始的运动
            for (var i = 0;i < num;i++) {
                var odiv = document.createElement("div");
                odiv.className = 'ball';
                odiv.style.background= randomRgbColor();
                odiv.leftVal = 1 + i;//设置自定义属性初始值，并设置其left的变化量，这个也和球移动的角度有关
                odiv.topVal = 1 + i;//设置自定义属性初始值，并设置其top的变化量，这个也和球移动的角度有关
                frag.appendChild(odiv)
            }
            document.body.appendChild(frag)

            var oball = document.querySelectorAll(".ball");
            //可视区宽高
            var maxW = document.documentElement.clientWidth - oball[0].clientWidth;//文档的宽减去球的宽度就是球移动的宽度
            var maxH = document.documentElement.clientHeight - oball[0].clientHeight;//文档的高减去球的高度就是球移动的高度


            //当浏览器高度发生改变时，重新计算高度，宽度值
            window.onresize = function () {
                var maxW = document.documentElement.clientWidth - oball[0].clientWidth;//文档的宽减去球的宽度就是球移动的宽度
                var maxH = document.documentElement.clientHeight - oball[0].clientHeight;//文档的高减去球的高度就是球移动的高度
            }

            //碰撞第一次后的运动
            player();
            function player() {
                
                for (var i = 0; i < num; i++) {
                    var aball = oball[i];
                    // 元素距离左、顶端距离
                    var sleft = aball.offsetLeft,
                        stop = aball.offsetTop;
                        // console.log(sleft,stop)
                    var left = sleft + aball.leftVal,
                        top = stop + aball.topVal;

                    //一种限定的写法
                    if(left > maxW || left < 0){
                        left = Math.min(maxW , left);//8 5→5 0→0
                        left = Math.max(left , 0);
                        aball.leftVal = -aball.leftVal;//反弹
                        document.body.bgColor = randomRgbColor2()
                        aball.style.background = randomRgbColor();
                    }

                    if(top > maxH || top < 0){
                        top = Math.min(maxH , top);//8 5→5 0→0
                        top = Math.max(top , 0);
                        aball.topVal = -aball.topVal;//反弹
                        document.body.bgColor = randomRgbColor2()
                        aball.style.background= randomRgbColor();
                    }

/*                    if (left > maxW){
                        left = maxW;
                        aball.leftVal = - aball.leftVal;//反弹
                    }
                    if (left < 0){
                        left = 0;
                        aball.leftVal = - aball.leftVal;//反弹
                    }
                    if (top > maxH){
                        top = maxH;
                        aball.topVal = - aball.topVal;//反弹
                    }
                    if (top < 0){
                        top = 0;
                        aball.topVal = -aball.topVal;//反弹
                    }*/
                    aball.style.left = left + 'px';
                    aball.style.top = top + 'px';
                }
                requestAnimationFrame(player);
            }
        }


        function randomRgbColor() {
            var r = Math.floor(Math.random() * 255);
            var g = Math.floor(Math.random() * 255);
            var b = Math.floor(Math.random() * 255);

            return "radial-gradient(rgb(255,255,255),rgb("+r+","+g+","+b+"))";

            //return "rgb("+r+","+g+","+b+")";
        }

        function randomRgbColor2() {
            var r = Math.floor(Math.random() * 100 + 100);
            var g = Math.floor(Math.random() * 100 + 20);
            var b = Math.floor(Math.random() * 255);

            return "rgb("+r+","+g+","+b+")";

            //return "rgb("+r+","+g+","+b+")";
        }
