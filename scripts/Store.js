var _0xdc83=["\x63\x6F\x6E\x66\x69\x67","\x73\x69\x74\x65\x6D\x61\x70\x44\x62","\x64\x62","\x70\x72\x6F\x74\x6F\x74\x79\x70\x65","\x6C\x65\x6E\x67\x74\x68","\x45\x72\x72\x6F\x72\x20\x77\x68\x69\x6C\x65\x20\x70\x65\x72\x73\x69\x73\x74\x69\x6E\x67\x20\x73\x63\x72\x61\x70\x65\x64\x20\x64\x61\x74\x61\x20\x74\x6F\x20\x64\x62","\x6C\x6F\x67","\x62\x75\x6C\x6B\x44\x6F\x63\x73","\x73\x69\x74\x65\x6D\x61\x70\x2D\x64\x61\x74\x61\x2D","\x5F","\x72\x65\x70\x6C\x61\x63\x65","\x73\x61\x6E\x69\x74\x69\x7A\x65\x53\x69\x74\x65\x6D\x61\x70\x44\x61\x74\x61\x44\x62\x4E\x61\x6D\x65","\x64\x61\x74\x61\x44\x62","\x67\x65\x74\x53\x69\x74\x65\x6D\x61\x70\x44\x61\x74\x61\x44\x62\x4C\x6F\x63\x61\x74\x69\x6F\x6E","\x67\x65\x74\x53\x69\x74\x65\x6D\x61\x70\x44\x61\x74\x61\x44\x62","\x64\x65\x73\x74\x72\x6F\x79","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x70\x61\x72\x73\x65","\x5F\x69\x64","\x63\x61\x6E\x6E\x6F\x74\x20\x73\x61\x76\x65\x20\x73\x69\x74\x65\x6D\x61\x70\x20\x77\x69\x74\x68\x6F\x75\x74\x20\x61\x6E\x20\x69\x64","\x62\x69\x6E\x64","\x5F\x72\x65\x76","\x72\x65\x76","\x70\x75\x74","\x63\x72\x65\x61\x74\x65\x53\x69\x74\x65\x6D\x61\x70","\x72\x65\x6D\x6F\x76\x65","\x72\x6F\x77\x73","\x64\x6F\x63","\x65\x78\x74\x65\x6E\x73\x69\x6F\x6E","\x70\x75\x73\x68","\x61\x6C\x6C\x44\x6F\x63\x73","\x67\x65\x74\x41\x6C\x6C\x53\x69\x74\x65\x6D\x61\x70\x73"];var Store=function(_0xd6e7x2){this[_0xdc83[0]]= _0xd6e7x2;this[_0xdc83[1]]=  new PouchDB(this[_0xdc83[0]][_0xdc83[1]])};var StoreScrapeResultWriter=function(_0xd6e7x4){this[_0xdc83[2]]= _0xd6e7x4};StoreScrapeResultWriter[_0xdc83[3]]= {writeDocs:function(_0xd6e7x5,_0xd6e7x6){if(_0xd6e7x5[_0xdc83[4]]=== 0){_0xd6e7x6()}else {this[_0xdc83[2]][_0xdc83[7]]({docs:_0xd6e7x5},function(_0xd6e7x7,_0xd6e7x8){if(_0xd6e7x7!== null){console[_0xdc83[6]](_0xdc83[5],_0xd6e7x7)};_0xd6e7x6()})}}};Store[_0xdc83[3]]= {sanitizeSitemapDataDbName:function(_0xd6e7x9){return _0xdc83[8]+ _0xd6e7x9[_0xdc83[10]](/[^a-z0-9_\$\(\)\+\-/]/gi,_0xdc83[9])},getSitemapDataDbLocation:function(_0xd6e7xa){var _0xd6e7x9=this[_0xdc83[11]](_0xd6e7xa);return this[_0xdc83[0]][_0xdc83[12]]+ _0xd6e7x9},getSitemapDataDb:function(_0xd6e7xa){var _0xd6e7xb=this[_0xdc83[13]](_0xd6e7xa);return  new PouchDB(_0xd6e7xb)},initSitemapDataDb:function(_0xd6e7xa,_0xd6e7x6){var _0xd6e7xb=this[_0xdc83[13]](_0xd6e7xa);var _0xd6e7xc=this;PouchDB[_0xdc83[15]](_0xd6e7xb,function(){var _0xd6e7x4=_0xd6e7xc[_0xdc83[14]](_0xd6e7xa);var _0xd6e7xd= new StoreScrapeResultWriter(_0xd6e7x4);_0xd6e7x6(_0xd6e7xd)})},createSitemap:function(_0xd6e7xe,_0xd6e7x6){var _0xd6e7xf=JSON[_0xdc83[17]](JSON[_0xdc83[16]](_0xd6e7xe));if(!_0xd6e7xe[_0xdc83[18]]){console[_0xdc83[6]](_0xdc83[19],_0xd6e7xe)};this[_0xdc83[1]][_0xdc83[23]](_0xd6e7xf,function(_0xd6e7xe,_0xd6e7x7,_0xd6e7x8){_0xd6e7xe[_0xdc83[21]]= _0xd6e7x8[_0xdc83[22]];_0xd6e7x6(_0xd6e7xe)}[_0xdc83[20]](this,_0xd6e7xe))},saveSitemap:function(_0xd6e7xe,_0xd6e7x6){this[_0xdc83[24]](_0xd6e7xe,_0xd6e7x6)},deleteSitemap:function(_0xd6e7xe,_0xd6e7x6){_0xd6e7xe= JSON[_0xdc83[17]](JSON[_0xdc83[16]](_0xd6e7xe));this[_0xdc83[1]][_0xdc83[25]](_0xd6e7xe,function(_0xd6e7x7,_0xd6e7x8){var _0xd6e7xb=this[_0xdc83[13]](_0xd6e7xe._id);PouchDB[_0xdc83[15]](_0xd6e7xb,function(){_0xd6e7x6()}[_0xdc83[20]](this))}[_0xdc83[20]](this))},getAllSitemaps:function(_0xd6e7x6){this[_0xdc83[1]][_0xdc83[30]]({include_docs:true},function(_0xd6e7x7,_0xd6e7x8){var _0xd6e7x10=[];for(var _0xd6e7x11 in _0xd6e7x8[_0xdc83[26]]){var _0xd6e7xe=_0xd6e7x8[_0xdc83[26]][_0xd6e7x11][_0xdc83[27]];if(!chrome[_0xdc83[28]]){_0xd6e7xe=  new Sitemap(_0xd6e7xe)};_0xd6e7x10[_0xdc83[29]](_0xd6e7xe)};_0xd6e7x6(_0xd6e7x10)})},getSitemapData:function(_0xd6e7xe,_0xd6e7x6){var _0xd6e7x4=this[_0xdc83[14]](_0xd6e7xe._id);_0xd6e7x4[_0xdc83[30]]({include_docs:true},function(_0xd6e7x7,_0xd6e7x8){console[_0xdc83[6]](55555,_0xd6e7x8);var _0xd6e7x12=[];for(var _0xd6e7x11 in _0xd6e7x8[_0xdc83[26]]){var _0xd6e7x13=_0xd6e7x8[_0xdc83[26]][_0xd6e7x11][_0xdc83[27]];_0xd6e7x12[_0xdc83[29]](_0xd6e7x13)};console[_0xdc83[6]](11111111111111111,_0xd6e7x12);_0xd6e7x6(_0xd6e7x12)})},sitemapExists:function(_0xd6e7xa,_0xd6e7x6){this[_0xdc83[31]](function(_0xd6e7x10){var _0xd6e7x14=false;for(var _0xd6e7x11 in _0xd6e7x10){if(_0xd6e7x10[_0xd6e7x11][_0xdc83[18]]=== _0xd6e7xa){_0xd6e7x14= true}};_0xd6e7x6(_0xd6e7x14)})}}