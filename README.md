# eSimEx

**eSimEx** ist ein Frontend-Prototyp für eine digitale Lern- und Prüfungssimulationsplattform für technische Ausbildungsberufe.

## Projektstatus

Aktuell ist die erste Ausbaustufe vorgesehen: **Design und Frontend**. Die Oberfläche umfasst Bereiche für Auszubildende, Ausbilder und Administratoren.

### Azubi
- Persönliches Dashboard mit Lernfortschritt und Aufgaben
- Lernmodule, Lektionen und Wissensfragen
- Prüfungssimulation mit Zeitlimit und Aufgaben-Navigation
- Sechs Fragetypen: Einfachauswahl, Mehrfachauswahl, Berechnung, Zuordnung, Reihenfolge und Freitext
- Ergebnisansicht, Auswertung, CSV-Export und Lernrangliste

### Ausbilder
- Dashboard und Azubi-Übersicht
- Lerngruppen und Gruppen-Auswertungen
- Demo-Aufgaben zuweisen
- Prüfungen konfigurieren und Fragen auswählen

### Administrator
- Benutzerübersicht
- Ausbildungsberufe und Inhaltsverwaltung
- Systemstatus

## Lokal starten

Voraussetzung: Node.js 22.12 oder neuer.

```bash
npm install
npm run dev
```

Die Vite-Vorschau ist normalerweise unter http://localhost:5173 erreichbar.

Für einen Produktions-Build:

```bash
npm run typecheck
npm run build
npm run preview
```

## Wichtiger Hinweis

Dieser Stand ist ein **Frontend-Prototyp**. Anmeldung, Datenbank, dauerhafte Speicherung und serverseitige Rollenprüfung sind noch nicht enthalten. Alle Personen, Lernstände und Prüfungsdaten sind Beispieldaten.

eSimEx verwendet eine eigenständige Produktidentität mit einer an Liebherr orientierten Gestaltungsrichtung. Es ist kein offizielles Liebherr-System und verwendet kein offizielles Liebherr-Logo.
