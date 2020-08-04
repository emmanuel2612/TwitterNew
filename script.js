window.onload = () => {

    const createTweetContainer = document.getElementById("createTweetContainer");

    const createTweetButton = document.getElementById("createTweetButton");
    const backArrow = document.getElementById("backArrow");
    const postTweetButton = document.getElementById("postTweetButton");
    const updateTweetButton = document.getElementById("updateTweetButton");

    const tweetBox = document.getElementById("tweetBox");

    let tweetBoxInput;

    const pinnedTweet = document.getElementById("pinnedTweet");

    const tweetSentContainer = document.getElementById("tweetSentContainer");


    var tweetTemplate = document.getElementById("tweet-template");


           

            




    createTweetButton.onclick = () => {
        createTweetContainer.style.display = "block";
    }

    backArrow.onclick = () => {
        createTweetContainer.style.display = "none";
    }


    postTweetButton.onclick = () => {


        tweetBoxInput = tweetBox.value;

        tweetBox.value = "";


        if (tweetBoxInput == "") {
            console.log("please write tweet");
        }

        else {


            createTweetContainer.style.display = "none";
            tweetSentContainer.style.display = "flex";

            var tweetInstance = document.importNode(tweetTemplate.content, true); /*Import template into the DOM*/
            var tweetText = tweetInstance.querySelector('p');
            var editButton = tweetInstance.querySelector('#button');

            tweetText.innerHTML = tweetBoxInput; /* Set paragraph text of new node */

            editButton.onclick = () => {
                createTweetContainer.style.display = "block";
                console.log("edit button clicked");

                tweetBox.value = tweetText.innerHTML;

                postTweetButton.style.display = "none";
                updateTweetButton.style.display = "block";
            } 

            // Then append to the DOM
            pinnedTweet.after(tweetInstance); 


            /* Edit Button */
            if (tweetText.innerHTML.length <= 100) {
                setTimeout(() => {
                    editButton.style.display = "none";
                }, 5000);
            }

            else if (tweetText.innerHTML.length > 100 && tweetText.innerHTML.length < 200){
                setTimeout(() => {
                    editButton.style.display = "none";
                }, 10000);
            }

            else if (tweetText.innerHTML.length > 200 && tweetText.innerHTML.length <= 300){
                setTimeout(() => {
                    editButton.style.display = "none";
                }, 15000);
            }



            /* End of Edit Button */

            updateTweetButton.onclick = () =>{

                tweetText.innerHTML = tweetBox.value; 

                createTweetContainer.style.display = "none";

                tweetBox.value = "";
    

                updateTweetButton.style.display = "none";
                postTweetButton.style.display = "block";

            }








    


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


         /* Edit Button Timing*/

         if (tweetText.length > 10) {

            pinnedTweet.style.display = "none";

        }




        /* End of Edit Button Timing */






    }















































}