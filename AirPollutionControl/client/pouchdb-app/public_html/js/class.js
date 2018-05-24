/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

'use strict';

class ApcDatabase {
    constructor(dbhost, dbuser, dbpassword, dbname, dbport = "5984") {
        this.dbhost = dbhost;
        this.dbuser = dbuser;
        this.dbpassword = dbpassword;
        this.dbname = dbname;
        this.dbport = dbport;
        this.pouchDB = new PouchDB(dbname);
        this.remoteDB = 'http://' + dbuser + ':' + dbpassword + '@' + dbhost + ':5984/' + dbname;
        this.data = " ";
        this.logging = true;
    }

    get dataRows() {
        return this.data;
    }

    set dataRows(value) {
        this.data = value;
    }

    get remoteString() {
        return this.remoteDB;
    }

    synclogger(error) {
        console.log(error);
    }

    sync() {
        var opts = {live: true};
        this.pouchDB.replicate.to(this.remoteDB, opts, (error) => {
            console.log(error);
        });
        this.pouchDB.replicate.from(this.remoteDB, opts, (error) => {
            console.log(error);
        });
    }

    selectAllRows() {
        this.pouchDB.allDocs({
            include_docs: true,
            attachments: true
        }).then( (result) => {
            this.data = result.rows;
        }).catch((err) => {
            this.synclogger(err);
        });
    }

    deleteRowByID(id) {
        this.pouchDB.get(id).then((doc) => {
            this.pouchDB.remove(doc);
        }).catch( (err) => {
            this.syncError(err);
        });
        
    }
}

let dbobject = new ApcDatabase("wasdabyx.de", "tester", "secret", "sensorx");