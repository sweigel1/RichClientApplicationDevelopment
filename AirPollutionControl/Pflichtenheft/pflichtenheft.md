![APC Titelbild](https://github.com/sweigel1/RichClientApplicationDevelopment/blob/master/AirPollutionControl/Pflichtenheft/Bilder%20und%20Symbole/Titelbild.png)


## Inhaltsverzeichnis
 1. [Einführung](https://github.com/sweigel1/RichClientApplicationDevelopment/blob/master/AirPollutionControl/SW-Architektur/pflichtenheft.md#einf%C3%BChrung)  
 1.1 Beschreibung  
 1.2 Ziele  
 2. [Anforderungen](https://github.com/sweigel1/RichClientApplicationDevelopment/blob/master/AirPollutionControl/SW-Architektur/pflichtenheft.md#2-anforderungen)  
 2.1 Funktionale Anforderungen  
 2.2 Nicht-funktionale-Anforderungen  
             2.2.1 Rahmenbedingungen  
             2.2.2 Betriebsbedingungen  
             2.2.3 Qualitätsmerkmale  
 2.3 Graphische Benutzerschnittstelle  
 2.4 Anforderungen im Detail  
 3. [Technische Beschreibung](https://github.com/sweigel1/RichClientApplicationDevelopment/blob/master/AirPollutionControl/SW-Architektur/pflichtenheft.md#3-technische-beschreibung)  
             3.1 Systemübersicht  
             3.2 Softwarearchitektur  
             3.3 Datenmodell  
             3.4	Abläufe  
             3.5	Entwurf  
 4. [Projektorganisation](https://github.com/sweigel1/RichClientApplicationDevelopment/blob/master/AirPollutionControl/SW-Architektur/pflichtenheft.md#4-projektorganisation)  
             4.1	Annahmen  
             4.2	Verantwortlichkeiten  
             4.3	Grober Projektplan  
 5. [Anhänge](https://github.com/sweigel1/RichClientApplicationDevelopment/blob/master/AirPollutionControl/SW-Architektur/pflichtenheft.md#5-anh%C3%A4nge)  
             5.1 Glossar  
             5.2 Referenzen  
             5.3 Index  


# Einführung

## 1.1 Beschreibung
Unser Projekt  **APC – AirPollutionControl** beinhaltet das Einlesen, Aufbereiten und Visualisieren von Luftdaten. Verschiedene Personen in Deutschland lesen über einen Raspberry Pi Daten von einem Luftsensor ein und und können diese auf einem Server aufarbeiten, ansehen und bearbeiten. Zusätzlich zu diesen selbst eingearbeiteten Daten greifen wir auf eine zentrale Datenbank von Deutschland zu. Es können Werte nach Regionen, Städten und verschiedenen Bezirken nach Grad der Belastung angezeigt und analysiert werden. Bei einer Feinstaubbelastung zu einer gewissen Uhrzeit bei einem bestimmten Wert bekommt man eine Pushbenachrichtigung auf sein mobiles Endgerät.

## 1.2 Ziele
Das Projekt  **APC – AirPollutionControl**  richtet sich vor allem an Privatpersonen. In Deutschland gibt es rund 400 Messtationen, die meist in Goßstädten platziert sind und nur ein punktuelles Abbild der Belastung von Feinstaub in der Luft widerspiegelt. Mit unserem Softwaresystem kann man mit geringem Aufwand, Wissen und mit geringen Kosten eine langwierige Messung dort durchführen, wo man sich aktuell befindet(z.B. Wohnort). In kleineren Städten, sowie Dörfern gibt es meistens keine oder nur eine geringe Abdeckung an Messstationen. Mit unserem System ist es möglich, auch dort Luftdaten zu sammeln, wo keine Messstationen stehen. Eine übersichtliche grafische Auswertung teilt dem Nutzer mit, wie sich die Belastung in der Luft zusammensetzt.  Diese selbst eingelesenen Daten können auf einen Server geladen werden und zusätzlich zu externen Daten ein Gesamtbild der Luftverschmutzung liefern. Dieses Softwaresystem ist jedoch kein mobiles Softwaresystem, d.h. man kann Luftdaten nur an einem festen Standort messen. Dennoch ist es möglich, dass bei einem Überschreiten von z.B. dem europäischen Grenzwert(40 µg/m³) für Feinstaubbelastung,  eine Pushmitteilung auf sein mobiles Endgerät zu erhalten.

# 2 Anforderungen

## 2.1 Funktionale Anforderungen
### USE-Case-Diagramme
![USE-CASES](https://github.com/sweigel1/RichClientApplicationDevelopment/blob/master/AirPollutionControl/Pflichtenheft/USE-Cases/APC_USE_CASE.png)    
![USE-CASES](https://github.com/sweigel1/RichClientApplicationDevelopment/blob/master/AirPollutionControl/Pflichtenheft/USE-Cases/APC_USE_CASE2.png)    
![USE-CASES](https://github.com/sweigel1/RichClientApplicationDevelopment/blob/master/AirPollutionControl/Pflichtenheft/USE-Cases/APC_USE_CASE3.png)    
    




## 2.2 Nicht-funktionale Anforderungen 

### 2.2.1 Rahmenbedingungen
Gesetzliche Vorschriften:  
In Europa und somit auch in Deutschland wurden mit der Richtlinie 80/779/EWG vom 15.Juli 1980 die Grenzwerte für Feinstaub festgelegt. 
Seit dem Jahr 2010 ist ein Jahresmittelwert für PM10 auf 40 µg/m³ festgelegt. Zudem wurde die EU-Richtlinie 2008/50/EG mit der 
39. Bundes-Immissionsschutzverordnung umgesetzt und neue Luftqualitätstandards für PM 2,5 festgelegt. (Siehe Grafik 1)
![Grenzwerte-Feinstaub](https://github.com/sweigel1/RichClientApplicationDevelopment/blob/master/AirPollutionControl/Pflichtenheft/Bilder%20und%20Symbole/11_tab_grenzwerte-feinstaub_2016-11-15.png "Grafik 1")
	
Standards:  
Mit einem Luftqualitätsindex wird in verschiedenen Ländern der Grad der Luftverschmutzung angezeigt.
In den jeweiligen Ländern sind die Grenzwerte und der Luftqualitätsindex anders festgelegt. 
Für die Anwendung wird der **Common Air Quality Index(CAQI)** angewendet. Dieser wird seit dem Jahr 2006 in Europa verwendet 
und stellt somit den Standard in unserer Anwendung dar. Hierbei wird ein stündlicher Mittelwert von PM10 und PM 2,5 Partikeln berechnet.
Dieser Index beinhaltet 5 verschiedene Grade der Luftverschmutzung auf einer Skala von 0-100. (Siehe Grafik 2)
Alle Schadstoffe bilden einen stündlichen Mittelwert, der in Dichte (μg / m 3) gemessen wird.
Für unsere Anwendung betrachten wir nur die Werte PM 10 und PM 2,5.
![CAQI_Index](https://github.com/sweigel1/RichClientApplicationDevelopment/blob/master/AirPollutionControl/Pflichtenheft/Bilder%20und%20Symbole/CAQI_Index.png "Grafik2")

Hardware:  
Für die Hardware wird ein Raspberry Pi 3 B , sowie ein daran angeschlossener Nova SDS011 Feinstaubsensor verwendet.  
Dieser misst die Partikel  PM10 und PM2,5 mittels Streulichtverfahren.Außerdem wird die Lufttemperatur, sowie die Luftfeuchtigkeit mit einem DHT22-Sensor gemessen.  
Theoretisch ist eine Verwendung von älteren Modellen des Raspberry Pis möglich, wird jedoch nicht empfohlen, da durch den Raspberry Pi 3 B eine bessere Performance und Systemsicherheit gewährleistet ist.  Für die  jeweiligen Datenblätter bitte auf das entsprechende Bild klicken.



[![Datenblatt Raspberry Pi 3 B][1]][2]

[1]: https://github.com/sweigel1/RichClientApplicationDevelopment/blob/master/AirPollutionControl/Pflichtenheft/Bilder%20und%20Symbole/Raspberry.jpg
[2]: https://github.com/sweigel1/RichClientApplicationDevelopment/blob/master/AirPollutionControl/Pflichtenheft/Datenbl%C3%A4tter/Datenblatt_Raspberry.pdf

[![Datenblatt SDS011][3]][4]

[3]: https://github.com/sweigel1/RichClientApplicationDevelopment/blob/master/AirPollutionControl/Pflichtenheft/Bilder%20und%20Symbole/sds011.jpg
[4]: https://github.com/sweigel1/RichClientApplicationDevelopment/blob/master/AirPollutionControl/Pflichtenheft/Datenbl%C3%A4tter/Datenblatt_SDS011.pdf

[![Datenblatt DHT22][5]][6]

[5]: https://github.com/sweigel1/RichClientApplicationDevelopment/blob/master/AirPollutionControl/Pflichtenheft/Bilder%20und%20Symbole/dht22.png
[6]: https://github.com/sweigel1/RichClientApplicationDevelopment/blob/master/AirPollutionControl/Pflichtenheft/Datenbl%C3%A4tter/Datenblatt_DHT22.pdf



Test-Vorgaben:  
In unserem Testverfahren wird es folgende Gliederung und Tests geben:  

1. **Unittest** :Einzelne Komponenten des Frontends werden auf korrekte Funktionalität getestet.  
2. **Integrationstest** : Der Integrationstest prüft das Zusammenspiel der integrierten Einheiten und stellt sicher, dass die Schnittstellen zwischen den einzelnen Softwareeinheiten korrekt umgesetzt wurden.  
3. **E2E (End 2 End)** : Das komplette Softwaresystem, mit allen Komponenten, wird auf Funktionalität und Fehler getestet.  

### 2.2.2 Betriebsbedingungen
Die Softwareanwendung wird als PWA(Progressive Web App) implementiert.  
Dieses wird mit HTML5, CSS3, JavaScript, Service Worker und dem react Framework realisiert.  
Als Webbrowser soll die Kompabilität und Unterstützung bei Mozilla Firefox (ab Version 58) und  Chrome(ab Version 64.0.3282) gewährleistet sein.  
Als Betriebssystem soll Windows (Windows 7/8/10), Linux , sowie Androidsysteme unterstützt werden.
Eine Unterstützung für iOS-Geräte muss nicht verfügbar sein.

### 2.2.3 Qualitätsmerkmale
Die Anforderungen an die Softwarequalität wird im Folgenden an Hand der **ISO 25010** aufgezeigt:  
![Funktionalität](https://github.com/sweigel1/RichClientApplicationDevelopment/blob/master/AirPollutionControl/Pflichtenheft/Bilder%20und%20Symbole/mark-50x50.png)  
*Funktionalität:*  
Die Aufgaben, die an das System gestellt werden, werden laut Anforderungen und Spezifikationen des Pflichtenhefts korrekt ausgeführt. Die Anforderungen mit dem Prioritätslevel "muss", müssen in das System implementiert werden und auch in Ausnahmefällen korrekt funktionieren.  

![Effizienz](https://github.com/sweigel1/RichClientApplicationDevelopment/blob/master/AirPollutionControl/Pflichtenheft/Bilder%20und%20Symbole/speed-meter-50x50.png)  
*Effizienz:*   
Die Ladezeit der PWA(Progressive Web App) darf 1000ms (1 Sekunde) in keinem Fall überschreiten. Der Ressourcenverbrauch ist bei einer mobilen Datenübertragung so gering wie möglich zu halten. Die Stabilität des Systems muss zu jeder Zeit gewährleistet werden.  

![Kompabilität](https://github.com/sweigel1/RichClientApplicationDevelopment/blob/master/AirPollutionControl/Pflichtenheft/Bilder%20und%20Symbole/interface-50x50.png)  
*Kompabilität:*   
Die einzelnen Softwarebausteine sollen weitesgehend auch einzelnd auch mit anderen Systemen kombiniert werden können.
![Benutzbarkeit](https://github.com/sweigel1/RichClientApplicationDevelopment/blob/master/AirPollutionControl/Pflichtenheft/Bilder%20und%20Symbole/cursor-50x50.png)  

*Benutzbarkeit:*  
Die Software soll leicht zu bedienen sein und Benutzereingaben sollen validiert werden, um mögliche spätere Fehlfunktionen des Systems zu verhindern.  
![Zuverlässigkeit](https://github.com/sweigel1/RichClientApplicationDevelopment/blob/master/AirPollutionControl/Pflichtenheft/Bilder%20und%20Symbole/power-50x50.png)  

*Zuverlässigkeit:*   
Die Verfügbarkeit des Systems soll auch bei außergewöhnlichen Bedingungen (z.B. plötzlicher Verbindungsabbruch)  gegeben sein.  
![Sicherheit](https://github.com/sweigel1/RichClientApplicationDevelopment/blob/master/AirPollutionControl/Pflichtenheft/Bilder%20und%20Symbole/weapon-50x50.png)  

*Sicherheit:*   
Persönliche Daten, die im System hinterlegt sind, dürfen auf keinen Fall von unberechtigten Personen eingesehen oder kopiert werden können. Daher muss eine dementsprechende Verschlüsselung bzw. Maßnahme implementiert werden.  

![Wartbarkeit](https://github.com/sweigel1/RichClientApplicationDevelopment/blob/master/AirPollutionControl/Pflichtenheft/Bilder%20und%20Symbole/wrench-50x50.png)  
*Wartbarkeit:*    
Das System muss wie in 2.2.1 Rahmenbedingungen / Testvorgaben beschriebenen Fällen getestet werden können.  
Bei einer Veränderung von DIN-Normen o.ä. muss es möglich sein, das System schnell und einfach anzupassen.

![Portabilität](https://github.com/sweigel1/RichClientApplicationDevelopment/blob/master/AirPollutionControl/Pflichtenheft/Bilder%20und%20Symbole/printed-circuit-50x50.png)  
*Portabilität:*   
Die Installation der Hardware (Raspberry PI (inklusive Sensoren)) muss leicht verständlich und einfach durchführbar sein.

## 2.3 Graphische Benutzerschnittstelle
### Loginpage
![GuiMockup8-Loginpage](https://github.com/sweigel1/RichClientApplicationDevelopment/blob/master/AirPollutionControl/Pflichtenheft/Mockups/exports/Login.png)
### Allgemeine Einstellungen
![GuiMockup9-Einstellungen](https://github.com/sweigel1/RichClientApplicationDevelopment/blob/master/AirPollutionControl/Pflichtenheft/Mockups/exports/Einstellungen.png)
### Dashboard
![GuiMockup7-Dashboard](https://github.com/sweigel1/RichClientApplicationDevelopment/blob/master/AirPollutionControl/Pflichtenheft/Mockups/exports/Dashboard.png)
### API-Übersicht
![GuiMockup1-API-Übersicht](https://github.com/sweigel1/RichClientApplicationDevelopment/blob/master/AirPollutionControl/Pflichtenheft/Mockups/exports/APIList.png)
### API - Hinzufügen
![GuiMockup2-neueAPI](https://github.com/sweigel1/RichClientApplicationDevelopment/blob/master/AirPollutionControl/Pflichtenheft/Mockups/exports/new%20API.png)
### Sensorübersicht
![GuiMockup4-Sensorübersicht](https://github.com/sweigel1/RichClientApplicationDevelopment/blob/master/AirPollutionControl/Pflichtenheft/Mockups/exports/SensorList.png)
### Sensor hinzufügen
![GuiMockup5-NeuerSensor](https://github.com/sweigel1/RichClientApplicationDevelopment/blob/master/AirPollutionControl/Pflichtenheft/Mockups/exports/new%20Sensor.png)
### Sensoreinstellungen bearbeiten
![GuiMockup6-SensorNotfifications](https://github.com/sweigel1/RichClientApplicationDevelopment/blob/master/AirPollutionControl/Pflichtenheft/Mockups/exports/Sensor%20Notifications.png)
### Zustandsdiagramm Mockups
![Zustandsdiagramm](https://github.com/sweigel1/RichClientApplicationDevelopment/blob/master/AirPollutionControl/Pflichtenheft/Mockups/exports/Zustandsdiagramm_Mockups.png)


## 2.4 Anforderungen im Detail
### 1. Account
| **ID**| **In meiner Rolle als**...|   ...**möchte ich**...   | ..., **so dass**... | **Erfüllt, wenn**... | **Priorität**   |
|:-----|:----------:|:-------------------|:-------------|:---------|:----------------|
| 1.1  |Benutzer| mich auf der Startsteite(Loginpage) mit meinem Benutzernamen und meinem Passwort anmelden können  | ich auf dem Dashboard meine aktuellen Messdaten grafisch aufbereitet ansehen kann | nach verifiziertem Login das Dashboard angezeigt wird | Muss |
| 1.2|Benutzer| mich ausloggen können | ich wieder auf dem Loginbildschirm lande | Benutzer korrekt ausgeloggt und weitergeleitet | Muss |
| 1.3 |Benutzer| das Programm beenden können | sich das Programm beendet und mich korrekt ausloggt | Benutzer korrekt ausgeloggt und Programm beendet | Muss |
### 2. Overview
| **ID**| **In meiner Rolle als**...|   ...**möchte ich**...   | ..., **so dass**... | **Erfüllt, wenn**... | **Priorität**   |
|:-----|:----------:|:-------------------|:-------------|:---------|:----------------|
| 2.1 |Benutzer| unter dem Reiter Externe Apis alle meine eingebundenen APIS in einer Übersicht aufgelistet haben|ich eine Übersicht meiner APIs habe | APIs korrekt aufgelistet und eingebunden sind | Muss |
| 2.2  |Benutzer| unter dem Reiter Sensoren alle meine eingerichteten Sensoren in einer Übersicht aufgelistet haben | Sensoren korrekt aufgelistet sind | Sensoren korrekt angezeigt | Muss |
| 2.3 |Benutzer| auf dem Dashboard eine grafische Übersicht der Messdaten meiner Sensoren sehen  | ich den Grad der Luftverschmutzung direkt einsehen kann | Daten korrekt visualisiert und eingelesen sind | Muss |


### 3. Konfiguration
| **ID**| **In meiner Rolle als**...|   ...**möchte ich**...   | ..., **so dass**... | **Erfüllt, wenn**... | **Priorität**   |
|:-----|:----------:|:-------------------|:-------------|:---------|:----------------|
| 3.1 |Benutzer| unter dem Menü Einstellungen(allgemein) meine persönlichen Daten ändern, sowie Email und Pushbenachrichtungen aktivieren/deaktieren  | meine Änderungen gespeichert werden| Daten korrekt gespeichert sind| muss |
| 3.2 |Benutzer| eine neue API hinzufügen| diese später in meiner Übersicht zu sehen ist| API korrekt gespeichert und aufgelistet | Muss |
| 3.3  |Benutzer| eine neue API hinzufügen| ich Daten von dieser API nutzen kann| Daten korrekt gespeichert und eingearbeitet sind | Muss |
| 3.4 |Benutzer| eine neuen Sensor hinzufügen und einrichten können | der Sensor in meiner Übersicht zu sehen ist | Sensor korrekt gespeichert und aufgelistet | Muss |
| 3.5 |Benutzer| unter dem Menü Einstellungen(Nach Auswahl eines Sensors) die Konfiguration des Sensors ändern (Verbindungsinertervall mit dem Server, Name, Bild)   | die Einstellungen geändert werden | die Einstellungen korrekt gespeichert werden | Muss |
| 3.6 |Benutzer| unter dem Menü Einstellungen(Nach Auswahl eines Sensors) einen Grenzwert für die Luftbelastung einstellen können   | ich eine Pushmitteilung auf meinem mobilen Endgerät erhalte | die Push-Mitteilung beim Erreichen des eingestellten Grenzwertes auf meinem mobilen Endgerät angezeigt wird | kann |
| 3.7 |Benutzer| Daten, die ich offline gemessen habe, nachträglich mit Standortdaten eintragen(GoogleMapApi)   | die Daten im System gespeichert werden  | die Daten korrekt gespeichert und visualisiert werden | Sollte |
| 3.8 |Benutzer| bei kleineren Problemen eine Hilfeseite aufrufen können  | ich mein Problem ggbf. lösen kann | Hilfestellung ausreichend dokumentiert ist | Sollte |
| 3.9 |Benutzer| auch offline auf meine Daten zugreifen können  | ich diese im Dashboard angezeigt bekomme | die Daten korrekt angezeigt werden | Sollte |
### 4. Entwickler
| **ID**| **In meiner Rolle als**...|   ...**möchte ich**...   | ..., **so dass**... | **Erfüllt, wenn**... | **Priorität**   |
|:-----|:----------:|:-------------------|:-------------|:---------|:----------------|
| 4.1 |Entwickler| auf die Daten zugreifen, die auf dem Server gespeichert sind| ich bei Problemen ggbf. nachhelfen kann | Daten können eingesehen und bearbeitet werden| Sollte |
| 4.2 |Entwickler| nach Zustimmung des Nutzers auf die Registrierungsdaten zugreifen können| ich diese bei Problemem einsehen kann | man die Daten ändern kann | Sollte |
| 4.3  |Entwickler| neue Benutzer mit Benutzernamen und Passwort regisitrieren können  | der Benutzer sich danach einloggen kann | Benutzer erfolgreich angelegt | Muss |

# 3 Technische Beschreibung

## 3.1 Systemübersicht
![Systemarchitekturdiagramm](https://github.com/sweigel1/RichClientApplicationDevelopment/blob/master/AirPollutionControl/Pflichtenheft/Bilder%20und%20Symbole/Systemarchitekturdiagramm2.png)  
    - Schnittstellenbeschreibung
    - Kommunikationsprotokolle, Datenformate

## 3.2 Softwarearchitektur
    - Darstellung von Softwarebausteinen (Module, Schichten, Komponenten)

## 3.3 Datenmodell 
    - Konzeptionelles Analyseklassendiagramm

## 3.4 Abläufe
### Aktivitätsdiagramm Gesamt
![Aktivitätsdiagramm Gesamt](https://github.com/sweigel1/RichClientApplicationDevelopment/blob/master/AirPollutionControl/Pflichtenheft/Aktivit%C3%A4tsdiagramme/APC_Gesamt.png)
### Aktivitätsdiagramm Login
![Aktivitätsdiagramm Login](https://github.com/sweigel1/RichClientApplicationDevelopment/blob/master/AirPollutionControl/Pflichtenheft/Aktivit%C3%A4tsdiagramme/APC_Login.png)
### Aktivitätsdiagramm API Hinzufügen
![Aktivitätsdiagramm API hinzufügen](https://github.com/sweigel1/RichClientApplicationDevelopment/blob/master/AirPollutionControl/Pflichtenheft/Aktivit%C3%A4tsdiagramme/APC_API_Hinzuf%C3%BCgen.png)
### Aktivitätsdiagramm Sensor Hinzufügen
![Aktivitätsdiagramm Sensor hinzufügen](https://github.com/sweigel1/RichClientApplicationDevelopment/blob/master/AirPollutionControl/Pflichtenheft/Aktivit%C3%A4tsdiagramme/APC_SensorHinzuf%C3%BCgen.png)




## 3.5 Entwurf
    - Detaillierte UML-Diagramme für relevante Softwarebausteine

# 4 Projektorganisation

## 4.1 Annahmen
    - Nicht durch den Kunden definierte spezifische Annahmen, Anforderungen und Abhängigkeiten
    - Verwendete Technologien (Programmiersprache, Frameworks, etc.)
    - Einschränkungen, Betriebsbedingungen und Faktoren, die die Entwicklung beeinflussen (Betriebssysteme, Entwicklungsumgebung)
    - Interne Qualitätsanforderungen (z.B. Softwarequalitätsmerkmale wie z.B. Erweiterbarkeit)
**Verwendete Technologien**  
Programmiersprache:  
Frameworks:  




## 4.2 Verantwortlichkeiten
# Rollenzuordnung

|Name | Fachgebiet|
|-----|-----------|
|Simeon Weigel | Projektleitung |
|Felix Schilk | Raspberry|
|Michael Frevert | Backend|
|Gerrit Haake | Frontend|
|Daniel Haering | Frontend|

## 4.3 Grober Projektplan
# Meilensteine
|Meilenstein | Datum|
|-----|-----------|
|Pflichtenheft | 31.05.2018 |
|Sensorhardware | 24.05.2018 |
|Server | 24.05.2018 |
|GUI-Komponenten |07.06.2018|
|Server (Node und DB) |07.06.2018|
|Datenauslesen |07.06.2018|
|Daten cachen |14.06.2018|
|GUI-Komponenten zusammengefügt |14.06.2018|
|Daten senden |21.06.2018|
|PWA |21.06.2018|
|Connection Raspberry-Server |28.06.2018|
|Datenbank Frontend <--> Backend |28.06.2018|
|Fertigstellung | 09.07.2018 |

# 5 Anhänge

## 5.1 Glossar 
<div class="letters-bg"><strong><a href="#letter-a">A</a> <a href="#letter-b">B</a> <a href="#letter-c">C</a> <a href="#letter-d">D</a> <a href="#letter-e">E</a> <a href="#letter-f">F</a> <a href="#letter-g">G</a> <a href="#letter-h">H</a> <a href="#letter-i">I</a> <a href="#letter-j">J</a> <a href="#letter-k">K</a> <a href="#letter-l">L</a> <a href="#letter-m">M</a> <a href="#letter-n">N</a> <a href="#letter-o">O</a> <a href="#letter-p">P</a> <a href="#letter-q">Q</a> <a href="#letter-r">R</a> <a href="#letter-s">S</a> <a href="#letter-t">T</a> <a href="#letter-u">U</a> <a href="#letter-v">V</a> <a href="#letter-w">W</a> <a href="#letter-x">X</a> <a href="#letter-y">Y</a> <a href="#letter-z">Z</a></strong></div>

<div id="letter-a" class="big-letter">A</div>
<div class="glossar-bg">
<h3>Androidsystem</h3>
Ein Androidsystem ist ein Betriebssystem als auch eine Software-Plattform für mobile Geräte wie Smartphones, Mobiltelefone, Netbooks und Tablets.

<h3>Account</h3>
Konto des Benutzers

<h3>Administrator</h3>
Verwaltungsperson mit erweiterten Benutzerrechten

<h3>APC</h3>
Air Pollution Control

<h3>API</h3>
Application Programming Interface  
Dient dazu, Informationen(z.B. Daten) zwischer einer Anwendung und einzelnen Programmteilen standardisiert auszutauschen.
 
</div>

<div id="letter-b" class="big-letter">B</div>
<div class="glossar-bg">

<h3>Betriebssystem</h3>
Das Betriebssystem ist ein Vermittler zwischen Hard- und Software.

<h3>Backend</h3>
Als Backend wird der Teil eines IT-Systems bezeichnet, der sich mit der Datenverarbeitung im Hintergrund beschäftigt – der Data Layer.  

</div>

<div id="letter-c" class="big-letter">C</div>
<div class="glossar-bg">

<h3>CAQI</h3>
Common Air Quality Index

<h3>Chrome</h3>
Webbrowser des Unternehmens Google

<h3>CSS3</h3>
Cascading Style Sheets Level 3  
Deklarative Stylesheet-Sprache

</div>

<div id="letter-d" class="big-letter">D</div>
<div class="glossar-bg">
<h3>Datenbank</h3>
Eine Datenbank dient zum Speichern, Verwalten und Abrufen von Daten bzw. Datensätzen.


<h3>DB</h3>
Datenbank


<h3>Dashboard</h3>
Übersichtsfenster um Analyseergebnisse zu veranschaulichen. 


<h3>Dichte</h3>
Die Dichte gibt an, welche Masse ein Kubikzentimeter Volumen eines Stoffes hat.  
</div>

<div id="letter-e" class="big-letter">E</div>
<div class="glossar-bg">
<h3>E2E</h3>
End to End
<h3>EG</h3>
Europäische Gemeinschaft
<h3>EWG</h3>
Europäische Wirtschaftsgemeinschaft
</div>

<div id="letter-f" class="big-letter">F</div>
<div class="glossar-bg">
<h3>Feinstaub</h3>
Als Feinstaub, Schwebstaub oder englisch "Particulate Matter" (PM) bezeichnet man Teilchen in der Luft, die nicht sofort zu Boden sinken, sondern eine gewisse Zeit in der Atmosphäre verweilen. 
Die winzigen Partikel sind mit bloßem Auge nicht wahrzunehmen. Lediglich während bestimmter Wetterlagen kann man Feinstaub in Form einer "Dunstglocke" sehen. Je nach Korngröße der Staubteilchen wird der Feinstaub in so genannte Fraktionen unterteilt: 
Unter PM10 versteht man alle Staubteilchen, deren aerodynamischer Durchmesser kleiner als 10 Mikrometer (das sind 10 Millionstel Meter) ist. 
Eine Teilmenge der PM10-Fraktion sind die feineren Teilchen, deren aerodynamischer Durchmesser weniger als 2,5 Mikrometer beträgt. Diese bezeichnet man als "Feinfraktion" oder 2,5 (im Gegensatz dazu den Größenbereich 2,5 bis 10 Mikrometer "Grobfraktion"). 
Die kleinsten von ihnen, mit einem aerodynamischen Durchmesser von weniger als 0,1 Mikrometer (das sind 100 Milliardstel Meter), sind die ultrafeinen Partikel.
<h3>Framework</h3>
Als Framework bezeichnet man ein Programmiergerüst für Entwickler.
<h3>Frontend</h3>
Als Frontend bezeichnet man die Präsentationsebene, das heißt den Teil einer Applikation, den der Betrachter sehen kann.
</div>

<div id="letter-g" class="big-letter">G</div>
<div class="glossar-bg">
<h3>GUI</h3>
Graphical User Interface  
Grafische Benutzeroberfläche
</div>

<div id="letter-h" class="big-letter">H</div>
<div class="glossar-bg">
<h3>Hardware</h3>
Die technischen Komponenten, aus denen das System besteht
<h3>HTML5</h3>
Hypertext Markup Language und bezeichnet die fünfte Version der Internet-Auszeichnungssprache.
</div>

<div id="letter-i" class="big-letter">I</div>
<div class="glossar-bg">
<h3>IOS</h3>
iOS (Internetwork Operating System)ist ein von Apple entwickeltes mobiles Betriebssystem für das iPhone, das iPad und den iPod touch.
</div>

<div id="letter-j" class="big-letter">J</div>
<div class="glossar-bg">
<h3>Javascript</h3>
JavaScript ist eine interpretierende Programmier- beziehungsweise Skriptsprache, die ursprünglich von Netscape entwickelt wurde.
</div>

<div id="letter-k" class="big-letter">K</div>
<div class="glossar-bg">
<h3>Komponenten</h3>
Teil eines größeren Systems
</div>

<div id="letter-l" class="big-letter">L</div>
<div class="glossar-bg">
<h3>Luftqualitätsindex</h3>
Ein Luftqualitätsindex ist ein Index, die von Regierungsbehörden verwendet wird, um der Öffentlichkeit mitzuteilen, wie verschmutzt die Luft derzeit ist oder wie verschmutzt sie wird.
</div>

<div id="letter-m" class="big-letter">M</div>
<div class="glossar-bg">
<h3>Mockups</h3>
Visueller Prototyp
</div>

<div id="letter-n" class="big-letter">N</div>
<div class="glossar-bg">
<h3></h3>

</div>

<div id="letter-o" class="big-letter">O</div>
<div class="glossar-bg">
<h3>Overview</h3>
Überblick
</div>

<div id="letter-p" class="big-letter">P</div>
<div class="glossar-bg">
<h3>Pushbenachrichtigung</h3>
Push-Benachrichtigungen sind Meldungen, die ohne das Öffnen der jeweiligen App auf dem Smartphone erscheinen.
<h3>PM</h3>
Particulate Matter (Teilchen in der Luft)
<h3>PWA</h3>
Progressive Web App
Anwendung, die in einem Browser ausgeführt wird. Kann über einen Desktop PC oder Smartphone aufgerufen werden. Bietet Offline-Funktionalität.
</div>

<div id="letter-q" class="big-letter">Q</div>
<div class="glossar-bg">
<h3></h3>
</div>

<div id="letter-r" class="big-letter">R</div>
<div class="glossar-bg">
<h3>Raspberry Pi</h3>
Der Raspberry Pi ist ein Mini-Computer mit einem ARM-Prozessor.
</div>

<div id="letter-s" class="big-letter">S</div>
<div class="glossar-bg">
<h3>Server</h3>
Server sind leistungsstarke, zentrale Netzwerkrechner, über die funktionale und infrastrukturelle Netzdienste realisiert werden.
<h3>Streulichtverfahren</h3>
Das Streulichtverfahren ist ein spezielles Verfahren der Spannungsoptik, zur Untersuchung räumlicher Spannungszustände. Hierbei wird das an kleinen Fremdpartikeln und Fehlstellen im Modell gestreute Licht, das dabei polarisiert wird, analysiert.
<h3>Service Worker</h3>
Service Worker bezeichnet eine moderne Browsertechnologie, die mittels JavaScript einen Proxy zwischen dem Webbrowser und dem Server bereitstellt, der vielfältig genutzt werden kann.
<h3>Schnittstellen</h3>
Eine Schnittstelle ist ein definierter Übergang zwischen Datenübertragungseinrichtungen, Hardwarekomponenten, logischen Softwareeinheiten oder zwischen Mensch und Computer.
</div>

<div id="letter-t" class="big-letter">T</div>
<div class="glossar-bg">
<h3></h3>
</div>

<div id="letter-u" class="big-letter">U</div>
<div class="glossar-bg">
<h3></h3>
</div>

<div id="letter-v" class="big-letter">V</div>
<div class="glossar-bg">
<h3></h3>
</div>

<div id="letter-w" class="big-letter">W</div>
<div class="glossar-bg">
<h3>Webbrowser</h3>
Ein Webbrowser ist ein Navigationsprogramm, das im Internet HTML-Dokumente ( Hypertext Markup Language) interpretiert und darstellt.
</div>

<div id="letter-x" class="big-letter">X</div>
<div class="glossar-bg">
<h3></h3>
</div>

<div id="letter-y" class="big-letter">Y</div>
<div class="glossar-bg">
<h3></h3>
</div>

<div id="letter-z" class="big-letter">Z</div>
<div class="glossar-bg">
<h3>Zustandsdiagramm</h3>
Ein Zustandsdiagramm – auch state diagram, state machine diagram oder Zustandsübergangsdiagramm genannt – visualisiert eine Folge von Zuständen, die ein Objekt im Lebenszyklus einnehmen kann. Es wird benutzt, um das Verhalten eines Systems, eines Teilsystems, einer Komponente oder einer Klasse zu beschreiben. 
</div>

<div class="letters-bg-bottom"><strong><a href="#letter-a">A</a> <a href="#letter-b">B</a> <a href="#letter-c">C</a> <a href="#letter-d">D</a> <a href="#letter-e">E</a> <a href="#letter-f">F</a> <a href="#letter-g">G</a> <a href="#letter-h">H</a> <a href="#letter-i">I</a> <a href="#letter-j">J</a> <a href="#letter-k">K</a> <a href="#letter-l">L</a> <a href="#letter-m">M</a> <a href="#letter-n">N</a> <a href="#letter-o">O</a> <a href="#letter-p">P</a> <a href="#letter-q">Q</a> <a href="#letter-r">R</a> <a href="#letter-s">S</a> <a href="#letter-t">T</a> <a href="#letter-u">U</a> <a href="#letter-v">V</a> <a href="#letter-w">W</a> <a href="#letter-x">X</a> <a href="#letter-y">Y</a> <a href="#letter-z">Z</a></strong></div>


## 5.2 Referenzen
    - Handbücher, Gesetze

## 5.3 Index



