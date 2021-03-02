const showTag = document.getElementById("show");
let tagList = [{name:"Tag 1",number:1},{name:"Tag 2",number:2}];
let counter = tagList.length;

// определение состояния checkbox-а для режима readonly
function modeReadonly()
{
  return document.getElementById("check").checked;
}

//добавление одного тэга через метод
function addTag(tags) {
  if(modeReadonly()){
    return console.log("Операция невозможна в режиме readonly.");
  }
  if (!tags) {
    const newTag = document.getElementById("new").value;
    if (newTag !== "") {
      let element = document.createElement("div");
      element.className = "list-element";
      counter += 1;
      element.id = counter;
      let a = `${newTag}
		<button class="delete-button" type="button" onclick="deleteTag(${counter})">X</button>
    `;
      element.innerHTML = a;
      showTag.appendChild(element);
      tagList.push({name:newTag,number:counter});
    }
    else{
      console.log("Пожалуйста, введите тэг.")
    }
  }
  else{
    for (let i = 0; i < tags.length; i++){
      let element = document.createElement("div");
      element.className = "list-element";
      element.id = tags[i].number;
      let a = `${tags[i].name}
		<button class="delete-button" type="button" onclick="deleteTag(${tags[i].number})">X</button>
    `;
      element.innerHTML = a;
      showTag.appendChild(element);
    }
  }
}

// удаление одного тэга через метод
function deleteTag(id) {
  if(modeReadonly()){
    return console.log("Операция невозможна в режиме readonly.");
  }
  const delTag = document.getElementById(id);
  showTag.removeChild(delTag);
}

// получение списка добавленных тэгов
function getList() {
  for (let i = 0; i < tagList.length; i++) {
    console.log(tagList[i]);
  }
}

// установка нового списка тэгов вместо предыдущего
function setList() {
  if(modeReadonly()){
    return console.log("Операция невозможна в режиме readonly.");
  }
  showTag.innerHTML = "";
  addTag(tagList);
}

// изменение состояния readonly
function setReadonly(isReadonly)
{  
  document.getElementById("check").checked = isReadonly*(-1);
}

// запись/считывание списка тэгов в localStorage
function save(){
  localStorage.setItem('Tags', JSON.stringify(tagList));
}
