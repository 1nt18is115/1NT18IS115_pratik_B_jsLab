
var op1;
var op2;
var op;

function insert(num){
    document.form.textview.value=document.form.textview.value+num ;
}

// function equal()
// {
//     var exp= document.form.textview.value ;
//     if(exp){
//         document.form.textview.value = eval(exp)

//     }
// }

function clean()
{
    document.form.textview.value="";
}

function clrbtn()
{
    document.form.textview.value="";
    op1 = 0;
    op2 = 0;
}

function add()
{
    op1 = parseInt(document.form.textview.value);
    console.log(op1);
    op = '+';
    clean();
}

function sub()
{
    op1 = parseInt(document.form.textview.value);
    console.log(op1);
    op = '-';
    clean();
}

function mul()
{
    op1 = parseInt(document.form.textview.value);
    console.log(op1);
    op = '*';
    clean();
}

function div()
{
    op1 = parseInt(document.form.textview.value);
    console.log(op1);
    op = '/';
    clean();
}
function equalto()
{
    op2 = parseInt(document.form.textview.value);
    console.log(op2);
    if (op === '+')
    {
        document.form.textview.value = op1+op2;
    }
    else if (op === '-')
    {
        document.form.textview.value = op1-op2;
    }
    else if (op === '*')
    {
        document.form.textview.value = op1*op2;
    }
    else if (op === '/')
    {
        document.form.textview.value = op1/op2;
    }
}