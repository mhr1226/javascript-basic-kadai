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



});


