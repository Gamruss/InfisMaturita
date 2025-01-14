document.addEventListener("DOMContentLoaded", function() {
var files = document.getElementsByClassName('files');
for (var i = 0; i < files.length; i++) {
files[i].style.display = 'none';
}
});

var categories = document.getElementsByClassName('category');
for (var i = 0; i < categories.length; i++) {
    categories[i].addEventListener('mouseover', function() {
        this.style.backgroundColor = '#580000';
    });
    categories[i].addEventListener('mouseout', function() {
        this.style.backgroundColor = '#282828';
    });
    categories[i].addEventListener('click', function() {
        this.style.backgroundColor = '#720000';
    });
}

document.querySelector(".maturitaLiteraturaFileType1").style.display = "none";

document.querySelector(".file-literatura-text-main-filetype").addEventListener("click", function() {
  var fileType = document.querySelector(".maturitaLiteraturaFileType1");
  if (fileType.style.display === "none") {
    fileType.style.display = "block";
  } else {
    fileType.style.display = "none";
  }
});

document.querySelector(".maturitaLiteraturaFileType2").style.display = "none";

document.querySelector(".file-literatura-text-second-filetype").addEventListener("click", function() {
  var fileType = document.querySelector(".maturitaLiteraturaFileType2");
  if (fileType.style.display === "none") {
    fileType.style.display = "block";
  } else {
    fileType.style.display = "none";
  }
});

document.querySelector(".maturitaItFileType1").style.display = "none";

document.querySelector(".file-it-text-main-filetype").addEventListener("click", function() {
  var fileType = document.querySelector(".maturitaItFileType1");
  if (fileType.style.display === "none") {
    fileType.style.display = "block";
  } else {
    fileType.style.display = "none";
  }
});

document.querySelector(".maturitaItFileType2").style.display = "none";

document.querySelector(".file-it-text-second-filetype").addEventListener("click", function() {
  var fileType = document.querySelector(".maturitaItFileType2");
  if (fileType.style.display === "none") {
    fileType.style.display = "block";
  } else {
    fileType.style.display = "none";
  }
});

document.querySelector(".maturitaSiteFileType1").style.display = "none";

document.querySelector(".file-site-text-main-filetype").addEventListener("click", function() {
  var fileType = document.querySelector(".maturitaSiteFileType1");
  if (fileType.style.display === "none") {
    fileType.style.display = "block";
  } else {
    fileType.style.display = "none";
  }
});

document.querySelector(".maturitaSiteFileType2").style.display = "none";

document.querySelector(".file-site-text-second-filetype").addEventListener("click", function() {
  var fileType = document.querySelector(".maturitaSiteFileType2");
  if (fileType.style.display === "none") {
    fileType.style.display = "block";
  } else {
    fileType.style.display = "none";
  }
});

document.querySelector(".maturitaMProgramovaniFileType1").style.display = "none";

document.querySelector(".file-Mprogramovani-text-main-filetype").addEventListener("click", function() {
  var fileType = document.querySelector(".maturitaMProgramovaniFileType1");
  if (fileType.style.display === "none") {
    fileType.style.display = "block";
  } else {
    fileType.style.display = "none";
  }
});

document.querySelector(".maturitaMProgramovaniFileType2").style.display = "none";

document.querySelector(".file-Mprogramovani-text-second-filetype").addEventListener("click", function() {
  var fileType = document.querySelector(".maturitaMProgramovaniFileType2");
  if (fileType.style.display === "none") {
    fileType.style.display = "block";
  } else {
    fileType.style.display = "none";
  }
});

document.querySelector(".maturitaMajFileType1").style.display = "none";

document.querySelector(".file-Maj-text-main-filetype").addEventListener("click", function() {
  var fileType = document.querySelector(".maturitaMajFileType1");
  if (fileType.style.display === "none") {
    fileType.style.display = "block";
  } else {
    fileType.style.display = "none";
  }
});

document.querySelector(".maturitaMajFileType2").style.display = "none";

document.querySelector(".file-Maj-text-second-filetype").addEventListener("click", function() {
  var fileType = document.querySelector(".maturitaMajFileType2");
  if (fileType.style.display === "none") {
    fileType.style.display = "block";
  } else {
    fileType.style.display = "none";
  }
});

document.querySelector(".maturitaMitFileType1").style.display = "none";

document.querySelector(".file-mit-text-main-filetype").addEventListener("click", function() {
  var fileType = document.querySelector(".maturitaMitFileType1");
  if (fileType.style.display === "none") {
    fileType.style.display = "block";
  } else {
    fileType.style.display = "none";
  }
});

document.querySelector(".maturitaMitFileType2").style.display = "none";

document.querySelector(".file-mit-text-second-filetype").addEventListener("click", function() {
  var fileType = document.querySelector(".maturitaMitFileType2");
  if (fileType.style.display === "none") {
    fileType.style.display = "block";
  } else {
    fileType.style.display = "none";
  }
});



function showCategory(category) {
    var files = document.getElementsByClassName('files');
    for (var i = 0; i < files.length; i++) {
        files[i].style.display = 'none';
    }
    document.getElementsByClassName(category)[0].style.display = 'block';
    var categories = document.getElementsByClassName('category');
    for (var i = 0; i < categories.length; i++) {
        categories[i].style.backgroundColor = '#282828';
    }
    document.getElementsByClassName(category)[1].style.backgroundColor = '#580000';
}

