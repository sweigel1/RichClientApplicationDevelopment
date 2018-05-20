/*
  DHT22.cpp - Library for DHT22/DHT11 relative humidity & temperature sensor.
  Created by Sorz. 2014-07-18.
*/
#include "Arduino.h"
#include "DHT22.h"

TempHumiSensor::TempHumiSensor(int pin)
{
  pinMode(pin, INPUT_PULLUP);
  _pin = pin;
}

byte TempHumiSensor::_getbyte()
{
  byte recv = 0;
  // Read eight bits. For each bit,
  // 0 is 26~28μs in high, 1 is 70μs in high.
  for (int i=7; i>=0; i--)
  {
    while (! digitalRead(_pin)); // Waiting for high.
    delayMicroseconds(50);
    recv |= digitalRead(_pin) << i;
    while (digitalRead(_pin)); // Waiting for the end of high.
  }
  return recv;
}

boolean TempHumiSensor::read(float *temp, float *humi)
{
  // Waits up IC.
  // 1. Pulldown at least 500μs, and pullup 20~40μs by host.
  // 2. Waiting for pulldown 80μs then pullup 80μs by DHT.
  pinMode(_pin, OUTPUT);
  digitalWrite(_pin, LOW);
  delay(10);
  pinMode(_pin, INPUT_PULLUP);
  delayMicroseconds(70); // (30 + 80) / 2, the middle of pulldown.
  boolean low = digitalRead(_pin);
  delayMicroseconds(80); // The middle of pullup.
  boolean high = digitalRead(_pin);
  delayMicroseconds(65); // 40 + 20 / 2, the middle of first byte lead.
  if (low != LOW || high != HIGH)
  {
    return false;
  }

  // Reads and checks.
  byte b[4];
  byte sum = 0; // Checksum
  for (int i=0; i<4; ++i)
  {
    b[i] = _getbyte();
    sum += b[i];
  }
  if (sum != _getbyte())
  {
    return false;
  }
  
  *humi = _decode_float(b[0], b[1]);
  *temp = _decode_float(b[2], b[3]);
  return true;
}

float TempHumiSensor::_decode_float(byte high, byte low)
{
  if (high < 128)
  {
    return (((word) high) << 8 | low) / 10.0;
  }
  else
  {
    return (((word) high - 128) << 8 | low) / -10.0;
  }
}
