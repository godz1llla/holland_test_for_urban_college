package riasec.backend.data;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import riasec.backend.model.classes.HollandCodeTest;
import riasec.backend.model.classes.HollandCodeTestQuestion;
import riasec.backend.model.enums.PersonalityType;
import riasec.backend.repository.HollandCodeTestQuestionRepository;
import riasec.backend.repository.HollandCodeTestRepository;

import java.util.ArrayList;
import java.util.List;

@Component
public class HollandCodeTestQuestionSeedData implements CommandLineRunner {
    @Autowired
    HollandCodeTestQuestionRepository hollandCodeTestQuestionRepository;

    @Autowired
    HollandCodeTestRepository hollandCodeTestRepository;

    @Override
    public void run(String... args) throws Exception {
        if (hollandCodeTestQuestionRepository.count() > 0) {
            return;
        }

        hollandCodeTestRepository.deleteAll(); // Clear tests to re-link with fresh questions

        List<HollandCodeTestQuestion> seedData = new ArrayList<>();

        // Realistic
        seedData.add(new HollandCodeTestQuestion("Are you practical?", "Вы практичны?", "Сіз практикалықсыз ба?",
                PersonalityType.REALISTIC));
        seedData.add(new HollandCodeTestQuestion("Are you straightforward/frank?", "Вы прямолинейны/откровенны?",
                "Сіз тік мінездісіз бе/ақкөңілсіз бе?", PersonalityType.REALISTIC));
        seedData.add(new HollandCodeTestQuestion("Are you mechanically inclined?", "У вас есть склонность к механике?",
                "Механикаға бейіміңіз бар ма?", PersonalityType.REALISTIC));
        seedData.add(new HollandCodeTestQuestion("Are you stable?", "Вы стабильны?", "Сіз тұрақтысыз ба?",
                PersonalityType.REALISTIC));
        seedData.add(new HollandCodeTestQuestion("Are you concrete?", "Вы конкретны?", "Сіз нақтысыз ба?",
                PersonalityType.REALISTIC));
        seedData.add(new HollandCodeTestQuestion("Are you reserved?", "Вы сдержаны?", "Сіз байсалдысыз ба?",
                PersonalityType.REALISTIC));
        seedData.add(new HollandCodeTestQuestion("Are you self-controlled?", "Вы обладаете самоконтролем?",
                "Сіз өзіңізді ұстай аласыз ба?", PersonalityType.REALISTIC));
        seedData.add(new HollandCodeTestQuestion("Are you independent?", "Вы независимы?", "Сіз тәуелсізсіз бе?",
                PersonalityType.REALISTIC));
        seedData.add(new HollandCodeTestQuestion("Are you ambitious?", "Вы амбициозны?", "Сіз өршілсіз бе?",
                PersonalityType.REALISTIC));
        seedData.add(new HollandCodeTestQuestion("Are you systematic?", "Вы систематичны?", "Сіз жүйелісіз бе?",
                PersonalityType.REALISTIC));
        seedData.add(new HollandCodeTestQuestion("Can you fix electrical things?",
                "Умеете ли вы чинить электроприборы?", "Электр заттарын жөндей аласыз ба?", PersonalityType.REALISTIC));
        seedData.add(new HollandCodeTestQuestion("Can you solve electrical problems?",
                "Умеете ли вы решать проблемы с электричеством?", "Электрлік мәселелерді шеше аласыз ба?",
                PersonalityType.REALISTIC));
        seedData.add(new HollandCodeTestQuestion("Can you pitch a tent?", "Умеете ли вы ставить палатку?",
                "Шатыр тіге аласыз ба?", PersonalityType.REALISTIC));
        seedData.add(new HollandCodeTestQuestion("Can you play a sport?", "Умеете ли вы заниматься спортом?",
                "Спортпен айналыса аласыз ба?", PersonalityType.REALISTIC));
        seedData.add(new HollandCodeTestQuestion("Can you read a blueprint?", "Умеете ли вы читать чертежи?",
                "Сызбаларды оқи аласыз ба?", PersonalityType.REALISTIC));
        seedData.add(new HollandCodeTestQuestion("Can you plant a garden?", "Умеете ли вы сажать сад?",
                "Бақша еге аласыз ба?", PersonalityType.REALISTIC));
        seedData.add(new HollandCodeTestQuestion("Can you operate tools and machine?",
                "Умеете ли вы работать с инструментами и станками?",
                "Құралдармен және машиналармен жұмыс істей аласыз ба?", PersonalityType.REALISTIC));
        seedData.add(new HollandCodeTestQuestion("Do you like to tinker with machines/vehicles?",
                "Нравится ли вам возиться с машинами/транспортом?",
                "Машиналармен/көліктермен айналысқанды ұнатасыз ба?", PersonalityType.REALISTIC));
        seedData.add(new HollandCodeTestQuestion("Do you like to work outdoors?",
                "Нравится ли вам работать на открытом воздухе?", "Далада жұмыс істегенді ұнатасыз ба?",
                PersonalityType.REALISTIC));
        seedData.add(new HollandCodeTestQuestion("Do you like to be physically active?",
                "Нравится ли вам быть физически активным?", "Физикалық тұрғыдан белсенді болғанды ұнатасыз ба?",
                PersonalityType.REALISTIC));
        seedData.add(
                new HollandCodeTestQuestion("Do you like to be use your hands?", "Нравится ли вам работать руками?",
                        "Қолыңызбен жұмыс істегенді ұнатасыз ба?", PersonalityType.REALISTIC));
        seedData.add(new HollandCodeTestQuestion("Do you like to build things?", "Нравится ли вам строить вещи?",
                "Заттарды құрастырғанды ұнатасыз ба?", PersonalityType.REALISTIC));
        seedData.add(new HollandCodeTestQuestion("Do you like to tend/train animals?",
                "Нравится ли вам ухаживать/дрессировать животных?", "Жануарларды баққанды/жаттықтырғанды ұнатасыз ба?",
                PersonalityType.REALISTIC));
        seedData.add(new HollandCodeTestQuestion("Do you like to work on electronic equipment?",
                "Нравится ли вам работать с электронным оборудованием?",
                "Электрондық жабдықтармен жұмыс істегенді ұнатасыз ба?", PersonalityType.REALISTIC));

        // Investigative
        seedData.add(new HollandCodeTestQuestion("Are you inquisitive?", "Вы любознательны?", "Сіз ізденімпазсыз ба?",
                PersonalityType.INVESTIGATIVE));
        seedData.add(new HollandCodeTestQuestion("Are you analytical?", "Обладаете ли вы аналитическим складом ума?",
                "Аналитикалық ойлау қабілетіңіз бар ма?", PersonalityType.INVESTIGATIVE));
        seedData.add(new HollandCodeTestQuestion("Are you scientific?", "Вы склонны к науке?",
                "Ғылымға бейімділігіңіз бар ма?", PersonalityType.INVESTIGATIVE));
        seedData.add(new HollandCodeTestQuestion("Are you observant/precise?", "Вы наблюдательны/точны?",
                "Сіз бақылағыш/дәлсіз бе?", PersonalityType.INVESTIGATIVE));
        seedData.add(new HollandCodeTestQuestion("Are you scholarly?", "Вы стремитесь к знаниям?",
                "Білімге құштарсыз ба?", PersonalityType.INVESTIGATIVE));
        seedData.add(new HollandCodeTestQuestion("Are you cautious?", "Вы осторожны?", "Сіз сақсыз ба?",
                PersonalityType.INVESTIGATIVE));
        seedData.add(new HollandCodeTestQuestion("Are you intellectually self-confident?",
                "Вы интеллектуально самоуверенны?", "Интеллектуалды тұрғыдан өзіңізге сенімдісіз бе?",
                PersonalityType.INVESTIGATIVE));
        seedData.add(new HollandCodeTestQuestion("Are you independent?", "Вы независимы?", "Сіз тәуелсізсіз бе?",
                PersonalityType.INVESTIGATIVE));
        seedData.add(new HollandCodeTestQuestion("Are you logical?", "Вы логичны?", "Сіз логикалықсыз ба?",
                PersonalityType.INVESTIGATIVE));
        seedData.add(new HollandCodeTestQuestion("Are you complex?", "Вы сложная личность?", "Сіз күрделі тұлғасыз ба?",
                PersonalityType.INVESTIGATIVE));
        seedData.add(new HollandCodeTestQuestion("Are you curious?", "Вы любопытны?", "Сіз әуесқойсыз ба?",
                PersonalityType.INVESTIGATIVE));
        seedData.add(new HollandCodeTestQuestion("Can you think abstractly?", "Умеете ли вы мыслить абстрактно?",
                "Абстрактілі түрде ойлай аласыз ба?", PersonalityType.INVESTIGATIVE));
        seedData.add(new HollandCodeTestQuestion("Can you solve math problems?",
                "Умеете ли вы решать математические задачи?", "Математикалық есептерді шеше аласыз ба?",
                PersonalityType.INVESTIGATIVE));
        seedData.add(new HollandCodeTestQuestion("Can you understand scientific theories?",
                "Понимаете ли вы научные теории?", "Ғылыми теорияларды түсіне аласыз ба?",
                PersonalityType.INVESTIGATIVE));
        seedData.add(
                new HollandCodeTestQuestion("Can you do complex calculations?", "Можете ли вы делать сложные расчеты?",
                        "Күрделі есептеулер жасай аласыз ба?", PersonalityType.INVESTIGATIVE));
        seedData.add(new HollandCodeTestQuestion("Can you use a microscope or computer?",
                "Умеете ли вы пользоваться микроскопом или компьютером?",
                "Микроскопты немесе компьютерді пайдалана аласыз ба?", PersonalityType.INVESTIGATIVE));
        seedData.add(
                new HollandCodeTestQuestion("Can you interpret formulas?", "Умеете ли вы интерпретировать формулы?",
                        "Формулаларды түсіндіре аласыз ба?", PersonalityType.INVESTIGATIVE));
        seedData.add(new HollandCodeTestQuestion("Do you like to explore a variety of ideas?",
                "Нравится ли вам изучать различные идеи?", "Әртүрлі идеяларды зерттегенді ұнатасыз ба?",
                PersonalityType.INVESTIGATIVE));
        seedData.add(new HollandCodeTestQuestion("Do you like to work independently?",
                "Нравится ли вам работать независимо?", "Тәуелсіз жұмыс істегенді ұнатасыз ба?",
                PersonalityType.INVESTIGATIVE));
        seedData.add(new HollandCodeTestQuestion("Do you like to perform lab experiments?",
                "Нравится ли вам проводить лабораторные эксперименты?",
                "Зертханалық тәжірибелер жасағанды ұнатасыз ба?", PersonalityType.INVESTIGATIVE));
        seedData.add(new HollandCodeTestQuestion("Do you like to deal with abstractions?",
                "Нравится ли вам иметь дело с абстракциями?", "Абстракциялармен айналысқанды ұнатасыз ба?",
                PersonalityType.INVESTIGATIVE));
        seedData.add(
                new HollandCodeTestQuestion("Do you like to do research?", "Нравится ли вам проводить исследования?",
                        "Зерттеу жүргізгенді ұнатасыз ба?", PersonalityType.INVESTIGATIVE));
        seedData.add(new HollandCodeTestQuestion("Do you like to be challenged?", "Нравится ли вам принимать вызовы?",
                "Қиындықтарды жеңгенді ұнатасыз ба?", PersonalityType.INVESTIGATIVE));

        // Artistic
        seedData.add(new HollandCodeTestQuestion("Are you creative?", "Вы творческий человек?",
                "Сіз шығармашылық адамсыз ба?", PersonalityType.ARTISTIC));
        seedData.add(new HollandCodeTestQuestion("Are you imaginative?", "У вас богатое воображение?",
                "Сіздің қиялыңыз ұшқыр ма?", PersonalityType.ARTISTIC));
        seedData.add(new HollandCodeTestQuestion("Are you innovative?", "Вы склонны к инновациям?",
                "Жаңашылдыққа бейіміңіз бар ма?", PersonalityType.ARTISTIC));
        seedData.add(new HollandCodeTestQuestion("Are you unconventional?", "Вы неординарны?", "Сіз ерекшесіз бе?",
                PersonalityType.ARTISTIC));
        seedData.add(new HollandCodeTestQuestion("Are you emotional?", "Вы эмоциональны?", "Сіз эмоционалдысыз ба?",
                PersonalityType.ARTISTIC));
        seedData.add(new HollandCodeTestQuestion("Are you independent?", "Вы независимы?", "Сіз тәуелсізсіз бе?",
                PersonalityType.ARTISTIC));
        seedData.add(new HollandCodeTestQuestion("Are you expressive?", "Вы выразительны?", "Сіз мәнерлісіз бе?",
                PersonalityType.ARTISTIC));
        seedData.add(new HollandCodeTestQuestion("Are you original?", "Вы оригинальны?", "Сіз бірегейсіз бе?",
                PersonalityType.ARTISTIC));
        seedData.add(new HollandCodeTestQuestion("Are you introspective?", "Вы склонны к самоанализу?",
                "Өз-өзіңізді тануға бейімсіз бе?", PersonalityType.ARTISTIC));
        seedData.add(new HollandCodeTestQuestion("Are you impulsive?", "Вы импульсивны?", "Сіз импульсивтісіз бе?",
                PersonalityType.ARTISTIC));
        seedData.add(new HollandCodeTestQuestion("Are you sensitive?", "Вы чувствительны?", "Сіз сезімталсыз ба?",
                PersonalityType.ARTISTIC));
        seedData.add(new HollandCodeTestQuestion("Are you courageous?", "Вы отважны?", "Сіз батылсыз ба?",
                PersonalityType.ARTISTIC));
        seedData.add(new HollandCodeTestQuestion("Are you complicated?", "Вы сложный человек?",
                "Сіз күрделі адамсыз ба?", PersonalityType.ARTISTIC));
        seedData.add(new HollandCodeTestQuestion("Are you idealistic?", "Вы идеалист?", "Сіз идеалистсіз бе?",
                PersonalityType.ARTISTIC));
        seedData.add(new HollandCodeTestQuestion("Are you nonconforming?", "Вы не склонны к конформизму?",
                "Конформизмге бейім емессіз бе?", PersonalityType.ARTISTIC));
        seedData.add(new HollandCodeTestQuestion("Can you sketch, draw, paint?",
                "Умеете ли вы делать наброски, рисовать?", "Сіз сурет сала аласыз ба?", PersonalityType.ARTISTIC));
        seedData.add(new HollandCodeTestQuestion("Can you play a musical instrument?",
                "Умеете ли вы играть на музыкальном инструменте?", "Сіз музыкалық аспапта ойнай аласыз ба?",
                PersonalityType.ARTISTIC));
        seedData.add(new HollandCodeTestQuestion("Can you write stories, poetry, music?",
                "Умеете ли вы писать рассказы, стихи, музыку?", "Сіз әңгімелер, өлеңдер немесе музыка жаза аласыз ба?",
                PersonalityType.ARTISTIC));
        seedData.add(new HollandCodeTestQuestion("Can you sing, act, dance?",
                "Умеете ли вы петь, играть в театре, танцевать?",
                "Сіз өлең айта аласыз ба, театр сахнасында ойнай аласыз ба немесе билей аласыз ба?",
                PersonalityType.ARTISTIC));
        seedData.add(new HollandCodeTestQuestion("Can you design fashions or interiors?",
                "Умеете ли вы проектировать одежду или интерьеры?",
                "Сіз киім немесе интерьер дизайнын жасай аласыз ба?", PersonalityType.ARTISTIC));
        seedData.add(new HollandCodeTestQuestion("Do you like to attend concerts, theatre, art exhibits?",
                "Нравится ли вам посещать концерты, театры, художественные выставки?",
                "Сіз концерттерге, театрларға немесе өнер көрмелеріне барғанды ұнатасыз ба?",
                PersonalityType.ARTISTIC));
        seedData.add(new HollandCodeTestQuestion("Do you like to attend concerts, theatre, art exhibits?",
                "Нравится ли вам посещать концерты, театры, художественные выставки?",
                "Сіз концерттерге, театрларға немесе өнер көрмелеріне барғанды ұнатасыз ба?",
                PersonalityType.ARTISTIC));
        seedData.add(new HollandCodeTestQuestion("Do you like to read fiction, plays, and poetry?",
                "Нравится ли вам читать художественную литературу, пьесы и поэзию?",
                "Сіз көркем әдебиетті, пьесаларды немесе поэзияны оқығанды ұнатасыз ба?", PersonalityType.ARTISTIC));
        seedData.add(
                new HollandCodeTestQuestion("Do you like to work on crafts?", "Нравится ли вам заниматься рукоделием?",
                        "Сіз қолөнермен айналысқанды ұнатасыз ба?", PersonalityType.ARTISTIC));
        seedData.add(new HollandCodeTestQuestion("Do you like to take photography?",
                "Нравится ли вам заниматься фотографией?", "Сіз фотосуретке түсіргенді ұнатасыз ба?",
                PersonalityType.ARTISTIC));
        seedData.add(new HollandCodeTestQuestion("Do you like to express yourself creatively?",
                "Нравится ли вам творчески самовыражаться?",
                "Сіз өзіңіздің шығармашылығыңызды көрсеткенді ұнатасыз ба?", PersonalityType.ARTISTIC));
        seedData.add(new HollandCodeTestQuestion("Do you like to deal with ambiguous ideas?",
                "Нравится ли вам иметь дело с неоднозначными идеями?",
                "Сіз екіұшты идеялармен айналысқанды ұнатасыз ба?", PersonalityType.ARTISTIC));

        // Social
        seedData.add(new HollandCodeTestQuestion("Are you friendly?", "Вы дружелюбны?", "Сіз мейірімдісіз бе?",
                PersonalityType.SOCIAL));
        seedData.add(new HollandCodeTestQuestion("Are you helpful?", "Вы готовы прийти на помощь?",
                "Сіз көмектесуге дайынсыз ба?", PersonalityType.SOCIAL));
        seedData.add(new HollandCodeTestQuestion("Are you idealistic?", "Вы идеалист?", "Сіз идеалистсіз бе?",
                PersonalityType.SOCIAL));
        seedData.add(new HollandCodeTestQuestion("Are you insightful?", "Вы проницательны?", "Сіз көрегенсіз бе?",
                PersonalityType.SOCIAL));
        seedData.add(new HollandCodeTestQuestion("Are you outgoing?", "Вы общительны?",
                "Сіз ашықсыз ба/араласуды ұнатасыз ба?", PersonalityType.SOCIAL));
        seedData.add(new HollandCodeTestQuestion("Are you understanding?", "Вы понимающий человек?",
                "Сіз түсінінуші адамсыз ба?", PersonalityType.SOCIAL));
        seedData.add(new HollandCodeTestQuestion("Are you cooperative?", "Вы склонны к сотрудничеству?",
                "Сіз ынтымақтастыққа бейімсіз бе?", PersonalityType.SOCIAL));
        seedData.add(new HollandCodeTestQuestion("Are you generous?", "Вы щедры?", "Сіз жомартсыз ба?",
                PersonalityType.SOCIAL));
        seedData.add(new HollandCodeTestQuestion("Are you responsible?", "Вы ответственны?", "Сіз жауаптысыз ба?",
                PersonalityType.SOCIAL));
        seedData.add(new HollandCodeTestQuestion("Are you forgiving?", "Вы отходчивы/умеете прощать?",
                "Сіз кешірімдісіз бе?", PersonalityType.SOCIAL));
        seedData.add(new HollandCodeTestQuestion("Are you patient?", "Вы терпеливы?", "Сіз шыдамдысыз ба?",
                PersonalityType.SOCIAL));
        seedData.add(new HollandCodeTestQuestion("Are you kind?", "Вы добры?", "Сіз қайырымдысыз ба?",
                PersonalityType.SOCIAL));
        seedData.add(new HollandCodeTestQuestion("Can you teach/train others?", "Умеете ли вы обучать других?",
                "Басқаларды үйрете аласыз ба?", PersonalityType.SOCIAL));
        seedData.add(new HollandCodeTestQuestion("Can you express yourself clearly?",
                "Умеете ли вы ясно выражать свои мысли?", "Өз ойыңызды анық жеткізе аласыз ба?",
                PersonalityType.SOCIAL));
        seedData.add(new HollandCodeTestQuestion("Can you teach/train others?", "Умеете ли вы обучать других?",
                "Басқаларды үйрете аласыз ба?", PersonalityType.SOCIAL));
        seedData.add(new HollandCodeTestQuestion("Can you lead a group discussion?",
                "Можете ли вы вести групповое обсуждение?", "Топтық талқылауды жүргізе аласыз ба?",
                PersonalityType.SOCIAL));
        seedData.add(new HollandCodeTestQuestion("Can you mediate disputes?", "Умеете ли вы разрешать споры?",
                "Дауларды шеше аласыз ба?", PersonalityType.SOCIAL));
        seedData.add(new HollandCodeTestQuestion("Can you plan and supervise an activity?",
                "Умеете ли вы планировать и контролировать деятельность?",
                "Іс-әрекетті жоспарлап, оны бақылай аласыз ба?", PersonalityType.SOCIAL));
        seedData.add(new HollandCodeTestQuestion("Can you cooperate well with others?",
                "Умеете ли вы хорошо сотрудничать с другими?", "Басқалармен жақсы ынтымақтаса аласыз ба?",
                PersonalityType.SOCIAL));
        seedData.add(
                new HollandCodeTestQuestion("Do you like to work in groups?", "Нравится ли вам работать в группах?",
                        "Сіз топпен жұмыс істегенді ұнатасыз ба?", PersonalityType.SOCIAL));
        seedData.add(new HollandCodeTestQuestion("Do you like to help people with problems?",
                "Нравится ли вам помогать людям с их проблемами?",
                "Адамдарға олардың мәселелерін шешуге көмектескенді ұнатасыз ба?", PersonalityType.SOCIAL));
        seedData.add(new HollandCodeTestQuestion("Do you like to do volunteer work?",
                "Нравится ли вам заниматься волонтерской деятельностью?",
                "Еріктілер (волонтерлік) жұмысымен айналысқанды ұнатасыз ба?", PersonalityType.SOCIAL));
        seedData.add(new HollandCodeTestQuestion("Do you like to work with young people?",
                "Нравится ли вам работать с молодежью?", "Жастармен жұмыс істегенді ұнатасыз ба?",
                PersonalityType.SOCIAL));
        seedData.add(new HollandCodeTestQuestion("Do you like to serve others?", "Нравится ли вам служить другим?",
                "Басқаларға қызмет еткенді ұнатасыз ба?", PersonalityType.SOCIAL));

        // Enterprising
        seedData.add(new HollandCodeTestQuestion("Are you self-confident?", "Вы уверены в себе?",
                "Сіз өзіңізге сенесіз бе?", PersonalityType.ENTERPRISING));
        seedData.add(new HollandCodeTestQuestion("Are you assertive?", "Вы настойчивы?", "Сіз табандысыз ба?",
                PersonalityType.ENTERPRISING));
        seedData.add(new HollandCodeTestQuestion("Are you persuasive?", "Вы убедительны?", "Сіз сенімдісіз бе?",
                PersonalityType.ENTERPRISING));
        seedData.add(new HollandCodeTestQuestion("Are you energetic?", "Вы энергичны?", "Сіз жігерлісіз бе?",
                PersonalityType.ENTERPRISING));
        seedData.add(new HollandCodeTestQuestion("Are you adventurous?", "Вы любите приключения?",
                "Сіз шытырман оқиғаларды ұнатасыз ба?", PersonalityType.ENTERPRISING));
        seedData.add(new HollandCodeTestQuestion("Are you ambitious?", "Вы амбициозны?", "Сіз өршілсіз бе?",
                PersonalityType.ENTERPRISING));
        seedData.add(new HollandCodeTestQuestion("Are you agreeable?", "Вы покладисты/соглашаетесь с другими?",
                "Сіз тіл алғышсыз ба?", PersonalityType.ENTERPRISING));
        seedData.add(new HollandCodeTestQuestion("Are you talkative?", "Вы разговорчивы?", "Сіз көпшілсіз бе?",
                PersonalityType.ENTERPRISING));
        seedData.add(new HollandCodeTestQuestion("Are you extroverted?", "Вы экстраверт?", "Сіз экстравертсіз бе?",
                PersonalityType.ENTERPRISING));
        seedData.add(new HollandCodeTestQuestion("Are you spontaneous?", "Вы спонтанны?",
                "Сіз тосыннан әрекет ете аласыз ба?", PersonalityType.ENTERPRISING));
        seedData.add(new HollandCodeTestQuestion("Are you optimistic?", "Вы оптимистичны?", "Сіз оптимистсіз бе?",
                PersonalityType.ENTERPRISING));
        seedData.add(new HollandCodeTestQuestion("Can you initiate projects?", "Можете ли вы инициировать проекты?",
                "Жобаларға бастамашы бола аласыз ба?", PersonalityType.ENTERPRISING));
        seedData.add(new HollandCodeTestQuestion("Can you convince people to do things your way?",
                "Можете ли вы убеждать людей делать что-то по-вашему?", "Адамдарды өз дегеніңізге көндіре аласыз ба?",
                PersonalityType.ENTERPRISING));
        seedData.add(new HollandCodeTestQuestion("Can you sell things?", "Умеете ли вы продавать вещи?",
                "Заттарды сата аласыз ба?", PersonalityType.ENTERPRISING));
        seedData.add(new HollandCodeTestQuestion("Can you give talks or speeches?", "Умеете ли вы выступать с речами?",
                "Сөз сөйлей аласыз ба?", PersonalityType.ENTERPRISING));
        seedData.add(
                new HollandCodeTestQuestion("Can you organize activities?", "Умеете ли вы организовывать мероприятия?",
                        "Іс-шараларды ұйымдастыра аласыз ба?", PersonalityType.ENTERPRISING));
        seedData.add(new HollandCodeTestQuestion("Can you lead a group?", "Можете ли вы возглавить группу?",
                "Топты бастай аласыз ба?", PersonalityType.ENTERPRISING));
        seedData.add(new HollandCodeTestQuestion("Can you persuade others?", "Умеете ли вы убеждать других?",
                "Басқаларды көндіре аласыз ба?", PersonalityType.ENTERPRISING));
        seedData.add(new HollandCodeTestQuestion("Do you like to make decisions?", "Нравится ли вам принимать решения?",
                "Шешім қабылдағанды ұнатасыз ба?", PersonalityType.ENTERPRISING));
        seedData.add(new HollandCodeTestQuestion("Do you like to be elected to office?",
                "Нравится ли вам быть избранным на должность?", "Лауазымға сайланғанды ұнатасыз ба?",
                PersonalityType.ENTERPRISING));
        seedData.add(new HollandCodeTestQuestion("Do you like to start your own business?",
                "Нравится ли вам открывать свой бизнес?", "Өз бизнесіңізді ашқанды ұнатасыз ба?",
                PersonalityType.ENTERPRISING));
        seedData.add(new HollandCodeTestQuestion("Do you like to campaign politically?",
                "Нравится ли вам участвовать в политических кампаниях?", "Саяси науқандарға қатысқанды ұнатасыз ба?",
                PersonalityType.ENTERPRISING));
        seedData.add(new HollandCodeTestQuestion("Do you like to meet important people?",
                "Нравится ли вам встречаться с важными людьми?", "Маңызды адамдармен кездескенді ұнатасыз ба?",
                PersonalityType.ENTERPRISING));
        seedData.add(new HollandCodeTestQuestion("Do you like to have power or status?",
                "Нравится ли вам иметь власть или статус?", "Билік немесе мәртебеге ие болғанды ұнатасыз ба?",
                PersonalityType.ENTERPRISING));

        // Conventional
        seedData.add(new HollandCodeTestQuestion("Are you well-organized?", "Вы хорошо организованы?",
                "Сіз жақсы ұйымдасқансыз ба?", PersonalityType.CONVENTIONAL));
        seedData.add(new HollandCodeTestQuestion("Are you accurate?", "Вы точны/аккуратны?", "Сіз ұқыпты/дәлсіз бе?",
                PersonalityType.CONVENTIONAL));
        seedData.add(new HollandCodeTestQuestion("Are you numerically inclined?", "Вы склонны к работе с числами?",
                "Сандармен жұмыс істеуге бейімсіз бе?", PersonalityType.CONVENTIONAL));
        seedData.add(new HollandCodeTestQuestion("Are you methodical?", "Вы методичны?", "Сіз әдістемеліксіз бе?",
                PersonalityType.CONVENTIONAL));
        seedData.add(new HollandCodeTestQuestion("Are you conscientious?", "Вы добросовестны?", "Сіз тиянақтысыз ба?",
                PersonalityType.CONVENTIONAL));
        seedData.add(new HollandCodeTestQuestion("Are you efficient?", "Вы эффективны?", "Сіз тиімдісіз бе?",
                PersonalityType.CONVENTIONAL));
        seedData.add(new HollandCodeTestQuestion("Are you conforming?", "Вы склонны к конформизму?",
                "Сіз конформдысыз ба?", PersonalityType.CONVENTIONAL));
        seedData.add(new HollandCodeTestQuestion("Are you practical?", "Вы практичны?", "Сіз практикалықсыз ба?",
                PersonalityType.CONVENTIONAL));
        seedData.add(new HollandCodeTestQuestion("Are you thrifty?", "Вы бережливы?", "Сіз үнемшілсіз бе?",
                PersonalityType.CONVENTIONAL));
        seedData.add(new HollandCodeTestQuestion("Are you systematic?", "Вы систематичны?", "Сіз жүйелісіз бе?",
                PersonalityType.CONVENTIONAL));
        seedData.add(new HollandCodeTestQuestion("Are you structured?", "Вы структурированы?", "Сіз құрылымдысыз ба?",
                PersonalityType.CONVENTIONAL));
        seedData.add(new HollandCodeTestQuestion("Are you polite?", "Вы вежливы?", "Сіз әдептісіз бе?",
                PersonalityType.CONVENTIONAL));
        seedData.add(new HollandCodeTestQuestion("Are you ambitious?", "Вы амбициозны?", "Сіз өршілсіз бе?",
                PersonalityType.CONVENTIONAL));
        seedData.add(new HollandCodeTestQuestion("Are you obedient?", "Вы послушны?", "Сіз тіл алғышсыз ба?",
                PersonalityType.CONVENTIONAL));
        seedData.add(new HollandCodeTestQuestion("Are you persistent?", "Вы настойчивы?", "Сіз табандысыз ба?",
                PersonalityType.CONVENTIONAL));
        seedData.add(new HollandCodeTestQuestion("Can you work well within a system?",
                "Можете ли вы хорошо работать в системе?", "Жүйеде жақсы жұмыс істей аласыз ба?",
                PersonalityType.CONVENTIONAL));
        seedData.add(new HollandCodeTestQuestion("Can you do a lot of paper work in a short time?",
                "Можете ли вы выполнять много бумажной работы за короткое время?",
                "Қысқа уақыт ішінде көптеген қағаз жұмыстарын орындай аласыз ба?", PersonalityType.CONVENTIONAL));
        seedData.add(new HollandCodeTestQuestion("Can you keep accurate records?", "Умеете ли вы вести точный учет?",
                "Дәл жазбалар жүргізе аласыз ба?", PersonalityType.CONVENTIONAL));
        seedData.add(new HollandCodeTestQuestion("Can you use a computer terminal?",
                "Умеете ли вы пользоваться компьютерным терминалом?", "Компьютер терминалын пайдалана аласыз ба?",
                PersonalityType.CONVENTIONAL));
        seedData.add(new HollandCodeTestQuestion("Can you write effective business letters?",
                "Умеете ли вы писать эффективные деловые письма?", "Тиімді іс-қағаздарын жаза аласыз ба?",
                PersonalityType.CONVENTIONAL));
        seedData.add(new HollandCodeTestQuestion("Do you like to follow clearly defined procedures?",
                "Нравится ли вам следовать четко определенным процедурам?",
                "Нақты анықталған процедураларды орындағанды ұнатасыз ба?", PersonalityType.CONVENTIONAL));
        seedData.add(new HollandCodeTestQuestion("Do you like to use data processing equipment?",
                "Нравится ли вам пользоваться оборудованием для обработки данных?",
                "Деректерді өңдеу жабдықтарын пайдаланғанды ұнатасыз ба?", PersonalityType.CONVENTIONAL));
        seedData.add(
                new HollandCodeTestQuestion("Do you like to work with numbers?", "Нравится ли вам работать с числами?",
                        "Сандармен жұмыс істегенді ұнатасыз ба?", PersonalityType.CONVENTIONAL));
        seedData.add(new HollandCodeTestQuestion("Do you like to type or take shorthand?",
                "Нравится ли вам печатать или писать стенографию?", "Басуды немесе стенографияны ұнатасыз ба?",
                PersonalityType.CONVENTIONAL));
        seedData.add(new HollandCodeTestQuestion("Do you like to be responsible for details?",
                "Нравится ли вам отвечать за детали?", "Егжей-тегжейлер үшін жауапты болғанды ұнатасыз ба?",
                PersonalityType.CONVENTIONAL));
        seedData.add(new HollandCodeTestQuestion("Do you like to collect or organize things?",
                "Нравится ли вам собирать или организовывать вещи?",
                "Заттарды жинауды немесе ұйымдастыруды ұнатасыз ба?", PersonalityType.CONVENTIONAL));

        for (HollandCodeTestQuestion q : seedData) {
            hollandCodeTestQuestionRepository.save(q);
        }

        List<HollandCodeTestQuestion> subSet = new ArrayList<>();
        for (int i = 0; i < seedData.size(); i++) {
            if ((i + 1) % 10 == 0) { // Check if it's the 10th question
                subSet.add(seedData.get(i)); // Add the question to the new list
            }
        }
        HollandCodeTest testDemonstration = new HollandCodeTest(
                "Holland Code Test (Demo)",
                "Тест Голланда (Демо)",
                "Голланд Код Тесті (Демо)",
                "This is a personality test based on the RIASEC model. This test is for demonstration purposes only, with a limited amount of questions.",
                "Это личностный тест, основанный на модели RIASEC. Этот тест предназначен только для демонстрационных целей и содержит ограниченное количество вопросов.",
                "Бұл RIASEC моделіне негізделген тұлғалық тест. Бұл тест тек демонстрациялық мақсаттарға арналған және сұрақтар саны шектеулі.",
                1, subSet);
        HollandCodeTest fullTest = new HollandCodeTest(
                "Holland Code Test",
                "Тест Голланда",
                "Голланд Код Тесті",
                "This is a personality test based on the RIASEC model. This is a full version of the test, including every question.",
                "Это личностный тест, основанный на модели RIASEC. Это полная версия теста, включающая все вопросы.",
                "Бұл RIASEC моделіне негізделген тұлғалық тест. Бұл тесттің толық нұсқасы, барлық сұрақтарды қамтиды.",
                1, seedData);
        hollandCodeTestRepository.save(testDemonstration);
        hollandCodeTestRepository.save(fullTest);

    }
}
