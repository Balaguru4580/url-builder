    var URLReceiver = document.getElementById('Ourl');
    var SourceReceiver = document.getElementById('src');
    var EmailReceiver = document.getElementById('email');

    
    URLReceiver.onkeyup = function(){aggregrator()};
    SourceReceiver.onkeyup = function(){aggregrator()};
    EmailReceiver.onkeyup = function(){aggregrator()};

    var template;

    function aggregrator()
    {
        template = `${URLReceiver.value}#src=${SourceReceiver.value}&team=${EmailReceiver.value}`;
        finalURL = template;
        document.getElementById('outputURL').innerHTML = finalURL;
        console.log("MANE");
    }

    