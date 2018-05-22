#include "GP2Y1010AU0F.h"
#include "DHT22.h"

DustySensor dustSensor(10, 0);
TempHumiSensor tempHumiSensor(9);

void setup(){
  Serial.begin(9600);
}

void loop(){
  int dustVal = dustSensor.read();
  Serial.println("Dust");
  Serial.println(dustVal);
  float temp = 0;
  float humi = 0;
  tempHumiSensor.read(&temp, &humi);
  Serial.println("Temp");
  Serial.println(temp);
  Serial.println("Humi");  
  Serial.println(humi);
  delay(3000);
}
