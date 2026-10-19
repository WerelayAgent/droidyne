(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,60420,49038,e=>{"use strict";var t=e.i(13238),r=e.i(85460),i=e.i(51699),o=e.i(55802),n=e.i(17625),a=e.i(4385),s=e.i(85756),c=e.i(90);let l={eip155:{native:{assetNamespace:"slip44",assetReference:"60"},defaultTokenNamespace:"erc20"},solana:{native:{assetNamespace:"slip44",assetReference:"501"},defaultTokenNamespace:"token"}},u={56:"714",204:"714"};class d extends Error{}async function p(e,t){let r=function(){let{sdkType:e,sdkVersion:t,projectId:r}=c.OptionsController.getSnapshot(),i=new URL("https://rpc.walletconnect.org/v1/json-rpc");return i.searchParams.set("projectId",r),i.searchParams.set("st",e),i.searchParams.set("sv",t),i.searchParams.set("source","fund-wallet"),i.toString()}(),{projectId:i}=c.OptionsController.getSnapshot(),o={jsonrpc:"2.0",id:1,method:e,params:{...t||{},projectId:i}},n=await fetch(r,{method:"POST",body:JSON.stringify(o),headers:{"Content-Type":"application/json"}}),a=await n.json();if(a.error)throw new d(a.error.message);return a}async function h(e){return(await p("reown_getExchanges",e)).result}async function m(e){return(await p("reown_getExchangePayUrl",e)).result}async function f(e){return(await p("reown_getExchangeBuyStatus",e)).result}function g(e,t){let{chainNamespace:r,chainId:i}=s.ParseUtil.parseCaipNetworkId(e),o=l[r];if(!o)throw Error(`Unsupported chain namespace for CAIP-19 formatting: ${r}`);let n=o.native.assetNamespace,a=o.native.assetReference;"native"!==t?(n=o.defaultTokenNamespace,a=t):"eip155"===r&&u[i]&&(a=u[i]);let c=`${r}:${i}`;return`${c}/${n}:${a}`}let y={network:"eip155:8453",asset:"0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},w={ethereumETH:{network:"eip155:1",asset:"native",metadata:{name:"Ethereum",symbol:"ETH",decimals:18}},baseETH:{network:"eip155:8453",asset:"native",metadata:{name:"Ethereum",symbol:"ETH",decimals:18}},baseUSDC:y,baseSepoliaETH:{network:"eip155:84532",asset:"native",metadata:{name:"Ethereum",symbol:"ETH",decimals:18}},ethereumUSDC:{network:"eip155:1",asset:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},arbitrumUSDC:{network:"eip155:42161",asset:"0xaf88d065e77c8cC2239327C5EDb3A432268e5831",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},polygonUSDC:{network:"eip155:137",asset:"0x2791bca1f2de4661ed88a30c99a7a9449aa84174",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},solanaUSDC:{network:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",asset:"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},ethereumUSDT:{network:"eip155:1",asset:"0xdAC17F958D2ee523a2206206994597C13D831ec7",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},optimismUSDT:{network:"eip155:10",asset:"0x94b008aA00579c1307B0EF2c499aD98a8ce58e58",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},arbitrumUSDT:{network:"eip155:42161",asset:"0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},polygonUSDT:{network:"eip155:137",asset:"0xc2132d05d31c914a87c6611c10748aeb04b58e8f",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},solanaUSDT:{network:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",asset:"Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},solanaSOL:{network:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",asset:"native",metadata:{name:"Solana",symbol:"SOL",decimals:9}}};function b(e){return Object.values(w).filter(t=>t.network===e)}e.s(["baseSepoliaUSDC",0,{network:"eip155:84532",asset:"0x036CbD53842c5426634e7929541eC2318f3dCF7e",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},"baseUSDC",0,y,"formatCaip19Asset",0,g,"getBuyStatus",0,f,"getExchanges",0,h,"getPayUrl",0,m,"getPaymentAssetsForNetwork",0,b],49038);var v=e.i(34384),x=e.i(14087),$=e.i(33506),E=e.i(39028);let T={paymentAsset:null,amount:null,tokenAmount:0,priceLoading:!1,error:null,exchanges:[],isLoading:!1,currentPayment:void 0,isPaymentInProgress:!1,paymentId:"",assets:[]},k=(0,t.proxy)(T),S={state:k,subscribe:e=>(0,t.subscribe)(k,()=>e(k)),subscribeKey:(e,t)=>(0,r.subscribeKey)(k,e,t),resetState(){Object.assign(k,{...T})},async getAssetsForNetwork(e){let t=b(e),r=await S.getAssetsImageAndPrice(t),i=t.map(e=>{let t="native"===e.asset?(0,o.getActiveNetworkTokenAddress)():`${e.network}:${e.asset}`,i=r.find(e=>e.fungibles?.[0]?.address?.toLowerCase()===t.toLowerCase());return{...e,price:i?.fungibles?.[0]?.price||1,metadata:{...e.metadata,iconUrl:i?.fungibles?.[0]?.iconUrl}}});return k.assets=i,i},async getAssetsImageAndPrice(e){let t=e.map(e=>"native"===e.asset?(0,o.getActiveNetworkTokenAddress)():`${e.network}:${e.asset}`);return await Promise.all(t.map(e=>v.BlockchainApiController.fetchTokenPrice({addresses:[e]})))},getTokenAmount(){if(!k?.paymentAsset?.price)throw Error("Cannot get token price");let e=i.NumberUtil.bigNumber(k.amount??0).round(8),t=i.NumberUtil.bigNumber(k.paymentAsset.price).round(8);return e.div(t).round(8).toNumber()},setAmount(e){k.amount=e,k.paymentAsset?.price&&(k.tokenAmount=S.getTokenAmount())},setPaymentAsset(e){k.paymentAsset=e},isPayWithExchangeEnabled:()=>c.OptionsController.state.remoteFeatures?.payWithExchange,isPayWithExchangeSupported:()=>S.isPayWithExchangeEnabled()&&x.ChainController.state.activeCaipNetwork&&n.ConstantsUtil.PAY_WITH_EXCHANGE_SUPPORTED_CHAIN_NAMESPACES.includes(x.ChainController.state.activeCaipNetwork.chainNamespace),async fetchExchanges(){try{let e=S.isPayWithExchangeSupported();if(!k.paymentAsset||!e){k.exchanges=[],k.isLoading=!1;return}k.isLoading=!0;let t=await h({page:0,asset:g(k.paymentAsset.network,k.paymentAsset.asset),amount:k.amount?.toString()??"0"});k.exchanges=t.exchanges.slice(0,2)}catch(e){throw E.SnackController.showError("Unable to get exchanges"),Error("Unable to get exchanges")}finally{k.isLoading=!1}},async getPayUrl(e,t){try{let r=Number(t.amount),i=await m({exchangeId:e,asset:g(t.network,t.asset),amount:r.toString(),recipient:`${t.network}:${t.recipient}`});return $.EventsController.sendEvent({type:"track",event:"PAY_EXCHANGE_SELECTED",properties:{exchange:{id:e},configuration:{network:t.network,asset:t.asset,recipient:t.recipient,amount:r},currentPayment:{type:"exchange",exchangeId:e},source:"fund-from-exchange",headless:!1}}),i}catch(e){if(e instanceof Error&&e.message.includes("is not supported"))throw Error("Asset not supported");throw Error(e.message)}},async handlePayWithExchange(e){try{let t=x.ChainController.getAccountData()?.address;if(!t)throw Error("No account connected");if(!k.paymentAsset)throw Error("No payment asset selected");let r=a.CoreHelperUtil.returnOpenHref("","popupWindow","scrollbar=yes,width=480,height=720");if(!r)throw Error("Could not create popup window");k.isPaymentInProgress=!0,k.paymentId=crypto.randomUUID(),k.currentPayment={type:"exchange",exchangeId:e};let{network:i,asset:o}=k.paymentAsset,n={network:i,asset:o,amount:k.tokenAmount,recipient:t},s=await S.getPayUrl(e,n);if(!s){try{r.close()}catch(e){console.error("Unable to close popup window",e)}throw Error("Unable to initiate payment")}k.currentPayment.sessionId=s.sessionId,k.currentPayment.status="IN_PROGRESS",k.currentPayment.exchangeId=e,r.location.href=s.url}catch(e){k.error="Unable to initiate payment",E.SnackController.showError(k.error)}},async waitUntilComplete({exchangeId:e,sessionId:t,paymentId:r,retries:i=20}){let o=await S.getBuyStatus(e,t,r);if("SUCCESS"===o.status||"FAILED"===o.status)return o;if(0===i)throw Error("Unable to get deposit status");return await new Promise(e=>{setTimeout(e,5e3)}),S.waitUntilComplete({exchangeId:e,sessionId:t,paymentId:r,retries:i-1})},async getBuyStatus(e,t,r){try{if(!k.currentPayment)throw Error("No current payment");let i=await f({sessionId:t,exchangeId:e});if(k.currentPayment.status=i.status,"SUCCESS"===i.status||"FAILED"===i.status){let e=x.ChainController.getAccountData()?.address;k.currentPayment.result=i.txHash,k.isPaymentInProgress=!1,$.EventsController.sendEvent({type:"track",event:"SUCCESS"===i.status?"PAY_SUCCESS":"PAY_ERROR",properties:{message:"FAILED"===i.status?a.CoreHelperUtil.parseError(k.error):void 0,source:"fund-from-exchange",paymentId:r,configuration:{network:k.paymentAsset?.network||"",asset:k.paymentAsset?.asset||"",recipient:e||"",amount:k.amount??0},currentPayment:{type:"exchange",exchangeId:k.currentPayment?.exchangeId,sessionId:k.currentPayment?.sessionId,result:i.txHash}}})}return i}catch(e){return{status:"UNKNOWN",txHash:""}}},reset(){k.currentPayment=void 0,k.isPaymentInProgress=!1,k.paymentId="",k.paymentAsset=null,k.amount=0,k.tokenAmount=0,k.priceLoading=!1,k.error=null,k.exchanges=[],k.isLoading=!1}};e.s(["ExchangeController",0,S],60420)},97417,e=>{"use strict";e.i(95126);var t,r,i=e.i(38910),o=e.i(18444);e.i(75353);var n=e.i(72072),a=e.i(1908),s=e.i(26879),c=e.i(53462),l=e.i(48036),u=e.i(54090);s.default.extend(l.default),s.default.extend(u.default);let d={...c.default,name:"en-web3-modal",relativeTime:{future:"in %s",past:"%s ago",s:"%d sec",m:"1 min",mm:"%d min",h:"1 hr",hh:"%d hrs",d:"1 d",dd:"%d d",M:"1 mo",MM:"%d mo",y:"1 yr",yy:"%d yr"}},p=["January","February","March","April","May","June","July","August","September","October","November","December"];s.default.locale("en-web3-modal",d);var h=e.i(14087),m=e.i(4385),f=e.i(33506),g=e.i(90),y=e.i(74157),w=e.i(36721),b=e.i(55802);e.i(9975);var v=e.i(85312);let x=["receive","deposit","borrow","claim"],$=["withdraw","repay","burn"],E={getTransactionGroupTitle(e,t){let r=((e=new Date().toISOString())=>(0,s.default)(e).year())(),i=p[t];return e===r?i:`${i} ${e}`},getTransactionImages(e){let[t]=e;return e?.length>1?e.map(e=>this.getTransactionImage(e)):[this.getTransactionImage(t)]},getTransactionImage:e=>({type:E.getTransactionTransferTokenType(e),url:E.getTransactionImageURL(e)}),getTransactionImageURL(e){let t,r=!!e?.nft_info,i=!!e?.fungible_info;return e&&r?t=e?.nft_info?.content?.preview?.url:e&&i&&(t=e?.fungible_info?.icon?.url),t},getTransactionTransferTokenType:e=>e?.fungible_info?"FUNGIBLE":e?.nft_info?"NFT":void 0,getTransactionDescriptions(e,t){let r=e?.metadata?.operationType,i=t||e?.transfers,o=i&&i.length>0,n=i&&i.length>1,a=o&&i.every(e=>!!e?.fungible_info),[s,c]=i||[],l=this.getTransferDescription(s),u=this.getTransferDescription(c);if(!o)return("send"===r||"receive"===r)&&a?[l=v.UiHelperUtil.getTruncateString({string:e?.metadata.sentFrom,charsStart:4,charsEnd:6,truncate:"middle"}),v.UiHelperUtil.getTruncateString({string:e?.metadata.sentTo,charsStart:4,charsEnd:6,truncate:"middle"})]:[e.metadata.status];if(n)return i?.map(e=>this.getTransferDescription(e));let d="";return x.includes(r)?d="+":$.includes(r)&&(d="-"),[l=d.concat(l)]},getTransferDescription(e){let t="";return e&&(e?.nft_info?t=e?.nft_info?.name||"-":e?.fungible_info&&(t=this.getFungibleTransferDescription(e)||"-")),t},getFungibleTransferDescription(e){return e?[this.getQuantityFixedValue(e?.quantity.numeric),e?.fungible_info?.symbol].join(" ").trim():null},mergeTransfers(e){if(e?.length<=1)return e;let t=this.filterGasFeeTransfers(e).reduce((e,t)=>{let r=t?.fungible_info?.name,i=e.find(({fungible_info:e,direction:i})=>r&&r===e?.name&&i===t.direction);if(i){let e=Number(i.quantity.numeric)+Number(t.quantity.numeric);i.quantity.numeric=e.toString(),i.value=(i.value||0)+(t.value||0)}else e.push(t);return e},[]),r=t;return t.length>2&&(r=t.sort((e,t)=>(t.value||0)-(e.value||0)).slice(0,2)),r=r.sort((e,t)=>"out"===e.direction&&"in"===t.direction?-1:+("in"===e.direction&&"out"===t.direction))},filterGasFeeTransfers(e){let t=e?.reduce((e,t)=>{let r=t?.fungible_info?.name;return r&&(e[r]||(e[r]=[]),e[r].push(t)),e},{}),r=[];return Object.values(t??{}).forEach(e=>{if(1===e.length){let t=e[0];t&&r.push(t)}else{let t=e.filter(e=>"in"===e.direction),i=e.filter(e=>"out"===e.direction);if(1===t.length&&1===i.length){let o=t[0],n=i[0],a=!1;if(o&&n){let e=Number(o.quantity.numeric),t=Number(n.quantity.numeric);t<.1*e?(r.push(o),a=!0):e<.1*t&&(r.push(n),a=!0)}a||r.push(...e)}else{let t=this.filterGasFeesFromTokenGroup(e);r.push(...t)}}}),e?.forEach(e=>{e?.fungible_info?.name||r.push(e)}),r},filterGasFeesFromTokenGroup(e){if(e.length<=1)return e;let t=e?.map(e=>Number(e.quantity.numeric)),r=Math.max(...t);if(Math.min(...t)<.01*r)return e?.filter(e=>Number(e.quantity.numeric)>=.01*r);let i=e?.filter(e=>"in"===e.direction),o=e?.filter(e=>"out"===e.direction);if(1===i.length&&1===o.length){let e=i[0],t=o[0];if(e&&t){let r=Number(e.quantity.numeric),i=Number(t.quantity.numeric);if(i<.1*r)return[e];if(r<.1*i)return[t]}}return e},getQuantityFixedValue:e=>e?parseFloat(e).toFixed(3):null};var T=e.i(52564);e.i(31283),e.i(9563),e.i(70133),e.i(48423);var k=i;e.i(83601);var S=e.i(18153);e.i(83704);var C=e.i(15627);(t=r||(r={})).approve="approved",t.bought="bought",t.borrow="borrowed",t.burn="burnt",t.cancel="canceled",t.claim="claimed",t.deploy="deployed",t.deposit="deposited",t.execute="executed",t.mint="minted",t.receive="received",t.repay="repaid",t.send="sent",t.sell="sold",t.stake="staked",t.trade="swapped",t.unstake="unstaked",t.withdraw="withdrawn";var R=i;e.i(4505),e.i(28194),e.i(39696);var P=e.i(33222);let A=P.css`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.core.glass010};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  :host([data-no-images='true']) > wui-flex {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[3]} !important;
  }

  :host > wui-flex wui-image {
    display: block;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }

  .swap-fallback-container {
    position: absolute;
    inset: 0;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .swap-fallback-container.first {
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-fallback-container.last {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }

  wui-flex.status-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
    border-radius: ${({borderRadius:e})=>e[4]};
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    box-shadow: 0 0 0 2px ${({tokens:e})=>e.theme.backgroundPrimary};
    overflow: hidden;
    width: 16px;
    height: 16px;
  }
`;var D=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let I=class extends R.LitElement{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""},this.failedImageUrls=new Set}handleImageError(e){return t=>{t.stopPropagation(),this.failedImageUrls.add(e),this.requestUpdate()}}render(){let[e,t]=this.images;this.images.length||(this.dataset.noImages="true");let r=e?.type==="NFT",i=t?.url?"NFT"===t.type:r;return this.style.cssText=`
    --local-left-border-radius: ${r?"var(--apkt-borderRadius-3)":"var(--apkt-borderRadius-5)"};
    --local-right-border-radius: ${i?"var(--apkt-borderRadius-3)":"var(--apkt-borderRadius-5)"};
    `,o.html`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){let[e,t]=this.images;return 2===this.images.length&&(e?.url||t?.url)?this.renderSwapImages(e,t):e?.url&&!this.failedImageUrls.has(e.url)?this.renderSingleImage(e):e?.type==="NFT"?this.renderPlaceholderIcon("nftPlaceholder"):this.renderPlaceholderIcon("coinPlaceholder")}renderSwapImages(e,t){return o.html`<div class="swap-images-container">
      ${e?.url?this.renderImageOrFallback(e,"first",!0):null}
      ${t?.url?this.renderImageOrFallback(t,"last",!0):null}
    </div>`}renderSingleImage(e){return this.renderImageOrFallback(e,void 0,!1)}renderImageOrFallback(e,t,r=!1){return e.url?this.failedImageUrls.has(e.url)?r&&t?this.renderFallbackIconInContainer(t):this.renderFallbackIcon():o.html`<wui-image
      src=${e.url}
      alt="Transaction image"
      @onLoadError=${this.handleImageError(e.url)}
    ></wui-image>`:null}renderFallbackIconInContainer(e){return o.html`<div class="swap-fallback-container ${e}">${this.renderFallbackIcon()}</div>`}renderFallbackIcon(){return o.html`<wui-icon
      size="xl"
      weight="regular"
      color="default"
      name="networkPlaceholder"
    ></wui-icon>`}renderPlaceholderIcon(e){return o.html`<wui-icon size="xl" weight="regular" color="default" name=${e}></wui-icon>`}templateIcon(){let e,t="accent-primary";return(e=this.getIcon(),this.status&&(t=this.getStatusColor()),e)?o.html`
      <wui-flex alignItems="center" justifyContent="center" class="status-box">
        <wui-icon-box size="sm" color=${t} icon=${e}></wui-icon-box>
      </wui-flex>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():"trade"===this.type?"swapHorizontal":"approve"===this.type?"checkmark":"cancel"===this.type?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success";case"failed":return"error";case"pending":return"inverse";default:return"accent-primary"}}};I.styles=[A],D([(0,n.property)()],I.prototype,"type",void 0),D([(0,n.property)()],I.prototype,"status",void 0),D([(0,n.property)()],I.prototype,"direction",void 0),D([(0,n.property)({type:Boolean})],I.prototype,"onlyDirectionIcon",void 0),D([(0,n.property)({type:Array})],I.prototype,"images",void 0),D([(0,n.property)({type:Object})],I.prototype,"secondImage",void 0),D([(0,a.state)()],I.prototype,"failedImageUrls",void 0),I=D([(0,T.customElement)("wui-transaction-visual")],I);let U=P.css`
  :host {
    width: 100%;
  }

  :host > wui-flex:first-child {
    align-items: center;
    column-gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[1]} ${({spacing:e})=>e[2]};
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`;var O=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let M=class extends k.LitElement{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[]}render(){return o.html`
      <wui-flex>
        <wui-transaction-visual
          .status=${this.status}
          direction=${(0,S.ifDefined)(this.direction)}
          type=${this.type}
          .onlyDirectionIcon=${this.onlyDirectionIcon}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="1">
          <wui-text variant="lg-medium" color="primary">
            ${r[this.type]||this.type}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="sm-medium" color="secondary"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){let e=this.descriptions?.[0];return e?o.html`
          <wui-text variant="md-regular" color="secondary">
            <span>${e}</span>
          </wui-text>
        `:null}templateSecondDescription(){let e=this.descriptions?.[1];return e?o.html`
          <wui-icon class="description-separator-icon" size="sm" name="arrowRight"></wui-icon>
          <wui-text variant="md-regular" color="secondary">
            <span>${e}</span>
          </wui-text>
        `:null}};M.styles=[C.resetStyles,U],O([(0,n.property)()],M.prototype,"type",void 0),O([(0,n.property)({type:Array})],M.prototype,"descriptions",void 0),O([(0,n.property)()],M.prototype,"date",void 0),O([(0,n.property)({type:Boolean})],M.prototype,"onlyDirectionIcon",void 0),O([(0,n.property)()],M.prototype,"status",void 0),O([(0,n.property)()],M.prototype,"direction",void 0),O([(0,n.property)({type:Array})],M.prototype,"images",void 0),M=O([(0,T.customElement)("wui-transaction-list-item")],M);var N=i;e.i(42308),e.i(66191);var j=i;let _=P.css`
  wui-flex {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }

  wui-image {
    border-radius: ${({borderRadius:e})=>e[128]};
  }

  .fallback-icon {
    color: ${({tokens:e})=>e.theme.iconInverse};
    border-radius: ${({borderRadius:e})=>e[3]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  .direction-icon,
  .status-image {
    position: absolute;
    right: 0;
    bottom: 0;
    border-radius: ${({borderRadius:e})=>e[128]};
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
  }

  .direction-icon {
    padding: ${({spacing:e})=>e["01"]};
    color: ${({tokens:e})=>e.core.iconSuccess};

    background-color: color-mix(
      in srgb,
      ${({tokens:e})=>e.core.textSuccess} 30%,
      ${({tokens:e})=>e.theme.backgroundPrimary} 70%
    );
  }

  /* -- Sizes --------------------------------------------------- */
  :host([data-size='sm']) > wui-image:not(.status-image),
  :host([data-size='sm']) > wui-flex {
    width: 24px;
    height: 24px;
  }

  :host([data-size='lg']) > wui-image:not(.status-image),
  :host([data-size='lg']) > wui-flex {
    width: 40px;
    height: 40px;
  }

  :host([data-size='sm']) .fallback-icon {
    height: 16px;
    width: 16px;
    padding: ${({spacing:e})=>e[1]};
  }

  :host([data-size='lg']) .fallback-icon {
    height: 32px;
    width: 32px;
    padding: ${({spacing:e})=>e[1]};
  }

  :host([data-size='sm']) .direction-icon,
  :host([data-size='sm']) .status-image {
    transform: translate(40%, 30%);
  }

  :host([data-size='lg']) .direction-icon,
  :host([data-size='lg']) .status-image {
    transform: translate(40%, 10%);
  }

  :host([data-size='sm']) .status-image {
    height: 14px;
    width: 14px;
  }

  :host([data-size='lg']) .status-image {
    height: 20px;
    width: 20px;
  }

  /* -- Crop effects --------------------------------------------------- */
  .swap-crop-left-image,
  .swap-crop-right-image {
    position: absolute;
    top: 0;
    bottom: 0;
  }

  .swap-crop-left-image {
    left: 0;
    clip-path: inset(0px calc(50% + 1.5px) 0px 0%);
  }

  .swap-crop-right-image {
    right: 0;
    clip-path: inset(0px 0px 0px calc(50% + 1.5px));
  }
`;var L=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let z={sm:"xxs",lg:"md"},F=class extends j.LitElement{constructor(){super(...arguments),this.type="approve",this.size="lg",this.statusImageUrl="",this.images=[]}render(){return o.html`<wui-flex>${this.templateVisual()} ${this.templateIcon()}</wui-flex>`}templateVisual(){switch(this.dataset.size=this.size,this.type){case"trade":return this.swapTemplate();case"fiat":return this.fiatTemplate();case"unknown":return this.unknownTemplate();default:return this.tokenTemplate()}}swapTemplate(){let[e,t]=this.images;return 2===this.images.length&&(e||t)?o.html`
        <wui-image class="swap-crop-left-image" src=${e} alt="Swap image"></wui-image>
        <wui-image class="swap-crop-right-image" src=${t} alt="Swap image"></wui-image>
      `:e?o.html`<wui-image src=${e} alt="Swap image"></wui-image>`:null}fiatTemplate(){return o.html`<wui-icon
      class="fallback-icon"
      size=${z[this.size]}
      name="dollar"
    ></wui-icon>`}unknownTemplate(){return o.html`<wui-icon
      class="fallback-icon"
      size=${z[this.size]}
      name="questionMark"
    ></wui-icon>`}tokenTemplate(){let[e]=this.images;return e?o.html`<wui-image src=${e} alt="Token image"></wui-image> `:o.html`<wui-icon
      class="fallback-icon"
      name=${"nft"===this.type?"image":"coinPlaceholder"}
    ></wui-icon>`}templateIcon(){return this.statusImageUrl?o.html`<wui-image
        class="status-image"
        src=${this.statusImageUrl}
        alt="Status image"
      ></wui-image>`:o.html`<wui-icon
      class="direction-icon"
      size=${z[this.size]}
      name=${this.getTemplateIcon()}
    ></wui-icon>`}getTemplateIcon(){return"trade"===this.type?"arrowClockWise":"arrowBottom"}};F.styles=[_],L([(0,n.property)()],F.prototype,"type",void 0),L([(0,n.property)()],F.prototype,"size",void 0),L([(0,n.property)()],F.prototype,"statusImageUrl",void 0),L([(0,n.property)({type:Array})],F.prototype,"images",void 0),F=L([(0,T.customElement)("wui-transaction-thumbnail")],F);let q=P.css`
  :host > wui-flex:first-child {
    gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[3]};
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`,B=class extends N.LitElement{render(){return o.html`
      <wui-flex alignItems="center" .padding=${["1","2","1","2"]}>
        <wui-shimmer width="40px" height="40px" rounded></wui-shimmer>
        <wui-flex flexDirection="column" gap="1">
          <wui-shimmer width="124px" height="16px" rounded></wui-shimmer>
          <wui-shimmer width="60px" height="14px" rounded></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" rounded></wui-shimmer>
      </wui-flex>
    `}};B.styles=[C.resetStyles,q],B=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a}([(0,T.customElement)("wui-transaction-list-item-loader")],B);var H=e.i(25436);let W=P.css`
  :host {
    min-height: 100%;
  }

  .group-container[last-group='true'] {
    padding-bottom: ${({spacing:e})=>e["3"]};
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: ${({borderRadius:e})=>e["3"]};
  }

  .contentContainer > .textContent {
    width: 65%;
  }

  .emptyContainer {
    height: 100%;
  }
`;var Y=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let G="last-transaction",J=class extends i.LitElement{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.page="activity",this.caipAddress=h.ChainController.state.activeCaipAddress,this.transactionsByYear=w.TransactionsController.state.transactionsByYear,this.loading=w.TransactionsController.state.loading,this.empty=w.TransactionsController.state.empty,this.next=w.TransactionsController.state.next,w.TransactionsController.clearCursor(),this.unsubscribe.push(h.ChainController.subscribeKey("activeCaipAddress",e=>{e&&this.caipAddress!==e&&(w.TransactionsController.resetTransactions(),w.TransactionsController.fetchTransactions(e)),this.caipAddress=e}),h.ChainController.subscribeKey("activeCaipNetwork",()=>{this.updateTransactionView()}),w.TransactionsController.subscribe(e=>{this.transactionsByYear=e.transactionsByYear,this.loading=e.loading,this.empty=e.empty,this.next=e.next}))}firstUpdated(){this.updateTransactionView(),this.createPaginationObserver()}updated(){this.setPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return o.html` ${this.empty?null:this.templateTransactionsByYear()}
    ${this.loading?this.templateLoading():null}
    ${!this.loading&&this.empty?this.templateEmpty():null}`}updateTransactionView(){w.TransactionsController.resetTransactions(),this.caipAddress&&w.TransactionsController.fetchTransactions(m.CoreHelperUtil.getPlainAddress(this.caipAddress))}templateTransactionsByYear(){return Object.keys(this.transactionsByYear).sort().reverse().map(e=>{let t=parseInt(e,10),r=Array(12).fill(null).map((e,r)=>({groupTitle:E.getTransactionGroupTitle(t,r),transactions:this.transactionsByYear[t]?.[r]})).filter(({transactions:e})=>e).reverse();return r.map(({groupTitle:e,transactions:t},i)=>{let n=i===r.length-1;return t?o.html`
          <wui-flex
            flexDirection="column"
            class="group-container"
            last-group="${n?"true":"false"}"
            data-testid="month-indexes"
          >
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["2","3","3","3"]}
            >
              <wui-text variant="md-medium" color="secondary" data-testid="group-title">
                ${e}
              </wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="2">
              ${this.templateTransactions(t,n)}
            </wui-flex>
          </wui-flex>
        `:null})})}templateRenderTransaction(e,t){let{date:r,descriptions:i,direction:n,images:a,status:s,type:c,transfers:l,isAllNFT:u}=this.getTransactionListItemProps(e);return o.html`
      <wui-transaction-list-item
        date=${r}
        .direction=${n}
        id=${t&&this.next?G:""}
        status=${s}
        type=${c}
        .images=${a}
        .onlyDirectionIcon=${u||1===l.length}
        .descriptions=${i}
      ></wui-transaction-list-item>
    `}templateTransactions(e,t){return e.map((r,i)=>{let n=t&&i===e.length-1;return o.html`${this.templateRenderTransaction(r,n)}`})}emptyStateActivity(){return o.html`<wui-flex
      class="emptyContainer"
      flexGrow="1"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      .padding=${["10","5","10","5"]}
      gap="5"
      data-testid="empty-activity-state"
    >
      <wui-icon-box color="default" icon="wallet" size="xl"></wui-icon-box>
      <wui-flex flexDirection="column" alignItems="center" gap="2">
        <wui-text align="center" variant="lg-medium" color="primary">No Transactions yet</wui-text>
        <wui-text align="center" variant="lg-regular" color="secondary"
          >Start trading on dApps <br />
          to grow your wallet!</wui-text
        >
      </wui-flex>
    </wui-flex>`}emptyStateAccount(){return o.html`<wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="4"
      data-testid="empty-account-state"
    >
      <wui-icon-box icon="swapHorizontal" size="lg" color="default"></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="2"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text variant="md-regular" align="center" color="primary">No activity yet</wui-text>
        <wui-text variant="sm-regular" align="center" color="secondary"
          >Your next transactions will appear here</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)}>Trade</wui-link>
    </wui-flex>`}templateEmpty(){return"account"===this.page?o.html`${this.emptyStateAccount()}`:o.html`${this.emptyStateActivity()}`}templateLoading(){return"activity"===this.page?o.html` <wui-flex flexDirection="column" width="100%">
        <wui-flex .padding=${["2","3","3","3"]}>
          <wui-shimmer width="70px" height="16px" rounded></wui-shimmer>
        </wui-flex>
        <wui-flex flexDirection="column" gap="2" width="100%">
          ${Array(7).fill(o.html` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(e=>e)}
        </wui-flex>
      </wui-flex>`:null}onReceiveClick(){y.RouterController.push("WalletReceive")}createPaginationObserver(){let{projectId:e}=g.OptionsController.state;this.paginationObserver=new IntersectionObserver(([t])=>{t?.isIntersecting&&!this.loading&&(w.TransactionsController.fetchTransactions(m.CoreHelperUtil.getPlainAddress(this.caipAddress)),f.EventsController.sendEvent({type:"track",event:"LOAD_MORE_TRANSACTIONS",properties:{address:m.CoreHelperUtil.getPlainAddress(this.caipAddress),projectId:e,cursor:this.next,isSmartAccount:(0,b.getPreferredAccountType)(h.ChainController.state.activeChain)===H.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT}}))},{}),this.setPaginationObserver()}setPaginationObserver(){this.paginationObserver?.disconnect();let e=this.shadowRoot?.querySelector(`#${G}`);e&&this.paginationObserver?.observe(e)}getTransactionListItemProps(e){let t=((e,t="DD MMM")=>(0,s.default)(e).format(t))(e?.metadata?.minedAt),r=E.mergeTransfers(e?.transfers||[]),i=E.getTransactionDescriptions(e,r),o=r?.[0],n=!!o&&r?.every(e=>!!e.nft_info),a=E.getTransactionImages(r);return{date:t,direction:o?.direction,descriptions:i,isAllNFT:n,images:a,status:e.metadata?.status,transfers:r,type:e.metadata?.operationType}}};J.styles=W,Y([(0,n.property)()],J.prototype,"page",void 0),Y([(0,a.state)()],J.prototype,"caipAddress",void 0),Y([(0,a.state)()],J.prototype,"transactionsByYear",void 0),Y([(0,a.state)()],J.prototype,"loading",void 0),Y([(0,a.state)()],J.prototype,"empty",void 0),Y([(0,a.state)()],J.prototype,"next",void 0),J=Y([(0,T.customElement)("w3m-activity-list")],J),e.s([],97417)},83458,e=>{"use strict";e.i(95126);var t=e.i(38910),r=e.i(18444);e.i(75353);var i=e.i(72072);e.i(83601);var o=e.i(18153);e.i(4505),e.i(83704);var n=e.i(15627),a=e.i(52564);e.i(45111);var s=e.i(40697);let c=s.css`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;var l=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let u=class extends t.LitElement{constructor(){super(...arguments),this.disabled=!1}render(){return r.html`
      <wui-input-text
        type="email"
        placeholder="Email"
        icon="mail"
        size="lg"
        .disabled=${this.disabled}
        .value=${this.value}
        data-testid="wui-email-input"
        tabIdx=${(0,o.ifDefined)(this.tabIdx)}
      ></wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?r.html`<wui-text variant="sm-regular" color="error">${this.errorMessage}</wui-text>`:null}};u.styles=[n.resetStyles,c],l([(0,i.property)()],u.prototype,"errorMessage",void 0),l([(0,i.property)({type:Boolean})],u.prototype,"disabled",void 0),l([(0,i.property)()],u.prototype,"value",void 0),l([(0,i.property)()],u.prototype,"tabIdx",void 0),u=l([(0,a.customElement)("wui-email-input")],u),e.s([],83458)},9563,e=>{"use strict";e.i(39696),e.s([])},17514,e=>{"use strict";e.i(45111),e.s([])},33664,e=>{"use strict";e.i(95126);var t=e.i(38910),r=e.i(18444);e.i(75353);var i=e.i(72072),o=e.i(1908),n=e.i(51699);e.i(4505),e.i(28194),e.i(83704),e.i(66191);var a=e.i(15627),s=e.i(52564),c=e.i(33222);let l=c.css`
  :host {
    width: 100%;
  }

  button {
    padding: ${({spacing:e})=>e[3]};
    display: flex;
    gap: ${({spacing:e})=>e[3]};
    justify-content: space-between;
    width: 100%;
    border-radius: ${({borderRadius:e})=>e[4]};
    background-color: transparent;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  button:focus-visible:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent040};
  }

  button[data-clickable='false'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-image,
  wui-icon {
    width: ${({spacing:e})=>e[10]};
    height: ${({spacing:e})=>e[10]};
  }

  wui-image {
    border-radius: ${({borderRadius:e})=>e[16]};
  }

  .token-name-container {
    flex: 1;
  }
`;var u=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let d=class extends t.LitElement{constructor(){super(...arguments),this.tokenName="",this.tokenImageUrl="",this.tokenValue=0,this.tokenAmount="0.0",this.tokenCurrency="",this.clickable=!1,this.imageError=!1}render(){return r.html`
      <button data-clickable=${String(this.clickable)}>
        <wui-flex gap="2" alignItems="center">
          ${this.visualTemplate()}
          <wui-flex
            flexDirection="column"
            justifyContent="space-between"
            gap="1"
            class="token-name-container"
          >
            <wui-text variant="md-regular" color="primary" lineClamp="1">
              ${this.tokenName}
            </wui-text>
            <wui-text variant="sm-regular-mono" color="secondary">
              ${n.NumberUtil.formatNumberToLocalString(this.tokenAmount,4)} ${this.tokenCurrency}
            </wui-text>
          </wui-flex>
        </wui-flex>
        <wui-flex
          flexDirection="column"
          justifyContent="space-between"
          gap="1"
          alignItems="flex-end"
          width="auto"
        >
          <wui-text variant="md-regular-mono" color="primary"
            >$${this.tokenValue.toFixed(2)}</wui-text
          >
          <wui-text variant="sm-regular-mono" color="secondary">
            ${n.NumberUtil.formatNumberToLocalString(this.tokenAmount,4)}
          </wui-text>
        </wui-flex>
      </button>
    `}updated(e){e.has("tokenImageUrl")&&(this.imageError=!1)}visualTemplate(){return this.tokenName&&this.tokenImageUrl&&!this.imageError?r.html`<wui-image
        alt=${this.tokenName}
        src=${this.tokenImageUrl}
        @onLoadError=${this.handleImageError}
      ></wui-image>`:r.html`<wui-icon name="coinPlaceholder" color="default"></wui-icon>`}handleImageError(){this.imageError=!0}};d.styles=[a.resetStyles,a.elementStyles,l],u([(0,i.property)()],d.prototype,"tokenName",void 0),u([(0,i.property)()],d.prototype,"tokenImageUrl",void 0),u([(0,i.property)({type:Number})],d.prototype,"tokenValue",void 0),u([(0,i.property)()],d.prototype,"tokenAmount",void 0),u([(0,i.property)()],d.prototype,"tokenCurrency",void 0),u([(0,i.property)({type:Boolean})],d.prototype,"clickable",void 0),u([(0,o.state)()],d.prototype,"imageError",void 0),d=u([(0,s.customElement)("wui-list-token")],d),e.s([],33664)},53647,e=>{"use strict";e.i(95126);var t=e.i(38910),r=e.i(18444);e.i(75353);var i=e.i(72072);e.i(28194);var o=e.i(15627),n=e.i(85312),a=e.i(52564),s=e.i(33222);let c=s.css`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
    border-radius: ${({borderRadius:e})=>e[16]};
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  :host([data-variant='generated']) {
    background: radial-gradient(
      var(--local-radial-circle),
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`;var l=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let u=class extends t.LitElement{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0,this.size="xl"}render(){let e={inherit:"inherit",xxs:"3",xs:"5",sm:"6",md:"8",mdl:"8",lg:"10",xl:"16",xxl:"20"};return this.style.cssText=`
    --local-width: var(--apkt-spacing-${e[this.size??"xl"]});
    --local-height: var(--apkt-spacing-${e[this.size??"xl"]});
    `,r.html`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",r.html`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";let e=n.UiHelperUtil.generateAvatarColors(this.address);return this.style.cssText+=`
 ${e}`,null}return this.dataset.variant="default",null}};u.styles=[o.resetStyles,c],l([(0,i.property)()],u.prototype,"imageSrc",void 0),l([(0,i.property)()],u.prototype,"alt",void 0),l([(0,i.property)()],u.prototype,"address",void 0),l([(0,i.property)()],u.prototype,"size",void 0),u=l([(0,a.customElement)("wui-avatar")],u),e.s([],53647)},45111,e=>{"use strict";e.i(95126);var t=e.i(38910),r=e.i(18444);e.i(75353);var i=e.i(72072);e.i(83601);var o=e.i(18153);e.i(60589);var n=e.i(86492);e.i(4505),e.i(83704);var a=e.i(15627),s=e.i(52564),c=e.i(33222);let l=c.css`
  :host {
    position: relative;
    width: 100%;
    display: inline-flex;
    flex-direction: column;
    gap: ${({spacing:e})=>e[3]};
    color: ${({tokens:e})=>e.theme.textPrimary};
    caret-color: ${({tokens:e})=>e.core.textAccentPrimary};
  }

  .wui-input-text-container {
    position: relative;
    display: flex;
  }

  input {
    width: 100%;
    border-radius: ${({borderRadius:e})=>e[4]};
    color: inherit;
    background: transparent;
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
    caret-color: ${({tokens:e})=>e.core.textAccentPrimary};
    padding: ${({spacing:e})=>e[3]} ${({spacing:e})=>e[3]}
      ${({spacing:e})=>e[3]} ${({spacing:e})=>e[10]};
    font-size: ${({textSize:e})=>e.large};
    line-height: ${({typography:e})=>e["lg-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["lg-regular"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.regular};
  }

  input[data-size='lg'] {
    padding: ${({spacing:e})=>e[4]} ${({spacing:e})=>e[3]}
      ${({spacing:e})=>e[4]} ${({spacing:e})=>e[10]};
  }

  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      border: 1px solid ${({tokens:e})=>e.theme.borderSecondary};
    }
  }

  input:disabled {
    cursor: unset;
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
  }

  input::placeholder {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  input:focus:enabled {
    border: 1px solid ${({tokens:e})=>e.theme.borderSecondary};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    -webkit-box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent040};
    -moz-box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent040};
    box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent040};
  }

  div.wui-input-text-container:has(input:disabled) {
    opacity: 0.5;
  }

  wui-icon.wui-input-text-left-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    left: ${({spacing:e})=>e[4]};
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  button.wui-input-text-submit-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({spacing:e})=>e[3]};
    width: 24px;
    height: 24px;
    border: none;
    background: transparent;
    border-radius: ${({borderRadius:e})=>e[2]};
    color: ${({tokens:e})=>e.core.textAccentPrimary};
  }

  button.wui-input-text-submit-button:disabled {
    opacity: 1;
  }

  button.wui-input-text-submit-button.loading wui-icon {
    animation: spin 1s linear infinite;
  }

  button.wui-input-text-submit-button:hover {
    background: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  input:has(+ .wui-input-text-submit-button) {
    padding-right: ${({spacing:e})=>e[12]};
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input[type='search']::-webkit-search-decoration,
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-results-button,
  input[type='search']::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  /* -- Keyframes --------------------------------------------------- */
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;var u=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let d=class extends t.LitElement{constructor(){super(...arguments),this.inputElementRef=(0,n.createRef)(),this.disabled=!1,this.loading=!1,this.placeholder="",this.type="text",this.value="",this.size="md"}render(){return r.html` <div class="wui-input-text-container">
        ${this.templateLeftIcon()}
        <input
          data-size=${this.size}
          ${(0,n.ref)(this.inputElementRef)}
          data-testid="wui-input-text"
          type=${this.type}
          enterkeyhint=${(0,o.ifDefined)(this.enterKeyHint)}
          ?disabled=${this.disabled}
          placeholder=${this.placeholder}
          @input=${this.dispatchInputChangeEvent.bind(this)}
          @keydown=${this.onKeyDown}
          .value=${this.value||""}
        />
        ${this.templateSubmitButton()}
        <slot class="wui-input-text-slot"></slot>
      </div>
      ${this.templateError()} ${this.templateWarning()}`}templateLeftIcon(){return this.icon?r.html`<wui-icon
        class="wui-input-text-left-icon"
        size="md"
        data-size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}templateSubmitButton(){return this.onSubmit?r.html`<button
        class="wui-input-text-submit-button ${this.loading?"loading":""}"
        @click=${this.onSubmit?.bind(this)}
        ?disabled=${this.disabled||this.loading}
      >
        ${this.loading?r.html`<wui-icon name="spinner" size="md"></wui-icon>`:r.html`<wui-icon name="chevronRight" size="md"></wui-icon>`}
      </button>`:null}templateError(){return this.errorText?r.html`<wui-text variant="sm-regular" color="error">${this.errorText}</wui-text>`:null}templateWarning(){return this.warningText?r.html`<wui-text variant="sm-regular" color="warning">${this.warningText}</wui-text>`:null}dispatchInputChangeEvent(){this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};d.styles=[a.resetStyles,a.elementStyles,l],u([(0,i.property)()],d.prototype,"icon",void 0),u([(0,i.property)({type:Boolean})],d.prototype,"disabled",void 0),u([(0,i.property)({type:Boolean})],d.prototype,"loading",void 0),u([(0,i.property)()],d.prototype,"placeholder",void 0),u([(0,i.property)()],d.prototype,"type",void 0),u([(0,i.property)()],d.prototype,"value",void 0),u([(0,i.property)()],d.prototype,"errorText",void 0),u([(0,i.property)()],d.prototype,"warningText",void 0),u([(0,i.property)()],d.prototype,"onSubmit",void 0),u([(0,i.property)()],d.prototype,"size",void 0),u([(0,i.property)({attribute:!1})],d.prototype,"onKeyDown",void 0),d=u([(0,s.customElement)("wui-input-text")],d),e.s([],45111)},26879,(e,t,r)=>{e.e,t.exports=function(){"use strict";var e="millisecond",t="second",r="minute",i="hour",o="week",n="month",a="quarter",s="year",c="date",l="Invalid Date",u=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,d=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p=function(e,t,r){var i=String(e);return!i||i.length>=t?e:""+Array(t+1-i.length).join(r)+e},h="en",m={};m[h]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}};var f="$isDayjsObject",g=function(e){return e instanceof v||!(!e||!e[f])},y=function e(t,r,i){var o;if(!t)return h;if("string"==typeof t){var n=t.toLowerCase();m[n]&&(o=n),r&&(m[n]=r,o=n);var a=t.split("-");if(!o&&a.length>1)return e(a[0])}else{var s=t.name;m[s]=t,o=s}return!i&&o&&(h=o),o||!i&&h},w=function(e,t){if(g(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new v(r)},b={s:p,z:function(e){var t=-e.utcOffset(),r=Math.abs(t);return(t<=0?"+":"-")+p(Math.floor(r/60),2,"0")+":"+p(r%60,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var i=12*(r.year()-t.year())+(r.month()-t.month()),o=t.clone().add(i,n),a=r-o<0,s=t.clone().add(i+(a?-1:1),n);return+(-(i+(r-o)/(a?o-s:s-o))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(l){return({M:n,y:s,w:o,d:"day",D:c,h:i,m:r,s:t,ms:e,Q:a})[l]||String(l||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}};b.l=y,b.i=g,b.w=function(e,t){return w(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var v=function(){function p(e){this.$L=y(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[f]=!0}var h=p.prototype;return h.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(b.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var i=t.match(u);if(i){var o=i[2]-1||0,n=(i[7]||"0").substring(0,3);return r?new Date(Date.UTC(i[1],o,i[3]||1,i[4]||0,i[5]||0,i[6]||0,n)):new Date(i[1],o,i[3]||1,i[4]||0,i[5]||0,i[6]||0,n)}}return new Date(t)}(e),this.init()},h.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},h.$utils=function(){return b},h.isValid=function(){return this.$d.toString()!==l},h.isSame=function(e,t){var r=w(e);return this.startOf(t)<=r&&r<=this.endOf(t)},h.isAfter=function(e,t){return w(e)<this.startOf(t)},h.isBefore=function(e,t){return this.endOf(t)<w(e)},h.$g=function(e,t,r){return b.u(e)?this[t]:this.set(r,e)},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(e,a){var l=this,u=!!b.u(a)||a,d=b.p(e),p=function(e,t){var r=b.w(l.$u?Date.UTC(l.$y,t,e):new Date(l.$y,t,e),l);return u?r:r.endOf("day")},h=function(e,t){return b.w(l.toDate()[e].apply(l.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(t)),l)},m=this.$W,f=this.$M,g=this.$D,y="set"+(this.$u?"UTC":"");switch(d){case s:return u?p(1,0):p(31,11);case n:return u?p(1,f):p(0,f+1);case o:var w=this.$locale().weekStart||0,v=(m<w?m+7:m)-w;return p(u?g-v:g+(6-v),f);case"day":case c:return h(y+"Hours",0);case i:return h(y+"Minutes",1);case r:return h(y+"Seconds",2);case t:return h(y+"Milliseconds",3);default:return this.clone()}},h.endOf=function(e){return this.startOf(e,!1)},h.$set=function(o,a){var l,u=b.p(o),d="set"+(this.$u?"UTC":""),p=((l={}).day=d+"Date",l[c]=d+"Date",l[n]=d+"Month",l[s]=d+"FullYear",l[i]=d+"Hours",l[r]=d+"Minutes",l[t]=d+"Seconds",l[e]=d+"Milliseconds",l)[u],h="day"===u?this.$D+(a-this.$W):a;if(u===n||u===s){var m=this.clone().set(c,1);m.$d[p](h),m.init(),this.$d=m.set(c,Math.min(this.$D,m.daysInMonth())).$d}else p&&this.$d[p](h);return this.init(),this},h.set=function(e,t){return this.clone().$set(e,t)},h.get=function(e){return this[b.p(e)]()},h.add=function(e,a){var c,l=this;e=Number(e);var u=b.p(a),d=function(t){var r=w(l);return b.w(r.date(r.date()+Math.round(t*e)),l)};if(u===n)return this.set(n,this.$M+e);if(u===s)return this.set(s,this.$y+e);if("day"===u)return d(1);if(u===o)return d(7);var p=((c={})[r]=6e4,c[i]=36e5,c[t]=1e3,c)[u]||1,h=this.$d.getTime()+e*p;return b.w(h,this)},h.subtract=function(e,t){return this.add(-1*e,t)},h.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||l;var i=e||"YYYY-MM-DDTHH:mm:ssZ",o=b.z(this),n=this.$H,a=this.$m,s=this.$M,c=r.weekdays,u=r.months,p=r.meridiem,h=function(e,r,o,n){return e&&(e[r]||e(t,i))||o[r].slice(0,n)},m=function(e){return b.s(n%12||12,e,"0")},f=p||function(e,t,r){var i=e<12?"AM":"PM";return r?i.toLowerCase():i};return i.replace(d,function(e,i){return i||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return b.s(t.$y,4,"0");case"M":return s+1;case"MM":return b.s(s+1,2,"0");case"MMM":return h(r.monthsShort,s,u,3);case"MMMM":return h(u,s);case"D":return t.$D;case"DD":return b.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return h(r.weekdaysMin,t.$W,c,2);case"ddd":return h(r.weekdaysShort,t.$W,c,3);case"dddd":return c[t.$W];case"H":return String(n);case"HH":return b.s(n,2,"0");case"h":return m(1);case"hh":return m(2);case"a":return f(n,a,!0);case"A":return f(n,a,!1);case"m":return String(a);case"mm":return b.s(a,2,"0");case"s":return String(t.$s);case"ss":return b.s(t.$s,2,"0");case"SSS":return b.s(t.$ms,3,"0");case"Z":return o}return null}(e)||o.replace(":","")})},h.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},h.diff=function(e,c,l){var u,d=this,p=b.p(c),h=w(e),m=(h.utcOffset()-this.utcOffset())*6e4,f=this-h,g=function(){return b.m(d,h)};switch(p){case s:u=g()/12;break;case n:u=g();break;case a:u=g()/3;break;case o:u=(f-m)/6048e5;break;case"day":u=(f-m)/864e5;break;case i:u=f/36e5;break;case r:u=f/6e4;break;case t:u=f/1e3;break;default:u=f}return l?u:b.a(u)},h.daysInMonth=function(){return this.endOf(n).$D},h.$locale=function(){return m[this.$L]},h.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),i=y(e,t,!0);return i&&(r.$L=i),r},h.clone=function(){return b.w(this.$d,this)},h.toDate=function(){return new Date(this.valueOf())},h.toJSON=function(){return this.isValid()?this.toISOString():null},h.toISOString=function(){return this.$d.toISOString()},h.toString=function(){return this.$d.toUTCString()},p}(),x=v.prototype;return w.prototype=x,[["$ms",e],["$s",t],["$m",r],["$H",i],["$W","day"],["$M",n],["$y",s],["$D",c]].forEach(function(e){x[e[1]]=function(t){return this.$g(t,e[0],e[1])}}),w.extend=function(e,t){return e.$i||(e(t,v,w),e.$i=!0),w},w.locale=y,w.isDayjs=g,w.unix=function(e){return w(1e3*e)},w.en=m[h],w.Ls=m,w.p={},w}()},53462,(e,t,r)=>{e.e,t.exports={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}}},48036,(e,t,r)=>{e.e,t.exports=function(e,t,r){e=e||{};var i=t.prototype,o={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function n(e,t,r,o){return i.fromToBase(e,t,r,o)}r.en.relativeTime=o,i.fromToBase=function(t,i,n,a,s){for(var c,l,u,d=n.$locale().relativeTime||o,p=e.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],h=p.length,m=0;m<h;m+=1){var f=p[m];f.d&&(c=a?r(t).diff(n,f.d,!0):n.diff(t,f.d,!0));var g=(e.rounding||Math.round)(Math.abs(c));if(u=c>0,g<=f.r||!f.r){g<=1&&m>0&&(f=p[m-1]);var y=d[f.l];s&&(g=s(""+g)),l="string"==typeof y?y.replace("%d",g):y(g,i,f.l,u);break}}if(i)return l;var w=u?d.future:d.past;return"function"==typeof w?w(l):w.replace("%s",l)},i.to=function(e,t){return n(e,t,this,!0)},i.from=function(e,t){return n(e,t,this)};var a=function(e){return e.$u?r.utc():r()};i.toNow=function(e){return this.to(a(this),e)},i.fromNow=function(e){return this.from(a(this),e)}}},54090,(e,t,r)=>{e.e,t.exports=function(e,t,r){r.updateLocale=function(e,t){var i=r.Ls[e];if(i)return(t?Object.keys(t):[]).forEach(function(e){i[e]=t[e]}),i}}},60589,86492,e=>{"use strict";var t=e.i(18444);let{I:r}=t._$LH;var i=e.i(26964);let o=(e,t)=>{let r=e._$AN;if(void 0===r)return!1;for(let e of r)e._$AO?.(t,!1),o(e,t);return!0},n=e=>{let t,r;do{if(void 0===(t=e._$AM))break;(r=t._$AN).delete(e),e=t}while(0===r?.size)},a=e=>{for(let t;t=e._$AM;e=t){let r=t._$AN;if(void 0===r)t._$AN=r=new Set;else if(r.has(e))break;r.add(e),l(t)}};function s(e){void 0!==this._$AN?(n(this),this._$AM=e,a(this)):this._$AM=e}function c(e,t=!1,r=0){let i=this._$AH,a=this._$AN;if(void 0!==a&&0!==a.size)if(t)if(Array.isArray(i))for(let e=r;e<i.length;e++)o(i[e],!1),n(i[e]);else null!=i&&(o(i,!1),n(i));else o(this,e)}let l=e=>{e.type==i.PartType.CHILD&&(e._$AP??=c,e._$AQ??=s)};class u extends i.Directive{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,r){super._$AT(e,t,r),a(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(o(this,e),n(this))}setValue(e){if(void 0===this._$Ct.strings)this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}class d{}let p=new WeakMap,h=(0,i.directive)(class extends u{render(e){return t.nothing}update(e,[r]){let i=r!==this.G;return i&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.G=r,this.ht=e.options?.host,this.rt(this.ct=e.element)),t.nothing}rt(e){if(void 0!==this.G)if(this.isConnected||(e=void 0),"function"==typeof this.G){let t=this.ht??globalThis,r=p.get(t);void 0===r&&(r=new WeakMap,p.set(t,r)),void 0!==r.get(this.G)&&this.G.call(this.ht,void 0),r.set(this.G,e),void 0!==e&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return"function"==typeof this.G?p.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});e.s(["createRef",0,()=>new d,"ref",0,h],86492),e.s([],60589)},33183,e=>{"use strict";var t=e.i(70021),r=e.i(66010);e.s(["createTransport",0,function({key:e,methods:i,name:o,request:n,retryCount:a=3,retryDelay:s=150,timeout:c,type:l},u){let d=(0,r.uid)();return{config:{key:e,methods:i,name:o,request:n,retryCount:a,retryDelay:s,timeout:c,type:l},request:(0,t.buildRequest)(n,{methods:i,retryCount:a,retryDelay:s,uid:d}),value:u}}])},56794,e=>{"use strict";var t=e.i(2392),r=e.i(41798),i=e.i(30579),o=e.i(68105),n=e.i(33183);let a=0,s=new WeakMap;e.s(["http",0,function(e,c={}){let{batch:l,fetchFn:u,fetchOptions:d,key:p="http",maxResponseBodySize:h,methods:m,name:f="HTTP JSON-RPC",onFetchRequest:g,onFetchResponse:y,retryDelay:w,raw:b}=c;return({chain:v,retryCount:x,timeout:$})=>{let{batchSize:E=1e3,wait:T=0}="object"==typeof l?l:{},k=c.retryCount??x,S=$??c.timeout??1e4,C=e||v?.rpcUrls.default.http[0];if(!C)throw new r.UrlRequiredError;let R=(0,o.getHttpRpcClient)(C,{fetchFn:u,fetchOptions:d,maxResponseBodySize:h,onRequest:g,onResponse:y,timeout:S});return(0,n.createTransport)({key:p,methods:m,name:f,async request({method:e,params:r},o){let n={method:e,params:r},c=o?.signal?{signal:o.signal}:void 0,{schedule:u}=(0,i.createBatchScheduler)({id:`${C}.${function(e){if(!e)return"default";let t=s.get(e);if(void 0!==t)return t;let r=a++;return s.set(e,r),r}(o?.signal)}`,wait:T,shouldSplitBatch:e=>e.length>E,fn:e=>R.request({body:e,fetchOptions:c}),sort:(e,t)=>e.id-t.id}),d=async e=>l?u(e):[await R.request({body:e,fetchOptions:c})],[{error:p,result:h}]=await d(n);if(b)return{error:p,result:h};if(p)throw new t.RpcRequestError({body:n,error:p,url:C});return h},retryCount:k,retryDelay:w,timeout:S,type:"http"},{fetchOptions:d,url:C})}}])},7397,12942,e=>{"use strict";var t=e.i(25852),r=e.i(2392);class i extends t.BaseError{constructor(e,{code:t,docsPath:i,metaMessages:o,name:n,shortMessage:a}){super(a,{cause:e,docsPath:i,metaMessages:o||e?.metaMessages,name:n||"RpcError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name=n||e.name,this.code=e instanceof r.RpcRequestError?e.code:t??-1}}class o extends i{constructor(e,t){super(e,t),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=t.data}}class n extends i{constructor(e){super(e,{code:n.code,name:"ParseRpcError",shortMessage:"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."})}}Object.defineProperty(n,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32700});class a extends i{constructor(e){super(e,{code:a.code,name:"InvalidRequestRpcError",shortMessage:"JSON is not a valid request object."})}}Object.defineProperty(a,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32600});class s extends i{constructor(e,{method:t}={}){super(e,{code:s.code,name:"MethodNotFoundRpcError",shortMessage:`The method${t?` "${t}"`:""} does not exist / is not available.`})}}Object.defineProperty(s,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32601});class c extends i{constructor(e){super(e,{code:c.code,name:"InvalidParamsRpcError",shortMessage:"Invalid parameters were provided to the RPC method.\nDouble check you have provided the correct parameters."})}}Object.defineProperty(c,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32602});class l extends i{constructor(e){super(e,{code:l.code,name:"InternalRpcError",shortMessage:"An internal error was received."})}}Object.defineProperty(l,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32603});class u extends i{constructor(e){super(e,{code:u.code,name:"InvalidInputRpcError",shortMessage:"Missing or invalid parameters.\nDouble check you have provided the correct parameters."})}}Object.defineProperty(u,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32e3});class d extends i{constructor(e){super(e,{code:d.code,name:"ResourceNotFoundRpcError",shortMessage:"Requested resource not found."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceNotFoundRpcError"})}}Object.defineProperty(d,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32001});class p extends i{constructor(e){super(e,{code:p.code,name:"ResourceUnavailableRpcError",shortMessage:"Requested resource not available."})}}Object.defineProperty(p,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32002});class h extends i{constructor(e){super(e,{code:h.code,name:"TransactionRejectedRpcError",shortMessage:"Transaction creation failed."})}}Object.defineProperty(h,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32003});class m extends i{constructor(e,{method:t}={}){super(e,{code:m.code,name:"MethodNotSupportedRpcError",shortMessage:`Method${t?` "${t}"`:""} is not supported.`})}}Object.defineProperty(m,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32004});class f extends i{constructor(e){super(e,{code:f.code,name:"LimitExceededRpcError",shortMessage:"Request exceeds defined limit."})}}Object.defineProperty(f,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32005});class g extends i{constructor(e){super(e,{code:g.code,name:"JsonRpcVersionUnsupportedError",shortMessage:"Version of JSON-RPC protocol is not supported."})}}Object.defineProperty(g,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32006});class y extends o{constructor(e){super(e,{code:y.code,name:"UserRejectedRequestError",shortMessage:"User rejected the request."})}}Object.defineProperty(y,"code",{enumerable:!0,configurable:!0,writable:!0,value:4001});class w extends o{constructor(e){super(e,{code:w.code,name:"UnauthorizedProviderError",shortMessage:"The requested method and/or account has not been authorized by the user."})}}Object.defineProperty(w,"code",{enumerable:!0,configurable:!0,writable:!0,value:4100});class b extends o{constructor(e,{method:t}={}){super(e,{code:b.code,name:"UnsupportedProviderMethodError",shortMessage:`The Provider does not support the requested method${t?` " ${t}"`:""}.`})}}Object.defineProperty(b,"code",{enumerable:!0,configurable:!0,writable:!0,value:4200});class v extends o{constructor(e){super(e,{code:v.code,name:"ProviderDisconnectedError",shortMessage:"The Provider is disconnected from all chains."})}}Object.defineProperty(v,"code",{enumerable:!0,configurable:!0,writable:!0,value:4900});class x extends o{constructor(e){super(e,{code:x.code,name:"ChainDisconnectedError",shortMessage:"The Provider is not connected to the requested chain."})}}Object.defineProperty(x,"code",{enumerable:!0,configurable:!0,writable:!0,value:4901});class $ extends o{constructor(e){super(e,{code:$.code,name:"SwitchChainError",shortMessage:"An error occurred when attempting to switch chain."})}}Object.defineProperty($,"code",{enumerable:!0,configurable:!0,writable:!0,value:4902});class E extends o{constructor(e){super(e,{code:E.code,name:"UnsupportedNonOptionalCapabilityError",shortMessage:"This Wallet does not support a capability that was not marked as optional."})}}Object.defineProperty(E,"code",{enumerable:!0,configurable:!0,writable:!0,value:5700});class T extends o{constructor(e){super(e,{code:T.code,name:"UnsupportedChainIdError",shortMessage:"This Wallet does not support the requested chain ID."})}}Object.defineProperty(T,"code",{enumerable:!0,configurable:!0,writable:!0,value:5710});class k extends o{constructor(e){super(e,{code:k.code,name:"DuplicateIdError",shortMessage:"There is already a bundle submitted with this ID."})}}Object.defineProperty(k,"code",{enumerable:!0,configurable:!0,writable:!0,value:5720});class S extends o{constructor(e){super(e,{code:S.code,name:"UnknownBundleIdError",shortMessage:"This bundle id is unknown / has not been submitted"})}}Object.defineProperty(S,"code",{enumerable:!0,configurable:!0,writable:!0,value:5730});class C extends o{constructor(e){super(e,{code:C.code,name:"BundleTooLargeError",shortMessage:"The call bundle is too large for the Wallet to process."})}}Object.defineProperty(C,"code",{enumerable:!0,configurable:!0,writable:!0,value:5740});class R extends o{constructor(e){super(e,{code:R.code,name:"AtomicReadyWalletRejectedUpgradeError",shortMessage:"The Wallet can support atomicity after an upgrade, but the user rejected the upgrade."})}}Object.defineProperty(R,"code",{enumerable:!0,configurable:!0,writable:!0,value:5750});class P extends o{constructor(e){super(e,{code:P.code,name:"AtomicityNotSupportedError",shortMessage:"The wallet does not support atomic execution but the request requires it."})}}Object.defineProperty(P,"code",{enumerable:!0,configurable:!0,writable:!0,value:5760});class A extends o{constructor(e){super(e,{code:A.code,name:"WalletConnectSessionSettlementError",shortMessage:"WalletConnect session settlement failed."})}}Object.defineProperty(A,"code",{enumerable:!0,configurable:!0,writable:!0,value:7e3}),e.s(["AtomicReadyWalletRejectedUpgradeError",0,R,"AtomicityNotSupportedError",0,P,"BundleTooLargeError",0,C,"ChainDisconnectedError",0,x,"DuplicateIdError",0,k,"InternalRpcError",0,l,"InvalidInputRpcError",0,u,"InvalidParamsRpcError",0,c,"InvalidRequestRpcError",0,a,"JsonRpcVersionUnsupportedError",0,g,"LimitExceededRpcError",0,f,"MethodNotFoundRpcError",0,s,"MethodNotSupportedRpcError",0,m,"ParseRpcError",0,n,"ProviderDisconnectedError",0,v,"ResourceNotFoundRpcError",0,d,"ResourceUnavailableRpcError",0,p,"SwitchChainError",0,$,"TransactionRejectedRpcError",0,h,"UnauthorizedProviderError",0,w,"UnknownBundleIdError",0,S,"UnknownRpcError",0,class extends i{constructor(e){super(e,{name:"UnknownRpcError",shortMessage:"An unknown RPC error occurred."})}},"UnsupportedChainIdError",0,T,"UnsupportedNonOptionalCapabilityError",0,E,"UnsupportedProviderMethodError",0,b,"UserRejectedRequestError",0,y,"WalletConnectSessionSettlementError",0,A],7397);var D=e.i(10570);async function I(e,{signal:t}={}){return new Promise((r,i)=>{if(t?.aborted)return void i((0,D.getAbortError)(t));let o=()=>t?.removeEventListener("abort",a),n=setTimeout(()=>{o(),r()},e),a=()=>{clearTimeout(n),o(),i((0,D.getAbortError)(t))};t?.addEventListener("abort",a,{once:!0})})}e.s(["wait",0,I],12942)},41798,68105,e=>{"use strict";var t=e.i(25852);class r extends t.BaseError{constructor(){super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",{docsPath:"/docs/clients/intro",name:"UrlRequiredError"})}}e.s(["UrlRequiredError",0,r],41798);var i=e.i(2392),o=e.i(10570),n=e.i(2639);let a={current:0,take(){return this.current++},reset(){this.current=0}};async function s(e,{maxResponseBodySize:t}){if(!1===t)return e.text();let r=e.headers.get("Content-Length");if(r){let e=Number(r);if(e>t)throw new i.ResponseBodyTooLargeError({maxSize:t,size:e})}if(!e.body){let r=await e.text(),o=new TextEncoder().encode(r).length;if(o>t)throw new i.ResponseBodyTooLargeError({maxSize:t,size:o});return r}let o=e.body.getReader(),n=new TextDecoder,a="",c=0;try{for(;;){let{done:e,value:r}=await o.read();if(e)break;if((c+=r.byteLength)>t)throw await o.cancel(),new i.ResponseBodyTooLargeError({maxSize:t,size:c});a+=n.decode(r,{stream:!0})}return a+=n.decode()}finally{o.releaseLock()}}e.s(["getHttpRpcClient",0,function(e,t={}){let{url:r,headers:c}=function(e){try{let t=new URL(e),r=(()=>{if(t.username){let e=`${decodeURIComponent(t.username)}:${decodeURIComponent(t.password)}`;return t.username="",t.password="",{url:t.toString(),headers:{Authorization:`Basic ${btoa(e)}`}}}})();return{url:t.toString(),...r}}catch{return{url:e}}}(e);return{async request(e){let{body:l,fetchFn:u=t.fetchFn??fetch,maxResponseBodySize:d=t.maxResponseBodySize??0xa00000,onRequest:p=t.onRequest,onResponse:h=t.onResponse,timeout:m=t.timeout??1e4}=e,f={...t.fetchOptions??{},...e.fetchOptions??{}},{headers:g,method:y,signal:w}=f;try{let e,{response:t,responseBody:b}=await function(e,{errorInstance:t=Error("timed out"),timeout:r,signal:i}){return new Promise((n,a)=>{(async()=>{let s,c=new AbortController;try{r>0&&(s=setTimeout(()=>{i?c.abort():a(t)},r)),n(await e({signal:c?.signal||null}))}catch(e){if(c?.signal.aborted&&(0,o.isAbortError)(e))return void a(t);a(e)}finally{clearTimeout(s)}})()})}(async({signal:e})=>{let{signal:t,cleanup:i}=function(e){let t=e.filter(e=>!!e);if(t.length<2)return{signal:t[0]??null,cleanup:()=>{}};let r=new AbortController,i=()=>{o(),r.abort(t.find(e=>e.aborted)?.reason)},o=()=>{for(let e of t)e.removeEventListener("abort",i)};for(let e of t){if(e.aborted){o(),r.abort(e.reason);break}e.addEventListener("abort",i)}return{signal:r.signal,cleanup:o}}([w,m>0?e:null]);try{let e={...f,body:Array.isArray(l)?(0,n.stringify)(l.map(e=>({jsonrpc:"2.0",id:e.id??a.take(),...e}))):(0,n.stringify)({jsonrpc:"2.0",id:l.id??a.take(),...l}),headers:{...c,"Content-Type":"application/json",...g},method:y||"POST",signal:t},i=new Request(r,e),o=await p?.(i,e)??{...e,url:r},m=await u(o.url??r,o);h&&await h(m);let w=await s(m,{maxResponseBodySize:d});return{response:m,responseBody:w}}finally{i()}},{errorInstance:new i.TimeoutError({body:l,url:r}),timeout:m,signal:!0});if(t.headers.get("Content-Type")?.startsWith("application/json"))e=JSON.parse(b);else{e=b;try{e=JSON.parse(e||"{}")}catch(r){if(t.ok)throw r;e={error:e}}}if(!t.ok){if("number"==typeof e.error?.code&&"string"==typeof e.error?.message)return e;throw new i.HttpRequestError({body:l,details:(0,n.stringify)(e.error)||t.statusText,headers:t.headers,status:t.status,url:r})}return e}catch(e){if(w?.aborted)throw(0,o.getAbortError)(w);if((0,o.isAbortError)(e)||e instanceof i.HttpRequestError||e instanceof i.ResponseBodyTooLargeError||e instanceof i.TimeoutError)throw e;throw new i.HttpRequestError({body:l,cause:e,url:r})}}}}],68105)},70021,e=>{"use strict";var t=e.i(25852),r=e.i(2392),i=e.i(7397),o=e.i(10570),n=e.i(10098),a=e.i(42152),s=e.i(2639);e.s(["buildRequest",0,function(e,c={}){return async(l,u={})=>{let{dedupe:d=!1,methods:p,retryDelay:h=150,retryCount:m=3,signal:f,uid:g}={...c,...u},{method:y}=l;if(p?.exclude?.includes(y)||p?.include&&!p.include.includes(y))throw new i.MethodNotSupportedRpcError(Error("method not supported"),{method:y});if(f?.aborted)throw(0,o.getAbortError)(f);let w=d?function(e,t=0){let r=0xdeadbeef^t,i=0x41c6ce57^t;for(let t=0;t<e.length;t++){let o=e.charCodeAt(t);r=Math.imul(r^o,0x9e3779b1),i=Math.imul(i^o,0x5f356495)}return r=Math.imul(r^r>>>16,0x85ebca6b)^Math.imul(i^i>>>16,0xc2b2ae35),(0x100000000*(2097151&(i=Math.imul(i^i>>>16,0x85ebca6b)^Math.imul(r^r>>>16,0xc2b2ae35)))+(r>>>0)).toString(36)}(`${g}.${(0,s.stringify)(l)}`):void 0;return(0,n.withDedupe)(()=>(0,a.withRetry)(async()=>{try{return await e(l,f?{signal:f}:void 0)}catch(e){if(f?.aborted)throw(0,o.getAbortError)(f);if((0,o.isAbortError)(e))throw e;switch(e.code){case i.ParseRpcError.code:throw new i.ParseRpcError(e);case i.InvalidRequestRpcError.code:throw new i.InvalidRequestRpcError(e);case i.MethodNotFoundRpcError.code:throw new i.MethodNotFoundRpcError(e,{method:l.method});case i.InvalidParamsRpcError.code:throw new i.InvalidParamsRpcError(e);case i.InternalRpcError.code:throw new i.InternalRpcError(e);case i.InvalidInputRpcError.code:throw new i.InvalidInputRpcError(e);case i.ResourceNotFoundRpcError.code:throw new i.ResourceNotFoundRpcError(e);case i.ResourceUnavailableRpcError.code:throw new i.ResourceUnavailableRpcError(e);case i.TransactionRejectedRpcError.code:throw new i.TransactionRejectedRpcError(e);case i.MethodNotSupportedRpcError.code:throw new i.MethodNotSupportedRpcError(e,{method:l.method});case i.LimitExceededRpcError.code:throw new i.LimitExceededRpcError(e);case i.JsonRpcVersionUnsupportedError.code:throw new i.JsonRpcVersionUnsupportedError(e);case i.UserRejectedRequestError.code:throw new i.UserRejectedRequestError(e);case i.UnauthorizedProviderError.code:throw new i.UnauthorizedProviderError(e);case i.UnsupportedProviderMethodError.code:throw new i.UnsupportedProviderMethodError(e);case i.ProviderDisconnectedError.code:throw new i.ProviderDisconnectedError(e);case i.ChainDisconnectedError.code:throw new i.ChainDisconnectedError(e);case i.SwitchChainError.code:throw new i.SwitchChainError(e);case i.UnsupportedNonOptionalCapabilityError.code:throw new i.UnsupportedNonOptionalCapabilityError(e);case i.UnsupportedChainIdError.code:throw new i.UnsupportedChainIdError(e);case i.DuplicateIdError.code:throw new i.DuplicateIdError(e);case i.UnknownBundleIdError.code:throw new i.UnknownBundleIdError(e);case i.BundleTooLargeError.code:throw new i.BundleTooLargeError(e);case i.AtomicReadyWalletRejectedUpgradeError.code:throw new i.AtomicReadyWalletRejectedUpgradeError(e);case i.AtomicityNotSupportedError.code:throw new i.AtomicityNotSupportedError(e);case 5e3:throw new i.UserRejectedRequestError(e);case i.WalletConnectSessionSettlementError.code:throw new i.WalletConnectSessionSettlementError(e);default:if(e instanceof t.BaseError)throw e;throw new i.UnknownRpcError(e)}}},{delay:({count:e,error:t})=>{if(t&&t instanceof r.HttpRequestError){let e=t?.headers?.get("Retry-After");if(e?.match(/\d/))return 1e3*Number.parseInt(e,10)}return~~(1<<e)*h},retryCount:m,signal:f,shouldRetry:({error:e})=>{var t;return t=e,!(0,o.isAbortError)(t)&&("code"in t&&"number"==typeof t.code?-1===t.code||t.code===i.LimitExceededRpcError.code||t.code===i.InternalRpcError.code||429===t.code||-32007===t.code:!(t instanceof r.HttpRequestError)||!t.status||403===t.status||408===t.status||413===t.status||429===t.status||500===t.status||502===t.status||503===t.status||504===t.status||!1)}}),{enabled:d,id:w})}}])},10098,e=>{"use strict";let t=new(e.i(11091)).LruMap(8192);e.s(["withDedupe",0,function(e,{enabled:r=!0,id:i}){if(!r||!i)return e();if(t.get(i))return t.get(i);let o=e().finally(()=>t.delete(i));return t.set(i,o),o}])},42152,e=>{"use strict";var t=e.i(10570),r=e.i(12942);e.s(["withRetry",0,function(e,{delay:i=100,retryCount:o=2,shouldRetry:n=()=>!0,signal:a}={}){return new Promise((s,c)=>{let l=async({count:u=0}={})=>{if(a?.aborted)return void c((0,t.getAbortError)(a));let d=async({error:e})=>{let t="function"==typeof i?i({count:u,error:e}):i;if(t)try{await (0,r.wait)(t,{signal:a})}catch(e){c(e);return}return l({count:u+1})};try{let t=await e();s(t)}catch(e){if(a?.aborted)return void c((0,t.getAbortError)(a));if((0,t.isAbortError)(e))return void c(e);if(u<o&&await n({count:u,error:e}))return d({error:e});c(e)}};l().catch(c)})}])},66010,e=>{"use strict";let t,r=256;e.s(["uid",0,function(e=11){if(!t||r+e>512){t="",r=0;for(let e=0;e<256;e++)t+=(256+256*Math.random()|0).toString(16).substring(1)}return t.substring(r,r+++e)}])}]);