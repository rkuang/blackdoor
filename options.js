var list;

chrome.storage.sync.get(['blacklist'], function(result) {
    console.log("Blacklist:", result.blacklist);
    if (result.blacklist === undefined) list = {};
    else list = result.blacklist;

    for (var company in list) {
        if (list.hasOwnProperty(company)) {
            console.log(company);
            
            document.getElementById("blacklist").appendChild(
                document.createElement("li").appendChild(
                    document.createTextNode(company)
                )
            );
        }
    }
});

document.getElementById("myButton").addEventListener('click', function() {
    console.log("add clicked");
    let input = document.getElementById("textField").value;
    list[input] = 0;
    console.log(list);
    chrome.storage.sync.set({'blacklist': list}, function() {
        console.log("Saving to storage...");
    })
    document.getElementById("textField").value = "";
});
