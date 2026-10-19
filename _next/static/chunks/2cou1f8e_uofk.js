(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,21759,e=>{"use strict";var t=e.i(14087),i=e.i(98560),r=e.i(4385),o=e.i(33506),n=e.i(36207),l=e.i(90),a=e.i(74157),s=e.i(76142),c=e.i(39028);e.i(9975);var u=e.i(52564),p=e.i(1284);let h=class extends p.W3mEmailOtpWidget{constructor(){super(...arguments),this.onOtpSubmit=async e=>{try{if(this.authConnector){let r=t.ChainController.state.activeChain,u=i.ConnectionController.getConnections(r),p=l.OptionsController.state.remoteFeatures?.multiWallet,h=u.length>0;if(await this.authConnector.provider.connectOtp({otp:e}),o.EventsController.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),r)await i.ConnectionController.connectExternal(this.authConnector,r);else throw Error("Active chain is not set on ChainController");if(l.OptionsController.state.remoteFeatures?.emailCapture)return;if(l.OptionsController.state.siwx){await s.SIWXUtil.isAuthenticated()&&n.ModalController.close();return}if(h&&p){a.RouterController.replace("ProfileWallets"),c.SnackController.showSuccess("New Wallet Added");return}n.ModalController.close()}}catch(e){throw o.EventsController.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL",properties:{message:r.CoreHelperUtil.parseError(e)}}),e}},this.onOtpResend=async e=>{this.authConnector&&(await this.authConnector.provider.connectEmail({email:e}),o.EventsController.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}))}}};h=function(e,t,i,r){var o,n=arguments.length,l=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(l=(n<3?o(l):n>3?o(t,i,l):o(t,i))||l);return n>3&&l&&Object.defineProperty(t,i,l),l}([(0,u.customElement)("w3m-email-verify-otp-view")],h),e.s(["W3mEmailVerifyOtpView",0,h],66086),e.i(95126);var d=e.i(38910),m=e.i(18444);e.i(75353);var f=e.i(1908),w=e.i(78674);e.i(31283),e.i(9563),e.i(70133),e.i(48423);var g=e.i(33222);let v=g.css`
  wui-icon-box {
    height: ${({spacing:e})=>e["16"]};
    width: ${({spacing:e})=>e["16"]};
  }
`;var E=function(e,t,i,r){var o,n=arguments.length,l=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(l=(n<3?o(l):n>3?o(t,i,l):o(t,i))||l);return n>3&&l&&Object.defineProperty(t,i,l),l};let y=class extends d.LitElement{constructor(){super(),this.email=a.RouterController.state.data?.email,this.authConnector=w.ConnectorController.getAuthConnector(),this.loading=!1,this.listenForDeviceApproval()}render(){if(!this.email)throw Error("w3m-email-verify-device-view: No email provided");if(!this.authConnector)throw Error("w3m-email-verify-device-view: No auth connector provided");return m.html`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["6","3","6","3"]}
        gap="4"
      >
        <wui-icon-box size="xl" color="accent-primary" icon="sealCheck"></wui-icon-box>

        <wui-flex flexDirection="column" alignItems="center" gap="3">
          <wui-flex flexDirection="column" alignItems="center">
            <wui-text variant="md-regular" color="primary">
              Approve the login link we sent to
            </wui-text>
            <wui-text variant="md-regular" color="primary"><b>${this.email}</b></wui-text>
          </wui-flex>

          <wui-text variant="sm-regular" color="secondary" align="center">
            The code expires in 20 minutes
          </wui-text>

          <wui-flex alignItems="center" id="w3m-resend-section" gap="2">
            <wui-text variant="sm-regular" color="primary" align="center">
              Didn't receive it?
            </wui-text>
            <wui-link @click=${this.onResendCode.bind(this)} .disabled=${this.loading}>
              Resend email
            </wui-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}async listenForDeviceApproval(){if(this.authConnector)try{await this.authConnector.provider.connectDevice(),o.EventsController.sendEvent({type:"track",event:"DEVICE_REGISTERED_FOR_EMAIL"}),o.EventsController.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),a.RouterController.replace("EmailVerifyOtp",{email:this.email})}catch(e){a.RouterController.goBack()}}async onResendCode(){try{if(!this.loading){if(!this.authConnector||!this.email)throw Error("w3m-email-login-widget: Unable to resend email");this.loading=!0,await this.authConnector.provider.connectEmail({email:this.email}),this.listenForDeviceApproval(),c.SnackController.showSuccess("Code email resent")}}catch(e){c.SnackController.showError(e)}finally{this.loading=!1}}};y.styles=v,E([(0,f.state)()],y.prototype,"loading",void 0),y=E([(0,u.customElement)("w3m-email-verify-device-view")],y),e.s(["W3mEmailVerifyDeviceView",0,y],40916);var C=d;e.i(60589);var b=e.i(86492);e.i(38366),e.i(83458);var O=e.i(40697);let x=O.css`
  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }
`;var I=function(e,t,i,r){var o,n=arguments.length,l=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(l=(n<3?o(l):n>3?o(t,i,l):o(t,i))||l);return n>3&&l&&Object.defineProperty(t,i,l),l};let R=class extends C.LitElement{constructor(){super(...arguments),this.formRef=(0,b.createRef)(),this.initialEmail=a.RouterController.state.data?.email??"",this.redirectView=a.RouterController.state.data?.redirectView,this.email="",this.loading=!1}firstUpdated(){this.formRef.value?.addEventListener("keydown",e=>{"Enter"===e.key&&this.onSubmitEmail(e)})}render(){return m.html`
      <wui-flex flexDirection="column" padding="4" gap="4">
        <form ${(0,b.ref)(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
          <wui-email-input
            value=${this.initialEmail}
            .disabled=${this.loading}
            @inputChange=${this.onEmailInputChange.bind(this)}
          >
          </wui-email-input>
          <input type="submit" hidden />
        </form>
        ${this.buttonsTemplate()}
      </wui-flex>
    `}onEmailInputChange(e){this.email=e.detail}async onSubmitEmail(e){try{if(this.loading)return;this.loading=!0,e.preventDefault();let t=w.ConnectorController.getAuthConnector();if(!t)throw Error("w3m-update-email-wallet: Auth connector not found");let i=await t.provider.updateEmail({email:this.email});o.EventsController.sendEvent({type:"track",event:"EMAIL_EDIT"}),"VERIFY_SECONDARY_OTP"===i.action?a.RouterController.push("UpdateEmailSecondaryOtp",{email:this.initialEmail,newEmail:this.email,redirectView:this.redirectView}):a.RouterController.push("UpdateEmailPrimaryOtp",{email:this.initialEmail,newEmail:this.email,redirectView:this.redirectView})}catch(e){c.SnackController.showError(e),this.loading=!1}}buttonsTemplate(){let e=!this.loading&&this.email.length>3&&this.email!==this.initialEmail;return this.redirectView?m.html`
      <wui-flex gap="3">
        <wui-button size="md" variant="neutral" fullWidth @click=${a.RouterController.goBack}>
          Cancel
        </wui-button>

        <wui-button
          size="md"
          variant="accent-primary"
          fullWidth
          @click=${this.onSubmitEmail.bind(this)}
          .disabled=${!e}
          .loading=${this.loading}
        >
          Save
        </wui-button>
      </wui-flex>
    `:m.html`
        <wui-button
          size="md"
          variant="accent-primary"
          fullWidth
          @click=${this.onSubmitEmail.bind(this)}
          .disabled=${!e}
          .loading=${this.loading}
        >
          Save
        </wui-button>
      `}};R.styles=x,I([(0,f.state)()],R.prototype,"email",void 0),I([(0,f.state)()],R.prototype,"loading",void 0),R=I([(0,u.customElement)("w3m-update-email-wallet-view")],R),e.s(["W3mUpdateEmailWalletView",0,R],78575);var T=p;let A=class extends T.W3mEmailOtpWidget{constructor(){super(),this.email=a.RouterController.state.data?.email,this.onOtpSubmit=async e=>{try{this.authConnector&&(await this.authConnector.provider.updateEmailPrimaryOtp({otp:e}),o.EventsController.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),a.RouterController.replace("UpdateEmailSecondaryOtp",a.RouterController.state.data))}catch(e){throw o.EventsController.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL",properties:{message:r.CoreHelperUtil.parseError(e)}}),e}},this.onStartOver=()=>{a.RouterController.replace("UpdateEmailWallet",a.RouterController.state.data)}}};A=function(e,t,i,r){var o,n=arguments.length,l=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(l=(n<3?o(l):n>3?o(t,i,l):o(t,i))||l);return n>3&&l&&Object.defineProperty(t,i,l),l}([(0,u.customElement)("w3m-update-email-primary-otp-view")],A),e.s(["W3mUpdateEmailPrimaryOtpView",0,A],47700);var S=p;let $=class extends S.W3mEmailOtpWidget{constructor(){super(),this.email=a.RouterController.state.data?.newEmail,this.redirectView=a.RouterController.state.data?.redirectView,this.onOtpSubmit=async e=>{try{this.authConnector&&(await this.authConnector.provider.updateEmailSecondaryOtp({otp:e}),o.EventsController.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),this.redirectView&&a.RouterController.reset(this.redirectView))}catch(e){throw o.EventsController.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL",properties:{message:r.CoreHelperUtil.parseError(e)}}),e}},this.onStartOver=()=>{a.RouterController.replace("UpdateEmailWallet",a.RouterController.state.data)}}};$=function(e,t,i,r){var o,n=arguments.length,l=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(l=(n<3?o(l):n>3?o(t,i,l):o(t,i))||l);return n>3&&l&&Object.defineProperty(t,i,l),l}([(0,u.customElement)("w3m-update-email-secondary-otp-view")],$),e.s(["W3mUpdateEmailSecondaryOtpView",0,$],44312);var k=d,P=e.i(64819),D=e.i(55215),L=function(e,t,i,r){var o,n=arguments.length,l=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(l=(n<3?o(l):n>3?o(t,i,l):o(t,i))||l);return n>3&&l&&Object.defineProperty(t,i,l),l};let V=class extends k.LitElement{constructor(){super(),this.authConnector=w.ConnectorController.getAuthConnector(),this.isEmailEnabled=l.OptionsController.state.remoteFeatures?.email,this.isAuthEnabled=this.checkIfAuthEnabled(w.ConnectorController.state.connectors),this.connectors=w.ConnectorController.state.connectors,w.ConnectorController.subscribeKey("connectors",e=>{this.connectors=e,this.isAuthEnabled=this.checkIfAuthEnabled(this.connectors)})}render(){if(!this.isEmailEnabled)throw Error("w3m-email-login-view: Email is not enabled");if(!this.isAuthEnabled)throw Error("w3m-email-login-view: No auth connector provided");return m.html`<wui-flex flexDirection="column" .padding=${["1","3","3","3"]} gap="4">
      <w3m-email-login-widget></w3m-email-login-widget>
    </wui-flex> `}checkIfAuthEnabled(e){let t=e.filter(e=>e.type===D.ConstantsUtil.CONNECTOR_TYPE_AUTH).map(e=>e.chain);return P.ConstantsUtil.AUTH_CONNECTOR_SUPPORTED_CHAINS.some(e=>t.includes(e))}};L([(0,f.state)()],V.prototype,"connectors",void 0),V=L([(0,u.customElement)("w3m-email-login-view")],V),e.s(["W3mEmailLoginView",0,V],66052),e.s([],17069),e.i(17069),e.i(66086),e.i(40916),e.i(78575),e.i(47700),e.i(44312),e.i(66052),e.s(["W3mEmailLoginView",0,V,"W3mEmailOtpWidget",()=>p.W3mEmailOtpWidget,"W3mEmailVerifyDeviceView",0,y,"W3mEmailVerifyOtpView",0,h,"W3mUpdateEmailPrimaryOtpView",0,A,"W3mUpdateEmailSecondaryOtpView",0,$,"W3mUpdateEmailWalletView",0,R],21759)},1284,e=>{"use strict";e.i(95126);var t,i=e.i(38910),r=e.i(18444);e.i(75353);var o=e.i(1908),n=e.i(78674),l=e.i(4385),a=e.i(74157),s=e.i(39028);e.i(9975);var c=e.i(52564);e.i(31283),e.i(70133),e.i(83350);var u=i,p=e.i(72072);e.i(66191);var h=e.i(15627),d=e.i(85312),m=i,f=e.i(33222);let w=f.css`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 48px;
    height: 48px;
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
    font-family: ${({fontFamily:e})=>e.regular};
    font-size: ${({textSize:e})=>e.large};
    line-height: 18px;
    letter-spacing: -0.16px;
    text-align: center;
    color: ${({tokens:e})=>e.theme.textPrimary};
    caret-color: ${({tokens:e})=>e.core.textAccentPrimary};
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      border-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      box-shadow ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, border-color, box-shadow;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: ${({spacing:e})=>e[4]};
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  input:focus-visible:enabled {
    background-color: transparent;
    border: 1px solid ${({tokens:e})=>e.theme.borderSecondary};
    box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent040};
  }
`;var g=function(e,t,i,r){var o,n=arguments.length,l=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(l=(n<3?o(l):n>3?o(t,i,l):o(t,i))||l);return n>3&&l&&Object.defineProperty(t,i,l),l};let v=class extends m.LitElement{constructor(){super(...arguments),this.disabled=!1,this.value=""}render(){return r.html`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
      value=${this.value}
    /> `}};v.styles=[h.resetStyles,h.elementStyles,w],g([(0,p.property)({type:Boolean})],v.prototype,"disabled",void 0),g([(0,p.property)({type:String})],v.prototype,"value",void 0),v=g([(0,c.customElement)("wui-input-numeric")],v);var E=e.i(40697);let y=E.css`
  :host {
    position: relative;
    display: block;
  }
`;var C=function(e,t,i,r){var o,n=arguments.length,l=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(l=(n<3?o(l):n>3?o(t,i,l):o(t,i))||l);return n>3&&l&&Object.defineProperty(t,i,l),l};let b=class extends u.LitElement{constructor(){super(...arguments),this.length=6,this.otp="",this.values=Array.from({length:this.length}).map(()=>""),this.numerics=[],this.shouldInputBeEnabled=e=>this.values.slice(0,e).every(e=>""!==e),this.handleKeyDown=(e,t)=>{let i=e.target,r=this.getInputElement(i);if(!r)return;["ArrowLeft","ArrowRight","Shift","Delete"].includes(e.key)&&e.preventDefault();let o=r.selectionStart;switch(e.key){case"ArrowLeft":o&&r.setSelectionRange(o+1,o+1),this.focusInputField("prev",t);break;case"ArrowRight":case"Shift":this.focusInputField("next",t);break;case"Delete":case"Backspace":""===r.value?this.focusInputField("prev",t):this.updateInput(r,t,"")}},this.focusInputField=(e,t)=>{if("next"===e){let e=t+1;if(!this.shouldInputBeEnabled(e))return;let i=this.numerics[e<this.length?e:t],r=i?this.getInputElement(i):void 0;r&&(r.disabled=!1,r.focus())}if("prev"===e){let e=t-1,i=this.numerics[e>-1?e:t],r=i?this.getInputElement(i):void 0;r&&r.focus()}}}firstUpdated(){this.otp&&(this.values=this.otp.split(""));let e=this.shadowRoot?.querySelectorAll("wui-input-numeric");e&&(this.numerics=Array.from(e)),this.numerics[0]?.focus()}render(){return r.html`
      <wui-flex gap="1" data-testid="wui-otp-input">
        ${Array.from({length:this.length}).map((e,t)=>r.html`
            <wui-input-numeric
              @input=${e=>this.handleInput(e,t)}
              @click=${e=>this.selectInput(e)}
              @keydown=${e=>this.handleKeyDown(e,t)}
              .disabled=${!this.shouldInputBeEnabled(t)}
              .value=${this.values[t]||""}
            >
            </wui-input-numeric>
          `)}
      </wui-flex>
    `}updateInput(e,t,i){let r=this.numerics[t],o=e||(r?this.getInputElement(r):void 0);o&&(o.value=i,this.values=this.values.map((e,r)=>r===t?i:e))}selectInput(e){let t=e.target;if(t){let e=this.getInputElement(t);e?.select()}}handleInput(e,t){let i=e.target,r=this.getInputElement(i);if(r){let i=r.value;"insertFromPaste"===e.inputType?this.handlePaste(r,i,t):d.UiHelperUtil.isNumber(i)&&e.data?(this.updateInput(r,t,e.data),this.focusInputField("next",t)):this.updateInput(r,t,"")}this.dispatchInputChangeEvent()}handlePaste(e,t,i){let r=t[0];if(r&&d.UiHelperUtil.isNumber(r)){this.updateInput(e,i,r);let o=t.substring(1);if(i+1<this.length&&o.length){let e=this.numerics[i+1],t=e?this.getInputElement(e):void 0;t&&this.handlePaste(t,o,i+1)}else this.focusInputField("next",i)}else this.updateInput(e,i,"")}getInputElement(e){return e.shadowRoot?.querySelector("input")?e.shadowRoot.querySelector("input"):null}dispatchInputChangeEvent(){let e=this.values.join("");this.dispatchEvent(new CustomEvent("inputChange",{detail:e,bubbles:!0,composed:!0}))}};b.styles=[h.resetStyles,y],C([(0,p.property)({type:Number})],b.prototype,"length",void 0),C([(0,p.property)({type:String})],b.prototype,"otp",void 0),C([(0,o.state)()],b.prototype,"values",void 0),b=C([(0,c.customElement)("wui-otp")],b),e.i(48423);var O=e.i(56305);let x=E.css`
  wui-loading-spinner {
    margin: 9px auto;
  }

  .email-display,
  .email-display wui-text {
    max-width: 100%;
  }
`;var I=function(e,t,i,r){var o,n=arguments.length,l=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(l=(n<3?o(l):n>3?o(t,i,l):o(t,i))||l);return n>3&&l&&Object.defineProperty(t,i,l),l};let R=t=class extends i.LitElement{firstUpdated(){this.startOTPTimeout()}disconnectedCallback(){clearTimeout(this.OTPTimeout)}constructor(){super(),this.loading=!1,this.timeoutTimeLeft=O.W3mFrameHelpers.getTimeToNextEmailLogin(),this.error="",this.otp="",this.email=a.RouterController.state.data?.email,this.authConnector=n.ConnectorController.getAuthConnector()}render(){if(!this.email)throw Error("w3m-email-otp-widget: No email provided");let e=!!this.timeoutTimeLeft,t=this.getFooterLabels(e);return r.html`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["4","0","4","0"]}
        gap="4"
      >
        <wui-flex
          class="email-display"
          flexDirection="column"
          alignItems="center"
          .padding=${["0","5","0","5"]}
        >
          <wui-text variant="md-regular" color="primary" align="center">
            Enter the code we sent to
          </wui-text>
          <wui-text variant="md-medium" color="primary" lineClamp="1" align="center">
            ${this.email}
          </wui-text>
        </wui-flex>

        <wui-text variant="sm-regular" color="secondary">The code expires in 20 minutes</wui-text>

        ${this.loading?r.html`<wui-loading-spinner size="xl" color="accent-primary"></wui-loading-spinner>`:r.html` <wui-flex flexDirection="column" alignItems="center" gap="2">
              <wui-otp
                dissabled
                length="6"
                @inputChange=${this.onOtpInputChange.bind(this)}
                .otp=${this.otp}
              ></wui-otp>
              ${this.error?r.html`
                    <wui-text variant="sm-regular" align="center" color="error">
                      ${this.error}. Try Again
                    </wui-text>
                  `:null}
            </wui-flex>`}

        <wui-flex alignItems="center" gap="2">
          <wui-text variant="sm-regular" color="secondary">${t.title}</wui-text>
          <wui-link @click=${this.onResendCode.bind(this)} .disabled=${e}>
            ${t.action}
          </wui-link>
        </wui-flex>
      </wui-flex>
    `}startOTPTimeout(){this.timeoutTimeLeft=O.W3mFrameHelpers.getTimeToNextEmailLogin(),this.OTPTimeout=setInterval(()=>{this.timeoutTimeLeft>0?this.timeoutTimeLeft=O.W3mFrameHelpers.getTimeToNextEmailLogin():clearInterval(this.OTPTimeout)},1e3)}async onOtpInputChange(e){try{!this.loading&&(this.otp=e.detail,this.shouldSubmitOnOtpChange()&&(this.loading=!0,await this.onOtpSubmit?.(this.otp)))}catch(e){this.error=l.CoreHelperUtil.parseError(e),this.loading=!1}}async onResendCode(){try{if(this.onOtpResend){if(!this.loading&&!this.timeoutTimeLeft){if(this.error="",this.otp="",!n.ConnectorController.getAuthConnector()||!this.email)throw Error("w3m-email-otp-widget: Unable to resend email");this.loading=!0,await this.onOtpResend(this.email),this.startOTPTimeout(),s.SnackController.showSuccess("Code email resent")}}else this.onStartOver&&this.onStartOver()}catch(e){s.SnackController.showError(e)}finally{this.loading=!1}}getFooterLabels(e){return this.onStartOver?{title:"Something wrong?",action:`Try again ${e?`in ${this.timeoutTimeLeft}s`:""}`}:{title:"Didn't receive it?",action:`Resend ${e?`in ${this.timeoutTimeLeft}s`:"Code"}`}}shouldSubmitOnOtpChange(){return this.authConnector&&this.otp.length===t.OTP_LENGTH}};R.OTP_LENGTH=6,R.styles=x,I([(0,o.state)()],R.prototype,"loading",void 0),I([(0,o.state)()],R.prototype,"timeoutTimeLeft",void 0),I([(0,o.state)()],R.prototype,"error",void 0),R=t=I([(0,c.customElement)("w3m-email-otp-widget")],R),e.s(["W3mEmailOtpWidget",0,R],1284)}]);