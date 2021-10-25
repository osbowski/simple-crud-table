export default (obj, msg, callback)=>{
    const confirmBox = confirm(msg);
    if (confirmBox) {
      callback
      for (let key in obj) {
        obj[key] = null;
      }
    } else {
      console.log("Contact adding canceled");
    }
}