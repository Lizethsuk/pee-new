
const administraccion = "https://www.esan.edu.pe/mails/prueba-nativa/2021/pee-landing/data/AdministrationPage.json"

fetch(administraccion)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log('error: ' + err);
  });

function appendData(data) {
  console.log(data.titleSecondCurso)
  const title = document.getElementById("title-1");
  var titleText = document.createElement("div");
  titleText.className = "col "
  titleText.innerHTML= '<p class="title-text-curso">' + data.titleCurso + '</p>'
  title.appendChild(titleText);

  const title2 = document.getElementById("title-2");
  var title2Text = document.createElement("div");
  title2Text.className = "col "
  title2Text.innerHTML= '<p class="title-text-curso">' + data.titleSecondCurso + '</p>'
  title2.appendChild(title2Text);
  
  for (let i = 0; i < data.cursos.length; i++) {
    var mainContainer = document.getElementById("curso-content");
    console.log(data.cursos[i].section);  
    var div = document.createElement("li");
    div.className = "curso-content-item li-area "
    div.innerHTML =
      '<a target="_blank" href=  ' + data.cursos[i].linkCurso + ' class="text">'
      + '<div style="border-color: '+ data.cursos[i].bgColorCursos +' "  class="box-area">'
      + '<p class="title-curso">' + data.cursos[i].section + '</p>'
      + '<p class="name-curso">' + data.cursos[i].curso + '</p>'
      + '<hr style="border-color: '+ data.cursos[i].lineColorCursos +' " class="new4">' + '</hr>'
      + '<img src=' + data.cursos[i].img + '  alt="">'
      + '<p class="encargado">' + data.cursos[i].teacher + '</p>'
      + '<p class="fecha">' + data.cursos[i].horario + '</p>'
      + '</div>'
      + '</a>'

    // '<div>'
    // + '<h2>' + data.cursos[i].section + '</h2>'

    // + '</div>';


    mainContainer.appendChild(div);

  }

  for (let i = 0; i < data.cursosSecond.length; i++) {
    var mainContainer = document.getElementById("curso-content-2");
    // console.log(data.cursos[i].section);  
    var div = document.createElement("li");
    div.className = "curso-content-item li-area "
    div.innerHTML =
      '<a target="_blank" href=  ' + data.cursosSecond[i].linkCurso + ' class="text">'
      + '<div style="border-color: '+ data.cursosSecond[i].bgColorCursos +' "  class="box-area">'
      + '<p class="title-curso">' + data.cursosSecond[i].section + '</p>'
      + '<p class="name-curso">' + data.cursosSecond[i].curso + '</p>'
      + '<hr style="border-color: '+ data.cursosSecond[i].lineColorCursos +' " class="new4">' + '</hr>'
      + '<img src=' + data.cursosSecond[i].img + '  alt="">'
      + '<p class="encargado">' + data.cursosSecond[i].teacher + '</p>'
      + '<p class="fecha">' + data.cursosSecond[i].horario + '</p>'
      + '</div>'
      + '</a>'
    mainContainer.appendChild(div);

  }
   


}



