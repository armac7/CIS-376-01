$('document').ready(function() {
    $("#introduction").removeClass("fade-in-out");
    
    if ($('.continue').click()) {
        nextStep();
    }

    if ($("#submit-response").click()) {
        let userName = submitName();
    }

});

// Used for the click of the first button.
// Hides the button + fades in the guard, dialogue, and
// the prompt for user response.
function nextStep() {
    $('.continue').click(function() {
        $("#button-one").hide();
        $("#guard").removeClass("fade-in-out");
        $("#dialogue").removeClass("fade-in-out");
        $("#response").removeClass("fade-in-out");
    });
}

// Function used for when user presses the "answered ye" button.
function submitName() {
    let userName = "";
    $("#submit-response").click(function() {
        // Gets the username from the user.
        userName = $("#name").val();

        // fades out the button and input elements.
        $("#name").addClass("fade-in-out");
        $("#submit-response").addClass("fade-in-out");

        // fades in given name in text form.
        $("#response-name").text(userName);
        $("#response-name").removeClass("fade-in-out");

        // fades in the finale and gets its text from guardResponse.
        document.getElementById("dialogue").setAttribute("style","height:600px");
        $("#finale").html(guardResponse(userName));
        $("#finale").removeClass("fade-in-out");
    });

    
    return userName;
}


