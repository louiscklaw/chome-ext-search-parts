searchItem = function(word){
  var query = word.selectionText;

  // search in tindie

  var octopartTargetUrl = "https://www.tindie.com/search/?q=" + query;
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
  var searchParam = '?o=desc&s=stars&type=Repositories'
  var octopartTargetUrl = "https://github.com/search?q=" + query + searchParam;
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
