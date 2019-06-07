searchItem = function(word){
  var query = word.selectionText;

  // https://github.com/search?q=stm32f103
  var searchParam = '&o=desc&s=stars&type=Repositories'
  var octopartTargetUrl = "https://github.com/search?q=" + query + searchParam;
  console.log(octopartTargetUrl);
  chrome.tabs.create({url: octopartTargetUrl});

  // https://www.google.com.hk/search?q=esp-12+application+note
  var octopartTargetUrl = "https://www.google.com.hk/search?q=" + query+'+application+note';
  console.log(octopartTargetUrl);
  chrome.tabs.create({url: octopartTargetUrl});

  var octopartTargetUrl = "https://www.google.com.hk/search?q=" + query+'+schematic';
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
  title: "searcn parts information",
  contexts:["selection"],
  onclick: searchItem
});
