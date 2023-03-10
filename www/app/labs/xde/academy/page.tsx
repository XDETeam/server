import Link from "next/link";

import { Article } from "@/components/Article";
import { LabsLink } from "@/labs/contracts";
import XdeTeam from "@/labs/xde/team";
import XdeApp from "@/labs/xde/app";
import Specs from "@/labs/software/executable-specs";
import Labs from "@/labs";

const Page = () => (
    <Article>
        <h1>XDE.Academy</h1>

        <section>
            <h2>TODO:Черновые концепции уроков</h2>

            <ul>
                <li>
                    Описать отличие нашей программы от других. Преимущественно они дают предметы
                    автономно, изредко связывая их. Мы же в силу выбранной архитектуры изначально
                    готовим для них обобщённую платформу. А потом заниматься собой или формированием
                    социальных структур в школах вообще не учат. Включить на принцип гетерогенности
                    из <Labs.Self.Technology.Link/>, а на неё же может сослаться и <Labs.Xde.Team.Link/>.
                </li>
                <li>
                    Важная роль концепции I/O.
                </li>
                <li>
                    Эксперимент в консоли (spaced repetition).
                </li>
                <li>
                    Абстракция стоящая за консолью и концепция IoC.
                </li>
                <li>
                    Замена через IoC/DI консоли на чат-бота.
                </li>
                <li>
                    Отдельный чат сервер для образовательной когорты.
                </li>
                <li>
                    Использовать ALPHA в качестве стенда для изучения. И через всякие
                    lspci/lshw изучать его устройство.
                </li>
            </ul>
        </section>

        <section>
            <h2>TODO:Выбор экосистемы</h2>
            
            <ul>
                <li>
                    Rust
                    <ul>
                        <li>
                            Rust хорош в DSL, но macro_rules! немного многословны.
                        </li>
                        <li>
                            Критикуемая система borrowing и другая специфика Rust может выглядеть
                            натуральной, если начать с неё в самом начале.
                        </li>
                    </ul>
                </li>
                <li>
                    Cx
                </li>
            </ul>
        </section>


        <h2>TODO:Потенциальная стратегия</h2>
        <p>
            Программное обеспечение в целом и языки программирования в частности &ndash; это в
            некотором смысле универсальный язык для любых областей человеческой деятельности.
            Музыканты и биологи, художники и работники строительной отрасли, практически не
            осталось специалистов, которые бы так или иначе не использовали те или иные
            приложения.
        </p>
        <p>
            Возьмем в качестве точки опоры идею приложения <XdeApp.Link/>. Это продукт, который
            &quot;делает всё&quot;. Но речь здесь идёт не о абсурдной, фантастической задаче,
            когда нечто что делает всё и сразу. А о том, что системные архитекторы, разрабатывающие
            гигантские программные комплексы, называют масштабированием. Решение начинается с
            некоторой платформы, которая предусматривает фундамент, на котором всем остальным задачам
            будет намного проще выстраиваться. Это как несущая основа здания, которое может потом
            заполняться самыми разными офисами.
        </p>
        <p>
            В некотором смысле такие платформы уже существуют. Для управления проектами и тестирования,
            для организации интерфейсов и коммуникаций, для хранения данных и их обработки. Например,
            СУБД (системы управления базами данных) предлагают универсальные механизмы для работы с
            данными, в независимости от того, описывают они музыкальное произведение или конструкцию
            космической ракеты.
        </p>
        <p>
            Формирование такого фундамента в приложении <XdeApp.Link/> &ndash; становится очень похожим
            на формирование основы образования. Как лучше понять другие области знаний, как их
            организовать, как разделить общие и специфичные детали, какие между ними зависимости, а
            значит в какой последовательности с ними работать. Разработка подобного универсального
            приложения выглядит как органичный образовательный процесс. Выстраивание форм внутри
            приложения и выстраивание аналогичных конструкций в нашем понимании мира практически
            полностью тождественны. А значит, его разработку можно сделать основой образовательного
            процесса.
        </p>
        <p>
            С точки зрения <LabsLink>интересов {XdeTeam.Caption}</LabsLink> и её стратегии первым
            идёт развитие личности. И первые же шаги в разработке данного приложения могут быть
            нацеленны именно на эту задачу. Особенно в рамках данной академии.
        </p>
        <p>
            Например, есть такая техника запоминания материалов как &quot;Spaced repetition&quot;.
            В быту многим известно приложение Anki, которое её реализует. Оно задаёт человеку вопрос
            из базы и в зависимости от правильности ответа на него определяет время, когда его
            задать в следующий раз. Ошибся &ndash; имеет смысл повторить через день. Уже третий
            раз отвечаешь правильно &ndash; можно отложить и на месяц.
        </p>
        <p>
            Эта техника не зависит от областей знаний и с равным успехом может быть применена в
            любой из них. По сути, ученики начинают с получения базовых знаний
            из <Labs.Self.Technology.Link/> и <Labs.Self.Informatics.Link /> для
            того, чтобы их сразу применять к созданию простого модуля <XdeApp.Link/>, реализующего
            кросс-дисциплинарную технику &quot;spaced repetition&quot;, которая в свою очередь начинает
            помогать в закреплении полученных знаний.
        </p>
        <p>
            На следующих этапах могут быть исследованы области управление временем, задачами. Которые
            также применимы к самым разным областям и аналогичным образом могут помочь студентам
            более эффективным образом организовывать свой же образовательный процесс. Который, напомним,
            мы рассматривает тоже как продукт деятельности инженера, как и в любой другой сфере их
            деятельности.
        </p>
        <p>
            За этим процессом может последовать организация работы командной работы и коммуникаций
            (разработка {XdeApp.Caption} &ndash; определённо потребует командной работы), модульные
            системы, способы взаимодействия между этими модулями и многие процессы, связанные
            с <Labs.Self.Technology.Link/> и <Labs.Self.Informatics.Link /> как
            дисциплинами, которые мы рассматриваем в роли базовых. 
        </p>
        <p>
            Последовательное и методичное внесение знаний в приложение будет выступать средством
            контроля органичности и целостности образовательного процесса, поскольку в противном
            случае приложение просто не может работать.
        </p>

        <h2>TODO:Потенциальная тактика</h2>
        <p>
            Как правило, образование начинается с решения примитивных задач. От простых они отличаются
            тем, что носят синтетический характер. Тогда как простые &ndash; это понятное решение даже
            для самых сложных. Опыт решения примитивных в реальной практике практически бесполезен,
            поэтому большинству студентов приходится переучиваться непосредственно на рабочем месте и
            немалая доля из полутора десятков лет инвестированных в образование становится бесполезной.
            Мы идём по принципу  методичного выстраивания очень сложного продукта &ndash; <XdeApp.Link/>.
        </p>
        <p>
            TODO:Есть важные принципы (IoC, модульность, реюзинг, управление изменениями и т.п.)
            без которых невозможно создать мало-мальски серьёзный продукт. И есть атомарные задачи
            с которыми может никогда не столкнётесь. Первое учит мыслить масштабно и в процессе
            может задействовать алгоритмическое мышление. Второй развивает только алгоритмическое
            мышление.
        </p>
        <p>
            В качестве эксперимента можно попробовать начать с .NET и BDD, в рамках
            концепции <Specs.Link/>.
            Во-первых, сложные приложения невозможно строить без TDD-подхода, который сам по себе
            может быть интересной инженерной концепцией. Во-вторых, сам BDD начинается с простых
            выражений на естественном языке. Дальше достаточно короткий переход к DI, за которым
            будут самые простые реализации, с последующим ростом до самых сложных.
        </p>
        <p>
            Таким образом последовательность развития события могла бы выглядеть следующим образом:
        </p>
        <ul>
            <li>
                В контексте больших задач рассказать о TDD/спецификациях (<Specs.Link/>) и создать
                Specs-сборку (простое консольное приложение). Провести параллели с TDD в других
                областях. Были идеи касающиеся строительства и ремонта.
            </li>
            <li>
                Описать первую задачу для &quot;Spaced repetition&quot; (можно комментариями) и
                функцию для её тестирования.
            </li>
            <li>
                Вывести абстракцию с которой будет работать этот тест. Пояснить, что за ней могут
                прятаться самые разные реализации. Рассказать про изменения (один из главных
                инженерных принципов).
            </li>
            <li>
                Когда задачи потребует подключения дополнительных модулей (Specflow, NSubstitute, ...) 
                можно рассказать про модули и модульность. В качестве примера привести модульность
                образовательного процесса, чья органичная корреляций описана в самом начале.
            </li>
            <li>
                Показать, как мы можем осуществить &quot;мокинг&quot; интерфейса до реализации.
            </li>
            <li>
                Выйти на хостинг и DI/IoC.
            </li>
            <li>
                TODO:Спланировать реализацию на примере чатбота Telegram.
            </li>
            <li>
                TODO:Можно попробовать показать SRP на примере &quote;Spaced repetition&quot;.
                Он может работать для всего, что повторяется периодически. Например, физических
                упражнений. И рассмотреть возможность конвертации сущностей в карточки вместо
                их ручного создания (SSoR, реюзинг).
            </li>
        </ul>
        <p>
            Альтернативный вариант может строиться на использовании VSCode + Polyglot notebooks.
        </p>
        <ul>
            <li>
                Описать первую задачу для &quot;Spaced repetition&quot; в виде текста в DIB/ipynnb
                и функцию для её тестирования.
            </li>
            <li>
                TODO:...
            </li>
        </ul>
        <p>
            Ещё один вариант мог бы строиться на экосистеме Rust. Из сильных сторон видится:
        </p>
        <ul>
            <li>
                Тесты &ndash; базовый инструмент.
            </li>
            <li>
                Проще реализовывать DSL. Можно постепенно завернуть функции тестирования в макросы.
            </li>
            <li>
                Упрощённая модель ООП.
            </li>
            <li>
                Органичная модель сборки.
            </li>
        </ul>
        <p>
            Rust может опираться на генеративный подход. Из Specs в продуктых для других языков и сред.
            Например, Swift-проект.
        </p>

        <h2>InBox</h2>

        <p>
            Интересным практическим кандидатом для исследования является идея рассматривать
            человеческую деятельность на примере
            лаборатории <Link href="/labs/application-flow">Application flow</Link>.
        </p>
    </Article>
);

export default Page;
