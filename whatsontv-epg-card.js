/**
 * What's On TV EPG Card v1.1.0
 * Custom Lovelace card para Home Assistant
 * i18n: 49 languages
 */

const CARD_VERSION = "1.1.0";

// ─── i18n ──────────────────────────────────────────────────────────────────────
const T = {
  af: {editor_title: "Kaarttitel", editor_theme: "Tema", editor_theme_dark: "🌙 Donker", editor_theme_light: "☀️ Lig", editor_accent: "Hoofkleur", editor_color_picker: "Kleurkieser", editor_color_custom: "Pasgemaakte kleur (HEX of RGB)", editor_color_placeholder: "#fa1a00 of 200,100,0", editor_columns: "Kolomme (2–6)", editor_channels: "Kanale — sleep ⠿ om te herrangskik", editor_drag_hint: "⠿ Sleep · Verwyder", editor_no_sensors: "Geen EPG-sensors bespeur nie. Aktiveer die What's On TV-integrasie.", color_orange: "Oranje", color_ha_blue: "HA Blou", color_cyan: "Siaan", color_yellow: "Geel", color_green: "Groen", color_pink: "Pienk", color_purple: "Pers", color_red: "Rooi", default_title: "TV-Gids", no_data: "Geen data", unavailable: "Nie beskikbaar nie", no_sensors: "Geen EPG-sensors gevind nie.", up_next_label: "Volgende", now_badge: "NOU", no_schedule: "Geen skedule beskikbaar nie", close: "Sluit", tab_search: "🔍 Soek", tab_watches: "⭐ Gestoor", search_placeholder: "Soek program...", match_contains: "Bevat", match_exact: "Presies", btn_search: "Soek", hint_search: "Tik die titel in en druk Soek.", no_results: "Geen resultate vir", results_suffix_one: "resultaat", results_suffix_many: "resultate", btn_notify_now: "📨 Stel my nou in kennis", btn_sending: "Stuur tans...", btn_sent: "✓ Gestuur", notify_title_prefix: "📺 Program EPG", watches_title: "⭐ Gestoorde soektogte", watches_hint: "Voeg sleutelwoorde by. Wanneer die program binne die gekose tydvenster in die EPG verskyn, sal jy 'n outomatiese kennisgewing ontvang.", watches_label: "Gestoorde soektogte aktief", watch_placeholder: "Bv: Champions, Dune, Alone...", watch_notify_label: "Stel in kennis met", watch_hours_label: "Waarsku voor", watch_1h: "1u voor", watch_2h: "2u voor", watch_6h: "6u voor", watch_12h: "12u voor", watch_24h: "24u voor", watch_48h: "48u voor", btn_save_watch: "⭐ Stoor soektog", no_watches: "Nog geen gestoorde soektogte nie.", watch_meta_notify: "kennisgewing", watch_meta_before: "waarskuwings", watch_meta_before_suffix: "u voor", error_no_keyword: "Voer 'n sleutelwoord in.", error_no_service: "Kies 'n kennisgewingdiens.", error_no_service_found: "Geen kennisgewingdienste nie", error_loading: "Laai tans dienste...", error_send: "Fout:", confirm_delete_watch: "Vee hierdie gestoorde soektog uit?"},
  ar: {editor_title: "عنوان البطاقة", editor_theme: "المظهر", editor_theme_dark: "🌙 داكن", editor_theme_light: "☀️ فاتح", editor_accent: "اللون الرئيسي", editor_color_picker: "منتقي الألوان", editor_color_custom: "لون مخصص (HEX أو RGB)", editor_color_placeholder: "#fa1a00 أو 200,100,0", editor_columns: "الأعمدة (2–6)", editor_channels: "القنوات — اسحب ⠿ لإعادة الترتيب", editor_drag_hint: "⠿ سحب · إزالة", editor_no_sensors: "لم يتم اكتشاف مستشعرات EPG. قم بتفعيل تكامل What's On TV.", color_orange: "برتقالي", color_ha_blue: "أزرق HA", color_cyan: "سماوي", color_yellow: "أصفر", color_green: "أخضر", color_pink: "وردي", color_purple: "أرجواني", color_red: "أحمر", default_title: "دليل التلفاز", no_data: "لا توجد بيانات", unavailable: "غير متوفر", no_sensors: "لم يتم العثور على مستشعرات EPG.", up_next_label: "التالي", now_badge: "الآن", no_schedule: "لا يوجد جدول متاح", close: "إغلاق", tab_search: "🔍 بحث", tab_watches: "⭐ المحفوظة", search_placeholder: "بحث عن برنامج...", match_contains: "يحتوي على", match_exact: "مطابق", btn_search: "بحث", hint_search: "اكتب العنوان واضغط على بحث.", no_results: "لا توجد نتائج لـ", results_suffix_one: "نتيجة", results_suffix_many: "نتائج", btn_notify_now: "📨 أرسل لي إشعاراً الآن", btn_sending: "جاري الإرسال...", btn_sent: "✓ تم الإرسال", notify_title_prefix: "📺 برنامج EPG", watches_title: "⭐ عمليات البحث المحفوظة", watches_hint: "أضف كلمات رئيسية. عندما يظهر البرنامج في دليل البرامج ضمن النافذة الزمنية، ستتلقى إشعاراً تلقائياً.", watches_label: "عمليات البحث المحفوظة النشطة", watch_placeholder: "مثال: Champions, Dune, Alone...", watch_notify_label: "إشعار بواسطة", watch_hours_label: "تنبيه قبل", watch_1h: "ساعة قبل", watch_2h: "ساعتان قبل", watch_6h: "6 ساعات قبل", watch_12h: "12 ساعة قبل", watch_24h: "24 ساعة قبل", watch_48h: "48 ساعة قبل", btn_save_watch: "⭐ حفظ البحث", no_watches: "لا توجد عمليات بحث محفوظة بعد.", watch_meta_notify: "إشعار", watch_meta_before: "تنبيهات", watch_meta_before_suffix: "ساعة قبل", error_no_keyword: "أدخل كلمة رئيسية.", error_no_service: "اختر خدمة إشعارات.", error_no_service_found: "لا توجد خدمات إشعارات", error_loading: "جاري تحميل الخدمات...", error_send: "خطأ:", confirm_delete_watch: "حذف هذا البحث المحفوظ؟"},
  az: {editor_title: "Kart başlığı", editor_theme: "Mövzu", editor_theme_dark: "🌙 Tünd", editor_theme_light: "☀️ Açıq", editor_accent: "Əsas rəng", editor_color_picker: "Rəng seçici", editor_color_custom: "Xüsusi rəng (HEX və ya RGB)", editor_color_placeholder: "#fa1a00 və ya 200,100,0", editor_columns: "Sütunlar (2–6)", editor_channels: "Kanallar — sıralamaq üçün ⠿ dartın", editor_drag_hint: "⠿ Dart · Sil", editor_no_sensors: "EPG sensorları tapılmadı. What's On TV inteqrasiyasını aktiv edin.", color_orange: "Narıncı", color_ha_blue: "HA Mavi", color_cyan: "Sian", color_yellow: "Sarı", color_green: "Yaşıl", color_pink: "Çəhrayı", color_purple: "Bənövşəyi", color_red: "Qırmızı", default_title: "TV Bələdçisi", no_data: "Məlumat yoxdur", unavailable: "Mövcud deyil", no_sensors: "EPG sensorları tapılmadı.", up_next_label: "Növbəti", now_badge: "İNDİ", no_schedule: "Cədvəl mövcud deyil", close: "Bağla", tab_search: "🔍 Axtar", tab_watches: "⭐ Saxlanılanlar", search_placeholder: "Proqramı axtar...", match_contains: "Tərkibində var", match_exact: "Dəqiq", btn_search: "Axtar", hint_search: "Başlığı yazın və Axtar düyməsini basın.", no_results: "Nəticə tapılmadı", results_suffix_one: "nəticə", results_suffix_many: "nəticə", btn_notify_now: "📨 İndi xəbər ver", btn_sending: "Göndərilir...", btn_sent: "✓ Göndərildi", notify_title_prefix: "📺 EPG Proqramı", watches_title: "⭐ Saxlanılan axtarışlar", watches_hint: "Açar sözlər əlavə edin. Proqram EPG-də seçilmiş vaxtda göründükdə avtomatik bildiriş alacaqsınız.", watches_label: "Aktiv saxlanılan axtarışlar", watch_placeholder: "Məs: Champions, Dune, Alone...", watch_notify_label: "Bildiriş vasitəsi", watch_hours_label: "Xəbərdarlıq vaxtı", watch_1h: "1 saat əvvəl", watch_2h: "2 saat əvvəl", watch_6h: "6 saat əvvəl", watch_12h: "12 saat əvvəl", watch_24h: "24 saat əvvəl", watch_48h: "48 saat əvvəl", btn_save_watch: "⭐ Axtarışı saxla", no_watches: "Hələ saxlanılan axtarış yoxdur.", watch_meta_notify: "bildiriş", watch_meta_before: "xəbərdarlıq", watch_meta_before_suffix: "saat əvvəl", error_no_keyword: "Açar söz daxil edin.", error_no_service: "Bildiriş xidmətini seçin.", error_no_service_found: "Xidmət tapılmadı", error_loading: "Xidmətlər yüklənir...", error_send: "Xəta:", confirm_delete_watch: "Bu saxlanılan axtarışı silmək istəyirsiniz?"},
  be: {editor_title: "Загаловак карткі", editor_theme: "Тэма", editor_theme_dark: "🌙 Цёмная", editor_theme_light: "☀️ Светлая", editor_accent: "Асноўны колер", editor_color_picker: "Выбар колеру", editor_color_custom: "Свой колер (HEX або RGB)", editor_color_placeholder: "#fa1a00 або 200,100,0", editor_columns: "Слупкі (2–6)", editor_channels: "Каналы — перацягніце ⠿ для сартавання", editor_drag_hint: "⠿ Перацягнуць · Выдаліць", editor_no_sensors: "EPG-сенсары не выяўлены. Уключыце інтэграцыю What's On TV.", color_orange: "Аранжавы", color_ha_blue: "HA Сіні", color_cyan: "Цыянавы", color_yellow: "Жоўты", color_green: "Зялёны", color_pink: "Ружовы", color_purple: "Фіялетавы", color_red: "Чырвоны", default_title: "ТВ-праграма", no_data: "Няма даных", unavailable: "Недаступна", no_sensors: "EPG-сенсары не знойдзены.", up_next_label: "Далей", now_badge: "ЗАРАЗ", no_schedule: "Праграма адсутнічае", close: "Закрыць", tab_search: "🔍 Пошук", tab_watches: "⭐ Захаванае", search_placeholder: "Пошук праграмы...", match_contains: "Утрымлівае", match_exact: "Дакладна", btn_search: "Шукаць", hint_search: "Увядзіце назву і націсніце Шукаць.", no_results: "Няма вынікаў для", results_suffix_one: "вынік", results_suffix_many: "вынікаў", btn_notify_now: "📨 Апавясціць зараз", btn_sending: "Адпраўка...", btn_sent: "✓ Адпраўлена", notify_title_prefix: "📺 Праграма EPG", watches_title: "⭐ Захаваныя пошукі", watches_hint: "Дадайце ключавыя словы. Калі праграма з'явіцца ў EPG у абраны час, вы атрымаеце аўтаматычнае апавяшчэнне.", watches_label: "Актыўныя захаваныя пошукі", watch_placeholder: "Напр: Champions, Dune, Alone...", watch_notify_label: "Апавясціць праз", watch_hours_label: "Папярэдзіць за", watch_1h: "1 гадзіну да", watch_2h: "2 гадзіны да", watch_6h: "6 гадзін да", watch_12h: "12 гадзін да", watch_24h: "24 гадзіны да", watch_48h: "48 гадзін да", btn_save_watch: "⭐ Захаваць пошук", no_watches: "Захаваных пошукаў пакуль няма.", watch_meta_notify: "апавясціць", watch_meta_before: "папярэджанні", watch_meta_before_suffix: "г да", error_no_keyword: "Увядзіце ключавое слова.", error_no_service: "Абярыце службу апавяшчэнняў.", error_no_service_found: "Службы не знойдзены", error_loading: "Загрузка службаў...", error_send: "Памылка:", confirm_delete_watch: "Выдаліць гэты захаваны пошук?"},
  bg: {editor_title: "Заглавие на картата", editor_theme: "Тема", editor_theme_dark: "🌙 Тъмна", editor_theme_light: "☀️ Светла", editor_accent: "Основен цвят", editor_color_picker: "Избор на цвят", editor_color_custom: "Персонализиран цвят (HEX или RGB)", editor_color_placeholder: "#fa1a00 или 200,100,0", editor_columns: "Колони (2–6)", editor_channels: "Канали — плъзнете ⠿ за пренареждане", editor_drag_hint: "⠿ Плъзгане · Премахване", editor_no_sensors: "Не са открити EPG сензори. Активирайте What's On TV интеграцията.", color_orange: "Оранжев", color_ha_blue: "HA Син", color_cyan: "Циан", color_yellow: "Жълт", color_green: "Зелен", color_pink: "Розов", color_purple: "Лилав", color_red: "Червен", default_title: "ТВ Програма", no_data: "Няма данни", unavailable: "Недостъпно", no_sensors: "EPG сензори не са намерени.", up_next_label: "Следва", now_badge: "СЕГА", no_schedule: "Няма налична програма", close: "Затвори", tab_search: "🔍 Търсене", tab_watches: "⭐ Запазени", search_placeholder: "Търсене на програма...", match_contains: "Съдържа", match_exact: "Точно", btn_search: "Търси", hint_search: "Въведете заглавие и натиснете Търси.", no_results: "Няма резултати за", results_suffix_one: "резултат", results_suffix_many: "резултата", btn_notify_now: "📨 Извести ме сега", btn_sending: "Изпращане...", btn_sent: "✓ Изпратено", notify_title_prefix: "📺 EPG Програма", watches_title: "⭐ Запазени търсения", watches_hint: "Добавете ключови думи. Когато програмата се появи в EPG в избрания времеви прозорец, ще получите автоматично известие.", watches_label: "Активни запазени търсения", watch_placeholder: "Напр: Champions, Dune, Alone...", watch_notify_label: "Извести чрез", watch_hours_label: "Предупреждение преди", watch_1h: "1 час преди", watch_2h: "2 часа преди", watch_6h: "6 часа преди", watch_12h: "12 часа преди", watch_24h: "24 часа преди", watch_48h: "48 часа преди", btn_save_watch: "⭐ Запази търсенето", no_watches: "Все още няма запазени търсения.", watch_meta_notify: "известие", watch_meta_before: "предупреждения", watch_meta_before_suffix: "ч преди", error_no_keyword: "Въведете ключова дума.", error_no_service: "Изберете услуга за известия.", error_no_service_found: "Не са намерени услуги", error_loading: "Зареждане на услуги...", error_send: "Грешка:", confirm_delete_watch: "Изтриване на това запазено търсене?"},
  bs: {editor_title: "Naslov kartice", editor_theme: "Tema", editor_theme_dark: "🌙 Tamna", editor_theme_light: "☀️ Svijetla", editor_accent: "Glavna boja", editor_color_picker: "Birač boja", editor_color_custom: "Prilagođena boja (HEX ili RGB)", editor_color_placeholder: "#fa1a00 ili 200,100,0", editor_columns: "Stupci (2–6)", editor_channels: "Kanali — povucite ⠿ za promjenu redoslijeda", editor_drag_hint: "⠿ Povuci · Ukloni", editor_no_sensors: "EPG senzori nisu otkriveni. Omogućite What's On TV integraciju.", color_orange: "Narančasta", color_ha_blue: "HA Plava", color_cyan: "Cijan", color_yellow: "Žuta", color_green: "Zelena", color_pink: "Ružičasta", color_purple: "Ljubičasta", color_red: "Crvena", default_title: "TV Vodič", no_data: "Nema podataka", unavailable: "Nedostupno", no_sensors: "EPG senzori nisu pronađeni.", up_next_label: "Slijedi", now_badge: "SADA", no_schedule: "Raspored nije dostupan", close: "Zatvori", tab_search: "🔍 Pretraga", tab_watches: "⭐ Spašeno", search_placeholder: "Pretraži program...", match_contains: "Sadrži", match_exact: "Tačno", btn_search: "Traži", hint_search: "Upišite naslov i pritisnite Traži.", no_results: "Nema rezultata za", results_suffix_one: "rezultat", results_suffix_many: "rezultata", btn_notify_now: "📨 Obavijesti me sada", btn_sending: "Slanje...", btn_sent: "✓ Poslano", notify_title_prefix: "📺 Program EPG", watches_title: "⭐ Spašene pretrage", watches_hint: "Dodajte ključne riječi. Kada se program pojavi u EPG-u unutar odabranog vremena, dobit ćete automatsku obavijest.", watches_label: "Aktivne spašene pretrage", watch_placeholder: "Npr: Champions, Dune, Alone...", watch_notify_label: "Obavijesti putem", watch_hours_label: "Upozori prije", watch_1h: "1 sat prije", watch_2h: "2 sata prije", watch_6h: "6 sati prije", watch_12h: "12 sati prije", watch_24h: "24 sata prije", watch_48h: "48 sati prije", btn_save_watch: "⭐ Spasi pretragu", no_watches: "Još nema spašenih pretraga.", watch_meta_notify: "obavijesti", watch_meta_before: "upozorenja", watch_meta_before_suffix: "h prije", error_no_keyword: "Unesite ključnu riječ.", error_no_service: "Odaberite uslugu obavijesti.", error_no_service_found: "Usluge nisu pronađene", error_loading: "Učitavanje usluga...", error_send: "Greška:", confirm_delete_watch: "Obrisati ovu spašenu pretragu?"},
  ca: {editor_title: "Títol de la targeta", editor_theme: "Tema", editor_theme_dark: "🌙 Fosc", editor_theme_light: "☀️ Clar", editor_accent: "Color principal", editor_color_picker: "Selector de color", editor_color_custom: "Color personalitzat (HEX o RGB)", editor_color_placeholder: "#fa1a00 o 200,100,0", editor_columns: "Columnes (2–6)", editor_channels: "Canals — arrossega ⠿ per reordenar", editor_drag_hint: "⠿ Arrossega · Elimina", editor_no_sensors: "No s'han detectat sensors EPG. Activa la integració What's On TV.", color_orange: "Taronja", color_ha_blue: "Blau HA", color_cyan: "Cian", color_yellow: "Groc", color_green: "Verd", color_pink: "Rosa", color_purple: "Lila", color_red: "Vermell", default_title: "Guia TV", no_data: "Sense dades", unavailable: "No disponible", no_sensors: "No s'han trobat sensors EPG.", up_next_label: "A continuació", now_badge: "ARA", no_schedule: "No hi ha programació disponible", close: "Tancar", tab_search: "🔍 Cerca", tab_watches: "⭐ Guardats", search_placeholder: "Cerca programa...", match_contains: "Conté", match_exact: "Exacte", btn_search: "Cercar", hint_search: "Escriu el títol i prem Cercar.", no_results: "Sense resultats per a", results_suffix_one: "resultat", results_suffix_many: "resultats", btn_notify_now: "📨 Avisa'm ara", btn_sending: "Enviant...", btn_sent: "✓ Enviat", notify_title_prefix: "📺 Programa EPG", watches_title: "⭐ Cerques guardades", watches_hint: "Afegeix paraules clau. Quan el programa aparegui a l'EPG dins de la finestra de temps seleccionada, rebràs una notificació automàtica.", watches_label: "Cerques guardades actives", watch_placeholder: "Ex: Champions, Dune, Alone...", watch_notify_label: "Notifica amb", watch_hours_label: "Alerta abans", watch_1h: "1h abans", watch_2h: "2h abans", watch_6h: "6h abans", watch_12h: "12h abans", watch_24h: "24h abans", watch_48h: "48h abans", btn_save_watch: "⭐ Guardar cerca", no_watches: "Encara no hi ha cerques guardades.", watch_meta_notify: "notifica", watch_meta_before: "alertes", watch_meta_before_suffix: "h abans", error_no_keyword: "Introdueix una paraula clau.", error_no_service: "Selecciona un servei de notificació.", error_no_service_found: "Cap servei de notificació", error_loading: "Carregant serveis...", error_send: "Error:", confirm_delete_watch: "Vols eliminar aquesta cerca?"},
  cs: {editor_title: "Název karty", editor_theme: "Motiv", editor_theme_dark: "🌙 Tmavý", editor_theme_light: "☀️ Světlý", editor_accent: "Hlavní barva", editor_color_picker: "Výběr barvy", editor_color_custom: "Vlastní barva (HEX nebo RGB)", editor_color_placeholder: "#fa1a00 nebo 200,100,0", editor_columns: "Sloupce (2–6)", editor_channels: "Kanály — přetažením ⠿ změníte pořadí", editor_drag_hint: "⠿ Táhnout · Odstranit", editor_no_sensors: "Nebyly detekovány žádné senzory EPG. Povolte integraci What's On TV.", color_orange: "Oranžová", color_ha_blue: "HA Modrá", color_cyan: "Azurová", color_yellow: "Žlutá", color_green: "Zelená", color_pink: "Růžová", color_purple: "Fialová", color_red: "Červená", default_title: "TV Průvodce", no_data: "Žádná data", unavailable: "Nedostupné", no_sensors: "Nenalezeny žádné senzory EPG.", up_next_label: "Následuje", now_badge: "NYNÍ", no_schedule: "Program není k dispozici", close: "Zavřít", tab_search: "🔍 Hledat", tab_watches: "⭐ Uložené", search_placeholder: "Hledat program...", match_contains: "Obsahuje", match_exact: "Přesná shoda", btn_search: "Hledat", hint_search: "Zadejte název a stiskněte Hledat.", no_results: "Žádné výsledky pro", results_suffix_one: "výsledek", results_suffix_many: "výsledků", btn_notify_now: "📨 Upozornit nyní", btn_sending: "Odesílání...", btn_sent: "✓ Odesláno", notify_title_prefix: "📺 Program EPG", watches_title: "⭐ Uložená hledání", watches_hint: "Přidejte klíčová slova. Jakmile se program objeví v EPG ve zvoleném časovém okně, obdržíte automatické upozornění.", watches_label: "Aktivní uložená hledání", watch_placeholder: "Např: Champions, Dune, Alone...", watch_notify_label: "Upozornit přes", watch_hours_label: "Upozornit předem", watch_1h: "1h předem", watch_2h: "2h předem", watch_6h: "6h předem", watch_12h: "12h předem", watch_24h: "24h předem", watch_48h: "48h předem", btn_save_watch: "⭐ Uložit hledání", no_watches: "Zatím žádná uložená hledání.", watch_meta_notify: "upozornit", watch_meta_before: "upozornění", watch_meta_before_suffix: "h předem", error_no_keyword: "Zadejte klíčové slovo.", error_no_service: "Vyberte oznamovací službu.", error_no_service_found: "Žádné oznamovací služby", error_loading: "Načítání služeb...", error_send: "Chyba:", confirm_delete_watch: "Smazat toto uložené hledání?"},
  da: {editor_title: "Korttitel", editor_theme: "Tema", editor_theme_dark: "🌙 Mørkt", editor_theme_light: "☀️ Lyst", editor_accent: "Hovedfarve", editor_color_picker: "Farvevælger", editor_color_custom: "Brugerdefineret farve (HEX eller RGB)", editor_color_placeholder: "#fa1a00 eller 200,100,0", editor_columns: "Kolonner (2–6)", editor_channels: "Kanaler — træk ⠿ for at sortere", editor_drag_hint: "⠿ Træk · Fjern", editor_no_sensors: "Ingen EPG-sensorer fundet. Aktiver What's On TV-integrationen.", color_orange: "Orange", color_ha_blue: "HA Blå", color_cyan: "Cyan", color_yellow: "Gul", color_green: "Grøn", color_pink: "Lyserød", color_purple: "Lilla", color_red: "Rød", default_title: "TV Guide", no_data: "Ingen data", unavailable: "Utilgængelig", no_sensors: "Ingen EPG-sensorer fundet.", up_next_label: "Næste", now_badge: "NU", no_schedule: "Ingen programoversigt", close: "Luk", tab_search: "🔍 Søg", tab_watches: "⭐ Gemt", search_placeholder: "Søg program...", match_contains: "Indeholder", match_exact: "Præcis", btn_search: "Søg", hint_search: "Indtast titel og tryk på Søg.", no_results: "Ingen resultater for", results_suffix_one: "resultat", results_suffix_many: "resultater", btn_notify_now: "📨 Giv mig besked nu", btn_sending: "Sender...", btn_sent: "✓ Sendt", notify_title_prefix: "📺 Program EPG", watches_title: "⭐ Gemte søgninger", watches_hint: "Tilføj søgeord. Når programmet dukker op i EPG'en inden for det valgte tidsrum, modtager du en automatisk besked.", watches_label: "Aktive gemte søgninger", watch_placeholder: "F.eks: Champions, Dune, Alone...", watch_notify_label: "Giv besked via", watch_hours_label: "Advar før", watch_1h: "1t før", watch_2h: "2t før", watch_6h: "6t før", watch_12h: "12t før", watch_24h: "24t før", watch_48h: "48t før", btn_save_watch: "⭐ Gem søgning", no_watches: "Ingen gemte søgninger endnu.", watch_meta_notify: "besked", watch_meta_before: "advarsler", watch_meta_before_suffix: "t før", error_no_keyword: "Indtast et søgeord.", error_no_service: "Vælg en beskedtjeneste.", error_no_service_found: "Ingen beskedtjenester fundet", error_loading: "Indlæser tjenester...", error_send: "Fejl:", confirm_delete_watch: "Slet denne gemte søgning?"},
  de: {editor_title: "Kartentitel", editor_theme: "Thema", editor_theme_dark: "🌙 Dunkel", editor_theme_light: "☀️ Hell", editor_accent: "Hauptfarbe", editor_color_picker: "Farbauswahl", editor_color_custom: "Benutzerdefinierte Farbe (HEX oder RGB)", editor_color_placeholder: "#fa1a00 oder 200,100,0", editor_columns: "Spalten (2–6)", editor_channels: "Sender — ⠿ zum Neuanordnen ziehen", editor_drag_hint: "⠿ Ziehen · Entfernen", editor_no_sensors: "Keine EPG-Sensoren erkannt. Aktivieren Sie die What's On TV-Integration.", color_orange: "Orange", color_ha_blue: "HA Blau", color_cyan: "Cyan", color_yellow: "Gelb", color_green: "Grün", color_pink: "Rosa", color_purple: "Lila", color_red: "Rot", default_title: "TV-Programm", no_data: "Keine Daten", unavailable: "Nicht verfügbar", no_sensors: "Keine EPG-Sensoren gefunden.", up_next_label: "Als nächstes", now_badge: "JETZT", no_schedule: "Kein Zeitplan verfügbar", close: "Schließen", tab_search: "🔍 Suchen", tab_watches: "⭐ Gespeichert", search_placeholder: "Programm suchen...", match_contains: "Enthält", match_exact: "Exakt", btn_search: "Suchen", hint_search: "Titel eingeben und Suchen drücken.", no_results: "Keine Ergebnisse für", results_suffix_one: "Ergebnis", results_suffix_many: "Ergebnisse", btn_notify_now: "📨 Jetzt benachrichtigen", btn_sending: "Wird gesendet...", btn_sent: "✓ Gesendet", notify_title_prefix: "📺 Programm-EPG", watches_title: "⭐ Gespeicherte Suchen", watches_hint: "Schlüsselwörter hinzufügen. Wenn das Programm im gewählten Zeitfenster im EPG erscheint, erhalten Sie eine automatische Benachrichtigung.", watches_label: "Gespeicherte Suchen aktiv", watch_placeholder: "Z.B.: Champions, Dune, Alone...", watch_notify_label: "Benachrichtigen über", watch_hours_label: "Warnung vor", watch_1h: "1 Std. vorher", watch_2h: "2 Std. vorher", watch_6h: "6 Std. vorher", watch_12h: "12 Std. vorher", watch_24h: "24 Std. vorher", watch_48h: "48 Std. vorher", btn_save_watch: "⭐ Suche speichern", no_watches: "Noch keine gespeicherten Suchen.", watch_meta_notify: "benachrichtigen", watch_meta_before: "Warnungen", watch_meta_before_suffix: "Std. vorher", error_no_keyword: "Stichwort eingeben.", error_no_service: "Benachrichtigungsdienst auswählen.", error_no_service_found: "Keine Dienste gefunden", error_loading: "Dienste werden geladen...", error_send: "Fehler:", confirm_delete_watch: "Diese Suche löschen?"},
  el: {editor_title: "Τίτλος κάρτας", editor_theme: "Θέμα", editor_theme_dark: "🌙 Σκούρο", editor_theme_light: "☀️ Φωτεινό", editor_accent: "Κύριο χρώμα", editor_color_picker: "Επιλογέας χρώματος", editor_color_custom: "Προσαρμοσμένο χρώμα (HEX ή RGB)", editor_color_placeholder: "#fa1a00 ή 200,100,0", editor_columns: "Στήλες (2–6)", editor_channels: "Κανάλια — σύρετε το ⠿ για αναδιάταξη", editor_drag_hint: "⠿ Σύρετε · Αφαίρεση", editor_no_sensors: "Δεν εντοπίστηκαν αισθητήρες EPG. Ενεργοποιήστε την ενσωμάτωση What's On TV.", color_orange: "Πορτοκαλί", color_ha_blue: "Μπλε HA", color_cyan: "Κυανό", color_yellow: "Κίτρινο", color_green: "Πράσινο", color_pink: "Ροζ", color_purple: "Μοβ", color_red: "Κόκκινο", default_title: "Οδηγός TV", no_data: "Δεν υπάρχουν δεδομένα", unavailable: "Μη διαθέσιμο", no_sensors: "Δεν βρέθηκαν αισθητήρες EPG.", up_next_label: "Ακολουθεί", now_badge: "ΤΩΡΑ", no_schedule: "Δεν υπάρχει διαθέσιμο πρόγραμμα", close: "Κλείσιμο", tab_search: "🔍 Αναζήτηση", tab_watches: "⭐ Αποθηκευμένα", search_placeholder: "Αναζήτηση προγράμματος...", match_contains: "Περιέχει", match_exact: "Ακριβές", btn_search: "Αναζήτηση", hint_search: "Πληκτρολογήστε τον τίτλο και πατήστε Αναζήτηση.", no_results: "Δεν υπάρχουν αποτελέσματα για", results_suffix_one: "αποτέλεσμα", results_suffix_many: "αποτελέσματα", btn_notify_now: "📨 Ειδοποίησέ με τώρα", btn_sending: "Αποστολή...", btn_sent: "✓ Στάλθηκε", notify_title_prefix: "📺 Πρόγραμμα EPG", watches_title: "⭐ Αποθηκευμένες αναζητήσεις", watches_hint: "Προσθέστε λέξεις-κλειδιά. Όταν το πρόγραμμα εμφανιστεί στο EPG εντός του επιλεγμένου χρονικού παραθύρου, θα λάβετε μια αυτόματη ειδοποίηση.", watches_label: "Ενεργές αποθηκευμένες αναζητήσεις", watch_placeholder: "Π.χ: Champions, Dune, Alone...", watch_notify_label: "Ειδοποίηση με", watch_hours_label: "Προειδοποίηση πριν", watch_1h: "1 ώρα πριν", watch_2h: "2 ώρες πριν", watch_6h: "6 ώρες πριν", watch_12h: "12 ώρες πριν", watch_24h: "24 ώρες πριν", watch_48h: "48 ώρες πριν", btn_save_watch: "⭐ Αποθήκευση αναζήτησης", no_watches: "Δεν υπάρχουν ακόμα αποθηκευμένες αναζητήσεις.", watch_meta_notify: "ειδοποίηση", watch_meta_before: "ειδοποιήσεις", watch_meta_before_suffix: "ώρες πριν", error_no_keyword: "Εισαγάγετε μια λέξη-κλειδί.", error_no_service: "Επιλέξτε μια υπηρεσία ειδοποιήσεων.", error_no_service_found: "Δεν βρέθηκαν υπηρεσίες", error_loading: "Φόρτωση υπηρεσιών...", error_send: "Σφάλμα:", confirm_delete_watch: "Διαγραφή αυτής της αναζήτησης;"},
  en: {editor_title: "Card title", editor_theme: "Theme", editor_theme_dark: "🌙 Dark", editor_theme_light: "☀️ Light", editor_accent: "Main color", editor_color_picker: "Color picker", editor_color_custom: "Custom color (HEX or RGB)", editor_color_placeholder: "#fa1a00 or 200,100,0", editor_columns: "Columns (2–6)", editor_channels: "Channels — drag ⠿ to reorder", editor_drag_hint: "⠿ Drag · Remove", editor_no_sensors: "No EPG sensors detected. Enable the What's On TV integration.", color_orange: "Orange", color_ha_blue: "HA Blue", color_cyan: "Cyan", color_yellow: "Yellow", color_green: "Green", color_pink: "Pink", color_purple: "Purple", color_red: "Red", default_title: "TV Guide", no_data: "No data", unavailable: "Unavailable", no_sensors: "No EPG sensors found.", up_next_label: "Up next", now_badge: "NOW", no_schedule: "No schedule available", close: "Close", tab_search: "🔍 Search", tab_watches: "⭐ Saved", search_placeholder: "Search program...", match_contains: "Contains", match_exact: "Exact", btn_search: "Search", hint_search: "Type the title and press Search.", no_results: "No results for", results_suffix_one: "result", results_suffix_many: "results", btn_notify_now: "📨 Notify me now", btn_sending: "Sending...", btn_sent: "✓ Sent", notify_title_prefix: "📺 Programme EPG", watches_title: "⭐ Saved searches", watches_hint: "Add keywords. When the programme appears in the EPG within the selected time window, you will receive an automatic notification.", watches_label: "Active saved searches", watch_placeholder: "E.g: Champions, Dune, Alone...", watch_notify_label: "Notify with", watch_hours_label: "Alert before", watch_1h: "1h before", watch_2h: "2h before", watch_6h: "6h before", watch_12h: "12h before", watch_24h: "24h before", watch_48h: "48h before", btn_save_watch: "⭐ Save search", no_watches: "No saved searches yet.", watch_meta_notify: "notify", watch_meta_before: "alerts", watch_meta_before_suffix: "h before", error_no_keyword: "Enter a keyword.", error_no_service: "Select a notification service.", error_no_service_found: "No notify services found", error_loading: "Loading services...", error_send: "Error:", confirm_delete_watch: "Delete this saved search?"},
  eo: {editor_title: "Titolo de la karto", editor_theme: "Etoso", editor_theme_dark: "🌙 Malhela", editor_theme_light: "☀️ Hela", editor_accent: "Ĉefa koloro", editor_color_picker: "Kolorelektilo", editor_color_custom: "Propra koloro (HEX aŭ RGB)", editor_color_placeholder: "#fa1a00 aŭ 200,100,0", editor_columns: "Kolumnoj (2–6)", editor_channels: "Kanaloj — trenu ⠿ por ordigi", editor_drag_hint: "⠿ Treni · Forigi", editor_no_sensors: "Neniuj EPG-sensiloj trovitaj. Enŝaltu la integriĝon What's On TV.", color_orange: "Oranĝa", color_ha_blue: "HA Blua", color_cyan: "Cejanblua", color_yellow: "Flava", color_green: "Verda", color_pink: "Rozkolora", color_purple: "Purpura", color_red: "Ruĝa", default_title: "TV-Programo", no_data: "Neniu datumo", unavailable: "Nedisponebla", no_sensors: "EPG-sensiloj ne trovitaj.", up_next_label: "Sekve", now_badge: "NUN", no_schedule: "Programo ne disponeblas", close: "Fermi", tab_search: "🔍 Serĉi", tab_watches: "⭐ Konservitaj", search_placeholder: "Serĉi programon...", match_contains: "Enhavas", match_exact: "Preciza", btn_search: "Serĉi", hint_search: "Tajpu titolon kaj premu Serĉi.", no_results: "Neniu rezulto por", results_suffix_one: "rezulto", results_suffix_many: "rezultoj", btn_notify_now: "📨 Sciigu min nun", btn_sending: "Sendante...", btn_sent: "✓ Sendita", notify_title_prefix: "📺 EPG-Programo", watches_title: "⭐ Konservitaj serĉoj", watches_hint: "Aldonu ŝlosilvortojn. Kiam programo aperos en la EPG ene de la elektita tempo, vi ricevos aŭtomatan sciigon.", watches_label: "Aktivaj konservitaj serĉoj", watch_placeholder: "Ekz: Champions, Dune, Alone...", watch_notify_label: "Sciigi per", watch_hours_label: "Averti antaŭe", watch_1h: "1 horo antaŭe", watch_2h: "2 horoj antaŭe", watch_6h: "6 horoj antaŭe", watch_12h: "12 horoj antaŭe", watch_24h: "24 horoj antaŭe", watch_48h: "48 horoj antaŭe", btn_save_watch: "⭐ Konservi serĉon", no_watches: "Ankoraŭ neniuj konservitaj serĉoj.", watch_meta_notify: "sciigi", watch_meta_before: "avertoj", watch_meta_before_suffix: "h antaŭe", error_no_keyword: "Entajpu ŝlosilvorton.", error_no_service: "Elektu sciigservon.", error_no_service_found: "Sciigservo ne trovita", error_loading: "Ŝargante servojn...", error_send: "Eraro:", confirm_delete_watch: "Ĉu forigi ĉi tiun konservitan serĉon?"},
  es: {editor_title: "Título de la tarjeta", editor_theme: "Tema", editor_theme_dark: "🌙 Oscuro", editor_theme_light: "☀️ Claro", editor_accent: "Color principal", editor_color_picker: "Selector de color", editor_color_custom: "Color personalizado (HEX o RGB)", editor_color_placeholder: "#fa1a00 o 200,100,0", editor_columns: "Columnas (2–6)", editor_channels: "Canales — arrastra ⠿ para reordenar", editor_drag_hint: "⠿ Arrastra · Eliminar", editor_no_sensors: "No se detectaron sensores EPG. Activa la integración What's On TV.", color_orange: "Naranja", color_ha_blue: "Azul HA", color_cyan: "Cian", color_yellow: "Amarillo", color_green: "Verde", color_pink: "Rosa", color_purple: "Púrpura", color_red: "Rojo", default_title: "Guía TV", no_data: "Sin datos", unavailable: "No disponible", no_sensors: "No se encontraron sensores EPG.", up_next_label: "A continuación", now_badge: "AHORA", no_schedule: "No hay programación disponible", close: "Cerrar", tab_search: "🔍 Buscar", tab_watches: "⭐ Guardados", search_placeholder: "Buscar programa...", match_contains: "Contiene", match_exact: "Exacto", btn_search: "Buscar", hint_search: "Escribe el título y pulsa Buscar.", no_results: "Sin resultados para", results_suffix_one: "resultado", results_suffix_many: "resultados", btn_notify_now: "📨 Avisarme ahora", btn_sending: "Enviando...", btn_sent: "✓ Enviado", notify_title_prefix: "📺 Programa EPG", watches_title: "⭐ Búsquedas guardadas", watches_hint: "Añade palabras clave. Cuando el programa aparezca en el EPG dentro del horario seleccionado, recibirás una notificación automática.", watches_label: "Búsquedas guardadas activas", watch_placeholder: "Ej: Champions, Dune, Alone...", watch_notify_label: "Notificar con", watch_hours_label: "Avisar antes", watch_1h: "1h antes", watch_2h: "2h antes", watch_6h: "6h antes", watch_12h: "12h antes", watch_24h: "24h antes", watch_48h: "48h antes", btn_save_watch: "⭐ Guardar búsqueda", no_watches: "Aún no hay búsquedas guardadas.", watch_meta_notify: "notificar", watch_meta_before: "avisos", watch_meta_before_suffix: "h antes", error_no_keyword: "Introduce una palabra clave.", error_no_service: "Selecciona un servicio de notificación.", error_no_service_found: "Sin servicios de notificación", error_loading: "Cargando servicios...", error_send: "Error:", confirm_delete_watch: "¿Eliminar esta búsqueda guardada?"},
  eu: {editor_title: "Txartelaren izenburua", editor_theme: "Gaia", editor_theme_dark: "🌙 Iluna", editor_theme_light: "☀️ Argia", editor_accent: "Kolore nagusia", editor_color_picker: "Kolore hautatzailea", editor_color_custom: "Kolore pertsonalizatua (HEX edo RGB)", editor_color_placeholder: "#fa1a00 edo 200,100,0", editor_columns: "Zutabeak (2–6)", editor_channels: "Kanalak — herrestatu ⠿ berrantolatzeko", editor_drag_hint: "⠿ Herrestatu · Kendu", editor_no_sensors: "Ez da EPG sentsorerik detektatu. Aktibatu What's On TV integrazioa.", color_orange: "Laranja", color_ha_blue: "HA Urdina", color_cyan: "Ziana", color_yellow: "Horia", color_green: "Berdea", color_pink: "Arrosa", color_purple: "Morea", color_red: "Gorria", default_title: "Telebista Gida", no_data: "Daturik gabe", unavailable: "Ez dago erabilgarri", no_sensors: "Ez da EPG sentsorerik aurkitu.", up_next_label: "Hurrengoa", now_badge: "ORAIN", no_schedule: "Ez dago ordutegirik erabilgarri", close: "Itxi", tab_search: "🔍 Bilatu", tab_watches: "⭐ Gordeta", search_placeholder: "Bilatu programa...", match_contains: "Dauka", match_exact: "Zehatza", btn_search: "Bilatu", hint_search: "Idatzi izenburua eta sakatu Bilatu.", no_results: "Emaitzarik ez honentzat:", results_suffix_one: "emaitza", results_suffix_many: "emaitza", btn_notify_now: "📨 Jakinarazi orain", btn_sending: "Bidaltzen...", btn_sent: "✓ Bidalia", notify_title_prefix: "📺 EPG Programa", watches_title: "⭐ Gordetako bilaketak", watches_hint: "Gehitu gako-hitzak. Programa hautatutako denbora-tartean EPGan agertzen denean, jakinarazpen automatiko bat jasoko duzu.", watches_label: "Gordetako bilaketak aktibo", watch_placeholder: "Adib: Champions, Dune, Alone...", watch_notify_label: "Jakinarazi honekin", watch_hours_label: "Abisatu lehenago", watch_1h: "1 ordu lehenago", watch_2h: "2 ordu lehenago", watch_6h: "6 ordu lehenago", watch_12h: "12 ordu lehenago", watch_24h: "24 ordu lehenago", watch_48h: "48 ordu lehenago", btn_save_watch: "⭐ Gorde bilaketa", no_watches: "Ez dago gordetako bilaketarik oraindik.", watch_meta_notify: "jakinarazi", watch_meta_before: "abisuak", watch_meta_before_suffix: "ordu lehenago", error_no_keyword: "Sartu gako-hitz bat.", error_no_service: "Hautatu jakinarazpen-zerbitzu bat.", error_no_service_found: "Ez dago jakinarazpen-zerbitzurik", error_loading: "Zerbitzuak kargatzen...", error_send: "Errorea:", confirm_delete_watch: "Gordetako bilaketa hau ezabatu?"},
  fa: {editor_title: "عنوان کارت", editor_theme: "تم", editor_theme_dark: "🌙 تیره", editor_theme_light: "☀️ روشن", editor_accent: "رنگ اصلی", editor_color_picker: "انتخاب‌گر رنگ", editor_color_custom: "رنگ سفارشی (HEX یا RGB)", editor_color_placeholder: "#fa1a00 یا 200,100,0", editor_columns: "ستون‌ها (2–6)", editor_channels: "کانال‌ها — برای مرتب‌سازی ⠿ را بکشید", editor_drag_hint: "⠿ کشیدن · حذف", editor_no_sensors: "سنسور EPG شناسایی نشد. افزونه What's On TV را فعال کنید.", color_orange: "نارنجی", color_ha_blue: "آبی HA", color_cyan: "فیروزه‌ای", color_yellow: "زرد", color_green: "سبز", color_pink: "صورتی", color_purple: "بنفش", color_red: "قرمز", default_title: "راهنمای تلویزیون", no_data: "بدون داده", unavailable: "در دسترس نیست", no_sensors: "سنسور EPG پیدا نشد.", up_next_label: "برنامه بعدی", now_badge: "اکنون", no_schedule: "برنامه‌ای موجود نیست", close: "بستن", tab_search: "🔍 جستجو", tab_watches: "⭐ ذخیره شده", search_placeholder: "جستجوی برنامه...", match_contains: "شامل", match_exact: "دقیق", btn_search: "جستجو", hint_search: "عنوان را وارد کرده و جستجو را بزنید.", no_results: "نتیجه‌ای یافت نشد برای", results_suffix_one: "نتیجه", results_suffix_many: "نتیجه", btn_notify_now: "📨 الان به من اطلاع بده", btn_sending: "در حال ارسال...", btn_sent: "✓ ارسال شد", notify_title_prefix: "📺 برنامه EPG", watches_title: "⭐ جستجوهای ذخیره شده", watches_hint: "کلمات کلیدی را اضافه کنید. وقتی برنامه در پنجره زمانی انتخاب شده در EPG ظاهر شود، یک اعلان خودکار دریافت خواهید کرد.", watches_label: "جستجوهای ذخیره شده فعال", watch_placeholder: "مثلاً: Champions, Dune, Alone...", watch_notify_label: "اطلاع‌رسانی از طریق", watch_hours_label: "هشدار از قبل", watch_1h: "۱ ساعت قبل", watch_2h: "۲ ساعت قبل", watch_6h: "۶ ساعت قبل", watch_12h: "۱۲ ساعت قبل", watch_24h: "۲۴ ساعت قبل", watch_48h: "۴۸ ساعت قبل", btn_save_watch: "⭐ ذخیره جستجو", no_watches: "هنوز جستجوی ذخیره شده‌ای ندارید.", watch_meta_notify: "اطلاع‌رسانی", watch_meta_before: "هشدارها", watch_meta_before_suffix: "ساعت قبل", error_no_keyword: "یک کلمه کلیدی وارد کنید.", error_no_service: "یک سرویس اعلان انتخاب کنید.", error_no_service_found: "سرویس اعلانی یافت نشد", error_loading: "در حال بارگذاری سرویس‌ها...", error_send: "خطا:", confirm_delete_watch: "این جستجوی ذخیره شده حذف شود؟"},
  fi: {editor_title: "Kortin otsikko", editor_theme: "Teema", editor_theme_dark: "🌙 Tumma", editor_theme_light: "☀️ Vaalea", editor_accent: "Pääväri", editor_color_picker: "Värivalitsin", editor_color_custom: "Mukautettu väri (HEX tai RGB)", editor_color_placeholder: "#fa1a00 tai 200,100,0", editor_columns: "Sarakkeet (2–6)", editor_channels: "Kanavat — vedä ⠿ järjestääksesi", editor_drag_hint: "⠿ Vedä · Poista", editor_no_sensors: "EPG-antureita ei havaittu. Ota What's On TV -integraatio käyttöön.", color_orange: "Oranssi", color_ha_blue: "HA Sininen", color_cyan: "Syaani", color_yellow: "Keltainen", color_green: "Vihreä", color_pink: "Vaaleanpunainen", color_purple: "Violetti", color_red: "Punainen", default_title: "TV-opas", no_data: "Ei tietoja", unavailable: "Ei saatavilla", no_sensors: "EPG-antureita ei löytynyt.", up_next_label: "Seuraavaksi", now_badge: "NYT", no_schedule: "Ohjelmatiedot eivät ole saatavilla", close: "Sulje", tab_search: "🔍 Haku", tab_watches: "⭐ Tallennetut", search_placeholder: "Etsi ohjelmaa...", match_contains: "Sisältää", match_exact: "Tarkka", btn_search: "Hae", hint_search: "Kirjoita otsikko ja paina Hae.", no_results: "Ei tuloksia haulle", results_suffix_one: "tulos", results_suffix_many: "tulosta", btn_notify_now: "📨 Ilmoita minulle nyt", btn_sending: "Lähetetään...", btn_sent: "✓ Lähetetty", notify_title_prefix: "📺 Ohjelma EPG", watches_title: "⭐ Tallennetut haut", watches_hint: "Lisää avainsanoja. Kun ohjelma ilmestyy EPG:hen valitun ajan kuluessa, saat automaattisen ilmoituksen.", watches_label: "Aktiiviset tallennetut haut", watch_placeholder: "Esim: Champions, Dune, Alone...", watch_notify_label: "Ilmoita palvelulla", watch_hours_label: "Hälytä ennen", watch_1h: "1h ennen", watch_2h: "2h ennen", watch_6h: "6h ennen", watch_12h: "12h ennen", watch_24h: "24h ennen", watch_48h: "48h ennen", btn_save_watch: "⭐ Tallenna haku", no_watches: "Ei vielä tallennettuja hakuja.", watch_meta_notify: "ilmoita", watch_meta_before: "hälytykset", watch_meta_before_suffix: "h ennen", error_no_keyword: "Anna avainsana.", error_no_service: "Valitse ilmoituspalvelu.", error_no_service_found: "Ei ilmoituspalveluita", error_loading: "Ladataan palveluita...", error_send: "Virhe:", confirm_delete_watch: "Poistetaanko tämä tallennettu haku?"},
  fr: {editor_title: "Titre de la carte", editor_theme: "Thème", editor_theme_dark: "🌙 Sombre", editor_theme_light: "☀️ Clair", editor_accent: "Couleur principale", editor_color_picker: "Sélecteur de couleur", editor_color_custom: "Couleur personnalisée (HEX ou RGB)", editor_color_placeholder: "#fa1a00 ou 200,100,0", editor_columns: "Colonnes (2–6)", editor_channels: "Chaînes — faites glisser ⠿ pour réorganiser", editor_drag_hint: "⠿ Glisser · Supprimer", editor_no_sensors: "Aucun capteur EPG détecté. Activez l'intégration What's On TV.", color_orange: "Orange", color_ha_blue: "Bleu HA", color_cyan: "Cyan", color_yellow: "Jaune", color_green: "Vert", color_pink: "Rose", color_purple: "Violet", color_red: "Rouge", default_title: "Guide TV", no_data: "Pas de données", unavailable: "Indisponible", no_sensors: "Aucun capteur EPG trouvé.", up_next_label: "À suivre", now_badge: "MAINTENANT", no_schedule: "Aucun programme disponible", close: "Fermer", tab_search: "🔍 Rechercher", tab_watches: "⭐ Enregistré", search_placeholder: "Rechercher un programme...", match_contains: "Contient", match_exact: "Exact", btn_search: "Rechercher", hint_search: "Tapez le titre et appuyez sur Rechercher.", no_results: "Aucun résultat pour", results_suffix_one: "résultat", results_suffix_many: "résultats", btn_notify_now: "📨 M'avertir maintenant", btn_sending: "Envoi...", btn_sent: "✓ Envoyé", notify_title_prefix: "📺 Programme EPG", watches_title: "⭐ Recherches enregistrées", watches_hint: "Ajoutez des mots-clés. Lorsque le programme apparaît dans l'EPG dans la fenêtre de temps sélectionnée, vous recevrez une notification automatique.", watches_label: "Recherches enregistrées actives", watch_placeholder: "Ex: Champions, Dune, Alone...", watch_notify_label: "Notifier avec", watch_hours_label: "Alerte avant", watch_1h: "1h avant", watch_2h: "2h avant", watch_6h: "6h avant", watch_12h: "12h avant", watch_24h: "24h avant", watch_48h: "48h avant", btn_save_watch: "⭐ Sauvegarder la recherche", no_watches: "Aucune recherche enregistrée pour le moment.", watch_meta_notify: "notifier", watch_meta_before: "alertes", watch_meta_before_suffix: "h avant", error_no_keyword: "Entrez un mot-clé.", error_no_service: "Sélectionnez un service de notification.", error_no_service_found: "Aucun service trouvé", error_loading: "Chargement des services...", error_send: "Erreur :", confirm_delete_watch: "Supprimer cette recherche ?"},
  gl: {editor_title: "Título da tarxeta", editor_theme: "Tema", editor_theme_dark: "🌙 Escuro", editor_theme_light: "☀️ Claro", editor_accent: "Cor principal", editor_color_picker: "Selector de cor", editor_color_custom: "Cor personalizada (HEX ou RGB)", editor_color_placeholder: "#fa1a00 ou 200,100,0", editor_columns: "Columnas (2–6)", editor_channels: "Canles — arrastra ⠿ para reordenar", editor_drag_hint: "⠿ Arrastra · Eliminar", editor_no_sensors: "Non se detectaron sensores EPG. Activa a integración What's On TV.", color_orange: "Laranxa", color_ha_blue: "Azul HA", color_cyan: "Cian", color_yellow: "Amarelo", color_green: "Verde", color_pink: "Rosa", color_purple: "Púrpura", color_red: "Vermello", default_title: "Guía TV", no_data: "Sen datos", unavailable: "Non dispoñible", no_sensors: "Non se atoparon sensores EPG.", up_next_label: "A continuación", now_badge: "AGORA", no_schedule: "Non hai programación dispoñible", close: "Pechar", tab_search: "🔍 Buscar", tab_watches: "⭐ Gardados", search_placeholder: "Buscar programa...", match_contains: "Contén", match_exact: "Exacto", btn_search: "Buscar", hint_search: "Escribe o título e preme Buscar.", no_results: "Sen resultados para", results_suffix_one: "resultado", results_suffix_many: "resultados", btn_notify_now: "📨 Avisarme agora", btn_sending: "Enviando...", btn_sent: "✓ Enviado", notify_title_prefix: "📺 Programa EPG", watches_title: "⭐ Buscas gardadas", watches_hint: "Engade palabras clave. Cando o programa apareza no EPG dentro do horario seleccionado, recibirás unha notificación automática.", watches_label: "Buscas gardadas activas", watch_placeholder: "Ex: Champions, Dune, Alone...", watch_notify_label: "Notificar con", watch_hours_label: "Avisar antes", watch_1h: "1h antes", watch_2h: "2h antes", watch_6h: "6h antes", watch_12h: "12h antes", watch_24h: "24h antes", watch_48h: "48h antes", btn_save_watch: "⭐ Gardar busca", no_watches: "Aínda non hai buscas gardadas.", watch_meta_notify: "notificar", watch_meta_before: "avisos", watch_meta_before_suffix: "h antes", error_no_keyword: "Introduce unha palabra clave.", error_no_service: "Selecciona un servizo de notificación.", error_no_service_found: "Sen servizos de notificación", error_loading: "Cargando servizos...", error_send: "Erro:", confirm_delete_watch: "Eliminar esta busca gardada?"},
  he: {editor_title: "כותרת הכרטיס", editor_theme: "ערכת נושא", editor_theme_dark: "🌙 כהה", editor_theme_light: "☀️ בהיר", editor_accent: "צבע ראשי", editor_color_picker: "בוחר צבעים", editor_color_custom: "צבע מותאם אישית (HEX או RGB)", editor_color_placeholder: "#fa1a00 או 200,100,0", editor_columns: "עמודות (2–6)", editor_channels: "ערוצים — גרור ⠿ לשינוי הסדר", editor_drag_hint: "⠿ גרירה · הסרה", editor_no_sensors: "לא זוהו חיישני EPG. הפעל את שילוב What's On TV.", color_orange: "כתום", color_ha_blue: "כחול HA", color_cyan: "ציאן", color_yellow: "צהוב", color_green: "ירוק", color_pink: "ורוד", color_purple: "סגול", color_red: "אדום", default_title: "לוח שידורים", no_data: "אין נתונים", unavailable: "לא זמין", no_sensors: "לא נמצאו חיישני EPG.", up_next_label: "הבא בתור", now_badge: "עכשיו", no_schedule: "אין לוח שידורים זמין", close: "סגור", tab_search: "🔍 חיפוש", tab_watches: "⭐ שמורים", search_placeholder: "חפש תוכנית...", match_contains: "מכיל", match_exact: "מדויק", btn_search: "חפש", hint_search: "הקלד כותרת ולחץ על חיפוש.", no_results: "אין תוצאות עבור", results_suffix_one: "תוצאה", results_suffix_many: "תוצאות", btn_notify_now: "📨 עדכן אותי עכשיו", btn_sending: "שולח...", btn_sent: "✓ נשלח", notify_title_prefix: "📺 תוכנית EPG", watches_title: "⭐ חיפושים שמורים", watches_hint: "הוסף מילות מפתח. כאשר התוכנית תופיע ב-EPG בטווח הזמן שנבחר, תקבל התראה אוטומטית.", watches_label: "חיפושים שמורים פעילים", watch_placeholder: "לדוגמה: Champions, Dune, Alone...", watch_notify_label: "התראה באמצעות", watch_hours_label: "התרעה מראש", watch_1h: "שעה לפני", watch_2h: "שעתיים לפני", watch_6h: "6 שעות לפני", watch_12h: "12 שעות לפני", watch_24h: "24 שעות לפני", watch_48h: "48 שעות לפני", btn_save_watch: "⭐ שמור חיפוש", no_watches: "אין עדיין חיפושים שמורים.", watch_meta_notify: "התראה", watch_meta_before: "התראות", watch_meta_before_suffix: "שעות לפני", error_no_keyword: "הזן מילת מפתח.", error_no_service: "בחר שירות התראות.", error_no_service_found: "אין שירותי התראות", error_loading: "טוען שירותים...", error_send: "שגיאה:", confirm_delete_watch: "למחוק את החיפוש השמור הזה?"},
  hi: {editor_title: "कार्ड का शीर्षक", editor_theme: "थीम", editor_theme_dark: "🌙 डार्क", editor_theme_light: "☀️ लाइट", editor_accent: "मुख्य रंग", editor_color_picker: "रंग चयनकर्ता", editor_color_custom: "कस्टम रंग (HEX या RGB)", editor_color_placeholder: "#fa1a00 या 200,100,0", editor_columns: "कॉलम (2–6)", editor_channels: "चैनल — क्रम बदलने के लिए ⠿ खींचें", editor_drag_hint: "⠿ खींचें · हटाएं", editor_no_sensors: "कोई EPG सेंसर नहीं मिला। What's On TV इंटीग्रेशन सक्षम करें।", color_orange: "नारंगी", color_ha_blue: "HA नीला", color_cyan: "स्यान", color_yellow: "पीला", color_green: "हरा", color_pink: "गुलाबी", color_purple: "बैंगनी", color_red: "लाल", default_title: "टीवी गाइड", no_data: "कोई डेटा नहीं", unavailable: "अनुपलब्ध", no_sensors: "कोई EPG सेंसर नहीं मिला।", up_next_label: "अगला", now_badge: "अभी", no_schedule: "कोई शेड्यूल उपलब्ध नहीं है", close: "बंद करें", tab_search: "🔍 खोजें", tab_watches: "⭐ सहेजे गए", search_placeholder: "प्रोग्राम खोजें...", match_contains: "शामिल है", match_exact: "सटीक", btn_search: "खोजें", hint_search: "शीर्षक टाइप करें और खोजें बटन दबाएं।", no_results: "इसके लिए कोई परिणाम नहीं", results_suffix_one: "परिणाम", results_suffix_many: "परिणाम", btn_notify_now: "📨 मुझे अभी सूचित करें", btn_sending: "भेजा जा रहा है...", btn_sent: "✓ भेज दिया गया", notify_title_prefix: "📺 प्रोग्राम EPG", watches_title: "⭐ सहेजी गई खोजें", watches_hint: "कीवर्ड जोड़ें। जब प्रोग्राम चयनित समय सीमा के भीतर EPG में दिखाई देगा, तो आपको एक स्वचालित सूचना प्राप्त होगी।", watches_label: "सहेजी गई खोजें सक्रिय", watch_placeholder: "उदा: Champions, Dune, Alone...", watch_notify_label: "इसके साथ सूचित करें", watch_hours_label: "इससे पहले अलर्ट", watch_1h: "1 घंटा पहले", watch_2h: "2 घंटे पहले", watch_6h: "6 घंटे पहले", watch_12h: "12 घंटे पहले", watch_24h: "24 घंटे पहले", watch_48h: "48 घंटे पहले", btn_save_watch: "⭐ खोज सहेजें", no_watches: "अभी तक कोई सहेजी गई खोज नहीं।", watch_meta_notify: "सूचित करें", watch_meta_before: "अलर्ट", watch_meta_before_suffix: "घंटे पहले", error_no_keyword: "एक कीवर्ड दर्ज करें।", error_no_service: "एक सूचना सेवा चुनें।", error_no_service_found: "कोई सूचना सेवा नहीं मिली", error_loading: "सेवाएं लोड हो रही हैं...", error_send: "त्रुटि:", confirm_delete_watch: "क्या इस सहेजी गई खोज को हटाना चाहते हैं?"},
  hr: {editor_title: "Naslov kartice", editor_theme: "Tema", editor_theme_dark: "🌙 Tamna", editor_theme_light: "☀️ Svijetla", editor_accent: "Glavna boja", editor_color_picker: "Birač boja", editor_color_custom: "Prilagođena boja (HEX ili RGB)", editor_color_placeholder: "#fa1a00 ili 200,100,0", editor_columns: "Stupci (2–6)", editor_channels: "Kanali — povucite ⠿ za promjenu redoslijeda", editor_drag_hint: "⠿ Povuci · Ukloni", editor_no_sensors: "EPG senzori nisu otkriveni. Omogućite What's On TV integraciju.", color_orange: "Narančasta", color_ha_blue: "HA Plava", color_cyan: "Cijan", color_yellow: "Žuta", color_green: "Zelena", color_pink: "Ružičasta", color_purple: "Ljubičasta", color_red: "Crvena", default_title: "TV Vodič", no_data: "Nema podataka", unavailable: "Nedostupno", no_sensors: "EPG senzori nisu pronađeni.", up_next_label: "Slijedi", now_badge: "SADA", no_schedule: "Raspored nije dostupan", close: "Zatvori", tab_search: "🔍 Pretraživanje", tab_watches: "⭐ Spremljeno", search_placeholder: "Pretraži program...", match_contains: "Sadrži", match_exact: "Točno", btn_search: "Traži", hint_search: "Upišite naslov i pritisnite Traži.", no_results: "Nema rezultata za", results_suffix_one: "rezultat", results_suffix_many: "rezultata", btn_notify_now: "📨 Obavijesti me sada", btn_sending: "Slanje...", btn_sent: "✓ Poslano", notify_title_prefix: "📺 Program EPG", watches_title: "⭐ Spremljene pretrage", watches_hint: "Dodajte ključne riječi. Kada se program pojavi u EPG-u unutar odabranog vremena, dobit ćete automatsku obavijest.", watches_label: "Aktivne spremljene pretrage", watch_placeholder: "Npr: Champions, Dune, Alone...", watch_notify_label: "Obavijesti putem", watch_hours_label: "Upozori prije", watch_1h: "1 sat prije", watch_2h: "2 sata prije", watch_6h: "6 sati prije", watch_12h: "12 sati prije", watch_24h: "24 sata prije", watch_48h: "48 sati prije", btn_save_watch: "⭐ Spremi pretragu", no_watches: "Još nema spremljenih pretraga.", watch_meta_notify: "obavijesti", watch_meta_before: "upozorenja", watch_meta_before_suffix: "h prije", error_no_keyword: "Unesite ključnu riječ.", error_no_service: "Odaberite uslugu obavijesti.", error_no_service_found: "Usluge nisu pronađene", error_loading: "Učitavanje usluga...", error_send: "Greška:", confirm_delete_watch: "Obrisati ovu spremljenu pretragu?"},
  hu: {editor_title: "Kártya címe", editor_theme: "Téma", editor_theme_dark: "🌙 Sötét", editor_theme_light: "☀️ Világos", editor_accent: "Fő szín", editor_color_picker: "Színválasztó", editor_color_custom: "Egyedi szín (HEX vagy RGB)", editor_color_placeholder: "#fa1a00 vagy 200,100,0", editor_columns: "Oszlopok (2–6)", editor_channels: "Csatornák — húzza a ⠿ gombot a rendezéshez", editor_drag_hint: "⠿ Húzás · Eltávolítás", editor_no_sensors: "Nem található EPG szenzor. Engedélyezze a What's On TV integrációt.", color_orange: "Narancs", color_ha_blue: "HA Kék", color_cyan: "Cián", color_yellow: "Sárga", color_green: "Zöld", color_pink: "Rózsaszín", color_purple: "Lila", color_red: "Piros", default_title: "TV Műsor", no_data: "Nincs adat", unavailable: "Nem elérhető", no_sensors: "Nem található EPG szenzor.", up_next_label: "Következik", now_badge: "MOST", no_schedule: "Nincs elérhető műsorterv", close: "Bezárás", tab_search: "🔍 Keresés", tab_watches: "⭐ Mentett", search_placeholder: "Műsor keresése...", match_contains: "Tartalmazza", match_exact: "Pontos egyezés", btn_search: "Keresés", hint_search: "Írja be a címet és nyomja meg a Keresést.", no_results: "Nincs találat erre", results_suffix_one: "találat", results_suffix_many: "találat", btn_notify_now: "📨 Értesítsen most", btn_sending: "Küldés...", btn_sent: "✓ Elküldve", notify_title_prefix: "📺 EPG Műsor", watches_title: "⭐ Mentett keresések", watches_hint: "Adjon meg kulcsszavakat. Ha a műsor megjelenik az EPG-ben a választott időablakon belül, automatikus értesítést kap.", watches_label: "Aktív mentett keresések", watch_placeholder: "Pl: Champions, Dune, Alone...", watch_notify_label: "Értesítés ezen", watch_hours_label: "Riasztás előtte", watch_1h: "1 órával előtte", watch_2h: "2 órával előtte", watch_6h: "6 órával előtte", watch_12h: "12 órával előtte", watch_24h: "24 órával előtte", watch_48h: "48 órával előtte", btn_save_watch: "⭐ Keresés mentése", no_watches: "Még nincsenek mentett keresések.", watch_meta_notify: "értesítés", watch_meta_before: "riasztások", watch_meta_before_suffix: "órával előtte", error_no_keyword: "Adjon meg egy kulcsszót.", error_no_service: "Válasszon értesítési szolgáltatást.", error_no_service_found: "Nem található értesítési szolgáltatás", error_loading: "Szolgáltatások betöltése...", error_send: "Hiba:", confirm_delete_watch: "Törli ezt a mentett keresést?"},
  id: {editor_title: "Judul Kartu", editor_theme: "Tema", editor_theme_dark: "🌙 Gelap", editor_theme_light: "☀️ Terang", editor_accent: "Warna Utama", editor_color_picker: "Pemilih Warna", editor_color_custom: "Warna Kustom (HEX atau RGB)", editor_color_placeholder: "#fa1a00 atau 200,100,0", editor_columns: "Kolom (2–6)", editor_channels: "Saluran — seret ⠿ untuk mengurutkan", editor_drag_hint: "⠿ Seret · Hapus", editor_no_sensors: "Sensor EPG tidak terdeteksi. Aktifkan integrasi What's On TV.", color_orange: "Oranye", color_ha_blue: "Biru HA", color_cyan: "Sian", color_yellow: "Kuning", color_green: "Hijau", color_pink: "Merah Muda", color_purple: "Ungu", color_red: "Merah", default_title: "Panduan TV", no_data: "Tidak ada data", unavailable: "Tidak tersedia", no_sensors: "Sensor EPG tidak ditemukan.", up_next_label: "Berikutnya", now_badge: "SEKARANG", no_schedule: "Jadwal tidak tersedia", close: "Tutup", tab_search: "🔍 Cari", tab_watches: "⭐ Tersimpan", search_placeholder: "Cari program...", match_contains: "Berisi", match_exact: "Persis", btn_search: "Cari", hint_search: "Ketik judul dan tekan Cari.", no_results: "Tidak ada hasil untuk", results_suffix_one: "hasil", results_suffix_many: "hasil", btn_notify_now: "📨 Beritahu saya sekarang", btn_sending: "Mengirim...", btn_sent: "✓ Terkirim", notify_title_prefix: "📺 Program EPG", watches_title: "⭐ Pencarian Tersimpan", watches_hint: "Tambahkan kata kunci. Saat program muncul di EPG dalam jendela waktu yang dipilih, Anda akan menerima pemberitahuan otomatis.", watches_label: "Pencarian tersimpan aktif", watch_placeholder: "Contoh: Champions, Dune, Alone...", watch_notify_label: "Beritahu melalui", watch_hours_label: "Peringatkan sebelum", watch_1h: "1 jam sebelumnya", watch_2h: "2 jam sebelumnya", watch_6h: "6 jam sebelumnya", watch_12h: "12 jam sebelumnya", watch_24h: "24 jam sebelumnya", watch_48h: "48 jam sebelumnya", btn_save_watch: "⭐ Simpan Pencarian", no_watches: "Belum ada pencarian tersimpan.", watch_meta_notify: "beritahu", watch_meta_before: "peringatan", watch_meta_before_suffix: "jam sebelumnya", error_no_keyword: "Masukkan kata kunci.", error_no_service: "Pilih layanan notifikasi.", error_no_service_found: "Layanan notifikasi tidak ditemukan", error_loading: "Memuat layanan...", error_send: "Kesalahan:", confirm_delete_watch: "Hapus pencarian tersimpan ini?"},
  is: {editor_title: "Titill korts", editor_theme: "Þema", editor_theme_dark: "🌙 Dökkt", editor_theme_light: "☀️ Ljóst", editor_accent: "Aðallitur", editor_color_picker: "Litaval", editor_color_custom: "Sérsniðinn litur (HEX eða RGB)", editor_color_placeholder: "#fa1a00 eða 200,100,0", editor_columns: "Dálkar (2–6)", editor_channels: "Rásir — dragðu ⠿ til að endurraða", editor_drag_hint: "⠿ Draga · Fjarlægja", editor_no_sensors: "Engir EPG skynjarar fundust. Virkjaðu What's On TV samþættinguna.", color_orange: "Appelsínugult", color_ha_blue: "HA Blár", color_cyan: "Blágrænt", color_yellow: "Gult", color_green: "Grænt", color_pink: "Bleikt", color_purple: "Fjólublátt", color_red: "Rautt", default_title: "Dagskrá", no_data: "Engin gögn", unavailable: "Ekki tiltækt", no_sensors: "Engir EPG skynjarar fundust.", up_next_label: "Næst", now_badge: "NÚNA", no_schedule: "Engin dagskrá tiltæk", close: "Loka", tab_search: "🔍 Leita", tab_watches: "⭐ Vistað", search_placeholder: "Leita að þætti...", match_contains: "Inniheldur", match_exact: "Nákvæmt", btn_search: "Leita", hint_search: "Sláðu inn titil og ýttu á Leita.", no_results: "Engar niðurstöður fyrir", results_suffix_one: "niðurstaða", results_suffix_many: "niðurstöður", btn_notify_now: "📨 Láta mig vita núna", btn_sending: "Sendir...", btn_sent: "✓ Sent", notify_title_prefix: "📺 EPG Dagskrá", watches_title: "⭐ Vistaðar leitanir", watches_hint: "Bættu við leitarorðum. Þegar þáttur birtist í dagskránni innan valins tíma færðu sjálfvirka tilkynningu.", watches_label: "Virkar vistaðar leitanir", watch_placeholder: "T.d: Champions, Dune, Alone...", watch_notify_label: "Láta vita með", watch_hours_label: "Vara við fyrir", watch_1h: "1 klst fyrir", watch_2h: "2 klst fyrir", watch_6h: "6 klst fyrir", watch_12h: "12 klst fyrir", watch_24h: "24 klst fyrir", watch_48h: "48 klst fyrir", btn_save_watch: "⭐ Vista leit", no_watches: "Engar vistaðar leitanir ennþá.", watch_meta_notify: "láta vita", watch_meta_before: "viðvaranir", watch_meta_before_suffix: "klst fyrir", error_no_keyword: "Sláðu inn leitarorð.", error_no_service: "Veldu tilkynningarþjónustu.", error_no_service_found: "Engar þjónustur fundust", error_loading: "Hleður þjónustum...", error_send: "Villa:", confirm_delete_watch: "Eyða þessari vistuðu leit?"},
  it: {editor_title: "Titolo scheda", editor_theme: "Tema", editor_theme_dark: "🌙 Scuro", editor_theme_light: "☀️ Chiaro", editor_accent: "Colore principale", editor_color_picker: "Selettore colore", editor_color_custom: "Colore personalizzato (HEX o RGB)", editor_color_placeholder: "#fa1a00 o 200,100,0", editor_columns: "Colonne (2–6)", editor_channels: "Canali — trascina ⠿ per riordinare", editor_drag_hint: "⠿ Trascina · Rimuovi", editor_no_sensors: "Nessun sensore EPG rilevato. Abilita l'integrazione What's On TV.", color_orange: "Arancione", color_ha_blue: "Blu HA", color_cyan: "Ciano", color_yellow: "Giallo", color_green: "Verde", color_pink: "Rosa", color_purple: "Viola", color_red: "Rosso", default_title: "Guida TV", no_data: "Nessun dato", unavailable: "Non disponibile", no_sensors: "Nessun sensore EPG trovato.", up_next_label: "A seguire", now_badge: "ORA", no_schedule: "Nessun programma disponibile", close: "Chiudi", tab_search: "🔍 Cerca", tab_watches: "⭐ Salvati", search_placeholder: "Cerca programma...", match_contains: "Contiene", match_exact: "Esatto", btn_search: "Cerca", hint_search: "Digita il titolo e premi Cerca.", no_results: "Nessun risultato per", results_suffix_one: "risultato", results_suffix_many: "risultati", btn_notify_now: "📨 Avvisami ora", btn_sending: "Invio...", btn_sent: "✓ Inviato", notify_title_prefix: "📺 Programma EPG", watches_title: "⭐ Ricerche salvate", watches_hint: "Aggiungi parole chiave. Quando il programma appare nell'EPG entro la finestra temporale selezionata, riceverai una notifica automatica.", watches_label: "Ricerche salvate attive", watch_placeholder: "Es: Champions, Dune, Alone...", watch_notify_label: "Notifica con", watch_hours_label: "Avvisa prima", watch_1h: "1h prima", watch_2h: "2h prima", watch_6h: "6h prima", watch_12h: "12h prima", watch_24h: "24h prima", watch_48h: "48h prima", btn_save_watch: "⭐ Salva ricerca", no_watches: "Nessuna ricerca salvata.", watch_meta_notify: "notifica", watch_meta_before: "avvisi", watch_meta_before_suffix: "h prima", error_no_keyword: "Inserisci una parola chiave.", error_no_service: "Seleziona un servizio di notifica.", error_no_service_found: "Nessun servizio di notifica", error_loading: "Caricamento servizi...", error_send: "Errore:", confirm_delete_watch: "Eliminare questa ricerca?"},
  ja: {editor_title: "カードのタイトル", editor_theme: "テーマ", editor_theme_dark: "🌙 ダーク", editor_theme_light: "☀️ ライト", editor_accent: "メインカラー", editor_color_picker: "カラーピッカー", editor_color_custom: "カスタムカラー (HEX または RGB)", editor_color_placeholder: "#fa1a00 または 200,100,0", editor_columns: "列数 (2–6)", editor_channels: "チャンネル — ⠿ をドラッグして並べ替え", editor_drag_hint: "⠿ ドラッグ · 削除", editor_no_sensors: "EPGセンサーが検出されませんでした。What's On TV 統合を有効にしてください。", color_orange: "オレンジ", color_ha_blue: "HA ブルー", color_cyan: "シアン", color_yellow: "イエロー", color_green: "グリーン", color_pink: "ピンク", color_purple: "パープル", color_red: "レッド", default_title: "テレビ番組表", no_data: "データなし", unavailable: "利用不可", no_sensors: "EPGセンサーが見つかりません。", up_next_label: "次の番組", now_badge: "放送中", no_schedule: "番組予定がありません", close: "閉じる", tab_search: "🔍 検索", tab_watches: "⭐ 保存済み", search_placeholder: "番組を検索...", match_contains: "含む", match_exact: "完全一致", btn_search: "検索", hint_search: "タイトルを入力して検索を押してください。", no_results: "結果が見つかりません:", results_suffix_one: "件の結果", results_suffix_many: "件の結果", btn_notify_now: "📨 今すぐ通知", btn_sending: "送信中...", btn_sent: "✓ 送信済み", notify_title_prefix: "📺 番組 EPG", watches_title: "⭐ 保存した検索条件", watches_hint: "キーワードを追加します。選択した時間枠内に番組が EPG に表示されると、自動通知が届きます。", watches_label: "アクティブな保存済み検索", watch_placeholder: "例: Champions, Dune, Alone...", watch_notify_label: "通知方法", watch_hours_label: "通知タイミング", watch_1h: "1時間前", watch_2h: "2時間前", watch_6h: "6時間前", watch_12h: "12時間前", watch_24h: "24時間前", watch_48h: "48時間前", btn_save_watch: "⭐ 検索を保存", no_watches: "保存された検索はまだありません。", watch_meta_notify: "通知", watch_meta_before: "警告", watch_meta_before_suffix: "時間前", error_no_keyword: "キーワードを入力してください。", error_no_service: "通知サービスを選択してください。", error_no_service_found: "通知サービスがありません", error_loading: "サービスを読み込み中...", error_send: "エラー:", confirm_delete_watch: "この保存された検索を削除しますか？"},
  ka: {editor_title: "ბარათის სათაური", editor_theme: "თემა", editor_theme_dark: "🌙 მუქი", editor_theme_light: "☀️ ნათელი", editor_accent: "მთავარი ფერი", editor_color_picker: "ფერის ამრჩევი", editor_color_custom: "საკუთარი ფერი (HEX ან RGB)", editor_color_placeholder: "#fa1a00 ან 200,100,0", editor_columns: "სვეტები (2–6)", editor_channels: "არხები — გადააადგილეთ ⠿ დალაგებისთვის", editor_drag_hint: "⠿ გადათრევა · წაშლა", editor_no_sensors: "EPG სენსორები ვერ მოიძებნა. ჩართეთ What's On TV ინტეგრაცია.", color_orange: "ნარინჯისფერი", color_ha_blue: "HA ლურჯი", color_cyan: "ცისფერი", color_yellow: "ყვითელი", color_green: "მწვანე", color_pink: "ვარდისფერი", color_purple: "იისფერი", color_red: "წითელი", default_title: "ტელეგიდი", no_data: "მონაცემები არ არის", unavailable: "მიუწვდომელია", no_sensors: "EPG სენსორები ვერ მოიძებნა.", up_next_label: "შემდეგი", now_badge: "ახლა", no_schedule: "განრიგი არ არის ხელმისაწვდომი", close: "დახურვა", tab_search: "🔍 ძიება", tab_watches: "⭐ შენახული", search_placeholder: "პროგრამის ძიება...", match_contains: "შეიცავს", match_exact: "ზუსტი", btn_search: "ძებნა", hint_search: "ჩაწერეთ სათაური და დააჭირეთ ძებნას.", no_results: "შედეგი ვერ მოიძებნა", results_suffix_one: "შედეგი", results_suffix_many: "შედეგი", btn_notify_now: "📨 შემატყობინე ახლავე", btn_sending: "იგზავნება...", btn_sent: "✓ გაიგზავნა", notify_title_prefix: "📺 EPG პროგრამა", watches_title: "⭐ შენახული ძიებები", watches_hint: "დაამატეთ საკვანძო სიტყვები. როდესაც პროგრამა გამოჩნდება EPG-ში არჩეულ დროს, მიიღებთ ავტომატურ შეტყობინებას.", watches_label: "აქტიური შენახული ძიებები", watch_placeholder: "მაგ: Champions, Dune, Alone...", watch_notify_label: "შეტყობინება", watch_hours_label: "გაფრთხილება", watch_1h: "1 სთ-ით ადრე", watch_2h: "2 სთ-ით ადრე", watch_6h: "6 სთ-ით ადრე", watch_12h: "12 სთ-ით ადრე", watch_24h: "24 სთ-ით ადრე", watch_48h: "48 სთ-ით ადრე", btn_save_watch: "⭐ ძიების შენახვა", no_watches: "შენახული ძიებები ჯერ არ არის.", watch_meta_notify: "შეტყობინება", watch_meta_before: "გაფრთხილება", watch_meta_before_suffix: "სთ-ით ადრე", error_no_keyword: "შეიყვანეთ საკვანძო სიტყვა.", error_no_service: "აირჩიეთ შეტყობინების სერვისი.", error_no_service_found: "სერვისები ვერ მოიძებნა", error_loading: "სერვისების ჩატვირთვა...", error_send: "შეცდომა:", confirm_delete_watch: "წავშალო ეს შენახული ძიება?"},
  kk: {editor_title: "Карточка тақырыбы", editor_theme: "Тақырып", editor_theme_dark: "🌙 Күңгірт", editor_theme_light: "☀️ Жарық", editor_accent: "Негізгі түс", editor_color_picker: "Түс таңдау", editor_color_custom: "Арнайы түс (HEX немесе RGB)", editor_color_placeholder: "#fa1a00 немесе 200,100,0", editor_columns: "Бағандар (2–6)", editor_channels: "Арналар — реттеу үшін ⠿ сүйреңіз", editor_drag_hint: "⠿ Сүйреу · Жою", editor_no_sensors: "EPG сенсорлары табылмады. What's On TV интеграциясын қосыңыз.", color_orange: "Қызғылт сары", color_ha_blue: "HA Көк", color_cyan: "Көгілдір", color_yellow: "Сары", color_green: "Жасыл", color_pink: "Қызғылт", color_purple: "Күлгін", color_red: "Қызыл", default_title: "ТВ бағдарлама", no_data: "Мәлімет жоқ", unavailable: "Қолжетімсіз", no_sensors: "EPG сенсорлары табылмады.", up_next_label: "Келесі", now_badge: "ҚАЗІР", no_schedule: "Кесте жоқ", close: "Жабу", tab_search: "🔍 Іздеу", tab_watches: "⭐ Сақталған", search_placeholder: "Бағдарламаны іздеу...", match_contains: "Қамтиды", match_exact: "Дәлме-дәл", btn_search: "Іздеу", hint_search: "Тақырыпты енгізіп, Іздеу түймесін басыңыз.", no_results: "Нәтиже жоқ", results_suffix_one: "нәтиже", results_suffix_many: "нәтиже", btn_notify_now: "📨 Қазір хабарлау", btn_sending: "Жіберілуде...", btn_sent: "✓ Жіберілді", notify_title_prefix: "📺 EPG бағдарламасы", watches_title: "⭐ Сақталған іздеулер", watches_hint: "Кілт сөздерді қосыңыз. Бағдарлама таңдалған уақытта EPG-де пайда болғанда, сізге автоматты хабарлама келеді.", watches_label: "Белсенді сақталған іздеулер", watch_placeholder: "Мысалы: Champions, Dune, Alone...", watch_notify_label: "Хабарлау жолы", watch_hours_label: "Алдын ала ескерту", watch_1h: "1 сағат бұрын", watch_2h: "2 сағат бұрын", watch_6h: "6 сағат бұрын", watch_12h: "12 сағат бұрын", watch_24h: "24 сағат бұрын", watch_48h: "48 сағат бұрын", btn_save_watch: "⭐ Іздеуді сақтау", no_watches: "Сақталған іздеулер жоқ.", watch_meta_notify: "хабарлау", watch_meta_before: "ескертулер", watch_meta_before_suffix: "сағ бұрын", error_no_keyword: "Кілт сөзді енгізіңіз.", error_no_service: "Хабарландыру қызметін таңдаңыз.", error_no_service_found: "Қызметтер табылмады", error_loading: "Қызметтер жүктелуде...", error_send: "Қате:", confirm_delete_watch: "Бұл сақталған іздеуді жою керек пе?"},
  ko: {editor_title: "카드 제목", editor_theme: "테마", editor_theme_dark: "🌙 다크", editor_theme_light: "☀️ 라이트", editor_accent: "주요 색상", editor_color_picker: "색상 선택기", editor_color_custom: "사용자 지정 색상 (HEX 또는 RGB)", editor_color_placeholder: "#fa1a00 또는 200,100,0", editor_columns: "열 (2–6)", editor_channels: "채널 — ⠿를 드래그하여 순서 변경", editor_drag_hint: "⠿ 드래그 · 제거", editor_no_sensors: "EPG 센서가 감지되지 않았습니다. What's On TV 통합을 활성화하세요.", color_orange: "오렌지", color_ha_blue: "HA 블루", color_cyan: "시안", color_yellow: "노랑", color_green: "초록", color_pink: "분홍", color_purple: "보라", color_red: "빨강", default_title: "TV 가이드", no_data: "데이터 없음", unavailable: "사용 불가", no_sensors: "EPG 센서를 찾을 수 없습니다.", up_next_label: "다음 프로그램", now_badge: "현재", no_schedule: "편성표 정보 없음", close: "닫기", tab_search: "🔍 검색", tab_watches: "⭐ 저장됨", search_placeholder: "프로그램 검색...", match_contains: "포함", match_exact: "일치", btn_search: "검색", hint_search: "제목을 입력하고 검색을 누르세요.", no_results: "결과 없음:", results_suffix_one: "개 결과", results_suffix_many: "개 결과", btn_notify_now: "📨 지금 알림 받기", btn_sending: "전송 중...", btn_sent: "✓ 전송됨", notify_title_prefix: "📺 프로그램 EPG", watches_title: "⭐ 저장된 검색어", watches_hint: "키워드를 추가하세요. 선택한 시간 내에 프로그램이 EPG에 나타나면 자동 알림을 보냅니다.", watches_label: "활성 저장된 검색", watch_placeholder: "예: Champions, Dune, Alone...", watch_notify_label: "알림 채널", watch_hours_label: "알림 시간", watch_1h: "1시간 전", watch_2h: "2시간 전", watch_6h: "6시간 전", watch_12h: "12시간 전", watch_24h: "24시간 전", watch_48h: "48시간 전", btn_save_watch: "⭐ 검색어 저장", no_watches: "저장된 검색어가 없습니다.", watch_meta_notify: "알림", watch_meta_before: "경고", watch_meta_before_suffix: "시간 전", error_no_keyword: "키워드를 입력하세요.", error_no_service: "알림 서비스를 선택하세요.", error_no_service_found: "알림 서비스 없음", error_loading: "서비스 로드 중...", error_send: "오류:", confirm_delete_watch: "이 저장된 검색어를 삭제하시겠습니까?"},
  lt: {editor_title: "Kortelės pavadinimas", editor_theme: "Tema", editor_theme_dark: "🌙 Tamsi", editor_theme_light: "☀️ Šviesi", editor_accent: "Pagrindinis spalvas", editor_color_picker: "Spalvos pasirinkimas", editor_color_custom: "Pasirinktine spalva (HEX arba RGB)", editor_color_placeholder: "#fa1a00 arba 200,100,0", editor_columns: "Stulpeliai (2–6)", editor_channels: "Kanalai — vilkite ⡀, kad pakeistumėte tvarką", editor_drag_hint: "⡀ Vilkti · Pašalinti", editor_no_sensors: "EPG jutiklių neaptikta. Įjunkite „What's On TV“ integracija.", color_orange: "Oranžinė", color_ha_blue: "HA Mėlyna", color_cyan: "Žydra", color_yellow: "Geltona", color_green: "Žalia", color_pink: "Rožinė", color_purple: "Violotinė", color_red: "Raudona", default_title: "TV Gidas", no_data: "Nėra duomenų", unavailable: "Nepasiekiama", no_sensors: "EPG jutiklių nerasta.", up_next_label: "Toliau", now_badge: "DABAR", no_schedule: "Programa neprieinama", close: "Uždaryti", tab_search: "🔍 Paieška", tab_watches: "⭐ Išsaugota", search_placeholder: "Ieškoti programos...", match_contains: "Yra", match_exact: "Tiksliai", btn_search: "Ieškoti", hint_search: "Iveskite pavadinimą ir paspauskite Ieškoti.", no_results: "Rezultatų nėra", results_suffix_one: "rezultatas", results_suffix_many: "rezultatų", btn_notify_now: "📨 Pranešti man dabar", btn_sending: "Siunčiama...", btn_sent: "✓ Išsiųsta", notify_title_prefix: "📺 Programos EPG", watches_title: "⭐ Išsaugotos paieškos", watches_hint: "Pridėkite raktažodžius. Kai programa pasirodys EPG per pasirinkta laika, gausite automatinį pranešimą.", watches_label: "Aktyvios išsaugotos paieškos", watch_placeholder: "Pvz: Champions, Dune, Alone...", watch_notify_label: "Pranešti per", watch_hours_label: "Ispėti prieš", watch_1h: "prieš 1 val.", watch_2h: "prieš 2 val.", watch_6h: "prieš 6 val.", watch_12h: "prieš 12 val.", watch_24h: "prieš 24 val.", watch_48h: "prieš 48 val.", btn_save_watch: "⭐ Išsaugoti paiešką", no_watches: "Išsaugotų paieškų dar nėra.", watch_meta_notify: "pranešti", watch_meta_before: "ispėjimai", watch_meta_before_suffix: "val. prieš", error_no_keyword: "Iveskite raktažodį.", error_no_service: "Pasirinkite pranešimų paslaugą.", error_no_service_found: "Pranešimų paslaugų nerasta", error_loading: "Ikeliamos paslaugos...", error_send: "Klaida:", confirm_delete_watch: "Ištrinti šią išsaugotą paiešką?"},
  lv: {editor_title: "Kartītes virsraksts", editor_theme: "Tēma", editor_theme_dark: "🌙 Tumšā", editor_theme_light: "☀️ Gaišā", editor_accent: "Galvenā krāsa", editor_color_picker: "Krāsu izvēle", editor_color_custom: "Pielāgota krāsa (HEX vai RGB)", editor_color_placeholder: "#fa1a00 vai 200,100,0", editor_columns: "Kolonnas (2–6)", editor_channels: "Kanāli — velciet ⠿, lai mainītu secību", editor_drag_hint: "⠿ Vilkt · Noņemt", editor_no_sensors: "EPG sensori nav atrasti. Iespējojiet What's On TV integrāciju.", color_orange: "Oranžs", color_ha_blue: "HA Zils", color_cyan: "Ciāna", color_yellow: "Dzeltens", color_green: "Zaļš", color_pink: "Rozā", color_purple: "Violets", color_red: "Sarkans", default_title: "TV Programma", no_data: "Nav datu", unavailable: "Nav pieejams", no_sensors: "EPG sensori nav atrasti.", up_next_label: "Nākamais", now_badge: "TAGAD", no_schedule: "Programma nav pieejama", close: "Aizvērt", tab_search: "🔍 Meklēt", tab_watches: "⭐ Saglabātie", search_placeholder: "Meklēt raidījumu...", match_contains: "Satur", match_exact: "Precīzi", btn_search: "Meklēt", hint_search: "Ievadiet nosaukumu un nospiediet Meklēt.", no_results: "Nav rezultātu", results_suffix_one: "rezultāts", results_suffix_many: "rezultāti", btn_notify_now: "📨 Paziņot man tagad", btn_sending: "Sūta...", btn_sent: "✓ Nosūtīts", notify_title_prefix: "📺 Programmas EPG", watches_title: "⭐ Saglabātie meklējumi", watches_hint: "Pievienojiet atslēgvārdus. Kad raidījums parādīsies EPG izvēlētajā laikā, jūs saņemsiet automātisku paziņojumu.", watches_label: "Aktīvie saglabātie meklējumi", watch_placeholder: "Piem: Champions, Dune, Alone...", watch_notify_label: "Paziņot caur", watch_hours_label: "Brīdināt pirms", watch_1h: "1 stundu pirms", watch_2h: "2 stundas pirms", watch_6h: "6 stundas pirms", watch_12h: "12 stundas pirms", watch_24h: "24 stundas pirms", watch_48h: "48 stundas pirms", btn_save_watch: "⭐ Saglabāt meklēšanu", no_watches: "Vēl nav saglabātu meklējumu.", watch_meta_notify: "paziņot", watch_meta_before: "brīdinājumi", watch_meta_before_suffix: "st. pirms", error_no_keyword: "Ievadiet atslēgvārdu.", error_no_service: "Izvēlieties paziņojumu pakalpojumu.", error_no_service_found: "Paziņojumu pakalpojumi nav atrasti", error_loading: "Ielādē pakalpojumus...", error_send: "Kļūda:", confirm_delete_watch: "Dzēst šo saglabāto meklējumu?"},
  nl: {editor_title: "Kaarttitel", editor_theme: "Thema", editor_theme_dark: "🌙 Donker", editor_theme_light: "☀️ Licht", editor_accent: "Hoofdkleur", editor_color_picker: "Kleurenkiezer", editor_color_custom: "Aangepaste kleur (HEX of RGB)", editor_color_placeholder: "#fa1a00 of 200,100,0", editor_columns: "Kolommen (2–6)", editor_channels: "Kanalen — sleep ⠿ om te herordenen", editor_drag_hint: "⠿ Sleep · Verwijder", editor_no_sensors: "Geen EPG-sensoren gedetecteerd. Schakel de What's On TV-integratie in.", color_orange: "Oranje", color_ha_blue: "HA Blauw", color_cyan: "Cyaan", color_yellow: "Geel", color_green: "Groen", color_pink: "Roze", color_purple: "Paars", color_red: "Rood", default_title: "TV-gids", no_data: "Geen gegevens", unavailable: "Niet beschikbaar", no_sensors: "Geen EPG-sensoren gevonden.", up_next_label: "Hierna", now_badge: "NU", no_schedule: "Geen schema beschikbaar", close: "Sluiten", tab_search: "🔍 Zoeken", tab_watches: "⭐ Opgeslagen", search_placeholder: "Zoek programma...", match_contains: "Bevat", match_exact: "Exact", btn_search: "Zoeken", hint_search: "Typ de titel en druk op Zoeken.", no_results: "Geen resultaten voor", results_suffix_one: "resultaat", results_suffix_many: "resultaten", btn_notify_now: "📨 Breng me nu op de hoogte", btn_sending: "Verzenden...", btn_sent: "✓ Verzonden", notify_title_prefix: "📺 Programma EPG", watches_title: "⭐ Opgeslagen zoekopdrachten", watches_hint: "Voeg trefwoorden toe. Wanneer het programma in de EPG verschijnt binnen het geselecteerde tijdsvenster, ontvang je een automatische melding.", watches_label: "Opgeslagen zoekopdrachten actief", watch_placeholder: "Bijv: Champions, Dune, Alone...", watch_notify_label: "Meld via", watch_hours_label: "Waarschuw vooraf", watch_1h: "1u van tevoren", watch_2h: "2u van tevoren", watch_6h: "6u van tevoren", watch_12h: "12u van tevoren", watch_24h: "24u van tevoren", watch_48h: "48u van tevoren", btn_save_watch: "⭐ Zoekopdracht opslaan", no_watches: "Nog geen opgeslagen zoekopdrachten.", watch_meta_notify: "melden", watch_meta_before: "waarschuwingen", watch_meta_before_suffix: "u van tevoren", error_no_keyword: "Voer een trefwoord in.", error_no_service: "Selecteer een meldingsdienst.", error_no_service_found: "Geen meldingsdiensten", error_loading: "Diensten laden...", error_send: "Fout:", confirm_delete_watch: "Deze zoekopdracht verwijderen?"},
  no: {editor_title: "Korttittel", editor_theme: "Tema", editor_theme_dark: "🌙 Mørk", editor_theme_light: "☀️ Lys", editor_accent: "Hovedfarge", editor_color_picker: "Fargevelger", editor_color_custom: "Egendefinert farge (HEX eller RGB)", editor_color_placeholder: "#fa1a00 eller 200,100,0", editor_columns: "Kolonner (2–6)", editor_channels: "Kanaler — dra ⠿ for å endre rekkefølge", editor_drag_hint: "⠿ Dra · Fjern", editor_no_sensors: "Ingen EPG-sensorer funnet. Aktiver What's On TV-integrasjonen.", color_orange: "Oransje", color_ha_blue: "HA Blå", color_cyan: "Cyan", color_yellow: "Gul", color_green: "Grønn", color_pink: "Rosa", color_purple: "Lilla", color_red: "Rød", default_title: "TV-guide", no_data: "Ingen data", unavailable: "Utilgjengelig", no_sensors: "Ingen EPG-sensorer funnet.", up_next_label: "Neste", now_badge: "NÅ", no_schedule: "Ingen programoversikt tilgjengelig", close: "Lukk", tab_search: "🔍 Søk", tab_watches: "⭐ Lagret", search_placeholder: "Søk etter program...", match_contains: "Inneholder", match_exact: "Eksakt", btn_search: "Søk", hint_search: "Skriv tittelen og trykk Søk.", no_results: "Ingen resultater for", results_suffix_one: "resultat", results_suffix_many: "resultater", btn_notify_now: "📨 Varsle meg nå", btn_sending: "Sender...", btn_sent: "✓ Sendt", notify_title_prefix: "📺 Program-EPG", watches_title: "⭐ Lagrede søk", watches_hint: "Legg til søkeord. Når programmet dukker opp i EPG innen det valgte tidsvinduet, vil du motta et automatisk varsel.", watches_label: "Aktive lagrede søk", watch_placeholder: "F.eks: Champions, Dune, Alone...", watch_notify_label: "Varsle med", watch_hours_label: "Varsle før", watch_1h: "1t før", watch_2h: "2t før", watch_6h: "6t før", watch_12h: "12t før", watch_24h: "24t før", watch_48h: "48t før", btn_save_watch: "⭐ Lagre søk", no_watches: "Ingen lagrede søk ennå.", watch_meta_notify: "varsle", watch_meta_before: "varsler", watch_meta_before_suffix: "t før", error_no_keyword: "Skriv inn et søkeord.", error_no_service: "Velg en varslingstjeneste.", error_no_service_found: "Ingen varslingstjenester funnet", error_loading: "Laster tjenester...", error_send: "Feil:", confirm_delete_watch: "Slett dette lagrede søket?"},
  oc: {editor_title: "Títol de la carta", editor_theme: "Tèma", editor_theme_dark: "🌙 Escur", editor_theme_light: "☀️ Clar", editor_accent: "Color principala", editor_color_picker: "Selector de color", editor_color_custom: "Color personalizada (HEX o RGB)", editor_color_placeholder: "#fa1a00 o 200,100,0", editor_columns: "Colomnas (2–6)", editor_channels: "Canals — lisatz ⠿ per ordenar", editor_drag_hint: "⠿ Lisar · Suprimir", editor_no_sensors: "Cap de captador EPG pas trobat. Activatz l'integracion What's On TV.", color_orange: "Irange", color_ha_blue: "Blau HA", color_cyan: "Cian", color_yellow: "Gaug", color_green: "Verd", color_pink: "Ròsa", color_purple: "Violet", color_red: "Roge", default_title: "Guida TV", no_data: "Cap de donada", unavailable: "Indisponibla", no_sensors: "Cap de captador EPG pas trobat.", up_next_label: "Seguida", now_badge: "ARA", no_schedule: "Cap de programa pas disponible", close: "Tampar", tab_search: "🔍 Cercar", tab_watches: "⭐ Salvat", search_placeholder: "Cercar un programa...", match_contains: "Conten", match_exact: "Exacte", btn_search: "Cercar", hint_search: "Picatz un títol e quichatz sus Cercar.", no_results: "Cap de resultat per", results_suffix_one: "resultat", results_suffix_many: "resultats", btn_notify_now: "📨 Me notificar ara", btn_sending: "Mandadís en cors...", btn_sent: "✓ Mandat", notify_title_prefix: "📺 Programa EPG", watches_title: "⭐ Recèrcas salvadas", watches_hint: "Apondètz de mots claus. Quand un programa apareis dins l'EPG dins lo relais causit, recebretz una notificacion automatica.", watches_label: "Recèrcas salvadas activas", watch_placeholder: "Ex: Champions, Dune, Alone...", watch_notify_label: "Notificar per", watch_hours_label: "Avertir abans", watch_1h: "1 ora abans", watch_2h: "2 oras abans", watch_6h: "6 oras abans", watch_12h: "12 oras abans", watch_24h: "24 oras abans", watch_48h: "48 oras abans", btn_save_watch: "⭐ Salvar la recèrca", no_watches: "Cap de recèrca salvada pel moment.", watch_meta_notify: "notificar", watch_meta_before: "alèrtas", watch_meta_before_suffix: "h abans", error_no_keyword: "Picatz un mot clau.", error_no_service: "Causissètz un servici de notificacion.", error_no_service_found: "Cap de servici pas trobat", error_loading: "Cargament dels servicis...", error_send: "Error :", confirm_delete_watch: "Suprimir aquesta recèrca salvada ?"},
  pl: {editor_title: "Tytuł karty", editor_theme: "Motyw", editor_theme_dark: "🌙 Ciemny", editor_theme_light: "☀️ Jasny", editor_accent: "Główny kolor", editor_color_picker: "Wybór koloru", editor_color_custom: "Własny kolor (HEX lub RGB)", editor_color_placeholder: "#fa1a00 lub 200,100,0", editor_columns: "Kolumny (2–6)", editor_channels: "Kanały — przeciągnij ⠿, aby zmienić kolejność", editor_drag_hint: "⠿ Przeciągnij · Usuń", editor_no_sensors: "Nie wykryto czujników EPG. Włącz integrację What's On TV.", color_orange: "Pomarańczowy", color_ha_blue: "Niebieski HA", color_cyan: "Cyjan", color_yellow: "Żółty", color_green: "Zielony", color_pink: "Różowy", color_purple: "Fioletowy", color_red: "Czerwony", default_title: "Program TV", no_data: "Brak danych", unavailable: "Niedostępny", no_sensors: "Nie znaleziono czujników EPG.", up_next_label: "Następnie", now_badge: "TERAZ", no_schedule: "Brak dostępnego programu", close: "Zamknij", tab_search: "🔍 Szukaj", tab_watches: "⭐ Zapisane", search_placeholder: "Szukaj programu...", match_contains: "Zawiera", match_exact: "Dokładne", btn_search: "Szukaj", hint_search: "Wpisz tytuł i naciśnij Szukaj.", no_results: "Brak wyników dla", results_suffix_one: "wynik", results_suffix_many: "wyniki", btn_notify_now: "📨 Powiadom mnie teraz", btn_sending: "Wysyłanie...", btn_sent: "✓ Wysłano", notify_title_prefix: "📺 Program EPG", watches_title: "⭐ Zapisane wyszukiwania", watches_hint: "Dodaj słowa kluczowe. Gdy program pojawi się w EPG w wybranym oknie czasowym, otrzymasz automatyczne powiadomienie.", watches_label: "Aktywne zapisane wyszukiwania", watch_placeholder: "Np: Champions, Duna, Alone...", watch_notify_label: "Powiadom przez", watch_hours_label: "Alert przed", watch_1h: "1h przed", watch_2h: "2h przed", watch_6h: "6h przed", watch_12h: "12h przed", watch_24h: "24h przed", watch_48h: "48h przed", btn_save_watch: "⭐ Zapisz wyszukiwanie", no_watches: "Brak zapisanych wyszukiwań.", watch_meta_notify: "powiadom", watch_meta_before: "alerty", watch_meta_before_suffix: "h przed", error_no_keyword: "Wpisz słowo kluczowe.", error_no_service: "Wybierz usługę powiadomień.", error_no_service_found: "Brak usług powiadomień", error_loading: "Ładowanie usług...", error_send: "Błąd:", confirm_delete_watch: "Usunąć to zapisane wyszukiwanie?"},
  pt: {editor_title: "Título do cartão", editor_theme: "Tema", editor_theme_dark: "🌙 Escuro", editor_theme_light: "☀️ Claro", editor_accent: "Cor principal", editor_color_picker: "Seletor de cores", editor_color_custom: "Cor personalizada (HEX ou RGB)", editor_color_placeholder: "#fa1a00 ou 200,100,0", editor_columns: "Colunas (2–6)", editor_channels: "Canais — arraste ⠿ para reordenar", editor_drag_hint: "⠿ Arrastar · Remover", editor_no_sensors: "Nenhum sensor EPG detetado. Ative a integração What's On TV.", color_orange: "Laranja", color_ha_blue: "Azul HA", color_cyan: "Ciano", color_yellow: "Amarelo", color_green: "Verde", color_pink: "Rosa", color_purple: "Roxo", color_red: "Vermelho", default_title: "Guia TV", no_data: "Sem dados", unavailable: "Indisponível", no_sensors: "Nenhum sensor EPG encontrado.", up_next_label: "A seguir", now_badge: "AGORA", no_schedule: "Nenhuma programação disponível", close: "Fechar", tab_search: "🔍 Pesquisar", tab_watches: "⭐ Guardados", search_placeholder: "Pesquisar programa...", match_contains: "Contém", match_exact: "Exato", btn_search: "Pesquisar", hint_search: "Digite o título e prima Pesquisar.", no_results: "Sem resultados para", results_suffix_one: "resultado", results_suffix_many: "resultados", btn_notify_now: "📨 Notificar-me agora", btn_sending: "A enviar...", btn_sent: "✓ Enviado", notify_title_prefix: "📺 Programa EPG", watches_title: "⭐ Pesquisas guardadas", watches_hint: "Adicione palavras-chave. Quando o programa aparecer no EPG dentro da janela de tempo selecionada, receberá uma notificação automática.", watches_label: "Pesquisas guardadas ativas", watch_placeholder: "Ex: Champions, Dune, Alone...", watch_notify_label: "Notificar com", watch_hours_label: "Avisar antes", watch_1h: "1h antes", watch_2h: "2h antes", watch_6h: "6h antes", watch_12h: "12h antes", watch_24h: "24h antes", watch_48h: "48h antes", btn_save_watch: "⭐ Guardar pesquisa", no_watches: "Ainda não existem pesquisas guardadas.", watch_meta_notify: "notificar", watch_meta_before: "avisos", watch_meta_before_suffix: "h antes", error_no_keyword: "Introduza uma palavra-chave.", error_no_service: "Selecione um serviço de notificação.", error_no_service_found: "Sem serviços de notificação", error_loading: "A carregar serviços...", error_send: "Erro:", confirm_delete_watch: "Eliminar esta pesquisa guardada?"},
  ro: {editor_title: "Titlu card", editor_theme: "Temă", editor_theme_dark: "🌙 Întunecat", editor_theme_light: "☀️ Luminos", editor_accent: "Culoare principală", editor_color_picker: "Selector de culori", editor_color_custom: "Culoare personalizată (HEX sau RGB)", editor_color_placeholder: "#fa1a00 sau 200,100,0", editor_columns: "Coloane (2–6)", editor_channels: "Canale — trageți ⠿ pentru a reordona", editor_drag_hint: "⠿ Trageți · Eliminați", editor_no_sensors: "Nu au fost detectați senzori EPG. Activați integrarea What's On TV.", color_orange: "Portocaliu", color_ha_blue: "Albastru HA", color_cyan: "Cian", color_yellow: "Galben", color_green: "Verde", color_pink: "Roz", color_purple: "Violet", color_red: "Roșu", default_title: "Ghid TV", no_data: "Nu există date", unavailable: "Indisponibil", no_sensors: "Nu s-au găsit senzori EPG.", up_next_label: "Urmează", now_badge: "ACUM", no_schedule: "Niciun program disponibil", close: "Închide", tab_search: "🔍 Căutare", tab_watches: "⭐ Salvate", search_placeholder: "Căutați program...", match_contains: "Conține", match_exact: "Exact", btn_search: "Căutare", hint_search: "Introduceți titlul și apăsați Căutare.", no_results: "Niciun rezultat pentru", results_suffix_one: "rezultat", results_suffix_many: "rezultate", btn_notify_now: "📨 Notifică-mă acum", btn_sending: "Se trimite...", btn_sent: "✓ Trimis", notify_title_prefix: "📺 Program EPG", watches_title: "⭐ Căutări salvate", watches_hint: "Adăugați cuvinte cheie. Când programul apare în EPG în intervalul de timp selectat, veți primi o notificare automată.", watches_label: "Căutări salvate active", watch_placeholder: "Ex: Champions, Dune, Alone...", watch_notify_label: "Notifică prin", watch_hours_label: "Alertă înainte cu", watch_1h: "1h înainte", watch_2h: "2h înainte", watch_6h: "6h înainte", watch_12h: "12h înainte", watch_24h: "24h înainte", watch_48h: "48h înainte", btn_save_watch: "⭐ Salvează căutarea", no_watches: "Nicio căutare salvată încă.", watch_meta_notify: "notifică", watch_meta_before: "alerte", watch_meta_before_suffix: "h înainte", error_no_keyword: "Introduceți un cuvânt cheie.", error_no_service: "Selectați un serviciu de notificare.", error_no_service_found: "Nu s-au găsit servicii de notificare", error_loading: "Se încarcă serviciile...", error_send: "Eroare:", confirm_delete_watch: "Ștergeți această căutare salvată?"},
  ru: {editor_title: "Заголовок карточки", editor_theme: "Тема", editor_theme_dark: "🌙 Темная", editor_theme_light: "☀️ Светлая", editor_accent: "Основной цвет", editor_color_picker: "Выбор цвета", editor_color_custom: "Пользовательский цвет (HEX или RGB)", editor_color_placeholder: "#fa1a00 или 200,100,0", editor_columns: "Колонки (2–6)", editor_channels: "Каналы — перетащите ⠿ для изменения порядка", editor_drag_hint: "⠿ Перетащить · Удалить", editor_no_sensors: "Датчики EPG не обнаружены. Включите интеграцию What's On TV.", color_orange: "Оранжевый", color_ha_blue: "HA Синий", color_cyan: "Циан", color_yellow: "Желтый", color_green: "Зеленый", color_pink: "Розовый", color_purple: "Фиолетовый", color_red: "Красный", default_title: "Телегид", no_data: "Нет данных", unavailable: "Недоступно", no_sensors: "Датчики EPG не найдены.", up_next_label: "Далее", now_badge: "СЕЙЧАС", no_schedule: "Расписание отсутствует", close: "Закрыть", tab_search: "🔍 Поиск", tab_watches: "⭐ Сохранено", search_placeholder: "Поиск программы...", match_contains: "Содержит", match_exact: "Точно", btn_search: "Искать", hint_search: "Введите название и нажмите Искать.", no_results: "Нет результатов для", results_suffix_one: "результат", results_suffix_many: "результатов", btn_notify_now: "📨 Уведомить сейчас", btn_sending: "Отправка...", btn_sent: "✓ Отправлено", notify_title_prefix: "📺 Программа EPG", watches_title: "⭐ Сохраненные поиски", watches_hint: "Добавьте ключевые слова. Когда программа появится в EPG в выбранном временном окне, вы получите автоматическое уведомление.", watches_label: "Активные сохраненные поиски", watch_placeholder: "Напр: Champions, Dune, Alone...", watch_notify_label: "Уведомить через", watch_hours_label: "Оповестить за", watch_1h: "за 1ч", watch_2h: "за 2ч", watch_6h: "за 6ч", watch_12h: "за 12ч", watch_24h: "за 24ч", watch_48h: "за 48ч", btn_save_watch: "⭐ Сохранить поиск", no_watches: "Сохраненных поисков пока нет.", watch_meta_notify: "уведомить", watch_meta_before: "оповещения", watch_meta_before_suffix: "ч до начала", error_no_keyword: "Введите ключевое слово.", error_no_service: "Выберите службу уведомлений.", error_no_service_found: "Службы уведомлений не найдены", error_loading: "Загрузка служб...", error_send: "Ошибка:", confirm_delete_watch: "Удалить этот поиск?"},
  sk: {editor_title: "Názov karty", editor_theme: "Motív", editor_theme_dark: "🌙 Tmavý", editor_theme_light: "☀️ Svetlý", editor_accent: "Hlavná farba", editor_color_picker: "Výber farby", editor_color_custom: "Vlastná farba (HEX alebo RGB)", editor_color_placeholder: "#fa1a00 alebo 200,100,0", editor_columns: "Stĺpce (2–6)", editor_channels: "Kanály — potiahnutím ⠿ zmeníte poradie", editor_drag_hint: "⠿ Potiahnuť · Odstrániť", editor_no_sensors: "Neboli detegované žiadne EPG senzory. Povolte integráciu What's On TV.", color_orange: "Oranžová", color_ha_blue: "HA Modrá", color_cyan: "Azúrová", color_yellow: "Žltá", color_green: "Zelená", color_pink: "Ružová", color_purple: "Fialová", color_red: "Červená", default_title: "TV Program", no_data: "Žiadne údaje", unavailable: "Nedostupné", no_sensors: "Nenašli sa žiadne EPG senzory.", up_next_label: "Nasleduje", now_badge: "TERAZ", no_schedule: "Program nie je k dispozícii", close: "Zavrieť", tab_search: "🔍 Hľadať", tab_watches: "⭐ Uložené", search_placeholder: "Hľadať program...", match_contains: "Obsahuje", match_exact: "Presná zhoda", btn_search: "Hľadať", hint_search: "Zadajte názov a stlačte Hľadať.", no_results: "Žiadne výsledky pre", results_suffix_one: "výsledok", results_suffix_many: "výsledkov", btn_notify_now: "📨 Upozorniť teraz", btn_sending: "Odosiela sa...", btn_sent: "✓ Odoslané", notify_title_prefix: "📺 Program EPG", watches_title: "⭐ Uložené hľadania", watches_hint: "Pridajte kľúčové slová. Keď sa program objaví v EPG vo zvolenom časovom okne, dostanete automatické upozornenie.", watches_label: "Aktívne uložené hľadania", watch_placeholder: "Napr: Champions, Dune, Alone...", watch_notify_label: "Upozorniť cez", watch_hours_label: "Upozorniť vopred", watch_1h: "1h vopred", watch_2h: "2h vopred", watch_6h: "6h vopred", watch_12h: "12h vopred", watch_24h: "24h vopred", watch_48h: "48h vopred", btn_save_watch: "⭐ Uložiť hľadanie", no_watches: "Zatiaľ žiadne uložené hľadania.", watch_meta_notify: "upozorniť", watch_meta_before: "upozornenia", watch_meta_before_suffix: "h vopred", error_no_keyword: "Zadajte kľúčové slovo.", error_no_service: "Vyberte notifikačnú službu.", error_no_service_found: "Nenašli sa notifikačné služby", error_loading: "Načítavanie služieb...", error_send: "Chyba:", confirm_delete_watch: "Zmazať toto uložené hľadanie?"},
  sl: {editor_title: "Naslov kartice", editor_theme: "Tema", editor_theme_dark: "🌙 Temna", editor_theme_light: "☀️ Svetla", editor_accent: "Glavna barva", editor_color_picker: "Izbirnik barv", editor_color_custom: "Barva po meri (HEX ali RGB)", editor_color_placeholder: "#fa1a00 ali 200,100,0", editor_columns: "Stolpci (2–6)", editor_channels: "Kanali — povlecite ⠿ za vrstni red", editor_drag_hint: "⠿ Povleci · Odstrani", editor_no_sensors: "Senzorji EPG niso bili zaznani. Omogočite integracijo What's On TV.", color_orange: "Oranžna", color_ha_blue: "HA Modra", color_cyan: "Cian", color_yellow: "Rumena", color_green: "Zelena", color_pink: "Rožnata", color_purple: "Vijolična", color_red: "Rdeča", default_title: "TV Spored", no_data: "Ni podatkov", unavailable: "Ni na voljo", no_sensors: "Senzorjev EPG ni mogoče najti.", up_next_label: "Naslednje", now_badge: "ZDAJ", no_schedule: "Spored ni na voljo", close: "Zapri", tab_search: "🔍 Iskanje", tab_watches: "⭐ Shranjeno", search_placeholder: "Išči oddajo...", match_contains: "Vsebuje", match_exact: "Natančno", btn_search: "Išči", hint_search: "Vnesite naslov in pritisnite Iskanje.", no_results: "Ni rezultatov za", results_suffix_one: "rezultat", results_suffix_many: "rezultatov", btn_notify_now: "📨 Obvesti me zdaj", btn_sending: "Pošiljanje...", btn_sent: "✓ Poslano", notify_title_prefix: "📺 Spored EPG", watches_title: "⭐ Shranjena iskanja", watches_hint: "Dodajte ključne besede. Ko se oddaja pojavi v EPG v izbranem časovnem oknu, boste prejeli samodejno obvestilo.", watches_label: "Aktivna shranjena iskanja", watch_placeholder: "Npr: Champions, Dune, Alone...", watch_notify_label: "Obvesti prek", watch_hours_label: "Opozori prej", watch_1h: "1 uro prej", watch_2h: "2 uri prej", watch_6h: "6 ur prej", watch_12h: "12 ur prej", watch_24h: "24 ur prej", watch_48h: "48 ur prej", btn_save_watch: "⭐ Shrani iskanje", no_watches: "Ni še shranjenih iskanj.", watch_meta_notify: "obvesti", watch_meta_before: "opozorila", watch_meta_before_suffix: "ur prej", error_no_keyword: "Vnesite ključno besedo.", error_no_service: "Izberite storitev obveščanja.", error_no_service_found: "Ni storitev obveščanja", error_loading: "Nalaganje storitev...", error_send: "Napaka:", confirm_delete_watch: "Izbrišem to shranjeno iskanje?"},
  sq: {editor_title: "Titulli i Kartës", editor_theme: "Tema", editor_theme_dark: "🌙 Errët", editor_theme_light: "☀️ Dritë", editor_accent: "Ngjyra Kryesore", editor_color_picker: "Zgjedhësi i Ngjyrave", editor_color_custom: "Ngjyrë e Personalizuar (HEX ose RGB)", editor_color_placeholder: "#fa1a00 ose 200,100,0", editor_columns: "Kolonat (2–6)", editor_channels: "Kanalet — tërhiqni ⠿ për renditje", editor_drag_hint: "⠿ Tërhiq · Hiq", editor_no_sensors: "Nuk u gjetën sensorë EPG. Aktivizoni integrimin What's On TV.", color_orange: "Portokalli", color_ha_blue: "HA Blu", color_cyan: "Cian", color_yellow: "Verdhë", color_green: "Gjelbër", color_pink: "Rozë", color_purple: "Vjollcë", color_red: "Kuqe", default_title: "Udhëzuesi TV", no_data: "Nuk ka të dhëna", unavailable: "I padisponueshëm", no_sensors: "Nuk u gjetën sensorë EPG.", up_next_label: "Më pas", now_badge: "TANI", no_schedule: "Nuk ka orar të disponueshëm", close: "Mbyll", tab_search: "🔍 Kërko", tab_watches: "⭐ Ruajtur", search_placeholder: "Kërko programin...", match_contains: "Përmban", match_exact: "E saktë", btn_search: "Kërko", hint_search: "Shkruani titullin dhe shtypni Kërko.", no_results: "Asnjë rezultat për", results_suffix_one: "rezultat", results_suffix_many: "rezultate", btn_notify_now: "📨 Më njofto tani", btn_sending: "Duke u dërguar...", btn_sent: "✓ U dërgua", notify_title_prefix: "📺 Programi EPG", watches_title: "⭐ Kërkimet e Ruajtura", watches_hint: "Shtoni fjalë kyçe. Kur programi shfaqet në EPG brenda dritares kohore, do të merrni njoftim automatik.", watches_label: "Kërkimet e ruajtura aktive", watch_placeholder: "Psh: Champions, Dune, Alone...", watch_notify_label: "Njofto me", watch_hours_label: "Paralajmëro para", watch_1h: "1 orë para", watch_2h: "2 orë para", watch_6h: "6 orë para", watch_12h: "12 orë para", watch_24h: "24 orë para", watch_48h: "48 orë para", btn_save_watch: "⭐ Ruaj kërkimin", no_watches: "Ende nuk ka kërkime të ruajtura.", watch_meta_notify: "njofto", watch_meta_before: "paralajmërim", watch_meta_before_suffix: "orë para", error_no_keyword: "Shkruani një fjalë kyçe.", error_no_service: "Zgjidhni një shërbim njoftimi.", error_no_service_found: "Nuk u gjetën shërbime", error_loading: "Duke ngarkuar shërbimet...", error_send: "Gabim:", confirm_delete_watch: "Fshini këtë kërkim të ruajtur?"},
  sr: {editor_title: "Naslov kartice", editor_theme: "Tema", editor_theme_dark: "🌙 Tamna", editor_theme_light: "☀️ Svetla", editor_accent: "Glavna boja", editor_color_picker: "Birač boja", editor_color_custom: "Prilagođena boja (HEX ili RGB)", editor_color_placeholder: "#fa1a00 ili 200,100,0", editor_columns: "Kolone (2–6)", editor_channels: "Kanali — prevucite ⠿ za promenu redosleda", editor_drag_hint: "⠿ Prevuci · Ukloni", editor_no_sensors: "EPG senzori nisu otkriveni. Omogućite What's On TV integraciju.", color_orange: "Narandžasta", color_ha_blue: "HA Plava", color_cyan: "Cijan", color_yellow: "Žuta", color_green: "Zelena", color_pink: "Ružičasta", color_purple: "Ljubičasta", color_red: "Crvena", default_title: "TV Vodič", no_data: "Nema podataka", unavailable: "Nedostupno", no_sensors: "EPG senzori nisu pronađeni.", up_next_label: "Sledi", now_badge: "SADA", no_schedule: "Raspored nije dostupan", close: "Zatvori", tab_search: "🔍 Pretraga", tab_watches: "⭐ Sačuvano", search_placeholder: "Pretraži program...", match_contains: "Sadrži", match_exact: "Tačno", btn_search: "Traži", hint_search: "Upišite naslov i pritisnite Traži.", no_results: "Nema rezultata za", results_suffix_one: "rezultat", results_suffix_many: "rezultata", btn_notify_now: "📨 Obavesti me sada", btn_sending: "Slanje...", btn_sent: "✓ Poslato", notify_title_prefix: "📺 Program EPG", watches_title: "⭐ Sačuvane pretrage", watches_hint: "Dodajte ključne reči. Kada se program pojavi u EPG-u unutar odabranog vremena, dobićete automatsko obaveštenje.", watches_label: "Aktivne sačuvane pretrage", watch_placeholder: "Npr: Champions, Dune, Alone...", watch_notify_label: "Obavesti putem", watch_hours_label: "Upozori pre", watch_1h: "1 sat pre", watch_2h: "2 sata pre", watch_6h: "6 sati pre", watch_12h: "12 sati pre", watch_24h: "24 sata pre", watch_48h: "48 sati pre", btn_save_watch: "⭐ Sačuvaj pretragu", no_watches: "Još nema sačuvanih pretraga.", watch_meta_notify: "obavesti", watch_meta_before: "upozorenja", watch_meta_before_suffix: "č pre", error_no_keyword: "Unesite ključnu reč.", error_no_service: "Izaberite uslugu obaveštenja.", error_no_service_found: "Usluge nisu pronađene", error_loading: "Učitavanje usluga...", error_send: "Greška:", confirm_delete_watch: "Obrisati ovu sačuvanu pretragu?"},
  sv: {editor_title: "Korttitel", editor_theme: "Tema", editor_theme_dark: "🌙 Mörkt", editor_theme_light: "☀️ Ljust", editor_accent: "Huvudfärg", editor_color_picker: "Färgväljare", editor_color_custom: "Anpassad färg (HEX eller RGB)", editor_color_placeholder: "#fa1a00 eller 200,100,0", editor_columns: "Kolumner (2–6)", editor_channels: "Kanaler — dra ⠿ för att sortera", editor_drag_hint: "⠿ Dra · Ta bort", editor_no_sensors: "Inga EPG-sensorer upptäckta. Aktivera What's On TV-integrationen.", color_orange: "Orange", color_ha_blue: "HA Blå", color_cyan: "Cyan", color_yellow: "Gul", color_green: "Grön", color_pink: "Rosa", color_purple: "Lila", color_red: "Röd", default_title: "TV-tablå", no_data: "Ingen data", unavailable: "Otillgänglig", no_sensors: "Inga EPG-sensorer hittades.", up_next_label: "Härnäst", now_badge: "NU", no_schedule: "Ingen tablå tillgänglig", close: "Stäng", tab_search: "🔍 Sök", tab_watches: "⭐ Sparade", search_placeholder: "Sök program...", match_contains: "Innehåller", match_exact: "Exakt", btn_search: "Sök", hint_search: "Skriv titeln och tryck på Sök.", no_results: "Inga resultat för", results_suffix_one: "resultat", results_suffix_many: "resultat", btn_notify_now: "📨 Meddela mig nu", btn_sending: "Skickar...", btn_sent: "✓ Skickat", notify_title_prefix: "📺 Program-EPG", watches_title: "⭐ Sparade sökningar", watches_hint: "Lägg till sökord. När programmet dyker upp i EPG:n inom valt tidsfönster får du en automatisk avisering.", watches_label: "Aktiva sparade sökningar", watch_placeholder: "T.ex: Champions, Dune, Alone...", watch_notify_label: "Avisera med", watch_hours_label: "Varna innan", watch_1h: "1 timme innan", watch_2h: "2 timmar innan", watch_6h: "6 timmar innan", watch_12h: "12 timmar innan", watch_24h: "24 timmar innan", watch_48h: "48 timmar innan", btn_save_watch: "⭐ Spara sökning", no_watches: "Inga sparade sökningar än.", watch_meta_notify: "avisera", watch_meta_before: "varningar", watch_meta_before_suffix: "t innan", error_no_keyword: "Ange ett sökord.", error_no_service: "Välj en aviseringsstjänst.", error_no_service_found: "Inga aviseringsstjänster", error_loading: "Laddar tjänster...", error_send: "Fel:", confirm_delete_watch: "Ta bort den här sparade sökningen?"},
  th: {editor_title: "หัวข้อการ์ด", editor_theme: "ธีม", editor_theme_dark: "🌙 มืด", editor_theme_light: "☀️ สว่าง", editor_accent: "สีหลัก", editor_color_picker: "ตัวเลือกสี", editor_color_custom: "สีที่กำหนดเอง (HEX หรือ RGB)", editor_color_placeholder: "#fa1a00 หรือ 200,100,0", editor_columns: "คอลัมน์ (2–6)", editor_channels: "ช่องรายการ — ลาก ⠿ เพื่อจัดลำดับ", editor_drag_hint: "⠿ ลาก · ลบ", editor_no_sensors: "ไม่พบเซนเซอร์ EPG กรุณาเปิดใช้งาน What's On TV integration", color_orange: "ส้ม", color_ha_blue: "HA ฟ้า", color_cyan: "ไซแอน", color_yellow: "เหลือง", color_green: "เขียว", color_pink: "ชมพู", color_purple: "ม่วง", color_red: "แดง", default_title: "ผังรายการทีวี", no_data: "ไม่มีข้อมูล", unavailable: "ไม่พร้อมใช้งาน", no_sensors: "ไม่พบเซนเซอร์ EPG", up_next_label: "รายการถัดไป", now_badge: "ขณะนี้", no_schedule: "ไม่มีข้อมูลผังรายการ", close: "ปิด", tab_search: "🔍 ค้นหา", tab_watches: "⭐ ที่บันทึกไว้", search_placeholder: "ค้นหาชื่อรายการ...", match_contains: "ประกอบด้วย", match_exact: "ตรงตัว", btn_search: "ค้นหา", hint_search: "พิมพ์ชื่อรายการแล้วกดค้นหา", no_results: "ไม่พบผลลัพธ์สำหรับ", results_suffix_one: "รายการ", results_suffix_many: "รายการ", btn_notify_now: "📨 แจ้งเตือนฉันตอนนี้", btn_sending: "กำลังส่ง...", btn_sent: "✓ ส่งแล้ว", notify_title_prefix: "📺 ผังรายการ EPG", watches_title: "⭐ การค้นหาที่บันทึกไว้", watches_hint: "เพิ่มคำสำคัญ เมื่อรายการปรากฏใน EPG ภายในช่วงเวลาที่เลือก คุณจะได้รับการแจ้งเตือนอัตโนมัติ", watches_label: "การค้นหาที่บันทึกไว้ทำงานอยู่", watch_placeholder: "เช่น: Champions, Dune, Alone...", watch_notify_label: "แจ้งเตือนผ่าน", watch_hours_label: "เตือนล่วงหน้า", watch_1h: "1 ชม. ล่วงหน้า", watch_2h: "2 ชม. ล่วงหน้า", watch_6h: "6 ชม. ล่วงหน้า", watch_12h: "12 ชม. ล่วงหน้า", watch_24h: "24 ชม. ล่วงหน้า", watch_48h: "48 ชม. ล่วงหน้า", btn_save_watch: "⭐ บันทึกการค้นหา", no_watches: "ยังไม่มีการค้นหาที่บันทึกไว้", watch_meta_notify: "แจ้งเตือน", watch_meta_before: "เตือน", watch_meta_before_suffix: "ชม. ล่วงหน้า", error_no_keyword: "กรุณาใส่คำสำคัญ", error_no_service: "กรุณาเลือกบริการแจ้งเตือน", error_no_service_found: "ไม่พบบริการแจ้งเตือน", error_loading: "กำลังโหลดบริการ...", error_send: "ข้อผิดพลาด:", confirm_delete_watch: "ลบรายการค้นหาที่บันทึกไว้นี้หรือไม่?"},
  tr: {editor_title: "Kart başlığı", editor_theme: "Tema", editor_theme_dark: "🌙 Karanlık", editor_theme_light: "☀️ Aydınlık", editor_accent: "Ana renk", editor_color_picker: "Renk seçici", editor_color_custom: "Özel renk (HEX veya RGB)", editor_color_placeholder: "#fa1a00 veya 200,100,0", editor_columns: "Sütunlar (2–6)", editor_channels: "Kanallar — yeniden sıralamak için ⠿ sürükleyin", editor_drag_hint: "⠿ Sürükle · Kaldır", editor_no_sensors: "EPG sensörü algılanmadı. What's On TV entegrasyonunu etkinleştirin.", color_orange: "Turuncu", color_ha_blue: "HA Mavisi", color_cyan: "Camgöbeği", color_yellow: "Sarı", color_green: "Yeşil", color_pink: "Pembe", color_purple: "Mor", color_red: "Kırmızı", default_title: "TV Rehberi", no_data: "Veri yok", unavailable: "Kullanılamıyor", no_sensors: "EPG sensörü bulunamadı.", up_next_label: "Sırada", now_badge: "ŞİMDİ", no_schedule: "Yayın akışı mevcut değil", close: "Kapat", tab_search: "🔍 Ara", tab_watches: "⭐ Kayıtlı", search_placeholder: "Program ara...", match_contains: "İçerir", match_exact: "Tam eşleşme", btn_search: "Ara", hint_search: "Başlığı yazın ve Ara'ya basın.", no_results: "Sonuç bulunamadı:", results_suffix_one: "sonuç", results_suffix_many: "sonuç", btn_notify_now: "📨 Şimdi bildir", btn_sending: "Gönderiliyor...", btn_sent: "✓ Gönderildi", notify_title_prefix: "📺 Program EPG", watches_title: "⭐ Kayıtlı aramalar", watches_hint: "Anahtar kelimeler ekleyin. Program seçilen zaman dilimi içinde EPG'de göründüğünde otomatik bir bildirim alacaksınız.", watches_label: "Kayıtlı aramalar aktif", watch_placeholder: "Örn: Champions, Dune, Alone...", watch_notify_label: "Şununla bildir", watch_hours_label: "Şu kadar önce uyar", watch_1h: "1 saat önce", watch_2h: "2 saat önce", watch_6h: "6 saat önce", watch_12h: "12 saat önce", watch_24h: "24 saat önce", watch_48h: "48 saat önce", btn_save_watch: "⭐ Aramayı kaydet", no_watches: "Henüz kayıtlı arama yok.", watch_meta_notify: "bildir", watch_meta_before: "uyarılar", watch_meta_before_suffix: "saat önce", error_no_keyword: "Bir anahtar kelime girin.", error_no_service: "Bir bildirim servisi seçin.", error_no_service_found: "Bildirim servisi yok", error_loading: "Servisler yükleniyor...", error_send: "Hata:", confirm_delete_watch: "Bu kayıtlı aramayı silmek istiyor musunuz?"},
  uk: {editor_title: "Заголовок картки", editor_theme: "Тема", editor_theme_dark: "🌙 Темна", editor_theme_light: "☀️ Світла", editor_accent: "Основний колір", editor_color_picker: "Вибір кольору", editor_color_custom: "Свій колір (HEX або RGB)", editor_color_placeholder: "#fa1a00 або 200,100,0", editor_columns: "Стовпці (2–6)", editor_channels: "Канали — перетягніть ⠿ для сортування", editor_drag_hint: "⠿ Перетягнути · Видалити", editor_no_sensors: "EPG-сенсори не знайдено. Увімкніть інтеграцію What's On TV.", color_orange: "Помаранчевий", color_ha_blue: "HA Синій", color_cyan: "Блакитний", color_yellow: "Жовтий", color_green: "Зелений", color_pink: "Рожевий", color_purple: "Фіолетовий", color_red: "Червоний", default_title: "ТВ-програма", no_data: "Немає даних", unavailable: "Недоступно", no_sensors: "EPG-сенсори не знайдено.", up_next_label: "Далі", now_badge: "ЗАРАЗ", no_schedule: "Програма відсутня", close: "Закрити", tab_search: "🔍 Пошук", tab_watches: "⭐ Збережено", search_placeholder: "Пошук програми...", match_contains: "Містить", match_exact: "Точно", btn_search: "Шукати", hint_search: "Введіть назву та натисніть Шукати.", no_results: "Немає результатів для", results_suffix_one: "результат", results_suffix_many: "результатів", btn_notify_now: "📨 Сповістити зараз", btn_sending: "Відправка...", btn_sent: "✓ Відправлено", notify_title_prefix: "📺 Програма EPG", watches_title: "⭐ Збережені пошуки", watches_hint: "Додайте ключові слова. Коли програма з'явиться в EPG в обраний час, ви отримаєте автоматичне сповіщення.", watches_label: "Активні збережені пошуки", watch_placeholder: "Напр: Champions, Dune, Alone...", watch_notify_label: "Сповістити через", watch_hours_label: "Попередити за", watch_1h: "1 годину до", watch_2h: "2 години до", watch_6h: "6 годин до", watch_12h: "12 годин до", watch_24h: "24 години до", watch_48h: "48 годин до", btn_save_watch: "⭐ Зберегти пошук", no_watches: "Збережених пошуків поки немає.", watch_meta_notify: "сповістити", watch_meta_before: "попередження", watch_meta_before_suffix: "год до", error_no_keyword: "Введіть ключове слово.", error_no_service: "Оберіть службу сповіщень.", error_no_service_found: "Служби не знайдено", error_loading: "Завантаження служб...", error_send: "Помилка:", confirm_delete_watch: "Видалити цей збережений пошук?"},
  vi: {editor_title: "Tiêu đề thẻ", editor_theme: "Giao diện", editor_theme_dark: "🌙 Tối", editor_theme_light: "☀️ Sáng", editor_accent: "Màu chính", editor_color_picker: "Chọn màu", editor_color_custom: "Màu tùy chỉnh (HEX hoặc RGB)", editor_color_placeholder: "#fa1a00 hoặc 200,100,0", editor_columns: "Số cột (2–6)", editor_channels: "Kênh — kéo ⠿ để sắp xếp", editor_drag_hint: "⠿ Kéo · Xóa", editor_no_sensors: "Không tìm thấy cảm biến EPG. Hãy bật tích hợp What's On TV.", color_orange: "Cam", color_ha_blue: "Xanh HA", color_cyan: "Lục lam", color_yellow: "Vàng", color_green: "Xanh lá", color_pink: "Hồng", color_purple: "Tím", color_red: "Đỏ", default_title: "Lịch TV", no_data: "Không có dữ liệu", unavailable: "Không khả dụng", no_sensors: "Không tìm thấy cảm biến EPG.", up_next_label: "Tiếp theo", now_badge: "BÂY GIỜ", no_schedule: "Không có lịch chiếu", close: "Đóng", tab_search: "🔍 Tìm kiếm", tab_watches: "⭐ Đã lưu", search_placeholder: "Tìm chương trình...", match_contains: "Chứa", match_exact: "Chính xác", btn_search: "Tìm", hint_search: "Nhập tiêu đề và nhấn Tìm kiếm.", no_results: "Không có kết quả cho", results_suffix_one: "kết quả", results_suffix_many: "kết quả", btn_notify_now: "📨 Thông báo cho tôi ngay", btn_sending: "Đang gửi...", btn_sent: "✓ Đã gửi", notify_title_prefix: "📺 Chương trình EPG", watches_title: "⭐ Tìm kiếm đã lưu", watches_hint: "Thêm từ khóa. Khi chương trình xuất hiện trong EPG trong khung giờ đã chọn, bạn sẽ nhận được thông báo tự động.", watches_label: "Tìm kiếm đã lưu đang hoạt động", watch_placeholder: "Ví dụ: Champions, Dune, Alone...", watch_notify_label: "Thông báo qua", watch_hours_label: "Báo trước", watch_1h: "1 giờ trước", watch_2h: "2 giờ trước", watch_6h: "6 giờ trước", watch_12h: "12 giờ trước", watch_24h: "24 giờ trước", watch_48h: "48 giờ trước", btn_save_watch: "⭐ Lưu tìm kiếm", no_watches: "Chưa có tìm kiếm nào được lưu.", watch_meta_notify: "thông báo", watch_meta_before: "cảnh báo", watch_meta_before_suffix: "giờ trước", error_no_keyword: "Vui lòng nhập từ khóa.", error_no_service: "Vui lòng chọn dịch vụ thông báo.", error_no_service_found: "Không tìm thấy dịch vụ", error_loading: "Đang tải dịch vụ...", error_send: "Lỗi:", confirm_delete_watch: "Xóa tìm kiếm đã lưu này?"},
  zh: {editor_title: "卡片标题", editor_theme: "主题", editor_theme_dark: "🌙 深色", editor_theme_light: "☀️ 浅色", editor_accent: "主色调", editor_color_picker: "颜色选择器", editor_color_custom: "自定义颜色 (HEX 或 RGB)", editor_color_placeholder: "#fa1a00 或 200,100,0", editor_columns: "列数 (2–6)", editor_channels: "频道 — 拖动 ⠿ 重新排序", editor_drag_hint: "⠿ 拖动 · 移除", editor_no_sensors: "未检测到 EPG 传感器。请启用 What's On TV 集成。", color_orange: "橙色", color_ha_blue: "HA 蓝色", color_cyan: "青色", color_yellow: "黄色", color_green: "绿色", color_pink: "粉色", color_purple: "紫色", color_red: "红色", default_title: "电视节目指南", no_data: "无数据", unavailable: "不可用", no_sensors: "未找到 EPG 传感器。", up_next_label: "即将播出", now_badge: "正在播出", no_schedule: "无节目表", close: "关闭", tab_search: "🔍 搜索", tab_watches: "⭐ 已保存", search_placeholder: "搜索节目...", match_contains: "包含", match_exact: "精确", btn_search: "搜索", hint_search: "输入标题并点击搜索。", no_results: "无结果:", results_suffix_one: "个结果", results_suffix_many: "个结果", btn_notify_now: "📨 立即通知我", btn_sending: "正在发送...", btn_sent: "✓ 已发送", notify_title_prefix: "📺 节目 EPG", watches_title: "⭐ 已保存的搜索", watches_hint: "添加关键词。当节目在选定的时间窗口内出现在 EPG 中时，您将收到自动通知。", watches_label: "已启用的保存搜索", watch_placeholder: "例如：欧冠, 沙丘, 荒野求生...", watch_notify_label: "通知方式", watch_hours_label: "提前提醒", watch_1h: "1小时前", watch_2h: "2小时前", watch_6h: "6小时前", watch_12h: "12小时前", watch_24h: "24小时前", watch_48h: "48小时前", btn_save_watch: "⭐ 保存搜索", no_watches: "暂无保存的搜索。", watch_meta_notify: "通知", watch_meta_before: "提醒", watch_meta_before_suffix: "小时前", error_no_keyword: "请输入关键词。", error_no_service: "请选择通知服务。", error_no_service_found: "无通知服务", error_loading: "正在加载服务...", error_send: "错误:", confirm_delete_watch: "删除此保存的搜索？"},
};

