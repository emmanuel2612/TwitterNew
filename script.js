window.onload = () =>{

    const createTweetContainer = document.getElementById("createTweetContainer"); 

    const createTweetButton = document.getElementById("createTweetButton");
    const backArrow = document.getElementById("backArrow");
    
    const tweetBox = document.getElementById("tweetBox");

    let tweetBoxInput;

    const pinnedTweet = document.getElementById("pinnedTweet");
    const tweetContainer = document.getElementById("tweetContainer");


createTweetButton.onclick = () =>{
    createTweetContainer.style.display = "block";
}

backArrow.onclick = () => {
    createTweetContainer.style.display = "none";
}


postTweetButton.onclick = () =>{

    console.log(tweetBox.value);

    tweetBoxInput = tweetBox.value;


    var clonedTweet = tweetContainer.cloneNode(true);

    pinnedTweet.after(clonedTweet);

    



}






}