"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[708387],{603905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(667294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(a),h=r,m=p["".concat(l,".").concat(h)]||p[h]||g[h]||i;return a?n.createElement(m,o(o({ref:t},d),{},{components:a})):n.createElement(m,o({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},342134:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>d});a(667294);var n=a(603905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const o={title:"Scaling Backstage Ingestion with Incremental Entity Providers",author:"Paul Cowan & Taras Mankovski",authorURL:"https://frontside.com/"},s=void 0,l={permalink:"/blog/2023/01/31/incremental-entity-provider",source:"@site/blog/2023-01-31-incremental-entity-provider.md",title:"Scaling Backstage Ingestion with Incremental Entity Providers",description:"At the heart of Backstage is the Backstage Software Catalog, which is a data store that allows an organization to centralize and visualize its many software services and components. Backstage inspects and transforms an organization's disparate software services and parts into a centralized data store. This blog post introduces the concept of incremental entity providers, which allow Backstage to scale ingestion to even larger datasets.",date:"2023-01-31T00:00:00.000Z",formattedDate:"January 31, 2023",tags:[],readingTime:4.785,hasTruncateMarker:!0,authors:[{name:"Paul Cowan & Taras Mankovski",url:"https://frontside.com/"}],frontMatter:{title:"Scaling Backstage Ingestion with Incremental Entity Providers",author:"Paul Cowan & Taras Mankovski",authorURL:"https://frontside.com/"},prevItem:{title:"What\u2019s Ahead in 2023?",permalink:"/blog/2023/02/06/whats-ahead-in-2023"},nextItem:{title:"Backstage Wrapped 2022",permalink:"/blog/2022/12/19/backstage-wrapped-2022"}},c={authorsImageUrls:[void 0]},d=[{value:"Entity Providers",id:"entity-providers",level:2},{value:"Incremental entity providers",id:"incremental-entity-providers",level:2},{value:"Go forth and ingest!",id:"go-forth-and-ingest",level:2}],p={toc:d};function g(e){var{components:t}=e,o=i(e,["components"]);return(0,n.kt)("wrapper",r({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"At the heart of ",(0,n.kt)("a",r({parentName:"p"},{href:"https://backstage.io/"}),"Backstage")," is the ",(0,n.kt)("a",r({parentName:"p"},{href:"https://backstage.io/docs/features/software-catalog/"}),"Backstage Software Catalog"),", which is a data store that allows an organization to centralize and visualize its many software services and components. Backstage inspects and transforms an organization's disparate software services and parts into a centralized data store. This blog post introduces the concept of incremental entity providers, which allow Backstage to scale ingestion to even larger datasets."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"catalog pipeline",src:a(760852).Z,width:"451",height:"241"})),(0,n.kt)("p",null,"A common use case is for an organization to want to surface ownership and metadata about repositories. Backstage provides a mechanism for discovering and transforming repository information into a standard data structure and persisting it into the Backstage ",(0,n.kt)("a",r({parentName:"p"},{href:"https://backstage.io/docs/features/software-catalog/"}),"Catalog"),". This process is known as ingestion, where all data is transformed into a standard Backstage data structure known as an entity. Entities in the Catalog\u2019s data store are accessible to the Backstage App via the REST API."),(0,n.kt)("p",null,"Data is transformed into entities via what is known as the ingestion and processing loop, which can be thought of as an ",(0,n.kt)("a",r({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Extract,_transform,_load"}),"extract, transform and load (ETL) pipeline"),", where raw data such as GitHub repositories are loaded from GitHub, transformed into entities and outputted to the Catalog."),(0,n.kt)("h2",r({},{id:"entity-providers"}),"Entity Providers"),(0,n.kt)("p",null,"Backstage offers what are known as ",(0,n.kt)("a",r({parentName:"p"},{href:"https://backstage.io/docs/features/software-catalog/life-of-an-entity"}),"entity providers")," as a means for ingesting the raw data into the pipeline and transforming them into Backstage entities. For example, Backstage comes with a ",(0,n.kt)("a",r({parentName:"p"},{href:"https://backstage.io/docs/reference/plugin-catalog-backend-module-github"}),"GitHub Entity Provider")," that finds all catalog-info.yaml files in GitHub repositories. The processing loop transforms them into Backstage entities and subsequently persists them to the software catalog."),(0,n.kt)("p",null,"Entity providers are a relatively new abstraction and the recommended way to ingest data into the catalog. The Backstage catalog engine starts each registered entity provider, which connects to its data source (e.g., the GitHub Entity Provider connects to GitHub). The entity provider will query the external data source and convert the data into the entity format. Finally, the entity provider issues what is known as a mutation to the catalog engine. A mutation is a signal from the entity provider to the catalog engine that entities are available to be processed and stored."),(0,n.kt)("p",null,"A mutation can be either a full mutation or a delta mutation. A full mutation replaces all entities previously ingested by the entity provider with a new set of entities. The entity provider will remove all entities not found in the latest ingestion. A full mutation can be used to ingest relatively small datasets (less than 10,000 entities); however, ingesting more during a full ingestion may cause out-of-memory errors and delay the processing of entities from other entity providers. A delta mutation can surgically add and remove entities from the catalog. A delta mutation is useful when the data source provides events-based APIs like webhooks, which allows the Backstage catalog engine to ingest a small number of entities as they get added, updated and/or deleted."),(0,n.kt)("h2",r({},{id:"incremental-entity-providers"}),"Incremental entity providers"),(0,n.kt)("p",null,"A large organization typically deals with massive datasets. Until recently, ingesting large datasets with entity providers has been problematic because performing a full ingestion resulted in out-of-memory errors, and many data sources don\u2019t provide webhooks or other events-based APIs. At the same time, the datasets were too large to efficiently manage through targeted delta mutations."),(0,n.kt)("p",null,"This is a problem that ",(0,n.kt)("a",r({parentName:"p"},{href:"http://hp.com"}),"DevEx team at HP")," faced when building their software catalog with Backstage. ",(0,n.kt)("a",r({parentName:"p"},{href:"https://github.com/dekoding"}),"Damon Kaswell"),", Senior Application Developer on the DevEx team at HP, shared their experience at ",(0,n.kt)("a",r({parentName:"p"},{href:"https://www.youtube.com/watch?v=5qHyZntKXRU&list=PLj6h78yzYM2OKySsTuiip3BqmdYZQRnSf&index=13"}),"BackstageCon 2022"),", detailing the problem and the solution that ",(0,n.kt)("a",r({parentName:"p"},{href:"https://frontside.com/"}),"Frontside")," created in collaboration with developers on HP\u2019s DevEx team."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Damon Kaswell",src:a(168637).Z,width:"204",height:"224"})),(0,n.kt)("p",null,"The solution HP and ",(0,n.kt)("a",r({parentName:"p"},{href:"https://frontside.com/"}),"Frontside")," arrived at was to implement an incremental entity provider. An incremental entity provider effectively performs a full mutation using a series of delta mutations combined with a mark and sweep mechanism. It paginates through the dataset, tracking entities retrieved from each page and the cursor of the next page, pausing ingestion every few seconds to give the processing loop time to process existing entities. Once it reaches the end of the dataset, it determines which entities were not ingested during this ingestion cycle and emits a delta mutation to delete unmarked entities."),(0,n.kt)("p",null,"Simply by adding a few new tables to the database schema, the incremental ingestion entity provider converts any existing entity provider into an incremental entity provider. These tables allow the incremental entity provider to be long-lived and keep track of its current location in the dataset by persisting a cursor that it uses to page through any large dataset. The larger the dataset, the more pages of data or bursts of work the incremental entity provider will ingest\u2014but there will be no out-of-memory errors, effectively removing scalability problems."),(0,n.kt)("p",null,"The results speak for themselves. Migrating from regular entity providers to incremental entity providers reduced ingestion time by 92% \u2013 from over 4 and a half hours to just 20 minutes. Incremental entity providers eliminated the ingestion maintenance burden from being a constant problem to a non-issue. Writing reliable integration with external services can now be done in days instead of weeks."),(0,n.kt)("h2",r({},{id:"go-forth-and-ingest"}),"Go forth and ingest!"),(0,n.kt)("p",null,"Backstage provides a robust framework for ingesting data from external sources, but HP needed to scale it beyond its design. The Backstage framework allowed ",(0,n.kt)("a",r({parentName:"p"},{href:"https://frontside.com/"}),"Frontside")," and HP\u2019s developers to extend it with a plugin to support HP\u2019s scaling requirements."),(0,n.kt)("p",null,"We're delighted to share that as of ",(0,n.kt)("a",r({parentName:"p"},{href:"https://github.com/backstage/backstage/pull/14356"}),"this PR"),", the incremental ingestion backend is available for anyone to use with Backstage. The solution was released open source as ",(0,n.kt)("a",r({parentName:"p"},{href:"https://github.com/backstage/backstage/tree/master/plugins/catalog-backend-module-incremental-ingestion#backstageplugin-catalog-backend-module-incremental-ingestion"}),"@backstage/plugin-catalog-backend-module-incremental-ingestion")," and contains a package for creating incremental entity providers. The plugin's ",(0,n.kt)("a",r({parentName:"p"},{href:"https://github.com/backstage/backstage/tree/master/plugins/catalog-backend-module-incremental-ingestion"}),"repository README")," has detailed configuration and usage outlined."),(0,n.kt)("p",null,"The incremental ingestion entity provider is an excellent addition to the Backstage stack. Battle-tested on large datasets, the incremental entity provider is a significant step forward in smoothing the path to successful ingestion at scale."))}g.isMDXComponent=!0},760852:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/catalog-pipeline-1c001702d710f795d338a19754eacfcf.png"},168637:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/damon-32d83539fe147296dc9e4b3c3bcab6ff.jpg"}}]);