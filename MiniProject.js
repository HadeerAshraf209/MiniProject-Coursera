//set global variables
var originalImg= null;
var uploadCan = document.getElementById("canvas1");
var filterCan = document.getElementById("canvas2");
var greyImg = null;
var redImg = null;
var blueImg= null;
var rainbowImg = null;
var windowPaneImg= null;
var bluryImg= null;

//Upload an image function
function uploadImage(){
    //set a variable for uploaded file
    var file = document.getElementById("upImage");
    //create 3 new images for each filter
    originalImg= new SimpleImage(file);
    greyImg = new SimpleImage(file);
    redImg = new SimpleImage(file);
    blueImg= new SimpleImage(file);
    rainbowImg = new SimpleImage(file);
    windowPaneImg= new SimpleImage(file);
    bluryImg= new SimpleImage(file);
    //draw the image inside the canvas
    originalImg.drawTo(uploadCan);
}

//Greyscale filter function
function makeGrey(){
    //set an alert
    if (greyImg === null|| !greyImg.complete()){
        alert('Please Upload an Image!');
        return;
    }
    //setting up the filter for each pixel
    for(var pixel of greyImg.values()){
        var avg = (pixel.getRed()+pixel.getBlue()+pixel.getGreen())/3;
        //set new value for each pixel color
        pixel.setRed(avg);
        pixel.setBlue(avg);
        pixel.setGreen(avg);
    }
    //draw the image inside the filter canvas
    greyImg.drawTo(filterCan);
}

//Red filter function
function makeRed(){
    //set an alert
    if (redImg === null|| !redImg.complete()){
        alert('Please Upload an Image!');
        return;
    }
    //setting up the filter for each pixel
    for( var pixel of redImg.values()){
        var avg = (pixel.getRed()+pixel.getBlue()+pixel.getGreen())/3;
        if(avg<128){
            pixel.setRed(2*avg);
            pixel.setGreen(0);
            pixel.setBlue(0);
        } else{
            pixel.setRed(255);
            pixel.setGreen(2*avg-255);
            pixel.setBlue(2*avg-255);
        }
    }
    //draw the image inside the filter canvas
    redImg.drawTo(filterCan);   
}

//blue filter function
function makeBlue(){
    //set an alert
    if (blueImg === null|| !blueImg.complete()){
        alert('Please Upload an Image!');
        return;
    }
    //setting up the filter for each pixel
    for( var pixel of blueImg.values()){
        var avg = (pixel.getRed()+pixel.getBlue()+pixel.getGreen())/3;
        if(avg<128){
            pixel.setRed(0);
            pixel.setGreen(0);
            pixel.setBlue(2*avg);
        } else{
            pixel.setRed(2*avg-255);
            pixel.setGreen(2*avg-255);
            pixel.setBlue(255);
        }
    }
    //draw the image inside the filter canvas
    blueImg.drawTo(filterCan);  
}


//Rainbow filter function
function makeRainbow(){
        //set an alert
    if (rainbowImg === null|| !rainbowImg.complete()){
        alert('Please Upload an Image!');
        return;
    }
    for( var pixel of rainbowImg.values()){
        var avg = (pixel.getRed()+pixel.getBlue()+pixel.getGreen())/3;
        var w = rainbowImg.getWidth();
        var x = pixel.getX();
        //red strip
        if(x<= w/7){
            if(avg<=128){
                pixel.setRed(2*avg);
                pixel.setGreen(0);
                pixel.setBlue(0);
            } else{
                pixel.setRed(255);
				pixel.setGreen(avg * 2 - 255);
				pixel.setBlue(avg * 2 - 255);
            }
            
        }
        //orange strip
        if(x>=w/7 && x<=(2*w)/7){
            if(avg<=128){
                pixel.setRed(2*avg);
                pixel.setGreen(0.8*avg);
                pixel.setBlue(0);
            } else{
                pixel.setRed(255);
				pixel.setGreen(1.2*avg - 255);
				pixel.setBlue(avg * 2 - 255);
            }
            
        }
        //yellow strip
        if(x>=(2*w)/7 && x<=(3*w)/7){
            if(avg<=128){
                pixel.setRed(2*avg);
                pixel.setGreen(2*avg);
                pixel.setBlue(0);
            } else{
                pixel.setRed(255);
				pixel.setGreen(255);
				pixel.setBlue(avg * 2 - 255);
            }
        }
        //green strip
        if (x>=(3*w)/7 && x<=(4*w)/7){
            if(avg<=128){
                pixel.setRed(0);
				pixel.setGreen(2*avg);
				pixel.setBlue(0);
            } else{
                pixel.setRed(avg * 2 - 255);
				pixel.setGreen(255);
				pixel.setBlue(avg * 2 - 255);
            }
        }
        //blue strip
        if(x>=(4*w)/7 && x<=(5*w)/7){
            if(avg<=128){
                pixel.setRed(0);
				pixel.setGreen(0);
				pixel.setBlue(avg * 2);
            } else{
                pixel.setRed(avg * 2 - 255);
				pixel.setGreen(avg * 2 - 255);
				pixel.setBlue(255);
            }
        }
        //indigo strip
        if(x>=(5*w)/7 && x<=(6*w)/7){
            if(avg<=128){
                pixel.setRed(0.8 * avg);
				pixel.setGreen(0);
				pixel.setBlue(avg * 2);
            } else{
                pixel.setRed(1.2*avg-51);
				pixel.setGreen(avg * 2 - 255);
				pixel.setBlue(255);
            }
        }
        //violet strip
        if(x>=(6*w)/7 && x<=w){
            if(avg<=128){
                pixel.setRed(avg*1.6);
				pixel.setGreen(0);
				pixel.setBlue(avg * 1.6);
            } else{
                pixel.setRed(0.4*avg+153);
				pixel.setGreen(avg * 2 - 255);
				pixel.setBlue(0.4*avg + 153);
            }
        }
        if(pixel.getX>=rainbowImg.getWidth()*(6/7)){}

    }
    rainbowImg.drawTo(filterCan);
}

