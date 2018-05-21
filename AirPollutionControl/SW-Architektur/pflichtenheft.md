# Pflichtenheft APC - AirPollutionControl
![APC Titelbild](https://github.com/sweigel1/RichClientApplicationDevelopment/blob/master/AirPollutionControl/SW-Architektur/Titelbild.png)



## Inhaltsverzeichnis

    1.	EINFÜHRUNG	
            1.1 BESCHREIBUNG	
            1.2 ZIELE	
    2.	ANFORDERUNGEN	
            2.1 FUNKTIONALE ANFORDERUNGEN	
            2.2 NICHT-FUNKTIONALE ANFORDERUNGEN	
                2.2.1 Rahmenbedingungen	
                2.2.2 Betriebsbedingungen	
                2.2.3 Qualitätsmerkmale	
            2.3 GRAPHISCHE BENUTZERSCHNITTSTELLE	
            2.4 ANFORDERUNGEN IM DETAIL	
    3.	TECHNISCHE BESCHREIBUNG	
            3.1 SYSTEMÜBERSICHT	
            3.2 SOFTWAREARCHITEKTUR	
            3.3 DATENMODELL
            3.4	ABLÄUFE	
            3.5	ENTWURF	
    4 	PROJEKTORGANISATION	
            4.1	ANNAHMEN	
            4.2	VERANTWORTLICHKEITEN	
            4.3	GROBER PROJEKTPLAN	
    5	ANHÄNGE	
            5.1 GLOSSAR	
            5.2 REFERENZEN	
            5.3	INDEX	


# 1 Einführung

## 1.1 Beschreibung
Unser Projekt  **APC – AirPollutionControl** beinhaltet das Einlesen, Aufbereiten und Visualisieren von Luftdaten. Verschiedene Personen in Deutschland lesen über einen Raspberry Pi Daten von einem Luftsensor ein und und können diese auf einem Server aufarbeiten, ansehen und bearbeiten. Zusätzlich zu diesen selbst eingearbeiteten Daten greifen wir auf eine zentrale Datenbank von Deutschland zu. Es können Werte nach Regionen, Städten und verschiedenen Bezirken nach Grad der Belastung angezeigt und analysiert werden. Bei einer Feinstaubbelastung zu einer gewissen Uhrzeit bei einem bestimmten Wert bekommt man eine Pushbenachrichtigung auf sein mobiles Endgerät.

## 1.2 Ziele
Das Projekt  **APC – AirPollutionControl**  richtet sich vor allem an Privatpersonen. In Deutschland gibt es rund 400 Messtationen, die meist in Goßstädten platziert sind und nur ein punktuelles Abbild der Belastung von Feinstaub in der Luft widerspiegelt. Mit unserem Softwaresystem kann man mit geringem Aufwand, Wissen und mit geringen Kosten eine langwierige Messung dort durchführen, wo man sich aktuell befindet(z.B. Wohnort). In kleineren Städten, sowie Dörfern gibt es meistens keine oder nur eine geringe Abdeckung an Messstationen. Mit unserem System ist es möglich, auch dort Luftdaten zu sammeln, wo keine Messstationen stehen. Eine übersichtliche grafische Auswertung teilt dem Nutzer mit, wie sich die Belastung in der Luft zusammensetzt.  Diese selbst eingelesenen Daten können auf einen Server geladen werden und zusätzlich zu externen Daten ein Gesamtbild der Luftverschmutzung liefern. Dieses Softwaresystem ist jedoch kein mobiles Softwaresystem, d.h. man kann Luftdaten nur an einem festen Standort messen. Dennoch ist es möglich, dass bei einem Überschreiten von z.B. dem europäischen Grenzwert(40 µg/m³) für Feinstaubbelastung,  eine Pushmitteilung auf sein mobiles Endgerät zu erhalten.

# 2 Anforderungen

## 2.1 Funktionale Anforderungen
    - Use-Case Diagramme
    - Strukturierung der Diagramme in funktionale Gruppen

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

## 2.4 Anforderungen im Detail
    - User Stories mit Akzeptanzkritierien 
    - Optional: Name (oder ID) und Priorität ("Must", "Should", "Could", "Won't")
    - Strukturierung der User Stories in funktionale Gruppen

### Schablone für User Stories

| **Als** | **möchte ich** | **so dass** | **Akzeptanz** |
| :------ | :----- | :------ | :-------- |
| Wer | Was | Warum | Wann akzeptiert |

### Beispiel 1

| **Als** | **möchte ich** | **so dass** | **Akzeptanz** |
| :------ | :----- | :------ | :-------- |
| Benutzer | bei Fehleingabe die Lösung angezeigt bekommen | ich lernen kann | Lösung wird angezeigt |

### Beispiel 2

| **Name**| **In meiner Rolle als**...|   ...**möchte ich**...   | ..., **so dass**... | **Erfüllt, wenn**... | **Priorität**   |
|:-----|:----------:|:-------------------|:-------------|:---------|:----------------|
| Lernen  |Benutzer| bei Fehleingabe die Lösung angezeigt bekommen|ich lernen kann| Lösung wird angezeigt | Muss |


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
    - Rollendefinition und Zuordnung

## 4.3 Grober Projektplan
    - Meilensteine

# 5 Anhänge

## 5.1 Glossar 
    - Definitionen, Abkürzungen, Begriffe

## 5.2 Referenzen
    - Handbücher, Gesetze

## 5.3 Index



