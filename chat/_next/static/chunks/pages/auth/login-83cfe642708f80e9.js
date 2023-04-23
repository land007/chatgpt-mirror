(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[344],{48115:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/login",function(){return t(30106)}])},30106:function(n,e,t){"use strict";t.r(e),t.d(e,{__N_SSP:function(){return p},default:function(){return g}});var i=t(35250),l=t(19841),r=t(91515),s=t(61432),a=t(70079),c=t(39690),o=t(93417),u=t(26649),h=t.n(u);function d(){return(0,i.jsxs)(h(),{children:[(0,i.jsx)("title",{children:"ChatGPT | OpenAI"}),(0,i.jsx)("meta",{name:"description",content:"ChatGPT is an AI-powered language model developed by OpenAI, capable of generating human-like text based on context and past conversations."})]})}var f=t(55525),x=t(27252),p=!0;function g(n){var e=n.serviceStatus,t=n.featureFlagShouldShowBypass,l=n.enableNewAuthFlow,u=n.enableNewAuthFlowAuth0,h=n.auth0Provider,p=(0,s.useRouter)(),g=p.query.next,v="string"==typeof g&&g.startsWith("/")?g:"/",j=(0,x.g)(function(n){return n.updateFlagValue}),b=Boolean(null==e?void 0:e.oof);(0,a.useEffect)(function(){void 0!==t&&j("failwhaleBypassEnabled",t)},[j,t]);var w="sso"in p.query&&(p.query.sso||!0);return(0,a.useEffect)(function(){w&&!b&&(0,r.signIn)("openai"===w?"openai":"auth0",{callbackUrl:v})},[v,w,b]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d,{}),b?(0,i.jsx)(o.Z,{}):w?null:(0,i.jsx)(f.Wk,{children:(0,i.jsxs)(f.xh,{children:[(0,i.jsx)(f.jI,{}),(0,i.jsx)("div",{className:"mb-2 text-center",children:"Welcome to ChatGPT"}),l?(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"mt-4 flex w-64 flex-col gap-3 ",children:[(0,i.jsx)(m,{icon:"url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 48 48'%3E%3Cdefs%3E%3Cpath id='a' d='M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z'/%3E%3C/defs%3E%3CclipPath id='b'%3E%3Cuse xlink:href='%23a' overflow='visible'/%3E%3C/clipPath%3E%3Cpath clip-path='url(%23b)' fill='%23FBBC05' d='M0 37V11l17 13z'/%3E%3Cpath clip-path='url(%23b)' fill='%23EA4335' d='M0 11l17 13 7-6.1L48 14V0H0z'/%3E%3Cpath clip-path='url(%23b)' fill='%2334A853' d='M0 37l30-23 7.9 1L48 0v48H0z'/%3E%3Cpath clip-path='url(%23b)' fill='%234285F4' d='M48 48L17 24l-4-3 35-10z'/%3E%3C/svg%3E\")",onClick:function(){return(0,r.signIn)("openai",{callbackUrl:v},{prompt:"login",login_hint:"google"})},children:"Continue with Google"}),(0,i.jsx)(m,{icon:"url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='21' height='21'%3E%3Cpath fill='%23f25022' d='M1 1h9v9H1z'/%3E%3Cpath fill='%2300a4ef' d='M1 11h9v9H1z'/%3E%3Cpath fill='%237fba00' d='M11 1h9v9h-9z'/%3E%3Cpath fill='%23ffb900' d='M11 11h9v9h-9z'/%3E%3C/svg%3E\")",onClick:function(){return(0,r.signIn)("openai",{callbackUrl:v},{prompt:"login",login_hint:"microsoft"})},children:"Continue with Microsoft"}),u&&(0,i.jsx)(m,{icon:"none",onClick:function(){return(0,r.signIn)("openai",{callbackUrl:v},{prompt:"login",login_hint:"openai"})},children:"Continue with Auth0"}),(0,i.jsxs)("div",{className:"align-center my-2 flex justify-center text-xs",children:[(0,i.jsx)("div",{className:"mt-2 flex-auto border-t border-gray-700"}),(0,i.jsx)("div",{className:"flex-initial px-3",children:"Or try another way"}),(0,i.jsx)("div",{className:"mt-2 flex-auto border-t border-gray-700"})]}),(0,i.jsxs)("div",{className:"grid grid-cols-2 gap-3",children:[(0,i.jsx)(m,{className:"justify-center",onClick:function(){return(0,r.signIn)(h,{callbackUrl:v},{prompt:"login"})},children:"Log in"}),(0,i.jsx)(m,{className:"justify-center",onClick:function(){return(0,r.signIn)(h,{callbackUrl:v},{prompt:"login"})},children:"Sign up"})]})]})}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"mb-4 text-center",children:"Log in with your OpenAI account to continue"}),(0,i.jsxs)("div",{className:"flex flex-row gap-3",children:[(0,i.jsx)(c.z,{as:"button",onClick:function(){return(0,r.signIn)(h,{callbackUrl:v},{prompt:"login"})},children:"Log in"}),(0,i.jsx)(c.z,{as:"button",onClick:function(){return(0,r.signIn)(h,{callbackUrl:v},{prompt:"login",screen_hint:"signup"})},children:"Sign up"})]})]})]})})]})}function m(n){var e=n.icon,t=n.children,r=n.className,s=n.textAlign,a=n.onClick;return(0,i.jsxs)("button",{className:(0,l.Z)("btn-neutral flex items-center gap-3 rounded p-3 text-base","center"===(void 0===s?"left":s)?"text-center":"text-left",r),onClick:a,children:[e?(0,i.jsx)("div",{className:"h-5 w-5",style:{backgroundImage:e}}):null,(0,i.jsx)("div",{children:t})]})}},55525:function(n,e,t){"use strict";t.d(e,{Wk:function(){return o},jI:function(){return h},xh:function(){return c}});var i=t(14806),l=t(35250),r=t(34303),s=t(79876);function a(){var n=(0,i.Z)(["w-96 flex flex-col flex-auto justify-center items-center"]);return a=function(){return n},n}var c=r.Z.div(a());function o(n){var e=n.children,t=n.showTerms;return(0,l.jsxs)("div",{className:"flex h-full w-full flex-col items-center justify-center bg-gray-50 dark:bg-gray-800",children:[e,(void 0===t||t)&&(0,l.jsx)(u,{})]})}function u(){return(0,l.jsxs)("div",{className:"py-3 text-xs",children:[(0,l.jsx)("a",{href:"https://openai.com/policies/terms-of-use",target:"_blank",className:"mx-3 text-gray-500",rel:"noreferrer",children:"Terms of use"}),(0,l.jsx)("span",{className:"text-gray-600",children:"|"}),(0,l.jsx)("a",{href:"https://openai.com/policies/privacy-policy",target:"_blank",className:"mx-3 text-gray-500",rel:"noreferrer",children:"Privacy policy"})]})}function h(){return(0,l.jsx)("div",{className:"mb-5",children:(0,l.jsx)(s.nI,{})})}}},function(n){n.O(0,[216,264,417,774,888,179],function(){return n(n.s=48115)}),_N_E=n.O()}]);