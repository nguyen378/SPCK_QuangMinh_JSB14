const { createElement } = require("react");

// font editing
const boldBtn = document.querySelector(".bold");
const italicBtn = document.querySelector(".italic");
const underlineBtn = document.querySelector(".underline");
const strikethroughBtn = document.querySelector(".strikethrough");
const uppercaseBtn = document.querySelector(".uppercase");

const fontSelect = document.querySelector(".font");
const fontSize = document.querySelector(".font-size");

const fontColorInput = document.getElementById("fontColorInput");
const highlightInput = document.getElementById("highlightInput");
const fontColorLabel = document.getElementById("fontColor");
const highlightLabel = document.getElementById("highlight");

function selectRange()
{
    const selection = window.getSelection();
    if (selection.rangeCount > 0 && selection.toString().length > 0) {return selection.getRangeAt(0);}
    return null;
}

// Lắng nghe sự kiện bôi đen trên TOÀN BỘ TRANG WEB
document.addEventListener('selectionchange', () => {
    const selection = window.getSelection();
    
    // Kiểm tra xem người dùng có đang bôi đen thực sự không
    if (selection.rangeCount > 0 && selection.toString().trim().length > 0) {
        
        // Tìm thẻ cha (Node) đang bao bọc trực tiếp đoạn chữ được bôi đen
        const anchorNode = selection.anchorNode;
        if (anchorNode) {
            const parentElement = anchorNode.parentElement;
            
            // Ép nút boldBtn sáng đèn HOẶC tắt đèn dựa vào CSS của thẻ cha
            if (parentElement.style.fontWeight === 'bold' || parentElement.tagName === 'B') {
                boldBtn.classList.add('active'); // Chữ đậm thì sáng đèn
            } else {
                boldBtn.classList.remove('active'); // Chữ thường thì tắt đèn
            }
        }
    } else {
        // Nếu người dùng click ra ngoài bỏ bôi đen hoàn toàn thì tắt đèn nút Bold
        boldBtn.classList.remove('active');
    }
});


// boldBtn.addEventListener('click',(e) => {   
//     e.preventDefault();
//     boldBtn.classList.toggle('active');
//     const range = selectRange();
//     if (range)
//     {
//         const span = document.createElement('span');
//         span.style.fontWeight = 'bold';

//         range.surroundContents(span);
//     }
// })
italicBtn.addEventListener('click',(e) => {
    italicBtn.classList.toggle('active');
    if (text.style.fontStyle == 'italic') {text.style.fontStyle = 'normal';}
    else {text.style.fontStyle = 'italic';}
})
underlineBtn.addEventListener('click',(e) => {
    underlineBtn.classList.toggle('active');
    if (text.style.textDecorationLine == 'underline') {text.style.textDecorationLine = 'none';}
    else {text.style.textDecorationLine = 'underline';}
})
strikethroughBtn.addEventListener('click',(e) => {
    strikethroughBtn.classList.toggle('active');
    if (text.style.textDecorationLine == 'line-through') {text.style.textDecorationLine = 'none';}
    else {text.style.textDecorationLine = 'line-through';}
})
uppercaseBtn.addEventListener('click',(e) => {
    uppercaseBtn.classList.toggle('active');
    if (text.style.textTransform == 'uppercase') {text.style.textTransform = 'none';}
    else {text.style.textTransform = 'uppercase';}
})

fontSelect.addEventListener("click", (e) => {
    text.style.fontFamily = e.target.value;
})
fontSize.addEventListener("click", (e) => {
    text.style.fontSize = e.target.value + "px";
})

fontColorInput.addEventListener("input", (e) => {
    const color = e.target.value;
    text.style.color = color;
    if (fontColorLabel) {fontColorLabel.style.backgroundColor = color;}
})
highlightInput.addEventListener("input", (e) => {
    const color = e.target.value;
    text.style.backgroundColor = color;
    if (highlightLabel) {highlightLabel.style.backgroundColor = color;}
})

// paragraph
const ulist = document.querySelector(".bullets");
const olist = document.querySelector(".numbering");
const clist = document.querySelector(".checklist");

const aleft = document.querySelector(".left");
const aright = document.querySelector(".right");
const acenter = document.querySelector(".center");
const ajustify = document.querySelector(".justify");

aleft.addEventListener("click", (e) => {
    aleft.classList.toggle("active");
    text.style.textAlign = "left";
})
aright.addEventListener("click", (e) => {
    aright.classList.toggle("active");
    if (text.style.textAlign === "right") {text.style.textAlign = "left";}
    else {text.style.textAlign = "right";}
})
acenter.addEventListener("click", (e) => {
    acenter.classList.toggle("active");
    if (text.style.textAlign === "center") {text.style.textAlign = "left";}
    else {text.style.textAlign = "center";}
})
ajustify.addEventListener("click", (e) => {
    ajustify.classList.toggle("active");
    if (text.style.textAlign === "justify") {text.style.textAlign = "left";}
    else {text.style.textAlign = "justify";}
})
