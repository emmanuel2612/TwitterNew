window.onload = () => {

    const createTweetContainer = document.getElementById("createTweetContainer");

    const createTweetButton = document.getElementById("createTweetButton");
    const backArrow = document.getElementById("backArrow");

    const tweetBox = document.getElementById("tweetBox");

    let tweetBoxInput;

    const pinnedTweet = document.getElementById("pinnedTweet");
    const tweetContainer = document.getElementById("tweetContainer");

    const tweetSentContainer = document.getElementById("tweetSentContainer");



    /* Tweet Component */















    /* End of Tweet Component */




















    createTweetButton.onclick = () => {
        createTweetContainer.style.display = "block";
        tweetBox.value = "";
    }

    backArrow.onclick = () => {
        createTweetContainer.style.display = "none";
    }


    postTweetButton.onclick = () => {

        

        console.log(tweetBox.value);

        tweetBoxInput = tweetBox.value;


        if (tweetBoxInput == "") {
            console.log("please write tweet");
        }

        else {

            createTweetContainer.style.display = "none";
            tweetSentContainer.style.display = "flex";

            


            class Tweet extends HTMLElement {
                connectedCallback() {
                    this.innerHTML = `

                   
                    <div id="tweetContainer" class= "tweetContainer">
                            <figure class="tweetProfileImgContainer">
                                <img class="tweetProfileImg" src="images/profilepicture.jpg">
                            </figure>
        
                            <div>
                            <h4 class="tweetName">Emmanuel</h4>
        
                            <p class="tweetText">${tweetBoxInput}</p>
                            </p>
        
                             </div>
                           
                    `
                }

            }

          

            customElements.define('tweet-container', Tweet);















            /* Show Tweet Sent container*/
            setTimeout(() => {
                tweetSentContainer.style.height = "30px";
            }, 1000);

            setTimeout(() => {
                tweetSentContainer.style.opacity = "1";

            }, 1300);

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

    
















}