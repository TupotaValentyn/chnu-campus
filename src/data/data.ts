export type RouteData = {
  imageSrc: string;
  title: string;
  subtitle: string;
  address: string;
  path: string;
  routeDisplayName: string,
  phone: string;
  info: string
}

const routeData: RouteData[] = [
  {
    imageSrc: '/images/hostel-1.jpg',
    title: 'Гуртожиток № 1',
    subtitle: '2 зали фітнесу. Зал силової підготовки',
    address: '(вул. Крилова, 51)',
    path: '/hostel-1',
    routeDisplayName: 'list item 1',
    phone: '(0472) 45-01-82 ',
    info: 'Гуртожиток розрахований на 408 місць. Будівля на 9 поверхів введена в експлуатацію в 1977 році. Вартість проживання для студентів — 520 грн за місяць, 5200 грн за рік. На той час в гуртожитку проживали студенти філологічного факультету, що нараховував 3 відділення: російська мова та література, українська мова та література та іноземні студенти Казахстану, Узбекистану, Туркменії.    З реорганізацією педінституту навчальний заклад став Державним університетом і, як наслідок, до гуртожитку прийшли студенти інших факультетів: історики, юристи, соціальні педагоги. У гуртожитку, згідно проекту, система холів: 32 просторі холи, всього 128 затишних кімнат для проживання студентів, 16 кухонь, 3 кімнати самопідготовки, кімната студентської ради. Тренери  атлетично залу, що розташований на першому поверсі, допоможуть здійснити мрію про гарне натреноване тіло, підтримати здоров\'я. Чоловіча та жіноча душові кімнати загального користування, пральня — на першому поверсі. Для зручності мешканців, на кожному поверсі обладнано душові кімнати гігієни. Біля гуртожитку є спортивний майданчик. Вигідне розташування гуртожитку щодо автобусних зупинок, магазинів тощо. '
  }, {
    imageSrc: 'https://picsum.photos/seed/picsum/200/300',
    title: 'Test 2',
    subtitle: 'lorem ipsum subtitle',
    address: 'some address',
    path: '/hostel-2',
    routeDisplayName: 'list item 2',
    phone: '(0472) 45-01-82 ',
    info: 'Вартість проживання для студентів — 520 грн за місяць, 5200 грн за рік. У гуртожитку проживають студенти ННІ української філології та соціальних комунікацій, ННІ економіки і права, ННІ педагогічної освіти, соціальної роботи і мистецтва, Психологічного факультету, аспіранти та викладачі університету. \n' +
      'Для зручності та поліпшення умов проживання діє пральна кімната, 2 душові кімнати загального користування (12 кабінок) на першому поверсі та душові в аспірантському блоці. На шостому поверсі розташована спортивна кімната. На четвертому поверсі розташована художня майстерня. На восьмому поверсі розташована кімната студентської ради. На дев’ятому поверсі розташована кімната самопідготовки студентів. У гуртожитку діє навчальна лабораторія фізичної та медичної реабілітації ННІ фізичної культури спорту і здоров’я. Біля гуртожитку розташовані футбольний, баскетбольний та волейбольний майданчики. Вдосконаленням та розвитком дозвілля студентів займається студентський актив за підтримки вихователя та завідуючої гуртожитком. '

  }, {
    imageSrc: 'https://picsum.photos/seed/picsum/200/300',
    title: 'Test 3',
    subtitle: 'lorem ipsum subtitle',
    address: 'some address',
    path: '/hostel-3',
    routeDisplayName: 'list item 3',
    phone: '(0472) 45-01-82 ',
    info: 'Проживають студенти ННІ фізики, математики та комп’ютерно-інформаційних систем, Факультету обчислювальної техніки, інтелектуальних та управляючих систем.  Кімнати розраховано на 3 особи. Кількість місць – 312.Вартість проживання для студентів — 520 грн за місяць, 5200 грн за рік. Студенти можуть використовувати тенісну кімнату, пральню, душові, на кожному поверсі умивальники, кухні, 4 аудиторії, 1 кімната для самопідготовки. '
  }, {
    imageSrc: 'https://picsum.photos/seed/picsum/200/300',
    title: 'Test 4',
    subtitle: 'lorem ipsum subtitle',
    address: 'some address',
    path: '/hostel-4',
    routeDisplayName: 'list item 4',
    phone: '(0472) 45-01-82 ',
    info: 'Проживають студенти ННІ Фізичної культури, спорту і здоров’я; ННІ української філології та соціальних комунікацій; ННІ економіки і права; ННІ педагогічної освіти, соціальної роботи і мистецтва; ННІ історії і філософії. Всього студентських місць: 320. Вартість проживання для студентів — 520 грн за місяць, 5200 грн за рік. У гуртожитку для студентів працюють: кімнати самопідготовки, спортивна кімната, душові кімнати. '
  }, {
    imageSrc: 'https://picsum.photos/seed/picsum/200/300',
    title: 'Test 5',
    subtitle: 'lorem ipsum subtitle',
    address: 'some address',
    path: '/corpus-1',
    routeDisplayName: 'list item 5',
    phone: '(0472) 45-01-82 ',
    info: 'some'
  }
];

export default routeData;