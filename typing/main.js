// テキストの表示をする為の変数
let untyped = '';

// 文字列を入れるspan要素を取得するための変数
// 変数であるのは後から再代入できるようにするため
let untypedField =document.getElementById('untyped');

// テキストの中身に何を入れるかの配列
const textLists =[
  'Hello World','This is my App','How are you?',
  'Today is sunny','I love JavaScript!','Good morning',
  'I am Japanese','Let it be','Samurai',
  'Typing Game','Information Technology',
  'I want to be a programmer','What day is today?',
  'I want to build a web app','Nice to meet you',
  'Chrome Firefox Edge Safari','machine learning',
  'Brendan Eich','John Resig','React Vue Angular',
  'Netscape Communications','undefined null NaN',
  'Thank you very much','Google Apple Facebook Amazon',
  'ECMAScript','console.log','for while if switch',
  'var let const','Windows Mac Linux iOS Android',
  'programming'
];

// テキストの配列を参照し、
// その上でその配列をspan要素に適用させるため
// 関数で一発で呼び出せるように
const createText = () => {
  // Mathオブジェクトに対して、
  // floorで小数点以下を切り捨て
  /*random*textLists.lengthで
  配列の数値をランダムで出力する*/ 
  let random = Math.floor(Math.random()*textLists.length);
  untyped =textLists[random];
  untypedField.textContent = untyped;
  
};

createText();

// キー入力が正しいのか判定するための関数
const keyPress = e => {

};

const rankCheck = score => {

};

const gameOver = id => {

};

const timer = () =>{

}