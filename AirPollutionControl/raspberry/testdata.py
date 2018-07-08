import json, requests, time, random, sys


def getVal():
    values = []
    values.append(int(time.time())) #timestamp
    values.append(random.uniform(30,40)) #humidity
    values.append(random.uniform(22,27)) #temp
    values.append(random.uniform(1,6))  #pm25
    values.append(random.uniform(5,9))  #pm10
    values.append(52.296427) #long
    values.append(8.90375) #lat
    return values


if __name__ == '__main__':
    while True:
        values = getVal()
        identifier = "23456"
        secsToSleep = 0
        try:
            secsToSleep = int(sys.argv[1])
        except (ValueError, IndexError) as err:
            secsToSleep = 60
        
        
        jsondata= {'timestamp':values[0],'humidity':values[1],'temperature':values[2],'pm25':values[3],'pm10':values[4],'long':values[5],'lat':values[6]}
        jsonToSend = {'id':identifier,'data':[]}
        jsonToSend['data'].append(jsondata)
        #jsonToSend = json.dumps(jsonToSend)
        r = requests.put(url="http://wasdabyx.de:8080?id="+identifier, json=jsonToSend)
        if r.status_code == 200:
            print("Send this: %s" % (json.dumps(jsonToSend)))
            print("Status code: %s. Sleep %i seconds" % (r.text,secsToSleep))
            print("")
        time.sleep(secsToSleep)
