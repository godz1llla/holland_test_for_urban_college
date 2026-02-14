package riasec.backend.data;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import riasec.backend.model.classes.Profession;
import riasec.backend.repository.ProfessionRepository;

import java.util.ArrayList;
import java.util.List;

@Component
public class ProfessionsSeedData implements CommandLineRunner {
        @Autowired
        ProfessionRepository professionRepository;

        @Override
        public void run(String... args) throws Exception {
                if (professionRepository.count() > 0) {
                        return;
                }

                List<Profession> professionsSeedData = new ArrayList<>();

                // Realistic
                professionsSeedData.add(new Profession("Air Traffic Controller", "Диспетчер воздушного движения",
                                "Әуе қозғалысының диспетчері", "SER"));
                professionsSeedData.add(new Profession("Archaeologist", "Археолог", "Археолог", "IRE"));
                professionsSeedData
                                .add(new Profession("Athletic Trainer", "Спортивный тренер", "Спорттық жаттықтырушы",
                                                "SRE"));
                professionsSeedData.add(new Profession("Cartographer", "Картограф", "Картограф", "IRE"));
                professionsSeedData.add(new Profession("Commercial Airline Pilot", "Пилот коммерческих авиалиний",
                                "Коммерциялық авиация пилоты", "RIE"));
                professionsSeedData
                                .add(new Profession("Commercial Drafter", "Коммерческий чертежник",
                                                "Коммерциялық сызбашы", "IRE"));
                professionsSeedData.add(new Profession("Dental Technician", "Зубной техник", "Тіс технигі", "REI"));
                professionsSeedData
                                .add(new Profession("Farm Manager", "Управляющий фермой", "Ферма басқарушысы", "ESR"));
                professionsSeedData
                                .add(new Profession("Fish and Game Warden", "Егерь (рыбнадзор)",
                                                "Егер (балық инспекциясы)", "RES"));
                professionsSeedData
                                .add(new Profession("Floral Designer", "Флорист-дизайнер", "Флорист-дизайнер", "RAE"));
                professionsSeedData.add(new Profession("Forester", "Лесник", "Орманшы", "RIS"));
                professionsSeedData.add(new Profession("Geodetic Surveyor", "Геодезист", "Геодезист", "IRE"));
                professionsSeedData
                                .add(new Profession("Industrial Arts Teacher", "Учитель труда",
                                                "Еңбек пәнінің мұғалімі", "IER"));
                professionsSeedData.add(new Profession("Laboratory Technician", "Лаборант", "Зертханашы", "RIE"));
                professionsSeedData
                                .add(new Profession("Landscape Architect", "Ландшафтный архитектор",
                                                "Ландшафт сәулетшісі", "AIR"));
                professionsSeedData.add(
                                new Profession("Mechanical Engineer", "Инженер-механик", "Инженер-механик", "RIS"));
                professionsSeedData.add(new Profession("Optician", "Оптик", "Оптик", "REI"));
                professionsSeedData
                                .add(new Profession("Petroleum Geologist", "Нефтяной геолог", "Мұнай геологы", "RIE"));
                professionsSeedData.add(new Profession("Police Officer", "Офицер полиции", "Полиция офицері", "SER"));
                professionsSeedData
                                .add(new Profession("Practical Nurse", "Практикующая медсестра", "Практикалық медбике",
                                                "SER"));
                professionsSeedData.add(new Profession("Property Manager", "Управляющий недвижимостью",
                                "Жылжымайтын мүлік басқарушысы", "ESR"));
                professionsSeedData.add(
                                new Profession("Recreation Manager", "Менеджер по отдыху",
                                                "Демалыс ұйымдастыру менеджері", "SER"));
                professionsSeedData.add(new Profession("Service Manager", "Сервис-менеджер", "Сервис-менеджер", "ERS"));
                professionsSeedData
                                .add(new Profession("Software Technician", "Техник-программист", "Программист-техник",
                                                "RCI"));
                professionsSeedData
                                .add(new Profession("Ultrasound Technologist", "Специалист УЗИ", "УДЗ маманы", "RSI"));
                professionsSeedData.add(new Profession("Vocational Rehabilitation Consultant",
                                "Консультант по профреабилитации", "Кәсіптік оңалту жөніндегі кеңесші", "ESR"));

                // Investigative
                professionsSeedData.add(new Profession("Actuary", "Актуарий", "Актуарий", "ISE"));
                professionsSeedData.add(new Profession("Agronomist", "Агроном", "Агроном", "IRS"));
                professionsSeedData.add(new Profession("Anesthesiologist", "Анестезиолог", "Анестезиолог", "IRS"));
                professionsSeedData.add(new Profession("Anthropologist", "Антрополог", "Антрополог", "IRE"));
                professionsSeedData.add(new Profession("Archaeologist", "Археолог", "Археолог", "IRE"));
                professionsSeedData.add(new Profession("Biochemist", "Биохимик", "Биохимик", "IRS"));
                professionsSeedData.add(new Profession("Biologist", "Биолог", "Биолог", "IRE"));
                professionsSeedData.add(new Profession("Chemical Engineer", "Инженер-химик", "Инженер-химик", "IRE"));
                professionsSeedData.add(new Profession("Chemist", "Химик", "Химик", "IRE"));
                professionsSeedData.add(new Profession("Computer Systems Analyst", "Аналитик компьютерных систем",
                                "Компьютерлік жүйелердің талдаушысы", "IER"));
                professionsSeedData.add(new Profession("Dentist", "Стоматолог", "Стоматолог", "ISR"));
                professionsSeedData.add(new Profession("Ecologist", "Эколог", "Эколог", "IRE"));
                professionsSeedData.add(new Profession("Economist", "Экономист", "Экономист", "IAS"));
                professionsSeedData.add(
                                new Profession("Electrical Engineer", "Инженер-электрик", "Инженер-электрик", "IRE"));
                professionsSeedData.add(new Profession("Geologist", "Геолог", "Геолог", "IRE"));
                professionsSeedData.add(new Profession("Horticulturist", "Садовод (плодовод)", "Бағбан", "IRS"));
                professionsSeedData.add(new Profession("Mathematician", "Математик", "Математик", "IRE"));
                professionsSeedData.add(new Profession("Medical Technologist", "Медицинский технолог",
                                "Медициналық технолог", "ISA"));
                professionsSeedData.add(new Profession("Meteorologist", "Метеоролог", "Метеоролог", "IRS"));
                professionsSeedData.add(new Profession("Nurse Practitioner", "Практикующая медсестра высшей категории",
                                "Жоғары санатты медбике", "ISA"));
                professionsSeedData.add(new Profession("Pharmacist", "Фармацевт", "Фармацевт", "IES"));
                professionsSeedData.add(new Profession("Physician, General Practice", "Терапевт (врач общей практики)",
                                "Терапевт (жалпы практикалық дәрігер)", "ISE"));
                professionsSeedData.add(new Profession("Psychologist", "Психолог", "Психолог", "IES"));
                professionsSeedData.add(new Profession("Research Analyst", "Аналитик-исследователь",
                                "Зерттеуші-талдаушы", "IRC"));
                professionsSeedData.add(new Profession("Statistician", "Статистик", "Статистик", "IRE"));
                professionsSeedData.add(new Profession("Surgeon", "Хирург", "Хирург", "IRA"));
                professionsSeedData.add(
                                new Profession("Technical Writer", "Технический писатель", "Техникалық жазушы", "IRS"));
                professionsSeedData.add(new Profession("Veterinarian", "Ветеринар", "Ветеринар", "IRS"));

                // Artistic
                professionsSeedData.add(new Profession("Actor", "Актер", "Актер", "AES"));
                professionsSeedData.add(new Profession("Advertising Art Director", "Арт-директор в рекламе",
                                "Жарнамадағы арт-директор", "AES"));
                professionsSeedData.add(new Profession("Advertising Manager", "Менеджер по рекламе",
                                "Жарнама менеджері", "ASE"));
                professionsSeedData.add(new Profession("Architect", "Архитектор", "Сәулетші", "AIR"));
                professionsSeedData.add(
                                new Profession("Art Teacher", "Учитель искусства", "Өнер пәнінің мұғалімі", "ASE"));
                professionsSeedData.add(new Profession("Artist", "Художник", "Суретші", "ASI"));
                professionsSeedData.add(new Profession("Copy Writer", "Копирайтер", "Копирайтер", "ASI"));
                professionsSeedData.add(
                                new Profession("Dance Instructor", "Инструктор по танцам", "Би нұсқаушысы", "AER"));
                professionsSeedData.add(new Profession("Drama Coach", "Преподаватель актерского мастерства",
                                "Актерлік шеберлік оқытушысы", "ASE"));
                professionsSeedData.add(new Profession("English Teacher", "Учитель английского языка",
                                "Ағылшын тілі мұғалімі", "ASE"));
                professionsSeedData.add(new Profession("Entertainer/Performer", "Артист/Исполнитель", "Әртіс/Орындаушы",
                                "AES"));
                professionsSeedData.add(
                                new Profession("Fashion Illustrator", "Иллюстратор моды", "Сән иллюстраторы", "ASR"));
                professionsSeedData.add(
                                new Profession("Interior Designer", "Дизайнер интерьера", "Интерьер дизайнері", "AES"));
                professionsSeedData.add(new Profession("Intelligence Research Specialist",
                                "Специалист по интеллектуальным исследованиям", "Зияткерлік зерттеулер маманы", "AEI"));
                professionsSeedData.add(new Profession("Journalist/Reporter", "Журналист/Репортер",
                                "Журналист/Репортер", "ASE"));
                professionsSeedData.add(new Profession("Landscape Architect", "Ландшафтный архитектор",
                                "Ландшафт сәулетшісі", "AIR"));
                professionsSeedData.add(new Profession("Librarian", "Библиотекарь", "Кітапханашы", "SAI"));
                professionsSeedData.add(new Profession("Medical Illustrator", "Медицинский иллюстратор",
                                "Медициналық иллюстратор", "AIE"));
                professionsSeedData.add(new Profession("Museum Curator", "Куратор музея", "Мұражай кураторы", "AES"));
                professionsSeedData.add(new Profession("Music Teacher", "Учитель музыки", "Музыка мұғалімі", "ASI"));
                professionsSeedData.add(new Profession("Photographer", "Фотограф", "Фотограф", "AES"));
                professionsSeedData.add(new Profession("Writer", "Писатель", "Жазушы", "ASI"));
                professionsSeedData.add(new Profession("Graphic Designer", "Графический дизайнер",
                                "Графикалық дизайнер", "AES"));

                // Social
                // Social
                professionsSeedData.add(new Profession("City Manager", "Сити-менеджер (управляющий городом)",
                                "Қала менеджері", "SEC"));
                professionsSeedData.add(new Profession("Clinical Dietitian", "Клинический диетолог",
                                "Клиникалық диетолог", "SIE"));
                professionsSeedData
                                .add(new Profession("College/University Faculty", "Преподаватель колледжа/университета",
                                                "Колледж/университет оқытушысы", "SEI"));
                professionsSeedData.add(new Profession("Community Org. Director", "Директор общественной организации",
                                "Қоғамдық ұйым директоры", "SEA"));
                professionsSeedData.add(new Profession("Consumer Affairs Director", "Директор по вопросам потребителей",
                                "Тұтынушылар ісі жөніндегі директор", "SER"));
                professionsSeedData
                                .add(new Profession("Counselor/Therapist", "Консультант/Терапевт", "Кеңесші/Терапевт",
                                                "SAE"));
                professionsSeedData.add(new Profession("Historian", "Историк", "Тарихшы", "SEI"));
                professionsSeedData.add(new Profession("Hospital Administrator", "Администратор больницы",
                                "Аурухана әкімшісі", "SER"));
                professionsSeedData.add(new Profession("Psychologist", "Психолог", "Психолог", "SEI"));
                professionsSeedData.add(new Profession("Insurance Claims Examiner", "Эксперт по страховым претензиям",
                                "Сақтандыру талаптарын сараптаушы", "SIE"));
                professionsSeedData.add(new Profession("Librarian", "Библиотекарь", "Кітапханашы", "SAI"));
                professionsSeedData.add(new Profession("Medical Assistant", "Медицинский ассистент",
                                "Медициналық ассистент", "SCR"));
                professionsSeedData.add(new Profession("Minister/Priest/Rabbi", "Священнослужитель", "Діни қызметкер",
                                "SAI"));
                professionsSeedData.add(new Profession("Paralegal", "Помощник юриста (паралегал)", "Заңгер көмекшісі",
                                "SCE"));
                professionsSeedData.add(new Profession("Park Naturalist", "Натуралист в парке", "Саябақ натуралисі",
                                "SEI"));
                professionsSeedData.add(new Profession("Physical Therapist", "Физиотерапевт", "Физиотерапевт", "SIE"));
                professionsSeedData.add(new Profession("Police Officer", "Офицер полиции", "Полиция офицері", "SER"));
                professionsSeedData.add(new Profession("Probation and Parole Officer", "Инспектор по пробации",
                                "Пробация инспекторы", "SEC"));
                professionsSeedData.add(new Profession("Real Estate Appraiser", "Оценщик недвижимости",
                                "Жылжымайтын мүлікті бағалаушы", "SCE"));
                professionsSeedData.add(new Profession("Recreation Director", "Директор по отдыху и досугу",
                                "Демалыс және бос уақытты ұйымдастыру директоры", "SER"));
                professionsSeedData.add(new Profession("Registered Nurse", "Дипломированная медсестра",
                                "Дипломдалған медбике", "SIA"));
                professionsSeedData.add(new Profession("Teacher", "Учитель", "Мұғалім", "SAE"));
                professionsSeedData.add(new Profession("Social Worker", "Социальный работник", "Әлеуметтік қызметкер",
                                "SEA"));
                professionsSeedData.add(new Profession("Speech Pathologist", "Логопед/Дефектолог", "Логопед/Дефектолог",
                                "SAI"));
                professionsSeedData.add(new Profession("Vocational-Rehab. Counselor", "Консультант по профреабилитации",
                                "Кәсіптік оңалту жөніндегі кеңесші", "SEC"));
                professionsSeedData.add(new Profession("Volunteer Services Director", "Директор волонтерских служб",
                                "Волонтерлік қызметтер директоры", "SEC"));

                // Enterprising
                // Enterprising
                professionsSeedData.add(new Profession("Advertising Executive", "Руководитель рекламного агентства",
                                "Жарнама агенттігінің басшысы", "ESA"));
                professionsSeedData.add(new Profession("Advertising Sales Rep", "Торговый представитель по рекламе",
                                "Жарнама бойынша сауда өкілі", "ESR"));
                professionsSeedData.add(new Profession("Banker/Financial Planner", "Банкир/Финансовый планировщик",
                                "Банкир/Қаржылық жоспарлаушы", "ESR"));
                professionsSeedData.add(new Profession("Branch Manager", "Управляющий филиалом", "Филиал басқарушысы",
                                "ESA"));
                professionsSeedData
                                .add(new Profession("Business Manager", "Бизнес-менеджер", "Бизнес-менеджер", "ESC"));
                professionsSeedData.add(new Profession("Buyer", "Байер (закупщик)", "Байер (сатып алушы)", "ESA"));
                professionsSeedData.add(new Profession("Chamber of Commerce Exec", "Руководитель торговой палаты",
                                "Сауда палатасының басшысы", "ESA"));
                professionsSeedData.add(new Profession("Credit Analyst", "Кредитный аналитик", "Кредиттік талдаушы",
                                "ESA"));
                professionsSeedData.add(new Profession("Customer Service Manager", "Менеджер по обслуживанию клиентов",
                                "Клиенттерге қызмет көрсету менеджері", "ESA"));
                professionsSeedData
                                .add(new Profession("Education & Training Manager", "Менеджер по обучению и развитию",
                                                "Оқыту және дамыту менеджері", "EIS"));
                professionsSeedData.add(new Profession("Emergency Medical Technician", "Фельдшер скорой помощи",
                                "Жедел жәрдем фельдшері", "ESI"));
                professionsSeedData.add(new Profession("Entrepreneur", "Предприниматель", "Кәсіпкер", "ESA"));
                professionsSeedData.add(new Profession("Foreign Service Officer", "Сотрудник дипломатической службы",
                                "Дипломатиялық қызмет қызметкері", "ESA"));
                professionsSeedData.add(new Profession("Funeral Director", "Похоронный директор",
                                "Жерлеу бюросының директоры", "ESR"));
                professionsSeedData
                                .add(new Profession("Insurance Manager", "Страховой менеджер", "Сақтандыру менеджері",
                                                "ESC"));
                professionsSeedData.add(new Profession("Interpreter", "Переводчик (устный)", "Аудармашы (ауызша)",
                                "ESA"));
                professionsSeedData.add(new Profession("Lawyer/Attorney", "Юрист/Адвокат", "Заңгер/Адвокат", "ESA"));
                professionsSeedData.add(new Profession("Lobbyist", "Лоббист", "Лоббист", "ESA"));
                professionsSeedData.add(new Profession("Office Manager", "Офис-менеджер", "Офис-менеджер", "ESR"));
                professionsSeedData.add(new Profession("Personnel Recruiter", "Рекрутер по подбору персонала",
                                "Персонал таңдау жөніндегі рекрутер", "ESR"));
                professionsSeedData.add(new Profession("Politician", "Политик", "Саясаткер", "ESA"));
                professionsSeedData.add(new Profession("Public Relations Rep", "Специалист по связям с общественностью",
                                "Қоғаммен байланыс маманы", "EAS"));
                professionsSeedData.add(new Profession("Retail Store Manager", "Управляющий магазином",
                                "Дүкен басқарушысы", "ESR"));
                professionsSeedData.add(new Profession("Sales Manager", "Менеджер по продажам", "Сату менеджері",
                                "ESA"));
                professionsSeedData.add(new Profession("Sales Representative", "Торговый представитель", "Сауда өкілі",
                                "ERS"));
                professionsSeedData.add(new Profession("Social Service Director", "Директор социальной службы",
                                "Әлеуметтік қызмет директоры", "ESA"));
                professionsSeedData.add(new Profession("Stockbroker", "Биржевой маклер/Брокер", "Биржа маклері/Брокер",
                                "ESI"));
                professionsSeedData.add(new Profession("Tax Accountant", "Налоговый бухгалтер", "Салық бухгалтері",
                                "ECS"));

                // Conventional
                professionsSeedData.add(new Profession("Abstractor", "Абстрактор (специалист по выпискам)",
                                "Абстрактор (үзінділер маманы)", "CSI"));
                professionsSeedData.add(new Profession("Accountant", "Бухгалтер", "Бухгалтер", "CSE"));
                professionsSeedData.add(new Profession("Administrative Assistant", "Административный помощник",
                                "Әкімшілік көмекші", "ESC"));
                professionsSeedData.add(new Profession("Budget Analyst", "Бюджетный аналитик", "Бюджет талдаушысы",
                                "CER"));
                professionsSeedData
                                .add(new Profession("Business Programmer", "Бизнес-программист", "Бизнес-программист",
                                                "CRI"));
                professionsSeedData.add(new Profession("Business Teacher", "Учитель бизнеса", "Бизнес пәнінің мұғалімі",
                                "CSE"));
                professionsSeedData.add(new Profession("Catalog Librarian", "Библиотекарь-каталогизатор",
                                "Кітапханашы-каталогизатор", "CSE"));
                professionsSeedData.add(new Profession("Claims Adjuster", "Специалист по урегулированию претензий",
                                "Шағымдарды реттеу маманы", "SEC"));
                professionsSeedData
                                .add(new Profession("Computer Operator", "Оператор компьютера", "Компьютер операторы",
                                                "CSR"));
                professionsSeedData.add(new Profession("Congressional-District Aide", "Помощник представителя округа",
                                "Округ өкілінің көмекшісі", "CES"));
                professionsSeedData.add(new Profession("Cost Accountant", "Бухгалтер по затратам",
                                "Шығындар жөніндегі бухгалтер", "CES"));
                professionsSeedData.add(new Profession("Court Reporter", "Судебный репортер/Секретарь",
                                "Сот репортері/хатшысы", "CSE"));
                professionsSeedData.add(new Profession("Credit Manager", "Кредитный менеджер", "Кредит менеджері",
                                "ESC"));
                professionsSeedData.add(new Profession("Customs Inspector", "Таможенный инспектор", "Кеден инспекторы",
                                "CEI"));
                professionsSeedData
                                .add(new Profession("Editorial Assistant", "Помощник редактора", "Редактор көмекшісі",
                                                "CSI"));
                professionsSeedData.add(new Profession("Elementary School Teacher", "Учитель начальных классов",
                                "Бастауыш сынып мұғалімі", "SEC"));
                professionsSeedData.add(new Profession("Financial Analyst", "Финансовый аналитик", "Қаржы талдаушысы",
                                "CSI"));
                professionsSeedData
                                .add(new Profession("Insurance Manager", "Страховой менеджер", "Сақтандыру менеджері",
                                                "ESC"));
                professionsSeedData.add(new Profession("Insurance Underwriter", "Страховой андеррайтер",
                                "Сақтандыру андеррайтері", "CSE"));
                professionsSeedData
                                .add(new Profession("Internal Auditor", "Внутренний аудитор", "Ішкі аудитор", "ICR"));
                professionsSeedData.add(
                                new Profession("Kindergarten Teacher", "Воспитатель детского сада",
                                                "Балабақша тәрбиешісі",
                                                "ESC"));
                professionsSeedData.add(new Profession("Medical Records Technician", "Техник по медицинским записям",
                                "Медициналық жазбалар технигі", "CSE"));
                professionsSeedData.add(new Profession("Museum Registrar", "Регистратор музея", "Мұражай тіркеушісі",
                                "CSE"));
                professionsSeedData.add(new Profession("Paralegal", "Помощник юриста", "Заңгер көмекшісі", "SCE"));
                professionsSeedData.add(new Profession("Safety Inspector", "Инспектор по безопасности",
                                "Қауіпсіздік инспекторы", "RCS"));
                professionsSeedData.add(new Profession("Tax Accountant", "Налоговый бухгалтер", "Салық бухгалтері",
                                "ECS"));
                professionsSeedData.add(new Profession("Tax Consultant", "Налоговый консультант", "Салық кеңесшісі",
                                "CES"));
                professionsSeedData.add(new Profession("Travel Agent", "Турагент", "Туристік агент", "ECS"));

                for (Profession prof : professionsSeedData) {
                        professionRepository.save(prof);
                }
        }
}
