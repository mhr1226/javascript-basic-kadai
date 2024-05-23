// --オブジェクトで変数を格納したタイプ---


// 変数格納オブジェクト
const gameData ={

  // ↓↓↓↓↓↓↓↓↓文字列を入れるspan要素を取得するための変数↓↓↓↓↓↓↓↓↓↓↓
  // ↓↓↓↓↓↓↓↓↓変数であるのは後から再代入できるようにするため↓↓↓↓↓↓↓

  // ------------------------------------
   // テキストの表示をする為の変数
  untyped:'',
  // 入力済のテキストを表示する変数
  typed:'',

  // ↑↑↑↑↑↑↑-------------------↑↑↑↑↑↑↑↑↑↑

  // ↓↓↓↓↓↓↓↓タイプする文字列を表示するためのフィールド↓↓↓↓↓↓↓↓↓

  // -------------------------------------------

  // 未入力のテキストフィールド
  untypedField:document.getElementById('untyped'),

  // 入力済のテキストフィールド
  typedField:document.getElementById('typed'),

  //↑↑↑↑↑↑↑----------------------↑↑↑↑↑↑
  
  // タイプフィールドを囲う背景
  wrap:document.getElementById('wrap'),

  // スタートボタン
  start:document.getElementById('start'),

  // 一時停止ボタンを押した時の動作を制御する為に使用
  isPaused:true,


  // テキストの中身に何を入れるかの配列
  textLists: [
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
  ]
};

// テキストの配列を参照し、
// その上でその配列をspan要素に適用させるため
// 関数で一発で呼び出せるように
const createText = () => {
  // 変化した文字色と文字列のリセット
  gameData.typed ='';
  gameData.typedField.textContent =gameData.typed;
  // Mathオブジェクトに対して、
  // floorで小数点以下を切り捨て
  /*random*textLists.lengthで
  配列の数値をランダムで出力する*/ 
  let random = Math.floor(Math.random()*gameData.textLists.length);
  gameData.untyped =gameData.textLists[random];
  gameData.untypedField.textContent = gameData.untyped;
  
};



// キー入力が正しいのか判定するための関数
const keyPress = e => {

  // isPausedがtrueである場合に、keyPress内の処理を止める
  if(gameData.isPaused){
    return;
  }

  if(e.key !== gameData.untyped.substring(0,1)){
    gameData.wrap.classList.add('mistyped');

    // 色を一瞬だけ出すための関数
    setTimeout(() =>{
      gameData.wrap.classList.remove('mistyped');
    },100);
    return;
  }

  gameData.wrap.classList.remove('mistyped');
  // タイプされたら、untypedの0~1文字目以下までの内容を
  // typedに追加する
  gameData.typed += gameData.untyped.substring(0,1);
  // untypedは1文字目から始まる定義
  gameData.untyped = gameData.untyped.substring(1);
  // 入力できた文字を格納（#typedと連動）
  gameData.typedField.textContent = gameData.typed;
  // 未入力の文字を格納（#untypedと連動）
  gameData.untypedField.textContent = gameData.untyped;

  if(gameData.untyped === ''){
    createText();
  }
};



const rankCheck = score => {

};

const gameOver = id => {

};

const timer = () =>{

}

// ゲーム開始後の処理
gameData.start.addEventListener('click',() => {

  if(gameData.isPaused){
    // ゲームを再開する処理
    gameData.isPaused = false;
    // 再開ボタンを一時停止に変えるための処理
    gameData.start.textContent ='一時停止';
    // 再開時にゲームが始まるよう、関数を実行
    // テキストのrandom表示
    createText();
     // プレイ中のキー入力判定
  document.addEventListener('keypress',keyPress);
  }else{
    // ゲームを一時停止する処理
    gameData.isPaused = true;
    gameData.start.textContent ='再開'
       // キー入力を止める
    document.removeEventListener('keypress',keyPress);
  }

  // ゲーム開始時にボタンからフォーカスを外す
  gameData.start.blur();
  // 同時にテキストフィールドにフォーカスを移動するために使う
  gameData.wrap.focus();

  // div要素をフォーカス可能にするためのメソッド
  gameData.wrap.setAttribute('tabindex',0);

});



// ゲーム開始画面のタイプフィールド内の文字列
gameData.untypedField.textContent = 'スタートボタンで開始';











// ----通常の記述----




// // テキストの表示をする為の変数
// let untyped = '';

// // 入力済のテキストを表示する変数
// let typed ='';

// // 文字列を入れるspan要素を取得するための変数
// // 変数であるのは後から再代入できるようにするため
// const untypedField =document.getElementById('untyped');
// const typedField =document.getElementById('typed');
// const wrap =document.getElementById('wrap');

// // テキストの中身に何を入れるかの配列
// const textLists =[
//   'Hello World','This is my App','How are you?',
//   'Today is sunny','I love JavaScript!','Good morning',
//   'I am Japanese','Let it be','Samurai',
//   'Typing Game','Information Technology',
//   'I want to be a programmer','What day is today?',
//   'I want to build a web app','Nice to meet you',
//   'Chrome Firefox Edge Safari','machine learning',
//   'Brendan Eich','John Resig','React Vue Angular',
//   'Netscape Communications','undefined null NaN',
//   'Thank you very much','Google Apple Facebook Amazon',
//   'ECMAScript','console.log','for while if switch',
//   'var let const','Windows Mac Linux iOS Android',
//   'programming'
// ];

// // テキストの配列を参照し、
// // その上でその配列をspan要素に適用させるため
// // 関数で一発で呼び出せるように
// const createText = () => {
//   // 変化した文字色と文字列のリセット
//   typed ='';
//   typedField.textContent =typed;
//   // Mathオブジェクトに対して、
//   // floorで小数点以下を切り捨て
//   /*random*textLists.lengthで
//   配列の数値をランダムで出力する*/ 
//   let random = Math.floor(Math.random()*textLists.length);
//   untyped =textLists[random];
//   untypedField.textContent = untyped;
  
// };

// createText();

// // キー入力が正しいのか判定するための関数
// const keyPress = e => {

//   if(e.key !== untyped.substring(0,1)){
//     wrap.classList.add('mistyped');

//     // 色を一瞬だけ出すための関数
//     setTimeout(() =>{
//       wrap.classList.remove('mistyped');
//     },100);
//     return;
//   }

//   wrap.classList.remove('mistyped');
//   // タイプされたら、untypedの0~1文字目以下までの内容を
//   // typedに追加する
//   typed += untyped.substring(0,1);
//   // untypedは1文字目から始まる定義
//   untyped = untyped.substring(1);
//   // 入力できた文字を格納（#typedと連動）
//   typedField.textContent = typed;
//   // 未入力の文字を格納（#untypedと連動）
//   untypedField.textContent = untyped;

//   if(untyped === ''){
//     createText();
//   }
// };



// const rankCheck = score => {

// };

// const gameOver = id => {

// };

// const timer = () =>{

// }

// // キー入力時にkeyPress関数を呼び出す為の処理
// document.addEventListener('keypress',keyPress);

