/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f9aeb64a01c47f43548abaa13b53d62b"
  },
  {
    "url": "assets/css/0.styles.42373c9e.css",
    "revision": "2e4323fd5f1421ab61bbd1deef8744a9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.41dbd96c.js",
    "revision": "d35947b6372b678128cd9760ad324d64"
  },
  {
    "url": "assets/js/100.6a22a43b.js",
    "revision": "1e4c9704a626a45dc4d72b5ea352cbe3"
  },
  {
    "url": "assets/js/101.4c2772ce.js",
    "revision": "77e44d39b5180743e34ad279a9c7bb4a"
  },
  {
    "url": "assets/js/102.dd43ddb2.js",
    "revision": "af536d511f40cbc68350b9184eda9453"
  },
  {
    "url": "assets/js/103.89c682e8.js",
    "revision": "de59c9aa0d8d9dc0e2c3f2c546e8ebdb"
  },
  {
    "url": "assets/js/104.f41e3837.js",
    "revision": "978508a2b9e593902e3daf2bc9150a5e"
  },
  {
    "url": "assets/js/105.41f77b62.js",
    "revision": "485068c8c07e89f72bc51c4407287885"
  },
  {
    "url": "assets/js/106.3fc0a1f1.js",
    "revision": "8b9221d3762787ec3747d43749a8b8a0"
  },
  {
    "url": "assets/js/107.83aed4aa.js",
    "revision": "d07f339c3080b4d9a53f22916629badb"
  },
  {
    "url": "assets/js/108.e3c9655a.js",
    "revision": "652e679e161495ad0afcd28c81296149"
  },
  {
    "url": "assets/js/109.2e6cf2c8.js",
    "revision": "0c302ae3250f41a460909af8e6a44cd2"
  },
  {
    "url": "assets/js/11.59051f17.js",
    "revision": "fc636188dfaa5776ac9fbece1167d6c1"
  },
  {
    "url": "assets/js/110.575a9e73.js",
    "revision": "fa38c464b795a5c8e5699cad75fbf4b0"
  },
  {
    "url": "assets/js/111.72598200.js",
    "revision": "c4a4bd42589d3bca32225f08a0744cd3"
  },
  {
    "url": "assets/js/112.c4e63b6d.js",
    "revision": "2b86c990b8adcddd6d7620fbfb81c631"
  },
  {
    "url": "assets/js/113.e410ba06.js",
    "revision": "7e7b9cfc8ff9ebbf80edce0118b1cbbb"
  },
  {
    "url": "assets/js/114.78fc8b67.js",
    "revision": "a97e597d21d832800ba1b17f304dd9d3"
  },
  {
    "url": "assets/js/115.8bc717b2.js",
    "revision": "4518b80f00e90abe88a5719d8ce36c61"
  },
  {
    "url": "assets/js/116.a7c98f5c.js",
    "revision": "dc8759fa959bfcb4519209fec92a6578"
  },
  {
    "url": "assets/js/117.f104c5c4.js",
    "revision": "85d0cee2e1ca749255c268a6604af4df"
  },
  {
    "url": "assets/js/118.22019263.js",
    "revision": "edb483420398e4b14c22603a9054318b"
  },
  {
    "url": "assets/js/119.256a8727.js",
    "revision": "16c8b578c7d36025dedc249f0adcd1c1"
  },
  {
    "url": "assets/js/12.228741a5.js",
    "revision": "b4f7be223f3adb8ca92f9889333105da"
  },
  {
    "url": "assets/js/120.567b96ce.js",
    "revision": "88da5a2e2b1610b3049d1a6a66eae334"
  },
  {
    "url": "assets/js/121.2f0b66bb.js",
    "revision": "49c9fb005486f3974f81a8ae934071a3"
  },
  {
    "url": "assets/js/122.6884f660.js",
    "revision": "116c904eed99c7c22d2e2c9c0a4c63dd"
  },
  {
    "url": "assets/js/123.1bad1dc4.js",
    "revision": "d08b64d84fd76c9aecebbe68d95b6bc7"
  },
  {
    "url": "assets/js/124.5c113baa.js",
    "revision": "b7559771da351591eda0b52ad3737429"
  },
  {
    "url": "assets/js/125.fbd94b6d.js",
    "revision": "57616aa9fd5ddc9e0cb357fb0f449838"
  },
  {
    "url": "assets/js/126.acdeaa12.js",
    "revision": "3cd1401db73284e14209a37088ef677e"
  },
  {
    "url": "assets/js/127.8e70b10a.js",
    "revision": "13a11bdd255b35f808e1be29d1890f0a"
  },
  {
    "url": "assets/js/128.11614fd9.js",
    "revision": "8aa4ce6807defef64c827913a9823e8f"
  },
  {
    "url": "assets/js/129.4f6a4c09.js",
    "revision": "deebf6f6cbf41e915d00e74ead13846e"
  },
  {
    "url": "assets/js/13.1e8df012.js",
    "revision": "b13c172102ef83747bdd12b42f691c75"
  },
  {
    "url": "assets/js/130.caf796ee.js",
    "revision": "9751f341e713b28d401a9c9903726485"
  },
  {
    "url": "assets/js/131.3b916617.js",
    "revision": "71cfd7864ff70f1add16fb7deb70ff04"
  },
  {
    "url": "assets/js/132.8e109999.js",
    "revision": "1b8591cf115c2f67e3da1447675fdbf5"
  },
  {
    "url": "assets/js/133.5c703f18.js",
    "revision": "722900ddfea02d340405abccd3f4e35f"
  },
  {
    "url": "assets/js/134.1d6661fb.js",
    "revision": "b5b3adf25ad911f903cc06a3c9e3ac67"
  },
  {
    "url": "assets/js/135.46286965.js",
    "revision": "25cfadb7586cb5ce8d9fc88d1b7feef3"
  },
  {
    "url": "assets/js/136.88cd2577.js",
    "revision": "8aac562fd2d03283f7659c03584086ca"
  },
  {
    "url": "assets/js/137.f6f70f50.js",
    "revision": "86932f232dd7335d48814270da79b064"
  },
  {
    "url": "assets/js/138.5bbd7028.js",
    "revision": "db10726774b591d3d3a518bf3910d9b2"
  },
  {
    "url": "assets/js/139.2bf984de.js",
    "revision": "f3c6e0645b966821d45ea8de495cb61a"
  },
  {
    "url": "assets/js/14.febfef5a.js",
    "revision": "da3bd47e1b553417caa8467a6423479f"
  },
  {
    "url": "assets/js/140.17d5547e.js",
    "revision": "9cd1fe606b0668073c4e29572e2f1364"
  },
  {
    "url": "assets/js/141.83856cb6.js",
    "revision": "d2db3b7ca9dce98d547aa6724a77bc44"
  },
  {
    "url": "assets/js/142.736a3307.js",
    "revision": "bef96a5fdd46b813d80b8768f463e0ab"
  },
  {
    "url": "assets/js/143.34f28846.js",
    "revision": "b62a217386fbf9821f06ebe576af7956"
  },
  {
    "url": "assets/js/144.3d65dde2.js",
    "revision": "780b18d4455d161649af3e36890f95c7"
  },
  {
    "url": "assets/js/145.371a0d17.js",
    "revision": "1360b95c1cd39521b159550b2723872d"
  },
  {
    "url": "assets/js/146.efbf5fc0.js",
    "revision": "c3aa3a5d8098af4bedf4ab62a5ec5f9f"
  },
  {
    "url": "assets/js/147.954be436.js",
    "revision": "c85fcc34a76fec9811d559c64bad6d88"
  },
  {
    "url": "assets/js/148.2327cb81.js",
    "revision": "4a37e857bd30187375158b77df36ca07"
  },
  {
    "url": "assets/js/149.8dce3b23.js",
    "revision": "7c44aa29944fc4f28dfece97c923df97"
  },
  {
    "url": "assets/js/15.ef90f252.js",
    "revision": "b94c291fdc327db8babdd7613ff1489b"
  },
  {
    "url": "assets/js/150.330630a2.js",
    "revision": "f00e5037a1e3bafffb1a9926863edd8b"
  },
  {
    "url": "assets/js/151.5496c9ed.js",
    "revision": "acf5818cd8aa6c0d10b8f544506c6ada"
  },
  {
    "url": "assets/js/152.824a940f.js",
    "revision": "4ca5c6a3d2e438ab2a7cdea915c0fd82"
  },
  {
    "url": "assets/js/153.2edfcc7d.js",
    "revision": "c1fe7be7577fc878d50f30e3a8f8e3df"
  },
  {
    "url": "assets/js/154.90ac0917.js",
    "revision": "daf6369aafd5c3e602da9c02be67f0b8"
  },
  {
    "url": "assets/js/155.43b2f680.js",
    "revision": "4862c56ed2eb23987165a2251a2c2083"
  },
  {
    "url": "assets/js/156.231c7b00.js",
    "revision": "4bdfdb29d125c1fc1919470aa6345d0d"
  },
  {
    "url": "assets/js/157.22938dfc.js",
    "revision": "9d53cc6cf3d5573a32ddcb69adf2a48a"
  },
  {
    "url": "assets/js/158.3f1284f1.js",
    "revision": "9de60d87e8a55cca9bd1c223c79bfd72"
  },
  {
    "url": "assets/js/159.89a6d214.js",
    "revision": "a74e98f36a7575bd91a625a6e88b634e"
  },
  {
    "url": "assets/js/16.20b6666b.js",
    "revision": "957762fb1076ac233993547cc4846f16"
  },
  {
    "url": "assets/js/160.02e051df.js",
    "revision": "7921cd39956ef388a644ac6a76ba5827"
  },
  {
    "url": "assets/js/161.ea0b6ffd.js",
    "revision": "43d9595710d4e641b256a53c4e0ebe34"
  },
  {
    "url": "assets/js/162.f8edf932.js",
    "revision": "a78b59ddbd7800719e9bf8f3185c7960"
  },
  {
    "url": "assets/js/163.a3a458d0.js",
    "revision": "30ca63d3c033b6ba4afff6056f627b0a"
  },
  {
    "url": "assets/js/164.77ffaea6.js",
    "revision": "060b8617fb55424666911ed724c4616d"
  },
  {
    "url": "assets/js/165.11808e41.js",
    "revision": "34db8ff1000bc45ec3be9519f8fa2262"
  },
  {
    "url": "assets/js/166.b1c6da22.js",
    "revision": "14b0eaa263e6a08deb5bb0a0d906f62e"
  },
  {
    "url": "assets/js/167.64ffe161.js",
    "revision": "7e2ffd1410fbc342dec5d68ac68a5279"
  },
  {
    "url": "assets/js/17.96bd4baa.js",
    "revision": "accc826e33f9e08d3f97e8c64580f2d9"
  },
  {
    "url": "assets/js/18.57746ff0.js",
    "revision": "7b1458125ed64a89c106719746e0a1c4"
  },
  {
    "url": "assets/js/19.bdf260a4.js",
    "revision": "b95563edc7b478f5fb6e75c341b6520a"
  },
  {
    "url": "assets/js/2.f2881f60.js",
    "revision": "caf7f1967295c3d438c091701432371e"
  },
  {
    "url": "assets/js/20.8959fb99.js",
    "revision": "f43ea04162b8efcde70c3b9fd7b36f36"
  },
  {
    "url": "assets/js/21.843f2878.js",
    "revision": "f8030561f820a0e5b746bc839bda37f5"
  },
  {
    "url": "assets/js/22.0260b0a8.js",
    "revision": "a062be4c2b2d77a0f15c169585575a1d"
  },
  {
    "url": "assets/js/23.a0ff7a4c.js",
    "revision": "de12b7d5e78757795d43da8584dbc153"
  },
  {
    "url": "assets/js/24.93557841.js",
    "revision": "d56fc13a2b09c0c41b3ebd3276d6d3c7"
  },
  {
    "url": "assets/js/25.84c98456.js",
    "revision": "9ca633430077683f02ef2627105f7df1"
  },
  {
    "url": "assets/js/26.acb20f2f.js",
    "revision": "f274dfb835ebdd2ec534df2e7b4d52c4"
  },
  {
    "url": "assets/js/27.5bb12904.js",
    "revision": "f0eb09370afc9a62c8dc4d9974b4edf2"
  },
  {
    "url": "assets/js/28.4361691a.js",
    "revision": "3b2f90c9a0fa1aeb4cfe40d50b0e8dc9"
  },
  {
    "url": "assets/js/29.6eeddad5.js",
    "revision": "d061361e00a1cb16419d9340f1dd7f15"
  },
  {
    "url": "assets/js/3.2482c351.js",
    "revision": "d5ad98dc2620addb133fdc9f36d7280a"
  },
  {
    "url": "assets/js/30.29829b00.js",
    "revision": "675ff50564e4b6e235791fbe93fb3ebc"
  },
  {
    "url": "assets/js/31.3760ed61.js",
    "revision": "9370058084b922b70af9190335e93f1b"
  },
  {
    "url": "assets/js/32.4842452d.js",
    "revision": "f12ba3c09a819fe1193d1b1d2904dda5"
  },
  {
    "url": "assets/js/33.1f557708.js",
    "revision": "90199c5c8755b797a524c55da76dc6c4"
  },
  {
    "url": "assets/js/34.179bca21.js",
    "revision": "3f657358ddf39b6cb2039730d0bce9fd"
  },
  {
    "url": "assets/js/35.a1980271.js",
    "revision": "b811af908b5a77739666e5ca81f756c4"
  },
  {
    "url": "assets/js/36.76b6e269.js",
    "revision": "26d5f70fa14c96afaabd0dcbb5cf59dc"
  },
  {
    "url": "assets/js/37.caa1a215.js",
    "revision": "ba47c4ac07aef6b8f4106df027dd3d5e"
  },
  {
    "url": "assets/js/38.292e7b0d.js",
    "revision": "ab130696607daac8ed4b5a5308641ac1"
  },
  {
    "url": "assets/js/39.8b286afa.js",
    "revision": "05d576134e88882e9d252ad1aa7393ff"
  },
  {
    "url": "assets/js/4.6561383e.js",
    "revision": "ffc8e5c537bab8ee1f15c3cd9bfc8f3a"
  },
  {
    "url": "assets/js/40.225f31d1.js",
    "revision": "3540a9284c688d73016f89706bbb9bf8"
  },
  {
    "url": "assets/js/41.9d7c6c31.js",
    "revision": "85c72604a388191cb85f27a8c397436f"
  },
  {
    "url": "assets/js/42.bcb8e51b.js",
    "revision": "ddc8e1e3b0f37d638085fce021652d23"
  },
  {
    "url": "assets/js/43.4d5c1e8d.js",
    "revision": "a6df927aafa1602f6e443c6ed2cfe6c2"
  },
  {
    "url": "assets/js/44.972dadb1.js",
    "revision": "df678902cf0953e64b9f7e9a6ba78772"
  },
  {
    "url": "assets/js/45.2aed4e85.js",
    "revision": "e9df60f2e49e150086f0f6e5bbc5c02d"
  },
  {
    "url": "assets/js/46.9e5b1ed5.js",
    "revision": "6065c57c49cfb98189ec2561e8e7d53c"
  },
  {
    "url": "assets/js/47.ffd531a2.js",
    "revision": "f00200d790ff809faf0801bfefb0760d"
  },
  {
    "url": "assets/js/48.9e8e0eea.js",
    "revision": "dad7469e3237e20592363a025831a6e6"
  },
  {
    "url": "assets/js/49.d1a131bd.js",
    "revision": "8b1c25b0ed73b124a2f62c5ca38cc942"
  },
  {
    "url": "assets/js/5.a692a018.js",
    "revision": "41db3e91d2c6c18dc98238540cf5de91"
  },
  {
    "url": "assets/js/50.0997f7ca.js",
    "revision": "90825f8f9bbee51d4a4bb88a0de6e0ae"
  },
  {
    "url": "assets/js/51.ba22fc5b.js",
    "revision": "277d1f8a19ba1c4eb728825af8ac400d"
  },
  {
    "url": "assets/js/52.1a949406.js",
    "revision": "1c71a25a808180caac65287682264f4c"
  },
  {
    "url": "assets/js/53.cb3a6025.js",
    "revision": "eaa68abbe5ddc414fee60f9a77e4c7bc"
  },
  {
    "url": "assets/js/54.e677b069.js",
    "revision": "ac01c5cf393807c2c214e0e95f1e2bb6"
  },
  {
    "url": "assets/js/55.8ffb606d.js",
    "revision": "cee77d7fb1d7203c3dca7f1d16bb5d7f"
  },
  {
    "url": "assets/js/56.8c4767d1.js",
    "revision": "edb868b4bc4f7cccb5945840b6e27e8e"
  },
  {
    "url": "assets/js/57.80c872f0.js",
    "revision": "3dff3f8ff8234b4890a7fbd73a7d22ee"
  },
  {
    "url": "assets/js/58.08bf17e7.js",
    "revision": "3d0f18fbb9b50368cddb7a11eecc2d17"
  },
  {
    "url": "assets/js/59.ece1d426.js",
    "revision": "3d2f3e4d45a48ccb05f261460efd28e1"
  },
  {
    "url": "assets/js/6.f2db52e6.js",
    "revision": "8b0893d3aeb1b192a8d753a11fd3f0f9"
  },
  {
    "url": "assets/js/60.871abe3c.js",
    "revision": "1c61345380626f7c0f030e3d83146d93"
  },
  {
    "url": "assets/js/61.592f5a55.js",
    "revision": "4725ff213165f6cb83319be92bd9c32b"
  },
  {
    "url": "assets/js/62.fda26791.js",
    "revision": "558546ffa17ea883bf93d9f0cc931f0a"
  },
  {
    "url": "assets/js/63.3b4a3976.js",
    "revision": "375d8e52d3d28260c7fbf819c226f0af"
  },
  {
    "url": "assets/js/64.f27707c1.js",
    "revision": "334a9119b0fb330b9c7966bf0c9585ee"
  },
  {
    "url": "assets/js/65.fa3a8b2f.js",
    "revision": "23b06a42fde6dce80a40214d4d92b40e"
  },
  {
    "url": "assets/js/66.d46bd7e7.js",
    "revision": "20904fa8f78ca6574576882c21286fd1"
  },
  {
    "url": "assets/js/67.9ae33d08.js",
    "revision": "5f46dcb46a290cf4d111f901e17662d3"
  },
  {
    "url": "assets/js/68.2535deae.js",
    "revision": "b2ad7e8b8f6143d9b9b85a0e19ba48ef"
  },
  {
    "url": "assets/js/69.9a296461.js",
    "revision": "4d7e19af915d9dcc93c53240c07d0628"
  },
  {
    "url": "assets/js/7.eee03784.js",
    "revision": "072ccfc800e021fbe4f442bc867fc7a7"
  },
  {
    "url": "assets/js/70.82d609b5.js",
    "revision": "b0f95d56e4dc9d01c3fcc9a6c13ab923"
  },
  {
    "url": "assets/js/71.0e3bb2de.js",
    "revision": "b7aab27d68489ae4a97acea64f369dff"
  },
  {
    "url": "assets/js/72.3cb4b134.js",
    "revision": "96dee4feded7c1cdfed47a6a8350c52c"
  },
  {
    "url": "assets/js/73.23f4d7d7.js",
    "revision": "428e9ecd9d4e75037e81d49703567ed4"
  },
  {
    "url": "assets/js/74.cc9a8457.js",
    "revision": "4b09bc99a0cd50805dc944c17a56d0bc"
  },
  {
    "url": "assets/js/75.57941bef.js",
    "revision": "163a5518277144eb4f3c99670f92944d"
  },
  {
    "url": "assets/js/76.14e0aa96.js",
    "revision": "04c7a49ae9e7bad819802140ad47ec30"
  },
  {
    "url": "assets/js/77.be97536b.js",
    "revision": "dc6256cdd92402f3a741dee99fc091a9"
  },
  {
    "url": "assets/js/78.d868e135.js",
    "revision": "516f03dabc5faf51981d2ca21a0352cf"
  },
  {
    "url": "assets/js/79.67bf7af8.js",
    "revision": "4d0e9e96507c3bebbb8a8ca74b5e97cf"
  },
  {
    "url": "assets/js/8.10bee0ee.js",
    "revision": "08542b26ac3fd0ae7fc7ea11c972bef6"
  },
  {
    "url": "assets/js/80.3cd53a17.js",
    "revision": "ddc901ba06638fa68ad162459c6c567f"
  },
  {
    "url": "assets/js/81.cc766dda.js",
    "revision": "fa1d1998bdf63dc6c7c951b78d0b6b3c"
  },
  {
    "url": "assets/js/82.7c1c4a16.js",
    "revision": "bdc308b4ec36287173c324239f164b52"
  },
  {
    "url": "assets/js/83.26d3d54d.js",
    "revision": "6a8eff1835a11555585df715296f403f"
  },
  {
    "url": "assets/js/84.7f6cb376.js",
    "revision": "c45ac4f368e61e83453335c1ca66059a"
  },
  {
    "url": "assets/js/85.0e181b63.js",
    "revision": "f6ead43b69c1b2812212cce70d9578e6"
  },
  {
    "url": "assets/js/86.11bf2666.js",
    "revision": "e3825ad51de3e9579090d25da658359e"
  },
  {
    "url": "assets/js/87.84c76a53.js",
    "revision": "67e789594ee5c49da85a2d2ce8fb57b5"
  },
  {
    "url": "assets/js/88.a06aeea2.js",
    "revision": "bf3c4f0986c2a231082e13ef87865263"
  },
  {
    "url": "assets/js/89.5dfd4600.js",
    "revision": "5f7b3b4a8c6d3dbea93341d68445ca99"
  },
  {
    "url": "assets/js/9.70045519.js",
    "revision": "c01655b448188d35951840107de816d2"
  },
  {
    "url": "assets/js/90.e623bcd0.js",
    "revision": "8063966d006f6883a9916fca2ba17acf"
  },
  {
    "url": "assets/js/91.bb2cd9f5.js",
    "revision": "33b9108b0b7a1f0669d12aeffd432baf"
  },
  {
    "url": "assets/js/92.2d2dba4d.js",
    "revision": "bea6e3d3420f799ab5a3714b9ee18872"
  },
  {
    "url": "assets/js/93.92e36aca.js",
    "revision": "7c39335e9d7ba89ca434c367a24c8dcc"
  },
  {
    "url": "assets/js/94.f5e39a45.js",
    "revision": "d4f590091ccc6645577c53fc9fb3e5db"
  },
  {
    "url": "assets/js/95.e0be8cef.js",
    "revision": "d9d49fc85e29dbb079bbd6c725fa2f4b"
  },
  {
    "url": "assets/js/96.650f38ef.js",
    "revision": "1d72b07a9dfb7670d3bef7759ea40997"
  },
  {
    "url": "assets/js/97.5f195684.js",
    "revision": "12622b36f300ed89f8b453110298f17a"
  },
  {
    "url": "assets/js/98.26ac30d7.js",
    "revision": "2841c05e7cbcff95a2022daa8dbb675c"
  },
  {
    "url": "assets/js/99.831e01fb.js",
    "revision": "ab038fb4b2f09fd99fa175542d75f581"
  },
  {
    "url": "assets/js/app.b483ac81.js",
    "revision": "781456d0dccd13a08b4c828544926781"
  },
  {
    "url": "docs/设计模式手册/index.html",
    "revision": "8d8a26330b19834ae6e6c121075b3b54"
  },
  {
    "url": "edit-tools.png",
    "revision": "d63c67c78f0f3c86539240d2e1539304"
  },
  {
    "url": "friends/index.html",
    "revision": "5ede5ce473b40745ba17f7d07bfdce9c"
  },
  {
    "url": "guide/index.html",
    "revision": "27a252973ab535149340b4208fa50c1a"
  },
  {
    "url": "index.html",
    "revision": "76db146248d643684647cad5d0e8df95"
  },
  {
    "url": "notes/交互设计/love.html",
    "revision": "f01aa52890b11d23fcc1e93bf8b7e8b3"
  },
  {
    "url": "notes/交互设计/个人主页设计.html",
    "revision": "296935132c99f1002f5613b7b0dc7831"
  },
  {
    "url": "notes/交互设计/交互设计资料.html",
    "revision": "73bc63f767b591703b0e5d2d06649751"
  },
  {
    "url": "notes/待整理.html",
    "revision": "8fe42325dde29938f52a91a0a1c49a96"
  },
  {
    "url": "notes/静态网站/重构选型.html",
    "revision": "74166a80346ec634a1fe10c4b1a56f2a"
  },
  {
    "url": "passages/2018-05-23-es-promise/index.html",
    "revision": "63ce0fe1cb0d3af4c4155f412de3e6a2"
  },
  {
    "url": "passages/2018-05-29-promise-async-await-order/index.html",
    "revision": "e1c38773b21e0700b9f096825a34605e"
  },
  {
    "url": "passages/2018-05-29-scss-fisrt-step/index.html",
    "revision": "636afc30ac4d2822835b2765bae2136d"
  },
  {
    "url": "passages/2018-05-29-scss-more/index.html",
    "revision": "cabc64db5f1eeba16ef7c2e01d824af7"
  },
  {
    "url": "passages/2018-06-05-border-sizing/index.html",
    "revision": "6c5349b71ac7e81a803930dc67666264"
  },
  {
    "url": "passages/2018-06-19-batch-edit-log/index.html",
    "revision": "c239b7fdadf4abef9f593128fe4e748c"
  },
  {
    "url": "passages/2018-07-29-webpack-demos-introduction/index.html",
    "revision": "bdd7d2337473e7563310da391a385de2"
  },
  {
    "url": "passages/2018-07-30-webpack-pack-js/index.html",
    "revision": "8e168e9d010da9bd890011f61c86eedb"
  },
  {
    "url": "passages/2018-07-31-webpack-compile-es6/index.html",
    "revision": "80c605d3d4fdc62908a53812f9003cea"
  },
  {
    "url": "passages/2018-08-06-webpack-mutiple-pages/index.html",
    "revision": "fd24108ff938b067b98210dac3c83786"
  },
  {
    "url": "passages/2018-08-08-webpack-spa-split-lazy/index.html",
    "revision": "eab5ed0e5c8cc1fbfc94ccdb11e52bd5"
  },
  {
    "url": "passages/2018-08-17-webpack-css/index.html",
    "revision": "d2255ea2edde0f55925a99509a89279d"
  },
  {
    "url": "passages/2018-08-18-webpack-scss/index.html",
    "revision": "de7e234c8c5476a914397681ba2114ac"
  },
  {
    "url": "passages/2018-08-19-websocket-group-chat/index.html",
    "revision": "05735f2c78be44df35a45bf8fb7ae056"
  },
  {
    "url": "passages/2018-08-20-canvas-beauty-filter/index.html",
    "revision": "36b5f0f1fd7d8330ab6f13f8d2504f5e"
  },
  {
    "url": "passages/2018-08-21-momentjs/index.html",
    "revision": "d1df6da8c0fbfde7e231e9566ccb6c52"
  },
  {
    "url": "passages/2018-08-26-ssl/index.html",
    "revision": "dd786aa2bfb03831e4033f252dae5ddf"
  },
  {
    "url": "passages/2018-08-28-webpack-scss-lazy/index.html",
    "revision": "2415b7d25369e6d196235a7e77b5def0"
  },
  {
    "url": "passages/2018-08-30-canvas-off-screen/index.html",
    "revision": "02db7e0c042b75fb769d024bb4b58d98"
  },
  {
    "url": "passages/2018-09-01-js-tree-shaking/index.html",
    "revision": "64ac6182a0160da16603af766b13826a"
  },
  {
    "url": "passages/2018-09-02-css-tree-shaking/index.html",
    "revision": "43b104c7c8e878d63da902e9af5da33d"
  },
  {
    "url": "passages/2018-09-06-git-tag-and-version/index.html",
    "revision": "ab7f06779f6c9c27bb429df921133182"
  },
  {
    "url": "passages/2018-09-07-git-stash/index.html",
    "revision": "53e3952c3d074bdecb069c17ecc3f437"
  },
  {
    "url": "passages/2018-09-09-mysql-blog-ui/index.html",
    "revision": "6fe6373ef75cf73aa892cab4ffcf3e9d"
  },
  {
    "url": "passages/2018-09-11-webpack-image/index.html",
    "revision": "1103f3f64d8117b297faf1a7821c7e5f"
  },
  {
    "url": "passages/2018-10-03-js-mathjax/index.html",
    "revision": "04ef896fd837f10a28e5ba7d3959cb2d"
  },
  {
    "url": "passages/2018-10-09-webpack-chracter-file/index.html",
    "revision": "9fbd28d545f2b7689255202dd8c13bca"
  },
  {
    "url": "passages/2018-10-09-webpack-js-pacakge/index.html",
    "revision": "dae9cfe64e6d13f2c14265827c886875"
  },
  {
    "url": "passages/2018-10-17-automatic-html/index.html",
    "revision": "c5bb637c2619660540e251964e08c686"
  },
  {
    "url": "passages/2018-10-18-webpack-clean-and-watch-mode/index.html",
    "revision": "9e1aaa060b557cd5d3a45a0d48d43fa2"
  },
  {
    "url": "passages/2018-10-19-webpack-dev-and-prod/index.html",
    "revision": "4f4b6a60c1677aa8b9d2136d8d78d16c"
  },
  {
    "url": "passages/2018-10-19-webpack-dev-server/index.html",
    "revision": "f5d4c82cad2613619f383e0841674640"
  },
  {
    "url": "passages/2018-10-23-singleton-pattern/index.html",
    "revision": "0bcc24239d7585803f0abf8467a0e9b4"
  },
  {
    "url": "passages/2018-10-25-stragegy-pattern/index.html",
    "revision": "5491506180531733393c1037a3a0d70b"
  },
  {
    "url": "passages/2018-11-01-proxy-pattern/index.html",
    "revision": "1cf437b11670e3a99f74dc16fa82aa7f"
  },
  {
    "url": "passages/2018-11-06-iter-pattern/index.html",
    "revision": "b92682b128c36dc52614324355f611e4"
  },
  {
    "url": "passages/2018-11-18-publish-subscribe-pattern/index.html",
    "revision": "c7318d2a912807434532a5f1c7dda8a0"
  },
  {
    "url": "passages/2018-11-25-command-pattern/index.html",
    "revision": "bef7227c44370ca0dc13bcd3de4e3e93"
  },
  {
    "url": "passages/2018-12-08-weekly-share-1/index.html",
    "revision": "6dff0561bea76909fe9bd0806f163975"
  },
  {
    "url": "passages/2018-12-12-composite-pattern/index.html",
    "revision": "e1b73f2170ecc80386d340594193bdbb"
  },
  {
    "url": "passages/2018-12-16-flyweight-pattern/index.html",
    "revision": "5b45c3def893411f05cf254737d93820"
  },
  {
    "url": "passages/2018-12-24-weekly-share-2/index.html",
    "revision": "96b34eafeb03210836669b76b7e7d1d4"
  },
  {
    "url": "passages/2019-01-07-chain-of-responsibility-pattern/index.html",
    "revision": "5dc864b789ca95df865433660544175e"
  },
  {
    "url": "passages/2019-01-12-decorator-pattern/index.html",
    "revision": "95f096071fab9a6b93c1c46be272cad7"
  },
  {
    "url": "passages/2019-01-16-state-pattern/index.html",
    "revision": "6ec18b5a3d83ced6d63ec463d3c55d6c"
  },
  {
    "url": "passages/2019-01-17-adapter-pattern/index.html",
    "revision": "5e0082f110fc76617d7b9788196ecdf0"
  },
  {
    "url": "passages/2019-01-19-bridge-pattern/index.html",
    "revision": "0e4bb7eb9bdd86080cd05a25914b414d"
  },
  {
    "url": "passages/2019-01-25-interpreter-pattern/index.html",
    "revision": "f1f560bff99677200d2c9d4f18c83277"
  },
  {
    "url": "passages/2019-01-26-memento-pattern/index.html",
    "revision": "a50f5cb8b9c2af77b7e45c066e3e3f53"
  },
  {
    "url": "passages/2019-01-31-template-pattern/index.html",
    "revision": "b4cfca2f3dd0a3fb38c532def857d8e9"
  },
  {
    "url": "passages/2019-03-15-weekly-share-3/index.html",
    "revision": "ff0198b47e5ed076406e8dca1cfebf2a"
  },
  {
    "url": "passages/2019-03-18-interview-js-code/index.html",
    "revision": "5e7c079bedc1bfd2e698457dcaeebd09"
  },
  {
    "url": "passages/2019-03-19-css3-nth-child/index.html",
    "revision": "1c2f2c4cb825b87741f4bc77efc68151"
  },
  {
    "url": "passages/2019-03-20-css3-flex/index.html",
    "revision": "d7ac27c4874c468e4a0472cbe42d46a3"
  },
  {
    "url": "passages/2019-03-21-js-re/index.html",
    "revision": "ea0a9f95992ccde412598b84762cce88"
  },
  {
    "url": "passages/2019-03-26-javascript-first/index.html",
    "revision": "3c389a113d4580bbb530cdacdaedff7e"
  },
  {
    "url": "passages/2019-03-27-javascript-second/index.html",
    "revision": "549e6c0f04414cb2f240a1d283ccbf17"
  },
  {
    "url": "passages/2019-03-31-factory-pattern/index.html",
    "revision": "770575a9c5e0ef2f0a4327ea54f913dd"
  },
  {
    "url": "passages/2019-04-01-abstract-factory-pattern/index.html",
    "revision": "20e339d6021f417420f17ec2e313b168"
  },
  {
    "url": "passages/2019-04-02-pwa-service-worker/index.html",
    "revision": "ac9039fe6419818f54e221e92b1d57c5"
  },
  {
    "url": "passages/2019-04-08-react-components-communication/index.html",
    "revision": "607b1f8c68d6287af31dd1f63dd4bcd6"
  },
  {
    "url": "passages/2019-04-09-es6/index.html",
    "revision": "fe0328ffd6a672398fae9c9e6820d6e7"
  },
  {
    "url": "passages/2019-04-10-html5-drag-drop/index.html",
    "revision": "6b9d48da379a10a10cd8ef2a9c55a4bc"
  },
  {
    "url": "passages/2019-04-15-wechat-h5-login/index.html",
    "revision": "e04d4ecd21b7cda9a4510e4a334f052b"
  },
  {
    "url": "passages/2019-04-16-axios/index.html",
    "revision": "ff699f331d914ead823c7a856db37761"
  },
  {
    "url": "passages/2019-04-23-vemojs/index.html",
    "revision": "7f6d1402d926df9ec921b479a3e2e6de"
  },
  {
    "url": "passages/2019-05-02-node-block-chain/index.html",
    "revision": "1553ea7904f23c55c9ebc173b97a8d3b"
  },
  {
    "url": "passages/2019-05-04-deep-in-jest/index.html",
    "revision": "e5ff1592ec68cf97959654339d863960"
  },
  {
    "url": "passages/2019-05-04-jest-base/index.html",
    "revision": "fcd010074fcab501ec28e2cdad152604"
  },
  {
    "url": "passages/2019-05-04-rr/index.html",
    "revision": "081e2faaf25cd0f14643ee5e004a29d1"
  },
  {
    "url": "passages/2019-05-07-play-node-shell/index.html",
    "revision": "49c18a4ff01e09625305422510eee19b"
  },
  {
    "url": "passages/2019-05-15-browser/index.html",
    "revision": "bd0d11e57a0c82e2d7bb168ce3c530f0"
  },
  {
    "url": "passages/2019-05-15-web-safety/index.html",
    "revision": "6312782b05ae96a9ccdae6e9682881c7"
  },
  {
    "url": "passages/2019-05-17-why-i-stopped-using-sass/index.html",
    "revision": "e080b56865408b810e4e3be90c13250e"
  },
  {
    "url": "passages/2019-05-18-serverless-page-counter/index.html",
    "revision": "78b51b33283a153360fb1a4d7570309f"
  },
  {
    "url": "passages/2019-05-25-learn-to-learn/index.html",
    "revision": "58ab74502f2ae5d7c7aa0ad878b8d388"
  },
  {
    "url": "passages/2019-05-28-professional-js-notes/index.html",
    "revision": "4331aa3656d8861c14ea4adf567d3eba"
  },
  {
    "url": "passages/2019-06-10-weekly-share/index.html",
    "revision": "bbe34b190c179e63f866b494a1687c58"
  },
  {
    "url": "passages/2019-06-18-deep-in-koa/index.html",
    "revision": "49ea38155661806d8553275d84b4a810"
  },
  {
    "url": "passages/2019-06-21-deep-in-koa-3/index.html",
    "revision": "b48e9d3c562f24b2e19b3c26ee31cca8"
  },
  {
    "url": "passages/2019-06-21-deep-in-koa/index.html",
    "revision": "3a322994fecd955b367202bef5ac9906"
  },
  {
    "url": "passages/2019-06-23-algorithm-offer/index.html",
    "revision": "dab1e179c55a0a521190f221f6830585"
  },
  {
    "url": "passages/2019-06-23-array-change-location/index.html",
    "revision": "d5d34f674970b124de06c7162cc522f2"
  },
  {
    "url": "passages/2019-06-23-array-find/index.html",
    "revision": "a8cde2260a0cccb160ef53e0bc67aab0"
  },
  {
    "url": "passages/2019-06-23-array-inverse-pair/index.html",
    "revision": "7969ba1ea6f9c6ad4660c8b6ac312ff6"
  },
  {
    "url": "passages/2019-06-23-array-min-numbers/index.html",
    "revision": "a862c70bb8cffe6d39ffa6ee52cfc923"
  },
  {
    "url": "passages/2019-06-23-bit-first-one/index.html",
    "revision": "785eb34ba1227e28b4b7b471f8cd8cac"
  },
  {
    "url": "passages/2019-06-23-bit-number-of-one-more/index.html",
    "revision": "55a745ebc06933568a1549c08baedff2"
  },
  {
    "url": "passages/2019-06-23-bit-number-of-one/index.html",
    "revision": "c22f8377c524765b4d78b9cd242832d2"
  },
  {
    "url": "passages/2019-06-23-find-min-num/index.html",
    "revision": "273d3927e742db3e4229281bddd12bcd"
  },
  {
    "url": "passages/2019-06-23-find-times-in-sorted/index.html",
    "revision": "6d5fecdcb9fe10f6c6fbfa4cdeb2f613"
  },
  {
    "url": "passages/2019-06-23-hash-first-no-repeat-char/index.html",
    "revision": "9f46fb87b14cb73d6d75969f23b33598"
  },
  {
    "url": "passages/2019-06-23-hash-ugly/index.html",
    "revision": "565ee0a41b29d90e99d579e063ac37bf"
  },
  {
    "url": "passages/2019-06-23-heap-kth-numbers/index.html",
    "revision": "dd5065b81539bf8c42803137860cac9a"
  },
  {
    "url": "passages/2019-06-23-list-clone/index.html",
    "revision": "a6e60ae8b0e0ba6dc3cfe5cf7cc7b617"
  },
  {
    "url": "passages/2019-06-23-list-delete-node/index.html",
    "revision": "21fac9bbc61a1e7f03cac57867638757"
  },
  {
    "url": "passages/2019-06-23-list-first-same-node/index.html",
    "revision": "74f0ba9ffc7832d6ea52cf892d09e474"
  },
  {
    "url": "passages/2019-06-23-list-last-kth-node/index.html",
    "revision": "965417892dd97ae1a158e5236622f96f"
  },
  {
    "url": "passages/2019-06-23-list-merge/index.html",
    "revision": "9e37de16c46907aa56d7febb8c97ccac"
  },
  {
    "url": "passages/2019-06-23-list-print/index.html",
    "revision": "456e1a67cdce29a2e2a7b3f9b2c201de"
  },
  {
    "url": "passages/2019-06-23-list-reverse/index.html",
    "revision": "85dc9c8b4f241bbe7bf1693f594ec1c3"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-and-number-is-s/index.html",
    "revision": "943300f9c83b472377c8f211a6410fca"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-fibonacci/index.html",
    "revision": "f0fa1ca6c023cab2fe5167adcc72e7cb"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-from-one-to-one/index.html",
    "revision": "3a1dcdec111d28dbd731409b87f6d5ff"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-joseph-ring/index.html",
    "revision": "bc6322e89a04dc2e3972893003c10706"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-min-kth/index.html",
    "revision": "ace287876eb81c51d471460dc4b22ecb"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-n-probability/index.html",
    "revision": "9c16af8c1aae37dac6ddeefa6ea19d25"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-playing-cards/index.html",
    "revision": "7a995e695bd724624cae417bdaa0682c"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-pow/index.html",
    "revision": "3e6ff43444b710cf8e44fe10861f2965"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-print-matrix/index.html",
    "revision": "f8edd4666212c486d26b008597363387"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-s-sequence/index.html",
    "revision": "4fdf840d5694fda453a2cb44426a4f2c"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-times-more-than-half/index.html",
    "revision": "430ec90df992ad4404b00a107c3181cf"
  },
  {
    "url": "passages/2019-06-23-stack-queue-exchange/index.html",
    "revision": "d8e0cbb2b351f6aad4a3e8e037b2a872"
  },
  {
    "url": "passages/2019-06-23-stack-queue-min-stack/index.html",
    "revision": "c08a52de7b49655a85f73ba4cdc385f3"
  },
  {
    "url": "passages/2019-06-23-stack-queue-push-pop-order/index.html",
    "revision": "83f2b5011a8abacbc100f500be7dbe7f"
  },
  {
    "url": "passages/2019-06-23-str-atoi/index.html",
    "revision": "c493e7aa2f4a24cbc7008255f49cbb23"
  },
  {
    "url": "passages/2019-06-23-str-perm/index.html",
    "revision": "f0152f4dc010f2c1b04b5cfbed45490c"
  },
  {
    "url": "passages/2019-06-23-str-replace-empty/index.html",
    "revision": "4491cf81d42324751351359091bc525d"
  },
  {
    "url": "passages/2019-06-23-str-reverse-sentence/index.html",
    "revision": "318cb1089db8d65e580f9afcd49512cb"
  },
  {
    "url": "passages/2019-06-23-tree-convert-to-list/index.html",
    "revision": "56a04f2596c98c8d098b1f0fedde84a9"
  },
  {
    "url": "passages/2019-06-23-tree-is-balance/index.html",
    "revision": "c06d40cd3081c25e00362193c699e6e7"
  },
  {
    "url": "passages/2019-06-23-tree-level-travel/index.html",
    "revision": "cf5858797bf2a3541128e82956c24231"
  },
  {
    "url": "passages/2019-06-23-tree-mirror/index.html",
    "revision": "407cd4de875255d7e9c258b9ea6c0ec0"
  },
  {
    "url": "passages/2019-06-23-tree-path-with-number/index.html",
    "revision": "51b36bbccb472ab797605704b16445f2"
  },
  {
    "url": "passages/2019-06-23-tree-rebuild/index.html",
    "revision": "c71f84530e3e17d5e4d4c0eb403ebdb0"
  },
  {
    "url": "passages/2019-06-23-tree-subtree/index.html",
    "revision": "f05c28e9bcae7082a3caa34379ff027b"
  },
  {
    "url": "passages/2019-06-23-tree-tail-order/index.html",
    "revision": "07aa3392d66ae1b9441dbbf97ac29d66"
  },
  {
    "url": "passages/2019-07-06-half-year/index.html",
    "revision": "73cdb118352f6ca8541019e8c7c42a0d"
  },
  {
    "url": "passages/2019-07-12-redis-cache-question/index.html",
    "revision": "45640c669f6081ef73b196d028506426"
  },
  {
    "url": "passages/2019-07-15-file-api/index.html",
    "revision": "99d4804af9b8fa28b07dbf592b7a3551"
  },
  {
    "url": "passages/2019-07-16-font-animation/index.html",
    "revision": "297bea163117f91d8bf7132b6c595c01"
  },
  {
    "url": "passages/2019-07-22-input-animation/index.html",
    "revision": "6b30869742232d061a71838d8c1d52ed"
  },
  {
    "url": "passages/2019-07-24-button-animation/index.html",
    "revision": "da530425d2ac09748db44bf01af37542"
  },
  {
    "url": "passages/2019-07-25-loader-animation-first/index.html",
    "revision": "a974a31951037e9635dbb7c9a01ddea0"
  },
  {
    "url": "passages/2019-07-26-loader-animation-second/index.html",
    "revision": "b645a97bfb876e3952e8cadd982ebfcb"
  },
  {
    "url": "passages/2019-08-14-game-gomoku/index.html",
    "revision": "c33ec811cca1f47d1c93e88565f0ee4a"
  },
  {
    "url": "passages/2019-08-27-koa-meet-typescript/index.html",
    "revision": "b00098713bf86d44d5814ef49ae12c3b"
  },
  {
    "url": "passages/2019-08-27-typescript-notes/index.html",
    "revision": "b960207aae0e4aaa9e296af4a23dc1ff"
  },
  {
    "url": "passages/2019-09-03-nodejs-watch-file/index.html",
    "revision": "3820e1666bc0fee712098f4addfc4079"
  },
  {
    "url": "passages/2019-09-04-count-os/index.html",
    "revision": "de933c847a40bf3da9048a5ad5c3d940"
  },
  {
    "url": "passages/2019-09-04-log-module/index.html",
    "revision": "2d72f6f83241883647bbfce0bfea20ad"
  },
  {
    "url": "passages/2019-09-07-middleground/index.html",
    "revision": "4e95608311e9f6f4ca14721d4a06b169"
  },
  {
    "url": "passages/2019-09-11-react-router/index.html",
    "revision": "b6561ac4730eb9b20a9ccd0473319220"
  },
  {
    "url": "passages/2019-09-11-word-segmentation-and-search/index.html",
    "revision": "efa2ba5b6ed161277f951622ad6249ec"
  },
  {
    "url": "passages/2019-09-30-mongo-links/index.html",
    "revision": "f13d1c4fff8dc3338286edbc8df627d7"
  },
  {
    "url": "passages/2019-10-01-mongo-book/index.html",
    "revision": "3d932b14a3e3ecfa130324b607cde480"
  },
  {
    "url": "passages/2019-10-02-os-base/index.html",
    "revision": "596f53f6b4242f0cf8135ce698622e95"
  },
  {
    "url": "passages/2019-10-03-os-logic/index.html",
    "revision": "9c478491941af22f399db7ce44c56d46"
  },
  {
    "url": "passages/2019-10-03-os-user/index.html",
    "revision": "3ad9ff29d9144f4f11b7f10af83d0534"
  },
  {
    "url": "passages/2019-10-04-os-process/index.html",
    "revision": "4c9010376bd2509ad456d5d64973ea92"
  },
  {
    "url": "passages/2019-10-10-mongo-book-advance/index.html",
    "revision": "01d4c90c9cf01f382236dcbbcd12312d"
  },
  {
    "url": "passages/2019-10-21-react-hooks/index.html",
    "revision": "4f67446d4c6b84d8e60edc0ae9d6f46d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
