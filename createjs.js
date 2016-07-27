(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: []
};



lib.ssMetadata = [];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.ShipGraphic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0055A7").s().p("AgOCWIAAkqIAcAAIAAEqg");
	this.shape.setTransform(0,4.8,1.333,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003E7B").s().p("AghAgIAAgwQAdgeAnAeIAAAwg");
	this.shape_1.setTransform(0,-15.9,0.857,0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("Ag1AUIAAgnIBsAAIAAAng");
	this.shape_2.setTransform(0,24.8,1.091,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(51,51,51,0.969)").ss(1,1,1).p("AhKAAICViVIAAErIhjAAg");
	this.shape_3.setTransform(-14,8.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#003E7B").s().p("AgXCVIgziVICViUIAAEpg");
	this.shape_4.setTransform(-14,8.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(51,51,51,0.969)").ss(1,1,1).p("AhPiVICfCVIgyCWIhtAAg");
	this.shape_5.setTransform(14.5,8.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#003E7B").s().p("AhPCVIAAkpICfCUIgzCVg");
	this.shape_6.setTransform(14.5,8.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("rgba(51,51,51,0.969)").ss(1,1,1).p("AA6jCQACAAgBDmQAABzgBBxQAAgEh0AEQACAAgCnKQAAAEAigmQAbgfACgEQAvBFAGAAg");
	this.shape_7.setTransform(0,-0.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0066CC").s().p("Ag6EIQACAAgCnKQAAAEAigmQAbgfACgEQAvBFAGAAQACAAgBDmIgBDkQAAgEh0AEg");
	this.shape_8.setTransform(0,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.5,-27.7,46,55);


(lib.Ship = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{rest:0,boostleft:5,boostright:10,charging:15,explode:20,damage:30,speed:50});

	// timeline functions:
	this.frame_4 = function() {
		this.gotoAndStop("rest");
	}
	this.frame_9 = function() {
		this.gotoAndStop("rest");
	}
	this.frame_14 = function() {
		this.gotoAndStop("rest");
	}
	this.frame_19 = function() {
		this.gotoAndStop("rest");
	}
	this.frame_29 = function() {
		this.gotoAndStop("rest");
	}
	this.frame_49 = function() {
		this.gotoAndStop("rest");
	}
	this.frame_84 = function() {
		this.gotoAndStop("rest");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(10).call(this.frame_29).wait(20).call(this.frame_49).wait(35).call(this.frame_84).wait(1));

	// Body
	this.instance = new lib.ShipGraphic("synched",0);
	this.instance.setTransform(0,-0.2,1,1,0,0,0,0,-0.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(51,51,51,0.969)").ss(1,1,1).p("AhFAPICLifIAAEhIhjAAg");
	this.shape.setTransform(-13,8.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003E7B").s().p("AgcCRIgpiDICLidIAAEgg");
	this.shape_1.setTransform(-13,8.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(51,51,51,0.969)").ss(1,1,1).p("AhFiVICLCpIgoCCIhjAAg");
	this.shape_2.setTransform(14.9,7.2,1,0.714,15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#003E7B").s().p("AhECWIAAkrICJCoIgnCDg");
	this.shape_3.setTransform(14.9,7.2,1,0.714,15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(51,51,51,0.969)").ss(1,1,1).p("AgLA3QgbhggniSQABAEAVgtQASglAAgEQA8A4AEgCQADgBA7DeQADALADAJAhZEOQgCgBgDgBQABABA2jJABDBhQgYBUgXBS");
	this.shape_4.setTransform(-0.6,3.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0055A7").s().p("AgyCgIAliKIAkAKIgjCKgAgaifIAlgKIAoCXIgmALg");
	this.shape_5.setTransform(0.2,9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#003E7B").s().p("AghgHQATgfAlAQIALAkIg4APg");
	this.shape_6.setTransform(-2,-12.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("Ag5AFIABgFIAJggIBkAbIAEABIgKAlg");
	this.shape_7.setTransform(-3.9,30.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0066CC").s().p("AhdEMQABABA2jJIAhAJIgmCKIAnAKIAjiKIAkAKIgvCmIhkgbIgJAiIgEgCgAhNi7QABAEAVgtQASglAAgEQA8A4AEgCQADgBA7DeIAGAUIgkAJIgpiVIglAKIAoCWIggAJIhCjygAgvipIALAmIA4gPIgLgmQgLgFgLAAQgVAAgNAUg");
	this.shape_8.setTransform(-0.6,3.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("rgba(51,51,51,0.969)").ss(1,1,1).p("Ag6AOQgBhkgBiXQAAAEAhglQAbggAAgEQAsBFAFAAQADAAgBDoQAAAIAAALAhLEzQgCgBgDgBQABABA3jJABRCGQgYBUgXBS");
	this.shape_9.setTransform(0.1,3.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0055A7").s().p("AgkDAIAkiKIAlAKIglCKgAgggsIAAieIAmABIAACdg");
	this.shape_10.setTransform(0.9,9.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("Ag4AFIABgFIAJggIBjAbIAEABIgKAlg");
	this.shape_11.setTransform(-1.8,34.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#003E7B").s().p("AgdgMQAagaAgAZIABAmIg6ABg");
	this.shape_12.setTransform(-0.5,-16.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0066CC").s().p("AhQExQABABA2jJIAgAJIgjCKIAkAKIAliKIAjAKIguCmIhjgbIgJAiIgGgCgAg8jtQABAEAgglQAaggABgEQArBFAGAAQADAAgBDoIAAATIglAAIAAibIgmgBIAACcIgiAAIgCj7gAgjjTIABAoIA6gBIAAgoQgSgMgMAAQgQAAgNANg");
	this.shape_13.setTransform(0.1,3.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("rgba(51,51,51,0.969)").ss(1,1,1).p("AhXgGQAZhiAmiSQAAADAngbQAigYACgDQAZBOAFABQADABg9DeQgDAKgCAKAhDEuQgCAAgDgBQABAAA2jIABYCBQgXBUgXBS");
	this.shape_14.setTransform(-0.7,4.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0055A7").s().p("AgTDCIAjiLIAmALIglCKgAg1gzIAoiYIAlALIgnCYg");
	this.shape_15.setTransform(-0.8,9.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#003E7B").s().p("AggAOIAKgkQAcgSAbAhIgKAlg");
	this.shape_16.setTransform(1,-15.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0066CC").s().p("AhIEtQABAAA2jIIAgAIIgjCKIAkALIAliKIAjAJIguCmIhjgbIgJAiIgGgBgAgQALIAniWIglgKIgpCWIghgHIBAj0QgBADAogbQAhgYADgDQAZBOAEABQADABg8DeIgGAUgAgGjbIgKAmIA4AQIAKgnQgSgVgTAAQgKAAgJAGg");
	this.shape_17.setTransform(-0.7,4.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("rgba(51,51,51,0.969)").ss(1,1,1).p("AhzgFQAZhjAniSQgBAEApgcQAggXADgEQAZBPAEABQADABg7DdQgCAKgDAKAgnEuIgEgBQAAgBgBAAQABABAliKQAGgdAJgiAB0CBQgXBUgXBS");
	this.shape_18.setTransform(2.6,-0.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0055A7").s().p("AAHDFIAJgiIAYAHIgJAigAgFDCIAjiLIAKAEQglCJgBAAIABAAgAgngzIAniYIAeAIIgbBoIAHACIgLAxg");
	this.shape_19.setTransform(-2.2,9.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("Ag4AFIAKglIBnAcIgKAlg");
	this.shape_20.setTransform(-1.8,34.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#003E7B").s().p("AggAOIAJgkQAdgSAbAhIgKAlg");
	this.shape_21.setTransform(1.5,-20.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0066CC").s().p("AgrEtIgBgBQABABAliKIAPg/IAhAJIglCKIAnAKIAliKIAjAKIguCmIhMgVIgYgGIgJAigAgkAOIgHgCIAbhmIANgwIgngLIgoCWIghgGIBAj1QgBAEApgcQAggXADgEQAYBPAFABQADABg7DdIgFAUgAgijbIgJAnIA3APIAKgmQgRgWgRAAQgLAAgLAGg");
	this.shape_22.setTransform(2.6,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3,p:{scaleY:0.714,rotation:15,x:14.9,y:7.2}},{t:this.shape_2,p:{scaleY:0.714,rotation:15,x:14.9,y:7.2}},{t:this.shape_1,p:{x:-13,y:8.5,rotation:0}},{t:this.shape,p:{x:-13,y:8.5,rotation:0}}]},20).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_3,p:{scaleY:0.726,rotation:-15,x:11,y:5.2}},{t:this.shape_2,p:{scaleY:0.726,rotation:-15,x:11,y:5.2}},{t:this.shape_1,p:{x:-20,y:14.5,rotation:0}},{t:this.shape,p:{x:-20,y:14.5,rotation:0}}]},2).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_11},{t:this.shape_15},{t:this.shape_14},{t:this.shape_3,p:{scaleY:0.726,rotation:-15,x:25,y:7.2}},{t:this.shape_2,p:{scaleY:0.726,rotation:-15,x:25,y:7.2}},{t:this.shape_1,p:{x:-25,y:14.8,rotation:0}},{t:this.shape,p:{x:-25,y:14.8,rotation:0}}]},2).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_3,p:{scaleY:0.726,rotation:-15,x:24,y:-6.8}},{t:this.shape_2,p:{scaleY:0.726,rotation:-15,x:24,y:-6.8}},{t:this.shape_1,p:{x:-25,y:14.8,rotation:-15}},{t:this.shape,p:{x:-25,y:14.8,rotation:-15}}]},2).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_11},{t:this.shape_15},{t:this.shape_14},{t:this.shape_3,p:{scaleY:0.726,rotation:-15,x:25,y:7.2}},{t:this.shape_2,p:{scaleY:0.726,rotation:-15,x:25,y:7.2}},{t:this.shape_1,p:{x:-25,y:14.8,rotation:0}},{t:this.shape,p:{x:-25,y:14.8,rotation:0}}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},20).wait(10).to({_off:false,alpha:0.289},0).wait(2).to({alpha:1},0).wait(2).to({alpha:0.289},0).wait(2).to({alpha:1},0).wait(2).to({alpha:0.289},0).wait(2).to({alpha:1},0).wait(2).to({alpha:0.289},0).wait(2).to({alpha:1},0).wait(2).to({alpha:0.289},0).wait(2).to({alpha:1},0).wait(2).to({startPosition:0},0).wait(1).to({regX:0.5,x:0.5,y:-1},0).wait(1).to({y:-1.9},0).wait(1).to({y:-2.8},0).wait(1).to({y:-3.7},0).wait(1).to({y:-4.6},0).wait(1).to({y:-5.5},0).wait(1).to({y:-6.4},0).wait(1).to({y:-7.3},0).wait(1).to({y:-8.2},0).wait(1).to({y:-7.8},0).wait(1).to({y:-7.5},0).wait(1).to({y:-7.2},0).wait(1).to({y:-6.9},0).wait(1).to({y:-6.6},0).wait(1).to({y:-6.2},0).wait(1).to({y:-5.9},0).wait(1).to({y:-5.6},0).wait(1).to({y:-5.3},0).wait(1).to({y:-5},0).wait(1).to({y:-4.6},0).wait(1).to({y:-4.3},0).wait(1).to({y:-4},0).wait(1).to({y:-3.7},0).wait(1).to({y:-3.4},0).wait(1).to({y:-3},0).wait(1).to({y:-2.7},0).wait(1).to({y:-2.4},0).wait(1).to({y:-2.1},0).wait(1).to({y:-1.8},0).wait(1).to({y:-1.4},0).wait(1).to({y:-1.1},0).wait(1).to({y:-0.8},0).wait(1).to({y:-0.5},0).wait(1).to({y:-0.2},0).wait(1));

	// Effects
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFCC00").s().p("AiBAUIAehiIDlCdg");
	this.shape_23.setTransform(28.5,17.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFE8C4").s().p("AgiAjQgOgPAAgUQAAgTAOgPQAPgPATAAQAUAAAOAPQAPAPABATQgBAUgPAPQgOAPgUgBQgTABgPgPg");
	this.shape_24.setTransform(0,26);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CC3300").s().p("AhWAiQAEgfAXgVQAcgbAlAAQAoAAAbAbQAcAagcAaQgNAMgnAAQgnAAhEgMg");
	this.shape_25.setTransform(14.8,5.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#CC3300").s().p("AgtAuQgSgTgBgbQABgaASgSQAUgUAZABQAagBATAUQAUASAAAaQAAAbgUATQgTASgaAAQgZAAgUgSg");
	this.shape_26.setTransform(6.5,18);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#CC3300").s().p("AgpAqQgRgRgBgZQABgYARgRQARgRAYgBQAZABARARQASARAAAYQAAAZgSARQgRASgZAAQgYAAgRgSg");
	this.shape_27.setTransform(19,19);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#CC3300").s().p("AgfAfQgNgNAAgSQAAgRANgOQAOgMARAAQASAAANAMQANAOAAARQAAASgNANQgNAOgSAAQgRAAgOgOg");
	this.shape_28.setTransform(-13.5,19.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#CC3300").s().p("AgwAxQgVgVAAgcQAAgcAVgUQAUgVAcABQAcgBAVAVQAUAUABAcQgBAcgUAVQgVAUgcAAQgcAAgUgUg");
	this.shape_29.setTransform(-2,5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFF33").s().p("Ag3A4QgXgYAAggQAAggAXgXQAXgYAgABQAggBAYAYQAXAXAAAgQAAAggXAYQgYAXggABQgggBgXgXg");
	this.shape_30.setTransform(13,-2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFF33").s().p("AgsAtQgUgSABgbQgBgaAUgSQASgUAaABQAagBAUAUQASASABAaQgBAbgSASQgUAUgagBQgaABgSgUg");
	this.shape_31.setTransform(-6.5,22.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFF33").s().p("AhFBGQgegdAAgpQAAgoAegeQAdgcAogBQApABAdAcQAeAeAAAoQAAApgeAdQgdAegpgBQgoABgdgeg");
	this.shape_32.setTransform(5,18);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFF33").s().p("AgsAtQgUgTABgaQgBgZAUgUQASgSAagBQAaABAUASQASAUABAZQgBAagSATQgUAUgaAAQgaAAgSgUg");
	this.shape_33.setTransform(11.5,16.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFF33").s().p("Ag6A7QgagZAAgiQAAghAagZQAZgaAhAAQAiAAAZAaQAaAZAAAhQAAAigaAZQgZAagiAAQghAAgZgag");
	this.shape_34.setTransform(-9.5,8.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF9933").s().p("AhwBxQgugvgBhCQABhBAugvQAvguBBgBQBCABAvAuQAuAvABBBQgBBCguAvQgvAuhCABQhBgBgvgug");
	this.shape_35.setTransform(-3,10);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF9933").s().p("AhUBUQgjgjAAgxQAAgwAjgkQAkgiAwgBQAxABAjAiQAkAkAAAwQAAAxgkAjQgjAkgxAAQgwAAgkgkg");
	this.shape_36.setTransform(12,6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF9933").s().p("Ag6A8QgagZAAgjQAAgiAagYQAZgZAhAAQAiAAAZAZQAaAYAAAiQAAAjgaAZQgZAZgiAAQghAAgZgZg");
	this.shape_37.setTransform(1,25.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FF9933").s().p("AgmAmQgPgQgBgWQABgVAPgRQARgPAVAAQAWAAARAPQAPARAAAVQAAAWgPAQQgRAQgWABQgVgBgRgQg");
	this.shape_38.setTransform(-10.5,-6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF9933").s().p("Ag7A7QgZgYAAgjQAAgiAZgZQAZgZAiAAQAiAAAaAZQAYAZAAAiQAAAjgYAYQgaAZgiAAQgiAAgZgZg");
	this.shape_39.setTransform(9.5,19);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FF9933").s().p("AhQBQQgighAAgvQAAguAigiQAigiAuABQAvgBAhAiQAjAiAAAuQAAAvgjAhQghAjgvgBQguABgigjg");
	this.shape_40.setTransform(-2.5,7.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#CC3300").s().p("AhCBCQgbgbAAgnQAAgmAbgcQAcgbAmgBQAnABAcAbQAcAcAAAmQAAAngcAbQgcAcgnAAQgmAAgcgcg");
	this.shape_41.setTransform(15.5,10.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FF9933").s().p("AglAnQgQgQgBgXQABgVAQgRQAPgQAWAAQAXAAAPAQQARARgBAVQABAXgRAQQgPAQgXAAQgWAAgPgQg");
	this.shape_42.setTransform(-21.5,-0.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFF33").s().p("Ag/AZQgBg/AUgTQASgTAaAAQAaAAAUATQASATABAbQgBAZgSATQgUATgaADQgaACgSAQQgEAEgDAAQgMAAAAg0g");
	this.shape_43.setTransform(-6.5,23.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FF9933").s().p("AhLAvQgjgjAAgvQAAgZAJgWQASAFAgACQB2AJAeAoQAfAmgkAjQgjAkgxAAQgwAAgjgkg");
	this.shape_44.setTransform(21.2,8.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#CC3300").s().p("AgfBqQgMgtAAg9QAAg9AMgsQAOgrARgBQASABANArQAOAsAAA9QAAA9gOAtQgNArgSAAQgRAAgOgrg");
	this.shape_45.setTransform(0,16,1.111,1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#CC3300").s().p("AghBqQgOgsAAg+QAAg9AOgsQAPgsASAAQATAAAPAsQAOAsAAA9QAAA+gOAsQgPAsgTAAQgSAAgPgsg");
	this.shape_46.setTransform(0,16.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#CC3300").s().p("AghBqQgNgtAAg9QAAg9ANgsQAPgrASgBQATABAOArQAOAsAAA9QAAA9gOAtQgOArgTAAQgSAAgPgrg");
	this.shape_47.setTransform(0,16.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#CC3300").s().p("AggBqQgNgsAAg+QAAg9ANgsQAPgsARAAQASAAAOAsQAOAsAAA9QAAA+gOAsQgOAsgSAAQgRAAgPgsg");
	this.shape_48.setTransform(0,16.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#CC3300").s().p("AgfBqQgNgtAAg9QAAg9ANgsQAOgrARgBQASABAOArQANAsAAA9QAAA9gNAtQgOArgSAAQgRAAgOgrg");
	this.shape_49.setTransform(0,16.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#CC3300").s().p("AgeBqQgNgsAAg+QAAg9ANgsQANgsARAAQASAAAMAsQAOAsAAA9QAAA+gOAsQgMAsgSAAQgRAAgNgsg");
	this.shape_50.setTransform(0,17.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#CC3300").s().p("AgdBqQgNgtAAg9QAAg9ANgsQANgrAQgBQARABANArQANAsAAA9QAAA9gNAtQgNArgRAAQgQAAgNgrg");
	this.shape_51.setTransform(0,17.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#CC3300").s().p("AgcBqQgNgsAAg+QAAg9ANgsQAMgsAQAAQARAAAMAsQANAsAAA9QAAA+gNAsQgMAsgRAAQgQAAgMgsg");
	this.shape_52.setTransform(0,17.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#CC3300").s().p("AgcBqQgMgtAAg9QAAg9AMgsQANgrAPgBQAQABAMArQANAsAAA9QAAA9gNAtQgMArgQAAQgPAAgNgrg");
	this.shape_53.setTransform(0,17.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#CC3300").s().p("AgbBqQgMgsAAg+QAAg9AMgsQAMgsAPAAQAQAAAMAsQAMAsAAA9QAAA+gMAsQgMAsgQAAQgPAAgMgsg");
	this.shape_54.setTransform(0,18);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#CC3300").s().p("AgbBqQgNgsAAg+QAAg9ANgsQAMgsAPAAQAQAAAMAsQANAsAAA9QAAA+gNAsQgMAsgQAAQgPAAgMgsg");
	this.shape_55.setTransform(0,18);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#CC3300").s().p("AgcBqQgMgsAAg+QAAg9AMgsQANgsAPAAQAQAAAMAsQANAsAAA9QAAA+gNAsQgMAsgQAAQgPAAgNgsg");
	this.shape_56.setTransform(0,18);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#CC3300").s().p("AgdBqQgNgsAAg+QAAg9ANgsQANgsAQAAQARAAAMAsQANAsABA9QgBA+gNAsQgMAsgRAAQgQAAgNgsg");
	this.shape_57.setTransform(0,18);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#CC3300").s().p("AgdBqQgNgsAAg+QAAg9ANgsQANgsAQAAQARAAANAsQANAsAAA9QAAA+gNAsQgNAsgRAAQgQAAgNgsg");
	this.shape_58.setTransform(0,18);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#CC3300").s().p("AgeBqQgNgsAAg+QAAg9ANgsQAOgsAQAAQARAAANAsQANAsABA9QgBA+gNAsQgNAsgRAAQgQAAgOgsg");
	this.shape_59.setTransform(0,18);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#CC3300").s().p("AgfBqQgNgsAAg+QAAg9ANgsQAOgsARAAQASAAANAsQANAsABA9QgBA+gNAsQgNAsgSAAQgRAAgOgsg");
	this.shape_60.setTransform(0,18);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#CC3300").s().p("AgfBqQgNgsAAg+QAAg9ANgsQAOgsARAAQASAAAOAsQANAsAAA9QAAA+gNAsQgOAsgSAAQgRAAgOgsg");
	this.shape_61.setTransform(0,18);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#CC3300").s().p("AgfBqQgNgsAAg+QAAg9ANgsQAOgsARAAQASAAAOAsQAOAsgBA9QABA+gOAsQgOAsgSAAQgRAAgOgsg");
	this.shape_62.setTransform(0,18);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#CC3300").s().p("AggBqQgNgsAAg+QAAg9ANgsQAPgsARAAQASAAAPAsQAOAsgBA9QABA+gOAsQgPAsgSAAQgRAAgPgsg");
	this.shape_63.setTransform(0,18);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#CC3300").s().p("AggBqQgNgsAAg+QAAg9ANgsQAOgsASAAQATAAAOAsQAOAsgBA9QABA+gOAsQgOAsgTAAQgSAAgOgsg");
	this.shape_64.setTransform(0,18);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#CC3300").s().p("AghBqQgNgsAAg+QAAg9ANgsQAPgsASAAQATAAAOAsQAOAsAAA9QAAA+gOAsQgOAsgTAAQgSAAgPgsg");
	this.shape_65.setTransform(0,18);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#CC3300").s().p("AgiBqQgNgsAAg+QAAg9ANgsQAQgsASAAQATAAAPAsQAOAsAAA9QAAA+gOAsQgPAsgTAAQgSAAgQgsg");
	this.shape_66.setTransform(0,18);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#CC3300").s().p("AgiBqQgOgsAAg+QAAg9AOgsQAPgsATAAQAUAAAOAsQAPAsAAA9QAAA+gPAsQgOAsgUAAQgTAAgPgsg");
	this.shape_67.setTransform(0,18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_23,p:{scaleX:1,skewY:0,x:28.5,y:17.5}}]},5).to({state:[{t:this.shape_23,p:{scaleX:1.115,skewY:180,x:-28.2,y:18}}]},5).to({state:[{t:this.shape_24}]},5).to({state:[{t:this.shape_40},{t:this.shape_39,p:{x:9.5,y:19}},{t:this.shape_38},{t:this.shape_37,p:{x:1,y:25.5}},{t:this.shape_36,p:{x:12,y:6}},{t:this.shape_35,p:{x:-3,y:10}},{t:this.shape_34,p:{x:-9.5,y:8.5}},{t:this.shape_33},{t:this.shape_32,p:{x:5,y:18}},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},5).to({state:[{t:this.shape_40},{t:this.shape_39,p:{x:21.5,y:29.5}},{t:this.shape_42},{t:this.shape_37,p:{x:-9.5,y:33.5}},{t:this.shape_36,p:{x:22,y:5}},{t:this.shape_35,p:{x:-8,y:1}},{t:this.shape_34,p:{x:-9.5,y:8.5}},{t:this.shape_33},{t:this.shape_32,p:{x:4,y:28}},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_41,p:{x:15.5,y:10.5}}]},2).to({state:[{t:this.shape_40},{t:this.shape_39,p:{x:21.5,y:29.5}},{t:this.shape_42},{t:this.shape_37,p:{x:-9.5,y:22}},{t:this.shape_44},{t:this.shape_35,p:{x:-6,y:6}},{t:this.shape_34,p:{x:-9.5,y:8.5}},{t:this.shape_33},{t:this.shape_32,p:{x:4,y:28}},{t:this.shape_43},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_41,p:{x:7.5,y:15}}]},2).to({state:[{t:this.shape_40},{t:this.shape_39,p:{x:21.5,y:29.5}},{t:this.shape_42},{t:this.shape_37,p:{x:-9.5,y:33.5}},{t:this.shape_36,p:{x:22,y:5}},{t:this.shape_35,p:{x:-8,y:1}},{t:this.shape_34,p:{x:-9.5,y:8.5}},{t:this.shape_33},{t:this.shape_32,p:{x:4,y:28}},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_41,p:{x:15.5,y:10.5}}]},2).to({state:[{t:this.shape_40},{t:this.shape_39,p:{x:14,y:39.5}},{t:this.shape_42},{t:this.shape_37,p:{x:-18,y:33.5}},{t:this.shape_36,p:{x:22,y:5}},{t:this.shape_35,p:{x:-18,y:10}},{t:this.shape_34,p:{x:-16.5,y:16}},{t:this.shape_33},{t:this.shape_32,p:{x:12,y:24}},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_41,p:{x:15.5,y:10.5}}]},2).to({state:[]},2).to({state:[{t:this.shape_45,p:{scaleX:1.111,y:16}}]},20).to({state:[{t:this.shape_46,p:{y:16.2}}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48,p:{y:16.7}}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50,p:{y:17.1}}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52,p:{y:17.6}}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_45,p:{scaleX:0.889,y:18}}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_52,p:{y:18}}]},1).to({state:[{t:this.shape_52,p:{y:18}}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_50,p:{y:18}}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_48,p:{y:18}}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_46,p:{y:18}}]},1).to({state:[{t:this.shape_46,p:{y:18}}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_45,p:{scaleX:1.111,y:18}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.5,-27.7,46,55);


// stage content:



(lib.blockly = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var ship,game,w,h,c;
		
		function init(){
			c = createjs;
			w = stage.canvas.width;
			h = stage.canvas.height;
			game = new c.Container();
			stage.addChild(game);
			buildship();
		}
		
		function buildship(){
			ship = new lib.Ship();
			ship.x = 100;
			ship.y = 100;
			game.addChild(ship);
		}
		
		window.moveShip = (function(){
			ship.x += 10;
		})
		
		init();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("AzbLtIAA3ZIb2AAIAANuILBAAIAAJrg");
	this.shape.setTransform(451.5,337);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(602,462.1,249,150);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;