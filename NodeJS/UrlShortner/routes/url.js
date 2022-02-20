const express = require('express');
const router = express.Router();
const validUrl = require('valid-url');
const sid = require('shortid');
const config = require('config');
const Url = require('../models/url');

// @route POST /api/url/shorten
// @desc  Creaet Short URL

router.post('/shorten',async (req,res)=>{
    const {longUrl} = req.body;
    const baseUrl = config.get('baseURL');
    
    if(!validUrl.isUri(baseUrl)){
        return res.status(401).json('Invalid base url');
    }

    //Create url code
    const urlCode = sid.generate();

    //Check long url
    if(validUrl.isUri(longUrl)){
        try{
            let url = await Url.findOne({longUrl});
            if(url){
                res.json(url);
            }else{
                const shortUrl = baseUrl + '/' + urlCode;
                url = new Url({
                    longUrl,
                    shortUrl,
                    urlCode,
                    date : new Date()
                });

                await url.save();
                res.json(url);
            }
        }catch(err){
            console.error(`Error : ${err.message}`);
            res.status(500).json('Server error');
            // process.end(1);
        }
    }else{
        res.status(401).json('Invalid long url');
    }
});


module.exports  = router;