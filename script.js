    var finalURL;
    var URLReceiver = document.getElementById('Ourl');
    var SourceReceiver = document.getElementById('src');
    var EmailReceiver = document.getElementById('email');

    
    URLReceiver.onkeyup = function(){aggregrator()};
    SourceReceiver.onkeyup = function(){aggregrator()};
    EmailReceiver.onkeyup = function(){aggregrator()};

    function aggregrator()
    {
        finalURL = URLReceiver.value + SourceReceiver.value + EmailReceiver.value;
        document.getElementById('outputURL').innerHTML = finalURL;
        console.log("MANE");
    }

    