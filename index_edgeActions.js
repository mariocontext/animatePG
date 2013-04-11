
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){sym.audio01=new buzz.sound("birdsong",{formats:["ogg","mp3"]});sym.audio02=new buzz.sound("cardinal-song",{formats:["ogg","mp3"]});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_body2}","touchstart mousedown",function(sym,e){var wingsObject=sym.getSymbol("wings");if(wingsObject.isPlaying()){wingsObject.stop();}
else{wingsObject.play();sym.audio01.play();}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_head2}","touchstart mousedown",function(sym,e){var eyesObject=sym.getSymbol("eyes2");if(eyesObject.isPlaying()){eyesObject.stop();}
else{eyesObject.play();sym.audio02.play();}});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'body'
(function(symbolName){})("body");
//Edge symbol end:'body'

//=========================================================

//Edge symbol: 'head'
(function(symbolName){})("head");
//Edge symbol end:'head'

//=========================================================

//Edge symbol: 'eyeball'
(function(symbolName){})("eyeball");
//Edge symbol end:'eyeball'

//=========================================================

//Edge symbol: 'pupil'
(function(symbolName){})("pupil");
//Edge symbol end:'pupil'

//=========================================================

//Edge symbol: 'glint'
(function(symbolName){})("glint");
//Edge symbol end:'glint'

//=========================================================

//Edge symbol: 'beak'
(function(symbolName){})("beak");
//Edge symbol end:'beak'

//=========================================================

//Edge symbol: 'wing-left'
(function(symbolName){})("wing-left");
//Edge symbol end:'wing-left'

//=========================================================

//Edge symbol: 'wing-right'
(function(symbolName){})("wing-right");
//Edge symbol end:'wing-right'

//=========================================================

//Edge symbol: 'left-left'
(function(symbolName){})("left-left");
//Edge symbol end:'left-left'

//=========================================================

//Edge symbol: 'left-right'
(function(symbolName){})("left-right");
//Edge symbol end:'left-right'

//=========================================================

//Edge symbol: 'small-cloud'
(function(symbolName){})("small-cloud");
//Edge symbol end:'small-cloud'

//=========================================================

//Edge symbol: 'medium-cloud'
(function(symbolName){})("medium-cloud");
//Edge symbol end:'medium-cloud'

//=========================================================

//Edge symbol: 'large-cloud'
(function(symbolName){})("large-cloud");
//Edge symbol end:'large-cloud'

//=========================================================

//Edge symbol: 'bg'
(function(symbolName){})("bg");
//Edge symbol end:'bg'

//=========================================================

//Edge symbol: 'music-note'
(function(symbolName){})("music-note");
//Edge symbol end:'music-note'

//=========================================================

//Edge symbol: 'wings'
(function(symbolName){})("wings");
//Edge symbol end:'wings'

//=========================================================

//Edge symbol: 'legs'
(function(symbolName){})("legs");
//Edge symbol end:'legs'

//=========================================================

//Edge symbol: 'eyes'
(function(symbolName){})("eyes");
//Edge symbol end:'eyes'
})(jQuery,AdobeEdge,"EDGE-1907860");