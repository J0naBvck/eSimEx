# eSimEx – Frontend-Prototyp

**eSimEx** ist eine Liebherr-inspirierte Lern- und Prüfungssimulationsplattform für technische Ausbildungsberufe. Dieser Stand setzt **Prompt 1 (Design und Frontend)** um.

## Lokal starten

Voraussetzung: Node.js `22.12.0` oder neuer.

```bash
npm install
npm run dev
```

Die lokale Vorschau ist anschließend normalerweise unter `http://localhost:5173` erreichbar.

## Produktions-Build

```bash
npm run typecheck
npm run build
npm run preview
```

## Enthaltene Bereiche

### Azubi
- Persönliches Dashboard mit Lernfortschritt und Aufgaben
- Lernmodul-Übersicht mit Suche und Themenfiltern
- Lektionsansicht mit Lernpfad und interaktiver Wissensfrage
- Prüfungssimulation mit Zeitlimit, Aufgaben-Navigation und Markierungen
- Sechs Fragetypen: Einfachauswahl, Mehrfachauswahl, Berechnung, Zuordnung, Reihenfolge und Freitext
- Ergebnisansicht mit Punkteauswertung und Erklärungen
- Ergebnisübersicht mit CSV-Export
- Freiwillige Lernrangliste und Profil

### Ausbilder
- Eigenes Dashboard
- Azubi-Übersicht mit Statusfiltern und Suche
- Lerngruppen mit Detailansicht
- Demo-Aufgaben zuweisen und als erledigt markieren
- Prüfungen konfigurieren und Fragen auswählen
- Gruppen-Auswertungen

### Administrator
- Benutzerübersicht
- Ausbildungsberufe
- Inhaltsverwaltung
- Systemstatus

## Demo-Modus und Grenzen

Dies ist bewusst **nur das Frontend**. Die Rollenumschaltung ist eine Vorschaufunktion und keine echte Anmeldung. Alle Personen, Kennzahlen, Prüfungen und Lernstände sind Beispieldaten. Formulare und Aktionen zeigen lokale Demo-Interaktionen; Daten werden nicht an einen Server übertragen und nicht dauerhaft gespeichert.

Es gibt in diesem Stand noch:
- keine echte Registrierung oder Anmeldung,
- keine Datenbank und keine dauerhafte Speicherung,
- keine serverseitige Rollen- oder Rechteprüfung,
- keine produktive Fragen- oder Inhaltsverwaltung,
- keine echte Gruppen- oder Ausbilder-Azubi-Zuordnung.

Diese Punkte gehören in **Prompt 2 (Backend und Fullstack)**. Die Oberfläche darf daher nicht als produktives oder offizielles Liebherr-System eingesetzt oder dargestellt werden.

## Designhinweis

Das Interface nutzt eine eigenständige eSimEx-Produktidentität mit einer an Liebherr orientierten Farb- und Gestaltungsrichtung (Gelb, Schwarz, Weiß, klare Typografie, kompakte Portalnavigation). Es verwendet kein offizielles Liebherr-Logo und behauptet keine offizielle Zugehörigkeit.
