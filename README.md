# RichClientApplicationDevelopment

1. [Präsentation ES06](https://sweigel1.github.io/RichClientApplicationDevelopment/ES06/index.html#1)
2. [Präsentation React](https://sweigel1.github.io/RichClientApplicationDevelopment/react/index.html)
3. [Präsentation NPM und Webpack ](https://sweigel1.github.io/RichClientApplicationDevelopment/NSM_WEBPACK/index.html)
4. [Tooling](https://sweigel1.github.io/RichClientApplicationDevelopment/Tooling/index.html)

# Zweck

Repository zur LV RichClientApplication an der FH Bielefeld - Campus Minden

- Vorträge
- Inhalte
- Projekte

## Studenten

- Gerrit Haake
- Daniel Haering
- Felix Schilk
- Simeon Weigel
- Michael Frevert

## Projektbeschreibung(1.Entwurf)

Ein mögliches Szenario ist, dass verschiedene Personen in Deutschland über eine Bluetoothschnittstelle/USB-Schnittstelle Daten von einem Luftsensor einspeisen können und auf einem Server aufarbeiten, ansehen  und bearbeiten können.
Falls Sie möchten, können Sie ihre eigenen Daten auf den Server laden und für alle zur Verfügung stellen. Es können Werte nach Regionen, Städten und verschiedenen Bezirken nach Grad der Belastung angezeigt werden.
Bei einer Feinstaubbelastung zu einer gewissen Uhrzeit bei einem bestimmten Wert bekommt man eine Pushbenachrichtigung.
Der Zugriff auf die API wird von außerhalb geregelt.

## LuftDATA-Control
##### DieselNSA?

Wir brauchen noch nen coolen Namen und natürlich auch einen inoffiziellen Arbeitstitel.
Vorschläge hierhin:

- ...
- ...
- ...

### Anforderungen

1. Ein Server soll zur Verfügung gestellt werden, der das Verwalten von Luftsensoren kontrollieren und die vorhandenen Daten auswerten kann.
2. Die Sensoren sollen mit einem Rasperry Pie die Daten des Sensors in regelmäßigen Intervalen an den Server senden.
3. Der Interval soll sich durch den Server konfigurieren lassen.
4. Der Server soll auch offline als PWA (mit möglichst keinen Einschränkungen der bis dahin verfügbaren Daten) verfügbar sein.
5. Es sollen Grenzwerte definiert werden können, die bei Überschreitung Push-Notifications verschicken können.
6. Daten sollen auf dem Raspberry solange vorbehalten werden bis diese erfolgreich auf den Server transferiert wurden.
7. Es sollen externe Luftdaten APis zusätzliche Daten bereitstellen bsp (public.opendatasoft.com/explore/dataset/api-luftdateninfo)



IDEE:
Evtl. Hardware:
https://www.rasppishop.de/Raspberry-Pi-Sense-HAT
