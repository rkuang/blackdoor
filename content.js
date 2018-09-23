console.log("Blackdoor active!");

chrome.storage.sync.get(['blacklist'], function(result) {
    console.log("Blacklist:", result.blacklist);
    if (result.blacklist === undefined) return

    var jobPostings = document.getElementById('MainCol').firstChild.childNodes[1].childNodes;
    var jobPost, empID;
    for (var i = 0; i < jobPostings.length; i++) {
        jobPost = jobPostings[i]
        empID = jobPost.getAttribute("data-emp-id")
        if (empID in result.blacklist) {
            console.log("Blackdoor: hit:", empID);
            jobPost.style.display = "none";
        } else {
            console.log("Blackdoor: miss");
        }
    }
});
