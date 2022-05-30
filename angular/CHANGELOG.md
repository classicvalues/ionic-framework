# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [6.1.4-nightly.20220530](https://github.com/ionic-team/ionic/compare/v5.6.6...v6.1.4-nightly.20220530) (2022-05-30)


### Bug Fixes

* **angular:** apply touch, dirty and pristine form control classes ([#24558](https://github.com/ionic-team/ionic/issues/24558)) ([273ae2c](https://github.com/ionic-team/ionic/commit/273ae2cc087b2a5a30fb50a1b0eaeb0a221900fc)), closes [#24483](https://github.com/ionic-team/ionic/issues/24483)
* **angular:** attach change detector ref for inline overlays ([#24521](https://github.com/ionic-team/ionic/issues/24521)) ([5c54593](https://github.com/ionic-team/ionic/commit/5c54593dde64ae61347568405ebf74502cfff370)), closes [#24502](https://github.com/ionic-team/ionic/issues/24502)
* **angular:** button components now route correctly without reload ([#25071](https://github.com/ionic-team/ionic/issues/25071)) ([1c26e9b](https://github.com/ionic-team/ionic/commit/1c26e9b9b0fc45a8691e972fe17a168f89a27a79))
* **angular:** inline modals now add .ion-page class correctly ([#24751](https://github.com/ionic-team/ionic/issues/24751)) ([ef46eaf](https://github.com/ionic-team/ionic/commit/ef46eafc9476a85ea3369e542f528d01d3cca0a8)), closes [#24750](https://github.com/ionic-team/ionic/issues/24750)
* **angular:** item styling when control has value ([#24932](https://github.com/ionic-team/ionic/issues/24932)) ([eea25d0](https://github.com/ionic-team/ionic/commit/eea25d091d7eb319d6ec1de8b793881d3a10949b)), closes [#23809](https://github.com/ionic-team/ionic/issues/23809)
* **angular:** modal and popover now have correct props defined on angular component ([#23565](https://github.com/ionic-team/ionic/issues/23565)) ([e5a7b34](https://github.com/ionic-team/ionic/commit/e5a7b342623b159d41cc83e0a418fb3984ceb3a7))
* **angular:** nested tabs now go to correct page ([#23902](https://github.com/ionic-team/ionic/issues/23902)) ([1ed9f07](https://github.com/ionic-team/ionic/commit/1ed9f07060736d0c951910427fb12b250d7dd9af)), closes [#23897](https://github.com/ionic-team/ionic/issues/23897)
* **angular:** ngOnDestroy runs inside angular zone ([#24949](https://github.com/ionic-team/ionic/issues/24949)) ([a8fd2d9](https://github.com/ionic-team/ionic/commit/a8fd2d9199ca92d62bce6abf8caccc7709fa5ca1)), closes [#22571](https://github.com/ionic-team/ionic/issues/22571)
* **angular:** overlay interfaces are now properly exported ([#23847](https://github.com/ionic-team/ionic/issues/23847)) ([c925274](https://github.com/ionic-team/ionic/commit/c925274c3bb22532a323b2a07771d7448f7de542)), closes [#23846](https://github.com/ionic-team/ionic/issues/23846)
* **angular:** popover will respect side attribute value ([#24470](https://github.com/ionic-team/ionic/issues/24470)) ([e6955a2](https://github.com/ionic-team/ionic/commit/e6955a26b92fc536c5c73b60b5943881c7d58ee1)), closes [#24466](https://github.com/ionic-team/ionic/issues/24466)
* **angular:** prevent duplicate event emissions ([#24200](https://github.com/ionic-team/ionic/issues/24200)) ([fc1eae9](https://github.com/ionic-team/ionic/commit/fc1eae982d7493f5b69fb18829f9c796f05a0d47))
* **angular:** routerLink allows opening in a new tab for link elements ([#25014](https://github.com/ionic-team/ionic/issues/25014)) ([b010f07](https://github.com/ionic-team/ionic/commit/b010f077fe51992dd9dd8ced69769a8eb91ac055)), closes [#24413](https://github.com/ionic-team/ionic/issues/24413)
* **angular:** routerLink with null value works with Angular 13 ([#24622](https://github.com/ionic-team/ionic/issues/24622)) ([90a9a9c](https://github.com/ionic-team/ionic/commit/90a9a9c3e813c8db0a9d6b3b25c152929bea80fe)), closes [#24586](https://github.com/ionic-team/ionic/issues/24586)
* **angular:** select method now has correct types ([#23953](https://github.com/ionic-team/ionic/issues/23953)) ([3c1be89](https://github.com/ionic-team/ionic/commit/3c1be89112d464e77d65c875223138aaedf350cd)), closes [#23952](https://github.com/ionic-team/ionic/issues/23952)
* **angular:** setup config properly ([#24028](https://github.com/ionic-team/ionic/issues/24028)) ([907996c](https://github.com/ionic-team/ionic/commit/907996ce16446d0dc12939da325b7b5dae09ebd9))
* **angular:** setup config properly ([#24054](https://github.com/ionic-team/ionic/issues/24054)) ([e001f24](https://github.com/ionic-team/ionic/commit/e001f24f2ca99abbc98b923dd1a132cc83b3b23f)), closes [#24051](https://github.com/ionic-team/ionic/issues/24051) [#24052](https://github.com/ionic-team/ionic/issues/24052)
* **angular:** strict type usage ([#24221](https://github.com/ionic-team/ionic/issues/24221)) ([816096f](https://github.com/ionic-team/ionic/commit/816096f89747e943a4a273175d384189f25e4628))
* **angular:** use initialize function when setting up ionic angular to avoid config errors ([#24004](https://github.com/ionic-team/ionic/issues/24004)) ([f112ad4](https://github.com/ionic-team/ionic/commit/f112ad4490dc4a179dc3feab495530e14e655e5a)), closes [#22853](https://github.com/ionic-team/ionic/issues/22853)
* **angular:** warnings are no longer generated when running tests with ng test ([#23292](https://github.com/ionic-team/ionic/issues/23292)) ([9cb6c80](https://github.com/ionic-team/ionic/commit/9cb6c80b3db4273e9c003a62a3065427995cb353)), closes [#19926](https://github.com/ionic-team/ionic/issues/19926)
* **icon:** update to ionicons 6 to resolve typescript 4.4 errors ([#24185](https://github.com/ionic-team/ionic/issues/24185)) ([118c606](https://github.com/ionic-team/ionic/commit/118c606703f792f830d92f1148882b5daa3f180f))
* **input:** ionInput event emits with type of InputEvent ([#24111](https://github.com/ionic-team/ionic/issues/24111)) ([52cd5d0](https://github.com/ionic-team/ionic/commit/52cd5d0ccedb8013c860198fc69f6bc0d4e6d386))
* **modal:** .ion-page element is now correctly added ([#24811](https://github.com/ionic-team/ionic/issues/24811)) ([3d0f999](https://github.com/ionic-team/ionic/commit/3d0f99904fe192fcb5f529780858a0f25f076af7)), closes [#24809](https://github.com/ionic-team/ionic/issues/24809)
* **modal:** add sheet modal properties for angular ([#23899](https://github.com/ionic-team/ionic/issues/23899)) ([d1763fc](https://github.com/ionic-team/ionic/commit/d1763fc8b56c8cb5272224ae0faaebfe3e516fdb))
* **overlays:** overlay interfaces are now exported from framework packages and documented ([#23619](https://github.com/ionic-team/ionic/issues/23619)) ([773bbcb](https://github.com/ionic-team/ionic/commit/773bbcb211d3cf0caf38c25b44e666d98ddfafe5)), closes [#22790](https://github.com/ionic-team/ionic/issues/22790)
* **react, vue:** remove sideeffects to improve treeshaking ([#24313](https://github.com/ionic-team/ionic/issues/24313)) ([13d4418](https://github.com/ionic-team/ionic/commit/13d4418588b98d301b05ebd94e0eac670163a553))
* **tabs:** angular, fire willChange event before selected tab changes ([#24910](https://github.com/ionic-team/ionic/issues/24910)) ([d5efa11](https://github.com/ionic-team/ionic/commit/d5efa113317eaf874712134dc9b8e4502aa4760f))
* **vue:** canDismiss definition is now exposed ([#25195](https://github.com/ionic-team/ionic/issues/25195)) ([e5e0e24](https://github.com/ionic-team/ionic/commit/e5e0e24f76c15c1a49f759b1a140e337f5393edd))


### Code Refactoring

* **angular:** remove Config.set() method ([#22918](https://github.com/ionic-team/ionic/issues/22918)) ([9e05891](https://github.com/ionic-team/ionic/commit/9e0589173607b3c0eff7794079123354c2eeaa1a))


### Features

* **accordion-group:** add animated property to disable animations ([#23530](https://github.com/ionic-team/ionic/issues/23530)) ([9a60dd0](https://github.com/ionic-team/ionic/commit/9a60dd0ea7c55acf0fdd1161433e5b4ed40778f2))
* **accordion:** add accordion and accordion-group components ([#22865](https://github.com/ionic-team/ionic/issues/22865)) ([073883a](https://github.com/ionic-team/ionic/commit/073883a0987149e9f6258ca43c46f5ed4bce0dc5)), closes [#17094](https://github.com/ionic-team/ionic/issues/17094)
* **all:** add CustomEvents types to components that emit events ([#23956](https://github.com/ionic-team/ionic/issues/23956)) ([8708095](https://github.com/ionic-team/ionic/commit/87080951112a409893a4bac2def1deca06642b16)), closes [#22925](https://github.com/ionic-team/ionic/issues/22925)
* **angular:** build for angular 12.0 ([#23970](https://github.com/ionic-team/ionic/issues/23970)) ([3451a34](https://github.com/ionic-team/ionic/commit/3451a34ad0c893be0b6c17dc91ac9a75d2b9b52c))
* **breadcrumbs:** add breadcrumbs component ([#22701](https://github.com/ionic-team/ionic/issues/22701)) ([2f6b1e4](https://github.com/ionic-team/ionic/commit/2f6b1e4eea307c6f14345704e5824378ef079acb)), closes [#22770](https://github.com/ionic-team/ionic/issues/22770)
* **datetime:** add calendar picker ([#23416](https://github.com/ionic-team/ionic/issues/23416)) ([932d3ca](https://github.com/ionic-team/ionic/commit/932d3ca62f3e3ef08acb065ce6ec46faa3811f96)), closes [#19423](https://github.com/ionic-team/ionic/issues/19423)
* **datetime:** add clear button ([#23920](https://github.com/ionic-team/ionic/issues/23920)) ([18765e7](https://github.com/ionic-team/ionic/commit/18765e7e39b9f205f47f394d26d6ecc4b53e17ef)), closes [#17482](https://github.com/ionic-team/ionic/issues/17482)
* **datetime:** add firstDayOfWeek property ([#23692](https://github.com/ionic-team/ionic/issues/23692)) ([ea348f0](https://github.com/ionic-team/ionic/commit/ea348f005aef7b2fda581a99338139f6fefcda63)), closes [#23556](https://github.com/ionic-team/ionic/issues/23556)
* **datetime:** add hourCycle property ([#23686](https://github.com/ionic-team/ionic/issues/23686)) ([6342fde](https://github.com/ionic-team/ionic/commit/6342fde56c7687703edd212b8383536c8b9a6400)), closes [#23661](https://github.com/ionic-team/ionic/issues/23661)
* **datetime:** add showDefaultTimeLabel property and time-label slot ([#23577](https://github.com/ionic-team/ionic/issues/23577)) ([7ac0109](https://github.com/ionic-team/ionic/commit/7ac010943b2c9ad42a1833153ea16ccffd169b91)), closes [#23555](https://github.com/ionic-team/ionic/issues/23555)
* **datetime:** add size property ([#23649](https://github.com/ionic-team/ionic/issues/23649)) ([321341d](https://github.com/ionic-team/ionic/commit/321341d97dff98b76b69a1efce58923a80e92bc4)), closes [#23518](https://github.com/ionic-team/ionic/issues/23518)
* **datetime:** isDateEnabled to enable/disable specific days  ([#24898](https://github.com/ionic-team/ionic/issues/24898)) ([e932a04](https://github.com/ionic-team/ionic/commit/e932a042237e6f44bf278bcbd895d8569fc17348)), closes [#24209](https://github.com/ionic-team/ionic/issues/24209)
* **header, footer:** add ios fading header style ([#24011](https://github.com/ionic-team/ionic/issues/24011)) ([7ce3959](https://github.com/ionic-team/ionic/commit/7ce3959b66a08e980c7dac3bb7d7df6bf0ae874e))
* **item:** add helper text, error text, counter, shape, and fill mode ([#23354](https://github.com/ionic-team/ionic/issues/23354)) ([faefe97](https://github.com/ionic-team/ionic/commit/faefe97da6a9d5beff1183d10efd0df9c4e3ebd7)), closes [#19619](https://github.com/ionic-team/ionic/issues/19619)
* **item:** counter formatter to customize counter text display ([#24336](https://github.com/ionic-team/ionic/issues/24336)) ([171020e](https://github.com/ionic-team/ionic/commit/171020e9d200ccfdef0f01c427b295bb50dd1fef)), closes [#24327](https://github.com/ionic-team/ionic/issues/24327)
* **modal:** ability to programmatically set current sheet breakpoint ([#24648](https://github.com/ionic-team/ionic/issues/24648)) ([3145c76](https://github.com/ionic-team/ionic/commit/3145c76934ac711038f9dcba98a385dfbe754953)), closes [#23917](https://github.com/ionic-team/ionic/issues/23917)
* **modal:** modals can now be used inline ([#23341](https://github.com/ionic-team/ionic/issues/23341)) ([3be1c3d](https://github.com/ionic-team/ionic/commit/3be1c3dcd73e6039a89b19b409e63877cda37f6e)), closes [#20117](https://github.com/ionic-team/ionic/issues/20117) [#20263](https://github.com/ionic-team/ionic/issues/20263)
* **platform:** add ability to override platform detection methods ([#23915](https://github.com/ionic-team/ionic/issues/23915)) ([45cabae](https://github.com/ionic-team/ionic/commit/45cabae04bf9236cd069793fbf2ac8f68c372cc3)), closes [#19737](https://github.com/ionic-team/ionic/issues/19737)
* **popover:** popover can now be used inline ([#23231](https://github.com/ionic-team/ionic/issues/23231)) ([308fa1c](https://github.com/ionic-team/ionic/commit/308fa1c0dd054cfc2ea54d2edc99e7a4b549f6f0))
* **range:** add knobMoveStart and knobMoveEnd events ([#25011](https://github.com/ionic-team/ionic/issues/25011)) ([f5cb1f8](https://github.com/ionic-team/ionic/commit/f5cb1f8444ba050042e788f9f9ec7b6309bf1b60))
* **range:** add support for customizing pin format ([#22972](https://github.com/ionic-team/ionic/issues/22972)) ([8f2c4f7](https://github.com/ionic-team/ionic/commit/8f2c4f73db167503cdf60222f42bcaadf905b401))
* **react:** add setupIonicReact function ([#24254](https://github.com/ionic-team/ionic/issues/24254)) ([55db38d](https://github.com/ionic-team/ionic/commit/55db38ddc541c2632c7d3e4e4c9400ff5b5dfe8c)), closes [#24139](https://github.com/ionic-team/ionic/issues/24139)
* **segment:** add keyboard navigation, add selectOnFocus property to control selection follow focus behavior ([#23590](https://github.com/ionic-team/ionic/issues/23590)) ([b6c53e5](https://github.com/ionic-team/ionic/commit/b6c53e539b0855fa95b0fe02e5fa74ce403b68b8)), closes [#23520](https://github.com/ionic-team/ionic/issues/23520)
* **select:** add event for when overlay is dismissed ([#24099](https://github.com/ionic-team/ionic/issues/24099)) ([c1ecf94](https://github.com/ionic-team/ionic/commit/c1ecf94e4e6e320b61606da3c889926f7372ced7))
* **select:** add event for when overlay is dismissed ([#24400](https://github.com/ionic-team/ionic/issues/24400)) ([b835b7c](https://github.com/ionic-team/ionic/commit/b835b7c0c7840f41c54f96743cc0a779ff474ab6))
* **slides:** add IonicSlides module for Swiper migration, deprecate ion-slides ([#23844](https://github.com/ionic-team/ionic/issues/23844)) ([11fda41](https://github.com/ionic-team/ionic/commit/11fda41420343886dabd97096690be38f1c40524)), closes [#23447](https://github.com/ionic-team/ionic/issues/23447)
* **slides:** add IonicSwiper modules, deprecate ion-slides, and add link to migration ([#23447](https://github.com/ionic-team/ionic/issues/23447)) ([623c84a](https://github.com/ionic-team/ionic/commit/623c84ab082668a996c654e18ffc9768f68b85dd))
* **slides:** add support for Swiper 7 ([#24190](https://github.com/ionic-team/ionic/issues/24190)) ([d0b6130](https://github.com/ionic-team/ionic/commit/d0b61307c6b7ff1589646c43f989260b59db1473))


### BREAKING CHANGES

* **all:** The `RadioChangeEventDetail` interface has been removed in favor of `RadioGroupChangeEventDetail`.
* **datetime:** The `ion-datetime` component has been revamped to use a new calendar style. As a result, some APIs have been removed. See https://github.com/ionic-team/ionic-framework/blob/master/BREAKING.md for more details.
* **popover:** Converted `ion-popover` to use the Shadow DOM.
* **angular:** The `Config.set()` method has been removed. See https://ionicframework.com/docs/angular/config for examples on how to set config globally, per-component, and per-platform.





## [6.1.3](https://github.com/ionic-team/ionic/compare/v6.1.2...v6.1.3) (2022-04-27)


### Bug Fixes

* **vue:** canDismiss definition is now exposed ([#25195](https://github.com/ionic-team/ionic/issues/25195)) ([e5e0e24](https://github.com/ionic-team/ionic/commit/e5e0e24f76c15c1a49f759b1a140e337f5393edd))





## [6.1.2](https://github.com/ionic-team/ionic/compare/v6.1.1...v6.1.2) (2022-04-20)

**Note:** Version bump only for package @ionic/angular





## [6.1.1](https://github.com/ionic-team/ionic/compare/v6.1.0...v6.1.1) (2022-04-15)

**Note:** Version bump only for package @ionic/angular





# [6.1.0](https://github.com/ionic-team/ionic/compare/v6.0.14...v6.1.0) (2022-04-13)


### Bug Fixes

* **angular:** button components now route correctly without reload ([#25071](https://github.com/ionic-team/ionic/issues/25071)) ([1c26e9b](https://github.com/ionic-team/ionic/commit/1c26e9b9b0fc45a8691e972fe17a168f89a27a79))
* **angular:** item styling when control has value ([#24932](https://github.com/ionic-team/ionic/issues/24932)) ([eea25d0](https://github.com/ionic-team/ionic/commit/eea25d091d7eb319d6ec1de8b793881d3a10949b)), closes [#23809](https://github.com/ionic-team/ionic/issues/23809)
* **angular:** routerLink allows opening in a new tab for link elements ([#25014](https://github.com/ionic-team/ionic/issues/25014)) ([b010f07](https://github.com/ionic-team/ionic/commit/b010f077fe51992dd9dd8ced69769a8eb91ac055)), closes [#24413](https://github.com/ionic-team/ionic/issues/24413)


### Features

* **datetime:** isDateEnabled to enable/disable specific days  ([#24898](https://github.com/ionic-team/ionic/issues/24898)) ([e932a04](https://github.com/ionic-team/ionic/commit/e932a042237e6f44bf278bcbd895d8569fc17348)), closes [#24209](https://github.com/ionic-team/ionic/issues/24209)
* **item:** counter formatter to customize counter text display ([#24336](https://github.com/ionic-team/ionic/issues/24336)) ([171020e](https://github.com/ionic-team/ionic/commit/171020e9d200ccfdef0f01c427b295bb50dd1fef)), closes [#24327](https://github.com/ionic-team/ionic/issues/24327)
* **modal:** ability to programmatically set current sheet breakpoint ([#24648](https://github.com/ionic-team/ionic/issues/24648)) ([3145c76](https://github.com/ionic-team/ionic/commit/3145c76934ac711038f9dcba98a385dfbe754953)), closes [#23917](https://github.com/ionic-team/ionic/issues/23917)
* **range:** add knobMoveStart and knobMoveEnd events ([#25011](https://github.com/ionic-team/ionic/issues/25011)) ([f5cb1f8](https://github.com/ionic-team/ionic/commit/f5cb1f8444ba050042e788f9f9ec7b6309bf1b60))
* **select:** add event for when overlay is dismissed ([#24400](https://github.com/ionic-team/ionic/issues/24400)) ([b835b7c](https://github.com/ionic-team/ionic/commit/b835b7c0c7840f41c54f96743cc0a779ff474ab6))





## [6.0.16](https://github.com/ionic-team/ionic/compare/v6.0.15...v6.0.16) (2022-04-08)


### Bug Fixes

* **angular:** button components now route correctly without reload ([#25071](https://github.com/ionic-team/ionic/issues/25071)) ([fb994fa](https://github.com/ionic-team/ionic/commit/fb994fa9a7721a3575fb8d123be34aea4bf076a4))





## [6.0.15](https://github.com/ionic-team/ionic/compare/v6.0.14...v6.0.15) (2022-04-06)


### Bug Fixes

* **angular:** item styling when control has value ([#24932](https://github.com/ionic-team/ionic/issues/24932)) ([eea25d0](https://github.com/ionic-team/ionic/commit/eea25d091d7eb319d6ec1de8b793881d3a10949b)), closes [#23809](https://github.com/ionic-team/ionic/issues/23809)
* **angular:** routerLink allows opening in a new tab for link elements ([#25014](https://github.com/ionic-team/ionic/issues/25014)) ([b010f07](https://github.com/ionic-team/ionic/commit/b010f077fe51992dd9dd8ced69769a8eb91ac055)), closes [#24413](https://github.com/ionic-team/ionic/issues/24413)





## [6.0.14](https://github.com/ionic-team/ionic/compare/v6.0.13...v6.0.14) (2022-03-30)

**Note:** Version bump only for package @ionic/angular





## [6.0.13](https://github.com/ionic-team/ionic/compare/v6.0.12...v6.0.13) (2022-03-23)


### Bug Fixes

* **angular:** ngOnDestroy runs inside angular zone ([#24949](https://github.com/ionic-team/ionic/issues/24949)) ([a8fd2d9](https://github.com/ionic-team/ionic/commit/a8fd2d9199ca92d62bce6abf8caccc7709fa5ca1)), closes [#22571](https://github.com/ionic-team/ionic/issues/22571)





## [6.0.12](https://github.com/ionic-team/ionic/compare/v6.0.11...v6.0.12) (2022-03-16)


### Bug Fixes

* **tabs:** angular, fire willChange event before selected tab changes ([#24910](https://github.com/ionic-team/ionic/issues/24910)) ([d5efa11](https://github.com/ionic-team/ionic/commit/d5efa113317eaf874712134dc9b8e4502aa4760f))





## [6.0.11](https://github.com/ionic-team/ionic/compare/v6.0.10...v6.0.11) (2022-03-09)

**Note:** Version bump only for package @ionic/angular





## [6.0.10](https://github.com/ionic-team/ionic/compare/v6.0.9...v6.0.10) (2022-03-02)


### Bug Fixes

* **modal:** .ion-page element is now correctly added ([#24811](https://github.com/ionic-team/ionic/issues/24811)) ([3d0f999](https://github.com/ionic-team/ionic/commit/3d0f99904fe192fcb5f529780858a0f25f076af7)), closes [#24809](https://github.com/ionic-team/ionic/issues/24809)





## [6.0.9](https://github.com/ionic-team/ionic/compare/v6.0.8...v6.0.9) (2022-02-23)

**Note:** Version bump only for package @ionic/angular





## [6.0.8](https://github.com/ionic-team/ionic/compare/v6.0.7...v6.0.8) (2022-02-15)

**Note:** Version bump only for package @ionic/angular





## [6.0.7](https://github.com/ionic-team/ionic/compare/v6.0.6...v6.0.7) (2022-02-09)


### Bug Fixes

* **angular:** inline modals now add .ion-page class correctly ([#24751](https://github.com/ionic-team/ionic/issues/24751)) ([ef46eaf](https://github.com/ionic-team/ionic/commit/ef46eafc9476a85ea3369e542f528d01d3cca0a8)), closes [#24750](https://github.com/ionic-team/ionic/issues/24750)





## [6.0.6](https://github.com/ionic-team/ionic/compare/v6.0.5...v6.0.6) (2022-02-09)

**Note:** Version bump only for package @ionic/angular





## [6.0.5](https://github.com/ionic-team/ionic/compare/v6.0.4...v6.0.5) (2022-02-02)

**Note:** Version bump only for package @ionic/angular





## [6.0.4](https://github.com/ionic-team/ionic/compare/v6.0.3...v6.0.4) (2022-01-26)


### Bug Fixes

* **angular:** routerLink with null value works with Angular 13 ([#24622](https://github.com/ionic-team/ionic/issues/24622)) ([90a9a9c](https://github.com/ionic-team/ionic/commit/90a9a9c3e813c8db0a9d6b3b25c152929bea80fe)), closes [#24586](https://github.com/ionic-team/ionic/issues/24586)





## [6.0.3](https://github.com/ionic-team/ionic/compare/v6.0.2...v6.0.3) (2022-01-19)


### Bug Fixes

* **angular:** apply touch, dirty and pristine form control classes ([#24558](https://github.com/ionic-team/ionic/issues/24558)) ([273ae2c](https://github.com/ionic-team/ionic/commit/273ae2cc087b2a5a30fb50a1b0eaeb0a221900fc)), closes [#24483](https://github.com/ionic-team/ionic/issues/24483)





## [6.0.2](https://github.com/ionic-team/ionic/compare/v6.0.1...v6.0.2) (2022-01-11)


### Bug Fixes

* **angular:** attach change detector ref for inline overlays ([#24521](https://github.com/ionic-team/ionic/issues/24521)) ([5c54593](https://github.com/ionic-team/ionic/commit/5c54593dde64ae61347568405ebf74502cfff370)), closes [#24502](https://github.com/ionic-team/ionic/issues/24502)
* **angular:** popover will respect side attribute value ([#24470](https://github.com/ionic-team/ionic/issues/24470)) ([e6955a2](https://github.com/ionic-team/ionic/commit/e6955a26b92fc536c5c73b60b5943881c7d58ee1)), closes [#24466](https://github.com/ionic-team/ionic/issues/24466)
