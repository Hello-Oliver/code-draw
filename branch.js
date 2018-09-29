var angle = 0;
var depth=0;
var proportion=0;
var depth_slider;
var proportion_slider;
var slider;

function setup() {
    createCanvas(640, 480);
    slider = createSlider(0, TWO_PI, PI / 4, 0.01);
    depth_slider=createSlider(5, 200, 180, 0.01);
    proportion_slider=createSlider(0.0, 0.7, 0.67, 0.01);

}

function draw() {
    background(51);
    //滑块控制展开角度
    angle = slider.value();
    //滑块控制树的深度
    depth=depth_slider.value()
    proportion=proportion_slider.value()
    stroke(255);
    translate(320, height);
    branch(depth,proportion);

}

function branch(len,proportion) {
    //起始线坐标及长度
    line(0, 0, 0, -len);
    translate(0, -len);
    //控制最小4个分叉点
    if (len > 4) {
        //递归画出右子树
        push();
        rotate(angle);
        //子树枝与父树枝的长度比例
        branch(len * proportion,proportion);
        pop();
        //递归画出左子树
        push();
        rotate(-angle);
        branch(len * proportion,proportion);
        pop();
    }

    //line(0, 0, 0, -len * 0.67);
}