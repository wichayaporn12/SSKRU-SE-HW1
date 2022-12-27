/* คำสั่ง ให้นร.แก้ไขไฟล์ JS นี้ให้มีสามารถทำงานได้ถูกต้องตามที่โปรแกรมเครื่องคิดเลขควรจะเป็น
    ตัวอย่างสามารถดูได้ในโปรแกรม calculator ใน windows 
    
    Reference: https://www.w3schools.com/jsrEF/default.asp
*/

var DEBUG = true;

// ตัวอย่างการประกาศตัวแปรในภาษา javascript
var currentOutput = "";

if(DEBUG)
{
    console.log("DEBUG ON");
}

// หากต้องการแสดงผลใน console ให้ใช้ฟังก์ชั่นนี้
// หากไม่ต้องการแสดงผลใน console ให้ปรับค่า DEBUG = false;
function dbg()
{
    if(DEBUG)
    {
        console.log.apply(null, arguments);
    }
}

function oneClicked()
{
    dbg("1 is clicked");

    // ตัวอย่างการบวกตัวแปรและเก็บค่าใหม่ไว้ในตัวแปรเดิมในภาษา javascript
    // ถ้าใช้กับตัวแปรประเภทสตริง จะเป็นการนำอักษรนั้นๆไปต่อท้ายข้อความเดิม
    // ถ้าใช้กับตัวแปรประเภทตัวเลข จะเป็นการคำนวนทางคณิตศาสตร์
    currentOutput += "1";

    // ตัวอย่าง API ในการเข้าถึงและเซตค่า HTML element ด้วยภาษา javascript
        // ตัวอย่าง:
            // var e = document.getElementById("ไอดีของเอเลเม้นนั้นๆ")
            // e.value = "ค่าที่ต้องการ" 
            // member ที่เข้าถึงได้คือเทียบเท่ากับ attribute ของ HTML element นั้นๆ
            // เช่น value, innerHTML, href, src, อื่นๆ
    document.getElementById("display").value = currentOutput;

    /* คำแนะนำ
        ใช้วิธีเดียวกันนี้ในการเติมตัวเลขอื่นๆตั้งแต่ 0-9
    */
}

function twoClicked()
{
    dbg("2 is clicked");
    currentOutput += "2";
    document.getElementById("display").value = currentOutput;
}

function threeClicked()
{
    dbg("3 is clicked");
    currentOutput += "3";
    document.getElementById("display").value = currentOutput;
}

function fourClicked()
{
    dbg("4 is clicked");
    currentOutput += "4";
    document.getElementById("display").value = currentOutput;
}

function fiveClicked()
{
    dbg("5 is clicked");
    currentOutput += "5";
    document.getElementById("display").value = currentOutput;
}

function sixClicked()
{
    dbg("6 is clicked");
    currentOutput += "6";
    document.getElementById("display").value = currentOutput;
}

function sevenClicked()
{
    dbg("7 is clicked");
    currentOutput += "7";
    document.getElementById("display").value = currentOutput;
}

function eightClicked()
{
    dbg("8 is clicked");
    currentOutput += "8";
    document.getElementById("display").value = currentOutput;
}

function nineClicked()
{
    dbg("9 is clicked");
    currentOutput += "9";
    document.getElementById("display").value = currentOutput;
}

function zeroClicked()
{
    dbg("0 is clicked");
    currentOutput += "0";
    document.getElementById("display").value = currentOutput;
}

function dotClicked()
{
    dbg(". is clicked");
    currentOutput += ".";
    document.getElementById("display").value = currentOutput;
}

function plusClicked()
{
    dbg("+ is clicked");
    currentOutput += "+";
    document.getElementById("display").value = currentOutput;
}

function minusClicked()
{
    dbg("- is clicked");
    currentOutput += "-";
    document.getElementById("display").value = currentOutput;
}

function multiplyClicked()
{
    dbg("x is clicked");
    currentOutput += "*";
    document.getElementById("display").value = currentOutput;

    /* คำแนะนำ
        ตัวคูณในภาษาจาวาสคริปคือ *
    */
}

function divideClicked()
{
    dbg("÷ is clicked");
    currentOutput += "/";
    document.getElementById("display").value = currentOutput;

    /* คำแนะนำ
        ตัวหารในภาษาจาวาสคริปคือ /
    */
}

function equalClicked()
{
    dbg("= is clicked");
    var result = eval(currentOutput);
    document.getElementById("display").value = result;
    currentOutput = result;
    /* คำแนะนำ 
        ให้ใช้ฟังก์ชั่น eval ในการคำนวนค่าบวกลบคูณหาร
        ตัวอย่าง eval("10+7"); จะได้ผลลัพธ์ 17 
            หรือ eval(ตัวแปร) ก็ได้เช่นเดียวกัน
        **เมื่อ eval แล้วอย่าลืมอัพเดทค่า currentOutput ด้วย**
    */

    // ตัวอย่างการแสดงค่าออกทาง console เพื่อดูค่าของตัวแปร currentOutput
    dbg("ค่าของ currentOutput คือ ", currentOutput);
}

function delClicked()
{
    dbg("del is clicked");
    currentOutput = currentOutput.substring(0, currentOutput.length-1);
    document.getElementById("display").value = currentOutput;

    /* คำแนะนำ
        ให้ใช้ฟังก์ชั่น substring() หรือ slice() เพื่อลบตัวอักษรท้ายสุด 
        ตัวอย่าง:
            let str = "testt";
            str = str.substring(0, str.length - 1) จะได้ค่า "test"

            หรือ

            str = str.slice(0, -1); จะเป็นการหั่นสตริงจากตำแหน่ง 0 ถึงตำแหน่ง -1 (หรือตัวสุดท้าย)

        ทดสอบการทำงานของสองฟังก์ชั่นได้ตามต้องการ
    */
}

function clearClicked()
{
    dbg("C is clicked");
    currentOutput = "";
    document.getElementById("display").value = currentOutput;

    /* คำแนะนำ
        ให้ล้างค่า currentOutput และอัพเดท HTML text input id="display" โดยการใช้ document.getElementById()
        ตัวอย่าง:
            document.getElementById("ไอดีของ HTML element").value = "ค่าที่ต้องการ";

    */ 
}


/* Optional buttons ส่วนข้างล่างนี้จะทำหรือไม่ทำก็ได้ */
function poClicked()
{
    dbg("( is clicked");
    currentOutput += "(";
    document.getElementById("display").value = currentOutput;
}

function pcClicked()
{
    dbg(") is clicked");
    currentOutput += ")";
    document.getElementById("display").value = currentOutput;
}