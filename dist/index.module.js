import{mode as e}from"@chakra-ui/theme-tools";import{usePopper as t,useStyles as n,chakra as r,useMultiStyleConfig as i,omitThemingProps as o,StylesProvider as l,HStack as u,Box as c,Tag as a,TagLabel as s,TagCloseButton as d,IconButton as f,forwardRef as p,Input as v}from"@chakra-ui/react";import{createContext as h,mergeRefs as m}from"@chakra-ui/react-utils";import{useRef as g,useMemo as b,useCallback as y,useEffect as x,useState as _,memo as S}from"react";import{jsx as w,jsxs as k}from"react/jsx-runtime";function C(t){return{bg:e("#fff","gray.700")(t),boxShadow:e("sm","dark-lg")(t),color:"inherit",w:"full",py:"2",zIndex:1,borderRadius:"md",borderWidth:"1px",maxH:"64",overflowY:"auto",overscrollBehaviorY:"contain"}}var O={d:"flex",flex:1,flexWrap:"wrap",alignItems:"center"},I={fontSize:"md",marginEnd:3,mb:2,fontWeight:"medium",transition:"all 0.2s",opacity:1,_disabled:{opacity:.4}};function L(t){return{cursor:"pointer",transition:"background 50ms ease-out",_focus:{bg:e("gray.50","whiteAlpha.100")(t),boxShadow:"outline"},_active:{bg:e("gray.50","whiteAlpha.100")(t)},_expanded:{bg:e("gray.50","whiteAlpha.100")(t)},_selected:{bg:e("gray.100","whiteAlpha.300")(t)},_disabled:{opacity:.4,cursor:"not-allowed"}}}function P(e){return{borderRadius:"full",variant:"solid",colorscheme:e.colorscheme}}function R(t){return{variant:"ghost",_hover:{bg:e("gray.200","whiteAlpha.300")(t)},_focus:{bg:e("gray.200","whiteAlpha.300")(t),boxShadow:"outline"},_active:{bg:e("gray.100","whiteAlpha.100")(t)},colorscheme:t.colorscheme}}var V={h:"auto",minW:72},A={d:"flex",alignItems:"center"},M={fontWeight:"semibold"},E={d:"inline",h:"full",border:0,borderColor:"inherit",my:1,opacity:.8},W={defaultProps:{size:"md"},parts:["item","selectedItem","list","textList","selectedList","actionGroup","control","input","button","groupTitle","divider","label"],sizes:{sm:{control:{minH:8,px:1,spacing:1},input:{m:"px"},actionGroup:{spacing:"0"},item:{py:1,px:2},textList:{py:0,px:1},selectedItem:{m:"px"},selectedList:{py:"px"},groupTitle:{mx:2,my:1,fontSize:"sm"}},md:{control:{minH:10,px:1,spacing:1},input:{m:"2px"},actionGroup:{spacing:"0"},item:{py:2,px:3},textList:{p:1},selectedItem:{m:"2px"},selectedList:{py:"2px"},groupTitle:{mx:4,my:2,fontSize:"sm"}},lg:{control:{minH:12,px:2,spacing:2},input:{m:1},actionGroup:{spacing:"0"},item:{py:2,px:3},textList:{py:1,px:2},selectedItem:{m:1},selectedList:{py:1},groupTitle:{mx:4,my:2,fontSize:"sm"}}},baseStyle:function(e){return{list:C(e),selectedList:O,item:L(e),selectedItem:P(e),button:R(e),actionGroup:A,control:V,input:{bgColor:"transparent",appearance:"none",flex:1,outline:0},groupTitle:M,divider:E,label:I}}};function T(){return T=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},T.apply(this,arguments)}function B(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t.indexOf(n=o[r])>=0||(i[n]=e[n]);return i}function H(e){return"object"==typeof e&&null!=e&&1===e.nodeType}function z(e,t){return(!t||"hidden"!==e)&&"visible"!==e&&"clip"!==e}function D(e,t){if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){var n=getComputedStyle(e,null);return z(n.overflowY,t)||z(n.overflowX,t)||function(e){var t=function(e){if(!e.ownerDocument||!e.ownerDocument.defaultView)return null;try{return e.ownerDocument.defaultView.frameElement}catch(e){return null}}(e);return!!t&&(t.clientHeight<e.scrollHeight||t.clientWidth<e.scrollWidth)}(e)}return!1}function N(e,t,n,r,i,o,l,u){return o<e&&l>t||o>e&&l<t?0:o<=e&&u<=n||l>=t&&u>=n?o-e-r:l>t&&u<n||o<e&&u>n?l-t+i:0}var j,G,K=["onKeyDown"],Y=["refKey","ref","onChange","onFocus","onClick","onBlur"],F=["index","key","onClick","onMouseEnter","option"],U=["selected"];!function(e){e.SingleCreate="singleCreate",e.SingleRemove="singleRemove",e.SingleSelect="singleSelect",e.SingleClear="singleClear",e.MultiCreate="multiCreate",e.MultiRemove="multiRemove",e.MultiSelect="multiSelect",e.MultiClear="multiClear"}(j||(j={})),function(e){e.SetOpen="setOpen",e.SetSearch="setSearch",e.HighlightIndex="highlightIndex"}(G||(G={}));var X,q=[],J=[],Q={searchValue:"",resolvedSearchValue:"",isOpen:!1,highlightedIndex:0},Z=function(e,t){return t},$=function(e,t,n,r){r.current&&function(e,t){if(e&&t){var n=function(e,t){var n=window,r=t.scrollMode,i=t.block,o=t.inline,l=t.boundary,u=t.skipOverflowHiddenElements,c="function"==typeof l?l:function(e){return e!==l};if(!H(e))throw new TypeError("Invalid target");for(var a=document.scrollingElement||document.documentElement,s=[],d=e;H(d)&&c(d);){if((d=d.parentElement)===a){s.push(d);break}null!=d&&d===document.body&&D(d)&&!D(document.documentElement)||null!=d&&D(d,u)&&s.push(d)}for(var f=n.visualViewport?n.visualViewport.width:innerWidth,p=n.visualViewport?n.visualViewport.height:innerHeight,v=window.scrollX||pageXOffset,h=window.scrollY||pageYOffset,m=e.getBoundingClientRect(),g=m.height,b=m.width,y=m.top,x=m.right,_=m.bottom,S=m.left,w="start"===i||"nearest"===i?y:"end"===i?_:y+g/2,k="center"===o?S+b/2:"end"===o?x:S,C=[],O=0;O<s.length;O++){var I=s[O],L=I.getBoundingClientRect(),P=L.height,R=L.width,V=L.top,A=L.right,M=L.bottom,E=L.left;if("if-needed"===r&&y>=0&&S>=0&&_<=p&&x<=f&&y>=V&&_<=M&&S>=E&&x<=A)return C;var W=getComputedStyle(I),T=parseInt(W.borderLeftWidth,10),B=parseInt(W.borderTopWidth,10),z=parseInt(W.borderRightWidth,10),j=parseInt(W.borderBottomWidth,10),G=0,K=0,Y="offsetWidth"in I?I.offsetWidth-I.clientWidth-T-z:0,F="offsetHeight"in I?I.offsetHeight-I.clientHeight-B-j:0;if(a===I)G="start"===i?w:"end"===i?w-p:"nearest"===i?N(h,h+p,p,B,j,h+w,h+w+g,g):w-p/2,K="start"===o?k:"center"===o?k-f/2:"end"===o?k-f:N(v,v+f,f,T,z,v+k,v+k+b,b),G=Math.max(0,G+h),K=Math.max(0,K+v);else{G="start"===i?w-V-B:"end"===i?w-M+j+F:"nearest"===i?N(V,M,P,B,j+F,w,w+g,g):w-(V+P/2)+F/2,K="start"===o?k-E-T:"center"===o?k-(E+R/2)+Y/2:"end"===o?k-A+z+Y:N(E,A,R,T,z+Y,k,k+b,b);var U=I.scrollLeft,X=I.scrollTop;w+=X-(G=Math.max(0,Math.min(X+G,I.scrollHeight-P+F))),k+=U-(K=Math.max(0,Math.min(U+K,I.scrollWidth-R+Y)))}C.push({el:I,top:G,left:K})}return C}(e,{boundary:t,block:"nearest",scrollMode:"if-needed"});n.forEach(function(e){var t=e.el,n=e.left;t.scrollTop=e.top,t.scrollLeft=n})}}(t.current,n.current)},ee=function(e){return""+e.charAt(0).toUpperCase()+e.substring(1)},te=function(e,t){return void 0===t&&(t=""),""+t+(null==e?void 0:e.value)},ne=function(e){return"string"==typeof e?{value:e,label:ee(e)}:e},re=function(e){return e.length>1e4?1e3:e.length>1e3?200:0},ie=function(e,t,n){return e.filter(function(e){return n(e).value.toString().toLowerCase().includes(t.toString().toLowerCase())}).sort(function(e){return n(e).value.toString().toLowerCase().indexOf(t.toString().toLowerCase())})};function oe(e,t,n){var r,i;return n?T({},e,"function"==typeof t?((i={})[n]=t(e[n]),i):((r={})[n]=t,r)):"function"==typeof t?t(e):t}!function(e){e.List="list",e.Input="input",e.Both="both"}(X||(X={}));var le=h({strict:!1,name:"SelectContext"}),ue=le[0],ce=le[1],ae=h({strict:!1,name:"SelectInputContext"}),se=ae[0],de=ae[1],fe=h({strict:!1,name:"SelectedContext"}),pe=fe[0],ve=fe[1],he=h({strict:!1,name:"SelectedListContext"}),me=he[0],ge=he[1],be=h({strict:!1,name:"SelectActionContext"}),ye=be[0],xe=be[1];function _e(e){var n=e.create,r=void 0!==n&&n,i=e.single,o=void 0!==i&&i,l=e.selectionVisibleIn,u=void 0===l?X.Input:l,c=e.getDebounce,a=void 0===c?re:c,s=e.getOption,d=void 0===s?ne:s,f=e.stateReducer,p=e.filterFn,v=void 0===p?ie:p,h=e.scrollToIndex,m=void 0===h?$:h,S=e.shiftAmount,w=void 0===S?5:S,k=e.duplicates,C=e.options,O=e.value,I=e.onChange,L=e.placement,P=void 0===L?"bottom-start":L,R=function(e,t){var n=g();n.current=t;var r=_(e),i=r[1];return[r[0],y(function(e,t){if(!t)throw new Error("An action type is required to update the state");return i(function(r){return n.current(r,e(r),t)})},[i])]}(Q,void 0===f?Z:f),V=R[0],A=V.searchValue,M=V.resolvedSearchValue,E=V.isOpen,W=V.highlightedIndex,H=R[1],z=!o,D=g(),N=g([]),U=g(""),ee=g(),te=g(),le=g({}),ue=g(),ce=g(),ae=g(),se=g(W),de=g(),fe=g(!1),pe=t({placement:P});se.current=W,ce.current=v,ae.current=m,ue.current=I,z&&void 0===O&&(O=q),C||(C=J);var ve=C;C=b(function(){var e,t;return u!==X.Input?null==(e=C)?void 0:e.map(function(e){var t;return T({},d(e),{selected:null==(t=Array.isArray(O)?O:[O||""])?void 0:t.some(function(t){return d(t).value===d(e).value})})}):z&&!k?null==(t=C)?void 0:t.filter(function(e){var t;return!(null!=(t=O)&&t.some(function(t){return d(t).value===d(e).value}))}):C},[C,O,k,z,d,u]);var he=b(function(){return z?O.map(function(e){return ve.find(function(t){return d(t).value===d(e).value})||d(e)}):ve.find(function(e){return d(e).value===d(O).value})||d(O)},[z,O,ve,d]);C=b(function(){return M?null==ce.current?void 0:ce.current(C,M,d):C},[C,M,d]),C=b(function(){return r&&A?[T({created:!0},d(A))].concat(C):C},[r,A,C,d]),U.current=O,N.current=C;var me,ge=y(function(e){H(function(t){return oe(t,e,"isOpen")},G.SetOpen)},[]),be=y(function(){ge(!1)},[]),ye=y(function(){ge(!0)},[]),xe=function(e,t){void 0===t&&(t=0);var n=g(null),r=g();return r.current=function(e){H(function(t){return oe(t,e,"resolvedSearchValue")},G.SetSearch)},x(function(){return function(){clearTimeout(n.current)}},[t]),y(function(){var e=arguments;try{return n.current&&clearTimeout(n.current),Promise.resolve(new Promise(function(i,o){n.current=setTimeout(function(){n.current=null;try{i(r.current.apply(r,[].slice.call(e)))}catch(e){o(e)}},t)}))}catch(e){return Promise.reject(e)}},[t])}(0,a(C)),_e=y(function(e){H(function(t){return oe(t,e,"searchValue")},G.SetSearch),xe(e)},[]),Se=y(function(e){var t=N.current;H(function(n){return T({},n,{highlightedIndex:Math.min(Math.max(0,"function"==typeof e?e(n.highlightedIndex):e),t.length-1)})},G.HighlightIndex)},[]),we=y(function(e){var t=N.current[e];if(t){var n=d(t);if(z){var i=U.current;!k&&i.some(function(e){return d(e).value===n.value})||null==ue.current||ue.current([].concat(i,[n.value]),{action:n.created?j.MultiCreate:j.MultiSelect,value:n})}else null==ue.current||ue.current(n.value,{action:n.created?j.SingleCreate:j.SingleSelect,value:n})}(r||z)&&_e(""),z||be()},[z,r,k,d]),ke=y(function(){null==ue.current||ue.current(z?[]:"",{action:z?j.MultiClear:j.SingleClear,value:""})},[z]),Ce=y(function(e){var t="number"==typeof e,n=Array.isArray(U.current),r=n?U.current:[U.current],i=r.filter(function(n,r){return t?r!==e:e!==n});n?ue.current(i,{action:j.MultiRemove,value:d(t?r[e]:e)}):ue.current(i[0]||"",{action:j.SingleRemove,value:d(t?r[e]:e)})},[d]),Oe=y(function(e){_e(e.target.value),ye()},[]),Ie=y(function(){r&&!z||_e(""),ye()},[r,z]),Le=function(e,t){return function(n,r){var i=n.shift,o=n.meta;r.preventDefault();var l=t||o?1e12:e||i?w-1:1;ye(),fe.current=!0,Se(function(e){return e-l})}},Pe=function(e,t){return function(n,r){var i=n.shift,o=n.meta;r.preventDefault();var l=t||o?1e12:e||i?w-1:1;ye(),fe.current=!0,Se(function(e){return e+l})}},Re=y(function(e,t){if(E){var n=N.current;(A||n[se.current])&&t.preventDefault(),n[se.current]&&we(se.current)}},[E,A]),Ve=y(function(){var e=U.current,t=z?e[e.length-1]:e;(z&&!A||!z&&t)&&(Ce(t),_e(""))},[A,z]),Ae=(me={ArrowUp:Le(),ArrowDown:Pe(),PageUp:Le(!0),PageDown:Pe(!0),Home:Le(!1,!0),End:Pe(!1,!0),Escape:be,Tab:be,Enter:Re,Backspace:Ve},function(e){var t=void 0===e?{}:e,n=t.onKeyDown;return T({},B(t,K),{onKeyDown:function(e){var t=e.keyCode,r=e.key,i=me[r]||me[t];i&&i({keyCode:t,key:r,shift:e.shiftKey,meta:e.metaKey},e),n&&n(e)}})}),Me=y(function(e){var t,n=void 0===e?{}:e,r=n.refKey,i=void 0===r?"ref":r,o=n.ref,l=n.onChange,u=n.onFocus,c=n.onClick,a=n.onBlur,s=B(n,Y);return Ae(T(((t={})[i]=function(e){ee.current=e,o&&(o.current=e)},t.value=(E?A||he.label:he?null==he?void 0:he.label:"")||"",t.onChange=function(e){Oe(e),l&&l(e)},t.onFocus=function(e){Ie(),u&&u(e)},t.onClick=function(e){Ie(),c&&c(e)},t.onBlur=function(e){a&&(e.persist(),le.current.cb=a,le.current.event=e)},t),s))},[E,A,he,Ie,Oe]),Ee=y(function(e){var t=void 0===e?{}:e,n=t.index,r=t.key,i=void 0===r?n:r,o=t.onClick,l=t.onMouseEnter,u=t.option,c=B(t,F);if("number"!=typeof n||n<0)throw new Error("useSelect: The getOptionProps prop getter requires an index property, eg. 'getOptionProps({index: 1})'");return T({key:i,option:u},c,{onClick:function(e){void 0!==u.selected&&u.selected?Ce(u.value):we(n),o&&o(e)},onMouseEnter:function(e){fe.current=!1,Se(n),l&&l(e)}})},[]);return function(e,t,n,r){var i=g(),o=g(),l=g();l.current=t;var u=n||i,c=r||o,a=y(function(e){if("click"!==e.type||"touchstart"!==e.type){var t=c.current,n=u.current;null!=t&&t.contains(e.target)||null!=n&&n.contains(e.target)||l.current(e)}},[]);x(function(){return e&&(document.addEventListener("touchstart",a,!0),document.addEventListener("click",a,!0)),function(){document.removeEventListener("touchstart",a,!0),document.removeEventListener("click",a,!0)}},[e,a])}(E,be,D,te),x(function(){A&&Se(0)},[A,Se]),x(function(){var e,t;Se(0),!E&&null!=(e=le.current)&&e.event&&(null==(t=le.current)||t.cb(le.current.event),le.current.event=null)},[E]),x(function(){null==ae.current||ae.current(W,de,D,fe)},[W]),x(function(){E&&ee.current&&setTimeout(function(){var e;null==(e=ee.current)||e.focus()})},[E]),{multi:z,clearable:z&&!!(Array.isArray(O)?O.length>0:O),clearAll:ke,optionsRef:D,controlRef:te,popper:pe,value:O,searchValue:A,isOpen:E,highlightedIndexRef:se,highlightedValueRef:de,enableScrollRef:fe,selectedOption:he,visibleOptions:C,selectionVisibleIn:u,selectIndex:we,removeValue:Ce,setOpen:ge,setSearch:_e,highlightIndex:Se,getInputProps:Me,getOptionProps:Ee,getOption:d}}function Se(e){void 0===e&&(e={});var t=xe(),r=t.clearAll,i=t.clearable,o=n(),l=y(function(e){e.preventDefault(),e.stopPropagation(),r()},[]);return T({},e,{clearOnClick:l,clearable:i,__css:o.actionGroup})}function we(e){void 0===e&&(e={});var t=de().getInputProps,r=n();return T({},e,t(),{__css:r.input})}function ke(e){return void 0===e&&(e={}),T({},e,{__css:n().label})}function Ce(e){var t;void 0===e&&(e={});var r=xe(),i=r.isOpen,o=r.setOpen,l=y(function(e){e.preventDefault(),e.stopPropagation(),o(function(e){return!e})},[o]),u=n();return T({},e,{__css:T({},u.button,null==(t=i&&u.button)?void 0:t._active),isOpen:i,onClick:l})}function Oe(e){return void 0===e&&(e={}),T({},e,{__css:T({},n().button)})}function Ie(e){void 0===e&&(e={});var t=ve().removeValue,r=n(),i=y(function(){return t(e.value)},[e.value]);return b(function(){return{key:e.key||e.value,onClick:i,__css:r.selectedItem}},[e.value,e.key,i,r.selectedItem])}function Le(e){var t=void 0===e?{}:e,r=t.selected,i=B(t,U),o=ce(),l=o.getOptionProps,u=o.highlightedIndexRef,c=o.highlightedValueRef,a=n(),s=u.current===i.index;return b(function(){var e,t,n={value:i.value,label:i.label||ee(i.value),selected:r};return T({},l({option:n,key:i.key||te(n),index:i.index}),{highlightedRef:s?c:void 0,__css:T({},a.item,null==(e=r&&a.item)?void 0:e._selected,null==(t=s&&a.item)?void 0:t._active)})},[s,r,i.key,i.label,i.value,i.index,a.item])}function Pe(){var e=ce(),t=e.isOpen,r=e.getOption,i=e.optionsRef,o=e.popper,l=e.visibleOptions,u=n();return b(function(){return{ref:m(i,o.popperRef),isOpen:t,visibleOptions:l,getOption:r,__css:u.list}},[t,l,u.list])}function Re(e){void 0===e&&(e={});var t=ge(),r=t.value,i=t.multi,o=t.selectionVisibleIn,l=n();return T({},e,{multi:i,selectedItems:r,selectionVisibleIn:o,__css:l.selectedList,textList:{__css:l.textList}})}function Ve(e){void 0===e&&(e={});var t=ce(),r=t.isOpen,i=t.popper,o=t.controlRef,l=n();return T({},e,b(function(){return{ref:m(e.ref,o,i.referenceRef)}},[e.ref,o,i.referenceRef]),{isOpen:r,__css:l.control})}function Ae(e){void 0===e&&(e={});var t=e.getOption||ne,n=_(e.value),r=n[0],i=n[1],o=_(function(){return e.options.map(t)}),l=o[1];return{value:r,options:o[0],onChange:y(function(e,n){switch(null==n?void 0:n.action){case j.SingleCreate:i(e),l(function(n){var r=t(e);return n.some(function(e){return t(e).value===r.value})?n:[T({},r,{created:!0})].concat(n)});break;case j.SingleClear:case j.SingleRemove:case j.SingleSelect:i(e);break;case j.MultiCreate:var r=e[e.length-1];i(e),l(function(e){var n=t(r);return e.some(function(e){return t(e).value===n.value})?e:[T({},n,{created:!0})].concat(e)});break;default:i(e)}},[i,l,t])}}var Me=["value","label","index","selected","created"],Ee=["highlightedRef","option"],We=["__css","visibleOptions","isOpen","getOption","ref"],Te=["key"],Be=["isActive","width","height","__css"],He=["width","height"],ze=["value"],De=["onClick","__css"],Ne=["__css","size","ariaLabel","icon","isOpen"],je=["__css","size","ariaLabel","icon"],Ge=["children"],Ke=["__css","textList","selectedItems","multi","selectionVisibleIn"],Ye=["__css","clearable","clearOnClick","clearButtonProps","toggleButtonProps"],Fe=["children"],Ue=["label","labelProps","controlProps","listProps","selectedListProps","actionGroupProps"],Xe=r("svg"),qe=S(function(e){var t=e.children,n=i("MultiSelect",e),u=_e(o(e)),c=b(function(){return u},[u]),a=b(function(){return{getInputProps:u.getInputProps}},[u.getInputProps]),s=b(function(){return{removeValue:u.removeValue}},[u.removeValue]),d=b(function(){return{value:u.value,multi:u.multi,selectionVisibleIn:u.selectionVisibleIn}},[u.value,u.multi,u.selectionVisibleIn]),f=b(function(){return{isOpen:u.isOpen,setOpen:u.setOpen,clearable:u.clearable,clearAll:u.clearAll}},[u.isOpen,u.setOpen,u.clearable,u.clearAll]);return w(l,{value:n,children:w(ue,{value:c,children:w(se,{value:a,children:w(me,{value:d,children:w(pe,{value:s,children:w(ye,{value:f,children:w(r.div,{pos:"relative",children:t})})})})})})})});qe.displayName="Select";var Je=S(function(e){var t=ke();return w(r.label,T({},e,t))});Je.displayName="SelectLabel";var Qe=S(function(e){var t=e.created;return k(u,{justifyContent:"space-between",w:"full",role:"list",children:[w(c,{children:e.label}),!!t&&w(a,{flexShrink:0,children:w(s,{fontSize:"xs",fontWeight:"bold",role:"listitem",children:"New"})})]})});Qe.displayName="SelectOptionLabel";var Ze=S(function(e){var t=e.value,n=e.label,i=e.index,o=e.selected,l=e.created,u=B(e,Me),c=Le({value:t,label:n,index:i,selected:o}),a=c.highlightedRef,s=c.option,d=B(c,Ee);return w(r.li,T({ref:a&&a,role:"option"},o&&{"aria-selected":o},u,d,{children:w(Qe,{label:(null==s?void 0:s.label)||t,created:!!l})}))});Ze.displayName="SelectOptionItem";var $e=S(function(e){var t=e.label,i=void 0===t?"No results found":t,o=n();return w(r.li,{__css:o.item,children:w(Qe,{label:i})})});$e.displayName="EmptySelectResults";var et=S(function(e){var t=Pe(),n=t.__css,i=t.visibleOptions,o=t.isOpen,l=t.getOption,u=t.ref,c=B(t,We),a=o,s=y(function(e,t){var n=l(e);return{key:n.id||te(n,"option-"),value:n.value,label:n.label||ee(n.value),selected:n.selected,created:n.created,index:t}},[]);return w(r.ul,T({ref:u,__css:b(function(){return T({listStyle:"none",position:"absolute"},!a&&{display:"none"},n)},[a,n]),"aria-orientation":"vertical",role:"listbox"},c,e,{children:a&&i.length>0?i.map(function(e,t){var n=s(e,t),r=n.key,i=B(n,Te);return w(Ze,T({},i),r)}):w($e,{})}))});et.displayName="SelectList";var tt=function(e){var t=e.isActive,n=e.width,r=void 0===n?4:n,i=e.height,o=void 0===i?4:i,l=e.__css,u=B(e,Be);return w(Xe,T({viewBox:"0 0 24 24",stroke:"currentColor",fill:"none",width:r,height:o,__css:T({},l,t&&(null==l?void 0:l._active))},u,{children:w("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M19 9l-7 7-7-7"})}))},nt=function(e){var t=e.width,n=void 0===t?4:t,r=e.height,i=void 0===r?4:r,o=B(e,He);return w(Xe,T({viewBox:"0 0 24 24",stroke:"currentColor",fill:"none",width:n,height:i},o,{children:w("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"})}))},rt=S(function(e){var t=we(e);return w(r.input,T({},t))});rt.displayName="SelectInput";var it=S(function(e){var t=e.value,n=Ie(T({value:t},B(e,ze))),r=n.onClick,i=n.__css,o=B(n,De);return k(a,T({},i,o,{children:[w(s,{children:t}),w(d,{onClick:r})]}))});it.displayName="SelectedItem";var ot=S(function(e){var t=Ce(e),n=t.__css,r=t.size,i=void 0===r?"sm":r,o=t.ariaLabel,l=void 0===o?"toggle menu":o,u=t.icon,c=void 0===u?tt:u,a=t.isOpen,s=B(t,Ne);return w(f,T({tabIndex:0,size:i,"aria-label":l,"aria-haspopup":!0,"aria-expanded":a,icon:w(c,{isActive:a,__css:{transitionDuration:"200ms",transitionProperty:"transform",_active:{transform:"rotate(180deg)"}}})},n,s))});ot.displayName="SelectToggleButton";var lt=S(function(e){var t=Oe(e),n=t.__css,r=t.size,i=void 0===r?"sm":r,o=t.ariaLabel,l=void 0===o?"clear all selected":o,u=t.icon,c=void 0===u?nt:u,a=B(t,je);return w(f,T({tabIndex:0,size:i,"aria-label":l,icon:w(c,{})},n,a))});lt.displayName="SelectClearButton";var ut=S(function(e){var t=e.children,n=Re(B(e,Ge)),r=n.__css,i=n.textList,o=n.selectedItems,l=n.multi,u=n.selectionVisibleIn,a=B(n,Ke);return k(c,T({},r,a,{children:[l&&u!==X.List&&(null==o?void 0:o.map(function(e){return w(it,{value:e},"selected-item-"+e)})),l&&u===X.List&&!(null==o||!o.length)&&w(c,T({},null==i?void 0:i.__css,{children:null==o?void 0:o.join(", ")})),t]}))});ut.displayName="SelectedList";var ct=S(function(e){var t=Se(e),n=t.__css,r=t.clearable,i=t.clearOnClick,o=t.clearButtonProps,l=t.toggleButtonProps,c=B(t,Ye);return k(u,T({},n,c,{children:[r&&w(lt,T({onClick:i},o)),w(ot,T({},l))]}))});ct.displayName="SelectActionGroup";var at=p(function(e,t){var n=e.children,r=B(e,Fe),i=Ve({ref:t});return w(v,T({ref:i.ref,as:u},i.__css,r,{children:n}))}),st=function(e){var t=e.label,n=e.labelProps,r=e.controlProps,i=e.listProps,o=e.selectedListProps,l=e.actionGroupProps,u=B(e,Ue);return k(qe,T({},u,{children:[t&&w(Je,T({},n,{children:t})),k(at,T({},r,{children:[w(ut,T({},o,{children:w(rt,{})})),w(ct,T({},l))]})),w(et,T({},i))]}))};export{Xe as ChakraSvg,j as ChangeActions,$e as EmptySelectResults,st as MultiSelect,W as MultiSelectTheme,qe as Select,ct as SelectActionGroup,ye as SelectActionProvider,G as SelectActions,lt as SelectClearButton,at as SelectControl,rt as SelectInput,se as SelectInputProvider,Je as SelectLabel,et as SelectList,Ze as SelectOptionItem,Qe as SelectOptionLabel,ue as SelectProvider,ot as SelectToggleButton,it as SelectedItem,ut as SelectedList,me as SelectedListProvider,pe as SelectedProvider,X as SelectionVisibilityMode,te as idFromOption,ee as labelFromValue,Oe as useClearButton,Ae as useMultiSelect,_e as useSelect,xe as useSelectActionContext,Se as useSelectActionGroup,Ce as useSelectButton,ce as useSelectContext,Ve as useSelectControl,we as useSelectInput,de as useSelectInputContext,Le as useSelectItem,ke as useSelectLabel,Pe as useSelectList,ve as useSelectedContext,Ie as useSelectedItem,Re as useSelectedList,ge as useSelectedListContext};
//# sourceMappingURL=index.module.js.map