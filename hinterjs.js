/*
Hinter Js by Confi Yobo
*HinterJs v1.0
License under: GNU GENERAL PUBLIC LICENSE
*/

var msg = document.getElementsByName("allScript");
for (var i = 0; i < msg.length; i++) {
    var txt = document.getElementsByName("allScript")[i].innerHTML;
    txt = txt.replace(/class\=\'(.+?)\'/ig, '<span style="color:#2E8B57">class</span>=<span style="color:#CD4112">"$1"</span>');
    txt = txt.replace(/name\=\'(.+?)\'/ig, '<span style="color:#2E8B57">name</span>=<span style="color:#CD4112">"$1"</span>');
    txt = txt.replace(/class\=\"(.+?)\"/ig, '<span style="color:#2E8B57">class</span>=<span style="color:#CD4112">"$1"</span>');
    txt = txt.replace(/name\=\"(.+?)\"/ig, '<span style="color:#2E8B57">name</span>=<span style="color:#CD4112">"$1"</span>');
    txt = txt.replace(/id\=\"(.+?)\"/ig, '<span style="color:#2E8B57">id</span>=<span style="color:#CD4112">"$1"</span>');
    txt = txt.replace(/id\=\'(.+?)\'/ig, '<span style="color:#2E8B57">id</span>=<span style="color:#CD4112">"$1"</span>');

    txt = txt.replace(/href\=\"(.+?)\"/ig, '<span style="color:#2E8B57">href</span>=<span style="color:#7EC2FF">"$1"</span>');
    txt = txt.replace(/src\=\'(.+?)\'/ig, '<span style="color:#2E8B57">href</span>=<span style="color:#7EC2FF">"$1"</span>');
    txt = txt.replace(/src\=\"(.+?)\"/ig, '<span style="color:#CD4112">src</span>=<span style="color:#7EC2FF">"$1"</span>');
    txt = txt.replace(/src\=\'(.+?)\'/ig, '<span style="color:#2E8B57">src</span>=<span style="color:#7EC2FF">"$1"</span>');

    txt = txt.replace(/&lt;(.+?)&gt;/ig, '<span style="color:#68B6F9">&lt</span><span style="color:#383C2F">$1</span><span style="color:#68B6F9">&gt</span>');
    txt = txt.replace(/var/ig, '<span style="color:#8A2BE2">var</span>');
    txt = txt.replace(/if/ig, '<span style="color:#CD853F">if</span>');
    txt = txt.replace(/href/ig, '<span style="color:#2E8B57">href</span>');
    txt = txt.replace(/value/ig, '<span style="color:#2E8B57">value</span>');
    txt = txt.replace(/form/ig, '<span style="color:#383C2F">form</span>');
    txt = txt.replace(/elements/ig, '<span style="color:#547434">elements</span>');
    txt = txt.replace(/element/ig, '<span style="color:#547434">element</span>');
    txt = txt.replace(/window/ig, '<span style="color:#547434">window</span>');
    txt = txt.replace(/name/ig, '<span style="color:#008FB2">name</span>');
    txt = txt.replace(/Javascript/ig, '<span style="color:#9370DB">JavaScript</span>');
    txt = txt.replace(/type/ig, '<span style="color:#2E8B57">type</span>');
    txt = txt.replace(/.replace/ig, '<span style="color:#006400">.replace</span>');
    txt = txt.replace(/getElementsByName/ig, '<span style="color:#383C2F">getElementsByName</span>');
    txt = txt.replace(/string/ig, '<span style="color:#008B8B">string</span>');
    txt = txt.replace(/xhtml/ig, '<span style="color:orange">xhtml</span>');
    txt = txt.replace(/document/ig, '<span style="color:#383C2F">document</span>');
    txt = txt.replace(/theme/ig, '<span style="color:#383C2F">theme</span>');
    txt = txt.replace(/tema/ig, '<span style="color:#6495ED">tema</span>');
    txt = txt.replace(/print/ig, '<span style="color:green">print</span>');
    txt = txt.replace(/echo/ig, '<span style="color:green">echo</span>');
    txt = txt.replace(/die/ig, '<span style="color:#0F9483">die</span>');
    txt = txt.replace(/exit/ig, '<span style="color:#0F9483">exit</span>');
    txt = txt.replace(/return/ig, '<span style="color:#383C2F">return</span>');
    txt = txt.replace(/&quot;(.+?)&quot;/ig, '&quot;<span style="color:#CD4112">$1</span>&quot;');
    txt = txt.replace(/for/ig, '<span style="color:#CD853F">for</span>');
    txt = txt.replace(/while/ig, '<span style="color:#CD853F">while</span>');
    txt = txt.replace(/elif/ig, '<span style="color:#CD853F">elif</span>');
    txt = txt.replace(/else/ig, '<span style="color:#CD853F">else</span>');
    txt = txt.replace(/data-role/ig, '<span style="color:#2E8B57">data-role</span>');
    txt = txt.replace(/small/ig, '<span style="color:#3B4843">small</span>');
    txt = txt.replace(/div/ig, '<span style="color:#3B4843">div</span>');
    txt = txt.replace(/span/ig, '<span style="color:#3B4843">span</span>');
    txt = txt.replace(/textarea/ig, '<span style="color:#3B4843">textarea</span>');
    txt = txt.replace(/link/ig, '<span style="color:#3B4843">link</span>');
    txt = txt.replace(/protected/ig, '<span style="color:#3B4843">protected</span>');
    txt = txt.replace(/function/ig, '<span style="color:#2D2895">function</span>');
    txt = txt.replace(/public/ig, '<span style="color:#312CA2">public</span>');
    txt = txt.replace(/array/ig, '<span style="color:#29A584">array</span>');
    txt = txt.replace(/foreach/ig, '<span style="color:#2C92A2">foreach</span>');
    txt = txt.replace(/;/ig, '<span style="color:#C1B00D">;</span>');



    txt = txt.replace(/http/ig, '<span style="color:#7EC2FF">http</span>');
    txt = txt.replace(/Schedule/ig, '<span style="color:#7EC2FF">Schedule</span>');
    txt = txt.replace(/hidden/ig, '<span style="color:#1E90FF">hidden</span>');
    txt = txt.replace(/url/ig, '<span style="color:#1E90FF">url</span>');
    txt = txt.replace(/filelist/ig, '<span style="color:#CD5C5C">filelist</span>');
    txt = txt.replace(/text/ig, '<span style="color:#CD4112">text</span>');
    txt = txt.replace(/site/ig, '<span style="color:#CC0033">site</span>');
    document.getElementsByName("allScript")[i].innerHTML = txt;
}