function getLang(hass) {
  const l = ((hass && hass.language) || navigator.language || 'en').split('-')[0].toLowerCase();
  return T[l] || T['en'];
}

// ─── Utilidades ───────────────────────────────────────────────────────────────

// Map de prefijos de sensor a IANA timezone
const TZ_MAP = {
  uk_:"Europe/London", de_:"Europe/Berlin", fr_:"Europe/Paris",
  pt_:"Europe/Lisbon", pl_:"Europe/Warsaw", mx_:"America/Mexico_City",
  "1_1":"America/New_York", tudn:"America/Mexico_City",
};
function tzForSensor(eid) {
  if (!eid) return undefined;
  const name = eid.replace(/^sensor\.epg_/,"");
  for (const [k,v] of Object.entries(TZ_MAP)) {
    if (name.startsWith(k)) return v;
  }
  return undefined; // usa hora local del navegador (España/Andorra)
}
function fmtTime(isoStr, tz) {
  if (!isoStr) return "";
  try {
    const opts = { hour: "2-digit", minute: "2-digit" };
    if (tz) opts.timeZone = tz;
    return new Date(isoStr).toLocaleTimeString(undefined, opts);
  } catch { return ""; }
}

function fmtDuration(startIso, endIso) {
  if (!startIso || !endIso) return "";
  const mins = Math.round((new Date(endIso) - new Date(startIso)) / 60000);
  if (mins < 60) return `${mins} min`;
  const h = Math.floor(mins / 60), m = mins % 60;
  return m ? `${h}h ${m}min` : `${h}h`;
}

