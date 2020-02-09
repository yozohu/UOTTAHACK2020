#include <SoftwareSerial.h>

SoftwareSerial BottleForce(10, 11); //Connect bluetooth sensor (RX and TX) at Pin 10,11 (or D10,D11). Order does not matter.
int sensorPin = A0;
int sensorValue = 0;
void setup() {
BottleForce.begin(9600); }
void loop() {
sensorValue = analogRead(sensorPin);

BottleForce.print("0000");
BottleForce.print(",");
BottleForce.print("6969");
BottleForce.print(",");
BottleForce.print("6969 hPa");
BottleForce.print(",");
BottleForce.print("420 ml/s");
BottleForce.print(",");
BottleForce.print(sensorValue);
BottleForce.print(";");

//message to the receiving device
//1 second delay
delay(1000);

}
