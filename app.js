const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

function refreshIcons() {
  if (window.lucide) { window.lucide.createIcons(); return; }
  /* Inline fallback keeps the interface icons visible if the Lucide CDN is unavailable. */
  const paths = {
    target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/>',
    layers:'<path d="m12 3 9 5-9 5-9-5 9-5z"/><path d="m3 12 9 5 9-5"/><path d="m3 16 9 5 9-5"/>',
    'clock-3':'<circle cx="12" cy="12" r="9"/><path d="M12 7v5h4"/>',
    flame:'<path d="M8 14c-2-2-2-5 1-8 1 3 3 3 3 3 1-3 3-5 3-5 4 5 5 8 3 12a7 7 0 0 1-14 0c0-2 1-4 3-6z"/>',
    factory:'<path d="M3 21V9l6 3V7l6 5V4h3v17H3z"/><path d="M7 17h2m4 0h2"/>',
    'chevrons-up-down':'<path d="m7 15 5 5 5-5M7 9l5-5 5 5"/>',
    zap:'<path d="m13 2-3 9h7l-8 11 3-9H5l8-11z"/>',
    workflow:'<rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/><path d="M10 6h4a2 2 0 0 1 2 2v6"/>',
    'arrow-up-right':'<path d="M7 17 17 7M7 7h10v10"/>',
    'layout-dashboard':'<rect x="3" y="3" width="8" height="8" rx="2"/><rect x="13" y="3" width="8" height="5" rx="2"/><rect x="13" y="10" width="8" height="11" rx="2"/><rect x="3" y="13" width="8" height="8" rx="2"/>',
    'book-open':'<path d="M3 5a2 2 0 0 1 2-2h5a4 4 0 0 1 4 4v14a4 4 0 0 0-4-4H5a2 2 0 0 0-2 2z"/><path d="M21 5a2 2 0 0 0-2-2h-5"/><path d="M14 7v14a4 4 0 0 1 4-4h3V5"/>',
    'clipboard-check':'<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V2h6v2m-7 8 2 2 4-4"/>',
    calculator:'<rect x="4" y="3" width="16" height="18" rx="2"/><rect x="7" y="6" width="10" height="4"/><path d="M8 14h1m3 0h1m3 0h1m-9 3h1m3 0h1m3 0h1"/>',
    'arrow-right':'<path d="M5 12h14m-7-7 7 7-7 7"/>',
    bookmark:'<path d="M6 3h12v18l-6-4-6 4z"/>',
    sparkles:'<path d="m12 3 1.5 6L20 11l-6.5 2L12 19l-1.5-6L4 11l6.5-2z"/><path d="m19 3 1 2 2 1-2 1-1 2-1-2-2-1 2-1z"/>',
    'settings-2':'<path d="M4 7h10m4 0h2M4 17h2m4 0h10"/><circle cx="16" cy="7" r="2"/><circle cx="8" cy="17" r="2"/>',
    'chart-no-axes-combined':'<path d="M3 3v18h18"/><path d="m7 14 4-4 4 3 5-7"/>',
    'circle-help':'<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 1 1 4 2c-1.5 1-1.5 2-1.5 3m0 3h.01"/>',
    'calendar-days':'<rect x="3" y="4" width="18" height="17" rx="2"/><path d="M16 2v4M8 2v4M3 9h18m-14 4h2m4 0h2m-8 4h2m4 0h2"/>',
    bell:'<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9m-8 12a2 2 0 0 0 4 0"/>',
    'chevron-down':'<path d="m6 9 6 6 6-6"/>',
    'chevron-right':'<path d="m9 6 6 6-6 6"/>',
    'more-horizontal':'<circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>',
    'play':'<path d="m8 5 12 7-12 7z"/>',
    'trending-up':'<path d="m3 17 6-6 4 4 8-8m-6 0h6v6"/>',
    'mouse-pointer-click':'<path d="m3 3 7 18 3-7 7-3L3 3z"/>',
    'move-horizontal':'<path d="M3 12h18m-6-6 6 6-6 6M9 6l-6 6 6 6"/>',
    'x':'<path d="m18 6-12 12M6 6l12 12"/>',
    'graduation-cap':'<path d="m2 10 10-5 10 5-10 5-10-5z"/><path d="M6 12v5c4 3 8 3 12 0v-5m4-2v6"/>',
    'check':'<path d="m5 12 4 4L19 6"/>'
  };
  document.querySelectorAll('i[data-lucide]').forEach(el=>{
    const name=el.getAttribute('data-lucide');
    if(paths[name]){el.innerHTML=paths[name];el.outerHTML='<svg class="'+(el.className||'')+'" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+paths[name]+'</svg>';}
  });
}

let toastTimer;
function showToast(message) {
  const toast = $("#toast");
  const label = $("#toast-message");
  if (!toast || !label) return;
  label.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

const viewInfo = {
  dashboard: ["Dashboard", "Dein persönlicher Lernüberblick."],
  modules: ["Lernmodule", "Alle Lerninhalte deiner technischen Ausbildung im Überblick."],
  exam: ["Prüfungssimulation", "Zufällig zusammengestellte Aufgaben aus Teil A in passenden Prüfungsformaten."],
  cards: ["Karteikarten", "Wiederhole wichtige Begriffe und Zusammenhänge."],
  assistant: ["KI-Lernassistent", "Stelle Fachfragen und lass dir technische Zusammenhänge erklären."],
  stats: ["Meine Ergebnisse", "Behalte deinen Lernfortschritt und deine Entwicklung im Blick."],
  favorites: ["Favoriten", "Deine gespeicherten Fragen und Lerninhalte."],
  settings: ["Einstellungen", "Verwalte dein Profil und deine Lernpräferenzen."]
};

const viewIcons = {
  modules: "book-open",
  exam: "clipboard-check",
  cards: "layers",
  assistant: "sparkles",
  stats: "chart-no-axes-combined",
  favorites: "bookmark",
  settings: "settings-2"
};




function setTheme(theme){
  document.documentElement.dataset.theme=theme;
  document.documentElement.style.colorScheme=theme;
  try{localStorage.setItem("azubi-academy-theme",theme);}catch(e){}
}
(function initTheme(){
  let saved="light";try{saved=localStorage.getItem("azubi-academy-theme")||"light";}catch(e){}
  setTheme(saved);
})();
const dashboardMarkup = $("#main-content").innerHTML;
let lastModalTrigger = null;

function switchView(view) {
  const info = viewInfo[view] || viewInfo.dashboard;

  $$(".sidebar .nav-item[data-view]").forEach(item => {
    const active = item.dataset.view === view;
    item.classList.toggle("active", active);
    if (active) item.setAttribute("aria-current", "page");
    else item.removeAttribute("aria-current");
  });

  $("#breadcrumb-current").textContent = info[0];

  if (view === "dashboard") {
    $("#main-content").innerHTML = dashboardMarkup;
    refreshIcons();
    bindActions();
    return;
  }

  const icon = viewIcons[view] || "book-open";
  if (view === "modules") {
    const subjects = [
      ["Elektrotechnische Grundlagen","Strom, Spannung, Leistung & Schaltungen","zap",76,"Grundlagen der Elektrotechnik","subject-orange"],
      ["Installation & Sicherheit","VDE, Schutzmaßnahmen, Leitungen & Messungen","shield-check",52,"Installation und sicheres Arbeiten","subject-blue"],
      ["Steuerungs- & Automatisierungstechnik","Schütze, Relais, SPS, Sensoren & Aktoren","workflow",34,"Steuerungen und Automatisierung","subject-violet"],
      ["Technische Systeme & Praxis","Fehlersuche, Zeichnungen & Inbetriebnahme","factory",20,"Praxisnahe technische Systeme","subject-orange"]
    ];
    const moduleCountBadge = $(".nav-count"); if (moduleCountBadge) moduleCountBadge.textContent = subjects.length;
    $("#main-content").innerHTML = '<section class="page-heading"><div><div class="eyebrow"><span class="eyebrow-line"></span> DEINE AUSBILDUNG</div><h1>Lernmodule</h1><p>Wähle einen Lernbereich deiner technischen Ausbildung.</p></div></section><section class="subject-grid modules-grid">' + subjects.map(s => '<button class="subject-card" data-subject="' + s[0] + '"><span class="subject-top"><span class="subject-icon ' + s[5] + '"><i data-lucide="' + s[2] + '"></i></span><span class="subject-arrow"><i data-lucide="arrow-up-right"></i></span></span><strong>' + s[0] + '</strong><span class="subject-caption">' + s[1] + '</span><span class="subject-progress"><span class="subject-track"><i style="width:' + s[3] + '%"></i></span><b>' + s[3] + ' %</b></span><span class="subject-meta">' + s[4] + '</span></button>').join("") + '</section>';
    refreshIcons(); bindActions(); return;
  }
  if (view === "exam") { renderSimexPartASetup(); return; }
  if (view === "cards") { renderCardSetup(); return; }
  if (view === "settings") {
    const currentTheme = document.documentElement.dataset.theme || "light";
    $("#main-content").innerHTML = '<section class="page-heading"><div><div class="eyebrow"><span class="eyebrow-line"></span> PERSONALISIERUNG</div><h1>Einstellungen</h1><p>Gestalte eSimEX nach deinen Vorlieben.</p></div></section><section class="panel settings-panel"><div class="settings-row"><span class="settings-icon"><i data-lucide="sun"></i></span><div class="settings-copy"><strong>Darstellung</strong><p>Wähle zwischen hellem und dunklem Design.</p></div><div class="theme-picker"><button class="theme-option '+(currentTheme==="light"?"selected":"")+'" data-theme-choice="light"><i data-lucide="sun"></i> White Mode</button><button class="theme-option '+(currentTheme==="dark"?"selected":"")+'" data-theme-choice="dark"><i data-lucide="moon"></i> Dark Mode</button></div></div></section>';
    refreshIcons();
    $$("[data-theme-choice]").forEach(btn=>btn.addEventListener("click",()=>{setTheme(btn.dataset.themeChoice);switchView("settings");}));
    bindActions(); return;
  }

  const title = info[0];
  const description = "Dieser Bereich ist als Vorschau angelegt. Die eigentliche Funktion kann im nächsten Entwicklungsschritt ergänzt werden.";

  $("#main-content").innerHTML =
    '<section class="page-heading">' +
      '<div><div class="eyebrow"><span class="eyebrow-line"></span> eSimEX</div>' +
      '<h1>' + info[0] + '</h1><p>' + info[1] + '</p></div>' +
    '</section>' +
    '<section class="panel placeholder-panel">' +
      '<span class="modal-icon"><i data-lucide="' + icon + '"></i></span>' +
      '<h2>' + title + '</h2>' +
      '<p>' + description + '</p>' +
      '<button class="button button-primary" data-view="dashboard"><i data-lucide="layout-dashboard"></i> Zurück zum Dashboard</button>' +
      '<span class="placeholder-note">LAYOUT-VORSCHAU · FUNKTIONEN FOLGEN</span>' +
    '</section>';

  refreshIcons();
  bindActions();
}

function openExamModal(trigger) {
  const modal = $("#modal");
  lastModalTrigger = trigger || document.activeElement;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  $("#modal-close").focus();
}

function closeExamModal() {
  const modal = $("#modal");
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  if (lastModalTrigger && typeof lastModalTrigger.focus === "function") {
    lastModalTrigger.focus();
  }
}

function bindActions() {
  $$("[data-view]", $("#main-content")).forEach(item => {
    item.addEventListener("click", event => {
      if (item.tagName === "A") event.preventDefault();
      switchView(item.dataset.view);
    });
  });

  $$('[data-action="start-exam"]', $("#main-content")).forEach(item => {
    item.addEventListener("click", () => switchView("exam"));
  });

  $$('[data-action="continue-learning"]', $("#main-content")).forEach(item => {
    item.addEventListener("click", () => showToast("Lernmodul „Schützschaltungen“ ausgewählt."));
  });

  $$('[data-action="start-review"]', $("#main-content")).forEach(item => {
    item.addEventListener("click", () => switchView("cards"));
  });

  $$("[data-subject]", $("#main-content")).forEach(item => {
    item.addEventListener("click", () => showToast("Lernbereich „" + item.dataset.subject + "“ ausgewählt."));
  });
}

$$(".sidebar [data-view]").forEach(item => {
  item.addEventListener("click", event => {
    if (item.tagName === "A") event.preventDefault();
    switchView(item.dataset.view);
  });
});

$(".help-card a").addEventListener("click", event => {
  event.preventDefault();
  showToast("Die Support-Kontaktmöglichkeit wird später eingerichtet.");
});

$("#modal-close").addEventListener("click", closeExamModal);
$("#modal").addEventListener("click", event => {
  if (event.target === $("#modal")) closeExamModal();
});
$("#modal-start").addEventListener("click", () => {
  closeExamModal();
  showToast("Die Prüfungssimulation wird in einem nächsten Schritt ergänzt.");
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeExamModal();
});

const date = new Intl.DateTimeFormat("de-DE", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric"
});
$("#today-date").textContent = date.format(new Date());

bindActions();
refreshIcons();

const flashTopics=[
{id:"basics",name:"Elektrotechnische Grundlagen",desc:"Spannung, Strom, Widerstand und Leistung",cards:[["Was ist elektrische Spannung?","Die Potentialdifferenz zwischen zwei Punkten. Einheit: Volt (V)."],["Was beschreibt die Stromstärke?","Die elektrische Ladungsmenge, die pro Zeit durch einen Leiterquerschnitt fließt. Einheit: Ampere (A)."],["Wie lautet das Ohmsche Gesetz?","U = R · I. Umgestellt: I = U/R und R = U/I."],["Wie berechnet man elektrische Leistung?","P = U · I. Einheit: Watt (W)."],["Wie berechnet man elektrische Arbeit?","W = P · t. Bei kW und Stunden ergibt sich kWh."]]},
{id:"circuits",name:"Reihen- und Parallelschaltung",desc:"Strom, Spannung und Widerstände",cards:[["Wie verhält sich der Strom in einer Reihenschaltung?","Durch alle Bauteile fließt derselbe Strom."],["Wie verhält sich die Spannung in einer Reihenschaltung?","Die Gesamtspannung teilt sich auf die Bauteile auf."],["Wie verhält sich die Spannung in einer Parallelschaltung?","An allen parallelen Zweigen liegt die gleiche Spannung an."],["Wie teilt sich der Strom in einer Parallelschaltung auf?","Der Gesamtstrom teilt sich auf die Zweige auf; die Teilströme addieren sich."],["Wie berechnet man den Gesamtwiderstand in Reihe?","Rges = R1 + R2 + R3 + …"]]},
{id:"acdc",name:"Gleich- und Wechselstrom",desc:"Frequenz, Periodendauer und Effektivwert",cards:[["Was ist Gleichstrom?","Strom, dessen Richtung gleich bleibt."],["Was ist Wechselstrom?","Strom, dessen Richtung und momentaner Wert sich periodisch ändern."],["Was gibt die Frequenz an?","Die Anzahl der Perioden pro Sekunde. Einheit: Hertz (Hz)."],["Wie hängen Frequenz und Periodendauer zusammen?","f = 1/T und T = 1/f."],["Welche Netzfrequenz hat das Stromnetz in Deutschland?","50 Hz."]]},
{id:"measurement",name:"Messen und Prüfgeräte",desc:"Multimeter und Messverfahren",cards:[["Wie wird ein Spannungsmessgerät angeschlossen?","Parallel zum Bauteil, an dem die Spannung gemessen werden soll."],["Wie wird ein Strommessgerät angeschlossen?","In Reihe, damit der gesamte Messstrom durch das Gerät fließt."],["Warum hat ein Voltmeter einen hohen Innenwiderstand?","Damit es den Stromkreis möglichst wenig belastet."],["Was ist vor einer Widerstandsmessung zu beachten?","Die Schaltung muss spannungsfrei sein."],["Was bedeutet HOLD am Digitalmultimeter?","Der aktuell angezeigte Messwert wird festgehalten."]]},
{id:"safety",name:"Schutzmaßnahmen und Sicherheit",desc:"Fünf Sicherheitsregeln, PE, RCD und Schutzklassen",cards:[["Wie lauten die fünf Sicherheitsregeln?","1. Freischalten. 2. Gegen Wiedereinschalten sichern. 3. Spannungsfreiheit feststellen. 4. Erden und kurzschließen. 5. Benachbarte unter Spannung stehende Teile abdecken oder abschranken."],["Welche Kennfarbe hat der Schutzleiter?","Grün-Gelb."],["Wozu dient ein RCD/FI-Schalter?","Er erkennt einen Differenzstrom zwischen Hin- und Rückleiter und schaltet bei Erreichen seines Auslösewerts ab."],["Was bedeutet Schutzklasse II?","Schutz durch doppelte oder verstärkte Isolierung; kein Schutzleiteranschluss erforderlich."]]},
{id:"semiconductors",name:"Halbleiter und Bauelemente",desc:"Diode, LED, Zenerdiode und Transistor",cards:[["Was ist ein Halbleiter?","Ein Werkstoff, dessen Leitfähigkeit zwischen Leitern und Isolatoren liegt und gezielt beeinflusst werden kann."],["Welche Aufgabe hat eine Diode?","Sie lässt Strom in Durchlassrichtung fließen und sperrt in Sperrrichtung weitgehend."],["Wozu dient eine Zenerdiode?","Zur Spannungsbegrenzung oder Spannungsstabilisierung im Sperrdurchbruchbereich."],["Was ist die Aufgabe einer LED?","Sie wandelt elektrische Energie in Licht um. Eine Strombegrenzung ist erforderlich."],["Wofür wird ein Transistor verwendet?","Zum Beispiel als elektronischer Schalter oder zur Signalverstärkung."]]},
{id:"control",name:"Steuerungs- und Schütztechnik",desc:"Schütz, Kontakte, Selbsthaltung und Verriegelung",cards:[["Was ist ein Schütz?","Ein elektromagnetisch betätigter Schalter, häufig zum Schalten von Motoren."],["Was ist ein Schließer?","Ein Kontakt, der unbetätigt offen ist und beim Betätigen schließt."],["Was ist ein Öffner?","Ein Kontakt, der unbetätigt geschlossen ist und beim Betätigen öffnet."],["Wie funktioniert eine Selbsthalteschaltung?","Ein Schließer-Hilfskontakt liegt parallel zum Starttaster und hält die Schützspule nach dem Start eingeschaltet."],["Wozu dient eine elektrische Verriegelung?","Sie verhindert, dass zwei gegensätzlich wirkende Schütze gleichzeitig anziehen."]]},
{id:"math",name:"Technische Mathematik",desc:"Formeln, Einheiten und Berechnungen",cards:[["Wie viel Watt sind ein Kilowatt?","1 kW = 1.000 W."],["Wie berechnet man den Widerstand?","R = U/I."],["Wie berechnet man die Leistung?","P = U · I."],["Was bedeutet der Vorsatz milli?","Ein Tausendstel: 1 m = 0,001 der Grundeinheit."],["Wie berechnet man die Frequenz aus der Periodendauer?","f = 1/T. Bei T = 0,02 s ist f = 50 Hz."]]},
{id:"equipment",name:"Elektrische Betriebsmittel",desc:"Sicherungen, Motoren, Transformatoren und Leitungen",cards:[["Wovor schützt ein Leitungsschutzschalter?","Er schützt Leitungen vor Überlast und Kurzschluss."],["Welche Aufgabe hat eine Schmelzsicherung?","Sie unterbricht den Stromkreis, wenn der Schmelzleiter durch zu hohen Strom schmilzt."],["Was macht ein Transformator?","Er überträgt Energie durch elektromagnetische Induktion und kann Wechselspannungen herauf- oder herabsetzen."],["Was ist ein Kurzschluss?","Eine unbeabsichtigte niederohmige Verbindung zwischen Punkten unterschiedlicher Spannung, die einen sehr hohen Strom verursachen kann."],["Warum muss der Leitungsquerschnitt passend gewählt werden?","Damit Strombelastbarkeit, Spannungsfall, Erwärmung und mechanische Anforderungen eingehalten werden."]]}
];
let chosenFlashTopics=new Set(flashTopics.map(t=>t.id)),flashRun=null;
function renderCardSetup(){
 const totalCards=flashTopics.reduce((sum,t)=>sum+t.cards.length,0);
 const items=flashTopics.map((t,index)=>'<button class="flash-category-card" type="button" data-flash-topic="'+t.id+'"><span class="flash-category-icon"><i data-lucide="'+(["zap","workflow","calculator","activity","shield-check","cpu","settings","book-open","plug"][index]||"layers")+'"></i></span><span class="flash-category-copy"><strong>'+t.name+'</strong><small>'+t.desc+'</small></span><span class="flash-category-meta">'+t.cards.length+' Karten <i data-lucide="arrow-right"></i></span></button>').join("");
 $("#main-content").innerHTML='<section class="page-heading"><div><div class="eyebrow"><span class="eyebrow-line"></span> AP TEIL 1 · ELEKTRONIKER FÜR BETRIEBSTECHNIK</div><h1>Karteikarten</h1><p>Wähle ein Thema aus und starte direkt mit dem Lernen.</p></div></section><section class="flash-library"><div class="flash-library-head"><div><span class="section-kicker">LERNBEREICHE</span><h2>Was möchtest du lernen?</h2><p>Jeder Bereich enthält passende Karteikarten zu den wichtigsten Prüfungsthemen.</p></div><span class="flash-library-total">'+totalCards+' Karteikarten insgesamt</span></div><div class="flash-category-grid">'+items+'</div><button class="flash-all-cards" type="button" id="flash-all"><span class="flash-all-icon"><i data-lucide="layers"></i></span><span><strong>Alle Karteikarten</strong><small>Alle Themen zusammen lernen · '+totalCards+' Karten</small></span><i data-lucide="arrow-right"></i></button></section><div class="flash-howto"><span><i data-lucide="mouse-pointer-click"></i> Thema anklicken, um direkt zu starten</span><span><i data-lucide="refresh-cw"></i> Karte umdrehen und Wissen prüfen</span></div>';
 refreshIcons();
 function startDeck(topics){
  const deck=topics.flatMap(t=>t.cards.map((c,i)=>({topic:t.name,q:c[0],a:c[1],id:t.id+"-"+i})));
  flashRun={deck,index:0,known:[],wrong:[],flipped:false};
  renderFlashCard();
 }
 $$("[data-flash-topic]",$("#main-content")).forEach(btn=>btn.addEventListener("click",()=>startDeck(flashTopics.filter(t=>t.id===btn.dataset.flashTopic))));
 $("#flash-all").addEventListener("click",()=>startDeck(flashTopics));
}
function safeFlashText(value){
 return String(value).replace(/[&<>"']/g,character=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[character]));
}
function renderFlashCard(){
 const s=flashRun;if(!s)return renderCardSetup();if(s.index>=s.deck.length)return renderFlashResult();const card=s.deck[s.index];
 $("#main-content").innerHTML='<section class="page-heading flash-heading"><div><div class="eyebrow"><span class="eyebrow-line"></span> AP TEIL 1 · LERNEINHEIT</div><h1>Deine Karteikarten</h1><p>Decke die Antwort auf und entscheide, ob du die Karte beherrschst.</p></div><button class="button flash-exit" id="flash-exit">Beenden</button></section><section class="flash-session"><div class="flash-session-top"><span>'+card.topic+'</span><strong>'+(s.index+1)+' <small>/ '+s.deck.length+'</small></strong></div><div class="flash-progress"><i style="width:'+(s.index/s.deck.length*100)+'%"></i></div><div class="flash-stage"><span class="flash-side-hint hint-green">← GEWUSST</span><span class="flash-side-hint hint-red">NICHT GEWUSST →</span><article class="flashcard '+(s.flipped?"flipped":"")+'" id="flashcard" tabindex="0" role="button"><div class="flashcard-inner"><div class="flash-face flash-front"><small>FRAGE</small><strong>'+safeFlashText(card.q)+'</strong><span>Antippen, um die Antwort zu sehen</span></div><div class="flash-face flash-back"><small>ANTWORT</small><strong>'+safeFlashText(card.a)+'</strong><span>Antippen zum Umdrehen</span></div></div></article></div><div class="flash-actions"><button class="flash-rate rate-red" id="flash-wrong" '+(!s.flipped?"disabled":"")+'><i data-lucide="x"></i><span><b>Nicht gewusst</b><small>Nach rechts</small></span></button><button class="flash-flip" id="flash-flip">'+(s.flipped?"Frage anzeigen":"Antwort anzeigen")+'</button><button class="flash-rate rate-green" id="flash-known" '+(!s.flipped?"disabled":"")+'><i data-lucide="check"></i><span><b>Gewusst</b><small>Nach links</small></span></button></div><div class="flash-stats"><span>🟢 '+s.known.length+' gewusst</span><span>🔴 '+s.wrong.length+' noch üben</span><span>'+(s.deck.length-s.index-1)+' Karten übrig</span></div></section>';
 refreshIcons();$("#flash-exit").addEventListener("click",()=>switchView("cards"));$("#flash-flip").addEventListener("click",flipFlashCard);
 let startX=null,suppress=false;const el=$("#flashcard");el.addEventListener("click",()=>{if(suppress){suppress=false;return;}flipFlashCard();});el.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();flipFlashCard();}});el.addEventListener("pointerdown",e=>{startX=e.clientX;});el.addEventListener("pointerup",e=>{if(startX===null)return;const dx=e.clientX-startX;startX=null;if(Math.abs(dx)>65){suppress=true;if(!flashRun.flipped)flashRun.flipped=true;markFlashCard(dx<0);}});
 $("#flash-known").addEventListener("click",()=>markFlashCard(true));$("#flash-wrong").addEventListener("click",()=>markFlashCard(false));
}
function flipFlashCard(){if(!flashRun)return;flashRun.flipped=!flashRun.flipped;renderFlashCard();}
function markFlashCard(known){if(!flashRun||!flashRun.flipped)return;const s=flashRun;s[known?"known":"wrong"].push(s.deck[s.index]);s.index++;s.flipped=false;renderFlashCard();}
function renderFlashResult(){
 const s=flashRun,pct=Math.round(s.known.length/s.deck.length*100);
 $("#main-content").innerHTML='<section class="page-heading"><div><div class="eyebrow"><span class="eyebrow-line"></span> LERNEINHEIT ABGESCHLOSSEN</div><h1>Gut gemacht!</h1><p>Du hast alle ausgewählten Karteikarten bearbeitet.</p></div></section><section class="flash-results panel"><div class="flash-result-icon"><i data-lucide="graduation-cap"></i></div><span class="section-kicker">DEIN ERGEBNIS</span><h2>'+pct+' % gewusst</h2><p>'+s.known.length+' von '+s.deck.length+' Karten als gewusst markiert.</p><div class="flash-result-bars"><div><span>Gewusst</span><b>'+s.known.length+'</b><i class="result-green"><em style="width:'+(s.known.length/s.deck.length*100)+'%"></em></i></div><div><span>Noch üben</span><b>'+s.wrong.length+'</b><i class="result-red"><em style="width:'+(s.wrong.length/s.deck.length*100)+'%"></em></i></div></div><div class="flash-result-actions">'+(s.wrong.length?'<button class="button button-primary" id="repeat-wrong">Alle falschen nochmal ('+s.wrong.length+')</button>':'')+'<button class="button '+(s.wrong.length?"button-secondary":"button-primary")+'" id="repeat-all">Alle nochmal</button><button class="button button-quiet" id="change-topics">Zurück zu allen Themen</button></div></section>';
 refreshIcons();if($("#repeat-wrong"))$("#repeat-wrong").addEventListener("click",()=>repeatFlashCards(s.wrong));$("#repeat-all").addEventListener("click",()=>repeatFlashCards(s.deck));$("#change-topics").addEventListener("click",()=>switchView("cards"));
}
function repeatFlashCards(deck){flashRun={deck:deck.slice(),index:0,known:[],wrong:[],flipped:false};renderFlashCard();}


