import time
import json
import os

class JsonFile:
    'Makes a File with Timestamp as name and fills it with Json'
    filename = ""

    def __init__(self, filename = "queue.json"):
        self.filename = filename
        
    def initFile(self):
        try:
            fo = open(self.filename, "r")
        except IOError:
            fo = open(self.filename, "w")
            fo.write("{}")
        return fo.close()
    
    
    def deleteFile(self):
        print "x"
            
        
        
    
    def getJson(self):
        try:
            fo = open(self.filename, "r")
        except IOError:
            self.initFile()
            fo = open(self.filename, "r")
            jsonPython = json.load(fo)
        else:
            jsonPython = json.load(fo)
        fo.close()
        return jsonPython
            
    
    def addFetch(self, humidity, temperature, dust, ts = "0"):
        ts = int(time.time())
        try:
            float(humidity)
            float(temperature)
            float(dust)
        except ValueError:
            dummy = -999
            humidity = temperature = dust = dummy
            
        json2add_str = ("{\"%i\" : {\"humidity\" : \"%f\", \"temperature\" : \"%f\", \"dust\" : \"%f\"}}" % (ts, humidity, temperature, dust))
        #print(json2add_str)
        json2add = json.loads(json2add_str)
        #print(json2add)
        try:
            fo = open(self.filename, "r+")
        except IOError:
            self.initFile()
            fo = open(self.filename, "r+")
        data = self.getJson()
        data.update(json2add)
        json.dump(data, fo)
        fo.close()
        
            
    
#testobject = JsonFile()
#testobject.addFetch(47.0, 22.5, 0.75)

            
        


