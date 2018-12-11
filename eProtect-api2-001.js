/*
 * Copyright © 2017 Vantiv. ALL RIGHTS RESERVED.
 * eProtect Java Script API Version: 1.4
 * Includes eProtect-api2.js
 * http://www.vantiv.com/
 */
var VantiveProtectPpStatsReporter=function(){var b=0;
var c=3;var a=0;return{reportMethodInvocation:function(e){b++;if(b>c){return}e=encodeURIComponent(e);var d=this.getUriEncodedStack(new Error());
var f="https://request.eprotect.sitenamehere.com";var g="errorHandler=PUBLIC_API_CALL&errorStack="+d+"&errorMessage="+e;
setTimeout(function(){try{jQuery.getJSON(f+"/eProtect/ppstats?"+g+"&jsoncallback=?",function(i){})}catch(h){}},0)},report3rdPartyError:function(d){this.reportError(d,"3RD_PARTY_ERROR")
},reportIframeClientError:function(d){this.reportError(d,"CLIENT_ERROR")},reportError:function(h,d){a++;if(a>c){return}var f=encodeURIComponent(h);
f=this.removeNonStandardCharacters(f);var e="https://request.eprotect.sitenamehere.com";var i="errorHandler="+d;var g=this.getUriEncodedStack(h);
f+=encodeURIComponent(" ")+g;if(f.length>3000){f=f.substr(0,3000)}i+="&errorStack="+f;setTimeout(function(){try{jQuery.getJSON(e+"/eProtect/ppstats?"+i+"&jsoncallback=?",function(k){})
}catch(j){}},0)},removeNonStandardCharacters:function(e){var d=decodeURIComponent(e);d=d.replace(/(\r\n|\n|\r)/g," ");return encodeURIComponent(d)
},executeActionAndReportError:function(f){try{f()}catch(e){try{this.reportIframeClientError(e)}catch(d){}throw e}},getUriEncodedStack:function(f){var d="";
if(f.stack){d=f.stack;if(d.length>2000){d=d.substr(0,2000)}try{var g=encodeURIComponent(d);g=this.removeNonStandardCharacters(d);
d=g}catch(e){}}return d}}};var myVantivEProtectReporterForPpStats=new VantiveProtectPpStatsReporter();var eProtect=function(){var b={modulus:"bc637dd74ba76507dad5af1c7ad6f97dbef5298c3b9f74caea7301347db7b4a8c37f26491863100667246fd45071f3346bf62239f9b117d06fb67861b66ad0d158beeddd2f6f28be93d846f4c8f9ba1bd7e8f186f36cab0e432f22b3d732c221a9ff00a9bfacb88b24503e2695fd7237835d4936477b21289478906a49b164f52503c20eb29f11fcbda2af94deb9a0bfde5a4589276897436315c5d664d60bf10650164f509283aed39747ad5d6cb2bbe54e1b42306e5db37dfd42dcbfcc689e0ddfe3bc9cb22ae7018e5a4a1ff39813584ac7bd6d6d65ca763f0a672da454081ea20e8b1d403316d80b9353ba396bea8962b1a7d2f775c76612d857c1f7594f",exponent:"10001",keyId:"1",visaCheckoutApiKey:"UHTJ5A1SMG3PC81Y1CJT13x6XM0ekIIdixNrIMcPe8KI4GgNg"};
var a={primaryUrl:"https://request.eprotect.sitenamehere.com",secondaryUrl:null,primaryTimeout:5000};return{getUrl:function(){return a.primaryUrl
},sendToEprotect:function(aM,ap,aj,ah,M,ar){function a7(bm){var bf=0;var bd;var bq;var bp;var bk;var bl;try{if(window.crypto&&window.crypto.getRandomValues){bd=new Int8Array(bm.length);
window.crypto.getRandomValues(bd);for(bq=0;bq<bd.length;++bq){while(bd[bq]==0){bk=new Int8Array(1);window.crypto.getRandomValues(bk);
bd[bq]=bk[0]}bm[bf++]=bd[bq]}}else{if(window.msCrypto&&window.msCrypto.getRandomValues){bd=new Int8Array(bm.length);window.msCrypto.getRandomValues(bd);
for(bq=0;bq<bd.length;++bq){while(bd[bq]==0){bk=new Int8Array(1);window.msCrypto.getRandomValues(bk);bd[bq]=bk[0]}bm[bf++]=bd[bq]
}}else{bp=sjcl.random.randomWords((bm.length/4)+1,0);var bi=0;while(bf<bp.length){var bg=bp[bf++];var bn=bg>>0&255;var bo=bg>>8&255;
var bc=bg>>16&255;var bh=bg>>24&255;while(bn==0||bo==0||bc==0||bh==0){bl=new Array();bl=sjcl.random.randomWords(1,0);bg=bl[0];
bn=bg>>0&255;bo=bg>>8&255;bc=bg>>16&255;bh=bg>>24&255}if(bi<bm.length){bm[bi++]=bn}if(bi<bm.length){bm[bi++]=bo}if(bi<bm.length){bm[bi++]=bc
}if(bi<bm.length){bm[bi++]=bh}}}}}catch(bj){for(bq=0;bq<bm.length;++bq){var be=Math.floor((Math.random()*255)+1);while(be==0){be=Math.floor((Math.random()*255)+1)
}bm[bf++]=be}}return 1}
/*
			 * Copyright (c) 2003-2005  Tom Wu
			 * All Rights Reserved.
			 *
			 * Permission is hereby granted, free of charge, to any person obtaining
			 * a copy of this software and associated documentation files (the
			 * "Software"), to deal in the Software without restriction, including
			 * without limitation the rights to use, copy, modify, merge, publish,
			 * distribute, sublicense, and/or sell copies of the Software, and to
			 * permit persons to whom the Software is furnished to do so, subject to
			 * the following conditions:
			 *
			 * The above copyright notice and this permission notice shall be
			 * included in all copies or substantial portions of the Software.
			 *
			 * THE SOFTWARE IS PROVIDED "AS-IS" AND WITHOUT WARRANTY OF ANY KIND,
			 * EXPRESS, IMPLIED OR OTHERWISE, INCLUDING WITHOUT LIMITATION, ANY
			 * WARRANTY OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.
			 *
			 * IN NO EVENT SHALL TOM WU BE LIABLE FOR ANY SPECIAL, INCIDENTAL,
			 * INDIRECT OR CONSEQUENTIAL DAMAGES OF ANY KIND, OR ANY DAMAGES WHATSOEVER
			 * RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER OR NOT ADVISED OF
			 * THE POSSIBILITY OF DAMAGE, AND ON ANY THEORY OF LIABILITY, ARISING OUT
			 * OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
			 *
			 * In addition, the following condition applies:
			 *
			 * All redistributions must retain an intact copy of this copyright notice
			 * and disclaimer.
			 */
function h(bd,bc){return new a1(bd,bc)
}function aP(be,bf){var bc="";var bd=0;while(bd+bf<be.length){bc+=be.substring(bd,bd+bf)+"\n";bd+=bf}return bc+be.substring(bd,be.length)
}function x(bc){if(bc<16){return"0"+bc.toString(16)}else{return bc.toString(16)}}function aL(bf,bi){if(bi<bf.length+11){throw"Message too long for RSA"
}var bh=new Array();var be=bf.length-1;while(be>=0&&bi>0){var bg=bf.charCodeAt(be--);if(bg<128){bh[--bi]=bg}else{if((bg>127)&&(bg<2048)){bh[--bi]=(bg&63)|128;
bh[--bi]=(bg>>6)|192}else{bh[--bi]=(bg&63)|128;bh[--bi]=((bg>>6)&63)|128;bh[--bi]=(bg>>12)|224}}}bh[--bi]=0;var bd=new aF();
var bc=new Array(bi-2);bd.nextBytes(bc);be=0;while(bi>2){bh[--bi]=bc[be];be++}bh[--bi]=2;bh[--bi]=0;return new a1(bh)}function X(){this.n=null;
this.e=0;this.d=null;this.p=null;this.q=null;this.dmp1=null;this.dmq1=null;this.coeff=null}function s(bd,bc){if(bd!=null&&bc!=null&&bd.length>0&&bc.length>0){this.n=h(bd,16);
this.e=parseInt(bc,16)}else{throw"Error setting public key"}}function at(bc){return bc.modPowInt(this.e,this.n)}function u(be){var bc=aL(be,(this.n.bitLength()+7)>>3);
if(bc==null){return null}var bf=this.doPublic(bc);if(bf==null){return null}var bd=bf.toString(16);if((bd.length&1)==0){return bd
}else{return"0"+bd}}X.prototype.doPublic=at;X.prototype.setPublic=s;X.prototype.encrypt=u;var a8;var aQ=244837814094590;var ax=((aQ&16777215)==15715070);
function a1(bd,bc,be){if(bd!=null){if("number"==typeof bd){this.fromNumber(bd,bc,be)}else{if(bc==null&&"string"!=typeof bd){this.fromString(bd,256)
}else{this.fromString(bd,bc)}}}}function k(){return new a1(null)}function c(bg,bc,bd,bf,bi,bh){while(--bh>=0){var be=bc*this[bg++]+bd[bf]+bi;
bi=Math.floor(be/67108864);bd[bf++]=be&67108863}return bi}function ba(bg,bl,bm,bf,bj,bc){var bi=bl&32767,bk=bl>>15;while(--bc>=0){var be=this[bg]&32767;
var bh=this[bg++]>>15;var bd=bk*be+bh*bi;be=bi*be+((bd&32767)<<15)+bm[bf]+(bj&1073741823);bj=(be>>>30)+(bd>>>15)+bk*bh+(bj>>>30);
bm[bf++]=be&1073741823}return bj}function a9(bg,bl,bm,bf,bj,bc){var bi=bl&16383,bk=bl>>14;while(--bc>=0){var be=this[bg]&16383;
var bh=this[bg++]>>14;var bd=bk*be+bh*bi;be=bi*be+((bd&16383)<<14)+bm[bf]+bj;bj=(be>>28)+(bd>>14)+bk*bh;bm[bf++]=be&268435455
}return bj}if(ax&&(navigator.appName=="Microsoft Internet Explorer")){a1.prototype.am=ba;a8=30}else{if(ax&&(navigator.appName!="Netscape")){a1.prototype.am=c;
a8=26}else{a1.prototype.am=a9;a8=28}}a1.prototype.DB=a8;a1.prototype.DM=((1<<a8)-1);a1.prototype.DV=(1<<a8);var aA=52;a1.prototype.FV=Math.pow(2,aA);
a1.prototype.F1=aA-a8;a1.prototype.F2=2*a8-aA;var aI="0123456789abcdefghijklmnopqrstuvwxyz";var aO=new Array();var aX,E;aX="0".charCodeAt(0);
for(E=0;E<=9;++E){aO[aX++]=E}aX="a".charCodeAt(0);for(E=10;E<36;++E){aO[aX++]=E}aX="A".charCodeAt(0);for(E=10;E<36;++E){aO[aX++]=E
}function bb(bc){return aI.charAt(bc)}function I(bd,bc){var be=aO[bd.charCodeAt(bc)];return(be==null)?-1:be}function aw(bd){for(var bc=this.t-1;
bc>=0;--bc){bd[bc]=this[bc]}bd.t=this.t;bd.s=this.s}function r(bc){this.t=1;this.s=(bc<0)?-1:0;if(bc>0){this[0]=bc}else{if(bc<-1){this[0]=bc+DV
}else{this.t=0}}}function f(bc){var bd=k();bd.fromInt(bc);return bd}function F(bi,bd){var bf;if(bd==16){bf=4}else{if(bd==8){bf=3
}else{if(bd==256){bf=8}else{if(bd==2){bf=1}else{if(bd==32){bf=5}else{if(bd==4){bf=2}else{this.fromRadix(bi,bd);return}}}}}}this.t=0;
this.s=0;var bh=bi.length,be=false,bg=0;while(--bh>=0){var bc=(bf==8)?bi[bh]&255:I(bi,bh);if(bc<0){if(bi.charAt(bh)=="-"){be=true
}continue}be=false;if(bg==0){this[this.t++]=bc}else{if(bg+bf>this.DB){this[this.t-1]|=(bc&((1<<(this.DB-bg))-1))<<bg;this[this.t++]=(bc>>(this.DB-bg))
}else{this[this.t-1]|=bc<<bg}}bg+=bf;if(bg>=this.DB){bg-=this.DB}}if(bf==8&&(bi[0]&128)!=0){this.s=-1;if(bg>0){this[this.t-1]|=((1<<(this.DB-bg))-1)<<bg
}}this.clamp();if(be){a1.ZERO.subTo(this,this)}}function Z(){var bc=this.s&this.DM;while(this.t>0&&this[this.t-1]==bc){--this.t
}}function w(bd){if(this.s<0){return"-"+this.negate().toString(bd)}var be;if(bd==16){be=4}else{if(bd==8){be=3}else{if(bd==2){be=1
}else{if(bd==32){be=5}else{if(bd==4){be=2}else{return this.toRadix(bd)}}}}}var bg=(1<<be)-1,bj,bc=false,bh="",bf=this.t;var bi=this.DB-(bf*this.DB)%be;
if(bf-->0){if(bi<this.DB&&(bj=this[bf]>>bi)>0){bc=true;bh=bb(bj)}while(bf>=0){if(bi<be){bj=(this[bf]&((1<<bi)-1))<<(be-bi);
bj|=this[--bf]>>(bi+=this.DB-be)}else{bj=(this[bf]>>(bi-=be))&bg;if(bi<=0){bi+=this.DB;--bf}}if(bj>0){bc=true}if(bc){bh+=bb(bj)
}}}return bc?bh:"0"}function af(){var bc=k();a1.ZERO.subTo(this,bc);return bc}function aU(){return(this.s<0)?this.negate():this
}function R(bc){var be=this.s-bc.s;if(be!=0){return be}var bd=this.t;be=bd-bc.t;if(be!=0){return be}while(--bd>=0){if((be=this[bd]-bc[bd])!=0){return be
}}return 0}function m(bc){var be=1,bd;if((bd=bc>>>16)!=0){bc=bd;be+=16}if((bd=bc>>8)!=0){bc=bd;be+=8}if((bd=bc>>4)!=0){bc=bd;
be+=4}if((bd=bc>>2)!=0){bc=bd;be+=2}if((bd=bc>>1)!=0){bc=bd;be+=1}return be}function C(){if(this.t<=0){return 0}return this.DB*(this.t-1)+m(this[this.t-1]^(this.s&this.DM))
}function aZ(be,bd){var bc;for(bc=this.t-1;bc>=0;--bc){bd[bc+be]=this[bc]}for(bc=be-1;bc>=0;--bc){bd[bc]=0}bd.t=this.t+be;
bd.s=this.s}function av(be,bd){for(var bc=be;bc<this.t;++bc){bd[bc-be]=this[bc]}bd.t=Math.max(this.t-be,0);bd.s=this.s}function B(bj,bf){var bd=bj%this.DB;
var bc=this.DB-bd;var bh=(1<<bc)-1;var bg=Math.floor(bj/this.DB),bi=(this.s<<bd)&this.DM,be;for(be=this.t-1;be>=0;--be){bf[be+bg+1]=(this[be]>>bc)|bi;
bi=(this[be]&bh)<<bd}for(be=bg-1;be>=0;--be){bf[be]=0}bf[bg]=bi;bf.t=this.t+bg+1;bf.s=this.s;bf.clamp()}function n(bi,bf){bf.s=this.s;
var bg=Math.floor(bi/this.DB);if(bg>=this.t){bf.t=0;return}var bd=bi%this.DB;var bc=this.DB-bd;var bh=(1<<bd)-1;bf[0]=this[bg]>>bd;
for(var be=bg+1;be<this.t;++be){bf[be-bg-1]|=(this[be]&bh)<<bc;bf[be-bg]=this[be]>>bd}if(bd>0){bf[this.t-bg-1]|=(this.s&bh)<<bc
}bf.t=this.t-bg;bf.clamp()}function aB(bd,bf){var be=0,bg=0,bc=Math.min(bd.t,this.t);while(be<bc){bg+=this[be]-bd[be];bf[be++]=bg&this.DM;
bg>>=this.DB}if(bd.t<this.t){bg-=bd.s;while(be<this.t){bg+=this[be];bf[be++]=bg&this.DM;bg>>=this.DB}bg+=this.s}else{bg+=this.s;
while(be<bd.t){bg-=bd[be];bf[be++]=bg&this.DM;bg>>=this.DB}bg-=bd.s}bf.s=(bg<0)?-1:0;if(bg<-1){bf[be++]=this.DV+bg}else{if(bg>0){bf[be++]=bg
}}bf.t=be;bf.clamp()}function O(bd,bf){var bc=this.abs(),bg=bd.abs();var be=bc.t;bf.t=be+bg.t;while(--be>=0){bf[be]=0}for(be=0;
be<bg.t;++be){bf[be+bc.t]=bc.am(0,bg[be],bf,be,0,bc.t)}bf.s=0;bf.clamp();if(this.s!=bd.s){a1.ZERO.subTo(bf,bf)}}function ab(be){var bc=this.abs();
var bd=be.t=2*bc.t;while(--bd>=0){be[bd]=0}for(bd=0;bd<bc.t-1;++bd){var bf=bc.am(bd,bc[bd],be,2*bd,0,1);if((be[bd+bc.t]+=bc.am(bd+1,2*bc[bd],be,2*bd+1,bf,bc.t-bd-1))>=bc.DV){be[bd+bc.t]-=bc.DV;
be[bd+bc.t+1]=1}}if(be.t>0){be[be.t-1]+=bc.am(bd,bc[bd],be,2*bd,0,1)}be.s=0;be.clamp()}function P(bl,bi,bh){var br=bl.abs();
if(br.t<=0){return}var bj=this.abs();if(bj.t<br.t){if(bi!=null){bi.fromInt(0)}if(bh!=null){this.copyTo(bh)}return}if(bh==null){bh=k()
}var bf=k(),bc=this.s,bk=bl.s;var bq=this.DB-m(br[br.t-1]);if(bq>0){br.lShiftTo(bq,bf);bj.lShiftTo(bq,bh)}else{br.copyTo(bf);
bj.copyTo(bh)}var bn=bf.t;var bd=bf[bn-1];if(bd==0){return}var bm=bd*(1<<this.F1)+((bn>1)?bf[bn-2]>>this.F2:0);var bu=this.FV/bm,bt=(1<<this.F1)/bm,bs=1<<this.F2;
var bp=bh.t,bo=bp-bn,bg=(bi==null)?k():bi;bf.dlShiftTo(bo,bg);if(bh.compareTo(bg)>=0){bh[bh.t++]=1;bh.subTo(bg,bh)}a1.ONE.dlShiftTo(bn,bg);
bg.subTo(bf,bf);while(bf.t<bn){bf[bf.t++]=0}while(--bo>=0){var be=(bh[--bp]==bd)?this.DM:Math.floor(bh[bp]*bu+(bh[bp-1]+bs)*bt);
if((bh[bp]+=bf.am(0,be,bh,bo,0,bn))<be){bf.dlShiftTo(bo,bg);bh.subTo(bg,bh);while(bh[bp]<--be){bh.subTo(bg,bh)}}}if(bi!=null){bh.drShiftTo(bn,bi);
if(bc!=bk){a1.ZERO.subTo(bi,bi)}}bh.t=bn;bh.clamp();if(bq>0){bh.rShiftTo(bq,bh)}if(bc<0){a1.ZERO.subTo(bh,bh)}}function Y(bc){var bd=k();
this.abs().divRemTo(bc,null,bd);if(this.s<0&&bd.compareTo(a1.ZERO)>0){bc.subTo(bd,bd)}return bd}function V(bc){this.m=bc}function am(bc){if(bc.s<0||bc.compareTo(this.m)>=0){return bc.mod(this.m)
}else{return bc}}function aT(bc){return bc}function U(bc){bc.divRemTo(this.m,null,bc)}function S(bc,be,bd){bc.multiplyTo(be,bd);
this.reduce(bd)}function a4(bc,bd){bc.squareTo(bd);this.reduce(bd)}V.prototype.convert=am;V.prototype.revert=aT;V.prototype.reduce=U;
V.prototype.mulTo=S;V.prototype.sqrTo=a4;function K(){if(this.t<1){return 0}var bc=this[0];if((bc&1)==0){return 0}var bd=bc&3;
bd=(bd*(2-(bc&15)*bd))&15;bd=(bd*(2-(bc&255)*bd))&255;bd=(bd*(2-(((bc&65535)*bd)&65535)))&65535;bd=(bd*(2-bc*bd%this.DV))%this.DV;
return(bd>0)?this.DV-bd:-bd}function g(bc){this.m=bc;this.mp=bc.invDigit();this.mpl=this.mp&32767;this.mph=this.mp>>15;this.um=(1<<(bc.DB-15))-1;
this.mt2=2*bc.t}function aS(bc){var bd=k();bc.abs().dlShiftTo(this.m.t,bd);bd.divRemTo(this.m,null,bd);if(bc.s<0&&bd.compareTo(a1.ZERO)>0){this.m.subTo(bd,bd)
}return bd}function a2(bc){var bd=k();bc.copyTo(bd);this.reduce(bd);return bd}function aa(bc){while(bc.t<=this.mt2){bc[bc.t++]=0
}for(var be=0;be<this.m.t;++be){var bd=bc[be]&32767;var bf=(bd*this.mpl+(((bd*this.mph+(bc[be]>>15)*this.mpl)&this.um)<<15))&bc.DM;
bd=be+this.m.t;bc[bd]+=this.m.am(0,bf,bc,be,0,this.m.t);while(bc[bd]>=bc.DV){bc[bd]-=bc.DV;bc[++bd]++}}bc.clamp();bc.drShiftTo(this.m.t,bc);
if(bc.compareTo(this.m)>=0){bc.subTo(this.m,bc)}}function aV(bc,bd){bc.squareTo(bd);this.reduce(bd)}function H(bc,be,bd){bc.multiplyTo(be,bd);
this.reduce(bd)}g.prototype.convert=aS;g.prototype.revert=a2;g.prototype.reduce=aa;g.prototype.mulTo=H;g.prototype.sqrTo=aV;
function l(){return((this.t>0)?(this[0]&1):this.s)==0}function G(bh,bi){if(bh>4294967295||bh<1){return a1.ONE}var bg=k(),bc=k(),bf=bi.convert(this),be=m(bh)-1;
bf.copyTo(bg);while(--be>=0){bi.sqrTo(bg,bc);if((bh&(1<<be))>0){bi.mulTo(bc,bf,bg)}else{var bd=bg;bg=bc;bc=bd}}return bi.revert(bg)
}function aW(bd,bc){var be;if(bd<256||bc.isEven()){be=new V(bc)}else{be=new g(bc)}return this.exp(bd,be)}a1.prototype.copyTo=aw;
a1.prototype.fromInt=r;a1.prototype.fromString=F;a1.prototype.clamp=Z;a1.prototype.dlShiftTo=aZ;a1.prototype.drShiftTo=av;
a1.prototype.lShiftTo=B;a1.prototype.rShiftTo=n;a1.prototype.subTo=aB;a1.prototype.multiplyTo=O;a1.prototype.squareTo=ab;
a1.prototype.divRemTo=P;a1.prototype.invDigit=K;a1.prototype.isEven=l;a1.prototype.exp=G;a1.prototype.toString=w;a1.prototype.negate=af;
a1.prototype.abs=aU;a1.prototype.compareTo=R;a1.prototype.bitLength=C;a1.prototype.mod=Y;a1.prototype.modPowInt=aW;a1.ZERO=f(0);
a1.ONE=f(1);function aF(){}aF.prototype.nextBytes=a7;var az="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var aq="=";function aG(be){var bd;var bf;var bc="";for(bd=0;bd+3<=be.length;bd+=3){bf=parseInt(be.substring(bd,bd+3),16);
bc+=az.charAt(bf>>6)+az.charAt(bf&63)}if(bd+1==be.length){bf=parseInt(be.substring(bd,bd+1),16);bc+=az.charAt(bf<<2)}else{if(bd+2==be.length){bf=parseInt(be.substring(bd,bd+2),16);
bc+=az.charAt(bf>>2)+az.charAt((bf&3)<<4)}}while((bc.length&3)>0){bc+=aq}return bc}function d(bg){var be="";var bf;var bc=0;
var bd;for(bf=0;bf<bg.length;++bf){if(bg.charAt(bf)==aq){break}v=az.indexOf(bg.charAt(bf));if(v<0){continue}if(bc==0){be+=bb(v>>2);
bd=v&3;bc=1}else{if(bc==1){be+=bb((bd<<2)|(v>>4));bd=v&15;bc=2}else{if(bc==2){be+=bb(bd);be+=bb(v>>2);bd=v&3;bc=3}else{be+=bb((bd<<2)|(v>>4));
be+=bb(v&15);bc=0}}}}if(bc==1){be+=bb(bd<<2)}return be}function al(bf){var be=d(bf);var bd;var bc=new Array();for(bd=0;2*bd<be.length;
++bd){bc[bd]=parseInt(be.substring(2*bd,2*bd+2),16)}return bc}var q=null;var p=null;var j=true;var aR=false;var aY={ACCOUNT_NUM:0,APPLE_PAY:1,VISA_CHECKOUT:2,CHECKOUT_ID:3};
try{var A=new Date().getTime();var aN=0;var ad=0;var i=null;var W=null;var ao=o(ar);y(aM);setTimeout(T,10);t();var ae=null;
var ay=null;var aE=null;var Q=null;var a6;var z;var ag}catch(aD){aJ(aD)}function ac(bc){var bd;if(i.length>5000){throw new Error("Request URI is too long.  Length is "+i.length+" characters")
}if(bc){bd=a.primaryUrl+"/eProtect/paypage?"+i+"&targetServer=primary&jsoncallback=?";jQuery.getJSON(bd,function(be){p=be
})}else{bd=a.secondaryUrl+"/eProtect/paypage?"+i+"&targetServer=secondary&jsoncallback=?";jQuery.getJSON(bd,function(be){q=be
})}}function ai(bf,bq,bp,bl,bg){try{var bm=new Date();var bn=bm.getTime();var bk=bn-bf;var bs=0;if(bp){bs=bp}var bj=encodeURIComponent(bl.paypageId);
var bo=encodeURIComponent(bl.reportGroup);var be=encodeURIComponent(bl.orderId);var bh=encodeURIComponent(bl.id);var bd;var br="secondary";
if(bg){bd=a.primaryUrl;br="primary"}else{bd=a.secondaryUrl}var bc="paypageId="+bj+"&responseTime="+bk+"&responseCode="+bq+"&tzOffset="+bm.getTimezoneOffset()+"&timeout="+bs;
bc+="&reportGroup="+bo+"&txnId="+bh+"&orderId="+be+"&startTime="+A+"&targetServer="+br;setTimeout(function(){try{jQuery.getJSON(bd+"/eProtect/ppstats?"+bc+"&jsoncallback=?",function(bu){})
}catch(bt){}},0)}catch(bi){}}function y(bc){if(bc!==undefined&&bc.url!=undefined&&bc.url!=null&&bc.url.length>0){a.primaryUrl=bc.url;
if(bc.secondaryUrl!=undefined&&bc.secondaryUrl!=null&&bc.secondaryUrl.length>0){a.secondaryUrl=bc.secondaryUrl}}j=true;if((ao>0&&ao<=a.primaryTimeout)||(a.secondaryUrl==undefined||a.secondaryUrl==null||a.secondaryUrl.length==0)){j=false
}}function T(){try{aN=new Date().getTime()-A;if(W!=null){aH(W);return}if(ao>0&&aN>ao){aR=true}if(j){switch(ad){case 0:break;
case 1:if(p!=null){ai(A,p.response,ao,aM,true);if(p.response=="889"){ad=3;ac(false)}else{a0(p);return}}else{if(aN>a.primaryTimeout){ad=2;
ac(false)}}break;case 2:if(p!=null){ai(A,p.response,ao,aM,true);if(p.response=="889"){ad=3}else{a0(p);return}}else{if(q!=null){ai(A,q.response,ao,aM,false);
if(q.response!="887"&&q.response!="889"){a0(q);return}else{ad=4}}}break;case 3:if(q!=null){ai(A,q.response,ao,aM,false);if(q.response=="887"){a0(p)
}else{a0(q)}return}else{if(aR){a0(p);return}}break;case 4:if(p!=null){ai(A,p.response,ao,aM,true);a0(p);return}else{if(aR){if(q.response=="887"){aC()
}else{a0(q)}return}}break;default:break}}else{if(p!=null){ai(A,p.response,ar,aM,true);a0(p);return}}if(aR){if(ad==0){ai(A,"900",ao,aM,true)
}else{ai(A,"901",ao,aM,true)}aC()}else{setTimeout(arguments.callee,10)}}catch(bc){aJ(bc);if(W!=null){a0(W);return}}}function aJ(bh){try{var bj=encodeURIComponent("GLOBAL_TRY_CATCH");
var bg=encodeURIComponent(0);var bd=encodeURIComponent(0);var bk=encodeURIComponent("A");var bp=encodeURIComponent("NOT_A_STRING");
if(typeof bh==="object"){try{if(typeof bh.message==="undefined"){bk="undefined"}else{if(typeof bh.message==="string"){bk=bh.message;
if(bk.length>1024){bk=bk.substr(0,1024)}}else{bk="NOT_A_STRING"}}}catch(bl){bk="UNABLE_TO_GET_ERROR_FROM_OBJECT"}finally{bk=encodeURIComponent(bk)
}try{if(typeof bh.stack==="undefined"){bg=encodeURIComponent("UNDEFINED");bd=encodeURIComponent("UNDEFINED");bp=encodeURIComponent("UNDEFINED")
}else{if(typeof bh.stack==="string"){bp=bh.stack;if(bp.length>3072){bp=bp.substr(0,3072)}var bi=/.*?eProtect-api.*?\.js:(\d+):(\d+)/.exec(bp);
bp=encodeURIComponent(bp);if(!/^\d+$/.test(bi[1])){bg="NaN"}else{if(!/^\d{0,6}$/.test(bi[1])){bg="TOO_BIG"}else{bg=bi[1]}}bg=encodeURIComponent(bg);
if(!/^\d+$/.test(bi[2])){bd="NaN"}else{if(!/^\d{0,6}$/.test(bi[2])){bd="TOO_BIG"}else{bd=bi[2]}}bd=encodeURIComponent(bd)
}}}catch(bl){bg=encodeURIComponent("EXCEPTION");bd=encodeURIComponent("EXCEPTION");if(bp.length>2000){bp=bp.substr(0,2000)
}bp=encodeURIComponent(bp)}}else{if(typeof bh==="string"){if(bh.length>1024){bh=bh.substr(0,1024)}bk=encodeURIComponent(bh)
}}if(typeof aM==="object"){try{var bn="undefined";if(typeof aM.paypageId==="undefined"){bn="undefined"}else{if(typeof aM.paypageId==="string"){bn=aM.paypageId;
if(bn.length>50){bn=bn.substr(0,50)}}else{bn="NOT_A_STRING"}}}catch(bl){bn="UNABLE_TO_GET_PAYPAGE_ID"}finally{bn=encodeURIComponent(bn)
}var bf="undefined";try{if(typeof aM.orderId==="undefined"){bf="undefined"}else{if(typeof aM.orderId==="string"){bf=aM.orderId;
if(bf.length>32){bf=bf.substr(0,32)}}else{bf="NOT_A_STRING"}}}catch(bl){bf="UNABLE_TO_GET_ORDER_ID"}finally{bf=encodeURIComponent(bf)
}var be="undefined";try{if(typeof aM.reportGroup==="undefined"){be="undefined"}else{if(typeof aM.reportGroup==="string"){be=aM.reportGroup;
if(be.length>32){be=be.substr(0,32)}}else{be="NOT_A_STRING"}}}catch(bl){be="UNABLE_TO_GET_REPORT_GROUP"}finally{be=encodeURIComponent(be)
}}bk=myVantivEProtectReporterForPpStats.removeNonStandardCharacters(bk);bp=myVantivEProtectReporterForPpStats.removeNonStandardCharacters(bp);
var bc="errorHandler="+bj+"&columnNumber="+bd+"&errorMessage="+bk+"&lineNumber="+bg+"&paypageId="+bn+"&orderId="+bf+"&reportGroup="+be+"&errorStack="+bp;
var bo="https://request.eprotect.sitenamehere.com/eProtect/ppstats?"+bc+"&jsoncallback=?";setTimeout(function(){try{jQuery.getJSON(bo,function(br){})
}catch(bq){}},0)}catch(bm){}finally{e("889",bh)}}function t(){if(ap===undefined){return e("889","Missing litleFormFields")
}if(aM===undefined){return e("889","Missing litleRequest")}if(ap.paypageRegistrationId){ap.paypageRegistrationId.value=""
}if(ap.bin){ap.bin.value=""}z=aY.ACCOUNT_NUM;if(aM.applepay!==undefined){if(aM.applepay.data!==undefined&&aM.applepay.signature!==undefined&&aM.applepay.version!==undefined&&aM.applepay.header.ephemeralPublicKey!==undefined&&aM.applepay.header.publicKeyHash!==undefined&&aM.applepay.header.transactionId!==undefined){z=aY.APPLE_PAY
}else{return e("889","Missing ApplePay elements")}}else{if(aM.checkoutIdMode!==undefined&&aM.checkoutIdMode){z=aY.CHECKOUT_ID
}else{if(aM.visaCheckout!==undefined){if(aM.visaCheckout.vInitRequest.apikey!==undefined&&aM.visaCheckout.encPaymentData!==undefined&&aM.visaCheckout.encKey!==undefined&&aM.visaCheckout.callid!==undefined){z=aY.VISA_CHECKOUT
}else{return e("889","Missing VisaCheckout elements")}}}}if(z===aY.CHECKOUT_ID){if(ap.checkoutId){ap.checkoutId.value=""}ag=(jQuery(ap.cvv2).length>0);
if(ag){if(ap.cvv2.value===undefined){throw"Parameter cvv2.value is undefined"}var bj=ap.cvv2.value;bj=an(bj)}else{return e("889","Missing cvv2")
}bc=au(bj);if(bc!="870"){return e(bc)}try{var bh=new X();var bf=bh.setPublic(b.modulus,b.exponent);var bk=bh.encrypt(bj)}catch(bm){myVantivEProtectReporterForPpStats.report3rdPartyError(bm);
return e("875")}if(bk){var be=aG(bk);var bn=encodeURIComponent(be)}else{return e("875")}}else{if(z===aY.ACCOUNT_NUM){try{a3("accountNum",ap.accountNum,aK,N)
}catch(bm){return e("889",bm)}if(ap.accountNum.value===undefined){throw"Parameter accountNum.value is undefined"}a6=ap.accountNum.value;
a6=an(a6);ag=(jQuery(ap.cvv2).length>0);if(ag){if(ap.cvv2.value===undefined){throw"Parameter cvv2.value is undefined"}var bj=ap.cvv2.value;
bj=an(bj)}if(aM.pciNonSensitive===undefined){aM.pciNonSensitive=false}var bc=ak(a6,aM.pciNonSensitive);if(bc!="870"){return e(bc)
}if(ag){bc=au(bj);if(bc!="870"){return e(bc)}}try{var bh=new X();var bf=bh.setPublic(b.modulus,b.exponent);var bl=bh.encrypt(a6);
if(ag){var bk=bh.encrypt(bj)}}catch(bm){myVantivEProtectReporterForPpStats.report3rdPartyError(bm);return e("875")}if(bl){var bi=aG(bl);
var bg=encodeURIComponent(bi);if(ag){var be=aG(bk);var bn=encodeURIComponent(be)}}else{return e("875")}}}try{a3("paypageId",aM.paypageId,aK,N,a5);
a3("reportGroup",aM.reportGroup,aK,N);a3("id",aM.id,aK,N)}catch(bm){return e("889",bm)}ae=encodeURIComponent(aM.paypageId);
ay=encodeURIComponent(aM.reportGroup);aE=encodeURIComponent(aM.orderId);Q=encodeURIComponent(aM.id);i="paypageId="+ae+"&reportGroup="+ay+"&id="+Q+"&orderId="+aE;
if(z===aY.ACCOUNT_NUM){var bd=encodeURIComponent(aM.pciNonSensitive);i+="&encryptedAccount="+bg+"&publicKeyId="+b.keyId+"&pciNonSensitive="+bd
}if(z===aY.APPLE_PAY){i+="&applepay.data="+encodeURIComponent(aM.applepay.data);i+="&applepay.signature="+encodeURIComponent(aM.applepay.signature);
i+="&applepay.version="+encodeURIComponent(aM.applepay.version);i+="&applepay.header.ephemeralPublicKey="+encodeURIComponent(aM.applepay.header.ephemeralPublicKey);
i+="&applepay.header.publicKeyHash="+encodeURIComponent(aM.applepay.header.publicKeyHash);i+="&applepay.header.transactionId="+encodeURIComponent(aM.applepay.header.transactionId);
if(aM.applepay.header.applicationData!==undefined){i+="&applepay.header.applicationData="+encodeURIComponent(aM.applepay.header.applicationData)
}}if(z===aY.VISA_CHECKOUT){i+="&visaCheckout.encPaymentData="+encodeURIComponent(aM.visaCheckout.encPaymentData);i+="&visaCheckout.encKey="+encodeURIComponent(aM.visaCheckout.encKey);
i+="&visaCheckout.apiKey="+encodeURIComponent(aM.visaCheckout.vInitRequest.apikey);i+="&visaCheckout.callid="+encodeURIComponent(aM.visaCheckout.callid)
}if(ag){i+="&encryptedCvv="+bn}if(z===aY.CHECKOUT_ID){i+="&checkoutIdMode=true&publicKeyId="+b.keyId}i+="&requestType=eProtect";
ad=1;ac(true)}function o(bd){if(bd!=undefined){if(typeof bd=="number"){return bd}else{if(typeof bd=="string"){var bc=/^[0-9]+$/.test(bd);
if(bc){return parseInt(bd)}return 15000}}}return 0}function L(be){if(z===aY.CHECKOUT_ID){if(ap.checkoutId){ap.checkoutId.value=be.checkoutId
}}else{if(z===aY.ACCOUNT_NUM){var bf=an(a6);ap.accountNum.value=D(a6);be.firstSix=bf.substring(0,6);be.lastFour=bf.substring(bf.length-4,bf.length);
if(ap.extraAccountNums){for(var bd in ap.extraAccountNums){var bc=ap.extraAccountNums[bd];if(bc.value===undefined){throw"Parameter extraAccountNums["+bd+"].value is undefined"
}bc.value=D(an(bc.value))}}}if(ap.bin){ap.bin.value=be.bin}if(ap.paypageRegistrationId){ap.paypageRegistrationId.value=be.paypageRegistrationId
}}if(z===aY.ACCOUNT_NUM||z===aY.CHECKOUT_ID){if(ag){ap.cvv2.value="000"}}if(aj===undefined){throw"successCallback undefined"
}if(typeof aj!=="function"){throw"successCallback not a function"}aj(be)}function aH(bc){if(ah===undefined){throw"errorCallback undefined"
}if(typeof ah!=="function"){throw"errorCallback not a function"}ah(bc)}function aC(){M()}function a0(bc){if(bc.response=="870"){L(bc)
}else{aH(bc)}return}function D(bc){if(!bc){return bc}bc=bc.substring(0,bc.length-4).replace(/./g,"X").concat(bc.substring(bc.length-4));
return bc}function J(bc){bc=(bc+"").split("").reverse();if(!bc.length){return false}var be=0,bd;for(bd=0;bd<bc.length;bd++){bc[bd]=parseInt(bc[bd]);
be+=bd%2?2*bc[bd]-(bc[bd]>4?9:0):bc[bd]}return(be%10)==0}function ak(bf,be){if(bf=="6011010000000003"){return"875"}if(bf=="375001000000005"){ao=1;
var bd=new Date();var bc=null;do{bc=new Date()}while(bc-bd<10)}if(bf=="4457010200000007"){return"889"}if(bf.length<13){return"872"
}else{if(bf.length>19){return"873"}else{if(!bf.match(/^[0-9]{13,19}$/)){return"874"}else{if(!be&&!J(bf)){return"871"}else{return"870"
}}}}}function au(bc){if(bc.length<3){return"882"}else{if(bc.length>4){return"883"}else{if(!bc.match(/^\d\d\d\d?$/)){return"881"
}else{return"870"}}}}function a3(){var bd=arguments[0];var be=arguments[1];if(be===undefined){throw"Parameter "+bd+" is undefined"
}for(var bc=2;bc<arguments.length;bc++){arguments[bc](bd,be)}}function aK(bc,bd){if(bd.length==0){throw"Parameter "+bc+" is required"
}}function N(bc,bd){if(bd.length>1024){throw"Parameter "+bc+" is too long.  Length is "+bd.length}}function a5(bc,bd){if(!bd.match(/^[0-9a-zA-Z]+$/)){throw"Parameter "+bc+" with value "+bd+" is not alphanumeric"
}}function e(bg,bf){var bh={response:null,message:null};var bd={"870":"Success","871":"Account number not mod10","872":"Account number too short","873":"Account number too long","874":"Account number not numeric","875":"Unable to encrypt field","876":"Account number invalid","881":"Card validation num not numeric","882":"Card validation num too short","883":"Card validation num too long","889":"Failure"};
function bc(bi){return bi<10?"0"+bi:bi}function be(bi){return bi.getUTCFullYear()+"-"+bc(bi.getUTCMonth()+1)+"-"+bc(bi.getUTCDate())+"T"+bc(bi.getUTCHours())+":"+bc(bi.getUTCMinutes())+":"+bc(bi.getUTCSeconds())
}bh.response=bg;if(bf==undefined){bh.message=bd[bg]}else{bh.message=bf}bh.responseTime=be(new Date());if(aM!==undefined){bh.reportGroup=aM.reportGroup;
bh.id=aM.id;bh.orderId=aM.orderId}W=bh}function an(bc){return bc.replace(/[ -]/gi,"")}},getVisaCheckoutApiKey:function(){return b.visaCheckoutApiKey
}}};