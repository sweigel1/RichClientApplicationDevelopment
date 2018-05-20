/*
  GP2Y1010AU0F.h - Library for GP2Y1010AU0F Sharp dust sensor.
  Created by Sorz. 2014-07-17.
*/
#ifndef GP2Y1010AU0F_h
#define GP2Y1010AU0F_h

#include "Arduino.h"

class DustySensor
{
  public:
    // ledPin - Digital pin connected to LED (#2) pin.
    // outPin - Analog pin connected to Vo (#5) pin.
    DustySensor(int ledPin, int outPin);
    // Returns mass of dust in μg/m^3.
    // The reference voltage must be 5V, otherwise the output is incorrect.
    int read();
    // Returns the raw value returned by analogRead().
    int readRaw();
  private:
    int _ledPin;
    int _outPin;
};

#endif
