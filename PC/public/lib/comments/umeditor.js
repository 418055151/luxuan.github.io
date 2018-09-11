/**
 * Created by mac on 2018/3/12.
 */
//实例化编辑器
setTimeout(function(){myEditor()},800);
function myEditor() {
    let um = UM.getEditor('myEditor',{
        toolbars: [
            ['fullscreen', 'source', 'undo', 'redo', 'bold']
        ],
        autoHeightEnabled: true,
        autoFloatEnabled: true
    });
    um.addListener('blur',function(){
        $('#focush2').html('编辑器失去焦点了')
    });
    um.addListener('focus',function(){
        $('#focush2').html('')
    });
}
//按钮的操作
function insertHtml() {
    let value = prompt('插入html代码', '');
    um.execCommand('insertHtml', value)
}
function isFocus(){
    alert(um.isFocus())
}
function doBlur(){
    um.blur()
}
function createEditor() {
    enableBtn();
    um = UM.getEditor('myEditor');
}
function getAllHtml() {
    alert(UM.getEditor('myEditor').getAllHtml())
}
function getContent() {
    let arr = [];
    arr.push("使用editor.getContent()方法可以获得编辑器的内容");
    arr.push("内容为：");
    arr.push(UM.getEditor('myEditor').getContent());
    alert(arr.join("\n"));
}
function getPlainTxt() {
    let arr = [];
    arr.push("使用editor.getPlainTxt()方法可以获得编辑器的带格式的纯文本内容");
    arr.push("内容为：");
    arr.push(UM.getEditor('myEditor').getPlainTxt());
    alert(arr.join('\n'))
}
function setContent(isAppendTo) {
    let arr = [];
    arr.push("使用editor.setContent('欢迎使用umeditor')方法可以设置编辑器的内容");
    UM.getEditor('myEditor').setContent('欢迎使用umeditor', isAppendTo);
    alert(arr.join("\n"));
}
function setDisabled() {
    UM.getEditor('myEditor').setDisabled('fullscreen');
    disableBtn("enable");
}

function setEnabled() {
    UM.getEditor('myEditor').setEnabled();
    enableBtn();
}

function getText() {
    //当你点击按钮时编辑区域已经失去了焦点，如果直接用getText将不会得到内容，所以要在选回来，然后取得内容
    let range = UM.getEditor('myEditor').selection.getRange();
    range.select();
    let txt = UM.getEditor('myEditor').selection.getText();
    alert(txt)
}

function getContentTxt() {
    let arr = [];
    arr.push("使用editor.getContentTxt()方法可以获得编辑器的纯文本内容");
    arr.push("编辑器的纯文本内容为：");
    arr.push(UM.getEditor('myEditor').getContentTxt());
    alert(arr.join("\n"));
}
function hasContent() {
    let arr = [];
    arr.push("使用editor.hasContents()方法判断编辑器里是否有内容");
    arr.push("判断结果为：");
    arr.push(UM.getEditor('myEditor').hasContents());
    alert(arr.join("\n"));
}
function setFocus() {
    UM.getEditor('myEditor').focus();
}
function deleteEditor() {
    disableBtn();
    UM.getEditor('myEditor').destroy();
}
function disableBtn(str) {
    let div = document.getElementById('btns');
    let btns = domUtils.getElementsByTagName(div, "button");
    for (let i = 0, btn; btn = btns[i++];) {
        if (btn.id == str) {
            domUtils.removeAttributes(btn, ["disabled"]);
        } else {
            btn.setAttribute("disabled", "true");
        }
    }
}
function enableBtn() {
    let div = document.getElementById('btns');
    let btns = domUtils.getElementsByTagName(div, "button");
    for (let i = 0, btn; btn = btns[i++];) {
        domUtils.removeAttributes(btn, ["disabled"]);
    }
}
