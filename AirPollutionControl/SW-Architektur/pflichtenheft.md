# Pflichtenheft APC - AirPollutionControl
![APC Titelbild](https://github.com/sweigel1/RichClientApplicationDevelopment/blob/master/AirPollutionControl/SW-Architektur/Titelbild.png)


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
    - Use-Case Diagramme
    - Strukturierung der Diagramme in funktionale Gruppen
### USE-Case-Diagramme
![USE-CASES](https://github.com/sweigel1/RichClientApplicationDevelopment/blob/master/AirPollutionControl/SW-Architektur/APC_USE_CASE.png)    
![USE-CASES](https://github.com/sweigel1/RichClientApplicationDevelopment/blob/master/AirPollutionControl/SW-Architektur/APC_USE_CASE2.png)    
![USE-CASES](https://github.com/sweigel1/RichClientApplicationDevelopment/blob/master/AirPollutionControl/SW-Architektur/APC_USE_CASE3.png)    
    




## 2.2 Nicht-funktionale Anforderungen 

### 2.2.1 Rahmenbedingungen
    - Normen, Standards, Protokolle, Hardware, externe Vorgaben

### 2.2.2 Betriebsbedingungen
    - Vorgaben des Kunden (z.B. Web Browser / Betriebssystem Versionen, Programmiersprache)

### 2.2.3 Qualitätsmerkmale
    - Externe Qualitätsanforderungen (z.B. Performance, Sicherheit, Zuverlässigkeit, Benutzerfreundlichkeit)

## 2.3 Graphische Benutzerschnittstelle
    - GUI-Mockups passend zu User Stories
    - Modellierung der Navigation zwischen den Screens der GUI-Mockups als Zustandsdiagramm
### Mockup zur User Storie(ID 1)
![GuiMockup1](https://github.com/sweigel1/RichClientApplicationDevelopment/blob/master/AirPollutionControl/SW-Architektur/Mockups/exports/APIList.png)
### Mockup zur User Storie(ID 2)
![GuiMockup2](https://github.com/sweigel1/RichClientApplicationDevelopment/blob/master/AirPollutionControl/SW-Architektur/Mockups/exports/new%20API.png)
### Mockup zur User Storie(ID 4)
![GuiMockup4](https://github.com/sweigel1/RichClientApplicationDevelopment/blob/master/AirPollutionControl/SW-Architektur/Mockups/exports/SensorList.png)
### Mockup zur User Storie(ID 5/9/10)
![GuiMockup5](https://github.com/sweigel1/RichClientApplicationDevelopment/blob/master/AirPollutionControl/SW-Architektur/Mockups/exports/new%20Sensor.png)
### Mockup zur User Storie(ID 6)
![GuiMockup6](https://github.com/sweigel1/RichClientApplicationDevelopment/blob/master/AirPollutionControl/SW-Architektur/Mockups/exports/Dashboard.png)
### Mockup zur User Storie(ID 7)
![GuiMockup7-Loginpage](https://github.com/sweigel1/RichClientApplicationDevelopment/blob/master/AirPollutionControl/SW-Architektur/Mockups/exports/Loginpage.png)


### Zustandsdiagramm Mockups
![Zustandsdiagramm](https://github.com/sweigel1/RichClientApplicationDevelopment/blob/master/AirPollutionControl/SW-Architektur/Mockups/exports/Zustandsdiagramm_Mockups.png)



## 2.4 Anforderungen im Detail
    - User Stories mit Akzeptanzkritierien 
    - Optional: Name (oder ID) und Priorität ("Must", "Should", "Could", "Won't")
    - Strukturierung der User Stories in funktionale Gruppen

| **ID**| **In meiner Rolle als**...|   ...**möchte ich**...   | ..., **so dass**... | **Erfüllt, wenn**... | **Priorität**   |
|:-----|:----------:|:-------------------|:-------------|:---------|:----------------|
| 1  |Benutzer| unter dem Reiter Externe Apis alle meine eingebundenen APIS in einer Übersicht aufgelistet haben|ich eine Übersicht meiner APIs habe | APIs korrekt aufgelistet und eingebunden sind | Muss |
| 2  |Benutzer| eine neue API hinzufügen| diese später in meiner Übersicht zu sehen ist| API korrekt gespeichert und aufgelistet | Muss |
| 3  |Benutzer| eine neue API hinzufügen| ich Daten von dieser API nutzen kann| Daten korrekt gespeichert und eingearbeitet sind | Muss |
| 4  |Benutzer| unter dem Reiter Sensoren alle meine eingerichteten Sensoren in einer Übersicht aufgelistet haben | Sensoren korrekt aufgelistet | Muss |
| 5  |Benutzer| eine neuen Sensor hinzufügen und einrichten können | der Sensor in meiner Übersicht zu sehen ist | Sensor korrekt gespeichert und aufgelistet | Muss |
| 6  |Benutzer| auf dem Dashboard eine grafische Übersicht der Messdaten meiner Sensoren sehen  | ich den Grad der Luftverschmutzung direkt einsehen kann | Daten korrekt visualisiert und eingelesen sind | Muss |
| 7  |Benutzer| mich auf der Startsteite(Loginpage) mit meinem Benutzernamen und meinem Passwort anmelden können  | ich auf dem Dashboard meine aktuellen Messdaten grafisch aufbereitet ansehen kann | nach verifiziertem Login das Dashboard angezeigt wird | Muss |
| 8  |Benutzer| mich auf der Startsteite(Loginpage) mit meinem Benutzernamen und meinem Passwort registrieren können  | ich mich danach einloggen kann | nach verifizierter Registrierung der Login möglich ist| Muss |
| 9  |Benutzer| unter dem Menü Einstellungen(Nach Auwahl eines Sensors) die Konfiguration des Sensors ändern (Verbindungsinertervall mit dem Server, Name, Bild)   | die Einstellungen geändert werden | die Einstellungen korrekt gespeichert werden | Muss |
| 10  |Benutzer| unter dem Menü Einstellungen(Nach Auwahl eines Sensors) einen Grenzwert für die Luftbelastung einstellen können   | ich eine Pushmitteilung auf meinem mobilen Endgerät erhalte | die Push-Mitteilung beim Erreichen des eingestellten Grenzwertes auf meinem mobilen Endgerät angezeigt wird | kann |
| 11 |Benutzer| Daten, die ich offline gemessen habe, nachträglich mit Standortdaten eintragen(GoogleMapApi)   | die Daten im System gespeichert werden  | die Daten korrekt gespeichert und visualisiert werden | Sollte |
| 12 |Benutzer| bei kleineren Problemen eine Hilfeseite aufrufen können  | ich mein Problem ggbf. lösen kann | Hilfestellung ausreichend dokumentiert ist | Sollte |
| 13 |Benutzer| auch offline auf meine Daten zugreifen können  | ich diese im Dashboard angezeigt bekomme | die Daten korrekt angezeigt werden | Sollte |
| 14 |Entwickler| auf die Daten zugreifen, die auf dem Server gespeichert sind| ich bei Problemen ggbf. nachhelfen kann | Daten können eingesehen und bearbeitet werden| Sollte |
| 15 |Entwickler| nach Zustimmung des Nutzers auf die Registrierungsdaten zugreifen können| ich diese bei Problemem einsehen kann | man die Daten ändern kann | Sollte |

# 3 Technische Beschreibung

## 3.1 Systemübersicht
    - Systemarchitekturdiagramm ("Box-And-Arrow" Diagramm)
    - Schnittstellenbeschreibung
    - Kommunikationsprotokolle, Datenformate

## 3.2 Softwarearchitektur
    - Darstellung von Softwarebausteinen (Module, Schichten, Komponenten)

## 3.3 Datenmodell 
    - Konzeptionelles Analyseklassendiagramm

## 3.4 Abläufe
    - Aktivitätsdiagramme für relevante Use Cases
    - Aktivitätsdiagramm für den Ablauf sämtlicher Use Cases

## 3.5 Entwurf
    - Detaillierte UML-Diagramme für relevante Softwarebausteine

# 4 Projektorganisation

## 4.1 Annahmen
    - Nicht durch den Kunden definierte spezifische Annahmen, Anforderungen und Abhängigkeiten
    - Verwendete Technologien (Programmiersprache, Frameworks, etc.)
    - Einschränkungen, Betriebsbedingungen und Faktoren, die die Entwicklung beeinflussen (Betriebssysteme, Entwicklungsumgebung)
    - Interne Qualitätsanforderungen (z.B. Softwarequalitätsmerkmale wie z.B. Erweiterbarkeit)

## 4.2 Verantwortlichkeiten
    - Zuordnung von Personen zu Softwarebausteinen aus Kapitel 3.1 und 3.2
# Rollenzuordnung

|Name | Fachgebiet|
|-----|-----------|
|Simeon Weigel | Projektleitung |
|Felix Schilk | Raspberry|
|Michael Frevert | Backend|
|Gerrit Haake | Frontend|
|Daniels Haering | Frontend|

## 4.3 Grober Projektplan
# Meilensteine
|Meilenstein | Datum|
|-----|-----------|
|Pflichtenheft | 24.05.2018 |
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
    - Definitionen, Abkürzungen, Begriffe

## 5.2 Referenzen
    - Handbücher, Gesetze

## 5.3 Index