function discoverEntities(hass) {
  if (!hass) return [];
  return Object.keys(hass.states)
    .filter(id =>
      id.startsWith("sensor.") &&
      hass.states[id].attributes?.channel_id !== undefined
    ).sort();
}


// ─── Editor con drag & drop ───────────────────────────────────────────────────

class WhatsonTVEPGCardEditor extends HTMLElement {
  constructor() {
    super();
    this._config = {};
    this._hass = null;
    this._dirty = false;
  }

  setConfig(config) {
    this._config = { ...config };
    if (!this._dirty) this._renderEditor();
  }

  set hass(hass) {
    this._hass = hass;
    if (!this._dirty) this._renderEditor();
  }

  _currentEntities() {
    const configured = this._config?.entities ?? [];
    if (configured.length > 0) return [...configured];
    return discoverEntities(this._hass);
  }

  _renderEditor() {
    if (!this._hass) return;
    const t = getLang(this._hass);

    const entities  = this._currentEntities();
    const cols      = this._config?.columns  ?? 3;
    const title     = this._config?.title    ?? t.default_title;
    const accent    = this._config?.accent   ?? "#e8872a";
    const theme     = this._config?.theme    ?? "dark";

    const PRESETS = [
      { c:"#e8872a", n:t.color_orange   },
      { c:"#2196F3", n:t.color_ha_blue  },
      { c:"#00BCD4", n:t.color_cyan     },
      { c:"#FACA1A", n:t.color_yellow   },
      { c:"#4CAF50", n:t.color_green    },
      { c:"#E91E63", n:t.color_pink     },
      { c:"#9C27B0", n:t.color_purple   },
      { c:"#FF5722", n:t.color_red      },
    ];

    const items = entities.map((eid, idx) => {
      const state  = this._hass.states[eid];
      const chName = state?.attributes?.channel_name ?? eid.replace("sensor.", "").replace(/_/g, " ");
      const logo   = state?.attributes?.channel_icon;
      return `
        <div class="dnd-item" data-idx="${idx}" data-eid="${eid}">
          <span class="drag-handle" title="${t.editor_drag_hint}">⠿</span>
          ${logo
            ? `<img class="item-logo" src="${logo}" alt="" draggable="false" onerror="this.style.display='none'">`
            : `<span class="item-initials">${chName.slice(0,2).toUpperCase()}</span>`
          }
          <span class="item-name">${chName}</span>
          <button class="item-remove" data-idx="${idx}" title="${t.editor_drag_hint}">
            <ha-icon icon="mdi:close"></ha-icon>
          </button>
        </div>`;
    }).join("");

    this.innerHTML = `
      <style>
        .epg-editor { font-family:'Segoe UI',system-ui,sans-serif; padding:12px; }
        .epg-section-label { display:block; font-size:12px; color:#888; margin-bottom:6px; margin-top:14px; font-weight:700; letter-spacing:0.06em; text-transform:uppercase; }
        .epg-editor input[type=text], .epg-editor input[type=number] { width:100%; box-sizing:border-box; padding:7px 10px; border:1px solid rgba(0,0,0,0.15); border-radius:8px; font-size:14px; background:var(--card-background-color,#fff); color:var(--primary-text-color,#000); }
        .epg-editor input[type=number] { width:80px; }
        .theme-row { display:flex; gap:10px; }
        .theme-btn { flex:1; padding:7px; border:2px solid rgba(0,0,0,0.12); border-radius:8px; cursor:pointer; font-size:13px; font-weight:600; background:var(--card-background-color,#fff); color:var(--primary-text-color,#000); transition:border-color 0.15s,background 0.15s; }
        .theme-btn.active { border-color: var(--epg-accent,#e8872a); background:var(--epg-accent,#e8872a)18; color:var(--epg-accent,#e8872a); }
        .color-presets { display:flex; flex-wrap:wrap; gap:10px; margin-bottom:10px; }
        .color-swatch { width:30px; height:30px; border-radius:50%; border:3px solid transparent; cursor:pointer; transition:transform 0.12s,border-color 0.12s; outline:none; }
        .color-swatch:hover { transform:scale(1.18); }
        .color-swatch.active { border-color:#fff; box-shadow:0 0 0 2px var(--epg-accent,#e8872a); }
        .color-custom-row { display:flex; gap:8px; align-items:center; }
        .color-custom-row input[type=color] { width:38px; height:38px; border:none; border-radius:8px; cursor:pointer; padding:2px; background:none; }
        .color-custom-row input[type=text] { flex:1; font-family:monospace; font-size:13px; }
        .dnd-list { border:1px solid rgba(0,0,0,0.1); border-radius:10px; overflow:hidden; background:var(--card-background-color,#fff); overscroll-behavior:contain; }
        .dnd-item { display:flex; align-items:center; gap:10px; padding:8px 12px; border-bottom:1px solid rgba(0,0,0,0.06); background:var(--card-background-color,#fff); transition:background 0.1s; user-select:none; box-sizing:border-box; }
        .dnd-item:last-child { border-bottom:none; }
        .dnd-item.drag-over-top { box-shadow:inset 0 3px 0 var(--epg-accent,#e8872a); }
        .dnd-item.drag-over-bot { box-shadow:inset 0 -3px 0 var(--epg-accent,#e8872a); }
        .dnd-item.dragging { opacity:0.25; }
        .drag-handle { font-size:18px; color:#aaa; cursor:grab; flex-shrink:0; padding:4px 6px; line-height:1; user-select:none; touch-action:none; -webkit-user-select:none; }
        .drag-handle:active { color:var(--epg-accent,#e8872a); cursor:grabbing; }
        .item-logo { width:36px; height:24px; object-fit:contain; flex-shrink:0; border-radius:3px; pointer-events:none; }
        .item-initials { width:36px; height:24px; background:var(--epg-accent,#e8872a); border-radius:5px; display:flex; align-items:center; justify-content:center; font-size:10px; font-weight:800; color:#fff; flex-shrink:0; }
        .item-name { flex:1; font-size:13px; color:var(--primary-text-color,#000); white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
        .item-remove { background:none; border:none; color:#bbb; cursor:pointer; padding:4px 6px; border-radius:50%; transition:background 0.12s,color 0.12s; flex-shrink:0; display:flex; align-items:center; }
        .item-remove:hover { background:rgba(220,60,60,0.12); color:#e05; }
        .dnd-hint { font-size:11px; color:#aaa; margin-top:5px; text-align:center; }
        .ghost-dnd { position:fixed; pointer-events:none; z-index:99999; opacity:0.9; background:var(--card-background-color,#fff); border-radius:8px; padding:8px 12px; box-shadow:0 6px 24px rgba(0,0,0,0.25); display:flex; align-items:center; gap:10px; font-family:'Segoe UI',system-ui,sans-serif; font-size:13px; white-space:nowrap; }
      </style>
      <div class="epg-editor" style="--epg-accent:${accent}">

        <span class="epg-section-label">${t.editor_theme}</span>
        <div class="theme-row">
          <button class="theme-btn${theme==="dark"?" active":""}" data-theme="dark">${t.editor_theme_dark}</button>
          <button class="theme-btn${theme==="light"?" active":""}" data-theme="light">${t.editor_theme_light}</button>
        </div>

        <span class="epg-section-label">${t.editor_accent}</span>
        <div class="color-presets">
          ${PRESETS.map(({c,n}) => `
            <button class="color-swatch${accent.toLowerCase()===c.toLowerCase()?" active":""}"
              data-color="${c}" title="${n}"
              style="background:${c}">
            </button>`).join("")}
        </div>
        <div class="color-custom-row">
          <input type="color" id="color-picker" value="${accent}" title="${t.editor_color_picker}">
          <input type="text" id="color-text" value="${accent}" placeholder="${t.editor_color_placeholder}">
        </div>

        <span class="epg-section-label">${t.editor_title}</span>
        <input id="cfg-title" type="text" value="${title}">

        <span class="epg-section-label">${t.editor_columns}</span>
        <input id="cfg-cols" type="number" min="2" max="6" value="${cols}">

        <span class="epg-section-label">${t.editor_channels}</span>
        <div class="dnd-list" id="dnd-list">
          ${items || `<div style="padding:16px;text-align:center;font-size:13px;color:#aaa;">${t.editor_no_sensors}</div>`}
        </div>
        ${entities.length > 0 ? `<p class="dnd-hint">${t.editor_drag_hint}</p>` : ""}

      </div>`;

    this._attachListeners(entities, accent, theme);
  }