function guardResponse(userName) {
    let chance = Math.floor(Math.random() * 5) + 1;
    let guardRespond = "";

    // Gets the first name (and last name, if given) in two separate strings.
    let fnameSpelledOut = "";
    let lnameSpelledOut = "";
    let lnameIndex = 0;

    // splits the name into two IF and ONLY IF a space is found.
    let spaceIndex = userName.search(" ");
    if (spaceIndex > 0) {
        // lnameIndex should start after the space, aka first letter of last name.
        lnameIndex = spaceIndex + 1;
        // gets the first name and separates it with dashes
        for (let i = 0; i < spaceIndex; i++) {
            fnameSpelledOut += userName[i] + "-";
        }
        // gets the last name from userName
        for (lnameIndex; lnameIndex < userName.length; lnameIndex++) {
            lnameSpelledOut += userName[lnameIndex];
        }
    }

    // Debug
    //chance = 1;
    // Dovahkiin ending
    if (chance == 1) {
        guardRespond += "Upon hearing the name, while he continued to slowly read through whatever was on the page, "
                         + "it didn't take long for his eyes to widen and jaw, even beneath the helmet, to visibly "
                         + "begin to drop to the floor. After a moment, he dropped the book, straightened up, and "
                         + "saluted. \"W-W-Welcome, " + userName + ", Dovahkiin, t-to our w-wonderful city, "
                         + "W-Whiterun! I a-apologize for the confusioN! P-Please enjoy your stay!\" And, just like "
                         + "that, the guard skirted off at the speed of light, leaving you to scratch your head in "
                         + "confusion. And, so, you left on your way to continue your journey. THE END.";
    // Checks if a last name is present, if so, gives you different endings.
    } else if (lnameIndex != 0) {
        let isBetweenAandH = (fnameSpelledOut[0].toLowerCase() >= "a" && fnameSpelledOut[0].toLowerCase() <= "h");
        let isBetweenIandP = (fnameSpelledOut[0].toLowerCase() >= "i" && fnameSpelledOut[0].toLowerCase() <= "p");
        let isBetweenQandZ = (fnameSpelledOut[0].toLowerCase() >= "q" && fnameSpelledOut[0].toLowerCase() <= "z");
        if (isBetweenAandH) {
            // Outlaw Ending
            guardRespond += "\"" + fnameSpelledOut + " " + lnameSpelledOut + "\" the guard muttered, spelling out the "
                             + "name you gave him. \"It says here...\" He pauses for a moment. "
                             + "From underneath his helmet you can "
                             + "see his eyes go wide momentarily. You realized in that moment what exactly that "
                             + "page of the book held: a list of wanted criminals. In your thoughts a moment ago "
                             + "you forgot to recall that, in Riverwood, you stole everything from the blacksmith "
                             + "as well as, well, let's just say there *is no more Riverwood locals*. \"Halt! "
                             + "You are underarrest " + userName + " for crimes against Skyrim and Her people!\" "
                             + "And, with that, you were hauled off to your time in jail. THE END.";
        } else if (isBetweenIandP) {
            // New Adventurer Ending
            guardRespond += "\"" + fnameSpelledOut + " " + lnameSpelledOut + "...well, it appears your name isn't on the "
                            + "list, so I suppose you're off the hook.\" The guard nodded at his assessment before "
                            + "buggering off, disappearing into the distance. Of course your name wasn't on the list, "
                            + "you just began your adventure. You weren't sure if you intended on doing anything "
                            + "illegal, but, regardless, you continued on your journey. The rabit pelt tucked softly "
                            + "away in your bag, or what was left of it, anyways, which had been slain by the "
                            + "two-handed greatsword on your back. With that out of the way, the city of Whiterun "
                            + "was laid before you for adventure. THE END."
        } else if (isBetweenQandZ) {
            // Daedric Prince Ending
            guardRespond += "As the guard before you scanned the book, he muttered the name you gave him, looking "
                            + "for it in whatever list he was checking, \"" + fnameSpelledOut + " " + lnameSpelledOut + " "
                            + "...\" however, as he slowly looked for your name, you realized the past you envisioned for "
                            + "yourself was not true. In fact, it was a complete fantasy. An adventurer? Since when? "
                            + "You have always been something far greater, and far worse, than any bandit or hero: "
                            + "you are the physical manifestation of a Daedric Prince. Realizing this, you snapped, "
                            + "and the guard turned into a rat, the book falling flat on his head. THE END.";
        }
    } else {
        let isBetweenAandH = (userName[0].toLowerCase() >= "a" && userName[0].toLowerCase() <= "h");
        let isBetweenIandP = (userName[0].toLowerCase() >= "i" && userName[0].toLowerCase() <= "p");
        let isBetweenQandZ = (userName[0].toLowerCase() >= "q" && userName[0].toLowerCase() <= "z");
        if (isBetweenAandH) {
            // Thief Ending
            guardRespond += "The guard muttered to himself your name, \"" + userName + " "
                            + "...I don't see you here.\" He nodded slowly to himself, putting the book away. \"Well, "
                            + "I suppose you're free to go,\" the guard relented with a sigh of relief. AS he turned away, "
                            + "you felt your hand rotate up to the back of his cloak. Thankfully, you passed the skill check "
                            + "and his loot was yours. Turns out, while you weren't on whatever list he was checking from, "
                            + "you certainly were a criminal of some sort, unfortunately for him. THE END.";
        } else if (isBetweenIandP) {
            // Skooma Ending
            guardRespond += "Before the guard could even really check the book, you started raising hell; "
                            + "turns out the past you thought to yourself was mostly fabricated due to your "
                            + "high intoxication level. You were on a dubious amount of Skooma, a highly "
                            + "illegal substance throughout the land of skyrim, most associated with the "
                            + "argonians. He realized this, smirked gently underneath his helmet, realizing "
                            + "he would hit his quota today, and turned you around forcefully. \"You're coming "
                            + "with me, Skooma-freak,\" and off to jail you went. THE END.";
        } else if (isBetweenQandZ) {
            // Bandit Ending
            guardRespond += "The second you saw him checking the book, you paniced, knowing exactly what he "
                            + "was looking for. You quickly drew your blade, to which he countered, and you began "
                            + "to be swarmed by the entire guard garrison, dying for some action. It wasn't a very "
                            + "long battle, quite short, in fact. You're skills were low and intelligence lower. " 
                            + "For some reason, you thought this was a good idea, as opposed to running. Now, you "
                            + "had to reload your life. THE END.";
        }
    }

    return guardRespond;
}
