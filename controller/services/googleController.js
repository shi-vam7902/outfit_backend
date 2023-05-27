const fs = require('fs');
const path = require('path')
const readLine = require('readline')
const {google} = require('googleapis');
const GOOGLE_DRIVE_FOLDER_ID = "1PSv0JuWISQiikg1ZkkgT9Yd2DtbmEn_R";
const KEYFILEPATH = './googlekey.json'


async function getAllFileFromGoogleDrive(){
    const auth = new google.auth.GoogleAuth({
        keyFile:KEYFILEPATH,
        scopes:["https://www.googleapis.com/auth/drive"],
    });

    const driveService = google.drive({version:"v3",auth});
    const response = await driveService.files.list({
        q:`'${GOOGLE_DRIVE_FOLDER_ID}' in parents`,
        fields: "files(id,name)",
    })
    return response.data.files;
}

async function uploadFile(file){
    var p = path.basename(file);
    console.log(p);

    const auth = new google.auth.GoogleAuth({
        keyFile: KEYFILEPATH,
        scopes:['https://www.googleapis.com/auth/drive']
    })
    const driveService = google.drive(
        {version:'v3',auth});
        const fileMetadata = {
            'name':p,
            'parents':[GOOGLE_DRIVE_FOLDER_ID]
        }
        const media ={
            mimeType:'image/jpeg',
            body:fs.createReadStream(file)
        }
        const response = await driveService.files.create({
            resource:fileMetadata,
            media:media,
            fields:'id'
        })
        console.log(response);
        return response.data.id;
}
 
module.exports = {uploadFile,getAllFileFromGoogleDrive}