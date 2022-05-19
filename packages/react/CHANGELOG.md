# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [6.1.4-nightly.20220519](https://github.com/ionic-team/ionic/compare/v5.6.6...v6.1.4-nightly.20220519) (2022-05-19)


### Bug Fixes

* **accordion:** toggle icon now shows up in vue and react ([#23426](https://github.com/ionic-team/ionic/issues/23426)) ([c716617](https://github.com/ionic-team/ionic/commit/c7166179457a8e2c7e1702c5761bc6368dbd156f))
* **angular, react,  vue:** overlays no longer throw errors when used inside tests ([#24681](https://github.com/ionic-team/ionic/issues/24681)) ([897ae4a](https://github.com/ionic-team/ionic/commit/897ae4a4546ac0dd811125d5513ef23d133a1589)), closes [#24549](https://github.com/ionic-team/ionic/issues/24549) [#24590](https://github.com/ionic-team/ionic/issues/24590)
* **breadcrumb:** support routerLink on breadcrumb ([#24509](https://github.com/ionic-team/ionic/issues/24509)) ([5bb1414](https://github.com/ionic-team/ionic/commit/5bb1414f7fa04ea07954cb3f68883ee2f162586a)), closes [#24493](https://github.com/ionic-team/ionic/issues/24493)
* **icon:** update to ionicons 6 to resolve typescript 4.4 errors ([#24185](https://github.com/ionic-team/ionic/issues/24185)) ([118c606](https://github.com/ionic-team/ionic/commit/118c606703f792f830d92f1148882b5daa3f180f))
* **overlays:** overlay interfaces are now exported from framework packages and documented ([#23619](https://github.com/ionic-team/ionic/issues/23619)) ([773bbcb](https://github.com/ionic-team/ionic/commit/773bbcb211d3cf0caf38c25b44e666d98ddfafe5)), closes [#22790](https://github.com/ionic-team/ionic/issues/22790)
* **react-router:** remove page transition flicker on outlet mounting ([#24667](https://github.com/ionic-team/ionic/issues/24667)) ([bdb5c42](https://github.com/ionic-team/ionic/commit/bdb5c421d2d1f72c123c254e50c6d31b3c1a8f42)), closes [#24666](https://github.com/ionic-team/ionic/issues/24666)
* **react, vue:** remove sideeffects to improve treeshaking ([#24313](https://github.com/ionic-team/ionic/issues/24313)) ([13d4418](https://github.com/ionic-team/ionic/commit/13d4418588b98d301b05ebd94e0eac670163a553))
* **react,vue:** backdrop for inline modal/popover overlay ([#24453](https://github.com/ionic-team/ionic/issues/24453)) ([77f8412](https://github.com/ionic-team/ionic/commit/77f8412b746222793cd9d17f12f50d512ab5e886)), closes [#24449](https://github.com/ionic-team/ionic/issues/24449)
* **react:** add SSR check to IonTabs ([#23696](https://github.com/ionic-team/ionic/issues/23696)) ([f2a05be](https://github.com/ionic-team/ionic/commit/f2a05bed1e2a1150e8f1823bfed2d12a219d6ad0)), closes [#23651](https://github.com/ionic-team/ionic/issues/23651)
* **react:** add useRef wrapper to useIonOverlay state to avoid stale references ([#24553](https://github.com/ionic-team/ionic/issues/24553)) ([bce849c](https://github.com/ionic-team/ionic/commit/bce849c5f324522002eff7f8a5e5023150e9201c))
* **react:** building app for production now works correctly with vite ([#24515](https://github.com/ionic-team/ionic/issues/24515)) ([32fad3d](https://github.com/ionic-team/ionic/commit/32fad3d02cb6b012a772de03eafe3e3a6b1300e0)), closes [#24229](https://github.com/ionic-team/ionic/issues/24229)
* **react:** ensure inline modal content is visible ([#23968](https://github.com/ionic-team/ionic/issues/23968)) ([285a371](https://github.com/ionic-team/ionic/commit/285a371101e714e74d6df68701cbee9dfe23605e))
* **react:** export accordion and accordion group components ([#23497](https://github.com/ionic-team/ionic/issues/23497)) ([a664d42](https://github.com/ionic-team/ionic/commit/a664d4268dea8e84ab9e3b150043ac8f87fb53c7))
* **react:** fix to regression in overlay hooks dimiss method ([#24038](https://github.com/ionic-team/ionic/issues/24038)) ([655631d](https://github.com/ionic-team/ionic/commit/655631ddf059ce58066d5384d0ae186d7abc09a9)), closes [#24030](https://github.com/ionic-team/ionic/issues/24030)
* **react:** improve component compatibility with preact ([#24132](https://github.com/ionic-team/ionic/issues/24132)) ([15fc293](https://github.com/ionic-team/ionic/commit/15fc293d75aa21426616459c2596b46e2d460f49)), closes [#23516](https://github.com/ionic-team/ionic/issues/23516)
* **react:** modal now mounts child component independently of other modals ([#23903](https://github.com/ionic-team/ionic/issues/23903)) ([1e13429](https://github.com/ionic-team/ionic/commit/1e13429731c1d4b5200af7f5ca20aff1f3078bfe)), closes [#23904](https://github.com/ionic-team/ionic/issues/23904)
* **react:** nested router outlets will not reanimate entered views ([#24672](https://github.com/ionic-team/ionic/issues/24672)) ([43aa6c1](https://github.com/ionic-team/ionic/commit/43aa6c11f42fd5cf455c50419d5f5fbb327b2901)), closes [#24107](https://github.com/ionic-team/ionic/issues/24107)
* **react:** overlay hooks memorised properly to prevent re-renders ([#24010](https://github.com/ionic-team/ionic/issues/24010)) ([2c97712](https://github.com/ionic-team/ionic/commit/2c977126012ae0231d4e4fa63cc76a528bde699b)), closes [#23741](https://github.com/ionic-team/ionic/issues/23741)
* **react:** overlays shown with useIonModal and useIonPopover no longer render outside of main react tree ([f3e492c](https://github.com/ionic-team/ionic/commit/f3e492c897c8cda2b98050156f130654f4d7014a)), closes [#23516](https://github.com/ionic-team/ionic/issues/23516) [#23516](https://github.com/ionic-team/ionic/issues/23516)
* **react:** present and dismiss hooks return promises ([#24299](https://github.com/ionic-team/ionic/issues/24299)) ([4b26fea](https://github.com/ionic-team/ionic/commit/4b26feaa47efed4806aba565a52554db232b99e2))
* **react:** prevent errors when dismissing inline popover after containing element is removed ([#24569](https://github.com/ionic-team/ionic/issues/24569)) ([c8a392a](https://github.com/ionic-team/ionic/commit/c8a392aef5fbf25f59a573897d970c41abac04d2))
* **react:** properly check for custom elements to avoid errors in unit tests ([#24156](https://github.com/ionic-team/ionic/issues/24156)) ([8f188ea](https://github.com/ionic-team/ionic/commit/8f188eaae7422c9e81053868b9dd93b4ac738e98)), closes [#24149](https://github.com/ionic-team/ionic/issues/24149)
* **react:** scrolling to bottom of modal contents ([#24510](https://github.com/ionic-team/ionic/issues/24510)) ([1462cef](https://github.com/ionic-team/ionic/commit/1462cef69225e20582e2f9a0b8fd655ca2066b79)), closes [#24478](https://github.com/ionic-team/ionic/issues/24478)
* **react:** setupIonicReact no longer crashes in SSR environment ([#24604](https://github.com/ionic-team/ionic/issues/24604)) ([360643d](https://github.com/ionic-team/ionic/commit/360643d96a03b345c83b88c9ff06e9aa254dee81))
* **react:** treeshake ionic/core bundle ([#24989](https://github.com/ionic-team/ionic/issues/24989)) ([a296ca8](https://github.com/ionic-team/ionic/commit/a296ca875c18ec01bfc57972571e95a6d79f5678)), closes [#24497](https://github.com/ionic-team/ionic/issues/24497)
* **react:** useIonModal/useIonPopover dismiss accepts data and role ([#25209](https://github.com/ionic-team/ionic/issues/25209)) ([68b2f8b](https://github.com/ionic-team/ionic/commit/68b2f8bfe10946580b996e48c4ec1e2df94b8d49)), closes [#25208](https://github.com/ionic-team/ionic/issues/25208)
* **vue:** canDismiss definition is now exposed ([#25195](https://github.com/ionic-team/ionic/issues/25195)) ([e5e0e24](https://github.com/ionic-team/ionic/commit/e5e0e24f76c15c1a49f759b1a140e337f5393edd))


### Features

* **all:** add CustomEvents types to components that emit events ([#23956](https://github.com/ionic-team/ionic/issues/23956)) ([8708095](https://github.com/ionic-team/ionic/commit/87080951112a409893a4bac2def1deca06642b16)), closes [#22925](https://github.com/ionic-team/ionic/issues/22925)
* **breadcrumbs:** add breadcrumbs component ([#22701](https://github.com/ionic-team/ionic/issues/22701)) ([2f6b1e4](https://github.com/ionic-team/ionic/commit/2f6b1e4eea307c6f14345704e5824378ef079acb)), closes [#22770](https://github.com/ionic-team/ionic/issues/22770)
* **modal:** modals can now be used inline ([#23341](https://github.com/ionic-team/ionic/issues/23341)) ([3be1c3d](https://github.com/ionic-team/ionic/commit/3be1c3dcd73e6039a89b19b409e63877cda37f6e)), closes [#20117](https://github.com/ionic-team/ionic/issues/20117) [#20263](https://github.com/ionic-team/ionic/issues/20263)
* **platform:** add ability to override platform detection methods ([#23915](https://github.com/ionic-team/ionic/issues/23915)) ([45cabae](https://github.com/ionic-team/ionic/commit/45cabae04bf9236cd069793fbf2ac8f68c372cc3)), closes [#19737](https://github.com/ionic-team/ionic/issues/19737)
* **popover:** popover can now be used inline ([#23231](https://github.com/ionic-team/ionic/issues/23231)) ([308fa1c](https://github.com/ionic-team/ionic/commit/308fa1c0dd054cfc2ea54d2edc99e7a4b549f6f0))
* **react:** add custom elements bundle ([#23896](https://github.com/ionic-team/ionic/issues/23896)) ([c50d895](https://github.com/ionic-team/ionic/commit/c50d895370a56d0809019dc59fe32ec840b72f03))
* **react:** add setupIonicReact function ([#24254](https://github.com/ionic-team/ionic/issues/24254)) ([55db38d](https://github.com/ionic-team/ionic/commit/55db38ddc541c2632c7d3e4e4c9400ff5b5dfe8c)), closes [#24139](https://github.com/ionic-team/ionic/issues/24139)
* **slides:** add IonicSlides module for Swiper migration, deprecate ion-slides ([#23844](https://github.com/ionic-team/ionic/issues/23844)) ([11fda41](https://github.com/ionic-team/ionic/commit/11fda41420343886dabd97096690be38f1c40524)), closes [#23447](https://github.com/ionic-team/ionic/issues/23447)
* **slides:** add IonicSwiper modules, deprecate ion-slides, and add link to migration ([#23447](https://github.com/ionic-team/ionic/issues/23447)) ([623c84a](https://github.com/ionic-team/ionic/commit/623c84ab082668a996c654e18ffc9768f68b85dd))
* **slides:** add support for Swiper 7 ([#24190](https://github.com/ionic-team/ionic/issues/24190)) ([d0b6130](https://github.com/ionic-team/ionic/commit/d0b61307c6b7ff1589646c43f989260b59db1473))


### Performance Improvements

* **various:** don't use lazy-loaded icon names in components ([#24671](https://github.com/ionic-team/ionic/issues/24671)) ([484de50](https://github.com/ionic-team/ionic/commit/484de5074de212dffb4bf4f73bade7acec103fe8))


### BREAKING CHANGES

* **all:** The `RadioChangeEventDetail` interface has been removed in favor of `RadioGroupChangeEventDetail`.
* **popover:** Converted `ion-popover` to use the Shadow DOM.





## [6.1.3](https://github.com/ionic-team/ionic/compare/v6.1.2...v6.1.3) (2022-04-27)


### Bug Fixes

* **vue:** canDismiss definition is now exposed ([#25195](https://github.com/ionic-team/ionic/issues/25195)) ([e5e0e24](https://github.com/ionic-team/ionic/commit/e5e0e24f76c15c1a49f759b1a140e337f5393edd))





## [6.1.2](https://github.com/ionic-team/ionic/compare/v6.1.1...v6.1.2) (2022-04-20)

**Note:** Version bump only for package @ionic/react





## [6.1.1](https://github.com/ionic-team/ionic/compare/v6.1.0...v6.1.1) (2022-04-15)

**Note:** Version bump only for package @ionic/react





# [6.1.0](https://github.com/ionic-team/ionic/compare/v6.0.14...v6.1.0) (2022-04-13)

**Note:** Version bump only for package @ionic/react





## [6.0.16](https://github.com/ionic-team/ionic/compare/v6.0.15...v6.0.16) (2022-04-08)

**Note:** Version bump only for package @ionic/react





## [6.0.15](https://github.com/ionic-team/ionic/compare/v6.0.14...v6.0.15) (2022-04-06)

**Note:** Version bump only for package @ionic/react





## [6.0.14](https://github.com/ionic-team/ionic/compare/v6.0.13...v6.0.14) (2022-03-30)


### Bug Fixes

* **react:** treeshake ionic/core bundle ([#24989](https://github.com/ionic-team/ionic/issues/24989)) ([a296ca8](https://github.com/ionic-team/ionic/commit/a296ca875c18ec01bfc57972571e95a6d79f5678)), closes [#24497](https://github.com/ionic-team/ionic/issues/24497)





## [6.0.13](https://github.com/ionic-team/ionic/compare/v6.0.12...v6.0.13) (2022-03-23)

**Note:** Version bump only for package @ionic/react





## [6.0.12](https://github.com/ionic-team/ionic/compare/v6.0.11...v6.0.12) (2022-03-16)

**Note:** Version bump only for package @ionic/react





## [6.0.11](https://github.com/ionic-team/ionic/compare/v6.0.10...v6.0.11) (2022-03-09)

**Note:** Version bump only for package @ionic/react





## [6.0.10](https://github.com/ionic-team/ionic/compare/v6.0.9...v6.0.10) (2022-03-02)

**Note:** Version bump only for package @ionic/react





## [6.0.9](https://github.com/ionic-team/ionic/compare/v6.0.8...v6.0.9) (2022-02-23)

**Note:** Version bump only for package @ionic/react





## [6.0.8](https://github.com/ionic-team/ionic/compare/v6.0.7...v6.0.8) (2022-02-15)

**Note:** Version bump only for package @ionic/react





## [6.0.7](https://github.com/ionic-team/ionic/compare/v6.0.6...v6.0.7) (2022-02-09)

**Note:** Version bump only for package @ionic/react





## [6.0.6](https://github.com/ionic-team/ionic/compare/v6.0.5...v6.0.6) (2022-02-09)


### Bug Fixes

* **angular, react,  vue:** overlays no longer throw errors when used inside tests ([#24681](https://github.com/ionic-team/ionic/issues/24681)) ([897ae4a](https://github.com/ionic-team/ionic/commit/897ae4a4546ac0dd811125d5513ef23d133a1589)), closes [#24549](https://github.com/ionic-team/ionic/issues/24549) [#24590](https://github.com/ionic-team/ionic/issues/24590)





## [6.0.5](https://github.com/ionic-team/ionic/compare/v6.0.4...v6.0.5) (2022-02-02)


### Bug Fixes

* **react-router:** remove page transition flicker on outlet mounting ([#24667](https://github.com/ionic-team/ionic/issues/24667)) ([bdb5c42](https://github.com/ionic-team/ionic/commit/bdb5c421d2d1f72c123c254e50c6d31b3c1a8f42)), closes [#24666](https://github.com/ionic-team/ionic/issues/24666)
* **react:** nested router outlets will not reanimate entered views ([#24672](https://github.com/ionic-team/ionic/issues/24672)) ([43aa6c1](https://github.com/ionic-team/ionic/commit/43aa6c11f42fd5cf455c50419d5f5fbb327b2901)), closes [#24107](https://github.com/ionic-team/ionic/issues/24107)


### Performance Improvements

* **various:** don't use lazy-loaded icon names in components ([#24671](https://github.com/ionic-team/ionic/issues/24671)) ([484de50](https://github.com/ionic-team/ionic/commit/484de5074de212dffb4bf4f73bade7acec103fe8))





## [6.0.4](https://github.com/ionic-team/ionic/compare/v6.0.3...v6.0.4) (2022-01-26)


### Bug Fixes

* **react:** setupIonicReact no longer crashes in SSR environment ([#24604](https://github.com/ionic-team/ionic/issues/24604)) ([360643d](https://github.com/ionic-team/ionic/commit/360643d96a03b345c83b88c9ff06e9aa254dee81))





## [6.0.3](https://github.com/ionic-team/ionic/compare/v6.0.2...v6.0.3) (2022-01-19)


### Bug Fixes

* **react:** add useRef wrapper to useIonOverlay state to avoid stale references ([#24553](https://github.com/ionic-team/ionic/issues/24553)) ([bce849c](https://github.com/ionic-team/ionic/commit/bce849c5f324522002eff7f8a5e5023150e9201c))
* **react:** prevent errors when dismissing inline popover after containing element is removed ([#24569](https://github.com/ionic-team/ionic/issues/24569)) ([c8a392a](https://github.com/ionic-team/ionic/commit/c8a392aef5fbf25f59a573897d970c41abac04d2))





## [6.0.2](https://github.com/ionic-team/ionic/compare/v6.0.1...v6.0.2) (2022-01-11)


### Bug Fixes

* **breadcrumb:** support routerLink on breadcrumb ([#24509](https://github.com/ionic-team/ionic/issues/24509)) ([5bb1414](https://github.com/ionic-team/ionic/commit/5bb1414f7fa04ea07954cb3f68883ee2f162586a)), closes [#24493](https://github.com/ionic-team/ionic/issues/24493)
* **react,vue:** backdrop for inline modal/popover overlay ([#24453](https://github.com/ionic-team/ionic/issues/24453)) ([77f8412](https://github.com/ionic-team/ionic/commit/77f8412b746222793cd9d17f12f50d512ab5e886)), closes [#24449](https://github.com/ionic-team/ionic/issues/24449)
* **react:** building app for production now works correctly with vite ([#24515](https://github.com/ionic-team/ionic/issues/24515)) ([32fad3d](https://github.com/ionic-team/ionic/commit/32fad3d02cb6b012a772de03eafe3e3a6b1300e0)), closes [#24229](https://github.com/ionic-team/ionic/issues/24229)
* **react:** scrolling to bottom of modal contents ([#24510](https://github.com/ionic-team/ionic/issues/24510)) ([1462cef](https://github.com/ionic-team/ionic/commit/1462cef69225e20582e2f9a0b8fd655ca2066b79)), closes [#24478](https://github.com/ionic-team/ionic/issues/24478)
