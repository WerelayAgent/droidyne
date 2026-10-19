(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,16852,89532,e=>{"use strict";e.i(95126);var t=e.i(38910),i=e.i(18444);e.i(75353);var r=e.i(1908),o=e.i(74157);e.i(9975);var a=e.i(52564),n=t,s=e.i(33506);e.i(19861),e.i(4564);var l=e.i(32117),c=e.i(33222);let u=c.css`
  :host {
    display: block;
  }

  div.container {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    height: auto;
    display: block;
  }

  div.container[status='hide'] {
    animation: fade-out;
    animation-duration: var(--apkt-duration-dynamic);
    animation-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    animation-fill-mode: both;
    animation-delay: 0s;
  }

  div.container[status='show'] {
    animation: fade-in;
    animation-duration: var(--apkt-duration-dynamic);
    animation-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    animation-fill-mode: both;
    animation-delay: var(--apkt-duration-dynamic);
  }

  @keyframes fade-in {
    from {
      opacity: 0;
      filter: blur(6px);
    }
    to {
      opacity: 1;
      filter: blur(0px);
    }
  }

  @keyframes fade-out {
    from {
      opacity: 1;
      filter: blur(0px);
    }
    to {
      opacity: 0;
      filter: blur(6px);
    }
  }
`;var p=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let m=class extends n.LitElement{constructor(){super(...arguments),this.resizeObserver=void 0,this.unsubscribe=[],this.status="hide",this.view=o.RouterController.state.view}firstUpdated(){this.status=l.HelpersUtil.hasFooter()?"show":"hide",this.unsubscribe.push(o.RouterController.subscribeKey("view",e=>{this.view=e,this.status=l.HelpersUtil.hasFooter()?"show":"hide","hide"===this.status&&document.documentElement.style.setProperty("--apkt-footer-height","0px")})),this.resizeObserver=new ResizeObserver(e=>{for(let t of e)if(t.target===this.getWrapper()){let e=`${t.contentRect.height}px`;document.documentElement.style.setProperty("--apkt-footer-height",e)}}),this.resizeObserver.observe(this.getWrapper())}render(){return i.html`
      <div class="container" status=${this.status}>${this.templatePageContainer()}</div>
    `}templatePageContainer(){return l.HelpersUtil.hasFooter()?i.html` ${this.templateFooter()}`:null}templateFooter(){switch(this.view){case"Networks":return this.templateNetworksFooter();case"Connect":case"ConnectWallets":case"OnRampFiatSelect":case"OnRampTokenSelect":return i.html`<w3m-legal-footer></w3m-legal-footer>`;case"OnRampProviders":return i.html`<w3m-onramp-providers-footer></w3m-onramp-providers-footer>`;default:return null}}templateNetworksFooter(){return i.html` <wui-flex
      class="footer-in"
      padding="3"
      flexDirection="column"
      gap="3"
      alignItems="center"
    >
      <wui-text variant="md-regular" color="secondary" align="center">
        Your connected wallet may not support some of the networks available for this dApp
      </wui-text>
      <wui-link @click=${this.onNetworkHelp.bind(this)}>
        <wui-icon size="sm" color="accent-primary" slot="iconLeft" name="helpCircle"></wui-icon>
        What is a network
      </wui-link>
    </wui-flex>`}onNetworkHelp(){s.EventsController.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),o.RouterController.push("WhatIsANetwork")}getWrapper(){return this.shadowRoot?.querySelector("div.container")}};m.styles=[u],p([(0,r.state)()],m.prototype,"status",void 0),p([(0,r.state)()],m.prototype,"view",void 0),m=p([(0,a.customElement)("w3m-footer")],m),e.s(["W3mFooter",0,m],89532);let d=c.css`
  :host {
    display: block;
    width: inherit;
  }
`;var h=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let w=class extends t.LitElement{constructor(){super(),this.unsubscribe=[],this.viewState=o.RouterController.state.view,this.history=o.RouterController.state.history.join(","),this.unsubscribe.push(o.RouterController.subscribeKey("view",()=>{this.history=o.RouterController.state.history.join(","),document.documentElement.style.setProperty("--apkt-duration-dynamic","var(--apkt-durations-lg)")}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),document.documentElement.style.setProperty("--apkt-duration-dynamic","0s")}render(){return i.html`${this.templatePageContainer()}`}templatePageContainer(){return i.html`<w3m-router-container
      history=${this.history}
      .setView=${()=>{this.viewState=o.RouterController.state.view}}
    >
      ${this.viewTemplate(this.viewState)}
    </w3m-router-container>`}viewTemplate(e){switch(e){case"AccountSettings":return i.html`<w3m-account-settings-view></w3m-account-settings-view>`;case"Account":return i.html`<w3m-account-view></w3m-account-view>`;case"AllWallets":return i.html`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"ApproveTransaction":return i.html`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"BuyInProgress":return i.html`<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;case"ChooseAccountName":return i.html`<w3m-choose-account-name-view></w3m-choose-account-name-view>`;case"Connect":default:return i.html`<w3m-connect-view></w3m-connect-view>`;case"Create":return i.html`<w3m-connect-view walletGuide="explore"></w3m-connect-view>`;case"ConnectingWalletConnect":return i.html`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingWalletConnectBasic":return i.html`<w3m-connecting-wc-basic-view></w3m-connecting-wc-basic-view>`;case"ConnectingExternal":return i.html`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return i.html`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"ConnectWallets":return i.html`<w3m-connect-wallets-view></w3m-connect-wallets-view>`;case"ConnectSocials":return i.html`<w3m-connect-socials-view></w3m-connect-socials-view>`;case"ConnectingSocial":return i.html`<w3m-connecting-social-view></w3m-connecting-social-view>`;case"DataCapture":return i.html`<w3m-data-capture-view></w3m-data-capture-view>`;case"DataCaptureOtpConfirm":return i.html`<w3m-data-capture-otp-confirm-view></w3m-data-capture-otp-confirm-view>`;case"Downloads":return i.html`<w3m-downloads-view></w3m-downloads-view>`;case"EmailLogin":return i.html`<w3m-email-login-view></w3m-email-login-view>`;case"EmailVerifyOtp":return i.html`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return i.html`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"GetWallet":return i.html`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Networks":return i.html`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return i.html`<w3m-network-switch-view></w3m-network-switch-view>`;case"ProfileWallets":return i.html`<w3m-profile-wallets-view></w3m-profile-wallets-view>`;case"Transactions":return i.html`<w3m-transactions-view></w3m-transactions-view>`;case"OnRampProviders":return i.html`<w3m-onramp-providers-view></w3m-onramp-providers-view>`;case"OnRampTokenSelect":return i.html`<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;case"OnRampFiatSelect":return i.html`<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;case"UpgradeEmailWallet":return i.html`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpdateEmailWallet":return i.html`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailPrimaryOtp":return i.html`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;case"UpdateEmailSecondaryOtp":return i.html`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;case"UnsupportedChain":return i.html`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;case"Swap":return i.html`<w3m-swap-view></w3m-swap-view>`;case"SwapSelectToken":return i.html`<w3m-swap-select-token-view></w3m-swap-select-token-view>`;case"SwapPreview":return i.html`<w3m-swap-preview-view></w3m-swap-preview-view>`;case"WalletSend":return i.html`<w3m-wallet-send-view></w3m-wallet-send-view>`;case"WalletSendSelectToken":return i.html`<w3m-wallet-send-select-token-view></w3m-wallet-send-select-token-view>`;case"WalletSendPreview":return i.html`<w3m-wallet-send-preview-view></w3m-wallet-send-preview-view>`;case"WalletSendConfirmed":return i.html`<w3m-send-confirmed-view></w3m-send-confirmed-view>`;case"WhatIsABuy":return i.html`<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;case"WalletReceive":return i.html`<w3m-wallet-receive-view></w3m-wallet-receive-view>`;case"WalletCompatibleNetworks":return i.html`<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`;case"WhatIsAWallet":return i.html`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"ConnectingMultiChain":return i.html`<w3m-connecting-multi-chain-view></w3m-connecting-multi-chain-view>`;case"WhatIsANetwork":return i.html`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"ConnectingFarcaster":return i.html`<w3m-connecting-farcaster-view></w3m-connecting-farcaster-view>`;case"SwitchActiveChain":return i.html`<w3m-switch-active-chain-view></w3m-switch-active-chain-view>`;case"RegisterAccountName":return i.html`<w3m-register-account-name-view></w3m-register-account-name-view>`;case"RegisterAccountNameSuccess":return i.html`<w3m-register-account-name-success-view></w3m-register-account-name-success-view>`;case"SmartSessionCreated":return i.html`<w3m-smart-session-created-view></w3m-smart-session-created-view>`;case"SmartSessionList":return i.html`<w3m-smart-session-list-view></w3m-smart-session-list-view>`;case"SIWXSignMessage":return i.html`<w3m-siwx-sign-message-view></w3m-siwx-sign-message-view>`;case"Pay":return i.html`<w3m-pay-view></w3m-pay-view>`;case"PayLoading":return i.html`<w3m-pay-loading-view></w3m-pay-loading-view>`;case"PayQuote":return i.html`<w3m-pay-quote-view></w3m-pay-quote-view>`;case"FundWallet":return i.html`<w3m-fund-wallet-view></w3m-fund-wallet-view>`;case"PayWithExchange":return i.html`<w3m-deposit-from-exchange-view></w3m-deposit-from-exchange-view>`;case"PayWithExchangeSelectAsset":return i.html`<w3m-deposit-from-exchange-select-asset-view></w3m-deposit-from-exchange-select-asset-view>`;case"UsageExceeded":return i.html`<w3m-usage-exceeded-view></w3m-usage-exceeded-view>`;case"SmartAccountSettings":return i.html`<w3m-smart-account-settings-view></w3m-smart-account-settings-view>`}}};w.styles=[d],h([(0,r.state)()],w.prototype,"viewState",void 0),h([(0,r.state)()],w.prototype,"history",void 0),w=h([(0,a.customElement)("w3m-router")],w),e.s(["W3mRouter",0,w],16852)},19861,51287,e=>{"use strict";e.i(95126);var t=e.i(38910),i=e.i(18444);e.i(75353);var r=e.i(1908),o=e.i(90);e.i(9975);var a=e.i(52564);e.i(31283),e.i(48423);var n=t;e.i(4505),e.i(83704),e.i(66191);var s=e.i(15627),l=e.i(33222);let c=l.css`
  .reown-logo {
    height: 24px;
  }

  a {
    text-decoration: none;
    cursor: pointer;
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  a:hover {
    opacity: 0.9;
  }
`,u=class extends n.LitElement{render(){return i.html`
      <a
        data-testid="ux-branding-reown"
        href=${"https://reown.com"}
        rel="noreferrer"
        target="_blank"
        style="text-decoration: none;"
      >
        <wui-flex
          justifyContent="center"
          alignItems="center"
          gap="1"
          .padding=${["01","0","3","0"]}
        >
          <wui-text variant="sm-regular" color="inherit"> UX by </wui-text>
          <wui-icon name="reown" size="inherit" class="reown-logo"></wui-icon>
        </wui-flex>
      </a>
    `}};u.styles=[s.resetStyles,s.elementStyles,c],u=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n}([(0,a.customElement)("wui-ux-by-reown")],u),e.s([],51287);let p=l.css`
  :host wui-ux-by-reown {
    padding-top: 0;
  }

  :host wui-ux-by-reown.branding-only {
    padding-top: ${({spacing:e})=>e["3"]};
  }

  a {
    text-decoration: none;
    color: ${({tokens:e})=>e.core.textAccentPrimary};
    font-weight: 500;
  }
`;var m=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let d=class extends t.LitElement{constructor(){super(),this.unsubscribe=[],this.remoteFeatures=o.OptionsController.state.remoteFeatures,this.unsubscribe.push(o.OptionsController.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=o.OptionsController.state,r=o.OptionsController.state.features?.legalCheckbox;return(e||t)&&!r?i.html`
      <wui-flex flexDirection="column">
        <wui-flex .padding=${["4","3","3","3"]} justifyContent="center">
          <wui-text color="secondary" variant="md-regular" align="center">
            By connecting your wallet, you agree to our <br />
            ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
          </wui-text>
        </wui-flex>
        ${this.reownBrandingTemplate()}
      </wui-flex>
    `:i.html`
        <wui-flex flexDirection="column"> ${this.reownBrandingTemplate(!0)} </wui-flex>
      `}andTemplate(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=o.OptionsController.state;return e&&t?"and":""}termsTemplate(){let{termsConditionsUrl:e}=o.OptionsController.state;return e?i.html`<a href=${e} target="_blank" rel="noopener noreferrer"
      >Terms of Service</a
    >`:null}privacyTemplate(){let{privacyPolicyUrl:e}=o.OptionsController.state;return e?i.html`<a href=${e} target="_blank" rel="noopener noreferrer"
      >Privacy Policy</a
    >`:null}reownBrandingTemplate(e=!1){return this.remoteFeatures?.reownBranding?e?i.html`<wui-ux-by-reown class="branding-only"></wui-ux-by-reown>`:i.html`<wui-ux-by-reown></wui-ux-by-reown>`:null}};d.styles=[p],m([(0,r.state)()],d.prototype,"remoteFeatures",void 0),d=m([(0,a.customElement)("w3m-legal-footer")],d),e.s([],19861)},4564,e=>{"use strict";e.i(95126);var t=e.i(38910),i=e.i(18444),r=e.i(14087),o=e.i(33506),a=e.i(90),n=e.i(74157),s=e.i(55802);e.i(9975);var l=e.i(52564);e.i(31283),e.i(66253),e.i(70133),e.i(48423);var c=e.i(25436),u=e.i(40697);let p=u.css``,m=class extends t.LitElement{render(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=a.OptionsController.state;return e||t?i.html`
      <wui-flex
        .padding=${["4","3","3","3"]}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="3"
      >
        <wui-text color="secondary" variant="md-regular" align="center">
          We work with the best providers to give you the lowest fees and best support. More options
          coming soon!
        </wui-text>

        ${this.howDoesItWorkTemplate()}
      </wui-flex>
    `:null}howDoesItWorkTemplate(){return i.html` <wui-link @click=${this.onWhatIsBuy.bind(this)}>
      <wui-icon size="xs" color="accent-primary" slot="iconLeft" name="helpCircle"></wui-icon>
      How does it work?
    </wui-link>`}onWhatIsBuy(){o.EventsController.sendEvent({type:"track",event:"SELECT_WHAT_IS_A_BUY",properties:{isSmartAccount:(0,s.getPreferredAccountType)(r.ChainController.state.activeChain)===c.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT}}),n.RouterController.push("WhatIsABuy")}};m.styles=[p],m=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n}([(0,l.customElement)("w3m-onramp-providers-footer")],m),e.s([],4564)},20266,90403,e=>{"use strict";e.i(95126);var t=e.i(38910),i=e.i(18444);e.i(75353);var r=e.i(72072);e.i(4505);var o=e.i(15627),a=e.i(52564),n=e.i(33222);let s=n.css`
  button {
    background-color: transparent;
    padding: ${({spacing:e})=>e[1]};
  }

  button:focus-visible {
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  button[data-variant='accent']:hover:enabled,
  button[data-variant='accent']:focus-visible {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  button[data-variant='primary']:hover:enabled,
  button[data-variant='primary']:focus-visible,
  button[data-variant='secondary']:hover:enabled,
  button[data-variant='secondary']:focus-visible {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  button[data-size='xs'] > wui-icon {
    width: 8px;
    height: 8px;
  }

  button[data-size='sm'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='xs'],
  button[data-size='sm'] {
    border-radius: ${({borderRadius:e})=>e[1]};
  }

  button[data-size='md'],
  button[data-size='lg'] {
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  button[data-size='md'] > wui-icon {
    width: 16px;
    height: 16px;
  }

  button[data-size='lg'] > wui-icon {
    width: 20px;
    height: 20px;
  }

  button:disabled {
    background-color: transparent;
    cursor: not-allowed;
    opacity: 0.5;
  }

  button:hover:not(:disabled) {
    background-color: var(--wui-color-accent-glass-015);
  }

  button:focus-visible:not(:disabled) {
    background-color: var(--wui-color-accent-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
`;var l=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let c=class extends t.LitElement{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="default",this.variant="accent"}render(){return i.html`
      <button data-variant=${this.variant} ?disabled=${this.disabled} data-size=${this.size}>
        <wui-icon
          color=${({accent:"accent-primary",primary:"inverse",secondary:"default"})[this.variant]||this.iconColor}
          size=${this.size}
          name=${this.icon}
        ></wui-icon>
      </button>
    `}};c.styles=[o.resetStyles,o.elementStyles,s],l([(0,r.property)()],c.prototype,"size",void 0),l([(0,r.property)({type:Boolean})],c.prototype,"disabled",void 0),l([(0,r.property)()],c.prototype,"icon",void 0),l([(0,r.property)()],c.prototype,"iconColor",void 0),l([(0,r.property)()],c.prototype,"variant",void 0),c=l([(0,a.customElement)("wui-icon-link")],c),e.s([],90403),e.s([],20266)},28134,e=>{"use strict";e.i(95126);var t=e.i(38910),i=e.i(18444);e.i(75353);var r=e.i(72072);e.i(83601);var o=e.i(18153);e.i(58079),e.i(83704);var a=e.i(15627),n=e.i(52564),s=e.i(33222);let l=s.css`
  :host {
    width: 100%;
  }

  :host([data-type='primary']) > button {
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
  }

  :host([data-type='secondary']) > button {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({spacing:e})=>e[3]};
    width: 100%;
    border-radius: ${({borderRadius:e})=>e[4]};
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      scale ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, scale;
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-image {
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  @media (hover: hover) {
    :host([data-type='primary']) > button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }

    :host([data-type='secondary']) > button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var c=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let u=class extends t.LitElement{constructor(){super(...arguments),this.type="primary",this.imageSrc="google",this.imageSize=void 0,this.loading=!1,this.boxColor="foregroundPrimary",this.disabled=!1,this.rightIcon=!0,this.boxed=!0,this.rounded=!1,this.fullSize=!1}render(){return this.dataset.rounded=this.rounded?"true":"false",this.dataset.type=this.type,i.html`
      <button
        ?disabled=${!!this.loading||!!this.disabled}
        data-loading=${this.loading}
        tabindex=${(0,o.ifDefined)(this.tabIdx)}
      >
        <wui-flex gap="2" alignItems="center">
          ${this.templateLeftIcon()}
          <wui-flex gap="1">
            <slot></slot>
          </wui-flex>
        </wui-flex>
        ${this.templateRightIcon()}
      </button>
    `}templateLeftIcon(){return this.icon?i.html`<wui-image
        icon=${this.icon}
        iconColor=${(0,o.ifDefined)(this.iconColor)}
        ?boxed=${this.boxed}
        ?rounded=${this.rounded}
        boxColor=${this.boxColor}
      ></wui-image>`:i.html`<wui-image
      ?boxed=${this.boxed}
      ?rounded=${this.rounded}
      ?fullSize=${this.fullSize}
      size=${(0,o.ifDefined)(this.imageSize)}
      src=${this.imageSrc}
      boxColor=${this.boxColor}
    ></wui-image>`}templateRightIcon(){return this.rightIcon?this.loading?i.html`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`:i.html`<wui-icon name="chevronRight" size="lg" color="default"></wui-icon>`:null}};u.styles=[a.resetStyles,a.elementStyles,l],c([(0,r.property)()],u.prototype,"type",void 0),c([(0,r.property)()],u.prototype,"imageSrc",void 0),c([(0,r.property)()],u.prototype,"imageSize",void 0),c([(0,r.property)()],u.prototype,"icon",void 0),c([(0,r.property)()],u.prototype,"iconColor",void 0),c([(0,r.property)({type:Boolean})],u.prototype,"loading",void 0),c([(0,r.property)()],u.prototype,"tabIdx",void 0),c([(0,r.property)()],u.prototype,"boxColor",void 0),c([(0,r.property)({type:Boolean})],u.prototype,"disabled",void 0),c([(0,r.property)({type:Boolean})],u.prototype,"rightIcon",void 0),c([(0,r.property)({type:Boolean})],u.prototype,"boxed",void 0),c([(0,r.property)({type:Boolean})],u.prototype,"rounded",void 0),c([(0,r.property)({type:Boolean})],u.prototype,"fullSize",void 0),u=c([(0,n.customElement)("wui-list-item")],u),e.s([],28134)},90916,e=>{"use strict";e.i(95126);var t=e.i(38910),i=e.i(18444);e.i(75353);var r=e.i(72072);e.i(83601);var o=e.i(18153);e.i(4505),e.i(83704),e.i(39696);var a=e.i(15627),n=e.i(52564),s=t;e.i(74898);var l=e.i(33222);let c=l.css`
  :host {
    position: relative;
    border-radius: ${({borderRadius:e})=>e[2]};
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    column-gap: ${({spacing:e})=>e[1]};
    padding: ${({spacing:e})=>e[1]};
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: 2px;
  }
`;var u=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let p=class extends s.LitElement{constructor(){super(...arguments),this.walletImages=[]}render(){let e=this.walletImages.length<4;return i.html`${this.walletImages.slice(0,4).map(({src:e,walletName:t})=>i.html`
          <wui-wallet-image
            size="sm"
            imageSrc=${e}
            name=${(0,o.ifDefined)(t)}
          ></wui-wallet-image>
        `)}
    ${e?[...Array(4-this.walletImages.length)].map(()=>i.html` <wui-wallet-image size="sm" name=""></wui-wallet-image>`):null} `}};p.styles=[a.resetStyles,c],u([(0,r.property)({type:Array})],p.prototype,"walletImages",void 0),p=u([(0,n.customElement)("wui-all-wallets-image")],p),e.i(8246);let m=l.css`
  :host {
    width: 100%;
  }

  button {
    column-gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[3]};
    width: 100%;
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e[4]};
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  button > wui-wallet-image {
    background: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button:hover:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  button[data-all-wallets='true'] {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  button[data-all-wallets='true']:hover:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  button:focus-visible:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  button:disabled {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    opacity: 0.5;
    cursor: not-allowed;
  }

  button:disabled > wui-tag {
    background-color: ${({tokens:e})=>e.core.glass010};
    color: ${({tokens:e})=>e.theme.foregroundTertiary};
  }

  wui-flex.namespace-icon {
    width: 16px;
    height: 16px;
    border-radius: ${({borderRadius:e})=>e.round};
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    box-shadow: 0 0 0 2px ${({tokens:e})=>e.theme.backgroundPrimary};
    transition: box-shadow var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2);
  }

  button:hover:enabled wui-flex.namespace-icon {
    box-shadow: 0 0 0 2px ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  wui-flex.namespace-icon > wui-icon {
    width: 10px;
    height: 10px;
  }

  wui-flex.namespace-icon:not(:first-child) {
    margin-left: -4px;
  }
`;var d=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let h={eip155:"ethereum",solana:"solana",bip122:"bitcoin",polkadot:void 0,cosmos:void 0,sui:void 0,stacks:void 0,ton:"ton",tron:"tron",stellar:void 0},w=class extends t.LitElement{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.size="md",this.tabIdx=void 0,this.namespaces=[],this.disabled=!1,this.showAllWallets=!1,this.loading=!1,this.loadingSpinnerColor="accent-100"}render(){return this.dataset.size=this.size,i.html`
      <button
        ?disabled=${this.disabled}
        data-all-wallets=${this.showAllWallets}
        tabindex=${(0,o.ifDefined)(this.tabIdx)}
      >
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-flex flexDirection="column" justifyContent="center" alignItems="flex-start" gap="1">
          <wui-text variant="lg-regular" color="inherit">${this.name}</wui-text>
          ${this.templateNamespaces()}
        </wui-flex>
        ${this.templateStatus()}
        <wui-icon name="chevronRight" size="lg" color="default"></wui-icon>
      </button>
    `}templateNamespaces(){return this.namespaces?.length?i.html`<wui-flex alignItems="center" gap="0">
        ${this.namespaces.map((e,t)=>i.html`<wui-flex
              alignItems="center"
              justifyContent="center"
              zIndex=${(this.namespaces?.length??0)*2-t}
              class="namespace-icon"
            >
              <wui-icon
                name=${(0,o.ifDefined)(h[e])}
                size="sm"
                color="default"
              ></wui-icon>
            </wui-flex>`)}
      </wui-flex>`:null}templateAllWallets(){return this.showAllWallets&&this.imageSrc?i.html` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?i.html` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?i.html`<wui-wallet-image
        size=${(0,o.ifDefined)("sm"===this.size?"sm":"md")}
        imageSrc=${this.imageSrc}
        name=${this.name}
      ></wui-wallet-image>`:this.showAllWallets||this.imageSrc?null:i.html`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`}templateStatus(){return this.loading?i.html`<wui-loading-spinner size="lg" color="accent-primary"></wui-loading-spinner>`:this.tagLabel&&this.tagVariant?i.html`<wui-tag size="sm" variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:null}};w.styles=[a.resetStyles,a.elementStyles,m],d([(0,r.property)({type:Array})],w.prototype,"walletImages",void 0),d([(0,r.property)()],w.prototype,"imageSrc",void 0),d([(0,r.property)()],w.prototype,"name",void 0),d([(0,r.property)()],w.prototype,"size",void 0),d([(0,r.property)()],w.prototype,"tagLabel",void 0),d([(0,r.property)()],w.prototype,"tagVariant",void 0),d([(0,r.property)()],w.prototype,"walletIcon",void 0),d([(0,r.property)()],w.prototype,"tabIdx",void 0),d([(0,r.property)({type:Array})],w.prototype,"namespaces",void 0),d([(0,r.property)({type:Boolean})],w.prototype,"disabled",void 0),d([(0,r.property)({type:Boolean})],w.prototype,"showAllWallets",void 0),d([(0,r.property)({type:Boolean})],w.prototype,"loading",void 0),d([(0,r.property)({type:String})],w.prototype,"loadingSpinnerColor",void 0),w=d([(0,n.customElement)("wui-list-wallet")],w),e.s([],90916)},44568,e=>{"use strict";e.i(95126);var t=e.i(38910),i=e.i(18444);e.i(75353);var r=e.i(72072),o=e.i(11045),a=e.i(68200);let n=i.svg`
  <svg fill="none" viewBox="0 0 36 40">
    <path
      d="M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z"
    />
  </svg>
`;e.i(4505),e.i(28194);var s=e.i(15627),l=e.i(52564),c=e.i(33222);let u=c.css`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  :host([data-round='true']) {
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: 100%;
    outline: 1px solid ${({tokens:e})=>e.core.glass010};
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  svg > path {
    stroke: var(--local-stroke);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;var p=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let m=class extends t.LitElement{constructor(){super(...arguments),this.size="md",this.name="uknown",this.networkImagesBySize={sm:n,md:a.networkSvgMd,lg:o.networkSvgLg},this.selected=!1,this.round=!1}render(){return this.round?(this.dataset.round="true",this.style.cssText=`
      --local-width: var(--apkt-spacing-10);
      --local-height: var(--apkt-spacing-10);
      --local-icon-size: var(--apkt-spacing-4);
    `):this.style.cssText=`

      --local-path: var(--apkt-path-network-${this.size});
      --local-width:  var(--apkt-width-network-${this.size});
      --local-height:  var(--apkt-height-network-${this.size});
      --local-icon-size:  var(--apkt-spacing-${({sm:"4",md:"6",lg:"10"})[this.size]});
    `,i.html`${this.templateVisual()} ${this.svgTemplate()} `}svgTemplate(){return this.round?null:this.networkImagesBySize[this.size]}templateVisual(){return this.imageSrc?i.html`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:i.html`<wui-icon size="inherit" color="default" name="networkPlaceholder"></wui-icon>`}};m.styles=[s.resetStyles,u],p([(0,r.property)()],m.prototype,"size",void 0),p([(0,r.property)()],m.prototype,"name",void 0),p([(0,r.property)({type:Object})],m.prototype,"networkImagesBySize",void 0),p([(0,r.property)()],m.prototype,"imageSrc",void 0),p([(0,r.property)({type:Boolean})],m.prototype,"selected",void 0),p([(0,r.property)({type:Boolean})],m.prototype,"round",void 0),m=p([(0,l.customElement)("wui-network-image")],m),e.s([],44568)},92494,e=>{"use strict";e.i(95126);var t=e.i(38910),i=e.i(18444);e.i(75353);var r=e.i(72072);e.i(83704);var o=e.i(15627),a=e.i(52564),n=e.i(33222);let s=n.css`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: ${({tokens:e})=>e.theme.borderPrimary};
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 8px;
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
  }

  :host([data-bg-color='primary']) > wui-text {
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
  }

  :host([data-bg-color='secondary']) > wui-text {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }
`;var l=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let c=class extends t.LitElement{constructor(){super(...arguments),this.text="",this.bgColor="primary"}render(){return this.dataset.bgColor=this.bgColor,i.html`${this.template()}`}template(){return this.text?i.html`<wui-text variant="md-regular" color="secondary">${this.text}</wui-text>`:null}};c.styles=[o.resetStyles,s],l([(0,r.property)()],c.prototype,"text",void 0),l([(0,r.property)()],c.prototype,"bgColor",void 0),c=l([(0,a.customElement)("wui-separator")],c),e.s([],92494)},39106,e=>{"use strict";e.i(8246),e.s([])},56940,e=>{"use strict";e.i(74898),e.s([])},854,e=>{"use strict";e.i(95126);var t=e.i(38910),i=e.i(18444);e.i(75353);var r=e.i(72072);e.i(83601);var o=e.i(18153);e.i(4505),e.i(28194),e.i(83704),e.i(66191);var a=e.i(15627),n=e.i(85312),s=e.i(52564),l=e.i(33222);let c=l.css`
  button {
    display: flex;
    align-items: center;
    height: 40px;
    padding: ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[4]};
    column-gap: ${({spacing:e})=>e[1]};
    background-color: transparent;
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
  }

  wui-image,
  .icon-box {
    width: ${({spacing:e})=>e[6]};
    height: ${({spacing:e})=>e[6]};
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-text {
    flex: 1;
  }

  .icon-box {
    position: relative;
  }

  .icon-box[data-active='true'] {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  .circle {
    position: absolute;
    left: 16px;
    top: 15px;
    width: 8px;
    height: 8px;
    background-color: ${({tokens:e})=>e.core.textSuccess};
    box-shadow: 0 0 0 2px ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: 50%;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) {
    button:hover:enabled,
    button:active:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }
  }
`;var u=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let p=class extends t.LitElement{constructor(){super(...arguments),this.address="",this.profileName="",this.alt="",this.imageSrc="",this.icon=void 0,this.iconSize="md",this.enableGreenCircle=!0,this.loading=!1,this.charsStart=4,this.charsEnd=6}render(){return i.html`
      <button>
        ${this.leftImageTemplate()} ${this.textTemplate()} ${this.rightImageTemplate()}
      </button>
    `}leftImageTemplate(){let e=this.icon?i.html`<wui-icon
          size=${(0,o.ifDefined)(this.iconSize)}
          color="default"
          name=${this.icon}
          class="icon"
        ></wui-icon>`:i.html`<wui-image src=${this.imageSrc} alt=${this.alt}></wui-image>`;return i.html`
      <wui-flex
        alignItems="center"
        justifyContent="center"
        class="icon-box"
        data-active=${!!this.icon}
      >
        ${e}
        ${this.enableGreenCircle?i.html`<wui-flex class="circle"></wui-flex>`:null}
      </wui-flex>
    `}textTemplate(){return i.html`
      <wui-text variant="lg-regular" color="primary">
        ${n.UiHelperUtil.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?16:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"})}
      </wui-text>
    `}rightImageTemplate(){return i.html`<wui-icon name="chevronBottom" size="sm" color="default"></wui-icon>`}};p.styles=[a.resetStyles,a.elementStyles,c],u([(0,r.property)()],p.prototype,"address",void 0),u([(0,r.property)()],p.prototype,"profileName",void 0),u([(0,r.property)()],p.prototype,"alt",void 0),u([(0,r.property)()],p.prototype,"imageSrc",void 0),u([(0,r.property)()],p.prototype,"icon",void 0),u([(0,r.property)()],p.prototype,"iconSize",void 0),u([(0,r.property)({type:Boolean})],p.prototype,"enableGreenCircle",void 0),u([(0,r.property)({type:Boolean})],p.prototype,"loading",void 0),u([(0,r.property)({type:Number})],p.prototype,"charsStart",void 0),u([(0,r.property)({type:Number})],p.prototype,"charsEnd",void 0),p=u([(0,s.customElement)("wui-wallet-switch")],p),e.s([],854)},11045,e=>{"use strict";e.i(95126);var t=e.i(18444);let i=t.svg`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`;e.s(["networkSvgLg",0,i])},68200,e=>{"use strict";e.i(95126);var t=e.i(18444);let i=t.svg`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`;e.s(["networkSvgMd",0,i])},74898,e=>{"use strict";e.i(95126);var t=e.i(38910),i=e.i(18444);e.i(75353);var r=e.i(72072);e.i(4505),e.i(28194);var o=e.i(15627),a=e.i(52564);e.i(39696);var n=e.i(33222);let s=n.css`
  :host {
    position: relative;
    background-color: ${({tokens:e})=>e.theme.foregroundTertiary};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host([data-image='true']) {
    background-color: transparent;
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host([data-size='sm']) {
    width: 32px;
    height: 32px;
  }

  :host([data-size='md']) {
    width: 40px;
    height: 40px;
  }

  :host([data-size='lg']) {
    width: 56px;
    height: 56px;
  }

  :host([name='Extension'])::after {
    border: 1px solid ${({colors:e})=>e.accent010};
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid ${({colors:e})=>e.accent010};
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon {
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  wui-icon[data-parent-size='sm'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='md'] {
    width: 32px;
    height: 32px;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
    padding: 1px;
  }
`;var l=function(e,t,i,r){var o,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let c=class extends t.LitElement{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let e="1";return"lg"===this.size?e="4":"md"===this.size?e="2":"sm"===this.size&&(e="1"),this.style.cssText=`
       --local-border-radius: var(--apkt-borderRadius-${e});
   `,this.dataset.size=this.size,this.imageSrc&&(this.dataset.image="true"),this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),i.html`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?i.html`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?i.html`<wui-icon size="md" color="default" name=${this.walletIcon}></wui-icon>`:i.html`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="wallet"
    ></wui-icon>`}};c.styles=[o.resetStyles,s],l([(0,r.property)()],c.prototype,"size",void 0),l([(0,r.property)()],c.prototype,"name",void 0),l([(0,r.property)()],c.prototype,"imageSrc",void 0),l([(0,r.property)()],c.prototype,"walletIcon",void 0),l([(0,r.property)({type:Boolean})],c.prototype,"installed",void 0),l([(0,r.property)()],c.prototype,"badgeSize",void 0),c=l([(0,a.customElement)("wui-wallet-image")],c),e.s([],74898)},55215,e=>{"use strict";let t={METMASK_CONNECTOR_NAME:"MetaMask",TRUST_CONNECTOR_NAME:"Trust Wallet",SOLFLARE_CONNECTOR_NAME:"Solflare",PHANTOM_CONNECTOR_NAME:"Phantom",COIN98_CONNECTOR_NAME:"Coin98",MAGIC_EDEN_CONNECTOR_NAME:"Magic Eden",BACKPACK_CONNECTOR_NAME:"Backpack",BITGET_CONNECTOR_NAME:"Bitget Wallet",FRONTIER_CONNECTOR_NAME:"Frontier",XVERSE_CONNECTOR_NAME:"Xverse Wallet",LEATHER_CONNECTOR_NAME:"Leather",OKX_CONNECTOR_NAME:"OKX Wallet",BINANCE_CONNECTOR_NAME:"Binance Wallet",EIP155:e.i(64819).ConstantsUtil.CHAIN.EVM,ADD_CHAIN_METHOD:"wallet_addEthereumChain",EIP6963_ANNOUNCE_EVENT:"eip6963:announceProvider",EIP6963_REQUEST_EVENT:"eip6963:requestProvider",CONNECTOR_RDNS_MAP:{coinbaseWallet:"com.coinbase.wallet",coinbaseWalletSDK:"com.coinbase.wallet"},CONNECTOR_TYPE_EXTERNAL:"EXTERNAL",CONNECTOR_TYPE_WALLET_CONNECT:"WALLET_CONNECT",CONNECTOR_TYPE_INJECTED:"INJECTED",CONNECTOR_TYPE_ANNOUNCED:"ANNOUNCED",CONNECTOR_TYPE_AUTH:"AUTH",CONNECTOR_TYPE_MULTI_CHAIN:"MULTI_CHAIN",CONNECTOR_TYPE_W3M_AUTH:"AUTH",getSDKVersionWarningMessage:(e,t)=>`
     @@@@@@@           @@@@@@@@@@@@@@@@@@      
   @@@@@@@@@@@      @@@@@@@@@@@@@@@@@@@@@@@@   
  @@@@@@@@@@@@@    @@@@@@@@@@@@@@@@@@@@@@@@@@  
 @@@@@@@@@@@@@@@  @@@@@@@@@@@@@@@@@@@@@@@@@@@  
 @@@@@@@@@@@@@@@  @@@@@@@@@@@@@@   @@@@@@@@@@@ 
 @@@@@@@@@@@@@@@  @@@@@@@@@@@@@   @@@@@@@@@@@@ 
 @@@@@@@@@@@@@@@  @@@@@@@@@@@@@  @@@@@@@@@@@@@
 @@@@@@@@@@@@@@@  @@@@@@@@@@@@   @@@@@@@@@@@@@    
 @@@@@@   @@@@@@  @@@@@@@@@@@   @@@@@@@@@@@@@@    
 @@@@@@   @@@@@@  @@@@@@@@@@@  @@@@@@@@@@@@@@@ 
 @@@@@@@@@@@@@@@  @@@@@@@@@@   @@@@@@@@@@@@@@@ 
 @@@@@@@@@@@@@@@  @@@@@@@@@@@@@@@@@@@@@@@@@@@  
  @@@@@@@@@@@@@    @@@@@@@@@@@@@@@@@@@@@@@@@@  
   @@@@@@@@@@@      @@@@@@@@@@@@@@@@@@@@@@@@   
      @@@@@            @@@@@@@@@@@@@@@@@@  
      
AppKit SDK version ${e} is outdated. Latest version is ${t}. Please update to the latest version for bug fixes and new features.
            
Changelog: https://github.com/reown-com/appkit/releases
NPM Registry: https://www.npmjs.com/package/@reown/appkit`};e.s(["ConstantsUtil",0,t])},76048,e=>{"use strict";var t=e.i(64819),i=e.i(14087),r=e.i(78674),o=e.i(65734),a=e.i(55215);let n={getCaipTokens(e){if(!e)return;let t={};return Object.entries(e).forEach(([e,i])=>{t[`${a.ConstantsUtil.EIP155}:${e}`]=i}),t},isLowerCaseMatch:(e,t)=>e?.toLowerCase()===t?.toLowerCase(),getActiveNamespaceConnectedToAuth(){let e=i.ChainController.state.activeChain;return t.ConstantsUtil.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(i=>r.ConnectorController.getConnectorId(i)===t.ConstantsUtil.CONNECTOR_ID.AUTH&&i===e)},withRetry({conditionFn:e,intervalMs:t,maxRetries:i}){let r=0;return new Promise(o=>{async function a(){return(r+=1,await e())?o(!0):r>=i?o(!1):(setTimeout(a,t),null)}a()})},userChainIdToChainNamespace(e){if("number"==typeof e)return t.ConstantsUtil.CHAIN.EVM;let[i]=e.split(":");return i},getOtherAuthNamespaces:e=>e?t.ConstantsUtil.AUTH_CONNECTOR_SUPPORTED_CHAINS.filter(t=>t!==e):[],getConnectorStorageInfo(e,t){let i=o.StorageUtil.getConnections()[t]??[];return{hasDisconnected:o.StorageUtil.isConnectorDisconnected(e,t),hasConnected:i.some(t=>n.isLowerCaseMatch(t.connectorId,e))}}};e.s(["HelpersUtil",0,n])}]);