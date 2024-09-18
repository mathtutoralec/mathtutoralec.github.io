ace.define("ace/mode/cirru_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],(function(e,t,o){"use strict";var r=e("../lib/oop"),i=e("./text_highlight_rules").TextHighlightRules,n=function(){this.$rules={start:[{token:"constant.numeric",regex:/[\d\.]+/},{token:"comment.line.double-dash",regex:/--/,next:"comment"},{token:"storage.modifier",regex:/\(/},{token:"storage.modifier",regex:/,/,next:"line"},{token:"support.function",regex:/[^\(\)"\s{}\[\]]+/,next:"line"},{token:"string.quoted.double",regex:/"/,next:"string"},{token:"storage.modifier",regex:/\)/}],comment:[{token:"comment.line.double-dash",regex:/ +[^\n]+/,next:"start"}],string:[{token:"string.quoted.double",regex:/"/,next:"line"},{token:"constant.character.escape",regex:/\\/,next:"escape"},{token:"string.quoted.double",regex:/[^\\"]+/}],escape:[{token:"constant.character.escape",regex:/./,next:"string"}],line:[{token:"constant.numeric",regex:/[\d\.]+/},{token:"markup.raw",regex:/^\s*/,next:"start"},{token:"storage.modifier",regex:/\$/,next:"start"},{token:"variable.parameter",regex:/[^\(\)"\s{}\[\]]+/},{token:"storage.modifier",regex:/\(/,next:"start"},{token:"storage.modifier",regex:/\)/},{token:"markup.raw",regex:/^ */,next:"start"},{token:"string.quoted.double",regex:/"/,next:"string"}]}};r.inherits(n,i),t.CirruHighlightRules=n})),ace.define("ace/mode/folding/coffee",["require","exports","module","ace/lib/oop","ace/mode/folding/fold_mode","ace/range"],(function(e,t,o){"use strict";var r=e("../../lib/oop"),i=e("./fold_mode").FoldMode,n=e("../../range").Range,s=t.FoldMode=function(){};r.inherits(s,i),function(){this.commentBlock=function(e,t){var o=/\S/,r=e.getLine(t),i=r.search(o);if(-1!=i&&"#"==r[i]){for(var s=r.length,a=e.getLength(),g=t,c=t;++t<a;){var d=(r=e.getLine(t)).search(o);if(-1!=d){if("#"!=r[d])break;c=t}}if(c>g){var l=e.getLine(c).length;return new n(g,s,c,l)}}},this.getFoldWidgetRange=function(e,t,o){var r=this.indentationBlock(e,o);return r||((r=this.commentBlock(e,o))||void 0)},this.getFoldWidget=function(e,t,o){var r=e.getLine(o),i=r.search(/\S/),n=e.getLine(o+1),s=e.getLine(o-1),a=s.search(/\S/),g=n.search(/\S/);if(-1==i)return e.foldWidgets[o-1]=-1!=a&&a<g?"start":"","";if(-1==a){if(i==g&&"#"==r[i]&&"#"==n[i])return e.foldWidgets[o-1]="",e.foldWidgets[o+1]="","start"}else if(a==i&&"#"==r[i]&&"#"==s[i]&&-1==e.getLine(o-2).search(/\S/))return e.foldWidgets[o-1]="start",e.foldWidgets[o+1]="","";return e.foldWidgets[o-1]=-1!=a&&a<i?"start":"",i<g?"start":""}}.call(s.prototype)})),ace.define("ace/mode/cirru",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/cirru_highlight_rules","ace/mode/folding/coffee"],(function(e,t,o){"use strict";var r=e("../lib/oop"),i=e("./text").Mode,n=e("./cirru_highlight_rules").CirruHighlightRules,s=e("./folding/coffee").FoldMode,a=function(){this.HighlightRules=n,this.foldingRules=new s,this.$behaviour=this.$defaultBehaviour};r.inherits(a,i),function(){this.lineCommentStart="--",this.$id="ace/mode/cirru"}.call(a.prototype),t.Mode=a})),ace.require(["ace/mode/cirru"],(function(e){"object"==typeof module&&"object"==typeof exports&&module&&(module.exports=e)}));