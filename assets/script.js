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
             r37: "Ты проиграл, ты не смог найти свою дверь.",
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
             r61: "После пропажи мудреца, тебя ждали вечные странствия без ответов на свои вопросы.",
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
             r73: "Найти обходной вход",
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
             r97: "пол:"
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
             r37: "נכשלת. הדלת לא נפתחה עבורך",
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
             r61: "החכם נעלם. נותרת במסע אין-סופי בלי תשובות",
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
             r73: "למצוא מסלול עקיף",
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
            }
        }    

        let currentLang = 'ru';
        function updateTexts() {
         const elements = document.querySelectorAll('[data-lang-key]');
         elements.forEach(element => {
         if(!element) return;
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

       window.addEventListener('load', function() {
         document.getElementById('preloader').style.display = 'none';
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
                 vitality: 0
                 },
                 choices: [],
                 foundSword: false,
                 metSage: false,
                 visitedVillage: false,
                 kulon: false,
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
            
        let currentPath = null;

        function checkDoor(stat) {
         currentPath = stat;
         document.getElementById('frame-7').style.display = 'none';
         document.getElementById(`frame-8-${stat}`).style.display = 'block';
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
                        stats: { strength: 0, agility: 0, intelligence: 0, vitality: 0 },
                        choices: [],
                        foundSword: false,
                        metSage: false,
                        kulon: false,
                        visitedVillage2: false,
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
            if(!titriElement) {
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
                 vitality: saved.stats?.vitality || 0,
                },
             choices: saved.choices || [],
             foundSword: Boolean(saved.foundSword),
             kulon: Boolean(saved.kulon),
             metSage: Boolean(saved.metSage),
             visitedVillage2: Boolean(saved.visitedVillage2),
            };

         document.getElementById("credits-name").textContent = playerData.name;
      
         document.querySelector('.frame[style*="block"]').style.display = 'none';
         document.getElementById("titri").style.display = 'block';
      
         document.getElementById("credits-name").textContent = playerData.name;
         document.getElementById("stat-strength").textContent     = playerData.stats.strength;
         document.getElementById("stat-agility").textContent      = playerData.stats.agility;
         document.getElementById("stat-intelligence").textContent = playerData.stats.intelligence;
         document.getElementById("stat-vitality").textContent     = playerData.stats.vitality;
      
         document.querySelectorAll(".plus-mark").forEach(el => el.textContent = "");

         document.querySelector("#plus-mark-sword").textContent   = playerData.foundSword     ? "➕" : "❌";
         document.querySelector("#plus-mark-kulon").textContent   = playerData.kulon           ? "➕" : "❌";
         document.querySelector("#plus-mark-mage").textContent    = playerData.metSage         ? "➕" : "❌";
         document.querySelector("#plus-mark-village2").textContent = playerData.visitedVillage2  ? "➕" : "❌";
         
         console.log(`${translations[currentLang].r92} ${player.name}`);
         console.log(`${translations[currentLang].r97} ${player.gender}`);
         console.log(`${translations[currentLang].r83} ${player.stats.strength}`);
         console.log(`${translations[currentLang].r84} ${player.stats.agility}`);
         console.log(`${translations[currentLang].r85} ${player.stats.intelligence}`);
         console.log(`${translations[currentLang].r91} ${player.visitedVillage2 ? '➕' : '❌'}`);
         console.log(`${translations[currentLang].r88} ${player.foundSword ? '➕' : '❌'}`);
         console.log(`${translations[currentLang].r90} ${player.metSage ? '➕' : '❌'}`);
         console.log(`${translations[currentLang].r89} ${player.kulon ? '➕' : '❌'}`);
        }