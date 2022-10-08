var b=[];var i = 0;document.querySelectorAll('[class="a-size-base a-color-base a-text-normal"]').forEach(e=>{
    var a ={}
    a['title']=document.querySelectorAll('[class="a-size-base a-color-base a-text-normal"]')[i].innerText.split('\n')[0];
    a['price']=document.querySelectorAll('[class="a-price"]')[i].innerText;
    a['img']=document.querySelectorAll('img')[i].src
    i=i+1;b.push(a)
})