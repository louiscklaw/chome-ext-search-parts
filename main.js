searchItem = function(word){
  var query = word.selectionText;

  // https://www.youtube.com/results?search_query=stm32f103
  var searchParam = '&sp=CAISAhAB'
  var octopartTargetUrl = "https://www.youtube.com/results?search_query=" + query + searchParam;
  console.log(octopartTargetUrl);
  chrome.tabs.create({url: octopartTargetUrl});

  // https://www.adafruit.com/?q=MCP4725
  var octopartTargetUrl = "https://www.adafruit.com?q=" + query;
  console.log(octopartTargetUrl);
  chrome.tabs.create({url: octopartTargetUrl});

  // https://www.sparkfun.com/search/results?term=MCP4725
  var octopartTargetUrl = "https://www.sparkfun.com/search/results?term=" + query;
  console.log(octopartTargetUrl);
  chrome.tabs.create({url: octopartTargetUrl});

  // search in tindie
  var octopartTargetUrl = "https://www.tindie.com/search/?q=" + query;
  console.log(octopartTargetUrl);
  chrome.tabs.create({url: octopartTargetUrl});

  // https://shop.pimoroni.com/
  var octopartTargetUrl = "https://shop.pimoroni.com/?q=" + query;
  console.log(octopartTargetUrl);
  chrome.tabs.create({url: octopartTargetUrl});

  // https://www.electroschematics.com/?s=stm32f103
  var octopartTargetUrl = "https://www.electroschematics.com/?s=" + query;
  console.log(octopartTargetUrl);
  chrome.tabs.create({url: octopartTargetUrl});

  // https://hackaday.io/search?term=stm32f103
  var octopartTargetUrl = "https://hackaday.io/search?term=" + query;
  console.log(octopartTargetUrl);
  chrome.tabs.create({url: octopartTargetUrl});

  // https://github.com/search?q=stm32f103
  var searchParam = '&o=desc&s=stars&type=Repositories'
  var octopartTargetUrl = "https://github.com/search?q=" + query + searchParam;
  console.log(octopartTargetUrl);
  chrome.tabs.create({url: octopartTargetUrl});

  // https://www.google.com.hk/search?q=esp-12+application+note
  var octopartTargetUrl = "https://www.google.com.hk/search?q=" + query+'+application+note';
  console.log(octopartTargetUrl);
  chrome.tabs.create({url: octopartTargetUrl});

  // https://www.digikey.com/en/maker/search-results?k=stm32
  var octopartTargetUrl = "https://www.digikey.com/en/maker/search-results?k=" + query+'+application+note';
  console.log(octopartTargetUrl);
  chrome.tabs.create({url: octopartTargetUrl});

  // https://www.google.com.hk/search?q=esp-12+application+note
  var octopartTargetUrl = "https://www.google.com.hk/search?q=" + query+'+breakout';
  console.log(octopartTargetUrl);
  chrome.tabs.create({url: octopartTargetUrl});

  var octopartTargetUrl = "https://octopart.com/search?q=" + query;
  console.log(octopartTargetUrl);
  chrome.tabs.create({url: octopartTargetUrl});


};

chrome.contextMenus.create({
  title: "Search parts for projects and datasheet",
  contexts:["selection"],
  onclick: searchItem
});
