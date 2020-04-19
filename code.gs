function doGet(e) {
  //serve html file
  return HtmlService.createHtmlOutputFromFile('form.html');

}
//get file to drive
function uploadFiles(blob, name, mimeType) {
  
  
  try {
    //try to upload
    //folder in drive 
    var dropbox = "test_upload_4";
    var folder, folders = DriveApp.getFoldersByName(dropbox);
    //does default file exsited in drive? no? then create it 
    if (folders.hasNext()) {
      folder = folders.next();
    } else {
      folder = DriveApp.createFolder(dropbox);
    }
    
    //why the split?
    
    var blob = blob.split(",")
    var blob = Utilities.newBlob(Utilities.base64Decode(blob[1]),mimeType);//'application/pdf');
    var fileName = blob.setName(name).getName(); 
    var file = folder.createFile(blob); 
    file.setDescription("Uploaded by " + mimeType); 
    return "Et hop: une copie de plus à corriger ! :)" ; //And hop: one more copy to correct!

  } catch (error) {

    return error.toString();
  }
  
}
//credit due
//https://stackoverflow.com/questions/60827372/blank-pdf-files-when-using-google-api/60828884#60828884
