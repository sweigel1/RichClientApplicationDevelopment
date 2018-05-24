import request
import jsonObject

testobject = jsonObject.JsonFile()
#testobject.addFetch(47.0, 22.5, 0.75)
jsonstr = jsonObject.json.dumps(testobject.getJson())
#print(jsonstr)
r = request.testPost(jsonstr)
print(r.status_code)

print(r.text)