  _attachListeners(entities, accent, theme) {
    this.querySelectorAll(".theme-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        this._dirty = true;
        const newTheme = btn.dataset.theme;
        this._config = { ...this._config, theme: newTheme };
        this._fire();
        this._dirty = false;
        this.querySelectorAll(".theme-btn").forEach(b => b.classList.toggle("active", b.dataset.theme === newTheme));
      });
    });

    this.querySelectorAll(".color-swatch").forEach(btn => {
      btn.addEventListener("click", () => {
        this._dirty = true;
        const color = btn.dataset.color;
        const txtEl = this.querySelector("#color-text");
        const picEl = this.querySelector("#color-picker");
        if (txtEl) txtEl.value = color;
        if (picEl) picEl.value = color;
        this.querySelectorAll(".color-swatch").forEach(b => b.classList.toggle("active", b.dataset.color.toLowerCase() === color.toLowerCase()));
        this.querySelector(".epg-editor").style.setProperty("--epg-accent", color);
        this._config = { ...this._config, accent: color };
        this._fire();
        this._dirty = false;
      });
    });

    const picker = this.querySelector("#color-picker");
    if (picker) {
      picker.addEventListener("mousedown",  () => { this._dirty = true; });
      picker.addEventListener("touchstart", () => { this._dirty = true; }, { passive: true });
      picker.addEventListener("focus",      () => { this._dirty = true; });
      picker.addEventListener("input", () => {
        const color = picker.value;
        const txtEl = this.querySelector("#color-text");
        if (txtEl) txtEl.value = color;
        this.querySelector(".epg-editor")?.style.setProperty("--epg-accent", color);
        this._config = { ...this._config, accent: color };
        this._fire();
      });
      picker.addEventListener("change", () => { this._dirty = false; });
    }

    const colorText = this.querySelector("#color-text");
    if (colorText) {
      colorText.addEventListener("focus", () => { this._dirty = true; });
      colorText.addEventListener("blur", () => { this._dirty = false; });
      colorText.addEventListener("input", () => {
        const parsed = this._parseColor(colorText.value.trim());
        if (parsed) {
          const p = this.querySelector("#color-picker");
          if (p) p.value = parsed;
          this.querySelector(".epg-editor").style.setProperty("--epg-accent", parsed);
          this._config = { ...this._config, accent: parsed };
          this._fire();
        }
      });
    }

    const titleEl = this.querySelector("#cfg-title");
    if (titleEl) {
      titleEl.addEventListener("focus", () => { this._dirty = true; });
      titleEl.addEventListener("blur",  () => { this._dirty = false; });
      titleEl.addEventListener("input", () => {
        this._config = { ...this._config, title: titleEl.value };
        this._fire();
      });
    }
    const colsEl = this.querySelector("#cfg-cols");
    if (colsEl) {
      colsEl.addEventListener("focus", () => { this._dirty = true; });
      colsEl.addEventListener("blur",  () => { this._dirty = false; });
      colsEl.addEventListener("input", () => {
        this._config = { ...this._config, columns: parseInt(colsEl.value) || 3 };
        this._fire();
      });
    }

    this.querySelectorAll(".item-remove").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const idx = parseInt(btn.dataset.idx);
        const ents = this._currentEntities();
        ents.splice(idx, 1);
        this._config = { ...this._config, entities: ents };
        this._fire();
        this._renderEditor();
      });
    });

    this._initDragDrop(entities);
  }

  _initDragDrop(entities) {
    const listEl = this.querySelector("#dnd-list");
    if (!listEl || entities.length < 2) return;

    const getItems  = () => [...listEl.querySelectorAll(".dnd-item")];
    let dragIdx     = null;
    let overIdx     = null;
    let startY      = 0;
    let moved       = false;

    const clearHL = () => getItems().forEach(i =>
      i.classList.remove("drag-over-top","drag-over-bot","dragging")
    );

    const hitTest = (clientY, srcItem) => {
      for (const el of getItems()) {
        if (el === srcItem) continue;
        const r = el.getBoundingClientRect();
        if (clientY >= r.top && clientY <= r.bottom) {
          return { el, top: clientY < r.top + r.height / 2 };
        }
      }
      return null;
    };

    getItems().forEach(item => {
      const handle = item.querySelector(".drag-handle");

      handle.addEventListener("pointerdown", (e) => {
        e.preventDefault();
        e.stopPropagation();
        handle.setPointerCapture(e.pointerId);
        dragIdx = parseInt(item.dataset.idx);
        overIdx = null;
        startY  = e.clientY;
        moved   = false;
        this._dirty = true;
      });

      handle.addEventListener("pointermove", (e) => {
        if (dragIdx === null) return;
        e.preventDefault();
        e.stopPropagation();
        if (Math.abs(e.clientY - startY) > 4) moved = true;
        if (!moved) return;
        clearHL();
        item.classList.add("dragging");
        const hit = hitTest(e.clientY, item);
        if (hit) {
          overIdx = parseInt(hit.el.dataset.idx);
          hit.el.classList.add(hit.top ? "drag-over-top" : "drag-over-bot");
        } else {
          overIdx = null;
        }
      });

      handle.addEventListener("pointerup", (e) => {
        if (dragIdx === null) return;
        e.preventDefault();
        e.stopPropagation();
        clearHL();
        this._dirty = false;
        if (moved && overIdx !== null && overIdx !== dragIdx) {
          const ents = this._currentEntities();
          const [mv] = ents.splice(dragIdx, 1);
          ents.splice(overIdx, 0, mv);
          this._config = { ...this._config, entities: ents };
          this._fire();
          this._renderEditor();
        }
        dragIdx = null;
        overIdx = null;
        moved   = false;
      });

      handle.addEventListener("pointercancel", () => {
        clearHL();
        this._dirty = false;
        dragIdx = null;
        overIdx = null;
        moved   = false;
      });
    });
  }

  _parseColor(input) {
    if (!input) return null;
    if (/^#[0-9a-fA-F]{3,6}$/.test(input)) return input;
    if (/^[0-9a-fA-F]{6}$/.test(input)) return "#" + input;
    const m = input.match(/(\d{1,3})[,\s]+(\d{1,3})[,\s]+(\d{1,3})/);
    if (m) {
      const h = n => parseInt(n).toString(16).padStart(2,"0");
      return "#" + h(m[1]) + h(m[2]) + h(m[3]);
    }
    return null;
  }

  _fire() {
    this.dispatchEvent(new CustomEvent("config-changed", {
      detail: { config: { ...this._config } },
      bubbles: true, composed: true,
    }));
  }
}

