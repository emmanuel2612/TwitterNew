window.onload = () =>{

    const createTweetContainer = document.getElementById("createTweetContainer"); 

    const createTweetButton = document.getElementById("createTweetButton");
    const backArrow = document.getElementById("backArrow");
    
    const tweetBox = document.getElementById("tweetBox");

    let tweetBoxInput;

    const pinnedTweet = document.getElementById("pinnedTweet");
    const tweetContainer = document.getElementById("tweetContainer");

    const tweetSentContainer = document.getElementById("tweetSentContainer");


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




    createTweetContainer.style.display = "none";
   tweetSentContainer.style.display = "flex";
  
/* Show Tweet Sent container*/
   setTimeout(() => {
    tweetSentContainer.style.height = "30px";
}, 700);

   setTimeout(() => {
       tweetSentContainer.style.opacity = "1";

   }, 1000);

/* End of Show Tweet Sent container */

/* Hide Tweet Sent container */

    setTimeout(() => {
        tweetSentContainer.style.opacity = "0";
    }, 5000); 

    setTimeout(() => {
        tweetSentContainer.style.height = "0";
        tweetSentContainer.style.marginBottom = "0";
    }, 5300);

    setTimeout(() => {
        tweetSentContainer.style.display = "none";
        tweetSentContainer.style.marginBottom = "12px";
    }, 8000); 
    
/*End of Hide Tweet Sent container */





}






}