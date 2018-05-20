/*
  DHT22.h - Library for DHT22 relative humidity & temperature sensor.
  Created by Sorz. 2014-07-17.
*/
#ifndef DHT22_h
#define DHT22_h

#include "Arduino.h"

class TempHumiSensor
{
  public:
    TempHumiSensor(int pin);
    boolean read(float *temp, float *humi);
  private:
    int _pin;
    byte _getbyte();
    float _decode_float(byte high, byte low);
};
#endif
