let express = require('express');
let router = express.Router();

module.exports.displayHomePage= (req,res,next)=> {
    res.render('index', { title: 'Home' });
  }

  module.exports.displayAboutPage=(req,res,next)=> {
    res.render('index', { title: 'About' });
  }

  module.exports.displayProductsPage=(req,res,next)=> {
    res.render('index', { title: 'Products' });
  }

  module.exports.displayServicesPage= (req,res,next)=> {
    res.render('index', { title: 'Services' });
  }

  module.exports.diplayContactPage=(req,res,next)=> {
    res.render('index', { title: 'Contact' });
  }

  module.exports.displayLoginPage=(req,res,next)=>{

  }

  module.exports.processLoginPage=(req,res,next)=>{

  }
  module.exports.displayRegisterPage=(req,res,next)=>{

  }
  module.exports.processRegisterPage=(req,res,next)=>{

  }
  module.exports.performLogout=(req,res,next)=>{

  }