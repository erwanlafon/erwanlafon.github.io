function infojv() {
  var linfo = "";
  if (document.getElementById("MC").checked){
    linfo = "Minecraft est un sandbox";
  }
  if (document.getElementById("FN").checked){
    linfo = "Fortnite est un battle royale";
  }
  if (document.getElementById("RB").checked){
    linfo = "ROBLOX est un sandbox";
  }
  if (document.getElementById("LS").checked){
    linfo = "Les sims est un sandbox";
  }
  if (document.getElementById("COD").checked){
    linfo = "Call of Duty est un TPS";
  }
  if (document.getElementById("CS").checked){
    linfo = "Counter-Strike est un TPS";
  }
  if (document.getElementById("LOL").checked){
    linfo = "League of Legends est un MOBA";
  }
  if (document.getElementById("VALO").checked){
    linfo = "Valorant est un TPS";
  }
  document.getElementById("infoJV").textContent = linfo;
}

function infom() {
  var linfom = "";
  if (document.getElementById("Op").checked){
    linfom = "One Piece est un Shonen";
  }
  if (document.getElementById("g13").checked){
    linfom = "Golgo 13 est un Seijin";
  }
  if (document.getElementById("Dc").checked){
    linfom = "Détective Conan est un Shonen";
  }
  if (document.getElementById("Db").checked){
    linfom = "Dragon Ball est un Shonen";
  }
  if (document.getElementById("Nt").checked){
    linfom = "Naruto est un Shonen";
  }
  document.getElementById("infoM").textContent = linfom;
}