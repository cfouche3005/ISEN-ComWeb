/**
 * @Author: Ayoub KARINE
 * @Company: ISEN Yncréa Ouest
 * @Email: ayoub.karine@isen-ouest.yncrea.fr
 * @Created Date: 21-Apr-2021 - 14:31:15
 * @Last Modified: 21-Apr-2021 - 20:02:21
 */
// ----------------- utils -------------------
function showhide(id) {
    let e = document.getElementById(id);
    let eClasses = e.classList;
    eClasses.toggle('d-none');
  }
  // ----------------- Gihub API -------------------
  const github = document.getElementById("github");
  github.addEventListener('click', showGithub);
  function showGithub() {
    showhide("githuarea");
    showhide("catarea");
  }
  // To do
  // ----------------- Cat API -------------------
  const cat = document.getElementById("cat");
  cat.addEventListener('click', showCat);
  function showCat() {
    showhide("catarea");
    showhide("githuarea");
  }
  // To do