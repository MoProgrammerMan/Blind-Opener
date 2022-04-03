
## About
This repository serves to hold the Automatic Blind opener created as a submission to UBHacking in then Spring of 2022. 

## Automatic Blind opener

This device attatches to the wand of a blind in order to allow it to be remotely and automaticcaly opened. A web application allows the user to set the desired level of openness, or set an alarm. When the alarm is set, the blind is automatically closed. Then, when the alarm rings, the blind is opened to allow natural light to wake the user. 


## How it works

An ESP32 hosts a web server on the network. The website has a slider to adjust the blinds and a calender to set an alarm. When the blind is adjusted, the ESP32 receives a request from the clients web browser. This request is parsed to gather the motion that needs to occur for the blind. Then, it sends a control signal to an L298N motor driver to determine the direction and duration needed to correctly adjust the blind.
