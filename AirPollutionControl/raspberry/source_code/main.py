import request
import jsonObject
import time

testobject = jsonObject.JsonFile()
#testobject.addFetch(47.0, 22.5, 0.75)
#jsonstr = jsonObject.json.dumps(testobject.getJson())
#print(jsonstr)
#r = request.testPost(jsonstr)
url = "http://httpbin.org"

while True:
    testobject.addFetch(47.0, 22.5, 0.75)
    data = jsonObject.json.dumps(testobject.getJson())
    print(request.sendData(url,data))
    time.sleep(2)


