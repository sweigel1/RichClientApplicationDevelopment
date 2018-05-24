import requests


def getReq(url, parameters = ""):
    res = requests.get(url, parameters)
    return res


def postReq(url, data = "", parameters = ""):
    res = requests.post(url, data, parameters)
    return res


def testPost(data = "{\"Test\":\"JSON\"}"):
    url = "http://httpbin.org/post"
    res = postReq(url, data)
    return res
    