customElements.define("whatsontv-epg-card-editor", WhatsonTVEPGCardEditor);

// ─── Tarjeta principal ────────────────────────────────────────────────────────

class WhatsonTVEPGCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._config = {};
    this._hass = null;
  }

  static getConfigElement() {
    return document.createElement("whatsontv-epg-card-editor");
  }

  static getStubConfig() {
    return { title: "TV Guide", entities: [], columns: 3, accent: "#e8872a", theme: "dark" };
  }

  setConfig(config) {
    this._config = { title: "TV Guide", columns: 3, entities: [], ...config };
    this._render();
  }

  set hass(hass) {
    this._hass = hass;
    if (this.shadowRoot.querySelector(".modal-overlay")) return;
    // Calcular fingerprint: títulos + progreso redondeado al 2%
    // Solo re-renderizar el DOM completo si algo relevante cambió
    const fp = this._getEntities().map(eid => {
      const a = hass.states[eid]?.attributes;
      if (!a) return eid;
      return `${a.title}|${a.next_title}|${Math.round((a.progress_pct??0)/2)*2}`;
    }).join(";");
    if (fp === this._lastFp) {
      // Solo actualizar barras de progreso sin destruir imgs
      this._updateProgress();
      return;
    }
    this._lastFp = fp;
    this._render();
  }

  _getEntities() {
    if (!this._hass) return [];
    const configured = this._config.entities ?? [];
    if (configured.length > 0) return configured;
    return discoverEntities(this._hass);
  }

  _updateProgress() {
    if (!this._hass) return;
    this._getEntities().forEach(eid => {
      const a = this._hass.states[eid]?.attributes;
      if (!a) return;
      const pct = Math.max(0, Math.min(100, a.progress_pct ?? 0));
      const bar = this.shadowRoot.querySelector(`.ch-prog-fill[data-eid="${eid}"]`);
      if (bar) bar.style.width = `${pct}%`;
    });
  }

  _openSchedule(entityId) {
    const state = this._hass?.states[entityId];
    if (!state) return;
    const t = getLang(this._hass);

    this.shadowRoot.querySelector(".modal-overlay")?.remove();

    // Usar schedule del sensor; si vacío, construir uno con current/next
    let schedule = state.attributes.schedule ?? [];
    if (!schedule.length) {
      const a = state.attributes;
      if (a.title) schedule = [{
        title: a.title, start: a.start, end: a.end,
        description: a.description ?? "", on_air: true
      }];
      if (a.next_title) schedule.push({
        title: a.next_title, start: a.next_start, end: a.next_end,
        description: "", on_air: false
      });
    }
    const chName = state.attributes.channel_name ?? entityId;
    const chIcon = state.attributes.channel_icon;

    const _tz = tzForSensor(entityId);
    const _now = new Date();
    const _future = schedule.filter(p => !p.end || new Date(p.end) >= _now);
    const overlay = document.createElement("div");
    overlay.className = "modal-overlay";
    overlay.innerHTML = `
      <div class="modal" id="epg-modal">
        <div class="modal-header">
          ${chIcon ? `<img class="modal-logo" src="${chIcon}" alt="${chName}" onerror="this.style.display='none'">` : ""}
          <span class="modal-title">${chName}</span>
          <button class="modal-close" aria-label="${t.close}">
            <ha-icon icon="mdi:close"></ha-icon>
          </button>
        </div>
        <div class="modal-body" id="epg-modal-body">
          ${_future.length === 0
            ? `<p class="no-data">${t.no_schedule}</p>`
            : _future.map((prog, idx) => `
                <div class="schedule-item${prog.on_air ? " active" : ""}" data-idx="${idx}">
                  <div class="sched-time">${fmtTime(prog.start, _tz)}${_tz ? ` <span style="font-size:10px;opacity:.5">${_tz.split("/")[1]?.replace("_"," ")||""}</span>` : ""}</div>
                  <div class="sched-info">
                    <div class="sched-title">${prog.title}</div>
                    ${prog.description ? `<div class="sched-desc">${prog.description}</div>` : ""}
                    <div class="sched-dur">${fmtDuration(prog.start, prog.end)}</div>
                  </div>
                  ${prog.on_air ? `<div class="sched-badge">${t.now_badge}</div>` : ""}
                </div>`).join("")
          }
        </div>
      </div>`;

    this.shadowRoot.appendChild(overlay);

    overlay.querySelector(".modal-close").addEventListener("click", (e) => {
      e.stopPropagation();
      overlay.remove();
    });

    requestAnimationFrame(() => {
      const active = overlay.querySelector(".schedule-item.active");
      if (active) {
        active.scrollIntoView({ block: "center", behavior: "smooth" });
      }
    });
  }

  _render() {
    if (!this._hass || !this._config) return;
    const t = getLang(this._hass);

    const entities = this._getEntities();
    const cols = Math.min(6, Math.max(2, parseInt(this._config.columns) || 3));
    const accent = this._config.accent ?? "#e8872a";
    const theme = this._config.theme ?? "dark";

    const cards = entities.map(entityId => {
      const state = this._hass.states[entityId];
      if (!state) return `<div class="ch-card missing">
        <div class="ch-name">${entityId}</div>
        <div class="ch-unavailable">${t.unavailable}</div>
      </div>`;

      const a = state.attributes;
      const logo = a.channel_icon;
      const chName = a.channel_name ?? entityId;
      const currentTitle = a.title ?? t.no_data;
      const currentStart = fmtTime(a.start);
      const currentEnd = fmtTime(a.end);
      const nextTitle = a.next_title;
      const nextStart = fmtTime(a.next_start);
      const progress = Math.max(0, Math.min(100, a.progress_pct ?? 0));
      const unavail = state.state === "unavailable";

      return `
        <div class="ch-card${unavail ? " unavail" : ""}" data-entity="${entityId}" role="button" tabindex="0">
          <div class="ch-top">
            <div class="ch-logo-wrap">
              ${logo ? `<img class="ch-logo" src="${logo}" alt="${chName}" loading="lazy"
                   onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">` : ""}
              <div class="ch-logo-fallback"${logo ? ' style="display:none"' : ""}>${chName.slice(0,2).toUpperCase()}</div>
            </div>
            <div class="ch-name-wrap">
              <span class="ch-name">${chName}</span>
              ${currentStart ? `<span class="ch-time">${currentStart}–${currentEnd}</span>` : ""}
            </div>
            <button class="ch-expand-btn" data-open="${entityId}" aria-label="${t.no_schedule}">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M8 6l4 4 4-4M8 14l4 4 4-4"/>
              </svg>
            </button>
          </div>
          <div class="ch-prog">
            <div class="ch-prog-title">${currentTitle}</div>
            <div class="ch-prog-bar">
              <div class="ch-prog-fill" data-eid="${entityId}" style="width:${progress}%"></div>
            </div>
          </div>
          ${nextTitle ? `
          <div class="ch-next">
            <span class="ch-next-label">${t.up_next_label}</span>
            <span class="ch-next-title">${nextStart ? `${nextStart} · ` : ""}${nextTitle}</span>
          </div>` : ""}
        </div>`;
    });

    this.shadowRoot.innerHTML = `
      <ha-card>
        ${this._config.title ? `<div class="card-header" style="display:flex;align-items:center;justify-content:space-between;"><span>${this._config.title}</span><img src="/local/whatsontv_icon.png" style="height:42px;width:42px;object-fit:contain;opacity:1.00;" draggable="false"></div>` : ""}
        <div class="card-body" style="--cols:${cols}">
          ${cards.join("") || `<p class="empty">${t.no_sensors}</p>`}
        </div>
      </ha-card>
      <style>${this._css(accent, theme)}</style>`;

    this.shadowRoot.querySelectorAll(".ch-expand-btn[data-open]").forEach(btn => {
      const eid = btn.dataset.open;
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        this._openSchedule(eid);
      });
    });
  }

  _css(accent = "#e8872a", theme = "dark") {
    const bg0     = theme === "dark" ? "#0f0f14"              : "#f0f2f5";
    const logoBg  = theme === "dark" ? "transparent"          : "#1a1a1a";
    const bg1     = theme === "dark" ? "#13131a"              : "#ffffff";
    const bg2     = theme === "dark" ? "#1a1a24"              : "#e8eaf0";
    const bgGap   = theme === "dark" ? "rgba(255,255,255,0.04)": "rgba(0,0,0,0.08)";
    const border  = theme === "dark" ? "rgba(255,255,255,0.06)": "rgba(0,0,0,0.10)";
    const txt1    = theme === "dark" ? "rgba(255,255,255,0.9)" : "rgba(0,0,0,0.87)";
    const txt2    = theme === "dark" ? "rgba(255,255,255,0.35)": "rgba(0,0,0,0.45)";
    const txt3    = theme === "dark" ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.35)";
    const barBg   = theme === "dark" ? "rgba(255,255,255,0.08)": "rgba(0,0,0,0.10)";
    const modalBg = theme === "dark" ? "#16161f"              : "#ffffff";
    const schedBorder = theme === "dark" ? "rgba(255,255,255,0.04)": "rgba(0,0,0,0.06)";
    const schedActive = `${accent}18`;
    return `
      :host { display:block; }
      ha-card { background:${bg0}; border-radius:16px; overflow:hidden; border:1px solid ${border}; }
      .card-header { padding:16px 20px 8px; font-size:13px; font-weight:700; letter-spacing:0.12em; text-transform:uppercase; color:${accent}; font-family:'Segoe UI',system-ui,sans-serif; }
      .card-body { display:grid; grid-template-columns:repeat(var(--cols,3),1fr); gap:1px; background:${bgGap}; }
      .ch-card { background:${bg1}; padding:14px; cursor:pointer; transition:background 0.18s; outline:none; position:relative; overflow:hidden; -webkit-tap-highlight-color:transparent; }
      .ch-card::after { content:''; position:absolute; inset:0; background:linear-gradient(135deg,${accent}12 0%,transparent 60%); opacity:0; transition:opacity 0.18s; pointer-events:none; }
      .ch-card:hover { background:${bg2}; }
      .ch-card:hover::after { opacity:1; }
      .ch-card:focus-visible { box-shadow:inset 0 0 0 2px ${accent}; }
      .ch-card.unavail { opacity:0.45; pointer-events:none; }
      .ch-top { display:flex; align-items:center; gap:10px; margin-bottom:10px; }
      .ch-logo-wrap { width:40px; height:28px; flex-shrink:0; display:flex; align-items:center; justify-content:center; background:${logoBg}; border-radius:4px; padding:2px; box-sizing:border-box; }
      .ch-logo { max-width:40px; max-height:28px; width:auto; height:auto; object-fit:contain; filter:brightness(0.92); border-radius:3px; }
      .ch-logo-fallback { width:36px; height:26px; background:linear-gradient(135deg,${accent},${accent}aa); border-radius:5px; display:flex; align-items:center; justify-content:center; font-size:11px; font-weight:800; color:white; letter-spacing:0.05em; font-family:'Segoe UI',system-ui,sans-serif; }
      .ch-name-wrap { flex:1; min-width:0; display:flex; flex-direction:column; gap:2px; }
      .ch-name { font-size:12px; font-weight:700; color:${txt1}; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; letter-spacing:0.02em; font-family:'Segoe UI',system-ui,sans-serif; }
      .ch-time { font-size:10px; color:${txt2}; font-family:'Segoe UI',system-ui,sans-serif; font-variant-numeric:tabular-nums; }
      .ch-expand-btn { background:none; border:none; padding:4px; cursor:pointer; color:${txt2}; flex-shrink:0; transition:color 0.18s; display:flex; align-items:center; justify-content:center; width:28px; height:28px; border-radius:6px; -webkit-tap-highlight-color:transparent; }
      .ch-expand-btn svg { width:16px; height:16px; }
      .ch-expand-btn:hover, .ch-card:hover .ch-expand-btn { color:${accent}; background:${accent}18; }
      .ch-expand-btn:active { background:${accent}30; }
      .ch-prog { margin-bottom:6px; }
      .ch-prog-title { font-size:12px; color:${txt1}; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; margin-bottom:6px; font-family:'Segoe UI',system-ui,sans-serif; line-height:1.3; }
      .ch-prog-bar { height:3px; background:${barBg}; border-radius:2px; overflow:hidden; }
      .ch-prog-fill { height:100%; background:linear-gradient(90deg,${accent},${accent}cc); border-radius:2px; transition:width 1s linear; box-shadow:0 0 6px ${accent}80; }
      .ch-next { margin-top:7px; display:flex; gap:5px; align-items:baseline; flex-wrap:wrap; }
      .ch-next-label { font-size:9px; text-transform:uppercase; letter-spacing:0.1em; color:${accent}b0; font-weight:700; flex-shrink:0; font-family:'Segoe UI',system-ui,sans-serif; }
      .ch-next-title { font-size:10px; color:${txt3}; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; font-family:'Segoe UI',system-ui,sans-serif; }
      .ch-unavailable { font-size:11px; color:${txt3}; font-family:'Segoe UI',system-ui,sans-serif; }
      .empty { grid-column:1/-1; text-align:center; color:${txt3}; font-size:13px; padding:32px; line-height:1.7; font-family:'Segoe UI',system-ui,sans-serif; }

      /* ── Modal ── */
      .modal-overlay { position:fixed; inset:0; z-index:9999; background:rgba(0,0,0,0.75); backdrop-filter:blur(6px); display:flex; align-items:flex-end; justify-content:center; animation:fadeIn 0.18s ease; }
      @keyframes fadeIn { from{opacity:0} to{opacity:1} }
      .modal { background:${modalBg}; border-radius:20px 20px 0 0; width:100%; max-width:540px; max-height:78vh; display:flex; flex-direction:column; box-shadow:0 -8px 40px rgba(0,0,0,0.6); animation:slideUp 0.25s cubic-bezier(0.25,0.8,0.25,1); border-top:1px solid ${border}; }
      @keyframes slideUp { from{transform:translateY(100%)} to{transform:translateY(0)} }
      .modal-header { display:flex; align-items:center; gap:12px; padding:18px 20px 14px; border-bottom:1px solid ${schedBorder}; flex-shrink:0; }
      .modal-logo { height:28px; max-width:60px; object-fit:contain; }
      .modal-title { flex:1; font-size:16px; font-weight:700; color:${txt1}; font-family:'Segoe UI',system-ui,sans-serif; }
      .modal-close { background:${barBg}; border:none; color:${txt2}; width:32px; height:32px; border-radius:50%; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:background 0.15s,color 0.15s; }
      .modal-close:hover { background:${accent}40; color:${accent}; }
      .modal-close ha-icon { --mdc-icon-size:18px; }
      .modal-body { overflow-y:auto; padding:8px 0 env(safe-area-inset-bottom,16px); flex:1; scrollbar-width:thin; scrollbar-color:${accent}50 transparent; }
      .modal-body::-webkit-scrollbar { width:4px; }
      .modal-body::-webkit-scrollbar-thumb { background:${accent}50; border-radius:2px; }
      .no-data { text-align:center; color:${txt3}; font-size:13px; padding:32px; font-family:'Segoe UI',system-ui,sans-serif; }
      .schedule-item { display:flex; align-items:flex-start; gap:14px; padding:11px 20px; border-bottom:1px solid ${schedBorder}; position:relative; }
      .schedule-item.active { background:${schedActive}; }
      .schedule-item.active::before { content:''; position:absolute; left:0; top:0; bottom:0; width:3px; background:${accent}; border-radius:0 2px 2px 0; }
      .sched-time { font-size:13px; font-weight:700; color:${txt3}; width:44px; flex-shrink:0; padding-top:1px; font-variant-numeric:tabular-nums; font-family:'Segoe UI',system-ui,sans-serif; }
      .schedule-item.active .sched-time { color:${accent}; }
      .sched-info { flex:1; min-width:0; }
      .sched-title { font-size:13px; font-weight:600; color:${txt1}; margin-bottom:2px; font-family:'Segoe UI',system-ui,sans-serif; line-height:1.35; }
      .schedule-item.active .sched-title { color:${txt1}; }
      .sched-desc { font-size:10px; color:${txt3}; overflow:hidden; display:-webkit-box; -webkit-line-clamp:4; -webkit-box-orient:vertical; font-family:'Segoe UI',system-ui,sans-serif; line-height:1.4; margin-bottom:3px; }
      .sched-dur { font-size:10px; color:${txt3}; font-family:'Segoe UI',system-ui,sans-serif; }
      .sched-badge { background:linear-gradient(90deg,${accent},${accent}cc); color:#000; font-size:9px; font-weight:800; letter-spacing:0.08em; padding:3px 7px; border-radius:20px; flex-shrink:0; align-self:flex-start; margin-top:2px; font-family:'Segoe UI',system-ui,sans-serif; }
      @media (max-width:480px) { .card-body { grid-template-columns:repeat(2,1fr) !important; } }
    `;
  }
}

customElements.define("whatsontv-epg-card", WhatsonTVEPGCard);

window.customCards = window.customCards || [];
window.customCards.push({
  type: "whatsontv-epg-card",
  name: "What's On TV",
  description: "EPG TV programme guide — 49 languages",
  preview: false,
  documentationURL: "https://github.com/janfajessen/whatsontv-epg-card",
});

console.info(
  `%c WHATSONTV-EPG-CARD %c v${CARD_VERSION} `,
  "background:#e8872a;color:#000;font-weight:700;padding:2px 4px;border-radius:3px 0 0 3px",
  "background:#13131a;color:#e8872a;font-weight:700;padding:2px 4px;border-radius:0 3px 3px 0"
);
