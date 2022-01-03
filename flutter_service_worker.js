'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "8d297320a53f4009b697b197d87ab601",
".git/config": "00d3a2ef85a63e6ee53e94297ecc142b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "46611f9fcd08b77a3e6ec30c60364b02",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "065cbc6b471d892d52279722e0a2e6fe",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4a90857dc0dc941509f9b995a412391d",
".git/logs/refs/heads/master": "4fc40d92d56d6fe2099c7ce23fb7227e",
".git/logs/refs/remotes/origin/master": "6d06f80ee7ba9b4f8c532c625fdee548",
".git/objects/00/83b067e42c404c6d29468af61d8b5d94865b34": "a83f1a25866bb90be8d754960b1bee6f",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/8c094424473742421b55010bdb06d9210ebaf0": "4b1e0948cc1ab76b5f96e2f29e3bf818",
".git/objects/05/40053dfb8f7fb6e991a3752ddd28d9fe735eb1": "98cc9202bd805a1c0fadeade46c0dc6d",
".git/objects/06/e5c89e6b5fa748fbe90423283d69b9835c3664": "5f1e657ebb5ab10b0f67d7214e7cad5e",
".git/objects/0b/e96ce8f0c97549ae4c73923143faf796fdc282": "afe8207541ecaf19cfaafdeff1996b77",
".git/objects/0c/5ff68f38899757f950b407b9486d81172cfd62": "edfac595d1c8b8ab9db6cc581c9b628f",
".git/objects/0f/4304f2f876c4bafcc01ff544196f94c670ef4f": "52d49e45d79b37e27ba2031d5f61e851",
".git/objects/0f/aac72535bd3f7ed939d5ba0a30b95acc821318": "3549c3f99ff2095dacab0203cacd1027",
".git/objects/13/ca2f8d15fc336e16519480ff46f2e65942ca5f": "4f4eb86a1c021d0670a766c76b4a61d6",
".git/objects/15/7e05276c11361ef176ec150fde462b8db0e930": "2f57b76c0d8b7c76502e5b1f17a39257",
".git/objects/16/2c2264db600c1231a66fb623c2fdf39545a081": "e4d8fc8fa15e5a0fb1d52c54a1166c52",
".git/objects/17/ba2998e38ef1b8921dc3c7e1a0098b41ab4358": "a8cb7c63c6a0e45bb9d8f95644c4d51c",
".git/objects/1a/2d41d952506aedd186ce7827b42b35a745fd96": "de5b6d6ea89ea0a2b7ebe83966a47a77",
".git/objects/1d/c9f20b286956cfb590ed03efd55321f249f15c": "8fdd5b42994a14dd5e05b4691af72b2a",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/21/7bac925dd6d959fb47226e648092b0df268e71": "f601f3b075423c281af25c6f93ab15b8",
".git/objects/23/f3b8ddeeed0fade27dade1fc95c12928e24d74": "c699d588d632dd507a9499df4a4c4187",
".git/objects/24/8d0b7c9f836c7dc266633e8196ce60650d1db5": "233cc474bf9576bee145894689148b9e",
".git/objects/27/1fa766339e9fef3e0c7bfe5065179779a7aa58": "9e61e9f8843e124db80b112480518cc5",
".git/objects/28/479e502dc6d1db6a544e0ed217cfe81a15d113": "db2f0e7d80bd468268feeb5ec73f4e01",
".git/objects/2b/816a9d85e9c728e0cec8e6e84352975f5d1244": "1dbf05a5e5b2769e2d7c69df15fc7f82",
".git/objects/30/cb5db2e5522d331cd0aa4f759be5c546ff57ac": "3d9000096ed048118a9bc79ae2928881",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/3d/48df0c0130bd908c39072358e84448056aa668": "d6bba338b0866fc4066c114c3d9b75be",
".git/objects/3f/ae0dabfce4fcf80a858bd4279c39a07c6feaee": "020d096028df71319145a09d7f7287da",
".git/objects/40/8ddc0b49ae985188dd7da41a3fa53043e61938": "6a98accd860dbf6e91bae4a5d88001f8",
".git/objects/41/e9d34f52298d13b70778e407c7d6c0570d4908": "bc42b7bd36aef7fa96ae32a59b3ac2be",
".git/objects/41/fa7852f685ff093ca810045ca366d9a0ade1e6": "42bd9e35f5fa1b05aa890b62e038fb03",
".git/objects/42/c7dd7c1389125cb06288e8979601c30288e014": "a860d3672d6af1b4781c80df313347c9",
".git/objects/43/01af7973ff562394902b42b4a1025ac7890def": "f34b267e561dcb2269ac62307dd37da0",
".git/objects/43/621a8e9b6874c60ca7ea1ebb8abefb60906fdf": "625348dc49a721d883238d105fc19b19",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4e/7593831b855e674de4ac6c1ee4b938652362bb": "8accca310b078c2143aed388061c2c73",
".git/objects/4f/d7f1714ebcf891d2d2ad1fe256bc034fcc2415": "e63c4f6293e93cda51b779da8c389cd7",
".git/objects/50/5d7285d4fb03772f6224bc48d62674eec96c6d": "2285961137bde84db8759973893f289f",
".git/objects/50/a28831ae216b1a06c8f9a300d51f5c8c61b7f2": "4cfe7d5cfe3f1077fd2e5dc5a306a8bd",
".git/objects/51/f0e8227b9e60f5f7439674c23bf376dfca4a6d": "4422556df50f368b2bbedb86861e3d0b",
".git/objects/54/38154f52a3a8042f8c8783431ff9402465e9dc": "85ffb7b9f866865e45f8bfc7aab5d789",
".git/objects/55/de2607750ef5cebedd1c31975457169702d1ec": "f8d64a4a02af4724f9ed5d60d643c197",
".git/objects/58/473df7616e916ce49def3b6fef1696df413b15": "6fc5be6fec2b7960e58eea8d6e580d88",
".git/objects/5c/5fe3fab806d164c9dca4be41761734b49bfd52": "a0eda59d820547d1b14fa00b9909916a",
".git/objects/5f/959c76407cf441ab948456fcc6ed6306215771": "46145700c9ee6503880ef994f1a4ff72",
".git/objects/63/9b2b95bda0466c66d575e9c552569bcaf20039": "9644d2b16e1a54f39a0252f416f8303b",
".git/objects/66/98a06c3e078835ff6d2540e7acf03c67f286be": "a649e4e416965230f288a6e3db79c135",
".git/objects/68/f182b0177ca2de5dfd209c2b16982e12777b42": "a129a31f4a3aad21e53f95fd968687f8",
".git/objects/69/61e7f04f5e9373761c3d93392b00f6c439f6e1": "6e47cc2a193c152fe82c393e5cd6d63c",
".git/objects/71/6b9e3fdf9229e9b09a572961eb2f4e0941e98a": "cdb0b0558caf5d3b22a46a880b0688cb",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/4c702ab1d358d21f588fbc1979bc0ec1b88773": "356fccec6cd1df86ec58ff74179de3c4",
".git/objects/7c/76aab847887eaeb7b25ee6934b1856422cdfcb": "439916ad7bb03a409991e2cd2d92ccbf",
".git/objects/81/397cd1ee978b2c3dc0b9894058c88dcba3f497": "808e95f04bb69c0c76357ffd92e7a045",
".git/objects/81/d5e4a461f6504e3152fa23a580ff64cd53e6f6": "662fb8d1ccebc310f70f45d82609da5b",
".git/objects/82/4ccdb532fdb8af512167b6ad59a8ad88db5a65": "dda8dd2f6e0d06bf79c0cf1ba5f9b4ba",
".git/objects/82/7aed4b9a8f680d76629bca10256c8a6c2ddd90": "2f4751996cc121373199f05b5ff90891",
".git/objects/83/4fafa520091edd8cc9df4c6c2297e9e1e6747d": "1b0524e0ff67d6b3821674894765eea8",
".git/objects/85/2beafcc4e874fb7aead4fcc62da167af534742": "dae8731a65959eb86ed0e51f0ce39aca",
".git/objects/85/800850969cadf9e93c98bb348b8f0f9c1714a1": "80505bc9854d9de8b28137da0765111b",
".git/objects/86/dc353dfcfdfcb4c354823adcc3baf09d99a4e4": "d80db73979d80d55e127fa3850d84aaa",
".git/objects/87/80a3bed6e66df3a9af96f6619cf0812b1f8704": "f87f9af255f54809256eb6b6a9f4708d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/16b810dd1988687e715735a675baebe68860f6": "f389aa380832811e6e9773c11a7f99fc",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/cc4c652f3e662a8ac97134356aff0fffc990b0": "e19d193b4d314fac71fdd71e89a57a29",
".git/objects/8c/91244c3187ca3449f9004d0a88cf15491c23f5": "8462f48c958161e02e53055c047da73f",
".git/objects/8c/eefb75217d92ff0e200d45f8a19d1e0df2b8e5": "d5b1e6ecc4322013f775ce9d322fb7f9",
".git/objects/8e/3493bacfbd932f222fcadd5eb3c27542b35506": "f9ccc742d6d68a057edcd2a29820eb95",
".git/objects/90/3aaaae93262be48be1670ee06a46df882b25db": "a20aae3b552fdd023dcdc153aca1c370",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/94/78124120e3aa442077da0afa0382f88e5b2f10": "04fd7d0364315ce3eba5022e97f38545",
".git/objects/94/f0cfaf88650a4ae96f078317fdbc8ca2843363": "8230a3d5850b758434574ef0bcaa8f41",
".git/objects/95/3052b3a4a9f9b72b2cb4e8eba58522a56726f0": "74de22f58c876ce1b0df65701b66813f",
".git/objects/97/4b35ce5be63c79877c0a462e99cdda995ad741": "5c43eccd2491120e6ed4af97c3f4146e",
".git/objects/98/58454e2fffc614dbd975049b4b5d729c70c1f5": "7e628acc6682019414031200905dd4ca",
".git/objects/99/e71ba0ffe3648e742db399194233d4b5f55da6": "ee809ad72dc3a8b6eb54f1a198365691",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/9b/efeab6a43809060bd5c895357ed38d92b3b352": "fd8e582e9ea1e6dee24a2909d3c31d6b",
".git/objects/9c/8e7d8b0d3dc2dc42a942f14af09aacfc6294fa": "4c3da9d652b02ea51e90bf1a0eb917e8",
".git/objects/9d/0751a8532c6131b405444ac32bfd9fd8cb4bdc": "4184354a016b6e6bc0a48d928f5b79a7",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/de90972763be5b815a552101ff39763abd7ff9": "97351dedd204115b836e1e66c055af37",
".git/objects/a4/1bf621d2938709964b5e54449d20938ed2b26a": "183bb9d18318e2d45cdc8e7473d56672",
".git/objects/a5/bb7505f9a89f7629f041ce289ad6d15c9e56ea": "11e26e6d4867088821812c1942b28c4a",
".git/objects/a7/e7548a64b3fe6e751855d3c552ff0ee1b5ddab": "4147d956602492c8542950b735782516",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a9/f469f9fdfb4ff57ca91d3f2308da6d030aba40": "db70605e284ac0d060b3d007aa6db88e",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/3e839e825a2a9a85b907ceda89043e2f296eea": "e8a359fb4b60a49acd85d7d4fb8c5f33",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/b5/683e08fbc5ce08cefca7d1b41f560e56549d8a": "58f6efb121178645348617a437a3a5fa",
".git/objects/b5/a336d620454fdb428820279e3f3507161d999a": "0084b189eb1a43864f50a4527c711f07",
".git/objects/b6/0da7a22a0ecf43ee999e6f4530b6115cdcb7a6": "8633dde758ab69f22337ecd7127cfeef",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/f2d5d7fd8bef46b008a5c229052a216df13ef1": "0837b1c9dedabba8acd306adf952a603",
".git/objects/b9/0381abe916e5ec1549d0fd937f7a96a4408fd2": "2f60ecf980ca505c31b6cf77ef55a6c8",
".git/objects/c1/4b6a525065ce0d44e669efc7226017db7c12f9": "59ae58458ecc6f4a73f2f1559b2901f9",
".git/objects/c1/caf0bc6e08025196e8bdc27f606d41ba65cff4": "c0be4fca2a8d574a9b4e92b8ad5825e0",
".git/objects/c2/ed149298e4663a06675f50d86044c46ababf95": "ec59e7faeb3d414cc44b2f0634bfac5d",
".git/objects/c3/b7d4a4bd0d241dfa15bf0aa76cd8ca4948e3b4": "b7ad063c5a222ec71bd7da1418be9465",
".git/objects/c5/84338ca5afd54a357acb814e2d6a438dee367e": "85d906f4b7fe73c0094bc6862cecf8bb",
".git/objects/c7/f1a06884777c3799f16d9d73ce743bdec06a07": "7e64f89a2cb02bdc28caa8d01159b655",
".git/objects/c8/0369b6f46fab41b239877980d200b3627368d2": "13104fd3396f6fb11043bcec85b8188e",
".git/objects/c8/12795c63df35c7e9c116fb41499f6afa041490": "1cbe509693c5322a10d19f19f99e5e0c",
".git/objects/ca/2ae78b0ed779f96b86dcb916c21c3875382fd9": "d890bd5e3ea7d0841c9c11b2507d525d",
".git/objects/cb/89bee8ef9c215fb23583697899f129dee4fba4": "cfc95505b366ddb54caca2c4694beb24",
".git/objects/cc/8d800776418a5ba77ae00a27165fa312466a1a": "40fa09e246ecdc29849692ebb03f2f5f",
".git/objects/cc/d7b29999311456b4b0a8c352e6a8a8c08b27ce": "671bae0430e176e66814098b7fc9c47c",
".git/objects/d0/ece3cb1642595c9cfd256bf3388aa3329eb3ab": "09656fd4c15ae811ac6a79566179f04f",
".git/objects/d1/44a273b3c9a058a1d8cb12a1f9d89a6e95d08b": "52f2b98a5a517ee7ddd9d832f54c7226",
".git/objects/d4/b02637cd1178eec6db15a16adf54e82f63e7fd": "4571e82a530576e8ed99b016ec90900e",
".git/objects/d5/1a99b587fba9a91bff2ee0550296f6ebbe7a0d": "233c153c0956aa4fdd04208bd9851d1e",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/d7/f346f876ace9614b0abe816ff78f6b0e5448ba": "decaced370aabffe21430cb4961cf26c",
".git/objects/d8/04badf732aa462920368af75ea4208962a21e6": "65b7fb12d0de89829a0a917c4080c1ea",
".git/objects/dc/24616bf3b169990a56171a9a63fc2cb2c53f75": "7771c2f56171939206335acf3604d886",
".git/objects/dc/d1925ea65d09e8f212c4dbf30a2e9621b21111": "ffb28b115858525acec9483c6ffd8915",
".git/objects/e1/6bc53a9957930227952f7f3c672cb772631755": "7dd2ada722b16bb9368bd39077a5bea7",
".git/objects/e3/dfe6953eeafd88a23c5709ea8eaeb12621c58e": "9aeb236d822db1c072cbd89fb20124c7",
".git/objects/e5/02523bc2dd482b1a658ca12981227c145e9a52": "b7738b5c6b0f0c559e81130df38d9c49",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e8/9bca5dee04c61dcb14a5683a4cdc52cf6fcb5e": "159c7203a469a1b5a7008e2d00d6bf95",
".git/objects/e8/a8d38d53558398d50037bd5d9c62f9619234c0": "f9ec321823f0cff41651672d9ff43f0e",
".git/objects/e9/113c6a1e14962f4ba52fc395418fce85c74566": "f811fc120a8e1a9880dba2e98b83a192",
".git/objects/ec/065d2067cf9616af51b91f22907765f27b31ce": "9de692dd56edbc1ad430129e34fe4b67",
".git/objects/ed/763f42ef5bd635462e3af7d01d8d000f3a57cd": "03970d0721c6fa97b8328be9ebb0a3d2",
".git/objects/f1/0555c65faf5f8e851b3d60650e55dcfc05542f": "10cdba8709fe1ef99b7c8ac85980fb75",
".git/objects/f1/58339c49f252144b0e665ab8aed9b52b99dca3": "fba69544fe09d78646ccfa6606e51ef6",
".git/objects/f7/57a15649c038d40cc5ed26758882accaa9b305": "aef217e3642e1818732e7bd26ccecccb",
".git/objects/f9/390902877a66b9aa39afdb01e460fd477c219e": "cefd26250fe6cde647ddd831799c9d60",
".git/objects/f9/689d1c658f19c2291c58a2bdcf0799af2f1e94": "09c2567a8b71d437069cc96d8cebd370",
".git/objects/fd/729205158f92218af7fed9c90f0c32440b7e33": "9136d825964ed469c80f8aa735a1c341",
".git/objects/ff/8291e3c2dd770959f2c0bfc6392777619c2900": "e803b2e7330852eb8c41484a059c0759",
".git/objects/ff/8492c7ecfe8a3583a0fe2ac1c8fc4538183762": "4eb3df13d9a33b75b67bdb1c8261bec0",
".git/ORIG_HEAD": "cf7f118e891006b92a104951fb7942dc",
".git/refs/heads/master": "f63d4e034bb5dca49e96345b60fbac61",
".git/refs/remotes/origin/master": "f63d4e034bb5dca49e96345b60fbac61",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "683996795ab6f0a3cea7cac2f590610b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "e22cfe7786d5a6dbce609596e551e7cb",
"/": "e22cfe7786d5a6dbce609596e551e7cb",
"main.dart.js": "f127e82cb0da49a3368b639c007ed75e",
"manifest.json": "78153c3622376ac93ad07c27de7e8075",
"version.json": "3d34e0f4c134515b811e8ad027edd712"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