/* SimEx Part A: format-specific demo tasks. Replace this local array with API/database records later. */
let simexPartAActive = null;
const simexPartAPool = [
 {id:"19-2",source:"Frühjahr 2019 · Teil A · Aufgabe 2",part:"A",format:"single_choice",topic:"Arbeitssicherheit",points:1,prompt:"Wer trägt im Unternehmen die Verantwortung für die erforderlichen Maßnahmen des Arbeits- und Gesundheitsschutzes sowie für die Sicherheit der Beschäftigten?",options:["Jeder Arbeitnehmer","Die Fachkraft für Arbeitssicherheit","Das Amt für Arbeitsschutz und technische Sicherheit","Der Sicherheitsbeauftragte","Der Arbeitgeber"],correct:4,explanation:"Die Verantwortung für die erforderlichen Arbeitsschutzmaßnahmen liegt beim Arbeitgeber."},
 {id:"19-4",source:"Frühjahr 2019 · Teil A · Aufgabe 4",part:"A",format:"single_choice",topic:"Schutztechnik",points:1,prompt:"Warum wird in der Zuleitung zu einer Schutzkontaktsteckdose zusätzlich zu einem RCD ein Leitungsschutzschalter benötigt?",options:["Der RCD schaltet bei einem Körperschluss nicht ab.","Der Leitungsschutzschalter schützt die Leitung vor Überlastung.","Der Leitungsschutzschalter schaltet bei jedem Körperschluss schneller ab.","Der RCD schaltet nicht innerhalb der geforderten Zeit ab.","Der RCD schaltet bei einem Kurzschluss zwischen L1 und PE nicht ab."],correct:1,explanation:"Der Leitungsschutzschalter schützt die Leitung vor Überlast und Kurzschluss."},
 {id:"19-5",source:"Frühjahr 2019 · Teil A · Aufgabe 5",part:"A",format:"single_choice",topic:"Motorschutz",points:1,prompt:"Welche Behauptung über Motorschutzschalter ist richtig?",options:["Motorschutzschalter werden nie eigensicher ausgeführt.","Jeder Motorschutzschalter benötigt eine elektronische Auslösung.","Die Freiauslösung sorgt dafür, dass der Schalter bei Überlast auch abschaltet, wenn der Einschaltdruckknopf blockiert wird.","Die Überstromauslöser werden auf den Anlaufstrom des Motors eingestellt.","Motorschutzschalter besitzen grundsätzlich nur unverzögerte elektromagnetische Auslöser."],correct:2,explanation:"Die Freiauslösung stellt sicher, dass der Schalter auch bei blockiertem Einschaltknopf auslöst."},
 {id:"19-7",source:"Frühjahr 2019 · Teil A · Aufgabe 7",part:"A",format:"single_choice",topic:"Motorschutz",points:1,prompt:"Wie wird der Hauptstromkreis eines überlasteten Motors mithilfe eines Motorschutzrelais unterbrochen?",options:["Die Kontakte des Motorschutzrelais unterbrechen direkt den Hauptstromkreis.","Der Überstrom betätigt Hilfskontakte, die das zugehörige Leistungsschütz abschalten.","Durch Schließen der Kontakte wird der Steuerstromkreis kurzgeschlossen.","Ein Bimetall in den Hilfskontakten schaltet den Hauptstromkreis direkt ab.","Ein Schmelzdraht im Motorschutzrelais schmilzt."],correct:1,explanation:"Das Motorschutzrelais betätigt Hilfskontakte im Steuerstromkreis. Dadurch fällt das Leistungsschütz ab."},
 {id:"19-11",source:"Frühjahr 2019 · Teil A · Aufgabe 11",part:"A",format:"single_choice",topic:"Drehstromtechnik",points:1,prompt:"Drei Heizwiderstände mit jeweils 3,5 kW sind im Dreieck an einem Drehstromsystem 400/230 V angeschlossen. Wie hoch ist der Strom in der Zuleitung?",options:["2,65 A","5,05 A","8,75 A","15,16 A","26,25 A"],correct:3,explanation:"Strangstrom = 3.500 W / 400 V = 8,75 A. Außenleiterstrom = √3 · 8,75 A ≈ 15,16 A."},
 {id:"19-13",source:"Frühjahr 2019 · Teil A · Aufgabe 13",part:"A",format:"single_choice",topic:"Elektrotechnik",points:1,prompt:"Eine Kupfer-Sammelschiene hat die Maße 60 mm × 8 mm und einen Bemessungsstrom von 850 A. Wie hoch ist die Stromdichte?",options:["0,001 A/mm²","0,11 A/mm²","0,95 A/mm²","1,77 A/mm²","106,25 A/mm²"],correct:3,explanation:"Querschnitt = 60 · 8 = 480 mm². Stromdichte = 850 / 480 ≈ 1,77 A/mm²."},
 {id:"19-19",source:"Frühjahr 2019 · Teil A · Aufgabe 19",part:"A",format:"single_choice",topic:"Sensorik",points:1,prompt:"Welche Behauptung über Sensoren ist richtig?",options:["Sensoren werden ausschließlich zur Überwachung technischer Prozesse eingesetzt.","Alle menschlichen Sinneswahrnehmungen können direkt durch Sensoren erfasst werden.","Sensoren wandeln physikalische Zustandsgrößen in elektrische Signale um.","Sensoren arbeiten grundsätzlich mit Ultraschall.","Sensoren können nur Bewegungen erfassen."],correct:2,explanation:"Sensoren erfassen physikalische Größen und wandeln diese in auswertbare Signale um."},
 {id:"19-20",source:"Frühjahr 2019 · Teil A · Aufgabe 20",part:"A",format:"single_choice",topic:"Sensorik",points:1,prompt:"Ein Näherungsschalter erkennt einen Metallgegenstand durch die Störung eines elektromagnetischen Wechselfelds. Wie arbeitet er?",options:["Mechanisch","Optisch","Induktiv","Kapazitiv","Permanent magnetisch"],correct:2,explanation:"Ein induktiver Näherungsschalter erkennt Metall durch die Beeinflussung seines elektromagnetischen Wechselfelds."},
 {id:"20-8",source:"Frühjahr 2020 · Teil A · Aufgabe 8",part:"A",format:"single_choice",topic:"Elektrotechnik",points:1,prompt:"Eine Kupfer-Sammelschiene hat die Maße 40 mm × 6 mm und einen Bemessungsstrom von 520 A. Wie hoch ist die Stromdichte?",options:["0,46 A/mm²","2,17 A/mm²","13,00 A/mm²","21,69 A/mm²","86,67 A/mm²"],correct:1,explanation:"Querschnitt = 40 · 6 = 240 mm². Stromdichte = 520 / 240 ≈ 2,17 A/mm²."},
 {id:"20-9",source:"Frühjahr 2020 · Teil A · Aufgabe 9",part:"A",format:"single_choice",topic:"Drehstromtechnik",points:1,prompt:"Drei Heizwiderstände mit jeweils 7 kW sind im Stern an einem Drehstromsystem 400/230 V angeschlossen. Wie hoch ist der Strom in der Zuleitung?",options:["5 A","10 A","17 A","30 A","52 A"],correct:3,explanation:"Strangstrom = 7.000 W / 230 V ≈ 30,4 A. Im Stern entspricht er dem Außenleiterstrom."},
 {id:"20-12",source:"Frühjahr 2020 · Teil A · Aufgabe 12",part:"A",format:"single_choice",topic:"Schütztechnik",points:1,prompt:"Für welche Anwendung ist ein Schütz der Gebrauchskategorie AC-1 vorgesehen?",options:["Schalten von Motorlast","Schalten von Transformatoren","Schalten von Widerstandsöfen","Schalten von Kondensatorbatterien","Schalten von Induktionsöfen"],correct:2,explanation:"AC-1 ist für nicht oder nur schwach induktive Lasten vorgesehen, zum Beispiel Widerstandsöfen."},
 {id:"20-13",source:"Frühjahr 2020 · Teil A · Aufgabe 13",part:"A",format:"single_choice",topic:"Elektrotechnik",points:1,prompt:"Welche Aussage zur Frequenzabhängigkeit von Bauteilen im Wechselstromkreis ist richtig?",options:["Der Wirkwiderstand nimmt mit steigender Frequenz zu.","Der Wirkwiderstand nimmt mit steigender Frequenz ab.","Der induktive Blindwiderstand einer Drosselspule nimmt mit steigender Frequenz ab.","Der kapazitive Blindwiderstand eines Kondensators nimmt mit steigender Frequenz zu.","Der kapazitive Blindwiderstand eines Kondensators nimmt mit steigender Frequenz ab."],correct:4,explanation:"X_C = 1/(2π f C). Bei konstanter Kapazität sinkt der kapazitive Blindwiderstand mit steigender Frequenz."},
 {id:"20-15",source:"Frühjahr 2020 · Teil A · Aufgabe 15",part:"A",format:"single_choice",topic:"Sensorik",points:1,prompt:"Welche Aussage zu einem Pt100-Sensor trifft zu?",options:["Der Pt100-Sensor hat bei 0 °C einen Widerstandswert von 100 Ω.","Der Pt100-Sensor hat bei 0 K einen Widerstandswert von 100 Ω.","Der Pt100-Sensor hat bei 100 °C einen Widerstandswert von 100 Ω.","Der Pt100-Sensor hat bei 20 K einen Widerstandswert von 100 Ω.","Der Pt100-Sensor hat unabhängig von der Temperatur immer 100 Ω."],correct:0,explanation:"Ein Pt100 hat einen Nennwiderstand von 100 Ω bei 0 °C."},
 {id:"20-16",source:"Frühjahr 2020 · Teil A · Aufgabe 16",part:"A",format:"single_choice",topic:"Elektrotechnik",points:1,prompt:"Bei einer Reihenklemme wird eine unzulässige Erwärmung festgestellt. Welche Aussage ist richtig?",options:["Der Übergangswiderstand ist wegen eines lockeren Drahts sehr niederohmig.","Der Klemmenübergangswiderstand ist hochohmig; der Spannungsfall an der Klemmstelle ist unzulässig hoch.","Die Stromstärke hat sich wegen des hochohmigen Übergangswiderstands deutlich erhöht.","Am Verbraucher kommt es zu einer Spannungserhöhung.","Die Schraubverbindung hat einen zu hohen Kontaktdruck."],correct:1,explanation:"Ein schlechter Kontakt kann einen erhöhten Übergangswiderstand verursachen. Dadurch entstehen Spannungsfall und Wärme."},
 {id:"20-21",source:"Frühjahr 2020 · Teil A · Aufgabe 21",part:"A",format:"single_choice",topic:"IT-Grundlagen",points:1,prompt:"Was bewirkt der Write-Protect-Schalter eines USB-Sticks in der ON-Stellung laut Bedienungsanleitung?",options:["Die Schalterstellung hat keine Auswirkung.","Der Schalter darf nur bei getrenntem USB-Stick umgeschaltet werden.","Daten auf dem USB-Stick können gelesen werden.","Daten können nur bei OFF gelesen werden.","In ON-Stellung können Daten gelesen und geschrieben werden."],correct:2,explanation:"In ON-Stellung können laut Anleitung keine Daten geschrieben werden; vorhandene Daten lassen sich weiterhin lesen."},
 {id:"20-23",source:"Frühjahr 2020 · Teil A · Aufgabe 23",part:"A",format:"single_choice",topic:"IT-Grundlagen",points:1,prompt:"Was versteht man unter dem Begriff Intranet?",options:["Ein Netzwerk innerhalb eines Unternehmens","Ein öffentliches weltweites Netzwerk","Ein spezielles Betriebssystem","Ein Netzwerk konkurrierender Unternehmen","Den internen Adressbus eines Rechners"],correct:0,explanation:"Ein Intranet ist ein internes Netzwerk innerhalb eines Unternehmens oder einer Organisation."},
 {id:"21-1",source:"Frühjahr 2021 · Teil A · Aufgabe 1",part:"A",format:"single_choice",topic:"Arbeitssicherheit",points:1,prompt:"Was muss man tun, wenn man Gefahr bringende Mängel an elektrischen Geräten erkennt?",options:["Bei der Weiterbenutzung äußerste Sorgfalt walten lassen","Die Fachkraft für Arbeitssicherheit umgehend verständigen","Sich beim Betriebsrat schriftlich beschweren","Die Geräte unverzüglich stilllegen und dies dem Vorgesetzten melden","Die Mängel selbst beheben"],correct:3,explanation:"Gefahr bringende Mängel erfordern, dass das Gerät unverzüglich stillgelegt und der Vorgesetzte informiert wird."},
 {id:"21-3",source:"Frühjahr 2021 · Teil A · Aufgabe 3",part:"A",format:"single_choice",topic:"Schutztechnik",points:1,prompt:"Welcher Schutz von Geräten und Anlagen wird mit dem Kennzeichen IP festgelegt?",options:["Schutz gegen zu hohe Berührungsspannung","Schutz gegen erhöhte Temperatur","Schutz gegen Eindringen elektromagnetischer Felder","Schutz vor unzulässigen Erschütterungen","Schutz gegen Eindringen von Fremdkörpern und Wasser"],correct:4,explanation:"Die IP-Schutzart kennzeichnet den Schutz gegen Berührung und das Eindringen von Fremdkörpern sowie Wasser."},
 {id:"21-4",source:"Frühjahr 2021 · Teil A · Aufgabe 4",part:"A",format:"single_choice",topic:"Motorschutz",points:1,prompt:"Welche Behauptung über Motorschutzschalter ist richtig?",options:["Motorschutzschalter trennen immer den Steuerstromkreis.","Jeder Motorschutzschalter benötigt eine elektronische Auslösung.","Die Freiauslösung sorgt dafür, dass der Schalter bei Überlast auch bei blockiertem Einschaltdruckknopf abschaltet.","Die Überstromauslöser werden auf den Anlaufstrom eingestellt.","Motorschutzschalter werden nur mit unverzögerten elektromagnetischen Auslösern ausgerüstet."],correct:2,explanation:"Die Freiauslösung ermöglicht das Auslösen auch dann, wenn der Einschaltdruckknopf blockiert ist."},
 {id:"21-11",source:"Frühjahr 2021 · Teil A · Aufgabe 11",part:"A",format:"single_choice",topic:"Installationstechnik",points:1,prompt:"Welche Vorteile haben halogenfreie Rohre gegenüber konventionellen Kunststoff-Isolierrohren im Brandfall?",options:["Hohe Temperaturbeständigkeit und größere Rauchgasdichte","Flammwidrigkeit und verringerte Bildung giftiger Gase","Größere Rauchgasdichte und vollständige Verhinderung giftiger Gase","Flammwidrigkeit und stark vergrößerte Bildung korrosiver Gase","Im Brandfall thermisch unzerstörbar und verformbar"],correct:1,explanation:"Halogenfreie Rohre sind flammwidrig; außerdem wird die Bildung giftiger Gase verringert."},
 {id:"21-12",source:"Frühjahr 2021 · Teil A · Aufgabe 12",part:"A",format:"single_choice",topic:"Leitungstechnik",points:1,prompt:"Welche Leitung ist zum Anschluss bei mittlerer mechanischer Beanspruchung für Hausgeräte auch in feuchten Räumen geeignet?",options:["Mantelleitung NYM","Aderleitung H07V-U","Schlauchleitung H07RN-F","Stegleitung NYIF","Verdrahtungsleitung H05V-K"],correct:2,explanation:"Die flexible Gummischlauchleitung H07RN-F ist für mittlere mechanische Beanspruchung und feuchte Räume geeignet."},
 {id:"21-14",source:"Frühjahr 2021 · Teil A · Aufgabe 14",part:"A",format:"single_choice",topic:"Sensorik",points:1,prompt:"Ein Temperatursensor wird mit einem Pt1000 realisiert. Was bedeutet die Angabe Pt1000?",options:["Die maximale Leistungsaufnahme beträgt 1.000 mW.","Der Widerstandswert beträgt 1.000 Ω und ist konstant.","Der Widerstandswert beträgt bei 20 °C 1.000 Ω.","Der Temperaturbeiwert beträgt 1.000 Ω/K.","Der Widerstandswert beträgt 1.000 Ω bei 0 °C."],correct:4,explanation:"Pt1000 bezeichnet einen Platinfühler mit einem Nennwiderstand von 1.000 Ω bei 0 °C."},
 {id:"21-16",source:"Frühjahr 2021 · Teil A · Aufgabe 16",part:"A",format:"single_choice",topic:"Elektrotechnik",points:1,prompt:"Eine Kupfer-Sammelschiene hat die Maße 40 mm × 6 mm und einen Bemessungsstrom von 520 A. Wie hoch ist die Stromdichte?",options:["2,17 A/mm²","4,24 A/mm²","13,00 A/mm²","21,69 A/mm²","86,67 A/mm²"],correct:0,explanation:"Querschnitt = 40 · 6 = 240 mm². Stromdichte = 520 / 240 ≈ 2,17 A/mm²."},
 {id:"21-19",source:"Frühjahr 2021 · Teil A · Aufgabe 19",part:"A",format:"single_choice",topic:"Elektrotechnik",points:1,prompt:"Zu einem Wirkwiderstand wird bei konstanter Spannung ein zweiter Wirkwiderstand parallel geschaltet. Welche Aussage ist richtig?",options:["Der Gesamtstrom nimmt ab.","Die Gesamtleistung wird kleiner.","Der Gesamtwiderstand wird größer.","Die Leistungsaufnahme des ersten Widerstands ändert sich nicht.","Die Leistungsaufnahme des ersten Widerstands nimmt ab."],correct:3,explanation:"Bei konstanter Spannung bleibt die Spannung am ersten Parallelwiderstand gleich. Deshalb bleibt auch seine Leistung unverändert."},
 {id:"21-20",source:"Frühjahr 2021 · Teil A · Aufgabe 20",part:"A",format:"single_choice",topic:"Englische Fachbegriffe",points:1,prompt:"Welche englische Bezeichnung ergänzt den Satz sinnvoll? “The property that opposes the flow of a current is called …”",options:["conductor","resistance","drag","electricity","electron"],correct:1,explanation:"Resistance bedeutet elektrischer Widerstand und bezeichnet die Eigenschaft, die dem Stromfluss entgegenwirkt."},
 {id:"21-21",source:"Frühjahr 2021 · Teil A · Aufgabe 21",part:"A",format:"single_choice",topic:"IT-Sicherheit",points:1,prompt:"Wie heißt die Bedrohung der Datensicherheit, bei der unter Vortäuschung einer falschen Identität Daten entwendet werden?",options:["Viren","Phishing","Trojaner","Farming","Würmer"],correct:1,explanation:"Beim Phishing wird eine falsche Identität vorgetäuscht, um vertrauliche Daten zu stehlen."}
 ,
 {id:"20-2",source:"Frühjahr 2020 · Teil A · Aufgabe 2",part:"A",format:"single_choice",topic:"Arbeitssicherheit",points:1,prompt:"Welche Aussage zu den Pflichten im Arbeitsschutz ist richtig?",options:["Arbeitsschutz wird ausschließlich vom Arbeitgeber überwacht.","Spannungsprüfgeräte müssen alle sechs Monate geprüft werden.","Arbeitnehmer müssen ihre persönliche Schutzausrüstung selbst beschaffen.","Der Arbeitgeber stellt geeignete, ausreichende und einwandfreie Arbeitsmittel bereit.","Bei Einigkeit kann auf erforderliche Schutzmaßnahmen verzichtet werden."],correct:3,explanation:"Der Arbeitgeber muss geeignete, ausreichende und sichere Arbeitsmittel bereitstellen."},
 {id:"20-5",source:"Frühjahr 2020 · Teil A · Aufgabe 5",part:"A",format:"single_choice",topic:"Arbeitssicherheit",points:1,prompt:"Welche persönliche Schutzausrüstung ist zum Herausnehmen unter Spannung stehender NH-Sicherungen erforderlich?",options:["Schutzhelm und Gesichtsschutz","Schutzbrille und Schutzbekleidung","Schutzbrille und isolierte Kombizange","NH-Sicherungsaufsteckgriff mit Unterarmschutz und Gesichtsschutz","NH-Sicherungsaufsteckgriff und Gummihandschuhe"],correct:3,explanation:"Für das Herausnehmen unter Spannung stehender NH-Sicherungen ist der passende NH-Sicherungsaufsteckgriff mit Unterarmschutz und Gesichtsschutz vorgesehen."},
 {id:"21-2",source:"Frühjahr 2021 · Teil A · Aufgabe 2",part:"A",format:"single_choice",topic:"Arbeitssicherheit",points:1,prompt:"Welche Reihenfolge ist beim Erden und Kurzschließen richtig?",options:["Zuerst kurzschließen, dann erden.","Erden und freischalten; danach Außenleiter erden.","Zuerst erden, danach die Spannungsfreiheit allpolig nachweisen.","Zuerst erden, danach kurzschließen.","Erden, kurzschließen und erst danach die Spannungsfreiheit allpolig feststellen."],correct:3,explanation:"Beim Erden und Kurzschließen wird zuerst die Erdverbindung hergestellt und danach kurzgeschlossen."},
 {id:"19-12",source:"Frühjahr 2019 · Teil A · Aufgabe 12",part:"A",format:"single_choice",topic:"Erneuerbare Energien",points:1,prompt:"Eine Photovoltaikanlage liefert 7.118 W. Die Sonneneinstrahlung beträgt 150 W/m² und die Fläche 574 m². Wie hoch ist der Wirkungsgrad?",options:["12,40 %","8,27 %","6,28 %","4,25 %","2,15 %"],correct:1,explanation:"Eingestrahlte Leistung = 150 W/m² · 574 m² = 86.100 W. Wirkungsgrad = 7.118 W / 86.100 W · 100 % ≈ 8,27 %."},
 {id:"19-17",source:"Frühjahr 2019 · Teil A · Aufgabe 17",part:"A",format:"single_choice",topic:"Elektronik",points:1,prompt:"Welche Spannungsform zeigt der Glättungskondensator eines linearen Netzteils unter Last bei einer Gleichspannungsmessung?",options:["Sinusförmige Wechselspannung","Vollwellengleichgerichtete pulsierende Spannung","Gleichspannung ohne Welligkeit","Gleichspannung mit Restwelligkeit","Wechselspannung mit anderer Wellenform"],correct:3,explanation:"Der Glättungskondensator reduziert die Spannungsschwankungen, beseitigt sie unter Last aber nicht vollständig. Es bleibt eine Gleichspannung mit Restwelligkeit."},
 {id:"21-7",source:"Frühjahr 2021 · Teil A · Aufgabe 7",part:"A",format:"single_choice",topic:"Schütztechnik",points:1,prompt:"Welche Aussage zur Varistor-Zusatzbeschaltung einer Schützspule ist richtig?",options:["Der Varistor schützt die Spule vor unzulässig hoher Betriebsspannung.","Bei Überspannung unterbricht der Varistor den Stromkreis.","Eine LED leuchtet bei zu hoher Spannung.","Die Zusatzbeschaltung wandelt 24 V AC in 12 V DC um.","Bei Überschreiten seiner Ansprechspannung wird der Varistor niederohmig."],correct:4,explanation:"Ein Varistor wird bei Überschreiten seiner Ansprechspannung niederohmig und begrenzt dadurch Spannungsspitzen."},
 {id:"20-3",source:"Frühjahr 2020 · Teil A · Aufgabe 3",part:"A",format:"single_choice",topic:"Arbeitsplanung",points:1,prompt:"Warum wird vor einzelnen Fertigungsschritten eine Arbeitsplanung durchgeführt?",options:["Ausschließlich zur Vorbereitung auf die Facharbeiterprüfung.","Sie verhindert Fehler durch fehlerhaftes Werkzeug.","Zur langfristigen Maschinenbelegungsplanung.","Sie dokumentiert Bearbeitungsschritte ausschließlich für die Qualitätssicherung.","Damit Maschinen und Werkzeuge rechtzeitig bereitstehen und die Arbeitsschritte sinnvoll geordnet sind."],correct:4,explanation:"Die Arbeitsplanung sorgt für eine sinnvolle Reihenfolge und dafür, dass benötigte Maschinen und Werkzeuge rechtzeitig bereitstehen."}

];;

