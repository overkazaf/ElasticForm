import Immutable from 'immutable';
import exportUtil from '../utils/export.util.js';
import CryptoJS from 'crypto-js';


const $$initState = Immutable.fromJS({
    page: {},
});

const SECREAT_KEY_FOR_TESTING = 'abcd';
const DYNAMIC_SALT_FOR_TESTING = '1234'; // fetching from remote server, will be unique at some predefined specific levels
const TARGET_KEY_FOR_TESTING = `${SECREAT_KEY_FOR_TESTING}_${DYNAMIC_SALT_FOR_TESTING}`;

export const menubarReducer = ($$state = $$initState, action) => {
    console.log('action in menubarReducer', action);
    
    switch (action.type) {
        case 'MENUBAR_COMMAND': {
        	let {
        		key,
        		keyPath,
        		item,
        		domEvent,
        	} = action.payload;

        	return execCommand(key, $$state);
        }
        case 'PAGE_DATA_UPDATE': {
            let {
                page,
            } = action.payload;

            return $$state.set('page', page);
        }
        case 'FORM_EXPORT': {

            console.log('form exporting', $$state.toJS());
            return $$state;
        }
        default: return $$state;
    }
};


function importFile() {
    let dialogId = 'import_file_dialog';
    let f = document.getElementById(dialogId);
    if (!f) {
        f = document.createElement('input');
        f.setAttribute('type', 'file');
        f.setAttribute('id', 'import_file_dialog');
        // f.setAttribute('accept', 'ifd');

        f.style.display = 'none';
        
        document.body.appendChild(f);

        f.addEventListener('change', function() {
            let file = this.files[0];
            if (window.FileReader) {    
                let reader = new FileReader();    
                reader.readAsText(file);    
                //监听文件读取结束后事件    
                reader.onloadend = function (e) {   
                    
                    try {

                        // Decrypt 
                        let bytes  = CryptoJS.AES.decrypt(e.target.result, TARGET_KEY_FOR_TESTING);
                        let pageJson = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

                        console.log('imported pageJson', pageJson);
                        window.pageJson = pageJson;
                    } catch(e) {
                        alert("Error occurs while parsing file...", JSON.stringify(e));
                    }

                    console.log('cleaning file input...');
                    document.body.removeChild(f);
                }
            } 
        });
    }

    f.click();
}

function exportFile(json, fileName = `exported_${+new Date()}.ifd`) {
        
    console.log('pageJson', json);

    let tinyModel = exportUtil.pickTinyModel(json);

    // 加密， 压缩丑化， 写文件
    // Encrypt 
    let ciphertext = CryptoJS.AES.encrypt(JSON.stringify(tinyModel), TARGET_KEY_FOR_TESTING);
    

    console.log('ciphertext::', ciphertext);

    // 丢到后端进行压缩处理，然后再丢回来，写成本地文件
    // let compressedCodes = UglifyJS.minify(ciphertext);
    
    // console.log('compressedCodes::', compressedCodes);

    let blob = new Blob([ciphertext], {type: "text/plain"});
    let fileObjUrl = URL.createObjectURL(blob);

    // client side exporting
    let tagA = document.createElement('a');
    tagA.setAttribute('download', fileName);
    tagA.setAttribute('id', `json_file_exported`);
    tagA.setAttribute('href', fileObjUrl);
    tagA.setAttribute('target', '_blank');

    document.body.appendChild(tagA);

    tagA.click()
}

function execCommand(mode, $$state) {
    alert('mode::' + mode);
	switch(mode) {
        case 'import': {
            importFile();
            break;
        }
		case 'export': {
            let pageJson = $$state.get('page').toJS();
            exportFile(pageJson);
            break;
		}
	}

    return $$state;
}