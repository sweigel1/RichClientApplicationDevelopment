/*
  GP2Y1010AU0F.cpp - Library for GP2Y1010AU0F Sharp dust sensor.
  Created by Sorz. 2014-07-17.
*/
#include "Arduino.h"
#include "GP2Y1010AU0F.h"

DustySensor::DustySensor(int ledPin, int outPin)
{
  pinMode(ledPin, OUTPUT);
  _ledPin = ledPin;
  _outPin = outPin;
}

int DustySensor::readRaw()
{
  digitalWrite(_ledPin, LOW); // Switch on LED.
  delayMicroseconds(280);
  int val = analogRead(_outPin);
  delayMicroseconds(40);
  digitalWrite(_ledPin,HIGH); // Switch off LED.
  delayMicroseconds(9680);
  return val;
}

int DustySensor::read()
{
  float volt = ((float) readRaw()) * 4.88281; // Voltage in mV.
  int mass = (int) (0.172 * volt - 0.9999); // Mass of dust in μg/m^3.
  return mass;
}
  
