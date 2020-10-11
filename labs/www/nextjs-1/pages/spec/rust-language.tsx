import Code from "../../ui/Code";

export const Page = () => <>
    <h1>Rust</h1>

    <h2>Ownership</h2>
    <p>
        Принцип владения можно объяснить как достаточно натуральный и органичный. Участки памяти
        - это материальный ресурс, предмет. Как карандаш. Имена (включая параметры функций при
        передаче) - это как имена людей. Через явное (знаком равенства) или неявное (передача
        в качестве аргумента) присвоение (сам термин "присваивание" уже о многом говорит) мы
        как-будто физически передаём этот карандаш.
    </p>

    <Code lang="rust">{`
pub struct Pencil { }

fn main() {
    let pencil = Pencil {};
    let Stan = pencil;
    let Mike = pencil; // Error: use of moved value: 'pencil'
}
    `}</Code>
</>

export default Page;