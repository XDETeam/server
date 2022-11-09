export const SomeHeader = () => (
    <h1>SomeHeader</h1>
)

export const SomeAbstract = () => (
    <h1>SomeAbstract</h1>
)

export const SomeContent = () => (
    <>
        <SomeHeader />
        <SomeAbstract />
    </>
)

const Page = () => (
    <>
        <h1>Multi-language content</h1>

        <h2>TODO: Предварительный набросок проблематики</h2>

        <h3>Часть и целое</h3>
        <p>
            Если взять определённый контент и разбить его на блоки (параграфы с текстом, таблицы,
            иллюстрации, примеры кода, формулы и т.п.), то с высокой степенью вероятности не все
            компоненты будут нуждаться в переводе. Или, возможен другой вариант, когда направления
            перевода будут существенно отличаться. Например, текстовый блок предполагает переводы
            на натуральные языки, а блок кода может предполагать "перевод" на разные языки
            программирования. Какая-то часть может быть передана как на языке SQL, так и на языке
            IDEF1x. Аналогичным образом структура контента может быть совершенно независима от языков.
            Таким образом первая проблема - перевод осуществляется частями.
        </p>

        <h3>Опциональный перевод</h3>
        <p>
            TODO: Отсутствующий перевод, Fallback
        </p>

        <h3>Версионирование</h3>
        <p>
            Определённая сложность возникает с тем, чтобы синхронизировать переводы. Очевидно, что
            будет определённый интервал между модификацией на языке A и последующими модификациями
            на языках B и C. Каким образом будет формироваться контент на этом этапе? Как разработчики
            будут оповещаться о необходимости обновления переводов? Причём, здесь может потеряться
            концепция мастер-языка, поскольку изменения могут вноситься в любой из них. Ещё один
            нюанс, когда возникают конфликты при параллельном изменении на двух языках.
        </p>

        <h3>Удобство работы</h3>
        <p>
            В идеале обеспечить удобство работы как в рамках одного языка, так и кросс-язычные.
        </p>

        <h2>TODO: Экспериментальные решения для TSX/React</h2>
        <p>
            Предположим, у нас есть решение layout-компонент, описывающий структуру. Она, с высокой
            степенью вероятности, не будет подвергаться переводу. Хотя и такое не исключено.
            Потенциально мы получим такую картину:
        </p>

        <pre>{`
            export const SomeContent = () => (
                <>
                    <SomeHeader />
                    <SomeAbstract />
                    <SomeSection1 />
                    ...
                </>
            )
        `}</pre>

        <p>
            TODO: Динамический импорт компонент.
        </p>
    </>
)

export default Page;
