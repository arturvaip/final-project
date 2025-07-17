        document.getElementById('lang').addEventListener('click', function() {
         document.getElementById('rus').style.display = 
         document.getElementById('rus').style.display === 'none' ? 'block' : 'none';
         document.getElementById('he').style.display = 
         document.getElementById('he').style.display === 'none' ? 'block' : 'none';
        });
        const translations = {
            ru: {
             r1: "Обычный день внезапно прерывается вспышкой света.",
             r2: "Что это - конец или начало? Сделай свой выбор… и узнай правду.",
             r3: "Начать",
             r4: "твой пол?",
             r5: "парень",
             r6: "девушка",
             r7: "Идя домой, вы замечаете яркую вспышку. Вдруг небо наполняется ярким, ослепительным светом. Глядя на это, вам кажется, будто небо сломалось — в нём появилась трещина. Внезапно вы чувствуете, как это нечто начинает вас затягивать.",
             r8: "Ваше действие?",
             r9: "Пытаться брыкаться и убежать.",
             r10: "Попытаться придумать план по безопасному приземлению.",
             r11: "Очнувшись, ты чувствуешь лёгкую головную боль. Вдруг замечаешь лес — но не обычный: яркий, неестественного бирюзового цвета. Неуверенно идёшь прямо и видишь развилку. Правая тропа заросла и почти пропала, а левая — будто только что сделанная, чистая и ухоженная.",
             r12: "Какой же путь ты выберешь?",
             r13: "правая тропа",
             r14: "левая тропа",
             r15: "Идя по выбранному пути, ты чувствуешь тревожность — будто кто-то наблюдает за тобой. Ты слышишь странный шум, похожий на шёпот...",
             r16: "что же вам делать?",
             r17: "попытаться прислушатся",
             r18: "закрыть уши, и ускорить щаг",
             r19: "Чуть задумавшись, ты едва не падаешь в обрыв — дальше идти некуда...",
             r20: "ваше действие?",
             r21: "прыгнуть в обрыв",
             r22: "посторатся акуратно спустится",
             r23: "После спуска ты продолжил идти и постепенно осознал, что что-то не так. Всё вокруг казалось неживым, а в голове мелькнула мысль: (Неужели я попал в иллюзию?)",
             r24: "как же тебе решить эту проблему?",
             r25: "посторатся сосредоточится и вернутся в реальность",
             r26: "доверится ощущением и пройти дальше",
             r27: "Пройдя чуть дальше вы в далике видите замок, большой, красивый, но вы замечаете стража — примерно три метра в высоту великана с мечом...",
             r28: "твои действие?",
             r29: "проскочить мимо него",
             r30: "подождать пока он не потеряет бдительность и обойти его",
             r31: "Дойдя до замка, ты замечаешь трое врат. На правых — символ кулака, на средних — кроличья лапка, на левых — символ книги...",
             r32: "куда тебе пойти?",
             r33: "в левый, веть, я сильный",
             r34: "в средний, ловкость, моё всё",
             r35: "в правый, магия мне по душе",
             r36: "поздровляю! ты нашёл свою дверь.",
             r37: "поздровляю, это 3 плохая концовка. Ты проиграл, ты не смог найти свою дверь.",
             r38: "язык",
             r39: "Ты проиграл! прыгать? ты что, бесмертный? или я чего то не знаю?.",
             r40: "попробовать снова",
             r41: "продолжить",
             r42: "Дверь силы приняла тебя, поздравляю. Вдруг ты замечаешь, что ты не внутри замка, а на поляне, и вдалеке виднеется деревенька.",
             r43: "Стоит ли туда идти?",
             r44: "Пойти в сторону деревни",
             r45: "Обойти деревню",
             r46: "Пытаясь обойти деревню, ты упал в яму. Вроде бы, кроме пары царапин, ничего серьёзного. Но ты замечаешь что-то вроде сундука. Открыв его, ты видишь меч с каким-то знаком на рукояти — такой был виден на флаге в той деревне.",
             r47: "Выбравшись, ты решаешь всё-таки пойти в ту самую деревню.",
             r48: "Дойдя до деревни, ты замечаешь обычных людей. Начав расспрашивать их о мире, символе на мече и обо всём остальном, тебе удаётся узнать немного.",
             r49: "Люди сказали, что лучше обратиться к мудрецу за той частью Сумеречного леса.",
             r50: "Идя по лесу, вдалеке ты видишь дом. Через окно видно человека, сидящего за столом.",
             r51: "Как же тебе поступить?",
             r52: "Выбить дверь ногой",
             r53: "Спокойно постучать",
             r54: "Ты с разбега выбил дверь. Мудрец резко вскочил с места, его лицо исказилось от гнева. «Ты ещё не готов познать силу, если идёшь по пути разрушения», — сказал он, и дом исчез в яркой вспышке света.",
             r55: "Не думаю, что у тебя есть выбор, что делать...",
             r56: "Ты спокойно постучал в дверь. Через несколько секунд она приоткрылась, и из дома вышел седой мудрец. Он внимательно осмотрел тебя и сказал: «Ты несёшь на себе знак древней силы. Заходи, расскажу тебе больше».",
             r57: "Что же ты будешь делать?",
             r58: "Зайти внутрь.",
             r59: "Сказать, что сначала осмотришься вокруг.",
             r60: "Конец?",
             r61: "поздровляю, это 2 плохая концовка.после пропажи мудреца, тебя ждали вечные странствие без ответов на свои вопросы.",
             r62: "Поздравляю! Это первая концовка - здесь сюжет обрывается. Для продолжения заплатите $19.99.",
             r63: "Титры",
             r64: "Ваши характеристики:",
             r65: "Достижения",
             r66: "Дверь ловкости приняла тебя - поздравляю! Ты оказываешься не в замке, а на поляне, и решаешь немного побродить.",
             r67: "Вдалеке виднеется стена, но точнее - ворота, и через них проходят люди: видимо, это вход в столицу.",
             r68: "Попробовать пройти прямо",
             r69: "Найти обходной вход",
             r70: "Подойдя ближе, ты видишь людей. Они не пропускают тебя дальше без документов, значит придётся вернуться обратно.",
             r71: "Вдалеке виднеется стена, но точнее - ворота, и через них проходят люди: видимо, это вход в столицу.",
             r72: "Попробовать пройти прямо",
             r73: "обойти",
             r74: "Ты попал в тюрьму. Что ж… могло быть и лучше, попробуй снова.",
             r75: "Пройдя вдоль стены, ты видишь люк. Ты не совсем уверен, но выбора особо нет. Пройдя через люк, ты оказываешься рядом с большим зданием и табличкой в виде большого плюса — видимо, это больница. Зайдя внутрь, ты встречаешь аптекаря: кажется, вы говорите на одном языке, и это радует.",  
             r76: "О чём спросить аптекаря?",  
             r77: "В каком государстве я нахожусь?",  
             r78: "Где здесь можно раздобыть деньги и информацию?",  
             r79: "Странно посмотрев на тебя, он кивком головы указал на подсобную дверь.",  
             r80: "Решив не задавать лишних вопросов, ты заходишь туда.",
             r81: "Ваше путешествие подошло к концу.",  
             r82: "Твои характеристики:",  
             r83: "Сила:",  
             r84: "Ловкость:",  
             r85: "Интеллект:",  
             r86: "Живучесть:",  
             r87: "Достижения:",
             r88: "Найден меч",  
             r89: "Кулон найден",  
             r90: "Встретил мудреца",  
             r91: "Был в деревне",  
             r92: "имя игрока:",
             r93: "Кругом ничего примечательного, лишь кулон, брошенный под кустами.",  
             r94: "Не испытывая доверия к мудрецу, вы решаете скрыть находку.",  
             r95: "Войдя внутрь, вы понимаете, что дом гораздо просторнее, чем снаружи. Мебель — древняя, но будто только что из мастерской. Несмотря на возраст, здесь удивительно уютно.",  
             r96: "Мудрец сидит за столом и жестом приглашает вас присоединиться.",  
             r97: "пол:",
             r98: "Пройдя вдоль стены, ты видишь люк. Не уверен, но выбора особо нет. Пройдя по нему, ты выходишь к большому зданию с табличкой в виде красного креста — похоже, аптека.",
             r99: "Вы решаете зайти внутрь.",
             r100: "Зайдя в неё, ты видишь аптекаря. Не уверен, но вроде вы говорите на одном языке. Это радует. Ты спрашиваешь: «Где тут можно подзаработать денег?» Он странно смотрит и кивает на подсобку.",
             r101: "Решив не задавать лишних вопросов, ты заходишь туда.",
             r102: "Зайдя в подсобку, ты видишь лестницу вниз. Ты спускаешься и оказываешься в тускло освещённом туннеле. Впереди слышны голоса.",
             r103: "Что будешь делать?",
             r104: "Прокрасться, стараясь не издавать ни звука",
             r105: "Ты прокрался ближе: люди обсуждают доставку чего-то запрещённого. Один достаёт карту, кладёт на ящик и уходит.",
             r106: "Как поступишь?",
             r107: "Быстро схватить карту и сбежать",
             r108: "Остаться и наблюдать дальше",
             r109: "Схватив карту, ты убегаешь. Слышен крик: «Эй! Кто там?» — но ты слишком быстр. Снаружи — холм с видом на столицу.",
             r110: "На карте отмечено место — скрытая база в старых развалинах.",
             r111: "Отправиться к развалинам",
             r112: "Ты слышишь: заговорщики хотят убить короля. Один говорит: «Завтра на рассвете. Мы подменим вино...»",
             r113: "Ты решаешь действовать.",
             r114: "Отправиться к дворцу",
             r115: "Ты попал в развалины. Внутри — лаборатория. В центре — капсула с фигурой, рядом панель управления.",
             r116: "Ты понимаешь: это может быть ловушка или ключ к разгадке.",
             r117: "Активировать капсулу",
             r118: "Разрушить панель и скрыться",
             r119: "Ты добираешься до стен дворца. Охрана рядом. Ты замечаешь лаз между стеной и кустами.",
             r120: "Как проникнуть внутрь?",
             r121: "Пробраться через лаз",
             r122: "Отвлечь стражу",
             r123: "Ты нажимаешь на панель. Капсула дрожит. На экране: «Активация… 10… 9… 8…»",
             r124: "Ты чувствуешь, что сделал ошибку.",
             r125: "Пытаться сбежать",
             r126: "Ты разбиваешь панель. Капсула замирает. Система отключается. Открывается потайной ход. Ты ускользаешь.",
             r127: "Ты сделал верный выбор.",
             r128: "Ты вбегаешь в зал. «Стойте! Не пейте!» — кричишь ты. После проверки ты оказываешься прав.",
             r129: "Король приказывает привести тебя.",
             r130: "Подойти к трону",
             r131: "«Ты спас мне жизнь», — говорит король. — «В знак благодарности я хочу предложить тебе важную миссию — стать тайным шпионом короны. Ты согласен?»",
             r132: "обрёл ли ты смысл в новом мире?",
             r133: "Поздравляю! Это вторая хорошая концовка. Ты стал героем легенд, но твоё имя никто не узнает.",
             r134: "Поздравляю! Это третья хорошая концовка. Ты стал героем и обрёл смысл в новом мире.",
             r135: "Поздравляю, это первая плохая концовка. Существо проснулось. Мир погиб. Ты стал свидетелем его конца.",
             r136: "Принять предложение",
             r137: "Покинуть лабораторию",
             r138: "Нашёл карту",
             r139: "Сила",  
             r140: "Ловкость",  
             r141: "Интеллект",
            },
            he: { 
             r1: "יום שגרתי נקטע באור מסמא, מסתורי — כאילו השמים נקרעו לרווחה.",
             r2: "זה הסוף... או התחלה? תבחר ותגלה את האמת.",
             r3: "התחל",
             r4: "מי אתה, נווד בעולם הזה או גיבור שנבחר?",
             r5: "בחור",
             r6: "בחורה",
             r7: "בדרך הביתה, האור מסנוור כל כך עד שאתה מרגיש כיצד החלל סביבך מתעוות. השמים נבקעים — ואתה נשאב אל תוך הלא נודע.",
             r8: "מה תעשה?",
             r9: "לנסות לברוח",
             r10: "לחשוב מה ואך 🤔",
             r11: "אתה מתעורר עם כאב ראש מצמית. היער סביבך זוהר בצבעים לא טבעיים — טורקיז, סגול, כאילו אתה בתוך חלום. לפני שתי דרכים: ימין — שביל עתיק ומכוסה בשורשים, שמאל — מסלול חלק מדי, כממתין לך.",
             r12: "לאן תלך?",
             r13: "ימינה",
             r14: "שמאלה",
             r15: "משהו זז בין העצים, עוקב אחריך. לחישות רפאים ממלאות את האוויר — מילים לא מובנות, אך מלאות איום.",
             r16: "מה תעשה?",
             r17: "להקשיב",
             r18: "לסתום את האוזניים ולהאיץ",
             r19: "כמעט נפלת לצוק... אין לאן להמשיך",
             r20: "מה עכשיו?",
             r21: "לקפוץ",
             r22: "לרדת בזהירות",
             r23: "העולם סביבך מרגיש... לא אמיתי. הצבעים זזים, הצללים מתעוותים. האם זו אשליה? או שמא אתה מאבד את שפיותך?",
             r24: "איך תצא מזה?",
             r25: "להתרכז ולחזור למציאות",
             r26: "לסמוך על התחושה ולהמשיך",
             r27: "המשך ללכת, ובמרחק אתה מבחין בטירה גדולה ויפהפייה... אבל אז אתה מבחין בשומר - ענק בגובה שלושה מטרים, אוחז בחרב עצומה.",
             r28: "איך תעבור?",
             r29: "לרוץ לידו",
             r30: "לחכות ולהתחמק",
             r31: "שלוש דלתות עומדות בפניך, כל אחת עם סמל מוזר: אגרוף (כוח), רגל ארנבת (זריזות), ספר (חוכמה). הבחירה שלך תקבע את גורלך.",
             r32: "איזו תבחר?",
             r33: "שמאלה — אני חזק",
             r34: "אמצע — זריזות בשבילי",
             r35: "ימין — קסם זה העולם שלי",
             r36: "מזל טוב, מצאת את הדלת שלך",
             r37: "מזל טוב, זו הסיום הרעה השלישית. נכשלת — לא הצלחת למצוא את הדלת שלך.",
             r38: "שפה",
             r39: "נכשלת! לקפוץ? אתה בן-אלמוות?...",
             r40: "נסה שוב",
             r41: "המשך",
             r42: "דלת הכוח נפתחת. אתה נמצא בשדה פתוח. רחוק — כפר קטן",
             r43: "ללכת לשם?",
             r44: "לגשת לכפר",
             r45: "לעקוף",
             r46: "נפלת לבור אפל, אך בתוכו מונחת חרב עתיקה עם סמל מוכר — אותו הסמל שראית בכפר. האם זה צירוף מקרים? או גורל?",
             r47: "החלטת ללכת לשם בכל מקרה",
             r48: "הכפר מלא באנשים רגילים. הצלחת לגלות קצת מידע",
             r49: "הם הציעו לפגוש את החכם ביער הדמדומים",
             r50: "אתה רואה בית מרחוק. מבעד לחלון — איש ליד שולחן",
             r51: "מה תעשה?",
             r52: "לפרוץ את הדלת",
             r53: "לדפוק",
             r54: "החכם מסתובב לעברך, עיניו מלאות זעם. 'אתה לא ראוי לכוח,' הוא לוחש — וברגע, הבית כולו מתפוגג באוויר.",
             r55: "אין לך ברירה",
             r56: "הדלת נפתחת לאט. החכם מביט בך, ואז מבחין בסמל על החרב. 'אז זה אתה,' הוא אומר בקול רועד. 'היכנס, נווד הגורל.'",
             r57: "מה תעשה עכשיו?",
             r58: "להיכנס",
             r59: "קודם לבדוק את הסביבה",
             r60: "הסוף?",
             r61: "מזל טוב, זו הסיום הרעה השנייה. אחרי שהחכם נעלם, נותרת במסע אינסופי בלי תשובות לשאלותיך",
             r62: "מזל טוב! זו הסיום הראשון - הסיפור נעצר כאן. כדי להמשיך, תצטרך לשלם $19.99.",
             r63: "קרדיטים",
             r64: "הסטטיסטיקות שלך:",
             r65: "הישגים",
             r66: "דלת הזריזות נפתחת בפניך — כל הכבוד! אתה מגלה שאינך בטירה, אלא בשדה פתוח, והחלטת לטייל קצת.",
             r67: "מרחוק אתה מבחין בחומה, או בעצם בשער; אנשים חוצים דרכו - כנראה זו כניסת הבירה.",
             r68: "לנסות לעבור ישירות",
             r69: "למצוא מסלול עקיף",
             r70: "כשאתה מתקרב אתה רואה אנשים שבודקים מסמכים — בלי תעודה הם לא מתירים לך לעבור. נראה שתצטרך לחזור אחורה.",
             r71: "מרחוק אתה מבחין בחומה, או בעצם בשער; אנשים חוצים דרכו - כנראה זו כניסת הבירה.",
             r72: "לנסות לעבור ישירות",
             r73: "לעקוף",
             r74: "נכנסת לכלא. טוב… יכול להיות היה יותר טוב, תנסה שוב.",
             r75: "הלכת לאורך החומה וגילית פתח ביוב. לא לגמרי ברור, אבל אין ברירה אחרת. חצת את הפתח ואתה ניצב ליד בניין גדול עם שלט בצלב אדום — כנראה בית חולים. כשנכנסת פנימה, פגשת את הרוקח; נדמה שאתם מדברים בשפה אחת, וזה משמח.",  
             r76: "על מה לשאול את הרוקח?",  
             r77: "באיזו מדינה אני נמצא?",  
             r78: "איפה אפשר להשיג כסף ומידע?",  
             r79: "הוא הביט בך במבוכה והנהן לכיוון הדלת הצדדית.",  
             r80: "החלטת שלא לשאול שאלות מיותרות ונכנסת פנימה.",  
             r81: "המסע שלך הגיע לסיומו.",  
             r82: "המאפיינים שלך:",  
             r83: "כוח:",  
             r84: "זריזות:",  
             r85: "אינטליגנציה:",  
             r86: "חוסן:",  
             r87: "הישגים:",
             r88: "החרב נמצאה",  
             r89: "הקמע נמצא",  
             r90: "פגשת את החכם",  
             r91: "ביקרת בכפר",  
             r92: "שם השחקן:",
             r93: "סביב לא היה דבר מיוחד, רק תליון מונח מתחת לשיחים.",  
             r94: "בלי לחוש אמון בחכם, החלטתם להחביא את התגלית.",  
             r95: "כשנכנסתם, גיליתם שהבית רחב יותר מבחוץ. הרהיטים עתיקים אך נראים כחדשים. למרות גילם, המקום הפיץ נוחות מפתיעה.",  
             r96: "החכם יושב ליד השולחן ומזמין אתכם להצטרף בתנועת יד.",  
             r97: "מין:",
             r98: "הלכת לאורך החומה ואתה רואה פתח קטן — אולי פתח ביוב? לא בטוח, אבל אין ברירה. עברת דרכו ומצאת את עצמך מול בניין עם שלט של צלב אדום. כנראה זה בית מרקחת.",
             r99: "אתה מחליט להיכנס פנימה.",
             r100: "בפנים אתה פוגש אדם — כנראה הרוקח. נדמה שאתם מדברים באותה שפה, וזה מרגיע. אתה שואל: \"איפה אפשר להרוויח כסף?\" הוא מביט בך מוזר ומצביע על דלת צדדית.",
             r101: "החלטת לא לשאול יותר מדי ונכנסת פנימה.",
             r102: "בתוך המחסן אתה רואה מדרגות שמובילות למטה. אתה יורד ומוצא את עצמך במנהרה מוארת באור עמום של קריסטלים. קולות נשמעים מרחוק.",
             r103: "מה תעשה?",
             r104: "להתגנב בלי להשמיע קול",
             r105: "התקרבת בשקט: אנשים מדברים על משלוח אסור. אחד מהם מוציא מפה, מניח אותה על תיבה ועוזב.",
             r106: "מה תעשה עכשיו?",
             r107: "לחטוף את המפה ולברוח",
             r108: "להישאר ולהמשיך לצפות",
             r109: "חטפת את המפה וברחת. מאחור נשמע: \"היי! מי שם?\" — אבל אתה מהיר מדי. בחוץ אתה עומד על גבעה מול הבירה.",
             r110: "במפה מסומן מקום — בסיס סודי בין חורבות ישנות.",
             r111: "לצאת אל החורבות",
             r112: "אתה שומע: הקושרים רוצים להרוג את המלך. אחד מהם אומר: \"מחר עם עלות השחר. נחליף את היין...\"",
             r113: "החלטת לפעול.",
             r114: "לצאת לארמון",
             r115: "בחורבות אתה מגלה מעבדה. במרכזה — קפסולה עם דמות קפואה. ליד — לוח בקרה.",              
             r116: "אולי זו מלכודת... ואולי זו הדרך להבין מה קורה.",
             r117: "להפעיל את הקפסולה",
             r118: "לשבור את הלוח ולברוח",
             r119: "הגעת לחומת הארמון. השומרים על המשמר. אתה מבחין בחריץ בין הקיר לשיחים.",
             r120: "איך תיכנס פנימה?",
             r121: "להתגנב דרך החריץ",
             r122: "להסיח את דעת השומרים",
             r123: "לחצת על הלוח. הקפסולה רועדת. על המסך: \"מופעל... 10... 9... 8...\"",
             r124: "יש לך תחושה שטעית.",
             r125: "לנסות לברוח",
             r126: "שברת את הלוח. הקפסולה כבתה. פתאום נפתח מעבר סודי. אתה בורח מהר — משהו עתיק נחתם לעד.",
             r127: "עשית את הבחירה הנכונה.",
             r128: "אתה פורץ לאולם הסעודה. \"חכו! אל תשתו!\" — אתה צועק. לאחר בדיקה מתברר שצדקת.",
             r129: "המלך מבקש לראות אותך מיד.",
             r130: "לגשת אל המלך",
             r131: "״הצלת את חיי,״ אומר המלך. ״כאות תודה, אני רוצה להציע לך משימה חשובה – להפוך למרגל סודי של הכתר. האם אתה מסכים?״",
             r132: "האם מצאת משמעות חדשה בעולם הזה?",
             r133: "מזל טוב! זהו הסיום הטוב השני. הפכת לאגדה, אך איש לא יידע את שמך.",
             r134: "מזל טוב! זהו הסיום הטוב השלישי. הפכת לגיבור ומצאת את ייעודך בעולם החדש.",
             r135: "מזל טוב… זהו הסיום הרע הראשון. הקפסולה נפתחה. העולם שקע בכאוס. היית העד הראשון לסוף.",
             r136: "לקבל את ההצעה",
             r137: "לעזוב את המעבדה",
             r138: "מצאת מפה",
             r139: "כוח",  
             r140: "זריזות",  
             r141: "Иאינטליגנציה",
            }
        }    

        let currentLang = 'ru';
        function updateTexts() {
         const elements = document.querySelectorAll('[data-lang-key]');
         elements.forEach(element => {
            if (element.className.includes('plus-mark')) return;
            const key = element.getAttribute('data-lang-key');
            
               if (translations[currentLang]?.[key]) {
                 element.textContent = translations[currentLang][key];
                  const frame = element.closest('.frame, #tex, #gender-screen, #titri');
                    if (frame) { 
                      frame.setAttribute('dir', currentLang === 'he' ? 'rtl' : 'ltr');
                      frame.setAttribute('lang', currentLang);
                    }
                }
            });
        }

      document.getElementById('rus').addEventListener('click', () => {
          currentLang = 'ru';
          updateTexts();
          localStorage.setItem('gameLang', 'ru');
      });

      document.getElementById('he').addEventListener('click', () => {
          currentLang = 'he';
          updateTexts();
          localStorage.setItem('gameLang', 'he');
      });

        window.addEventListener('DOMContentLoaded', () => {
         const savedLang = localStorage.getItem('gameLang') || 'ru';
         currentLang = savedLang;
         updateTexts();
        });

        let player = null;
        let currentFrame = 1;
        const savedPlayer = localStorage.getItem('player');
        player = savedPlayer ? JSON.parse(savedPlayer) : {};

        document.getElementById('startButton').addEventListener('click', function() {
         this.style.display = 'none';
         document.getElementById('gender-screen').style.display = 'block';
         document.getElementById('tex').style.display = 'none';
        });

        document.getElementById('boy').addEventListener('click', function() {
         askName('male');
        });

        document.getElementById('girl').addEventListener('click', function() {
         askName('female');
        });

        function askName(gender) {
         const genderText = (gender === 'male') ? 'парень' : 'девушка';
         const name = prompt(`отлично,как тебя звать?`);

           if (name) {
             alert(`отлично, приветствую тебя, ${name}!`);
      
                player = {
                 name: name,
                 gender: gender,
                 stats: {
                 strength: 0,
                 agility: 0,
                 intelligence: 0,
                 },
                 choices: [],
                 foundSword: false,
                 kulon: false,
                 stoleMap: false,
                 foundstuff: false,
                 konc1: false,
                 konc2: false,
                 surking: false,
                 foundstuffilusion: false,
                 achievements: []
                };
      
             localStorage.setItem('player', JSON.stringify(player));
             document.getElementById('gender-screen').style.display = 'none';
             document.getElementById('boy').style.display = 'none';
             document.getElementById('girl').style.display = 'none';
             document.body.style.background = 'none';
             document.getElementById('frame-1').style.display = 'block';
            } else {
             alert("???");
            }
        }

        function showSageFrame() {  
         const sageText = document.getElementById('mech');
         const player = JSON.parse(localStorage.getItem('player')) || { foundSword: false };
  
           if (player.foundSword) {
             sageText.textContent = currentLang === 'ru' 
             ? "Мудрец видит меч и улыбается: 'Этот артефакт избрал тебя... Заходи.'"
             : "החכם רואה את החרב ומחייך. 'זה לא מקרי שזה הגיע לידיך... היכנס.'";
            } else {
             sageText.textContent = currentLang === 'ru'
             ? "Мудрец осматривает тебя: 'Ты потерял что-то важное... Но всё же заходи.'"
             : "החכם בוחן אותך. 'איבדת משהו חשוב... אבל עדיין, היכנס.'";
            }

         document.getElementById('frame-13-strength').style.display = 'block';
         document.getElementById('frame-11-strength').style.display = "none";
        }

        function showstuffFrame() {  
         const stuffText = document.getElementById('stuf');
         const player = JSON.parse(localStorage.getItem('player')) || { foundstuff: false };
  
           if (player.foundstuff) {
             stuffText.textContent = currentLang === 'ru'
               ? "Посох, найденный ранее, защищает тебя от боли"
               : "המטה שנמצא קודם לכן מגן עליך מהכאב";
            } else {
             stuffText.textContent = currentLang === 'ru'
               ? "Ничто не защищает тебя от ужасной боли в голове"
               : "שום דבר לא מגן עליך מהכאב הנורא שבראשך";
            }

         document.getElementById('frame-15-intelligence').style.display = "none";
         document.getElementById('frame-16-intelligence').style.display = "block";   
        }

        function showfinal() {  
         const player = JSON.parse(localStorage.getItem('player')) || { konc1: false, konc2: false, foundstuff: false };
         
         if (player.foundstuff) {
            document.getElementById('frame-20-intelligence').style.display = "block"
         } else if (player.konc1) {
          document.getElementById('frame-18-intelligence').style.display = "block"
         } else if (player.konc2) {
          document.getElementById('frame-19-intelligence').style.display = "block"
         } 
         
         
         document.getElementById('frame-17-intelligence').style.display = "none";
        }

        function makeChoice(stat) {
         if (!player) return;
    
         player.stats[stat]++;
            player.choices.push(stat);
         localStorage.setItem('player', JSON.stringify(player));

         document.getElementById(`frame-${currentFrame}`).style.display = 'none';
         let nextFrame = currentFrame + 1;

         if (nextFrame <= 7) {
            document.getElementById(`frame-${nextFrame}`).style.display = 'block';
            currentFrame = nextFrame;
         }
        }
          
        function checkDoor(stat) {
         currentPath = stat;
         const player = JSON.parse(localStorage.getItem('player')) || {};
         player.currentPath = stat;
         localStorage.setItem('player', JSON.stringify(player));

         const statValue = player.stats[stat] || 0;
         document.getElementById('frame-7').style.display = 'none';
         if (statValue >= 3) {  
         document.getElementById(`frame-8-${stat}`).style.display = 'block';
         } else {
         document.getElementById(`frame-gameover-1`).style.display = 'block';
         }
        }

        function selectPath(path) {
         player.currentPath = path;
         localStorage.setItem("player", JSON.stringify(player));
        }

        function nextFrame() {
         const currentFrameElement = document.querySelector(`.${currentPath}-div[style*="block"]`);
         if (!currentFrameElement) return;

         const currentFrameNumber = parseInt(currentFrameElement.id.split('-')[1]);
    
         currentFrameElement.style.display = 'none';

         const nextFrameNumber = currentFrameNumber + 1;
         const nextFrameElement = document.getElementById(`frame-${nextFrameNumber}-${currentPath}`);
    
            if (nextFrameElement) {
             nextFrameElement.style.display = 'block';
            } else {
                document.getElementById('frame-win').style.display = 'block';
            }
        }

        document.addEventListener('click', function(e) {
            if (e.target && e.target.classList.contains('restart')) {
                currentFrame = 1;

                if (player) {
                    player = {
                        name: player.name,
                        gender: player.gender,
                        stats: { strength: 0, agility: 0, intelligence: 0},
                        choices: [],
                        foundSword: false,
                        kulon: false,
                        stoleMap: false,
                        foundstuff: false,
                        konc1: false,
                        konc2: false,
                        surking: false,
                        foundstuffilusion: false,
                        achievements: [],
                    };
                    localStorage.setItem('player', JSON.stringify(player));
                }

                document.querySelectorAll('.frame').forEach(frame => {
                  frame.style.display = 'none';
                  document.getElementById('titri').style.display = 'none';
                })

             document.getElementById('frame-1').style.display = 'block';
            }
        });

        function increaseStat(stat) {
            if (player && player.stats[stat] !== undefined) {
             player.stats[stat]++;
             localStorage.setItem('player', JSON.stringify(player));
            } else {
             console.warn("Игрок не найден или неправильный параметр: " + stat);
            }
        }

        function show_titri() {
         const titriElement = document.getElementById("titri");
            if (!titriElement) {
             console.error("Элемент #titri не найден");
             return;
            }

         const raw = localStorage.getItem('player');
         const saved = raw ? JSON.parse(raw) : {};
         const playerData = {
             name: saved.name || (currentLang === 'ru' ? "Безымянный герой" : "גיבור אלמוני"),
             stats: {
                 strength: saved.stats?.strength || 0,
                 agility: saved.stats?.agility || 0,
                 intelligence: saved.stats?.intelligence || 0,
                },
             choices: saved.choices || [],
             currentPath: saved.currentPath || null,
             foundSword: Boolean(saved.foundSword),
             kulon: Boolean(saved.kulon),
             stoleMap: Boolean(saved.stoleMap),
             foundstuff: Boolean(saved.foundstuff),
             konc1: Boolean(saved.konc1),
             konc2: Boolean(saved.konc2),
             surking: Boolean(saved.surking),
             foundstuffilusion: Boolean(saved.foundstuffilusion),
            };
        
         document.querySelectorAll('.titri.strength, .titri.agility, .titri.intelligence').forEach(el => {
             el.style.display = 'none';
            });
            if (['strength', 'agility', 'intelligence'].includes(playerData.currentPath)) {
             document.querySelectorAll(`.titri.${playerData.currentPath}`).forEach(el => {
                 el.style.display = 'block';
                });
            }   
                
         document.querySelector('.frame[style*="block"]').style.display = 'none';
         document.getElementById("titri").style.display = 'block';
        
         document.getElementById("credits-name").textContent = playerData.name;
         document.getElementById("stat-strength").textContent = playerData.stats.strength;
         document.getElementById("stat-agility").textContent = playerData.stats.agility;
         document.getElementById("stat-intelligence").textContent = playerData.stats.intelligence;
        
         document.querySelectorAll(".plus-mark").forEach(el => el.textContent = "");
         document.querySelector("#plus-mark-sword").textContent = playerData.foundSword ? "➕" : "❌";
         document.querySelector("#plus-mark-kulon").textContent = playerData.kulon ? "➕" : "❌";
         document.querySelector("#plus-mark-stoleMap").textContent = playerData.stoleMap ? "➕" : "❌";
         document.querySelector("#plus-mark-foundstuff").textContent = playerData.foundstuff ? "➕" : "❌";
         document.querySelector("#plus-mark-konc1").textContent = playerData.konc1 ? "➕" : "❌";
         document.querySelector("#plus-mark-konc2").textContent = playerData.konc2 ? "➕" : "❌";
         document.querySelector("#plus-mark-surking").textContent = playerData.surking ? "➕" : "❌";
         document.querySelector("#plus-mark-foundstuffilusion").textContent = playerData.foundstuffilusion ? "➕" : "❌";
        
         console.log(`${translations[currentLang].r92} ${playerData.name}`);
         console.log(`${translations[currentLang].r97} ${saved.gender}`);
         console.log(`${translations[currentLang].r83} ${playerData.stats.strength}`);
         console.log(`${translations[currentLang].r84} ${playerData.stats.agility}`);
         console.log(`${translations[currentLang].r85} ${playerData.stats.intelligence}`);
         console.log(`${translations[currentLang].r88} ${playerData.foundSword ? '➕' : '❌'}`);
         console.log(`${translations[currentLang].r89} ${playerData.kulon ? '➕' : '❌'}`);
         console.log(`${translations[currentLang].r138} ${playerData.stoleMap ? '➕' : '❌'}`);
         console.log(`${translations[currentLang].r} ${playerData.foundstuff ? '➕' : '❌'}`);
         console.log(`${translations[currentLang].r} ${playerData.konc1 ? '➕' : '❌'}`);
         console.log(`${translations[currentLang].r} ${playerData.konc2 ? '➕' : '❌'}`);
         console.log(`${translations[currentLang].r} ${playerData.surking ? '➕' : '❌'}`);
         console.log(`${translations[currentLang].r} ${playerData.foundstuffilusion ? '➕' : '❌'}`);
        }


        window.addEventListener('load', function() {
         const preloader = document.getElementById('preloader');
         if (!preloader) return;
         document.getElementById('preloader').style.display = 'block';
            const backgroundImages = [
             'https://foni.papik.pro/uploads/posts/2024-10/foni-papik-pro-aj05-p-kartinki-nochnoe-nebo-na-prozrachnom-fone-12.png',
             'https://cdn.pixabay.com/photo/2024/09/09/11/09/fall-9034528_1280.jpg',
             'https://cdn.pixabay.com/photo/2024/03/02/12/02/ai-generated-8608464_1280.jpg',
             'https://cdn.pixabay.com/photo/2023/02/01/08/01/fairytale-forest-7759927_1280.jpg',
             'https://cdn.pixabay.com/photo/2021/08/18/07/45/castle-6554907_960_720.jpg',
             'https://cdn.pixabay.com/photo/2024/01/24/09/02/ai-generated-8529089_960_720.png',
             'https://cdn.pixabay.com/photo/2023/06/14/18/22/ai-generated-8063802_1280.jpg',
             'https://cdn.pixabay.com/photo/2024/01/13/19/14/ai-generated-8506431_1280.jpg',
             'https://cdn.pixabay.com/photo/2024/05/07/06/13/ai-generated-8744900_1280.jpg',
             'https://cdn.pixabay.com/photo/2024/08/22/22/03/bed-8990246_960_720.png',
             'https://cdn.pixabay.com/photo/2024/06/21/04/17/ai-generated-8843438_1280.jpg',
             'https://cdn.pixabay.com/photo/2024/03/05/05/24/ai-generated-8613746_960_720.png',
             'https://cdn.pixabay.com/photo/2024/05/12/18/34/ai-generated-8757463_960_720.png',
             'https://cdn.pixabay.com/photo/2024/07/03/14/52/tunnel-8870193_1280.jpg',
             'https://cdn.pixabay.com/photo/2014/09/29/16/27/keller-466197_1280.jpg',
             'https://cdn.pixabay.com/photo/2024/06/06/06/58/homeopathic-8812002_1280.jpg',
             'https://cdn.pixabay.com/photo/2014/01/18/10/14/vaulted-cellar-247391_1280.jpg',
             'https://cdn.pixabay.com/photo/2013/10/21/14/09/domaine-de-cheverny-loire-199010_1280.jpg',
             'https://cdn.pixabay.com/photo/2018/01/21/18/03/theater-3097190_1280.jpg',
             'https://cdn.pixabay.com/photo/2019/12/19/09/07/deco-4705709_1280.jpg',
             'https://cdn.pixabay.com/photo/2016/12/27/20/54/russia-1934884_1280.jpg',
             '',
            ];
            const localImages = ['images/apteka.jpg', 'images/castle_gate.png'];
            const allImages = [...backgroundImages, ...localImages].filter(Boolean);

            
            const loadImages = backgroundImages.map(url => {
                return new Promise((resolve) => {
                 const img = new Image();
                 img.src = url;
                 img.onload = resolve;
                 img.onerror = resolve;
                });
            });

            Promise.all(loadImages).then(() => {
             document.getElementById('preloader').style.display = 'none';
            });
        });
