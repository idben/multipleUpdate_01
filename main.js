const checkAll = document.querySelector("input[name=all]");
const checkBoxs = document.querySelectorAll("input[type=checkbox]");
const btnDel = document.querySelector("button[name=btnDel]");
const hiddenForm = document.querySelector(".hiddenForm");
const hiddenInput = document.querySelector(".hiddenForm input");

checkAll.addEventListener("change", (e)=>{
  if(e.currentTarget.checked === true){
    checkAll.setAttribute("showText", "反選全部");
  }else{
    checkAll.setAttribute("showText", "選取全部");
  }
  Array.from(checkBoxs).map((checkbox,index)=>{
    checkbox.checked = e.currentTarget.checked;
  });
  console.log(checkBoxs.values()[1]);
})

btnDel.addEventListener("click", (e)=>{
  const checkBoxs = document.querySelectorAll("input[type=checkbox]");
  let checkedAry = [];
  for(checkbox of checkBoxs){
    if(checkbox.getAttribute("showText") === null && checkbox.checked === true){
      checkedAry.push(parseInt(checkbox.getAttribute("value")));
    }
  }
  hiddenInput.value = JSON.stringify(checkedAry);
  console.log(JSON.stringify(checkedAry))
  hiddenForm.submit();
})