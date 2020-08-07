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

        updateTweetButton.style.display = "none";
        postTweetButton.style.display = "block";
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
            var editButton = tweetInstance.querySelector('#editButton');
            var arrowMenuButton = tweetInstance.querySelector('#arrowMenuButton');
            var menuContainer = tweetInstance.querySelector('#menuContainer');
            var menu = tweetInstance.querySelector('#menu');
            var cancelButton = tweetInstance.querySelector('#cancelButton');

            tweetText.innerHTML = tweetBoxInput; /* Set paragraph text of new node */

            editButton.onclick = () => {
                createTweetContainer.style.display = "block";
                console.log("edit button clicked");

                tweetBox.value = tweetText.innerHTML;

                postTweetButton.style.display = "none";
                updateTweetButton.style.display = "block";

                hideMenu();
            }


            arrowMenuButton.onclick = () => {
                showMenu();
            }

            cancelButton.onclick = () => {
                hideMenu();
            }




            /* Edit Button */
            if (tweetText.innerHTML.length <= 100) {
                setTimeout(() => {
                    editButton.onclick = null;
                    editButton.style.opacity = "0.5";
                }, 5000);
            }

            else if (tweetText.innerHTML.length > 100 && tweetText.innerHTML.length < 200) {
                setTimeout(() => {
                    editButton.onclick = null;
                    editButton.style.opacity = "0.5";
                }, 10000);
            }

            else if (tweetText.innerHTML.length > 200 && tweetText.innerHTML.length <= 300) {
                setTimeout(() => {
                    editButton.onclick = null;
                    editButton.style.opacity = "0.5";
                }, 15000);
            }



            /* End of Edit Button */

            updateTweetButton.onclick = () => {

                tweetText.innerHTML = tweetBox.value;

                createTweetContainer.style.display = "none";

                tweetBox.value = "";


                updateTweetButton.style.display = "none";
                postTweetButton.style.display = "block";

                /*editButton.style.display = "none"; */

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

            // Then append to the DOM

        }

        pinnedTweet.after(tweetInstance);


        /* Edit Button Timing*/





        /* End of Edit Button Timing */


        const showMenu = () => {

            menuContainer.style.display = "flex";
            menuContainer.style.transform = "translateY(0%)";

            setTimeout(() => {
                menuContainer.style.opacity = "1";
            }, 50);

            setTimeout(() => {
                menu.style.opacity = "1";
                menu.style.transform = "translateY(0%)";
            }, 50);

            document.body.style.overflow = "hidden";


        }

        const hideMenu = () => {


            setTimeout(() => {
                menu.style.opacity = "0";
                menu.style.transform = "translateY(100%)";
                menuContainer.style.opacity = "0";
            }, 50);

            setTimeout(() => {
                menuContainer.style.transform = "translate(0%)";
            }, 200);

            setTimeout(() => {
                menuContainer.style.display = "none";
            }, 500);


            document.body.style.overflow = "auto";










        }




    }





    var phraseButton = document.getElementById("phraseButton");


    tweetBox.onfocus = () => {



        document.onkeydown = (event) => {


            if ((event.keyCode == "71") && (tweetBox.value.length == 0)) { // If the key pressed is G, and the textbox is empty (To be the first character)

                phraseButton.style.display = "flex";
                phraseButton.innerHTML = "Good Morning";

                setTimeout(() => {
                    phraseButton.style.opacity = "1";
                }, 300);

                setTimeout(() => {
                    phraseButton.style.opacity = "0";
                }, 5000);

            }

            else if ((event.keyCode == "68") && (tweetBox.value.length == 0)) { // If the key pressed is D, and the textbox is empty (To be the first character)

                phraseButton.style.display = "flex";
                phraseButton.innerHTML = "Dfkm &#128514;";

                setTimeout(() => {
                    phraseButton.style.opacity = "1";
                }, 300);

                setTimeout(() => {
                    phraseButton.style.opacity = "0";
                }, 5000);

            }

    




            if ((event.keyCode == "8") && (tweetBox.value.length == 1)) { // Backspace

                phraseButton.style.opacity = "0";

                setTimeout(() => {
                    phraseButton.style.display = "none";
                }, 300);


                console.log("Empty!!");

            }












        }





    }

    phraseButton.onclick = () => {
        tweetBox.value = phraseButton.innerHTML;

        phraseButton.style.opacity = "0";

        setTimeout(() => {
            phraseButton.style.display = "none";
        }, 300);
    }








































    //Resize Text Area 


    const tx = document.getElementsByTagName('textarea');
    for (let i = 0; i < tx.length; i++) {
        tx[i].setAttribute('style', 'height:' + (tx[i].scrollHeight) + 'px;overflow-y:hidden;');
        tx[i].addEventListener("input", OnInput, false);
    }

    function OnInput() {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
    }


}