function simexPartAEscape(value) {
  return String(value ?? "").replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
}
function simexPartAShuffle(items) {
  const result = items.slice();
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
function simexPartAFormatName(format) {
  return ({
    single_choice:"Auswahlaufgabe", calculation:"Berechnungsaufgabe", datasheet:"Datenblatt-Aufgabe",
    graph:"Diagrammaufgabe", circuit:"Schaltplanaufgabe", table:"Tabellenaufgabe", diagram:"Anwendungsaufgabe"
  })[format] || "Aufgabe";
}

function renderSimexPartASetup() {
  $("#main-content").innerHTML =
    '<section class="page-heading"><div><div class="eyebrow"><span class="eyebrow-line"></span> PRÜFUNGSMODUS · TEIL A</div><h1>Prüfungssimulation</h1><p>Gemeinsamer, bildfreier Aufgabenpool aus den Teil-A-Prüfungen 2019, 2020 und 2021.</p></div><span class="simex-part-a-pill">TEIL A</span></section>' +
    '<section class="simex-a-intro panel"><div><span class="section-kicker">GEMEINSAMER AUFGABENPOOL</span><h2>Alle passenden Fragen an einem Ort.</h2><p>Beantworte die Aufgaben und drücke auf „Korrigieren“. Du siehst direkt, ob deine Antwort richtig war, welche Lösung stimmt und warum.</p></div><div class="simex-a-count"><strong>' + simexPartAPool.length + '</strong><span>Fragen</span></div></section>' +
    '<section class="simex-a-config panel"><div><span class="section-kicker">SIMULATION STARTEN</span><h2>Wähle den Umfang</h2><p>Originalaufgaben aus Teil A der Frühjahrstermine 2019, 2020 und 2021. Bildabhängige Aufgaben wurden ausgelassen.</p>' +
    '<div class="simex-a-options"><label class="simex-a-option"><input type="radio" name="simex-a-count" value="10" checked><span><strong>Kurzsimulation</strong><small>10 zufällige Fragen</small></span></label><label class="simex-a-option"><input type="radio" name="simex-a-count" value="15"><span><strong>Erweiterte Simulation</strong><small>15 zufällige Fragen</small></span></label><label class="simex-a-option"><input type="radio" name="simex-a-count" value="all"><span><strong>Gesamter Fragenpool</strong><small>Alle ' + simexPartAPool.length + ' Fragen</small></span></label></div>' +
    '<div class="simex-a-start"><button class="button button-primary" id="simex-a-start"><i data-lucide="play"></i> Simulation starten</button></div></section>';
  refreshIcons();
  $("#simex-a-start").addEventListener("click", () => {
    const selected = $('input[name="simex-a-count"]:checked', $("#main-content"));
    const amount = selected && selected.value === "all" ? simexPartAPool.length : Number(selected ? selected.value : 10);
    simexPartAActive = {tasks:simexPartAShuffle(simexPartAPool).slice(0, amount),answers:{},index:0,correctedTasks:{}};
    renderSimexPartASession();
  });
}
function renderSimexStimulus(task) {
  const stimulus = task.stimulus;
  if (!stimulus) return "";
  if (stimulus.kind === "datasheet" || stimulus.kind === "measurement") {
    return '<div class="simex-a-stimulus"><div class="simex-a-stimulus-label">' + (stimulus.kind === "datasheet" ? "TECHNISCHES DATENBLATT · DEMO" : "MESSPROTOKOLL · DEMO") + '</div><div class="simex-a-table-wrap"><table><tbody>' +
      stimulus.rows.map(row => '<tr>' + row.map(cell => '<td>' + simexPartAEscape(cell) + '</td>').join("") + '</tr>').join("") +
      '</tbody></table></div></div>';
  }
  if (stimulus.kind === "sine") {
    return '<div class="simex-a-stimulus"><div class="simex-a-stimulus-label">SIGNALVERLAUF · SCHEMATISCH</div><svg class="simex-a-svg" viewBox="0 0 620 190" role="img" aria-label="Sinusförmiger Spannungsverlauf über der Zeit"><defs><pattern id="simex-sine-grid" width="31" height="22" patternUnits="userSpaceOnUse"><path d="M31 0H0V22" fill="none" stroke="currentColor" stroke-opacity=".13"/></pattern></defs><rect x="40" y="15" width="550" height="145" fill="url(#simex-sine-grid)"/><path d="M40 88H590M40 15V160" stroke="currentColor" stroke-opacity=".55" fill="none"/><path d="M40 88 C80 10 120 10 160 88 S240 166 280 88 S360 10 400 88 S480 166 520 88 S560 10 590 58" fill="none" stroke="#d8ad00" stroke-width="3"/><text x="14" y="22" fill="currentColor" font-size="11">U</text><text x="590" y="180" fill="currentColor" font-size="11">t</text><text x="145" y="180" fill="currentColor" font-size="11">T</text><path d="M40 166V171M160 166V171M40 169H160" stroke="currentColor" stroke-width="1.2"/><text x="170" y="174" fill="currentColor" font-size="11">' + stimulus.period + '</text></svg></div>';
  }
  if (stimulus.kind === "circuit") {
    return '<div class="simex-a-stimulus"><div class="simex-a-stimulus-label">VEREINFACHTER STEUERSTROMKREIS · DEMO</div><svg class="simex-a-svg" viewBox="0 0 620 210" role="img" aria-label="Vereinfachter Schützsteuerkreis mit Starttaster, Stopptaster und Selbsthaltekontakt"><path d="M45 35V176H575V35M45 75H125M190 75H300M360 75H490M535 75H575" stroke="currentColor" stroke-width="2.2" fill="none"/><path d="M125 62L151 88M164 62L190 88" stroke="currentColor" stroke-width="2.4"/><path d="M300 62L326 88M339 62L365 88" stroke="currentColor" stroke-width="2.4"/><path d="M300 75V130H490V75" stroke="#d8ad00" stroke-width="2" stroke-dasharray="5 4" fill="none"/><path d="M490 62V88M505 62V88" stroke="currentColor" stroke-width="2.4"/><circle cx="515" cy="75" r="18" fill="none" stroke="currentColor" stroke-width="2"/><text x="515" y="79" fill="currentColor" font-size="10" text-anchor="middle">K1</text><text x="156" y="48" fill="currentColor" font-size="11" text-anchor="middle">S0 Stop</text><text x="332" y="48" fill="currentColor" font-size="11" text-anchor="middle">S1 Start</text><text x="397" y="147" fill="#d8ad00" font-size="11" text-anchor="middle">K1.1</text><text x="515" y="112" fill="currentColor" font-size="11" text-anchor="middle">Spule</text><text x="45" y="24" fill="currentColor" font-size="11">L+</text><text x="575" y="195" fill="currentColor" font-size="11" text-anchor="end">N</text></svg></div>';
  }
  if (stimulus.kind === "sensor") {
    return '<div class="simex-a-stimulus"><div class="simex-a-stimulus-label">SENSORPRINZIP · SCHEMATISCH</div><svg class="simex-a-svg" viewBox="0 0 620 160" role="img" aria-label="Näherungsschalter erkennt ein Metallobjekt berührungslos"><rect x="90" y="48" width="130" height="64" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><path d="M111 62H199M111 75H199M111 88H199" stroke="#d8ad00" stroke-width="2"/><rect x="425" y="57" width="70" height="46" rx="5" fill="#d8ad00" fill-opacity=".16" stroke="#d8ad00" stroke-width="2"/><path d="M230 80H410" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/><path d="M370 70L410 80L370 90" stroke="#d8ad00" stroke-width="2" fill="none"/><text x="155" y="132" fill="currentColor" text-anchor="middle" font-size="12">Sensor</text><text x="460" y="132" fill="currentColor" text-anchor="middle" font-size="12">Metallobjekt</text></svg></div>';
  }
  return "";
}

function renderSimexPartAFeedback(task) {
  // Die Korrektur wird ausschließlich durch die Umrandung der gewählten Antwort gezeigt.
  return "";
}

function renderSimexPartAQuestion(task, index) {
  const total = simexPartAActive.tasks.length;
  const answered = Object.keys(simexPartAActive.answers).length;
  const progress = Math.round((answered / total) * 100);
  const isCorrected = !!simexPartAActive.correctedTasks[task.id];
  const options = task.options.map((option, optionIndex) => {
    const selected = simexPartAActive.answers[task.id] === optionIndex;
    const isRightAnswer = isCorrected && optionIndex === task.correct;
    const isSelectedRight = isRightAnswer && selected;
    const isSelectedWrong = isCorrected && selected && optionIndex !== task.correct;
    const isUnselectedSolution = isRightAnswer && !selected;
    const stateClass = isSelectedRight
      ? " is-correct is-selected-correct"
      : (isSelectedWrong
        ? " is-wrong is-selected-wrong"
        : (isUnselectedSolution ? " is-solution" : ""));
    const status = isSelectedRight
      ? '<span class="simex-a-answer-status is-correct"><span>✓</span> Richtig</span>'
      : (isSelectedWrong
        ? '<span class="simex-a-answer-status is-wrong"><span>×</span> Deine Antwort</span>'
        : (isUnselectedSolution
          ? '<span class="simex-a-answer-status is-solution"><span>✓</span> Richtige Lösung</span>'
          : ""));
    return '<label class="simex-a-answer' + stateClass + '"><input type="radio" name="simex-answer-' + simexPartAEscape(task.id) + '" value="' + optionIndex + '" ' +
      (selected ? "checked" : "") + (isCorrected ? " disabled" : "") + '><span class="simex-a-answer-letter">' + String.fromCharCode(65 + optionIndex) + '</span><span class="simex-a-answer-text">' + simexPartAEscape(option) + '</span>' + status + '</label>';
  }).join("");
  const scratch = task.givens ? '<div class="simex-a-givens"><div><span class="simex-a-stimulus-label">GEGEBEN</span>' +
    task.givens.map(pair => '<span><small>' + simexPartAEscape(pair[0]) + '</small><strong>' + simexPartAEscape(pair[1]) + '</strong></span>').join("") +
    '</div><label>Notizen / Rechenweg<textarea rows="3" placeholder="Hier kannst du deinen Rechenweg notieren …"></textarea></label></div>' : "";
  const nav = simexPartAActive.tasks.map((t, i) =>
    '<button class="simex-a-nav-dot ' + (i === simexPartAActive.index ? "current" : "") +
    (simexPartAActive.answers[t.id] !== undefined ? " answered" : "") +
    '" data-simex-a-nav="' + i + '" aria-label="Aufgabe ' + (i+1) + '">' + (i+1) + '</button>'
  ).join("");
  const progressBar =
    '<div class="simex-a-header-progress" role="progressbar" aria-label="Prüfungsfortschritt" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + progress + '">' +
      '<span style="width:' + progress + '%"></span>' +
    '</div>';
  return '<article class="simex-a-question"><header>' +
    '<div class="simex-a-question-ident"><strong class="simex-a-question-number">AUFGABE ' + String(index + 1).padStart(2,"0") + '</strong><span class="simex-a-topic">' + simexPartAEscape(task.topic) + '</span><small class="simex-a-source">' + simexPartAEscape(task.source) + '</small></div>' +
    '<nav class="simex-a-header-nav" aria-label="Aufgabenauswahl">' + nav + '</nav>' +
    progressBar +
    '<span class="simex-a-points">' + task.points + ' Pkt.</span>' +
    '</header>' +
    '<div class="simex-a-question-body"><div class="simex-a-format-label">' + simexPartAFormatName(task.format) + '</div><h2>' + simexPartAEscape(task.prompt) + '</h2>' +
    renderSimexStimulus(task) + scratch + '<div class="simex-a-answer-head"><strong>Antwort auswählen</strong><small>Genau eine Antwort ist richtig.</small></div><div class="simex-a-answer-list">' + options + '</div></div></article>';
}

function renderSimexPartASession() {
  if (!simexPartAActive) return renderSimexPartASetup();
  const task = simexPartAActive.tasks[simexPartAActive.index];
  const total = simexPartAActive.tasks.length;
  const isCorrected = !!simexPartAActive.correctedTasks[task.id];
  $("#main-content").innerHTML =
    '<section class="page-heading simex-a-session-heading"><div><div class="eyebrow"><span class="eyebrow-line"></span> PRÜFUNGSSIMULATION · TEIL A</div><h1>Gebundene Aufgaben</h1><p>AP1-Fragenpool · ' + total + ' zufällig ausgewählte Aufgaben</p></div><button class="button simex-a-exit" id="simex-a-exit"><i data-lucide="x"></i> Beenden</button></section>' +
    renderSimexPartAQuestion(task, simexPartAActive.index) +
    '<div class="simex-a-controls"><button class="button simex-a-exit" id="simex-a-prev" ' + (simexPartAActive.index === 0 ? "disabled" : "") + '><i data-lucide="chevron-left"></i> Zurück</button>' +
    '<button class="button button-secondary" id="simex-a-correct" ' + (simexPartAActive.answers[task.id] === undefined || isCorrected ? "disabled" : "") + '>' + (isCorrected ? "Gelöst" : "Lösen") + '</button><button class="button button-primary" id="simex-a-next" ' + (!isCorrected ? "disabled" : "") + '>' + (simexPartAActive.index === total - 1 ? "Auswertung anzeigen" : "Nächste Aufgabe") + ' <i data-lucide="chevron-right"></i></button></div>';
  refreshIcons();
  $$('input[name="simex-answer-' + task.id + '"]', $("#main-content")).forEach(input =>
    input.addEventListener("change", () => {
      if (simexPartAActive.correctedTasks[task.id]) return;
      simexPartAActive.answers[task.id] = Number(input.value);
      renderSimexPartASession();
    })
  );
  $("#simex-a-correct").addEventListener("click", () => { if (simexPartAActive.answers[task.id] === undefined || simexPartAActive.correctedTasks[task.id]) return; simexPartAActive.correctedTasks[task.id] = true; renderSimexPartASession(); });
  $$("[data-simex-a-nav]", $("#main-content")).forEach(button => button.addEventListener("click", () => {
    simexPartAActive.index = Number(button.dataset.simexANav);
    renderSimexPartASession();
  }));
  $("#simex-a-prev").addEventListener("click", () => {
    simexPartAActive.index = Math.max(0, simexPartAActive.index - 1);
    renderSimexPartASession();
  });
  $("#simex-a-next").addEventListener("click", () => {
    if (simexPartAActive.index < total - 1) {
      simexPartAActive.index++;
        renderSimexPartASession();
    } else renderSimexPartAResult();
  });
  $("#simex-a-exit").addEventListener("click", renderSimexPartASetup);
}

function renderSimexPartAResult() {
  const tasks = simexPartAActive.tasks;
  const answers = simexPartAActive.answers;
  const correct = tasks.filter(task => answers[task.id] === task.correct).length;
  const percent = Math.round(correct / tasks.length * 100);
  const rows = tasks.map((task, index) => {
    const ok = answers[task.id] === task.correct;
    const result = answers[task.id] === undefined ? "Nicht beantwortet" : (ok ? "Richtig" : "Falsch");
    const content = '<span class="simex-a-result-status ' + (ok ? "is-correct" : "is-wrong") + '">' + (ok ? "✓" : "×") + '</span><span><strong>Aufgabe ' + (index + 1) + '</strong><small>' + simexPartAEscape(task.topic) + '</small></span><b>' + result + '</b>';
    return ok
      ? '<div>' + content + '</div>'
      : '<button type="button" class="simex-a-result-row" data-simex-review="' + index + '" aria-label="Falsche Aufgabe ' + (index + 1) + ' erneut ansehen">' + content + '<span class="simex-a-review-hint">Frage ansehen →</span></button>';
  }).join("");
  const wrongCount = tasks.length - correct;
  $("#main-content").innerHTML =
    '<section class="page-heading"><div><div class="eyebrow"><span class="eyebrow-line"></span> TEIL A · SIMULATION ABGESCHLOSSEN</div><h1>Dein Ergebnis</h1><p>Die Prüfung ist abgeschlossen.</p></div></section>' +
    '<section class="simex-a-result panel"><div class="simex-a-result-score">' + percent + '<small>%</small></div><h2>' + correct + ' von ' + tasks.length + ' richtig</h2>' +
    (wrongCount ? '<p class="simex-a-review-intro">Klicke auf eine falsche Aufgabe, um die Frage und die richtige Lösung noch einmal anzusehen.</p>' : '<p class="simex-a-review-intro">Sehr gut! Du hast alle Aufgaben richtig beantwortet.</p>') +
    '<div class="simex-a-result-list">' + rows + '</div>' +
    '<button class="button button-primary" id="simex-a-again"><i data-lucide="shuffle"></i> Neue Zufallsauswahl</button></section>';
  refreshIcons();
  $("[data-simex-review]", $("#main-content")).forEach(button => button.addEventListener("click", () => {
    renderSimexPartAReview(Number(button.dataset.simexReview));
  }));
  $("#simex-a-again").addEventListener("click", renderSimexPartASetup);
}

function renderSimexPartAReview(index) {
  simexPartAActive.index = index;
  const task = simexPartAActive.tasks[index];
  $("#main-content").innerHTML =
    '<section class="page-heading simex-a-session-heading"><div><div class="eyebrow"><span class="eyebrow-line"></span> DEINE FEHLER · WIEDERHOLUNG</div><h1>Aufgabe ' + (index + 1) + ' noch einmal ansehen</h1><p>Deine Antwort und die richtige Lösung im Vergleich.</p></div><button class="button simex-a-exit" id="simex-a-back-result"><i data-lucide="arrow-left"></i> Zurück zum Ergebnis</button></section>' +
    renderSimexPartAQuestion(task, index);
  refreshIcons();
  $("#simex-a-back-result").addEventListener("click", renderSimexPartAResult);
}
