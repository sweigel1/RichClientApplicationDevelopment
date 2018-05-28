import request
import jsonObject
import time
import readht

sensor = 22
pin = 4
testobject = jsonObject.JsonFile() 
#testobject.addFetch(47.0, 22.5, 0.75)
#jsonstr = jsonObject.json.dumps(testobject.getJson())
#print(jsonstr)
#r = request.testPost(jsonstr)
url = "http://httpbin.org"

while True:
    humidity, temperature = readht.getAll(sensor,pin)
    testobject.addFetch(humidity, temperature, 0.75)
    data = jsonObject.json.dumps(testobject.getJson())
    #print(request.sendData(url,data))
    print("fetched data")
    time.sleep(2)


