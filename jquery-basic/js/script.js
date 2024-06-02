$(function(){
  const h1Color =$('h1').text();
const pText = $('p').text();
const text2 = $('li[class^="sample"]').text('中身を変更しました');
$('li[class^="sample"]').css('color','red');
const libBefore = $('li[class^="sample"]').before('<li class="add">リストを追加しました</li>');
// $('.add').remove();
console.log(h1Color);
console.log(pText);
console.log(text2);
const textRed = $('h1').on({

//   $('h1').css('color','red');
//   console.log('赤色で表示');
// });

// const textOff = $('h1').off('click');
  'click':() => {
    $('h1').css('color','blue');
  },
  'dblclick':() =>{
    $('h1').css('color','red');
  },
});

const textBackColor = $('p').on('click dblclick',(e) =>{
  if(e.type=== 'click'){
    $('p').css('backgroundColor','green');
  }
  if(e.type === 'dblclick'){
    $('p').css('backgroundColor','yellow');
  }
});

const scrollColor = $(window).on('scroll load',(e) =>{
  if(e.type ==='scroll'){
    console.log('スクロールされました');
  }else if(e.type === 'load'){
    console.log('ロードされました');
  }
});

const colorChange = $('li[class*="sample"]').on(
  'click dblclick',(e) =>{
    if(e.type === 'click'){
      $('li[class*="sample"]').css('color','yellow');
    }
    else if(e.type === 'dblclick'){
      $('li[class*="sample"]').css('color','skyBlue');
    }
  }
);

// const addClass1 = $('p').on('click',() =>{
//   $('p').addClass('pBold');
// });

const toggleClass1 = $('p').on('click', () => {
  $('p').toggleClass('pBold');
});

  $('li').on('dblclick' , () =>{

    if($('p').hasClass('pBold')){
  console.log('クラス在り');
}else{
    console.log('クラスなし');
}
});


$('h1').on('click', () =>{
  $('h1').addClass('fontColor');
});

$('h1').on('click', ()=>{
  $('h1').hide();
});
$('p').on('dblclick', () =>{
  $('h1').show();
});

});

$(formValue = () =>{
  $('#check').on('click', ()=>{
    console.log(`名前：${$('[name="username"]').val()}`);

    // ラジオボタンではどのボタンが選択されているかチェックの必要性がある
    // その為、:checkedプロパティを使うことで取得できるようにする
    console.log(`性別：${$('[name="gender"]:checked').val()}`);

    console.log(`血液型：${$('[name="blood"]').val()}`);


    // thisを使う時は通常の関数を使う（thisのスコープが外側になり、
    // どこを参照しているのかが不明確もしくは見つからないため）
    $('[name="hobby"]:checked').each(function() {
      console.log(`趣味：${$(this).val()}`);
    });

    console.log(`私の血液型は${$('[name="blood"] option:selected').text()}です`);
    
    
  });
  // 全てのinputに対してイベント処理を入れる練習
  // changeはform内において、入力内容が変更されたときに発生
  $('form :input').on("input change",function() {

    // 全てのinput要素をチェックする為の関数
    function inputCheck(){

       // 全てのinput要素が入力されているか確認するフラグ
    let allInput = true;
      $('form :input[required]').each(function(){
      // もし、空のインプットがあればfalseを返し、
      // 処理を終了する
      if($(this).val() === '' || ($(this).is(':checkbox, :radio') && $(`input[name="${$(this).attr('name')}"]:checked`).length === 0)){
        allInput = false;
        return false;
      }
    });

    return allInput;
    }
    
    $('#check').prop('disabled', !inputCheck());
    });

      

    $('main p').css('color','green');

    
    $('[name="hobby"]').on('change',function(){
      if($('[name="hobby"]:checked').length > 3){
        $(this).prop('checked',false);
        $('#vacation').after('<p id="color">趣味は３つまでです</p>');
        $('#color').css('color','red');
      }
    });    

    $('#btn').on('click',() =>{
      $('#btn').after('<span id="green">クリックされました！</span>');
      $('#green').css('color','green');
    });

  
});

// // リストの自動生成練習
// const fruits = {
//   apple: 3,
//   orange: 4,
//   lemon: 7
// }

// const createFruitsList = (fruitsObject) => {
//   let list = "<ul>";
  
//   for (let fruit in fruitsObject) {
//     list += `<li>${fruit}: ${fruitsObject[fruit]}</li>`;
//   }

//   list += "</ul>";

//   $('button').after(list);
// }

// $(document).ready(() => {
//   createFruitsList(fruits);
// });


// コールバック関数の練習
const numberValue = (a,b) =>{
  return a * b;
}

const valueCheck = (numberValue,a,b) =>{

  const result = numberValue(a,b);

console.log(`numberValueの数値は、${result}です`);

  if(result > 15){
    console.log('15より大きいです');
    return;
  }
  console.log('15より小さいです');
}

valueCheck(numberValue,3,4);


// // フェードイン、アウトの制御
$(() =>{

  $('#fadeButton').on('click',() =>{
    

    // fadeメソッドを使用したアニメーション
$('#box').fadeToggle(1000,() =>{
      if($(this).is(':visible')){
        alert('success,fadeIn!');
      }else{
        alert('success.fadeout!');
      }
    });

  });
});

  // CSSを使用したアニメーション

  // ※アニメーションを違うやり方で２種類記述すると、
  // たとえコメントアウトしても上手く動作しなくなる
    // $('#box').css('opacity',0);
    // if($('#box').css('opacity') === '0'){
    //   $('#box').css('opacity',1);
    // }
    // });



$(() =>{
  $('#slideButton').on('click',() =>{
      $('#box').slideToggle(1000);
      // if($('#box').is(':hidden')){
      //   $('#box').slideDown();
      // }
});
});



