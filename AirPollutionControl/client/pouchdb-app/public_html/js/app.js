(function () {

    'use strict';

    var dbname = "sensorx";
    var dbuser = "tester";
    var dbpw = "secret";
    var dbhost = "wasdabyx.de";

    var db = new PouchDB('sensor');
    var remoteCouch = 'http://' + dbuser + ':' + dbpw +'@' + dbhost + ':5984/' + dbname;
    
    console.log("Remote String: " + remoteCouch)

    // We have to create a new todo document and enter it in the database
    function addReading(temperature, humidity, dust) {
        var reading = {
            _id: new Date().toISOString(),
            temperature: temperature,
            humidity: humidity,
            dust: dust
        };
        db.put(reading, function callback(err, result) {
            if (!err) {
                console.log('Successfully posted a todo!');
            }
        });
    }

    function showReadings() {
        db.allDocs({include_docs: true, descending: true}, function (err, doc) {
            console.log(doc.rows);
        });
    }

    function deleteReading(reading) {
        db.remove(reading);
    }


    // Initialise a sync with the remote server
    function sync() {
        //syncDom.setAttribute('data-sync-state', 'syncing');
        var opts = {live: true};
        db.replicate.to(remoteCouch, opts, syncError);
        db.replicate.from(remoteCouch, opts, syncError);
    }


    db.changes({
        since: 'now',
        live: true
    }).on('change', showReadings
       );
    // There was some form or error syncing
    function syncError() {
        console.log('error');
    }
    addReading(12,22,745);
    

    if (remoteCouch) {
        sync();
    }
        
})();
