const zod = require('zod');

const imageValidation  = zod.object({
    body: zod.object({
        outfitId: zod.string(),
        imageUrl: zod.string(),
        imageName: zod.string().email(),
        imageSrc: zod.string(),
        imageType: zod.string(),
        imageSize: zod.string(),
        statusId:zod.string()
    })
})

module.exports  = imageValidation