function Car (licensePlate, transmissionType, carModel) {
	this.licensePlate = licensePlate;
	this.transmissionType = transmissionType;
	this.carModel = carModel;
};

$(function(){

        var canvas=document.getElementById("canvas");
        var ctx=canvas.getContext("2d");

        window.requestAnimFrame = (function(callback) {
          return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
          function(callback) {
            window.setTimeout(callback, 1000 / 60);
          };
        })();


        var imageIndex=0;
        var animPctComplete=0;
        var fps = 60;

        // image loader

        var imageURLs=[];
        var imagesOK=0;
        var imgs=[];
        imageURLs.push("https://www.avis.com/car-rental/images/global/en/rentersguide/vehicle_guide/hyundai_accent_4dr_thumbnail.gif");
        imageURLs.push("https://www.avis.com/car-rental/images/global/en/rentersguide/vehicle_guide/ford_focus_thumbnail.gif");
        imageURLs.push("https://www.avis.com/car-rental/images/global/en/rentersguide/vehicle_guide/chevrolet_cruze_thumbnail.gif");
        imageURLs.push("https://www.avis.com/car-rental/images/global/en/rentersguide/vehicle_guide/chrysler_200_sedan_thumbnail.gif");
        imageURLs.push("https://www.avis.com/car-rental/images/global/en/rentersguide/vehicle_guide/chevroletimpala-us-05-thumbnail.gif");
        imageURLs.push("https://www.avis.com/car-rental/images/global/en/rentersguide/vehicle_guide/bmw_528_thumbnail.gif");
        imageURLs.push("https://www.avis.com/car-rental/images/global/en/rentersguide/vehicle_guide/bmw_x5_thumbnail.gif");
        imageURLs.push("https://www.avis.com/car-rental/images/global/en/rentersguide/vehicle_guide/toyota_prius_hybrid_thumbnail.gif");
        imageURLs.push("https://www.avis.com/car-rental/images/global/en/rentersguide/vehicle_guide/generic_jeep-us-06-thumbnail.gif");
        imageURLs.push("https://www.avis.com/car-rental/images/global/en/rentersguide/vehicle_guide/dodge_grand_caravan_thumbnail.gif");
        loadAllImages();

        function loadAllImages(callback){
            for (var i = 0; i < imageURLs.length; i++) {
                var img = new Image();
                imgs.push(img);
                img.onload = function(){ 
                    imagesOK++; 
                    if (imagesOK==imageURLs.length ) {
                        animate();
                    }
                }; 
                img.src = imageURLs[i];
            }      
        }

        function animate() {
            setTimeout(function() {
                requestAnimFrame(animate);

                // get the current image
                // get the xy where the image will be drawn
                var img=imgs[imageIndex];
                var imgX=(canvas.width/2-img.width/2)*animPctComplete;
                var imgY=(canvas.height/2)-img.height/2;

                // set the current opacity
                ctx.globalAlpha=animPctComplete;

                // draw the image
                ctx.clearRect(0,0,canvas.width,canvas.height);
                ctx.drawImage(img,imgX,imgY);

                // increment the animationPctComplete for next frame
                animPctComplete+=.01;  //100/fps;

                // if the current animation is complete
                // reset the animation with the next image
                if(animPctComplete>=1.00){
                    animPctComplete=0.00;
                    imageIndex++;
                    if(imageIndex>=imgs.length){imageIndex=0;}
                }

            }, 1000 / fps);
        }


    });
