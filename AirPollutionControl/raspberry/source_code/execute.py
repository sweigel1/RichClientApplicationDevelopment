import time;
import os;
import json;

class JsonFile:
    'Makes a File with Timestamp as name and fills it with Json'
    filename = ""
    timestamp = 0
    cwd = ""
    
    parsedJson = {}

    def __init__(self, filename = "queue.json"):
        self.filename = filename
        self.timestamp = int(time.time())
        
    def initFile(self):
        try:
            fo = open(self.filename, "r")
        except IOError:
            fo = open(self.filename, "w")
        #fileObject.write("{\n\tTimestamp: %i\",\n\tTest2: \"Json halt :)\"\n}" % (self.timestamp))
        return fo.close()
        
    
    def getJson(self):
        try:
            fo = open(self.filename, "r")
        except IOError:
            parsedJson = {}
        else:
            parsedJson = json.load(fo)
        return parsedJson
            
    
    def addFetch(self, humidity, temperature):
        ts = int(time.time())
        json2add_str = ("{'%i' : {'humidity' : '%f', 'temperature' : '%f'}}" % (ts, humidity, temperature))
        print(json2add_str)
        json2add = json.dumps(json2add_str)
        print(json2add)
        try:
            fo = open(self.filename, "r+")
        except IOError:
            initFile()
        data = self.getJson()
        
        data.update(json2add)
        json.dump(data, fo)
        
            
    
testobject = JsonFile()
#print("parsedJson: %s" % (testobject.getJson()))
testobject.addFetch(47.0, 22.5)

            
        


