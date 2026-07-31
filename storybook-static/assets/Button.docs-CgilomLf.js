import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{f as t}from"./iframe-8Y8h7iQF.js";import{i as n,r}from"./react-k3YPvb47.js";import{c as i,i as a,l as o,n as s,s as c}from"./blocks-CljqlljP.js";import{a as l,i as u,n as d,r as f,t as p}from"./Button.stories-XoON-XqI.js";function m(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(c,{of:f}),`
`,(0,g.jsx)(t.h1,{id:`button-運用ガイド`,children:`Button 運用ガイド`}),`
`,(0,g.jsx)(t.p,{children:`このドキュメントは、共通部品 Button をポートフォリオサイト内で一貫して運用するためのガイドです。`}),`
`,(0,g.jsx)(t.h2,{id:`運用ルール`,children:`運用ルール`}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsx)(t.li,{children:`children には、操作の意図が伝わる短い文言を設定します。`}),`
`,(0,g.jsx)(t.li,{children:`画面遷移が目的のときは href を使います（内部リンク前提）。`}),`
`,(0,g.jsx)(t.li,{children:`単純なアクション実行時は href を使わず、onClick で処理します。`}),`
`,(0,g.jsx)(t.li,{children:`className は拡張用途に限定し、基本スタイルは Button 側に寄せます。`}),`
`,(0,g.jsx)(t.li,{children:`href と onClick の併用が必要な場合は、計測や補助処理のみを onClick に寄せます。`}),`
`]}),`
`,(0,g.jsx)(t.h2,{id:`使用例`,children:`使用例`}),`
`,(0,g.jsx)(t.h3,{id:`1-遷移ボタン推奨`,children:`1. 遷移ボタン（推奨）`}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-tsx`,children:`<Button href="/portfolio">制作実績を見る</Button>
`})}),`
`,(0,g.jsx)(t.h3,{id:`2-アクションボタン推奨`,children:`2. アクションボタン（推奨）`}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-tsx`,children:`<Button onClick={handleOpenModal}>お問い合わせ</Button>
`})}),`
`,(0,g.jsx)(t.h3,{id:`3-見た目の調整必要時のみ`,children:`3. 見た目の調整（必要時のみ）`}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-tsx`,children:`<Button className={styles.compactButton}>もっと見る</Button>
`})}),`
`,(0,g.jsx)(t.h2,{id:`do--dont`,children:`Do / Don't`}),`
`,(0,g.jsx)(t.p,{children:`| Do | Don't |
| --- | --- |
| 遷移目的なら href を使う | 遷移なのに onClick 内で router.push だけを行う |
| テキストは具体的にする | 「こちら」「Click」など曖昧な文言にする |
| className は最小限に使う | 画面ごとに大幅な上書きで見た目を分岐させる |`}),`
`,(0,g.jsx)(t.h2,{id:`story-での確認`,children:`Story での確認`}),`
`,(0,g.jsx)(s,{children:(0,g.jsx)(i,{of:p})}),`
`,(0,g.jsx)(s,{children:(0,g.jsx)(i,{of:d})}),`
`,(0,g.jsx)(s,{children:(0,g.jsx)(i,{of:u})}),`
`,(0,g.jsx)(a,{of:p})]})}function h(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;function _(){return(_=e((()=>{g=t(),r(),o(),l()})))()}_();export{h as default};