//Window Pane filter function
function makeWindow(){
        //set an alert
    if (rainbowImg === null|| !rainbowImg.complete()){
        alert('Please Upload an Image!');
        return;
    }
    for(var pixel of windowPaneImg.values()){
        var w = windowPaneImg.getWidth();
        var h = windowPaneImg.getHeight();
        var x = pixel.getX();
        var y = pixel.getY();
        //right strip
        if(x>=(w-20)){
            pixel.setRed(255);
            pixel.setGreen(255);
            pixel.setBlue(255);
        }
        //middle strip x-axis
        if(x<(w/2)+10 && x>(w/2)-10  ){
            pixel.setRed(255);
            pixel.setGreen(255);
            pixel.setBlue(255);
        }
        //left strip
        if(x< (w=20)){
            pixel.setRed(255);
            pixel.setGreen(255);
            pixel.setBlue(255);
        }
        //bottom strip
        if(y >= (h-20)){
            pixel.setRed(255);
            pixel.setGreen(255);
            pixel.setBlue(255);
        }
        //middle strip y-axis
        if(y<(h/2)+10 && y>(h/2)-10){
            pixel.setRed(255);
            pixel.setGreen(255);
            pixel.setBlue(255);
        }
        //top strrip 
        if(y< (h=20)){
            pixel.setRed(255);
            pixel.setGreen(255);
            pixel.setBlue(255);
        }
    }
    windowPaneImg.drawTo(filterCan);
}

//blury filter function 
function makeBlury(){
        //set an alert
    if (bluryImg === null|| !bluryImg.complete()){
        alert('Please Upload an Image!');
        return;
    }
    //choose a random pixel
    for( var pixel of bluryImg.values()){
        var x=pixel.getX();
        var y=pixel.getY();
        var num=Math.random();
        if (num<0.5){
            bluryImg.setPixel(x,y,pixel);
        } else{
            bluryImg.setPixel(x,y,getRandomPixel(x,y,20));
        }
    }bluryImg.drawTo(filterCan);
}

//function in case the number less than 0.5
function getRandomPixel(x, y, distance){
    var randomX = x + (Math.random() * distance);
    var randomY = y + (Math.random() * distance);
    if(randomX < 0){
        randomX = 0;
    }
    //to make sure the choosen pixel withing the image height and width
    if(randomX > bluryImg.getWidth()){
        randomX = bluryImg.getWidth() - 1;
    }
    if(randomY > bluryImg.getHeight()){
        randomY = bluryImg.getHeight() - 1;
    }

    if(randomY < 0){
        randomY = 0;
    }
    return bluryImg.getPixel(randomX, randomY);
}


//reset button function
function resetImage(){
    doClear(uploadCan);
    doClear(filterCan);
}
function doClear(){
    var context1 = uploadCan.getContext("2d");
    var context2 = filterCan.getContext("2d");
    context1.clearRect(0,0, uploadCan.width,uploadCan.height);
    context2.clearRect(0,0, filterCan.width,filterCan.height);
}