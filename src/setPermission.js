function setPermissions (permissions) {
  let type = Object.prototype.toString.call(permissions);
  if (type == '[object String]') {
    sessionStorage.setItem("canvas-button-premissions", permissions);
  } else {
    sessionStorage.setItem("canvas-button-premissions", JSON.stringify(permissions));
  }
}

export default setPermissions