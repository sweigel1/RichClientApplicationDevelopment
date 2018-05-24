import requests
import urllib2


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


def sendData(url,data,parameters=""):
    if isOnline(url):
        postReq(url,data,parameters)
        return True
    return False
    

def isOnline(url):
    try:
        urllib2.urlopen(url, timeout=1)
        return True
    except urllib2.URLError as err: 
        return False
    except ValueError as valerr:
        return False
    

