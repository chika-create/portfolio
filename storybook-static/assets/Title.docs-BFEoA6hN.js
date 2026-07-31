import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{f as t}from"./iframe-8Y8h7iQF.js";import{i as n,r}from"./react-k3YPvb47.js";import{c as i,i as a,l as o,n as s,s as c}from"./blocks-CljqlljP.js";import{a as l,i as u,n as d,o as f,r as p,t as m}from"./Title.stories-D441DVib.js";function h(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(c,{of:l}),`
`,(0,_.jsx)(t.h1,{id:`title-運用ガイド`,children:`Title 運用ガイド`}),`
`,(0,_.jsx)(t.p,{children:`このドキュメントは、共通部品 Title の見出し設計を統一するためのガイドです。`}),`
`,(0,_.jsx)(t.h2,{id:`運用ルール`,children:`運用ルール`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsx)(t.li,{children:`level は文書構造に合わせて決めます（SEO/アクセシビリティ上の意味づけ）。`}),`
`,(0,_.jsx)(t.li,{children:`style は見た目調整のための任意指定です。必要な場合のみ使います。`}),`
`,(0,_.jsx)(t.li,{children:`ページ内で見出しレベルを飛ばしすぎないようにします（例: h1 の次に h3）。`}),`
`,(0,_.jsx)(t.li,{children:`children は短く、セクションの内容が伝わる語を使います。`}),`
`,(0,_.jsx)(t.li,{children:`デザイン都合で見た目を変えるときも、可能な限り level の意味は崩しません。`}),`
`]}),`
`,(0,_.jsx)(t.h2,{id:`使用例`,children:`使用例`}),`
`,(0,_.jsx)(t.h3,{id:`1-通常の見出し推奨`,children:`1. 通常の見出し（推奨）`}),`
`,(0,_.jsx)(t.pre,{children:(0,_.jsx)(t.code,{className:`language-tsx`,children:`<Title level="h2">Skill Set</Title>
`})}),`
`,(0,_.jsx)(t.h3,{id:`2-意味と見た目を分離するケース`,children:`2. 意味と見た目を分離するケース`}),`
`,(0,_.jsx)(t.pre,{children:(0,_.jsx)(t.code,{className:`language-tsx`,children:`<Title level="h1" style="h2">About Me</Title>
`})}),`
`,(0,_.jsx)(t.h2,{id:`do--dont`,children:`Do / Don't`}),`
`,(0,_.jsx)(t.p,{children:`| Do | Don't |
| --- | --- |
| level を文書構造に合わせる | 見た目だけで level を選ぶ |
| style は必要時のみ上書きする | すべての Title で style を強制指定する |
| セクション名を具体的にする | 内容が分からない抽象見出しを使う |`}),`
`,(0,_.jsx)(t.h2,{id:`story-での確認`,children:`Story での確認`}),`
`,(0,_.jsx)(s,{children:(0,_.jsx)(i,{of:m})}),`
`,(0,_.jsx)(s,{children:(0,_.jsx)(i,{of:d})}),`
`,(0,_.jsx)(s,{children:(0,_.jsx)(i,{of:p})}),`
`,(0,_.jsx)(s,{children:(0,_.jsx)(i,{of:u})}),`
`,(0,_.jsx)(a,{of:d})]})}function g(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,_.jsx)(t,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;function v(){return(v=e((()=>{_=t(),r(),o(),f()})))()}v();export{g as default};