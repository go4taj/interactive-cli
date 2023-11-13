#! /usr/bin/env node 
import utils from './utils.js' 
import {translate} from '@vitalets/google-translate-api'
import inquirer from 'inquirer';

const prompt = inquirer.createPromptModule();
prompt({type:'list',name:'language',choices:Array.from(utils.languages.keys())}).then((target)=>{
    prompt({type:'input',name:'input',message:"Enter the text to translate",choices:Array.from(utils.languages.keys())}).then((text)=>{
        let language = utils.parseLanguage(target.language);
        translate(text.input, {to: language}).then(res => {
            console.log("\n" + "\n" + res.text + "\n" + "\n")
        }).catch(err => {
            console.error(err); 
        });
    });
});
