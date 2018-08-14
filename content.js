console.log("Poof!");
// chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     chrome.tabs.executeScript(
//         tabs[0].id,
//         {code: 'document.body.style.backgroundColor = "black";'});
// });
let jobPostings = document.getElementById('MainCol').firstChild.childNodes[1].childNodes;

let job;
for (let i = 0; i < jobPostings.length; i++) {
    job = jobPostings[i]
    if (job.getAttribute("data-emp-id") === "1266141") {
        console.log("ID matched");
        job.style.display = "none";
    }
}